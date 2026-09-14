/**
 * Helsinki Wild Mushroom Guide - Service Worker
 * Comprehensive Offline Foraging & PWA Caching Engine
 */

const CACHE_VERSION = 'v1';
const CACHE_STATIC_NAME = `helsinki-mushroom-core-${CACHE_VERSION}`;
const CACHE_IMAGE_NAME = `helsinki-mushroom-images-${CACHE_VERSION}`;

const CORE_ASSETS = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'i18n.js',
  'handbook_data.js',
  'overview.html',
  'manifest.webmanifest',
  'icon.svg',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
  'images/manifest.json',
  'images/gallery_manifest.json',
  'images/images_list.json'
];

// Install: Pre-cache essential app shell and database assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(async (cache) => {
      const results = await Promise.allSettled(
        CORE_ASSETS.map(async (url) => {
          try {
            const response = await fetch(url, { cache: 'reload' });
            if (response.ok) {
              await cache.put(url, response);
            }
          } catch (err) {
            console.warn('[SW] Core precache item failed:', url, err);
          }
        })
      );
      console.log('[SW] Core precache complete');
    })
  );
  self.skipWaiting();
});

// Activate: Purge obsolete cache stores and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_IMAGE_NAME) {
            console.log('[SW] Removing old cache store:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Helper: Normalize URL to relative path for cache lookup
function normalizeUrl(url) {
  try {
    const parsed = new URL(url);
    // Ignore cache-busting query strings for static files
    if (parsed.search && (parsed.pathname.endsWith('.js') || parsed.pathname.endsWith('.css') || parsed.pathname.endsWith('.html'))) {
      return parsed.origin + parsed.pathname;
    }
  } catch (e) {}
  return url;
}

// Fetch: Strategy dispatch based on resource type
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Only handle http/https requests from our origin or relative paths
  if (!url.protocol.startsWith('http')) return;

  // 1. Navigation requests (HTML pages) - Cache-First / Stale-While-Revalidate
  // Instant load even with spotty 1-bar forest reception
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_STATIC_NAME);
        const cached = await cache.match(req) || await cache.match('index.html') || await cache.match('./');
        
        // Fetch fresh copy in background if online
        const fetchPromise = fetch(req).then((networkRes) => {
          if (networkRes.ok) {
            cache.put(req, networkRes.clone());
          }
          return networkRes;
        }).catch(() => null);

        // If we have cached HTML, return immediately without waiting for slow forest network
        if (cached) {
          event.waitUntil(fetchPromise);
          return cached;
        }

        // Otherwise wait for network or fallback
        const networkRes = await fetchPromise;
        if (networkRes) return networkRes;
        return (await cache.match('index.html')) || (await cache.match('./'));
      })()
    );
    return;
  }

  // 2. Mushroom Images (images/*, .jpg, .png, .svg) - Cache-First with runtime caching
  const isImage = req.destination === 'image' || 
                  url.pathname.includes('/images/') || 
                  url.pathname.match(/\.(jpg|jpeg|png|webp|svg|gif)$/i);

  if (isImage) {
    event.respondWith(
      (async () => {
        const imgCache = await caches.open(CACHE_IMAGE_NAME);
        const staticCache = await caches.open(CACHE_STATIC_NAME);

        // Match normalized URL
        const cached = await imgCache.match(req) || 
                       await imgCache.match(url.pathname) || 
                       await staticCache.match(req);

        if (cached) {
          return cached;
        }

        try {
          const networkRes = await fetch(req);
          if (networkRes && networkRes.ok) {
            imgCache.put(req, networkRes.clone());
          }
          return networkRes;
        } catch (err) {
          // If offline and image not cached, return transparent placeholder or null
          return new Response('', { status: 408, statusText: 'Offline - Image not in cache' });
        }
      })()
    );
    return;
  }

  // 3. Static scripts, styles, data (Stale-While-Revalidate)
  event.respondWith(
    (async () => {
      const staticCache = await caches.open(CACHE_STATIC_NAME);
      const cleanUrl = normalizeUrl(req.url);

      const cached = await staticCache.match(req) || await staticCache.match(cleanUrl);

      const fetchPromise = fetch(req).then((networkRes) => {
        if (networkRes && networkRes.ok) {
          staticCache.put(req, networkRes.clone());
        }
        return networkRes;
      }).catch(() => null);

      if (cached) {
        event.waitUntil(fetchPromise);
        return cached;
      }

      const networkRes = await fetchPromise;
      if (networkRes) return networkRes;
      return cached;
    })()
  );
});

// Messages from UI client
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
