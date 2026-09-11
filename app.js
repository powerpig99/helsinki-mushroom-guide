// Trilingual Dynamic Web Application Logic with Dedicated Mobile Field Guides
// Helsinki Wild Mushroom Guide

let currentTab = "catalog";
let currentLevelFilter = "all";
let currentMonthFilter = null;
let searchQuery = "";
let currentMushroomId = null;

// Lightbox Gallery State (modal fallback)
let currentGallerySpecies = null;
let currentGalleryIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  // Load saved language preference or default to 'en'
  const savedLang = localStorage.getItem("helsinki_mushroom_lang");
  if (savedLang && ["en", "zh", "fi"].includes(savedLang)) {
    I18N.currentLang = savedLang;
  }
  const savedLang2 = localStorage.getItem("helsinki_mushroom_lang2");
  if (savedLang2 && ["en", "zh", "fi"].includes(savedLang2) && savedLang2 !== I18N.currentLang) {
    I18N.secondaryLang = savedLang2;
  } else {
    I18N.secondaryLang = null;
  }

  setupLanguageSwitcher();
  setupTabs();
  setupFilters();
  setupGalleryListeners();
  setupRouter();
  applyLanguage(I18N.currentLang);
  handleRoute();
});

// Setup Language Switcher (Primary L1 & Secondary L2)
function setupLanguageSwitcher() {
  document.querySelectorAll(".primary-lang-row .lang-btn, [data-lang]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      switchAppLanguage(btn.dataset.lang);
    });
  });

  document.querySelectorAll(".secondary-lang-row .lang-btn, [data-lang2]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleSecondaryLanguage(btn.dataset.lang2);
    });
  });
}

function switchAppLanguage(newLang) {
  if (newLang && ["en", "zh", "fi"].includes(newLang)) {
    I18N.currentLang = newLang;
    localStorage.setItem("helsinki_mushroom_lang", newLang);
    // If the secondary language matches the new primary, disable secondary
    if (I18N.secondaryLang === newLang) {
      I18N.secondaryLang = null;
      localStorage.removeItem("helsinki_mushroom_lang2");
    }
    applyLanguage(I18N.currentLang);
  }
}

function toggleSecondaryLanguage(candidateLang) {
  if (!candidateLang) return;
  if (candidateLang === I18N.currentLang) return;
  if (I18N.secondaryLang === candidateLang) {
    // Unclick / toggle off!
    I18N.secondaryLang = null;
    localStorage.removeItem("helsinki_mushroom_lang2");
  } else {
    // Enable second comparison language
    I18N.secondaryLang = candidateLang;
    localStorage.setItem("helsinki_mushroom_lang2", candidateLang);
  }
  applyLanguage(I18N.currentLang);
}

// Render Bilingual Text Block Helper
function renderBilingualText(obj, lang1, lang2) {
  if (!obj) return "";
  const text1 = typeof obj === "string" ? obj : (obj[lang1] || obj.en || "");
  if (!lang2 || lang1 === lang2) {
    return `<p class="bilingual-text">${text1}</p>`;
  }
  const text2 = typeof obj === "string" ? obj : (obj[lang2] || obj.en || "");

  return `
    <div class="bilingual-container">
      <div class="bilingual-primary"><p>${text1}</p></div>
      <div class="bilingual-secondary"><p>${text2}</p></div>
    </div>
  `;
}

// Foraging Spot Google Maps Patterns (Compound & specific phrases listed first)
const FORAGING_SPOT_PATTERNS = [
  // Compound / specific location phrases first (longest match)
  { pattern: /Keskuspuisto \(Paloheinä & Pirkkola\)/g, url: "https://www.google.com/maps/search/?api=1&query=Palohein%C3%A4n+maja+Helsinki" },
  { pattern: /Keskuspuiston Paloheinä ja Pirkkola/g, url: "https://www.google.com/maps/search/?api=1&query=Palohein%C3%A4n+maja+Helsinki" },
  { pattern: /中央公园Paloheinä林区/g, url: "https://www.google.com/maps/search/?api=1&query=Palohein%C3%A4n+maja+Helsinki" },
  
  { pattern: /Nuuksio \(around Haukkalampi slopes\)/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },
  { pattern: /Nuuksion Haukkalammen ympäristö/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },
  { pattern: /Nuuksio国家公园Haukkalampi环湖山坡/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },
  
  { pattern: /Luukki forest borders/g, url: "https://www.google.com/maps/search/?api=1&query=Luukin+kartano+Espoo" },
  { pattern: /Luukki forest boundaries/g, url: "https://www.google.com/maps/search/?api=1&query=Luukin+kartano+Espoo" },
  { pattern: /Luukki休闲森林小径旁/g, url: "https://www.google.com/maps/search/?api=1&query=Luukin+kartano+Espoo" },
  { pattern: /北埃斯波Luukki自然林边界/g, url: "https://www.google.com/maps/search/?api=1&query=Luukin+kartano+Espoo" },
  
  { pattern: /Sipoonkorpi \(Bisajärvi and Tasakallio\)/g, url: "https://www.google.com/maps/search/?api=1&query=Kuusij%C3%A4rven+ulkoilualue" },
  { pattern: /Sipoonkorven Bisajärven ja Tasakallion maastot/g, url: "https://www.google.com/maps/search/?api=1&query=Kuusij%C3%A4rven+ulkoilualue" },
  { pattern: /西波国家公园（Sipoonkorpi）的Bisajärvi湖畔林区/g, url: "https://www.google.com/maps/search/?api=1&query=Kuusij%C3%A4rven+ulkoilualue" },
  
  { pattern: /Keskuspuisto \(Pitkäkoski ravines\)/g, url: "https://www.google.com/maps/search/?api=1&query=Pitk%C3%A4kosken+ulkoilumaja" },
  { pattern: /Keskuspuiston Pitkäkosken notkot/g, url: "https://www.google.com/maps/search/?api=1&query=Pitk%C3%A4kosken+ulkoilumaja" },
  { pattern: /中央公园最北段的Pitkäkoski水系幽深峡谷/g, url: "https://www.google.com/maps/search/?api=1&query=Pitk%C3%A4kosken+ulkoilumaja" },
  
  { pattern: /Vaakkoi in North Espoo/g, url: "https://www.google.com/maps/search/?api=1&query=Vaakkoi+Espoo" },
  { pattern: /Vaakkoi Pohjois-Espoossa/g, url: "https://www.google.com/maps/search/?api=1&query=Vaakkoi+Espoo" },
  { pattern: /北埃斯波的Vaakkoi原始云杉林/g, url: "https://www.google.com/maps/search/?api=1&query=Vaakkoi+Espoo" },
  
  { pattern: /Luukki \(around Lake Hauklampi\)/g, url: "https://www.google.com/maps/search/?api=1&query=Luukin+kartano+Espoo" },
  { pattern: /Luukin Hauklammen ympäristö/g, url: "https://www.google.com/maps/search/?api=1&query=Luukin+kartano+Espoo" },
  { pattern: /北埃斯波Luukki湖区周边林地/g, url: "https://www.google.com/maps/search/?api=1&query=Luukin+kartano+Espoo" },
  
  { pattern: /Sipoonkorpi \(Bakunkärr\)/g, url: "https://www.google.com/maps/search/?api=1&query=Knutersintie+256+Sipoo" },
  { pattern: /Sipoonkorven Bakunkärr/g, url: "https://www.google.com/maps/search/?api=1&query=Knutersintie+256+Sipoo" },
  { pattern: /西波国家公园Bakunkärr山谷/g, url: "https://www.google.com/maps/search/?api=1&query=Knutersintie+256+Sipoo" },
  
  { pattern: /Nuuksio valleys/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },
  { pattern: /Nuuksion laaksot/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },
  { pattern: /Nuuksio未开发阴湿山沟/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },
  
  { pattern: /Keskuspuisto \(Maunula hazel groves\)/g, url: "https://www.google.com/maps/search/?api=1&query=Maunulan+ulkoilumaja+Helsinki" },
  { pattern: /Keskuspuiston Maunulan pähkinäpensaikot/g, url: "https://www.google.com/maps/search/?api=1&query=Maunulan+ulkoilumaja+Helsinki" },
  { pattern: /中央公园Maunula受保护的欧榛树林外缘/g, url: "https://www.google.com/maps/search/?api=1&query=Maunulan+ulkoilumaja+Helsinki" },
  
  { pattern: /Petikko in Vantaa/g, url: "https://www.google.com/maps/search/?api=1&query=Petikon+ulkoilualue+Vantaa" },
  { pattern: /Petikko Vantaalla/g, url: "https://www.google.com/maps/search/?api=1&query=Petikon+ulkoilualue+Vantaa" },
  { pattern: /万塔Petikko富营养阔叶林/g, url: "https://www.google.com/maps/search/?api=1&query=Petikon+ulkoilualue+Vantaa" },
  
  { pattern: /sheltered deciduous slopes in Nuuksio/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },
  { pattern: /Nuuksion suojaisat rinnelehdot/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },
  { pattern: /Nuuksio背风朝阳的栎树谷地/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },
  
  { pattern: /Sipoonkorpi \(around Kuusijärvi and Bisajärvi\)/g, url: "https://www.google.com/maps/search/?api=1&query=Kuusij%C3%A4rven+ulkoilualue" },
  { pattern: /Sipoonkorpi \(Kuusijärven ja Bisajärven ympäristö\)/g, url: "https://www.google.com/maps/search/?api=1&query=Kuusij%C3%A4rven+ulkoilualue" },
  { pattern: /西波国家公园（Kuusijärvi与Bisajärvi之间的老林区）/g, url: "https://www.google.com/maps/search/?api=1&query=Kuusij%C3%A4rven+ulkoilualue" },
  
  { pattern: /Nuuksio \(Haukkalampi trails\)/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },
  { pattern: /Nuuksion polkuverkosto/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },
  { pattern: /Nuuksio步道深处/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },
  
  { pattern: /Sipoonkorpi rocky crags/g, url: "https://www.google.com/maps/search/?api=1&query=Kuusij%C3%A4rven+ulkoilualue" },
  { pattern: /Sipoonkorven kalliomaastot/g, url: "https://www.google.com/maps/search/?api=1&query=Kuusij%C3%A4rven+ulkoilualue" },
  { pattern: /西波国家公园（Sipoonkorpi）高地岩丘/g, url: "https://www.google.com/maps/search/?api=1&query=Kuusij%C3%A4rven+ulkoilualue" },
  
  { pattern: /Porkkalanniemi pine ridges/g, url: "https://www.google.com/maps/search/?api=1&query=Porkkalanniemi+Kirkkonummi" },
  { pattern: /Porkkalanniemen männiköt/g, url: "https://www.google.com/maps/search/?api=1&query=Porkkalanniemi+Kirkkonummi" },
  { pattern: /Porkkalanniemi海角松林山脊/g, url: "https://www.google.com/maps/search/?api=1&query=Porkkalanniemi+Kirkkonummi" },
  
  { pattern: /Vuosaari coastal woodlands/g, url: "https://www.google.com/maps/search/?api=1&query=Uutelan+luontopolku+Helsinki" },
  { pattern: /Vuosaaren rannikkometsät/g, url: "https://www.google.com/maps/search/?api=1&query=Uutelan+luontopolku+Helsinki" },
  { pattern: /Vuosaari沿海松树步道/g, url: "https://www.google.com/maps/search/?api=1&query=Uutelan+luontopolku+Helsinki" },
  
  { pattern: /Haltiala原始林区/g, url: "https://www.google.com/maps/search/?api=1&query=Haltialan+aarnialue+Helsinki" },
  { pattern: /Uutela海滨步道/g, url: "https://www.google.com/maps/search/?api=1&query=Kahvila+Kampela+Helsinki" },
  { pattern: /中央公园Pitkäkoski/g, url: "https://www.google.com/maps/search/?api=1&query=Pitk%C3%A4kosken+ulkoilumaja" },
  { pattern: /西波国家公园（Sipoonkorpi）/g, url: "https://www.google.com/maps/search/?api=1&query=Kuusij%C3%A4rven+ulkoilualue" },
  { pattern: /西波国家公园/g, url: "https://www.google.com/maps/search/?api=1&query=Kuusij%C3%A4rven+ulkoilualue" },
  { pattern: /Nuuksio sandy tracks/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },
  { pattern: /Nuuksio沙质小径/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },

  // Single word / city park matches
  { pattern: /\bPitkäkoskella\b/g, url: "https://www.google.com/maps/search/?api=1&query=Pitk%C3%A4kosken+ulkoilumaja" },
  { pattern: /\bPitkäkoski\b/g, url: "https://www.google.com/maps/search/?api=1&query=Pitk%C3%A4kosken+ulkoilumaja" },
  { pattern: /\bSipoonkorvessa\b/g, url: "https://www.google.com/maps/search/?api=1&query=Kuusij%C3%A4rven+ulkoilualue" },
  { pattern: /\bSipoonkorpi\b/g, url: "https://www.google.com/maps/search/?api=1&query=Kuusij%C3%A4rven+ulkoilualue" },
  { pattern: /\bNuuksiossa\b/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },
  { pattern: /\bNuuksio\b/g, url: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo" },
  { pattern: /\bLuukissa\b/g, url: "https://www.google.com/maps/search/?api=1&query=Luukin+kartano+Espoo" },
  { pattern: /\bLuukki\b/g, url: "https://www.google.com/maps/search/?api=1&query=Luukin+kartano+Espoo" },
  { pattern: /\bKeskuspuisto\b/g, url: "https://www.google.com/maps/search/?api=1&query=Palohein%C3%A4n+maja+Helsinki" },
  { pattern: /中央公园/g, url: "https://www.google.com/maps/search/?api=1&query=Palohein%C3%A4n+maja+Helsinki" },
  { pattern: /\bHaltiala\b/g, url: "https://www.google.com/maps/search/?api=1&query=Haltialan+aarnialue+Helsinki" },
  { pattern: /\bTöölönlahti\b/g, url: "https://www.google.com/maps/search/?api=1&query=T%C3%B6%C3%B6l%C3%B6nlahti+Helsinki" },
  { pattern: /\bMeilahti\b/g, url: "https://www.google.com/maps/search/?api=1&query=Meilahti+Arboretum+Helsinki" },
  { pattern: /\bSeurasaari\b/g, url: "https://www.google.com/maps/search/?api=1&query=Seurasaari+Helsinki" },
  { pattern: /\bVuosaari\b/g, url: "https://www.google.com/maps/search/?api=1&query=Uutelan+luontopolku+Helsinki" },
  { pattern: /\bUutela\b/g, url: "https://www.google.com/maps/search/?api=1&query=Kahvila+Kampela+Helsinki" },
  { pattern: /\bMatinkylä\b/g, url: "https://www.google.com/maps/search/?api=1&query=Matinkyl%C3%A4+Espoo" },
  { pattern: /\bLauttasaari\b/g, url: "https://www.google.com/maps/search/?api=1&query=Lauttasaari+Helsinki" },
  { pattern: /\bOtaniemi\b/g, url: "https://www.google.com/maps/search/?api=1&query=Otaniemi+Espoo" },
  { pattern: /\bVaakkoissa\b/g, url: "https://www.google.com/maps/search/?api=1&query=Vaakkoi+Espoo" },
  { pattern: /\bVaakkoi\b/g, url: "https://www.google.com/maps/search/?api=1&query=Vaakkoi+Espoo" },
  { pattern: /\bPetikko\b/g, url: "https://www.google.com/maps/search/?api=1&query=Petikon+ulkoilualue+Vantaa" },
  { pattern: /\bPorkkalanniemi\b/g, url: "https://www.google.com/maps/search/?api=1&query=Porkkalanniemi+Kirkkonummi" }
];

// Helper to turn prime foraging spot names directly into Google Maps links
function linkifyForagingSpots(text, lang) {
  if (!text) return "";
  let counter = 0;
  const tokens = {};
  
  for (const item of FORAGING_SPOT_PATTERNS) {
    text = text.replace(item.pattern, (match) => {
      const cleanMatch = match.trim();
      const token = `__MAP_LINK_${counter++}__`;
      let title = `Open ${cleanMatch} in Google Maps`;
      if (lang === "zh") title = `在 Google 地图中打开 ${cleanMatch}`;
      else if (lang === "fi") title = `Avaa ${cleanMatch} Google Mapsissa`;
      
      tokens[token] = `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="spot-map-link" title="${title}">${cleanMatch}</a>`;
      return token;
    });
  }
  
  for (const [token, html] of Object.entries(tokens)) {
    text = text.replaceAll(token, html);
  }
  return text;
}

// Render Where & When Section with Direct Google Maps Links on Prime Spots
function renderWhereWhenSection(whereWhenObj, lang1, lang2) {
  if (!whereWhenObj) return "";
  const text1 = linkifyForagingSpots(whereWhenObj[lang1] || whereWhenObj.en || "", lang1);
  if (!lang2 || lang1 === lang2) {
    return `<p class="bilingual-text">${text1}</p>`;
  }
  const text2 = linkifyForagingSpots(whereWhenObj[lang2] || whereWhenObj.en || "", lang2);

  return `
    <div class="bilingual-container">
      <div class="bilingual-primary"><p>${text1}</p></div>
      <div class="bilingual-secondary"><p>${text2}</p></div>
    </div>
  `;
}

// Render Prime Foraging Location Card with Popular Trail & Trailhead Link
function renderPrimeLocationCard(sp, lang, lang2, t) {
  const locKey = sp.primeLocationKey || (I18N.speciesLocations && I18N.speciesLocations[sp.id]);
  if (!locKey || !I18N.foragingLocations || !I18N.foragingLocations[locKey]) return "";
  const loc = I18N.foragingLocations[locKey];

  return `
    <div class="prime-location-card">
      <div class="prime-location-header">
        <div class="prime-location-area-box">
          <div class="prime-location-badge">${t.primeLocationTitle || "Prime Foraging Trailhead"}</div>
          <div class="prime-location-area">📍 ${loc.areaName[lang] || loc.areaName.en}</div>
          ${lang2 && loc.areaName[lang2] ? `<div class="prime-location-area-secondary">${loc.areaName[lang2]}</div>` : ""}
        </div>
        <a href="${loc.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-location-map" title="${loc.startingPoint[lang] || loc.startingPoint.en}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
          <span>${t.openMapBtn || "Directions"}</span>
        </a>
      </div>
      <div class="prime-location-details">
        <div class="prime-location-row">
          <span class="prime-item-label">${t.popularTrailLabel || "Popular Trail"}:</span>
          <span class="prime-item-value">${loc.popularTrail[lang] || loc.popularTrail.en}</span>
          ${lang2 && loc.popularTrail[lang2] ? `<div class="prime-item-secondary">${loc.popularTrail[lang2]}</div>` : ""}
        </div>
        <div class="prime-location-row" style="margin-top: 0.35rem;">
          <span class="prime-item-label">${t.startingPointLabel || "Starting Point"}:</span>
          <span class="prime-item-value">${loc.startingPoint[lang] || loc.startingPoint.en}</span>
          ${lang2 && loc.startingPoint[lang2] ? `<div class="prime-item-secondary">${loc.startingPoint[lang2]}</div>` : ""}
        </div>
      </div>
    </div>
  `;
}

// Render Authentic YouTube Cooking & Preparation Video Card for Edible Species
function renderCookingVideoCard(sp, lang, lang2, t) {
  if (!I18N.cookingVideos || !I18N.cookingVideos[sp.id]) return "";
  const v = I18N.cookingVideos[sp.id];
  const videoTitle = v.title[lang] || v.title.en;
  const videoTitle2 = (lang2 && lang2 !== lang && v.title[lang2]) ? v.title[lang2] : null;

  let chineseRecipesHtml = "";
  if (v.chineseRecipes && v.chineseRecipes.length > 0) {
    const listHtml = v.chineseRecipes.map(r => {
      const rTitle = r.title[lang] || r.title.en;
      const rTitle2 = (lang2 && lang2 !== lang && r.title[lang2]) ? r.title[lang2] : null;
      return `
        <div class="chinese-recipe-card">
          <div class="chinese-recipe-info">
            <div class="chinese-recipe-title">${rTitle}</div>
            ${rTitle2 ? `<div class="chinese-recipe-title-sub">${rTitle2}</div>` : ""}
            <div class="chinese-recipe-meta">
              <span class="chinese-recipe-author">👨‍🍳 ${r.creator}</span>
              <span class="chinese-recipe-duration">⏱️ ${r.duration}</span>
            </div>
          </div>
          <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="btn-video-link btn-video-link-sm" title="${rTitle}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="color: #dc2626;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span>${t.watchVideoBtn || "Watch on YouTube"}</span>
          </a>
        </div>
      `;
    }).join("");

    chineseRecipesHtml = `
      <div class="chinese-recipes-container">
        <div class="chinese-recipes-header">
          <span class="chinese-recipes-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
            ${t.chineseRecipesTitle || "Featured Chinese Culinary Recipes"}
          </span>
        </div>
        <div class="chinese-recipes-grid">
          ${listHtml}
        </div>
      </div>
    `;
  }

  return `
    <div class="cooking-video-card">
      <div class="cooking-video-content">
        <div class="cooking-video-badge-wrapper">
          <span class="cooking-video-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="color: #dc2626;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            ${t.videoGuideBadge || "Video Tutorial"}
          </span>
        </div>
        <div class="cooking-video-title">${videoTitle}</div>
        ${videoTitle2 ? `<div class="cooking-video-title-secondary">${videoTitle2}</div>` : ""}
      </div>
      <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="btn-video-link" title="${videoTitle}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="color: #dc2626;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        <span>${t.watchVideoBtn || "Watch on YouTube"}</span>
      </a>
    </div>
    ${chineseRecipesHtml}
  `;
}

// Apply selected language across the entire application
function applyLanguage(lang) {
  const t = I18N.ui[lang];
  const lang2 = I18N.secondaryLang;

  // Update active state of primary language buttons
  document.querySelectorAll(".primary-lang-row .lang-btn, [data-lang]").forEach(btn => {
    if (btn.dataset.lang) {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    }
  });

  // Update active state and disabled state of secondary language buttons
  document.querySelectorAll(".secondary-lang-row .lang-btn, [data-lang2]").forEach(btn => {
    if (btn.dataset.lang2) {
      const isSelected = btn.dataset.lang2 === lang2;
      const isSameAsPrimary = btn.dataset.lang2 === lang;
      btn.classList.toggle("active-secondary", isSelected);
      btn.classList.toggle("disabled-lang", isSameAsPrimary);
    }
  });

  // Header & Static Text
  document.getElementById("site-badge").textContent = t.siteBadge;
  document.getElementById("site-title").textContent = t.siteTitle;
  document.getElementById("site-subtitle").innerHTML = t.siteSubtitle;
  document.getElementById("emergency-title").textContent = t.emergencyTitle;
  document.getElementById("emergency-subtitle").innerHTML = t.emergencySubtitle;
  document.getElementById("btn-call-poison").textContent = t.callPoison;
  document.getElementById("btn-call-112").textContent = t.call112;

  // Tabs
  document.getElementById("tab-btn-catalog").textContent = t.tabCatalog;
  document.getElementById("tab-btn-lookalikes").textContent = t.tabLookalikes;
  document.getElementById("tab-btn-cooking").textContent = t.tabCooking;
  document.getElementById("tab-btn-spots").textContent = t.tabSpots;
  document.getElementById("tab-btn-safety").textContent = t.tabSafety;

  // Search Placeholder
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.placeholder = t.searchPlaceholder;
  }

  // Filter Labels
  document.getElementById("label-skill-level").textContent = t.skillLevelLabel;
  document.getElementById("label-month-filter").textContent = t.monthFilterLabel;
  document.getElementById("filter-level-all").textContent = t.allLevels;
  document.getElementById("filter-level-beginner").textContent = t.beginnerLevel;
  document.getElementById("filter-level-intermediate").textContent = t.intermediateLevel;
  document.getElementById("filter-level-advanced").textContent = t.advancedLevel;
  document.getElementById("filter-level-deadly").textContent = t.deadlyLevel;

  // Months
  const monthNames = I18N.months[lang];
  document.querySelectorAll(".month-btn").forEach(btn => {
    const m = parseInt(btn.dataset.month);
    const idx = m - 5;
    if (monthNames[idx]) {
      btn.textContent = monthNames[idx];
    }
  });

  // Footer
  document.getElementById("footer-note").textContent = t.footerNote;
  document.getElementById("footer-disclaimer").textContent = t.footerDisclaimer;

  // Render Dynamic Sections
  renderCatalog();
  renderLookalikes();
  renderCookingGuide();
  renderSpots();
  renderSafety();

  // If currently viewing a mushroom detail page, re-render it in the new language
  if (currentMushroomId) {
    renderMushroomDetail(currentMushroomId);
  }

  // If gallery modal is open, re-render its text
  if (currentGallerySpecies) {
    updateGalleryView();
  }
}

// -------------------------------------------------------------
// Client-Side Routing & View Transitions
// -------------------------------------------------------------
function setupRouter() {
  window.addEventListener("hashchange", handleRoute);
}

function handleRoute() {
  const hash = window.location.hash || "#/";
  if (hash.startsWith("#/mushroom/")) {
    const id = hash.replace("#/mushroom/", "").trim();
    showMushroomDetail(id);
  } else {
    showMainCatalog();
    if (hash === "#/lookalikes") switchTabDirectly("lookalikes");
    else if (hash === "#/cooking") switchTabDirectly("cooking");
    else if (hash === "#/spots") switchTabDirectly("spots");
    else if (hash === "#/safety") switchTabDirectly("safety");
    else switchTabDirectly("catalog");
  }
}

function switchTabDirectly(tabKey) {
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(b => {
    b.classList.toggle("active", b.dataset.tab === tabKey);
  });
  currentTab = tabKey;
  document.getElementById("tab-catalog").style.display = tabKey === "catalog" ? "block" : "none";
  document.getElementById("tab-lookalikes").style.display = tabKey === "lookalikes" ? "block" : "none";
  document.getElementById("tab-cooking").style.display = tabKey === "cooking" ? "block" : "none";
  document.getElementById("tab-spots").style.display = tabKey === "spots" ? "block" : "none";
  document.getElementById("tab-safety").style.display = tabKey === "safety" ? "block" : "none";
}

function navigateToMushroom(id) {
  window.location.hash = "#/mushroom/" + id;
}

function navigateToCatalog() {
  window.location.hash = "#/catalog";
}

function showMushroomDetail(id) {
  currentMushroomId = id;
  document.body.classList.add("viewing-detail");
  const siteHeader = document.getElementById("site-header") || document.querySelector("header");
  const viewMain = document.getElementById("view-main");
  const viewDetail = document.getElementById("view-mushroom-detail");
  if (siteHeader) siteHeader.style.display = "none";
  if (viewMain) viewMain.style.display = "none";
  if (viewDetail) {
    viewDetail.style.display = "block";
    renderMushroomDetail(id);
  }
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function showMainCatalog() {
  currentMushroomId = null;
  document.body.classList.remove("viewing-detail");
  const siteHeader = document.getElementById("site-header") || document.querySelector("header");
  const viewMain = document.getElementById("view-main");
  const viewDetail = document.getElementById("view-mushroom-detail");
  if (siteHeader) siteHeader.style.display = "block";
  if (viewDetail) viewDetail.style.display = "none";
  if (viewMain) viewMain.style.display = "block";
}

// Setup Navigation Tabs
function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      window.location.hash = "#/" + tab;
      switchTabDirectly(tab);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

// Setup Filters
function setupFilters() {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  const levelButtons = document.querySelectorAll(".pill-btn");
  levelButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      levelButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentLevelFilter = btn.dataset.level;
      renderCatalog();
    });
  });

  const monthButtons = document.querySelectorAll(".month-btn");
  monthButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const month = parseInt(btn.dataset.month);
      if (currentMonthFilter === month) {
        currentMonthFilter = null;
        btn.classList.remove("active");
      } else {
        monthButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentMonthFilter = month;
      }
      renderCatalog();
    });
  });
}

// Render Species Catalog
function renderCatalog() {
  const container = document.getElementById("mushroom-grid");
  if (!container) return;

  const lang = I18N.currentLang;
  const t = I18N.ui[lang];

  const filtered = I18N.species.filter(m => {
    if (currentLevelFilter !== "all" && m.level !== currentLevelFilter) {
      return false;
    }
    if (currentMonthFilter && !m.months.includes(currentMonthFilter)) {
      return false;
    }
    if (searchQuery) {
      const en = `${m.names.en.primary} ${m.names.en.local} ${m.names.en.alt}`.toLowerCase();
      const zh = `${m.names.zh.primary} ${m.names.zh.local} ${m.names.zh.alt}`.toLowerCase();
      const fi = `${m.names.fi.primary} ${m.names.fi.local} ${m.names.fi.alt}`.toLowerCase();
      const morph = `${m.morphology[lang]?.underCap} ${m.morphology[lang]?.cap}`.toLowerCase();
      const haystack = `${m.latinName} ${en} ${zh} ${fi} ${morph}`.toLowerCase();
      if (!haystack.includes(searchQuery)) {
        return false;
      }
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: #fff; border-radius: 12px; border: 1px solid #e2e8f0;">
        <p style="font-size: 1.25rem; font-weight: 700; color: #475569;">${t.noResultsTitle}</p>
        <p style="color: #64748b; margin-top: 0.5rem;">${t.noResultsDesc}</p>
      </div>
    `;
    return;
  }

  const monthNames = I18N.months[lang];
  const lang2 = I18N.secondaryLang;

  container.innerHTML = filtered.map(m => {
    let badgeClass = "badge-edible";
    let badgeText = t.badgeEdible;
    if (m.edibility === "choice") { badgeClass = "badge-choice"; badgeText = t.badgeChoice; }
    else if (m.edibility === "good") { badgeClass = "badge-good"; badgeText = t.badgeGood; }
    else if (m.edibility === "parboil") { badgeClass = "badge-parboil"; badgeText = t.badgeParboil; }
    else if (m.edibility === "deadly") { badgeClass = "badge-deadly"; badgeText = t.badgeDeadly; }
    else if (m.edibility === "inedible") { badgeClass = "badge-inedible"; badgeText = t.badgeInedible; }

    const monthTags = m.months.map(num => {
      const idx = num - 5;
      return `<span class="meta-tag">${monthNames[idx] || num}</span>`;
    }).join("");

    const nameData = m.names[lang];
    const nameData2 = (lang2 && lang2 !== lang) ? m.names[lang2] : null;
    const morph = m.morphology[lang];
    const morph2 = (lang2 && lang2 !== lang) ? m.morphology[lang2] : null;
    const photoCount = (m.gallery && m.gallery.length) ? m.gallery.length : 4;

    return `
      <a href="#/mushroom/${m.id}" class="mushroom-card" onclick="navigateToMushroom('${m.id}')" style="cursor: pointer; text-decoration: none; color: inherit;" title="${t.viewDetails}: ${nameData.primary}">
        <div class="card-image-wrap">
          <img src="${m.image}" alt="${nameData.primary}" loading="lazy">
          <div class="card-badges">
            <span class="badge ${badgeClass}">${badgeText}</span>
          </div>
          ${m.rating ? `<div class="star-rating">${m.rating}</div>` : ""}
        </div>
        <div class="card-body">
          <div class="card-title-area">
            <h3 class="card-finnish-name">
              ${nameData.primary}
              ${nameData2 ? `<span class="card-secondary-title">${nameData2.primary}</span>` : ""}
            </h3>
            <div class="card-latin-name">${m.latinName}</div>
            <div class="card-english-name">
              ${nameData.local} • <em>${nameData.alt}</em>
              ${nameData2 ? ` <span class="card-secondary-alias">| ${nameData2.local}</span>` : ""}
            </div>
          </div>

          <div class="meta-row">
            <span class="meta-tag" style="background:#f1f5f9; color:#475569;">📍 ${m.habitatName[lang]}${nameData2 ? ` / ${m.habitatName[lang2]}` : ""}</span>
            <div style="display:flex; gap:0.25rem;">${monthTags}</div>
          </div>

          <div class="card-morphology">
            <div class="morphology-item">
              <span class="morphology-label">${t.underCapLabel}</span>
              <span><strong>${morph.underCap}</strong></span>
              ${morph2 ? `<div class="card-morph-secondary">${morph2.underCap}</div>` : ""}
            </div>
            <div class="morphology-item">
              <span class="morphology-label">${t.capLabel}</span>
              <span>${morph.cap}</span>
              ${morph2 ? `<div class="card-morph-secondary">${morph2.cap}</div>` : ""}
            </div>
            <div class="morphology-item">
              <span class="morphology-label">${t.stemLabel}</span>
              <span>${morph.stem || ""}</span>
              ${morph2 && morph2.stem ? `<div class="card-morph-secondary">${morph2.stem}</div>` : ""}
            </div>
            <div class="morphology-item">
              <span class="morphology-label">${t.odorLabel}</span>
              <span>${morph.odor || ""}</span>
              ${morph2 && morph2.odor ? `<div class="card-morph-secondary">${morph2.odor}</div>` : ""}
            </div>
          </div>

          ${m.warning && m.warning[lang] ? `<div class="card-alert">⚠️ ${m.warning[lang]}${nameData2 && m.warning[lang2] ? `<div class="card-secondary-alert" style="color:#7f1d1d; font-size:0.8rem; margin-top:3px;">${m.warning[lang2]}</div>` : ""}</div>` : ""}
          ${m.culinaryTip && m.culinaryTip[lang] ? `<div class="card-tip">🍳 ${m.culinaryTip[lang]}${nameData2 && m.culinaryTip[lang2] ? `<div class="card-secondary-tip" style="color:#78350f; font-size:0.8rem; margin-top:3px;">${m.culinaryTip[lang2]}</div>` : ""}</div>` : ""}
          ${m.lookalikeAlert && m.lookalikeAlert[lang] ? `<div style="background:#fef3c7; color:#92400e; padding:0.5rem; border-radius:6px; font-size:0.8rem; margin-bottom:0.75rem;">🔍 ${m.lookalikeAlert[lang]}${nameData2 && m.lookalikeAlert[lang2] ? `<div style="color:#78350f; font-size:0.78rem; margin-top:2px;">${m.lookalikeAlert[lang2]}</div>` : ""}</div>` : ""}

          <div class="card-footer">
            <span>${t.refId} ${m.id}</span>
          </div>
        </div>
      </a>
    `;
  }).join("");
}

// -------------------------------------------------------------
// Dedicated Mushroom Field Guide Detail View & Swipe Carousel
// -------------------------------------------------------------
function renderMushroomDetail(speciesId) {
  const container = document.getElementById("view-mushroom-detail");
  if (!container) return;

  const sp = I18N.species.find(s => s.id === speciesId);
  if (!sp) {
    navigateToCatalog();
    return;
  }

  const lang = I18N.currentLang;
  const lang2 = I18N.secondaryLang;
  const t = I18N.ui[lang];
  const nameData = sp.names[lang] || sp.names.en;
  const nameData2 = (lang2 && lang2 !== lang) ? (sp.names[lang2] || sp.names.en) : null;
  const morph = sp.morphology[lang] || sp.morphology.en;
  const morph2 = (lang2 && lang2 !== lang) ? (sp.morphology[lang2] || sp.morphology.en) : null;
  const monthNames = I18N.months[lang];

  // Edibility Badge determination
  let badgeClass = "badge-edible";
  let badgeText = t.badgeEdible;
  if (sp.edibility === "choice") { badgeClass = "badge-choice"; badgeText = t.badgeChoice; }
  else if (sp.edibility === "good") { badgeClass = "badge-good"; badgeText = t.badgeGood; }
  else if (sp.edibility === "parboil") { badgeClass = "badge-parboil"; badgeText = t.badgeParboil; }
  else if (sp.edibility === "deadly") { badgeClass = "badge-deadly"; badgeText = t.badgeDeadly; }
  else if (sp.edibility === "inedible") { badgeClass = "badge-inedible"; badgeText = t.badgeInedible; }

  // Skill level label determination
  let levelText = t.beginnerLevel;
  if (sp.level === "intermediate") levelText = t.intermediateLevel;
  else if (sp.level === "advanced") levelText = t.advancedLevel;
  else if (sp.level === "deadly") levelText = t.deadlyLevel;

  // Fruiting months tags
  const monthTags = sp.months.map(num => {
    const idx = num - 5;
    return `<span class="meta-tag active" style="background:#1e3a2b; color:#fff; font-weight:700;">${monthNames[idx] || num}</span>`;
  }).join("");

  // Photos for carousel (all 4 verified botanical photos)
  const photos = (sp.gallery && sp.gallery.length) ? sp.gallery : [
    { file: sp.image, caption: { en: "Field observation", zh: "野外生境观察", fi: "Luontohavainto" }, attribution: "Field observation" }
  ];

  // Previous & Next navigation
  const currentIndex = I18N.species.findIndex(s => s.id === speciesId);
  const prevSpecies = I18N.species[(currentIndex - 1 + I18N.species.length) % I18N.species.length];
  const nextSpecies = I18N.species[(currentIndex + 1) % I18N.species.length];

  // Danger alert section if deadly or poisonous
  const isDeadly = sp.level === "deadly" || sp.edibility === "deadly";
  const isInedibleOrToxic = isDeadly || sp.edibility === "inedible" || (sp.rating && sp.rating.includes("☠️"));

  const dangerBannerHtml = isInedibleOrToxic ? `
    <div class="detail-danger-card">
      <div class="detail-danger-title">
        <span>🚨 ${isDeadly ? (lang === 'zh' ? '【致命剧毒！严禁采食】' : (lang === 'fi' ? 'TAPPAVAN MYRKYLLINEN' : 'DEADLY TOXIC SPECIMEN')) : (lang === 'zh' ? '【不可食用 / 极苦或有毒】' : (lang === 'fi' ? 'EI SYÖTÄVÄ / MYRKYLLINEN' : 'INEDIBLE / TOXIC'))}</span>
        ${nameData2 ? `<span style="font-size:0.85rem; font-weight:700; color:#b91c1c; margin-left:0.5rem;">(${isDeadly ? (lang2 === 'zh' ? '【致命剧毒】' : (lang2 === 'fi' ? 'TAPPAVAN MYRKYLLINEN' : 'DEADLY TOXIC')) : (lang2 === 'zh' ? '【不可食用】' : (lang2 === 'fi' ? 'EI SYÖTÄVÄ' : 'INEDIBLE'))})</span>` : ""}
      </div>
      <div style="margin-bottom: 1rem;">
        ${renderBilingualText(sp.warning, lang, lang2)}
      </div>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        <a href="tel:0800147111" class="emergency-btn" style="background:#dc2626; color:#fff; text-decoration:none; display:inline-flex; align-items:center; gap:0.35rem; font-weight:700; padding:0.6rem 1.2rem; border-radius:8px;">📞 芬兰中毒中心 / Poison Center: 0800 147 111</a>
        <a href="tel:112" class="emergency-btn" style="background:#7f1d1d; color:#fff; text-decoration:none; display:inline-flex; align-items:center; gap:0.35rem; font-weight:700; padding:0.6rem 1.2rem; border-radius:8px;">🚨 紧急急救 / Emergency: 112</a>
      </div>
    </div>
  ` : "";

  // Lookalike species interactive cards with images and links
  const lookalikeIds = (I18N.lookalikeMap && I18N.lookalikeMap[sp.id]) ? I18N.lookalikeMap[sp.id] : [];
  const lookalikeSpeciesList = lookalikeIds.map(id => I18N.species.find(s => s.id === id)).filter(Boolean);

  const lookalikesCardsHtml = lookalikeSpeciesList.length > 0 ? `
    <div class="lookalike-cards-grid">
      ${lookalikeSpeciesList.map(lk => {
        const lkName = lk.names[lang] || lk.names.en;
        const lkName2 = (lang2 && lang2 !== lang) ? (lk.names[lang2] || lk.names.en) : null;
        let lkBadgeClass = "badge-edible";
        let lkBadgeText = t.badgeEdible;
        if (lk.edibility === "choice") { lkBadgeClass = "badge-choice"; lkBadgeText = t.badgeChoice; }
        else if (lk.edibility === "good") { lkBadgeClass = "badge-good"; lkBadgeText = t.badgeGood; }
        else if (lk.edibility === "parboil") { lkBadgeClass = "badge-parboil"; lkBadgeText = t.badgeParboil; }
        else if (lk.edibility === "deadly") { lkBadgeClass = "badge-deadly"; lkBadgeText = t.badgeDeadly; }
        else if (lk.edibility === "inedible") { lkBadgeClass = "badge-inedible"; lkBadgeText = t.badgeInedible; }

        return `
          <a href="#/mushroom/${lk.id}" class="lookalike-interactive-card" onclick="navigateToMushroom('${lk.id}')">
            <div class="lookalike-img-container">
              <img src="${lk.image}" alt="${lkName.primary}" loading="lazy">
              <span class="badge ${lkBadgeClass}">${lkBadgeText}</span>
              ${lk.rating ? `<div class="star-rating">${lk.rating}</div>` : ""}
            </div>
            <div class="lookalike-content">
              <div class="lookalike-tag-header">
                <span class="lookalike-badge">⚠️ ${lang === 'zh' ? '易混淆物种' : (lang === 'fi' ? 'Näköislaji' : 'Lookalike Species')}</span>
              </div>
              <h3 class="lookalike-title">
                ${lkName.primary}
                ${lkName2 ? `<span class="lookalike-sub-title">(${lkName2.primary})</span>` : ""}
              </h3>
              <div class="lookalike-subtitle">${lk.latinName} • <em>${lkName.local}</em></div>
              <div class="lookalike-morph-snippet">
                <strong>${t.underCapLabel}</strong> ${lk.morphology[lang]?.underCap || ""}
                ${(lk.morphology[lang2]?.underCap) ? `<div style="color:#64748b; font-size:0.8rem; margin-top:2px;">${lk.morphology[lang2].underCap}</div>` : ""}
              </div>
            </div>
          </a>
        `;
      }).join("")}
    </div>
  ` : "";

  // Render Full Field Guide Detail Layout
  container.innerHTML = `
    <!-- Sticky Top Navigation Bar with Flags Only & Optional Second Language -->
    <div class="detail-top-bar">
      <div class="detail-top-bar-left">
        <button class="btn-back-catalog" onclick="navigateToCatalog()" aria-label="Back" title="Back to Species Guide">
          <svg class="back-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span class="btn-back-label">Back</span>
        </button>
        <div class="lang-switcher-wrapper detail-lang-wrapper" aria-label="Select Language">
          <div class="lang-row primary-lang-row">
            <button class="lang-btn ${lang === 'en' ? 'active' : ''}" onclick="switchAppLanguage('en')" title="English">🇬🇧</button>
            <button class="lang-btn ${lang === 'zh' ? 'active' : ''}" onclick="switchAppLanguage('zh')" title="中文">🇨🇳</button>
            <button class="lang-btn ${lang === 'fi' ? 'active' : ''}" onclick="switchAppLanguage('fi')" title="Suomi">🇫🇮</button>
          </div>
          <div class="lang-row secondary-lang-row">
            <button class="lang-btn secondary-btn ${lang2 === 'en' ? 'active-secondary' : ''} ${lang === 'en' ? 'disabled-lang' : ''}" onclick="toggleSecondaryLanguage('en')" title="Compare English (Click to toggle)">🇬🇧</button>
            <button class="lang-btn secondary-btn ${lang2 === 'zh' ? 'active-secondary' : ''} ${lang === 'zh' ? 'disabled-lang' : ''}" onclick="toggleSecondaryLanguage('zh')" title="与中文对照 (点击开启/取消)">🇨🇳</button>
            <button class="lang-btn secondary-btn ${lang2 === 'fi' ? 'active-secondary' : ''} ${lang === 'fi' ? 'disabled-lang' : ''}" onclick="toggleSecondaryLanguage('fi')" title="Vertaa suomeksi (Klikkaa päälle/pois)">🇫🇮</button>
          </div>
        </div>
      </div>
      <div class="detail-badge-group">
        <span class="badge ${badgeClass}">${badgeText}</span>
      </div>
    </div>

    <!-- Top Swipeable Photo Carousel -->
    <div class="detail-carousel-card">
      <div class="carousel-viewport-wrapper">
        <div class="detail-carousel-track" id="detail-carousel-track">
          ${photos.map((p, idx) => {
            const capText = (p.caption && p.caption[lang]) ? p.caption[lang] : (p.caption?.en || "Botanical specimen");
            return `
              <div class="detail-carousel-slide" data-index="${idx}">
                <img src="${p.file}" alt="${nameData.primary} photo ${idx + 1}" loading="${idx === 0 ? 'eager' : 'lazy'}">
                <div class="slide-caption-overlay">
                  <div class="slide-caption-title">${capText}</div>
                  <div class="slide-photo-count">${idx + 1} / ${photos.length}</div>
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <!-- Star Rating on Top-Right of Hero Picture -->
        ${sp.rating ? `<div class="star-rating detail-photo-star">${sp.rating}</div>` : ""}

        <!-- Arrow Buttons for Desktop Navigation -->
        <button class="carousel-arrow-btn prev" onclick="slideDetailCarousel(-1)" aria-label="Previous photo">‹</button>
        <button class="carousel-arrow-btn next" onclick="slideDetailCarousel(1)" aria-label="Next photo">›</button>
      </div>

      <!-- Carousel Dots Indicator -->
      <div class="detail-carousel-footer">
        <div class="carousel-dots-container" id="detail-carousel-dots">
          ${photos.map((_, idx) => `
            <button class="carousel-dot ${idx === 0 ? 'active' : ''}" 
                    data-index="${idx}" 
                    onclick="scrollDetailCarousel(${idx})" 
                    aria-label="Photo ${idx + 1}"></button>
          `).join("")}
        </div>
      </div>
    </div>

    <!-- Species Header & Taxonomy Meta -->
    <div class="detail-header-card">
      <div class="detail-title-row">
        <div>
          <h1 class="detail-species-primary-name">
            ${nameData.primary}
            ${nameData2 ? `<span class="detail-species-secondary-name">${nameData2.primary}</span>` : ""}
          </h1>
          <div class="detail-species-latin-name">${sp.latinName}</div>
          <div class="detail-species-alt-names">
            ${nameData.local} • <em>${nameData.alt}</em>
            ${nameData2 ? ` <span style="color:#64748b; font-weight:400;">| ${nameData2.local}</span>` : ""}
          </div>
        </div>
        <div class="detail-badge-group">
          <span class="badge ${badgeClass}" style="font-size:0.9rem; padding:0.35rem 0.85rem;">${badgeText}</span>
        </div>
      </div>

      <div class="detail-meta-bar">
        <div>
          <strong>📍 ${lang === 'zh' ? '生境类型' : (lang === 'fi' ? 'Elinympäristö' : 'Habitat')}:</strong> 
          ${sp.habitatName[lang]}
          ${nameData2 ? ` / <span style="color:#64748b;">${sp.habitatName[lang2]}</span>` : ""}
        </div>
        <div style="display:flex; align-items:center; gap:0.35rem;">
          <strong>📅 ${lang === 'zh' ? '出菇月份' : (lang === 'fi' ? 'Satosenssi' : 'Fruiting Season')}:</strong>
          <div style="display:flex; gap:0.25rem;">${monthTags}</div>
        </div>
        <div><strong>🎯 ${t.skillLevelLabel}</strong> ${levelText}</div>
        <div><strong>🆔 ${t.refId}</strong> ${sp.id}</div>
      </div>
    </div>

    ${dangerBannerHtml}

    <!-- SECTION 1: When & Where to Find (Helsinki & Uusimaa Specific) -->
    <div class="detail-section-card">
      <h2 class="detail-section-title">${t.whereWhenTitle}</h2>
      <div class="detail-section-body">
        ${renderWhereWhenSection(sp.whereWhen, lang, lang2)}
      </div>
    </div>

    <!-- SECTION 2: Hunter's Search Tactics & Eye-Training -->
    <div class="detail-section-card">
      <h2 class="detail-section-title">${t.searchTacticsTitle}</h2>
      <div class="detail-section-body">
        ${renderBilingualText(sp.searchTactics, lang, lang2)}
      </div>
    </div>

    <!-- SECTION 3: Field Diagnostic Anatomy Checklist -->
    <div class="detail-section-card">
      <h2 class="detail-section-title">${t.anatomyTitle}</h2>
      <div class="diagnostic-anatomy-grid">
        <div class="diagnostic-anatomy-item">
          <div class="diagnostic-anatomy-label">${t.underCapLabel}</div>
          <div class="diagnostic-anatomy-value">
            <div><strong>${morph.underCap}</strong></div>
            ${morph2 ? `<div class="secondary-trait-text">${morph2.underCap}</div>` : ""}
          </div>
        </div>
        <div class="diagnostic-anatomy-item">
          <div class="diagnostic-anatomy-label">${t.capLabel}</div>
          <div class="diagnostic-anatomy-value">
            <div>${morph.cap}</div>
            ${morph2 ? `<div class="secondary-trait-text">${morph2.cap}</div>` : ""}
          </div>
        </div>
        <div class="diagnostic-anatomy-item">
          <div class="diagnostic-anatomy-label">${t.stemLabel}</div>
          <div class="diagnostic-anatomy-value">
            <div>${morph.stem || "—"}</div>
            ${morph2 && morph2.stem ? `<div class="secondary-trait-text">${morph2.stem}</div>` : ""}
          </div>
        </div>
        <div class="diagnostic-anatomy-item">
          <div class="diagnostic-anatomy-label">${t.odorLabel}</div>
          <div class="diagnostic-anatomy-value">
            <div>${morph.odor || "—"}</div>
            ${morph2 && morph2.odor ? `<div class="secondary-trait-text">${morph2.odor}</div>` : ""}
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 4: Lookalikes & Deadly Pitfalls with Clickable Photos -->
    <div class="detail-section-card">
      <h2 class="detail-section-title">${t.lookalikesTitle}</h2>
      <div class="detail-section-body" style="margin-bottom: 0.75rem;">
        ${renderBilingualText(sp.lookalikes, lang, lang2)}
      </div>
      ${lookalikesCardsHtml}
    </div>

    <!-- SECTION 5: Preparation, Cooking, Parboiling & Preservation -->
    <div class="detail-section-card">
      <h2 class="detail-section-title">${t.cookingTitle}</h2>
      <div class="detail-section-body" style="margin-bottom: 0.75rem;">
        ${renderBilingualText(sp.cookingGuide, lang, lang2)}
      </div>
      ${renderCookingVideoCard(sp, lang, lang2, t)}
    </div>

    <!-- Bottom Navigation Footer with Previous and Next Species -->
    <div class="detail-action-footer">
      <button class="detail-pager-btn" onclick="navigateToMushroom('${prevSpecies.id}')">
        ← ${prevSpecies.names[lang]?.primary || prevSpecies.latinName}
      </button>

      <button class="detail-pager-btn next-pager" onclick="navigateToMushroom('${nextSpecies.id}')">
        ${nextSpecies.names[lang]?.primary || nextSpecies.latinName} →
      </button>
    </div>
  `;

  // Attach touch/scroll dot tracking to the carousel track
  setupDetailCarousel();
}

// Top Horizontal Swipe Carousel Synchronization
function setupDetailCarousel() {
  const track = document.getElementById("detail-carousel-track");
  if (!track) return;

  const dots = document.querySelectorAll("#detail-carousel-dots .carousel-dot");
  if (!dots.length) return;

  let ticking = false;

  function updateActiveDot() {
    const slideWidth = track.clientWidth || track.offsetWidth || 1;
    const activeIdx = Math.round(track.scrollLeft / slideWidth);
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === activeIdx);
    });
  }

  track.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveDot();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener("resize", () => {
    updateActiveDot();
  }, { passive: true });
}

function scrollDetailCarousel(index) {
  const track = document.getElementById("detail-carousel-track");
  if (!track) return;
  const slideWidth = track.clientWidth || track.offsetWidth;
  track.scrollTo({
    left: index * slideWidth,
    behavior: "smooth"
  });
}

function slideDetailCarousel(direction) {
  const track = document.getElementById("detail-carousel-track");
  if (!track) return;
  const slideWidth = track.clientWidth || track.offsetWidth;
  const currentIdx = Math.round(track.scrollLeft / slideWidth);
  const totalSlides = track.children.length;
  const targetIdx = Math.max(0, Math.min(totalSlides - 1, currentIdx + direction));
  scrollDetailCarousel(targetIdx);
}


// -------------------------------------------------------------
// Interactive Lightbox Gallery System
// -------------------------------------------------------------
function setupGalleryListeners() {
  const backdrop = document.getElementById("gallery-modal-backdrop");
  const closeBtn = document.getElementById("gallery-close-btn");
  const prevBtn = document.getElementById("gallery-nav-prev");
  const nextBtn = document.getElementById("gallery-nav-next");

  if (closeBtn) closeBtn.addEventListener("click", closeGallery);
  if (prevBtn) prevBtn.addEventListener("click", prevGalleryPhoto);
  if (nextBtn) nextBtn.addEventListener("click", nextGalleryPhoto);

  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeGallery();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!currentGallerySpecies) return;
    if (e.key === "Escape") closeGallery();
    else if (e.key === "ArrowLeft") prevGalleryPhoto();
    else if (e.key === "ArrowRight") nextGalleryPhoto();
  });
}

function openGallery(speciesId, photoIndex = 0) {
  const sp = I18N.species.find(s => s.id === speciesId);
  if (!sp) return;

  currentGallerySpecies = sp;
  currentGalleryIndex = photoIndex;

  const backdrop = document.getElementById("gallery-modal-backdrop");
  if (backdrop) {
    backdrop.classList.add("open");
    backdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  updateGalleryView();
}

function closeGallery() {
  currentGallerySpecies = null;
  const backdrop = document.getElementById("gallery-modal-backdrop");
  if (backdrop) {
    backdrop.classList.remove("open");
    backdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

function nextGalleryPhoto() {
  if (!currentGallerySpecies || !currentGallerySpecies.gallery) return;
  const total = currentGallerySpecies.gallery.length;
  currentGalleryIndex = (currentGalleryIndex + 1) % total;
  updateGalleryView();
}

function prevGalleryPhoto() {
  if (!currentGallerySpecies || !currentGallerySpecies.gallery) return;
  const total = currentGallerySpecies.gallery.length;
  currentGalleryIndex = (currentGalleryIndex - 1 + total) % total;
  updateGalleryView();
}

function setGalleryPhoto(index) {
  if (!currentGallerySpecies || !currentGallerySpecies.gallery) return;
  if (index >= 0 && index < currentGallerySpecies.gallery.length) {
    currentGalleryIndex = index;
    updateGalleryView();
  }
}

function updateGalleryView() {
  if (!currentGallerySpecies) return;

  const lang = I18N.currentLang;
  const sp = currentGallerySpecies;
  const photos = (sp.gallery && sp.gallery.length) ? sp.gallery : [
    { file: sp.image, caption: { en: "Field observation", zh: "野外生境观察", fi: "Luontohavainto" }, attribution: "" }
  ];

  if (currentGalleryIndex >= photos.length) {
    currentGalleryIndex = 0;
  }

  const currentPhoto = photos[currentGalleryIndex];

  // Titles
  const titleEl = document.getElementById("gallery-modal-title");
  const subEl = document.getElementById("gallery-modal-subtitle");
  const counterEl = document.getElementById("gallery-counter");
  const mainImgEl = document.getElementById("gallery-main-img");
  const captionEl = document.getElementById("gallery-caption-text");
  const attrEl = document.getElementById("gallery-attribution");
  const thumbsContainer = document.getElementById("gallery-thumbs");

  if (titleEl) titleEl.textContent = sp.names[lang]?.primary || sp.latinName;
  if (subEl) subEl.textContent = `${sp.latinName} • ${sp.names[lang]?.local || ""}`;
  if (counterEl) counterEl.textContent = `${currentGalleryIndex + 1} / ${photos.length}`;

  if (mainImgEl) {
    mainImgEl.src = currentPhoto.file;
    mainImgEl.alt = `${sp.names[lang]?.primary} photo ${currentGalleryIndex + 1}`;
  }

  if (captionEl) {
    const capText = (currentPhoto.caption && currentPhoto.caption[lang]) 
      ? currentPhoto.caption[lang] 
      : (currentPhoto.caption?.en || "Botanical detail");
    captionEl.textContent = `🔍 ${capText}`;
  }

  if (attrEl) {
    attrEl.textContent = currentPhoto.attribution || "CC Observation Data";
  }

  // Render Thumbnail strip
  if (thumbsContainer) {
    thumbsContainer.innerHTML = photos.map((p, idx) => `
      <div class="gallery-thumb ${idx === currentGalleryIndex ? 'active' : ''}" onclick="setGalleryPhoto(${idx})" title="Photo ${idx + 1}">
        <img src="${p.file}" alt="Thumbnail ${idx + 1}">
      </div>
    `).join("");
  }
}

// // -------------------------------------------------------------
// Lookalike Comparator Feature
// -------------------------------------------------------------
function renderLookalikes() {
  const container = document.getElementById("lookalike-container");
  if (!container) return;

  const lang = I18N.currentLang;
  const lang2 = I18N.secondaryLang;
  const t = I18N.ui[lang];

  const pairs = [
    {
      title: {
        en: "Golden Chanterelle vs. False Chanterelle",
        zh: "真假鸡油菌鉴别（鸡油菌 vs 假鸡油菌）",
        fi: "Keltavahvero vs. Valekantarelli"
      },
      summary: {
        en: "The most common beginner confusion. One is choice gourmet; the other is tough and bland.",
        zh: "最常见的初学者混淆。真品是芬兰森林顶级美味，假品肉质如皮革且易致消化不良。",
        fi: "Yleisin aloittelijan sekaannus. Toinen huippuherkku, toinen sitkeä ja mitätön."
      },
      edible: {
        id: "cantharellus_cibarius",
        name: { en: "Golden Chanterelle (Keltavahvero)", zh: "真鸡油菌 (Cantharellus cibarius)", fi: "Keltavahvero (Kantarelli)" },
        image: "./images/cantharellus_cibarius.jpg",
        status: t.badgeChoice,
        traits: {
          en: ["Underside: Blunt, thick, branching ridges (poimut)", "Color: Uniform warm egg-yolk yellow", "Flesh: Meaty, solid, pale cream inside", "Aroma: Fruity ripe apricots"],
          zh: ["菌盖下：钝而粗厚的假菌褶（分叉波状小脊）", "颜色：纯正柔和的蛋黄色", "菇肉：扎实致密，切开内部为乳白色实心", "香气：浓郁清甜的杏子或黄桃香"],
          fi: ["Alapinta: Paksut, tylpät ja haaraiset poimut", "Väri: Tasaisen munankeltainen", "Malto: Kiinteää, umpinaista ja vaaleaa", "Tuoksu: Hieno hedelmäinen aprikoosin tuoksu"]
        }
      },
      toxic: {
        id: "hygrophoropsis_aurantiaca",
        name: { en: "False Chanterelle (Valekantarelli)", zh: "假鸡油菌 (Hygrophoropsis aurantiaca)", fi: "Valekantarelli" },
        image: "./images/hygrophoropsis_aurantiaca.jpg",
        status: t.badgeInedible,
        traits: {
          en: ["Underside: Thin, knife-sharp, crowded true gills", "Color: Intense fiery orange, darker center", "Flesh: Soft, thin, flexible, orange inside", "Stem: Slender, dark brown/black near base"],
          zh: ["菌盖下：极薄、锐利如刀口的密集真菌褶", "颜色：刺目艳丽的火橙色，中心偏深", "菇肉：薄软柔韧，内部通体为橙色", "菌柄：纤细柔软，基部常发黑发褐"],
          fi: ["Alapinta: Veitsenterävät, tiheät ja ohuet heltat", "Väri: Räikeän oranssi, keskeltä tummempi", "Malto: Pehmeää, ohutta ja joustavaa", "Jalka: Hento ja tyvestä tummuva"]
        }
      }
    },
    {
      title: {
        en: "Funnel Chanterelle vs. Deadly Webcap",
        zh: "生死鉴别：漏斗鸡油菌 vs 致命赭红丝膜菌",
        fi: "Suppilovahvero vs. Suippumyrkkyseitikki"
      },
      summary: {
        en: "LIFE-SAVING COMPARISON: They share the exact same mossy spruce habitat in Helsinki.",
        zh: "【性命攸关】二者在大赫尔辛基地区的云杉湿润苔藓带完全混生，必须逐朵查验！",
        fi: "HENGENPELASTAVA VERTAILU: Kasvavat samoissa kosteissa kuusikoissa vierekkäin!"
      },
      edible: {
        id: "craterellus_tubaeformis",
        name: { en: "Funnel Chanterelle (Suppilovahvero)", zh: "漏斗鸡油菌 (Craterellus tubaeformis)", fi: "Suppilovahvero" },
        image: "./images/craterellus_tubaeformis.jpg",
        status: t.badgeChoice,
        traits: {
          en: ["Cap: Deep funnel trumpet with central hole", "Stem: Bright yellow-orange, COMPLETELY HOLLOW tube", "Underside: Blunt greyish-yellow ridges", "Toxicity: 100% safe and delicious"],
          zh: ["菌盖：深凹小漏斗，中心有穿孔直通菌柄", "菌柄：鲜艳黄橙色，【完全空心（如吸管管状）】", "菌褶：灰黄或土黄色钝棱脊", "安全性：绝对安全可口的秋季明星菌"],
          fi: ["Lakki: Suppilomainen, keskellä reikä onttoon jalkaan", "Jalka: Kirkkaankeltainen, TÄYSIN ONTTOMAINEN putki", "Alapinta: Harmaankeltaiset poimut", "Turvallisuus: Erinomainen ja turvallinen ruokasieni"]
        }
      },
      toxic: {
        id: "cortinarius_rubellus",
        name: { en: "Deadly Webcap (Suippumyrkkyseitikki)", zh: "赭红丝膜菌 (Cortinarius rubellus)", fi: "Suippumyrkkyseitikki" },
        image: "./images/cortinarius_rubellus.jpg",
        status: t.badgeDeadly,
        traits: {
          en: ["Cap: Conical with sharp pointed nipple (umbo)", "Stem: SOLID cinnamon stem with yellow zigzag bands", "Underside: Thick rusty-cinnamon true gills", "Toxicity: ORELLANINE - permanent kidney failure (2-14 day latency)"],
          zh: ["菌盖：圆锥形，中央有【极其尖锐的凸起乳突（小巫师帽）】", "菌柄：肉桂褐色【实心坚韧】，带黄色“之”字形蛇纹斑带", "菌褶：厚而稀疏的锈红肉桂色真菌褶", "毒性：奥来毒素！潜伏期2-14天，导致不可逆肾纤维化坏死！"],
          fi: ["Lakki: Terävänuppinen, kartiomainen kanelinruskea lakki", "Jalka: Keltavöinen, siksak-kuvioinen, UMPINAINEN", "Alapinta: Ruosteenruskeat paksut heltat", "Myrkky: Orellaniini tuhoaa munuaiset pysyvästi (viive 2–14 vrk)!"]
        }
      }
    },
    {
      title: {
        en: "King Bolete (Porcini) vs. Bitter Bolete",
        zh: "美味牛肝菌 vs 苦粉孢牛肝菌（苦牛肝）",
        fi: "Herkkutatti vs. Sappitatti"
      },
      summary: {
        en: "Bitter bolete is not deadly, but a single slice will ruin an entire dinner.",
        zh: "苦牛肝虽不致命，但极具毁伤力，一小片就会将整锅佳肴变为苦胆水。",
        fi: "Sappitatti ei ole tappava, mutta pilaa kitkeryydellään koko ruoan."
      },
      edible: {
        id: "boletus_edulis",
        name: { en: "King Bolete (Herkkutatti)", zh: "美味牛肝菌 (Boletus edulis)", fi: "Herkkutatti" },
        image: "./images/boletus_edulis.jpg",
        status: t.badgeChoice,
        traits: {
          en: ["Pores: Pure white when young, turning yellow-olive", "Stem: Delicate white raised mesh net on upper half", "Taste: Sweet, nutty, pleasant on tongue", "Flesh: Solid white, unchanging when sliced"],
          zh: ["海绵孔：幼时纯白如黄油，老化转黄绿至橄榄色", "菌柄：上半段覆有精致细腻的【白色立体网纹】", "尝味：切肉在舌尖轻触，清甜坚果香", "菇肉：纯白致密，切开永不变色"],
          fi: ["Pillistö: Nuorena valkoinen, vanhana kellanvihreä", "Jalka: Yläosassa hento valkoinen verkkokuvio", "Maku: Pähkinäisen mieto ja miellyttävä", "Malto: Puhdas valkoinen, ei muutu leikattaessa"]
        }
      },
      toxic: {
        id: "tylopilus_felleus",
        name: { en: "Bitter Bolete (Sappitatti)", zh: "苦粉孢牛肝菌 (Tylopilus felleus)", fi: "Sappitatti" },
        image: "./images/tylopilus_felleus.jpg",
        status: t.badgeInedible,
        traits: {
          en: ["Pores: White turning dirty pinkish-brown in age", "Stem: Coarse, prominent, raised dark-brown mesh netting", "Taste: VIOLENTLY BITTER within 5 seconds", "Flesh: White, sometimes staining faint pink"],
          zh: ["海绵孔：幼时白，老后转为【脏肉粉红、粉褐色】", "菌柄：全柄密布【凸出粗大的深黑褐色立体大网眼】", "尝味：舌尖微沾，5秒内泛起烈性苦胆水苦味", "菇肉：切开白色，有时微泛暗粉色"],
          fi: ["Pillistö: Muuttuu vanhetessa likaisen vaaleanpunaiseksi", "Jalka: Pinnalla erittäin selvä, tummanruskea karkea verkko", "Maku: Polttavan karvas 5 sekunnissa", "Malto: Valkoinen, usein heikosti punertuva"]
        }
      }
    }
  ];

  container.innerHTML = pairs.map(pair => `
    <div class="comparator-card">
      <div class="comparator-header">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b;">
            ${pair.title[lang]}
            ${lang2 ? `<span style="font-size: 0.95rem; color:#64748b; display:block; margin-top:0.2rem; font-weight:400;">${pair.title[lang2]}</span>` : ""}
          </h3>
          <div style="margin-top: 0.35rem;">
            ${renderBilingualText(pair.summary, lang, lang2)}
          </div>
        </div>
      </div>
      <div class="comparator-pair-grid">
        <div class="comparator-item edible">
          <span class="badge badge-choice">${t.safeBadge}</span>
          <h4 style="font-size: 1.15rem; font-weight: 700; margin-top: 0.4rem; color: #14532d; cursor:pointer;" onclick="navigateToMushroom('${pair.edible.id}')">
            ${pair.edible.name[lang]}
            ${lang2 ? `<span style="font-size:0.85rem; color:#64748b; display:block; font-weight:500;">${pair.edible.name[lang2]}</span>` : ""}
          </h4>
          <div style="height: 180px; border-radius: 6px; overflow: hidden; margin: 0.75rem 0; cursor:pointer;" onclick="navigateToMushroom('${pair.edible.id}')" title="${t.viewDetails}">
            <img src="${pair.edible.image}" alt="Edible" style="width:100%; height:100%; object-fit: cover;">
          </div>
          <ul class="diff-checklist">
            ${pair.edible.traits[lang].map((tr, idx) => `
              <li style="color: #166534;">
                ✅ ${tr}
                ${lang2 && pair.edible.traits[lang2]?.[idx] ? `<div style="color:#64748b; font-size:0.82rem; padding-left:1.3rem; margin-top:2px;">${pair.edible.traits[lang2][idx]}</div>` : ""}
              </li>
            `).join("")}
          </ul>
        </div>
        <div class="comparator-item toxic">
          <span class="badge badge-deadly">${t.dangerBadge}</span>
          <h4 style="font-size: 1.15rem; font-weight: 700; margin-top: 0.4rem; color: #7f1d1d; cursor:pointer;" onclick="navigateToMushroom('${pair.toxic.id}')">
            ${pair.toxic.name[lang]}
            ${lang2 ? `<span style="font-size:0.85rem; color:#64748b; display:block; font-weight:500;">${pair.toxic.name[lang2]}</span>` : ""}
          </h4>
          <div style="height: 180px; border-radius: 6px; overflow: hidden; margin: 0.75rem 0; cursor:pointer;" onclick="navigateToMushroom('${pair.toxic.id}')" title="${t.viewDetails}">
            <img src="${pair.toxic.image}" alt="Toxic" style="width:100%; height:100%; object-fit: cover;">
          </div>
          <ul class="diff-checklist">
            ${pair.toxic.traits[lang].map((tr, idx) => `
              <li style="color: #991b1b;">
                ⚠️ ${tr}
                ${lang2 && pair.toxic.traits[lang2]?.[idx] ? `<div style="color:#64748b; font-size:0.82rem; padding-left:1.3rem; margin-top:2px;">${pair.toxic.traits[lang2][idx]}</div>` : ""}
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    </div>
  `).join("");
}

// -------------------------------------------------------------
// Cooking Guide & Recipes
// -------------------------------------------------------------
function renderCookingGuide() {
  const container = document.getElementById("cooking-container");
  if (!container) return;

  const lang = I18N.currentLang;
  const lang2 = I18N.secondaryLang;
  const guide = I18N.cookingGuide[lang];
  const guide2 = lang2 ? I18N.cookingGuide[lang2] : null;
  const t = I18N.ui[lang];

  container.innerHTML = `
    <div style="background: #ffffff; border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--primary); margin-bottom: 0.5rem;">
        ${guide.title}
        ${guide2 ? `<span style="display:block; font-size: 1.05rem; color:#64748b; margin-top:0.25rem; font-weight:400;">${guide2.title}</span>` : ""}
      </h2>
      <div style="color: #475569; font-size: 0.95rem; margin-bottom: 1.25rem;">
        <p>${guide.intro}</p>
        ${guide2 ? `<p style="color: #64748b; font-size: 0.9rem; margin-top: 0.35rem;">${guide2.intro}</p>` : ""}
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
        ${guide.principles.map((p, idx) => `
          <div style="background: #f8fafc; border: 1px solid var(--border); padding: 1rem; border-radius: 6px; display: flex; flex-direction: column;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: #0f172a; margin-bottom: 0.35rem;">${p.title}</h4>
            <p style="font-size: 0.85rem; color: #475569; line-height: 1.5;">${p.content}</p>
            ${guide2 && guide2.principles?.[idx] ? `
              <div style="margin-top: 0.5rem; font-size: 0.82rem; color: #64748b; line-height: 1.45;">
                <strong>${guide2.principles[idx].title}:</strong> ${guide2.principles[idx].content}
              </div>
            ` : ""}
            ${p.videoUrl ? `
              <div style="margin-top: auto; padding-top: 0.65rem;">
                <a href="${p.videoUrl}" target="_blank" rel="noopener noreferrer" class="btn-video-link-sm" title="${p.title}">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="color: #dc2626;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  <span>${t.watchVideoBtn || "Watch Video"}</span>
                </a>
              </div>
            ` : ""}
          </div>
        `).join("")}
      </div>
    </div>

    <h3 style="font-size: 1.35rem; font-weight: 700; color: #0f172a; margin-bottom: 1rem;">
      🍲 ${lang === "zh" ? "经典食谱制作" : (lang === "fi" ? "Perinteiset Reseptit" : "Featured Field Recipes")}
      ${guide2 ? `<span style="font-size: 0.95rem; color:#64748b; font-weight:400; margin-left: 0.5rem;">(${lang2 === "zh" ? "经典食谱" : (lang2 === "fi" ? "Reseptit" : "Recipes")})</span>` : ""}
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem;">
      ${guide.recipes.map((rcp, idx) => {
        const rcp2 = guide2 && guide2.recipes?.[idx] ? guide2.recipes[idx] : null;
        return `
        <div style="background: #ffffff; border: 1px solid var(--border); border-radius: 8px; padding: 1.25rem; display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.4rem;">
            <h4 style="font-size: 1.15rem; font-weight: 700; color: #1e3a2b; margin: 0;">
              ${rcp.name}
              ${rcp2 ? `<span style="display:block; font-size: 0.9rem; color:#64748b; margin-top:0.2rem; font-weight:400;">${rcp2.name}</span>` : ""}
            </h4>
            ${rcp.videoUrl ? `
              <a href="${rcp.videoUrl}" target="_blank" rel="noopener noreferrer" class="btn-recipe-video" title="${rcp.name}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="color: #dc2626;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span>${t.watchVideoBtn || "Watch Video"}</span>
              </a>
            ` : ""}
          </div>
          
          <div style="display: flex; gap: 0.75rem; font-size: 0.82rem; color: #64748b; margin-bottom: 0.85rem; background: #f8fafc; padding: 0.4rem 0.6rem; border-radius: 4px; flex-wrap: wrap;">
            <span>⏱️ <strong>${t.prepTime}</strong> ${rcp.prep}</span>
            <span>🔥 <strong>${t.cookTime}</strong> ${rcp.cook}</span>
            <span>🍽️ <strong>${t.servings}</strong> ${rcp.servings}</span>
          </div>

          <div style="margin-bottom: 0.85rem;">
            <div style="font-size: 0.82rem; font-weight: 700; color: #334155; margin-bottom: 0.3rem;">Ingredients:</div>
            <ul style="padding-left: 1.1rem; font-size: 0.82rem; color: #475569; line-height: 1.5;">
              ${rcp.ingredients.map((ing, iIdx) => `
                <li>
                  ${ing}
                  ${rcp2 && rcp2.ingredients?.[iIdx] ? `<div style="color:#64748b; font-size: 0.78rem; margin-top: 1px;">${rcp2.ingredients[iIdx]}</div>` : ""}
                </li>
              `).join("")}
            </ul>
          </div>

          <div style="margin-top: auto; padding-top: 0.75rem; border-top: 1px solid var(--border);">
            <div style="font-size: 0.82rem; font-weight: 700; color: #334155; margin-bottom: 0.3rem;">Instructions:</div>
            <ol style="padding-left: 1.1rem; font-size: 0.82rem; color: #334155; line-height: 1.5;">
              ${rcp.steps.map((step, sIdx) => `
                <li style="margin-bottom: 0.3rem;">
                  ${step}
                  ${rcp2 && rcp2.steps?.[sIdx] ? `<div style="color:#64748b; font-size: 0.78rem; margin-top: 1px;">${rcp2.steps[sIdx]}</div>` : ""}
                </li>
              `).join("")}
            </ol>
          </div>
        </div>
      `;
      }).join("")}
    </div>
  `;
}

// -------------------------------------------------------------
// HSL Transit Spots
// -------------------------------------------------------------
function renderSpots() {
  const container = document.getElementById("spots-container");
  if (!container) return;

  const lang = I18N.currentLang;
  const lang2 = I18N.secondaryLang;
  const t = I18N.ui[lang] || I18N.ui.en;

  container.innerHTML = I18N.spots.map(s => `
    <div class="spot-card">
      <div class="spot-header">
        <div>
          <h3 class="spot-title">${s.name[lang]}</h3>
          ${lang2 ? `<div style="font-size: 0.88rem; color:#64748b; margin-top: 0.15rem; font-weight:400;">${s.name[lang2]}</div>` : ""}
          <span style="font-size: 0.8rem; color: #64748b;">📍 ${s.municipality}</span>
        </div>
        <span class="spot-zone">${s.zone}</span>
      </div>

      <div class="spot-transit">
        <p><strong>🚌 HSL:</strong> ${s.transit[lang]}</p>
        ${lang2 ? `<p style="color: #64748b; font-size: 0.82rem; margin-top: 0.2rem;">${s.transit[lang2]}</p>` : ""}
        <p style="margin-top: 0.35rem;"><strong>⏱️ Duration:</strong> ~${s.time}</p>
      </div>

      ${s.popularTrail ? `
      <div class="spot-trailhead-box">
        <div class="spot-trailhead-row">
          <span class="prime-item-label">🥾 ${t.popularTrailLabel || 'Popular Trail'}:</span>
          <span class="prime-item-value">${s.popularTrail[lang]}</span>
          ${lang2 ? `<div class="prime-item-secondary">${s.popularTrail[lang2]}</div>` : ""}
        </div>
        <div class="spot-trailhead-row" style="margin-top: 0.35rem;">
          <span class="prime-item-label">📍 ${t.startingPointLabel || 'Starting Point'}:</span>
          <span class="prime-item-value">${s.startingPoint[lang]}</span>
          ${lang2 ? `<div class="prime-item-secondary">${s.startingPoint[lang2]}</div>` : ""}
        </div>
        <div style="margin-top: 0.6rem;">
          <a href="${s.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-location-map" title="${s.startingPoint[lang]}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
            <span>${t.openMapBtn || 'Directions'}</span>
          </a>
        </div>
      </div>
      ` : ""}

      <div style="font-size: 0.85rem; color: #334155; margin-bottom: 0.5rem;">
        <strong>Terrain:</strong> ${s.terrain[lang]}
        ${lang2 ? `<div style="color: #64748b; font-size: 0.82rem; margin-top: 0.15rem;">${s.terrain[lang2]}</div>` : ""}
      </div>

      <div style="font-size: 0.85rem; color: #166534; background: #f0fdf4; padding: 0.6rem; border-radius: 6px; margin-bottom: 0.75rem;">
        <div>💡 <em>${s.tip[lang]}</em></div>
        ${lang2 ? `<div style="color: #64748b; font-size: 0.82rem; margin-top: 0.25rem;"><em>${s.tip[lang2]}</em></div>` : ""}
      </div>

      <div style="font-size: 0.8rem; font-weight: 700; color: #475569; margin-bottom: 0.25rem;">Target Species:</div>
      <div class="spot-species-list">
        ${s.species.map(sp => `<span class="species-tag">${sp}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// -------------------------------------------------------------
// Safety Rules
// -------------------------------------------------------------
function renderSafety() {
  const container = document.getElementById("safety-content-container");
  if (!container) return;

  const lang = I18N.currentLang;
  const lang2 = I18N.secondaryLang;
  const sg = I18N.safetyGuidelines;

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem;">
      <!-- Everyman's Right -->
      <div style="background: #ffffff; border: 1px solid var(--border); border-radius: 8px; padding: 1.25rem;">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e3a2b; margin-bottom: 0.6rem;">
          ${sg.everymansRight.title[lang]}
          ${lang2 ? `<span style="font-size: 0.9rem; color: #64748b; display: block; margin-top: 0.2rem; font-weight: 400;">${sg.everymansRight.title[lang2]}</span>` : ""}
        </h3>
        <div style="font-size: 0.88rem; color: #334155; margin-bottom: 0.75rem;">
          <p>${sg.everymansRight.desc[lang]}</p>
          ${lang2 ? `<p style="color: #64748b; font-size: 0.82rem; margin-top: 0.2rem;">${sg.everymansRight.desc[lang2]}</p>` : ""}
        </div>
        <ul style="padding-left: 1.1rem; font-size: 0.82rem; color: #475569; line-height: 1.55;">
          ${sg.everymansRight.rules.map(r => `
            <li style="margin-bottom: 0.35rem;">
              <div>${r[lang]}</div>
              ${lang2 ? `<div style="color: #64748b; font-size: 0.78rem; margin-top: 1px;">${r[lang2]}</div>` : ""}
            </li>
          `).join("")}
        </ul>
      </div>

      <!-- Foolproof Five -->
      <div style="background: #ffffff; border: 1px solid var(--border); border-radius: 8px; padding: 1.25rem;">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e3a2b; margin-bottom: 0.6rem;">
          ${sg.foolproofFive.title[lang]}
          ${lang2 ? `<span style="font-size: 0.9rem; color: #64748b; display: block; margin-top: 0.2rem; font-weight: 400;">${sg.foolproofFive.title[lang2]}</span>` : ""}
        </h3>
        <div style="font-size: 0.88rem; color: #334155; margin-bottom: 0.75rem;">
          <p>${sg.foolproofFive.desc[lang]}</p>
          ${lang2 ? `<p style="color: #64748b; font-size: 0.82rem; margin-top: 0.2rem;">${sg.foolproofFive.desc[lang2]}</p>` : ""}
        </div>
        <ol style="padding-left: 1.1rem; font-size: 0.82rem; color: #475569; line-height: 1.55;">
          ${sg.foolproofFive.species.map(s => `
            <li style="margin-bottom: 0.35rem;">
              <div>${s[lang]}</div>
              ${lang2 ? `<div style="color: #64748b; font-size: 0.78rem; margin-top: 1px;">${s[lang2]}</div>` : ""}
            </li>
          `).join("")}
        </ol>
      </div>

      <!-- Forest Safety -->
      <div style="background: #ffffff; border: 1px solid var(--border); border-radius: 8px; padding: 1.25rem;">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e3a2b; margin-bottom: 0.6rem;">
          ${sg.forestSafety.title[lang]}
          ${lang2 ? `<span style="font-size: 0.9rem; color: #64748b; display: block; margin-top: 0.2rem; font-weight: 400;">${sg.forestSafety.title[lang2]}</span>` : ""}
        </h3>
        <ul style="padding-left: 1.1rem; font-size: 0.82rem; color: #475569; line-height: 1.55;">
          ${sg.forestSafety.items.map(it => `
            <li style="margin-bottom: 0.35rem;">
              <div>${it[lang]}</div>
              ${lang2 ? `<div style="color: #64748b; font-size: 0.78rem; margin-top: 1px;">${it[lang2]}</div>` : ""}
            </li>
          `).join("")}
        </ul>
      </div>
    </div>
  `;
}
