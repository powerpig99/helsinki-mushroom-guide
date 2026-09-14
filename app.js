// Trilingual Dynamic Web Application Logic with Dedicated Mobile Field Guides
// Helsinki Wild Mushroom Guide

let currentTab = "catalog";
let currentLevelFilter = "all";
let currentFamilyFilter = "all";
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
  ForestCacheManager.init();
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
  if (!I18N.cookingVideos) return "";

  const direct = I18N.cookingVideos[sp.id];
  const sisterId = (!direct && I18N.sisterSpeciesCookingMap) ? I18N.sisterSpeciesCookingMap[sp.id] : null;
  const v = direct || (sisterId ? I18N.cookingVideos[sisterId] : null);
  if (!v) return "";

  const isInherited = !direct && !!sisterId;
  const sisterSp = isInherited ? I18N.species.find(s => s.id === sisterId) : null;
  const sisterName = sisterSp ? (sisterSp.names[lang]?.primary || sisterSp.latinName) : "";

  const videoTitle = v.title[lang] || v.title.en;
  const videoTitle2 = (lang2 && lang2 !== lang && v.title[lang2]) ? v.title[lang2] : null;

  let inheritedNoticeHtml = "";
  if (isInherited && sisterSp) {
    inheritedNoticeHtml = `
      <div class="inherited-cooking-notice">
        <div class="inherited-notice-header">
          <span class="inherited-notice-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            ${t.sharedCulinaryBadge || "Shared Technique"}
          </span>
          <span class="inherited-notice-text">
            ${t.sharedCulinaryNotice || "Culinary & preparation guide shared with sister species:"}
            <a href="#/mushroom/${sisterSp.id}" onclick="navigateToMushroom('${sisterSp.id}'); return false;" class="inherited-species-link">
              <strong>${sisterName}</strong> (<em>${sisterSp.latinName}</em>)
            </a>
          </span>
        </div>
      </div>
    `;
  }

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
    ${inheritedNoticeHtml}
    <div class="cooking-video-card ${isInherited ? 'is-inherited' : ''}">
      <div class="cooking-video-content">
        <div class="cooking-video-badge-wrapper">
          <span class="cooking-video-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="color: #dc2626;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            ${isInherited ? (t.sharedCulinaryBadge || "Shared Technique") : (t.videoGuideBadge || "Video Tutorial")}
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
  const siteBadge = document.getElementById("site-badge");
  if (siteBadge) siteBadge.textContent = t.siteBadge;
  const siteTitle = document.getElementById("site-title");
  if (siteTitle) siteTitle.textContent = t.siteTitle;
  const siteSubtitle = document.getElementById("site-subtitle");
  if (siteSubtitle) siteSubtitle.innerHTML = t.siteSubtitle;
  const btnPoison = document.getElementById("btn-call-poison");
  if (btnPoison) {
    btnPoison.title = t.callPoison || "Call Poison Info: 0800 147 111";
  }
  const btn112 = document.getElementById("btn-call-112");
  if (btn112) {
    btn112.title = t.call112 || "Emergency: 112";
  }

  // Tabs (6 Canonical Integrated Sections)
  const tabBtnCatalog = document.getElementById("tab-btn-catalog");
  if (tabBtnCatalog) tabBtnCatalog.textContent = t.tabCatalog;
  const tabBtnLookalikes = document.getElementById("tab-btn-lookalikes");
  if (tabBtnLookalikes) tabBtnLookalikes.textContent = t.tabLookalikes;
  const tabBtnCooking = document.getElementById("tab-btn-cooking");
  if (tabBtnCooking) tabBtnCooking.textContent = t.tabCooking;
  const tabBtnHabitats = document.getElementById("tab-btn-habitats");
  if (tabBtnHabitats) tabBtnHabitats.textContent = t.tabHabitats;
  const tabBtnSpots = document.getElementById("tab-btn-spots");
  if (tabBtnSpots) tabBtnSpots.textContent = t.tabSpots;
  const tabBtnSafety = document.getElementById("tab-btn-safety");
  if (tabBtnSafety) tabBtnSafety.textContent = t.tabSafety;

  // View Mode Switcher Labels (Tab 1: Species & Master Index)
  const labelGrid = document.getElementById("label-view-grid");
  if (labelGrid && t.labelViewGrid) labelGrid.textContent = t.labelViewGrid;
  const labelSafe5 = document.getElementById("label-view-safe5");
  if (labelSafe5 && t.labelViewSafe5) labelSafe5.textContent = t.labelViewSafe5;
  const labelInter = document.getElementById("label-view-intermediate");
  if (labelInter && t.labelViewIntermediate) labelInter.textContent = t.labelViewIntermediate;
  const labelMaster = document.getElementById("label-view-master");
  if (labelMaster && t.labelViewMaster) labelMaster.textContent = t.labelViewMaster;

  // Header quick links
  const headerLinkHandbook = document.getElementById("header-link-handbook");
  if (headerLinkHandbook && t.headerLinkHandbook) headerLinkHandbook.textContent = t.headerLinkHandbook;
  const headerLinkSpecies = document.getElementById("header-link-species");
  if (headerLinkSpecies && t.headerLinkSpecies) headerLinkSpecies.textContent = t.headerLinkSpecies;

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

  const labelFam = document.getElementById("label-family-filter");
  if (labelFam && t.familyFilterLabel) labelFam.textContent = t.familyFilterLabel;
  const famMap = {
    "filter-fam-all": t.allFamilies,
    "filter-fam-chanterelles": t.famChanterelles,
    "filter-fam-boletes": t.famBoletes,
    "filter-fam-tooth": t.famTooth,
    "filter-fam-polypores": t.famPolypores,
    "filter-fam-milkcaps": t.famMilkcaps,
    "filter-fam-brittlegills": t.famBrittlegills,
    "filter-fam-others": t.famOthers,
    "filter-fam-deadly": t.famDeadly
  };
  for (const [btnId, text] of Object.entries(famMap)) {
    const el = document.getElementById(btnId);
    if (el && text) el.textContent = text;
  }

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

  // Render Dynamic Sections (6 Canonical Integrated Sections)
  renderCatalog();
  renderLookalikes();
  renderCookingGuide();
  renderHabitats();
  renderSpots();
  renderSafety();

  // If currently viewing a mushroom detail page, re-render it in the new language
  if (currentMushroomId) {
    renderMushroomDetail(currentMushroomId);
  }

  // Offline banner & Forest Cache Modal texts
  const offlineBannerText = document.getElementById("offline-banner-text");
  if (offlineBannerText && t.offlineBannerText) offlineBannerText.textContent = t.offlineBannerText;

  const forestCacheLabel = document.getElementById("forest-cache-label");
  if (forestCacheLabel) {
    if (!navigator.onLine) {
      forestCacheLabel.textContent = t.offlineBadgeOffline || "📡 Off-Grid / Offline";
    } else if (typeof ForestCacheManager !== 'undefined' && ForestCacheManager.isDownloading) {
      forestCacheLabel.textContent = t.offlineBadgeDownloading || "⏳ Caching...";
    } else {
      forestCacheLabel.textContent = t.offlineBadgeReady || "🌲 Offline Ready";
    }
  }

  const cacheModalTitle = document.getElementById("cache-modal-title");
  if (cacheModalTitle && t.offlineModalTitle) cacheModalTitle.textContent = t.offlineModalTitle;
  const cacheModalSubtitle = document.getElementById("cache-modal-subtitle");
  if (cacheModalSubtitle && t.offlineModalSubtitle) cacheModalSubtitle.textContent = t.offlineModalSubtitle;
  const cacheCoreTitle = document.getElementById("cache-core-title");
  if (cacheCoreTitle && t.offlineModalCoreTitle) cacheCoreTitle.textContent = t.offlineModalCoreTitle;
  const cacheCoreDesc = document.getElementById("cache-core-desc");
  if (cacheCoreDesc && t.offlineModalCoreDesc) cacheCoreDesc.textContent = t.offlineModalCoreDesc;
  const cacheCoreStatus = document.getElementById("cache-core-status");
  if (cacheCoreStatus && t.offlineModalCoreStatus) cacheCoreStatus.textContent = t.offlineModalCoreStatus;
  const cachePhotosTitle = document.getElementById("cache-photos-title");
  if (cachePhotosTitle && t.offlineModalPhotosTitle) cachePhotosTitle.textContent = t.offlineModalPhotosTitle;
  const cachePhotosDesc = document.getElementById("cache-photos-desc");
  if (cachePhotosDesc && t.offlineModalPhotosDesc) cachePhotosDesc.textContent = t.offlineModalPhotosDesc;
  const btnCacheAllText = document.getElementById("btn-cache-all-photos-text");
  if (btnCacheAllText && t.offlineBtnCacheAll) btnCacheAllText.textContent = t.offlineBtnCacheAll;
  const btnClearPhotosText = document.getElementById("btn-clear-photos-text");
  if (btnClearPhotosText && t.offlineBtnClearCache) btnClearPhotosText.textContent = t.offlineBtnClearCache;
  const cacheAllNotice = document.getElementById("cache-all-cached-notice");
  if (cacheAllNotice && t.offlineAllCachedNotice) cacheAllNotice.textContent = t.offlineAllCachedNotice;

  if (typeof ForestCacheManager !== 'undefined' && ForestCacheManager.updateCacheStatusUI) {
    ForestCacheManager.updateCacheStatusUI();
  }
}

// -------------------------------------------------------------
// Client-Side Routing & View Transitions
// -------------------------------------------------------------
function setupRouter() {
  window.addEventListener("hashchange", handleRoute);
}

function normalizeChapterId(chId) {
  if (!chId) return "01";
  let clean = chId.toLowerCase().trim();
  if (clean.startsWith("ch_")) clean = clean.replace("ch_", "");
  if (clean.startsWith("ch")) clean = clean.replace("ch", "");
  if (clean.length === 1 && /^\d$/.test(clean)) clean = "0" + clean;
  return clean;
}

let currentCatalogViewMode = "grid";

function getHandbookChapter(chId) {
  const chapters = (window.HANDBOOK_DATA && HANDBOOK_DATA.chapters) ? HANDBOOK_DATA.chapters : I18N.handbookChapters;
  if (!chapters) return null;
  return chapters.find(c => c.id === chId) || null;
}

function renderSpeciesChipsForChapter(ch, lang, t) {
  if (!ch || !ch.targetSpecies || ch.targetSpecies.length === 0) return "";
  return `
    <div class="live-reader-species-strip">
      <strong style="color: #1e3a2b;">${t.handbookTargetSpecies || "Featured Species in this Section:"}</strong>
      ${ch.targetSpecies.map(spId => {
        const sp = I18N.species.find(s => s.id === spId);
        if (!sp) return "";
        const spName = sp.names[lang]?.primary || sp.latinName;
        return `<a href="#/mushroom/${sp.id}" class="inline-species-chip" onclick="navigateToMushroom('${sp.id}'); return false;">🍄 ${spName}</a>`;
      }).join("")}
    </div>
  `;
}

function handleRoute() {
  const hash = window.location.hash || "#/";
  if (hash.startsWith("#/mushroom/")) {
    const id = hash.replace("#/mushroom/", "").trim();
    showMushroomDetail(id);
  } else if (hash.startsWith("#/chapter/")) {
    const rawId = hash.replace("#/chapter/", "").trim();
    navigateToChapter(rawId);
  } else {
    showMainCatalog();
    if (hash === "#/lookalikes") switchTabDirectly("lookalikes");
    else if (hash === "#/cooking") switchTabDirectly("cooking");
    else if (hash === "#/habitats") switchTabDirectly("habitats");
    else if (hash === "#/spots") switchTabDirectly("spots");
    else if (hash === "#/safety") switchTabDirectly("safety");
    else if (hash === "#/handbook") {
      navigateToHandbook();
    } else {
      switchTabDirectly("catalog");
    }
  }
}

function switchTabDirectly(tabKey) {
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(b => {
    b.classList.toggle("active", b.dataset.tab === tabKey);
  });
  currentTab = tabKey;
  
  const tabCatalog = document.getElementById("tab-catalog");
  const tabLookalikes = document.getElementById("tab-lookalikes");
  const tabCooking = document.getElementById("tab-cooking");
  const tabHabitats = document.getElementById("tab-habitats");
  const tabSpots = document.getElementById("tab-spots");
  const tabSafety = document.getElementById("tab-safety");

  if (tabCatalog) tabCatalog.style.display = tabKey === "catalog" ? "block" : "none";
  if (tabLookalikes) tabLookalikes.style.display = tabKey === "lookalikes" ? "block" : "none";
  if (tabCooking) tabCooking.style.display = tabKey === "cooking" ? "block" : "none";
  if (tabHabitats) tabHabitats.style.display = tabKey === "habitats" ? "block" : "none";
  if (tabSpots) tabSpots.style.display = tabKey === "spots" ? "block" : "none";
  if (tabSafety) tabSafety.style.display = tabKey === "safety" ? "block" : "none";
}

function navigateToMushroom(id) {
  window.location.hash = "#/mushroom/" + id;
}
window.navigateToMushroom = navigateToMushroom;

function navigateToCatalog() {
  window.location.hash = "#/catalog";
  switchTabDirectly("catalog");
  switchCatalogViewMode("grid");
}
window.navigateToCatalog = navigateToCatalog;

function navigateToChapter(chId) {
  const clean = normalizeChapterId(chId);
  showMainCatalog();
  if (clean === "01") {
    window.location.hash = "#/safety";
    switchTabDirectly("safety");
  } else if (clean === "02") {
    window.location.hash = "#/spots";
    switchTabDirectly("spots");
  } else if (clean === "03") {
    window.location.hash = "#/habitats";
    switchTabDirectly("habitats");
  } else if (clean === "04") {
    window.location.hash = "#/lookalikes";
    switchTabDirectly("lookalikes");
  } else if (clean === "05") {
    window.location.hash = "#/catalog";
    switchTabDirectly("catalog");
    switchCatalogViewMode("safe5");
  } else if (clean === "06") {
    window.location.hash = "#/catalog";
    switchTabDirectly("catalog");
    switchCatalogViewMode("intermediate");
  } else if (clean === "07" || clean === "zh") {
    window.location.hash = "#/cooking";
    switchTabDirectly("cooking");
  } else if (clean === "08") {
    window.location.hash = "#/catalog";
    switchTabDirectly("catalog");
    switchCatalogViewMode("master");
  } else {
    window.location.hash = "#/catalog";
    switchTabDirectly("catalog");
    switchCatalogViewMode("grid");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}
window.navigateToChapter = navigateToChapter;

function navigateToHandbook() {
  window.location.hash = "#/catalog";
  switchTabDirectly("catalog");
}
window.navigateToHandbook = navigateToHandbook;

function switchCatalogViewMode(mode, btn) {
  currentCatalogViewMode = mode || "grid";
  
  const viewModeBtns = document.querySelectorAll(".view-mode-btn");
  viewModeBtns.forEach(b => {
    b.classList.toggle("active", b.dataset.mode === currentCatalogViewMode);
  });

  const controlsPanel = document.getElementById("catalog-controls-panel");
  const mushroomGrid = document.getElementById("mushroom-grid");
  const monographContainer = document.getElementById("catalog-monograph-container");

  if (currentCatalogViewMode === "grid") {
    if (controlsPanel) controlsPanel.style.display = "block";
    if (mushroomGrid) mushroomGrid.style.display = "grid";
    if (monographContainer) monographContainer.style.display = "none";
  } else {
    if (controlsPanel) controlsPanel.style.display = "none";
    if (mushroomGrid) mushroomGrid.style.display = "none";
    if (monographContainer) {
      monographContainer.style.display = "block";
      renderCatalogMonograph(currentCatalogViewMode);
    }
  }
}
window.switchCatalogViewMode = switchCatalogViewMode;

function renderCatalogMonograph(mode) {
  const container = document.getElementById("catalog-monograph-container");
  if (!container) return;

  const lang = I18N.currentLang;
  const lang2 = I18N.secondaryLang;
  const t = I18N.ui[lang] || I18N.ui.en;

  let chId = "05";
  if (mode === "intermediate") chId = "06";
  else if (mode === "master") chId = "08";

  const ch = getHandbookChapter(chId);
  if (!ch) return;

  container.innerHTML = `
    <div class="integrated-monograph-header">
      <div class="integrated-monograph-top-bar">
        <button class="btn-back-to-grid" onclick="switchCatalogViewMode('grid')">
          ${t.btnBackToGrid || "← Return to Interactive Field Grid (63)"}
        </button>
        <div class="reader-meta-right">
          <span class="reader-badge">${ch.badge[lang]}</span>
          <span class="reader-readtime">⏱️ ${ch.readTime ? ch.readTime[lang] : ""}</span>
        </div>
      </div>
      <h1 class="integrated-monograph-title">${ch.icon} ${ch.title[lang]}</h1>
      ${lang2 ? `<div class="integrated-monograph-subtitle">${ch.title[lang2]}</div>` : ""}
      <p class="integrated-monograph-desc">${ch.desc[lang]}</p>
      ${renderSpeciesChipsForChapter(ch, lang, t)}
    </div>

    <article class="live-reader-body integrated-monograph-body">
      ${ch.html || `<p>${ch.desc[lang]}</p>`}
    </article>

    <div class="integrated-monograph-footer">
      <button class="btn-back-to-grid" onclick="switchCatalogViewMode('grid'); window.scrollTo({ top: 0, behavior: 'smooth' });">
        ${t.btnBackToGrid || "← Return to Interactive Field Grid (63)"}
      </button>
      <button class="reader-pager-btn" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">
        ${t.handbookTopBtn || "↑ Top"}
      </button>
    </div>
  `;
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

  const levelButtons = document.querySelectorAll(".level-btn");
  levelButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      levelButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentLevelFilter = btn.dataset.level;
      renderCatalog();
    });
  });

  const familyButtons = document.querySelectorAll(".family-btn");
  familyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      familyButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFamilyFilter = btn.dataset.family;
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
    if (currentFamilyFilter !== "all") {
      if (currentFamilyFilter === "milkcaps") {
        if (m.family !== "milkcaps" && m.family !== "lactarius_mild" && m.family !== "lactarius_parboil") {
          return false;
        }
      } else if (currentFamilyFilter === "deadly_toxic") {
        if (m.family !== "deadly_toxic" && m.edibility !== "deadly" && m.edibility !== "inedible") {
          return false;
        }
      } else {
        if (m.family !== currentFamilyFilter) {
          return false;
        }
      }
    }
    if (currentMonthFilter && !m.months.includes(currentMonthFilter)) {
      return false;
    }
    if (searchQuery) {
      const en = `${m.names.en.primary} ${m.names.en.local} ${m.names.en.alt}`.toLowerCase();
      const zh = `${m.names.zh.primary} ${m.names.zh.local} ${m.names.zh.alt}`.toLowerCase();
      const fi = `${m.names.fi.primary} ${m.names.fi.local} ${m.names.fi.alt}`.toLowerCase();
      const morph = `${m.morphology[lang]?.underCap || ""} ${m.morphology[lang]?.cap || ""}`.toLowerCase();
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

          ${(() => {
            const lkIds = (I18N.lookalikeMap && I18N.lookalikeMap[m.id]) ? I18N.lookalikeMap[m.id] : [];
            const firstLk = lkIds.length > 0 ? I18N.species.find(s => s.id === lkIds[0]) : null;
            if (!firstLk) return "";
            return `
              <div class="card-lookalike-pill" onclick="event.stopPropagation(); navigateToMushroom('${firstLk.id}')" title="${lang === 'zh' ? '点击对比易混淆种' : (lang === 'fi' ? 'Katso näköislaji' : 'Compare with lookalike')}: ${firstLk.names[lang]?.primary}">
                <span class="card-lk-icon">⚠️</span>
                <span class="card-lk-label">${lang === 'zh' ? '近缘混淆' : (lang === 'fi' ? 'Näköislaji' : 'Lookalike')}:</span>
                <span class="card-lk-name">${firstLk.names[lang]?.primary || firstLk.latinName}</span>
                ${(firstLk.edibility === 'deadly' || firstLk.level === 'deadly') ? '<span class="card-lk-deadly">☠️</span>' : ''}
              </div>
            `;
          })()}

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

        let riskBadgeClass = "badge-risk-edible";
        let riskBadgeText = `✨ ${lang === 'zh' ? '同为可食用近缘种' : (lang === 'fi' ? 'Myös syötävä näköislaji' : 'Edible Sister Species')}`;
        if (lk.edibility === "deadly" || lk.level === "deadly") {
          riskBadgeClass = "badge-risk-deadly";
          riskBadgeText = `🚨 ${lang === 'zh' ? '致命剧毒警报！' : (lang === 'fi' ? 'TAPPAVA VAARA!' : 'DEADLY LOOKALIKE RISK!')}`;
        } else if (lk.edibility === "inedible") {
          riskBadgeClass = "badge-risk-inedible";
          riskBadgeText = `⚠️ ${lang === 'zh' ? '不可食用 / 极苦混淆' : (lang === 'fi' ? 'Kelvoton näköislaji' : 'Inedible / Bitter Lookalike')}`;
        } else if (lk.edibility === "parboil") {
          riskBadgeClass = "badge-risk-parboil";
          riskBadgeText = `♨️ ${lang === 'zh' ? '需水焯去毒后食用' : (lang === 'fi' ? 'Vaatii ryöppäyksen' : 'Must Parboil Before Eating')}`;
        }

        return `
          <a href="#/mushroom/${lk.id}" class="lookalike-interactive-card" onclick="navigateToMushroom('${lk.id}')">
            <div class="lookalike-img-container">
              <img src="${lk.image}" alt="${lkName.primary}" loading="lazy">
              <span class="badge ${lkBadgeClass}">${lkBadgeText}</span>
              ${lk.rating ? `<div class="star-rating">${lk.rating}</div>` : ""}
            </div>
            <div class="lookalike-content">
              <div class="lookalike-tag-header">
                <span class="lookalike-badge ${riskBadgeClass}">${riskBadgeText}</span>
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
// Lookalike Comparator & Deadly Toxin Science (Unified Section)
// -------------------------------------------------------------
function renderLookalikes() {
  const container = document.getElementById("lookalike-container");
  if (!container) return;

  const lang = I18N.currentLang;
  const lang2 = I18N.secondaryLang;
  const t = I18N.ui[lang] || I18N.ui.en;

  const titleMap = {
    en: "⚖️ Deadly Lookalikes & Toxin Survival Guide",
    zh: "⚖️ 芬兰致命毒菇识别与毒素避险全景指南",
    fi: "⚖️ Näköislajien vertailu ja hengenvaaralliset myrkkysienet"
  };
  const descMap = {
    en: "Micro-morphological side-by-side comparators, irreversible toxin biochemistry (Amatoxins, Orellanine 17-day latency, Gyromitrin), and life-saving zero-tolerance identification rules.",
    zh: "微距形态特征、分叉假褶对比与致命陷阱高精度显微鉴别，深度解析不可逆细胞毒素机理（鹅膏毒肽、17天潜伏期赭红丝膜菌素、鹿花菌素），严格执行零容忍安全采摘法则。",
    fi: "Tarkat mikroskooppiset ja morfologiset erot rinnakkain, solumyrkkyjen mekanismit ja elintärkeät tunnistussäännöt."
  };

  const toxins = [
    {
      name: { en: "Amatoxins (Cyclopeptides)", zh: "鹅膏毒肽 (Amatoxins)", fi: "Amatoksiinit" },
      source: "Amanita virosa (Destroying Angel / Valkokärpässieni)",
      latency: { en: "6–24 hours asymptomatic delay", zh: "6–24小时无症状假愈期", fi: "6–24 tunnin viive" },
      mechanism: {
        en: "Inhibits RNA polymerase II, halting cellular protein synthesis. Causes irreversible hepatic and renal necrosis. Boiling, frying, or drying does NOT destroy amatoxins.",
        zh: "强力结合并抑制RNA聚合酶II，彻底阻断细胞蛋白质转录合成。导致不可逆肝细胞坏死与多脏器衰竭。常规烹饪、久煮、高温油炸或烘干均无法降解破坏！",
        fi: "Estää RNA-polymeraasi II -entsyymiä pysäyttäen proteiinisynteesin. Tuhoaa maksasolut peruuttamattomasti. Keittäminen tai paistaminen EI tuhoa myrkkyä."
      }
    },
    {
      name: { en: "Orellanine (Bipyridine Toxin)", zh: "奥来毒素 / 赭红丝膜菌素 (Orellanine)", fi: "Orellaniini" },
      source: "Cortinarius rubellus (Deadly Webcap / Suippumyrkkyseitikki)",
      latency: { en: "2 to 17 DAYS asymptomatic latency!", zh: "长达 2 至 17 天的漫长潜伏期！", fi: "2–17 VUOROKAUDEN viive!" },
      mechanism: {
        en: "Generates reactive oxygen radicals specifically in renal tubular epithelial cells, causing acute interstitial nephritis and permanent renal fibrosis. Victims require lifelong dialysis or kidney transplantation.",
        zh: "在肾脏近曲小管上皮细胞特异性蓄积并产生氧自由基，导致急性肾小管间质坏死与不可逆肾纤维化。中毒者往往在数周后突发尿毒症，需终生血液透析或换肾救命！",
        fi: "Kerääntyy munuaisiin aiheuttaen massiivisen ja pysyvän munuaistuhon. Oireet alkavat usein vasta viikkojen kuluttua, jolloin munuaisensiirto on ainoa pelastus."
      }
    },
    {
      name: { en: "Gyromitrin (Volatile Hydrazine)", zh: "鹿花菌素 (Gyromitrin)", fi: "Gyromitriini" },
      source: "Gyromitra esculenta (False Morel / Korvasieni)",
      latency: { en: "2–12 hours", zh: "2–12小时", fi: "2–12 tuntia" },
      mechanism: {
        en: "Hydrolyzes in the body into monomethylhydrazine (MMH, volatile rocket fuel). Damages the central nervous system, erythrocytes, and liver. Proper outdoor double parboiling with fresh water is mandatory.",
        zh: "在体内水解为单甲基肼（火箭推进剂核心成分）。攻击中枢神经系统、红细胞与肝脏。食用前必须在开阔通风处、使用大量沸水至少水煮两次并彻底换水漂洗！",
        fi: "Hajoaa elimistössä monometyylihydratsiiniksi (rakettipolttoaine). Vaurioittaa hermostoa ja maksaa. Vaatii huolellisen ryöppäyksen runsaassa vedessä ulkotiloissa."
      }
    },
    {
      name: { en: "Muscarine & Gastrointestinal Toxins", zh: "毒蕈碱与胃肠道剧烈毒素", fi: "Muskariini ja ruoansulatusmyrkyt" },
      source: "Inocybe, Clitocybe & raw Suillus / Leccinum",
      latency: { en: "15–120 minutes", zh: "15–120分钟", fi: "15–120 minuuttia" },
      mechanism: {
        en: "Stimulates peripheral parasympathetic nervous system (SLUDGE: salivation, lacrimation, urination, defecation, gastrointestinal distress, emesis). Raw boletes cause severe vomiting if not thoroughly cooked.",
        zh: "刺激副交感神经节后胆碱能受体，引发剧烈流涎、大汗淋漓、瞳孔缩小、恶心呕吐与剧烈腹泻。部分牛肝菌生食或未熟食亦会导致严重胃肠炎，必须充分熟透。",
        fi: "Kiihdyttää parasympaattista hermostoa aiheuttaen hikoilua, kyynelvuotoa ja rajua oksentelua. Raaoista tateista voi saada pahan vatsanväänteen ilman kypsennystä."
      }
    }
  ];

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
    },
    {
      title: {
        en: "Horse Mushroom (Agaricus) vs. Destroying Angel (Amanita virosa)",
        zh: "野蘑菇/白蘑菇 vs 致命白毒鹅膏（毁灭天使）",
        fi: "Peltoherkkusieni vs. Valkokärpässieni"
      },
      summary: {
        en: "FATAL CONFUSION: Destroying Angel is Finland's deadliest mushroom. Never harvest all-white wild mushrooms without checking gill color and the buried volva cup.",
        zh: "【致命陷阱】白毒鹅膏是芬兰森林头号致命杀手！采摘任何白色野菌必须核验粉/褐菌褶，并探查泥土苔藓中是否有袋状菌托！",
        fi: "KUOLEMANVAARA: Valkokärpässieni on Suomen myrkyllisin sieni. Älä koskaan poimi valkoisia sieniä tarkistamatta helttain väriä ja tuppea!"
      },
      edible: {
        id: "agaricus_arvensis",
        name: { en: "Horse Mushroom (Peltoherkkusieni)", zh: "野蘑菇/白蘑菇 (Agaricus arvensis)", fi: "Peltoherkkusieni" },
        image: "./images/agaricus_arvensis.jpg",
        status: t.badgeChoice,
        traits: {
          en: ["Gills: Greyish-pink turning chocolate brown in age", "Stem base: Slightly bulbous without any loose volva cup", "Aroma: Pleasant aniseed or sweet almond aroma", "Spore print: Rich chocolate purple-brown"],
          zh: ["菌褶：幼时粉灰，老熟转为【深巧克力紫褐色】", "菌柄基部：微膨大，【绝无袋状或口袋状白色菌托】", "气味：清甜淡雅的茴香或苦杏仁香气", "孢子印：深巧克力紫褐色"],
          fi: ["Heltat: Harmaanpunertavat, vanhemmiten suklaanruskeat", "Jalan tyvi: Lievästi paksuntunut, EI irrallista tuppea", "Tuoksu: Hieno aniksen tai mantelin tuoksu", "Itiöpöly: Tumman suklaanruskeaa"]
        }
      },
      toxic: {
        id: "amanita_virosa",
        name: { en: "Destroying Angel (Valkokärpässieni)", zh: "白毒鹅膏/毁灭天使 (Amanita virosa)", fi: "Valkokärpässieni" },
        image: "./images/amanita_virosa.jpg",
        status: t.badgeDeadly,
        traits: {
          en: ["Gills: PURE CHALK-WHITE forever, never turning brown", "Stem base: Deeply buried in a loose sack-like white volva cup", "Overall: Pure satiny white cap with ragged stem scales", "Toxicity: AMATOXINS - irreversible liver and kidney necrosis!"],
          zh: ["菌褶：【终生纯白如粉笔】，老熟也绝不变深色！", "菌柄基部：深埋于苔藓中的【巨大松弛口袋状菌托】", "外观：通体纯白无瑕，菌柄有撕裂棉絮状鳞片", "毒性：鹅膏毒肽！不可逆肝肾坏死，50克足以致命！"],
          fi: ["Heltat: AINA PUHTAANVALKOISET koko elinkaaren ajan", "Jalan tyvi: Syvällä sammaleessa suuri säkkimäinen tuppi", "Yleisvaikutelma: Täysin vitivalkoinen, jalassa repaleita", "Myrkky: Amatoksiinit tuhoavat maksan peruuttamattomasti!"]
        }
      }
    }
  ];

  container.innerHTML = `
    <!-- Section Header Banner -->
    <div class="integrated-monograph-header danger-theme" style="margin-bottom: 2rem;">
      <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: #fee2e2; color: #991b1b; font-size: 0.78rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 9999px; margin-bottom: 0.65rem; border: 1px solid #f87171;">
        <span>⚖️ ${t.tabLookalikes || "Deadly Lookalikes"}</span> • <span>Zero Tolerance • 4 Visual Comparators • Toxin Science</span>
      </div>
      <h1 class="integrated-monograph-title" style="color: #991b1b; margin-bottom: 0.4rem;">${titleMap[lang] || titleMap.en}</h1>
      ${lang2 ? `<div class="integrated-monograph-subtitle">${titleMap[lang2] || ""}</div>` : ""}
    </div>

    <!-- 1. The 4 Interactive Visual Comparators (Front & Center!) -->
    <div class="section-divider-header" style="margin-bottom: 1.5rem;">
      <h2 style="font-size: 1.45rem; font-weight: 800; color: #1e293b; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
        <span>🔍</span> <span>${lang === "zh" ? "4大高危真假混淆微距形态对决（一键直达详情）" : (lang === "fi" ? "4 kriittistä näköislajivertailua" : "4 Critical Side-by-Side Visual Lookalike Comparators")}</span>
      </h2>
      <p style="font-size: 0.92rem; color: #64748b;">
        ${lang === "zh" ? "微距形态特征、钝分叉假褶vs锋利真褶、立体网眼与致命潜伏期特征全方位对比" : (lang === "fi" ? "Tarkat mikroskooppiset ja morfologiset erot rinnakkain, poimut vs. heltat ja jalkojen piirteet" : "Direct side-by-side morphological feature breakdowns, blunt ridges vs knife gills, and stem netting")}
      </p>
    </div>

    ${pairs.map(pair => `
      <div class="comparator-card">
        <div class="comparator-header">
          <div>
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin: 0 0 0.35rem 0;">
              ${pair.title[lang]}
              ${lang2 ? `<span style="font-size: 0.95rem; color:#64748b; display:block; margin-top:0.2rem; font-weight:400;">${pair.title[lang2]}</span>` : ""}
            </h3>
            <div>
              ${renderBilingualText(pair.summary, lang, lang2)}
            </div>
          </div>
        </div>

        <div class="comparator-pair-grid">
          <!-- Edible Column -->
          <div class="comparator-item edible">
            <div>
              <span class="badge badge-choice">${pair.edible.status}</span>
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 0.5rem 0 0; color: #14532d; cursor:pointer;" onclick="navigateToMushroom('${pair.edible.id}')">
              ${pair.edible.name[lang]}
              ${lang2 ? `<span style="color:#64748b; font-size:0.85rem; display:block; font-weight:400; margin-top: 2px;">${pair.edible.name[lang2]}</span>` : ""}
            </h4>
            <div class="comparator-img-wrap" onclick="navigateToMushroom('${pair.edible.id}')" title="${t.viewDetails || 'View details'}">
              <img src="${pair.edible.image}" alt="${pair.edible.name[lang]}">
            </div>
            <ul class="diff-checklist">
              ${pair.edible.traits[lang].map((tr, idx) => `
                <li style="color: #166534;">
                  <span style="color: #16a34a; font-weight: 700; flex-shrink: 0;">✓</span>
                  <div>
                    <span>${tr}</span>
                    ${lang2 && pair.edible.traits[lang2]?.[idx] ? `<div style="color:#64748b; font-size:0.82rem; margin-top:2px;">${pair.edible.traits[lang2][idx]}</div>` : ""}
                  </div>
                </li>
              `).join("")}
            </ul>
          </div>

          <!-- Toxic Column -->
          <div class="comparator-item toxic">
            <div>
              <span class="badge ${pair.toxic.status === t.badgeDeadly ? 'badge-deadly' : 'badge-inedible'}">${pair.toxic.status}</span>
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 0.5rem 0 0; color: #991b1b; cursor:pointer;" onclick="navigateToMushroom('${pair.toxic.id}')">
              ${pair.toxic.name[lang]}
              ${lang2 ? `<span style="color:#64748b; font-size:0.85rem; display:block; font-weight:400; margin-top: 2px;">${pair.toxic.name[lang2]}</span>` : ""}
            </h4>
            <div class="comparator-img-wrap" onclick="navigateToMushroom('${pair.toxic.id}')" title="${t.viewDetails || 'View details'}">
              <img src="${pair.toxic.image}" alt="${pair.toxic.name[lang]}">
            </div>
            <ul class="diff-checklist">
              ${pair.toxic.traits[lang].map((tr, idx) => `
                <li style="color: #991b1b;">
                  <span style="color: #dc2626; font-weight: 700; flex-shrink: 0;">⚠️</span>
                  <div>
                    <span>${tr}</span>
                    ${lang2 && pair.toxic.traits[lang2]?.[idx] ? `<div style="color:#64748b; font-size:0.82rem; margin-top:2px;">${pair.toxic.traits[lang2][idx]}</div>` : ""}
                  </div>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
      </div>
    `).join("")}

    <!-- 2. Lethal Toxin Biochemistry & Symptoms Latency -->
    <div class="section-divider-header" style="margin-bottom: 1.5rem;">
      <h2 style="font-size: 1.45rem; font-weight: 800; color: #1e3a2b; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
        <span>☠️</span> <span>${lang === "zh" ? "芬兰主要毒素细胞作用机理与超长潜伏期剖析" : (lang === "fi" ? "Sienten myrkkytyypit ja solutason vaikutukset" : "Lethal Toxin Biochemistry & Delayed Symptoms Guide")}</span>
      </h2>
      <p style="font-size: 0.92rem; color: #64748b;">
        ${lang === "zh" ? "牢记不可逆细胞损伤机制：高温水煮对鹅膏毒肽与奥来毒素完全无效！" : (lang === "fi" ? "Opi tuntemaan solumyrkkyjen tuhomekanismit: keittäminen ei auta amatoksiiniin tai orellaniiniin!" : "Understanding the irreversible cellular damage mechanisms: cooking does NOT destroy amatoxins or orellanine!")}
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem; margin-bottom: 2.5rem;">
      ${toxins.map(tox => `
        <div style="background: #ffffff; border: 1px solid #fecaca; border-left: 4px solid #dc2626; border-radius: var(--radius); padding: 1.25rem; box-shadow: var(--shadow); display: flex; flex-direction: column;">
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #991b1b; margin-bottom: 0.25rem;">${tox.name[lang] || tox.name.en}</h3>
          <div style="font-size: 0.84rem; font-weight: 700; color: #475569; margin-bottom: 0.5rem;">🍄 ${tox.source}</div>
          <div style="background: #fee2e2; color: #991b1b; font-size: 0.82rem; font-weight: 700; padding: 0.35rem 0.65rem; border-radius: 4px; margin-bottom: 0.75rem;">
            ⏱️ ${tox.latency[lang] || tox.latency.en}
          </div>
          <p style="font-size: 0.86rem; color: #334155; line-height: 1.55; margin: 0; flex: 1;">
            ${tox.mechanism[lang] || tox.mechanism.en}
          </p>
        </div>
      `).join("")}
    </div>

    <!-- 3. Zero Tolerance Harvesting Protocol -->
    <div style="background: #fef2f2; border: 1px solid #fca5a5; border-radius: var(--radius); padding: 1.5rem; margin-bottom: 2rem;">
      <h3 style="font-size: 1.15rem; font-weight: 800; color: #991b1b; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
        <span>🛡️</span> <span>${lang === "zh" ? "野外防误食“零容忍黄金法则”" : (lang === "fi" ? "Sienestäjän nollatoleranssi ja kultainen sääntö" : "The Zero-Tolerance Golden Rule for Wild Foraging")}</span>
      </h3>
      <ol style="padding-left: 1.25rem; font-size: 0.88rem; color: #7f1d1d; line-height: 1.6;">
        <li><strong>${lang === "zh" ? "100% 确定原则" : (lang === "fi" ? "100 % tunnistusvarmuus" : "100% Certainty")}:</strong> ${lang === "zh" ? "只要有一丝犹豫或与图鉴特征不符，坚决不采、不吃、立即丢弃！" : (lang === "fi" ? "Poimi ja syö vain lajeja, jotka tunnet sataprosenttisen varmasti." : "Only forage and eat species you can identify with 100% certainty. Never guess.")}</li>
        <li><strong>${lang === "zh" ? "逐朵查验，严防混入" : (lang === "fi" ? "Tarkista jokainen sieni erikseen" : "Check Every Single Specimen")}:</strong> ${lang === "zh" ? "漏斗鸡油菌与赭红丝膜菌经常在同一丛苔藓中混生！清理时必须逐朵核查菌柄是否为空心黄吸管，切勿整把抓进锅中！" : (lang === "fi" ? "Suppilovahvero ja hengenvaarallinen suippumyrkkyseitikki kasvavat sekaisin samoissa sammalikoissa. Tarkista jokainen sieni!" : "Funnel chanterelles and Deadly Webcap grow tangled in the same moss clumps. Inspect every stem individually before cooking!")}</li>
        <li><strong>${lang === "zh" ? "警惕民间伪科学" : (lang === "fi" ? "Älä usko uskomuksiin" : "Reject False Myths")}:</strong> ${lang === "zh" ? "“生虫的蘑菇无毒”、“大蒜银针变黑才说明有毒”、“煮透就能去毒”均为致命伪科学！白毒鹅膏有虫蛀依然致命，且毒素极度耐高温！" : (lang === "fi" ? "Toukkaisuus, hopealusikan tummuminen tai keittäminen eivät todista sienen myrkyttömyyttä." : "Insects and slugs freely eat lethal destroying angels; silver spoons do NOT test toxicity; and boiling does NOT neutralize amatoxins.")}</li>
      </ol>
    </div>
  `;
}

// -------------------------------------------------------------
// Cooking Guide & Recipes
// -------------------------------------------------------------

// Render Video Masterclasses Cards for Cooking Tab
function renderCookingGalleryCards(catalog, lang, lang2, t) {
  if (!catalog || catalog.length === 0) return "";

  return catalog.map(v => {
    const title = v.title[lang] || v.title.en;
    const title2 = (lang2 && lang2 !== lang && v.title[lang2]) ? v.title[lang2] : null;
    const desc = v.desc ? (v.desc[lang] || v.desc.en) : "";
    const sp = v.speciesId ? I18N.species.find(s => s.id === v.speciesId) : null;
    const spName = sp ? (sp.names[lang]?.primary || sp.latinName) : "";
    const catClasses = (v.categories || []).join(" ");
    const isChinese = v.tradition === 'zh';

    return `
      <div class="cooking-gallery-card" data-categories="${catClasses}">
        <div class="cooking-gallery-thumb-wrap">
          <img src="https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg" alt="${title}" class="cooking-gallery-thumb" loading="lazy" />
          <div class="cooking-gallery-play-btn" title="${title}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <span class="cooking-gallery-duration">⏱️ ${v.duration}</span>
          <span class="cooking-gallery-badge ${isChinese ? 'chinese' : 'nordic'}">
            ${isChinese ? '🇨🇳 中华大师课' : '🇫🇮 Suomi / Nordic'}
          </span>
        </div>
        <div class="cooking-gallery-info">
          <div class="cooking-gallery-creator">👨‍🍳 ${v.creator}</div>
          <h4 class="cooking-gallery-card-title">${title}</h4>
          ${title2 ? `<div class="cooking-gallery-card-subtitle">${title2}</div>` : ""}
          <p class="cooking-gallery-card-desc">${desc}</p>
          <div class="cooking-gallery-card-footer">
            ${sp ? `
              <a href="#/mushroom/${sp.id}" onclick="navigateToMushroom('${sp.id}'); return false;" class="gallery-species-chip" title="${spName}">
                <img src="${sp.image}" alt="${spName}" class="gallery-chip-thumb" />
                <span>${spName}</span>
              </a>
            ` : `<div></div>`}
            <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="btn-video-link btn-video-link-sm" title="${title}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="color: #dc2626;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              <span>${t.watchVideoBtn || "Watch on YouTube"}</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Global Filter for Video Masterclasses in Cooking Tab
window.filterCookingVideos = function(category, btnElement) {
  if (btnElement && btnElement.parentElement) {
    btnElement.parentElement.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
  }

  const cards = document.querySelectorAll('#cooking-gallery-grid .cooking-gallery-card');
  cards.forEach(card => {
    const cats = (card.dataset.categories || "").split(' ');
    if (category === 'all' || cats.includes(category)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
};

function renderCookingGuide() {
  const container = document.getElementById("cooking-container");
  if (!container) return;

  const lang = I18N.currentLang;
  const lang2 = I18N.secondaryLang;
  const guide = I18N.cookingGuide[lang];
  const guide2 = lang2 ? I18N.cookingGuide[lang2] : null;
  const t = I18N.ui[lang] || I18N.ui.en;

  const titleMap = {
    en: "🍳 Culinary Preparation, Preservation Science & Forest Kitchen",
    zh: "🍳 芬兰野菇保鲜科学、传统风味料理与中餐实战心法",
    fi: "🍳 Sienien säilöntä, esikäsittely ja perinteiset metsäreseptit"
  };
  const descMap = {
    en: "Dehydration temperature curves, dry-pan sweating (haudutus), milkcap salt-curing (suolasienet), 28 video masterclasses, and authentic Nordic & Chinese recipes.",
    zh: "低温风干脱水曲线、干锅焖蒸杀青排酸（Haudutus）、乳菇焯水漂烫除苦与分层腌渍（Suolasienet），附28堂中芬视频大课与经典林地食谱。",
    fi: "Kuivauslämpötilat, sienten haudutus omassa nesteessään, rouskujen ryöppäys ja suolaus, 28 mestarikurssivideota ja perinteiset reseptit."
  };

  const chineseMastery = [
    {
      icon: "🔥",
      title: { en: "High-Heat Dry Wok Searing", zh: "猛火干锅煸炒出水法", fi: "Kuivapaahto wokissa" },
      desc: {
        en: "Nordic mushrooms hold 90% water. Searing them in a hot, dry wok without oil first evaporates excess liquid. Once squeaking and slightly caramelizing, add rapeseed oil, garlic, and fresh chili.",
        zh: "芬兰野菌含水量高达90%。切勿起锅直接下油焖炸！先将改刀切片的菌子倒入大火干锅中不断翻炒，逼出大量水气至表面微焦紧致，再淋入菜籽油、大蒜碎与青红椒大火快炒。",
        fi: "Sienissä on 90 % vettä. Paahda sienet ensin kuivassa kuumassa wokissa ilman öljyä nesteen haihduttamiseksi, ja lisää rypsiöljy ja mausteet vasta sitten."
      }
    },
    {
      icon: "🥢",
      title: { en: "Cantonese Steaming with Ginger", zh: "广式葱姜清蒸原味法", fi: "Höyrytys inkiväärillä" },
      desc: {
        en: "Supreme for pristine young Porcini (*Boletus edulis*) and Orange Birch Boletes (*Leccinum versipelle*). Slice 5mm thick, arrange on plate with julienned ginger and scallions, steam 6–8 minutes, finish with hot sesame oil and light soy sauce.",
        zh: "极品幼嫩美味牛肝菌（白牛肝）与桦树牛肝菌（红头牛肝）的最顶级吃法！切5毫米薄片平铺，撒大量姜丝与葱白，大火蒸6-8分钟，淋热花生油激香，浇少许生抽即可享用天然山野之美。",
        fi: "Loistava tapa valmistaa nuoret herkkutatit: viipaloi ohuelti, höyrytä inkiväärin ja kevätsipulin kanssa 6–8 minuuttia ja viimeistele tilkalla kuumaa seesamiöljyä ja soijaa."
      }
    },
    {
      icon: "🍲",
      title: { en: "Yunnan Wild Mushroom Chicken Broth", zh: "滇风野生菌老母鸡煲汤", fi: "Haudutettu sienikanakeitto" },
      desc: {
        en: "Combine dried black trumpets, rehydrated porcini, and fresh funnel chanterelles with free-range chicken and wolfberries. Simmer gently for 2 hours for a rich, golden umami soup.",
        zh: "将泡发的灰包号角菇、美味牛肝菌干片与新鲜漏斗鸡油菌同煲！搭配慢炖老母鸡、红枣与枸杞文火慢炖2小时，汤色金黄澄澈，氨基酸与谷氨酸鲜味充沛，滋补强身。",
        fi: "Yhdistä kuivatut mustatorvisienet ja herkkutatit tuoreisiin suppilovahveroihin ja kanaan. Hauduta 2 tuntia uskomattoman aromikkaaksi kullankeltaiseksi liemeksi."
      }
    }
  ];

  const videoGallerySectionHtml = `
    <div class="cooking-gallery-section" style="margin: 2.5rem 0;">
      <div class="cooking-gallery-header">
        <div>
          <h3 class="cooking-gallery-title">
            ${t.videoMasterclassesTitle || "🎥 Video Masterclasses & Forest Kitchen Guides"}
          </h3>
          <p class="cooking-gallery-desc">
            ${t.videoMasterclassesDesc || "Authentic video tutorials from Finnish Martat experts and Chinese masterchefs, covering forest-to-table techniques, parboiling, and preservation."}
          </p>
        </div>
      </div>

      <div class="cooking-gallery-filters" id="cooking-gallery-filters">
        <button class="gallery-filter-btn active" onclick="filterCookingVideos('all', this)">${t.videoFilterAll || "All Masterclasses (28)"}</button>
        <button class="gallery-filter-btn" onclick="filterCookingVideos('finnish', this)">${t.videoFilterFinnish || "🇫🇮 Finnish & Martat"}</button>
        <button class="gallery-filter-btn" onclick="filterCookingVideos('chinese', this)">${t.videoFilterChinese || "🇨🇳 Chinese Masterclasses"}</button>
        <button class="gallery-filter-btn" onclick="filterCookingVideos('chanterelle', this)">${t.videoFilterChanterelle || "Chanterelles & Trumpets"}</button>
        <button class="gallery-filter-btn" onclick="filterCookingVideos('bolete', this)">${t.videoFilterBolete || "Boletes & Porcini"}</button>
        <button class="gallery-filter-btn" onclick="filterCookingVideos('milkcap', this)">${t.videoFilterMilkcap || "Milkcaps & Salting"}</button>
        <button class="gallery-filter-btn" onclick="filterCookingVideos('soup', this)">${t.videoFilterSoup || "Soups & Broths"}</button>
      </div>

      <div class="cooking-gallery-grid" id="cooking-gallery-grid">
        ${renderCookingGalleryCards(I18N.culinaryVideoCatalog, lang, lang2, t)}
      </div>
    </div>
  `;

  container.innerHTML = `
    <!-- Section Header Banner -->
    <div class="integrated-monograph-header" style="margin-bottom: 2rem;">
      <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: #ecfdf5; color: #047857; font-size: 0.78rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 9999px; margin-bottom: 0.65rem; border: 1px solid #a7f3d0;">
        <span>🍳 ${t.tabCooking || "Cooking & Preservation"}</span> • <span>Preservation Science • 28 Videos • Classic Recipes</span>
      </div>
      <h1 class="integrated-monograph-title" style="margin-bottom: 0.4rem;">${titleMap[lang] || titleMap.en}</h1>
      ${lang2 ? `<div class="integrated-monograph-subtitle">${titleMap[lang2] || ""}</div>` : ""}
      <p class="integrated-monograph-desc">${descMap[lang] || descMap.en}</p>
    </div>

    <!-- 1. Essential Kitchen & Preservation Principles (4 Cards) -->
    <div style="background: #ffffff; border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow);">
      <h2 style="font-size: 1.35rem; font-weight: 800; color: #1e3a2b; margin-bottom: 0.5rem;">
        ${guide.title}
        ${guide2 ? `<span style="display:block; font-size: 0.98rem; color:#64748b; margin-top:0.2rem; font-weight:400;">${guide2.title}</span>` : ""}
      </h2>
      <div style="color: #475569; font-size: 0.92rem; margin-bottom: 1.25rem;">
        <p>${guide.intro}</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
        ${guide.principles.map((p, idx) => `
          <div style="background: #f8fafc; border: 1px solid var(--border); padding: 1rem; border-radius: 6px; display: flex; flex-direction: column;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: #0f172a; margin-bottom: 0.35rem;">${p.title}</h4>
            <p style="font-size: 0.85rem; color: #475569; line-height: 1.5; margin-bottom: 0.5rem;">${p.content}</p>
            ${guide2 && guide2.principles?.[idx] ? `
              <div style="margin-top: 0.4rem; font-size: 0.82rem; color: #64748b; line-height: 1.45;">
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

    <!-- 2. Video Masterclasses Gallery (28 Videos) -->
    ${videoGallerySectionHtml}

    <!-- 3. Featured Traditional Recipes -->
    <div class="section-divider-header" style="margin-bottom: 1.25rem;">
      <h3 style="font-size: 1.35rem; font-weight: 800; color: #0f172a; margin-bottom: 0.35rem;">
        🍲 ${lang === "zh" ? "芬兰传统林地风味食谱精选" : (lang === "fi" ? "Perinteiset Reseptit" : "Featured Traditional Nordic Recipes")}
      </h3>
      <p style="font-size: 0.9rem; color: #64748b;">
        ${lang === "zh" ? "包含备料时间、烹调火候、完整食材清单与视频教学演示" : (lang === "fi" ? "Valmistusajat, raaka-aineet, vaiheittaiset ohjeet ja videot" : "Prep times, ingredients, step-by-step instructions, and video walkthroughs")}
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2.5rem;">
      ${guide.recipes.map((rcp, idx) => {
        const rcp2 = guide2 && guide2.recipes?.[idx] ? guide2.recipes[idx] : null;
        return `
        <div style="background: #ffffff; border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; display: flex; flex-direction: column; box-shadow: var(--shadow);">
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

    <!-- 4. Chinese Wild Mushroom Mastery -->
    <div style="background: #fffbf0; border: 1px solid #fde68a; border-left: 4px solid #d97706; border-radius: var(--radius); padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow);">
      <h3 style="font-size: 1.25rem; font-weight: 800; color: #92400e; margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.4rem;">
        <span>🇨🇳</span> <span>${lang === "zh" ? "中餐烹饪实战心法：如何驾驭芬兰野生菌" : (lang === "fi" ? "Kiinalaisen keittiön sienisalaisuudet" : "Chinese Wild Mushroom Culinary Mastery")}</span>
      </h3>
      <p style="font-size: 0.88rem; color: #78350f; margin-bottom: 1.25rem;">
        ${lang === "zh" ? "巧妙融合云南干巴菌/牛肝菌旺火爆炒技法与粤式清蒸原味，释放北欧野生菌极致鲜度" : (lang === "fi" ? "Wok-paahtoa, höyrytystä ja aromaattisia liemiä pohjoisen villisienille" : "Applying high-heat wok searing, ginger steaming, and slow-simmered umami broths to Nordic wild mushrooms")}
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
        ${chineseMastery.map(cm => `
          <div style="background: #ffffff; border: 1px solid #fef3c7; border-radius: 6px; padding: 1rem; display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; gap: 0.45rem; margin-bottom: 0.35rem;">
              <span style="font-size: 1.25rem;">${cm.icon}</span>
              <h4 style="font-size: 0.95rem; font-weight: 700; color: #92400e; margin: 0;">${cm.title[lang] || cm.title.en}</h4>
            </div>
            <p style="font-size: 0.84rem; color: #475569; line-height: 1.55; margin: 0;">${cm.desc[lang] || cm.desc.en}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// Forest Habitats, Trees & Seasons (Chapter 03 Integration)
// -------------------------------------------------------------
function renderHabitats() {
  const container = document.getElementById("habitats-container");
  if (!container) return;

  const lang = I18N.currentLang;
  const lang2 = I18N.secondaryLang;
  const t = I18N.ui[lang] || I18N.ui.en;

  const ch03 = getHandbookChapter("03");

  const ch03Html = ch03 ? `
    <div class="integrated-monograph-header">
      <div class="integrated-monograph-top-bar">
        <div class="reader-meta-right">
          <span class="reader-badge">${ch03.badge[lang]}</span>
          <span class="reader-readtime">⏱️ ${ch03.readTime ? ch03.readTime[lang] : ""}</span>
        </div>
      </div>
      <h1 class="integrated-monograph-title">${ch03.icon} ${ch03.title[lang]}</h1>
      ${lang2 ? `<div class="integrated-monograph-subtitle">${ch03.title[lang2]}</div>` : ""}
      <p class="integrated-monograph-desc">${ch03.desc[lang]}</p>
      ${renderSpeciesChipsForChapter(ch03, lang, t)}
    </div>
    <article class="live-reader-body integrated-monograph-body">
      ${ch03.html || ""}
    </article>
  ` : "";

  container.innerHTML = ch03Html;
}

// -------------------------------------------------------------
// HSL Transit Spots & Hidden Trails (Merged Unified Section)
// -------------------------------------------------------------
function renderSpots() {
  const container = document.getElementById("spots-container");
  if (!container) return;

  const lang = I18N.currentLang;
  const lang2 = I18N.secondaryLang;
  const t = I18N.ui[lang] || I18N.ui.en;

  const titleMap = {
    en: "🚌 Helsinki Foraging Spots by HSL Transit & 5 Hidden Wilderness Gems",
    zh: "🚌 赫尔辛基大区HSL公共交通采蘑菇宝典与5大隐世秘境",
    fi: "🚌 Helsingin seudun sienipaikat HSL-yhteyksillä ja 5 salaista erämaahelmeä"
  };
  const descMap = {
    en: "Direct commuter trains, trunk buses, and live Google Maps trailhead navigation for Keskuspuisto, Sipoonkorpi, Nuuksio, and Luukki, plus 5 peaceful, low-pressure wilderness gems across the capital region.",
    zh: "详尽整理搭乘HSL火车与干线公交直达的经典森林采摘点（中央公园、西波国家公园、努克西奥、Luukki），并特别收录5大极少人知的清幽秘境，附起终点定位与Google Maps一键导航。",
    fi: "Kattava opas julkisen liikenteen sienireiteille Keskuspuistoon, Sipoonkorpeen, Nuuksioon ja Luukkiin sekä 5 rauhalliseen erämaakohteeseen suoralla Google Maps -navigoinnilla."
  };

  const transitCards = [
    {
      icon: "🎫",
      title: { en: "Zone A–D Ticketing", zh: "ABCD区票务攻略", fi: "Vyöhykeliput (ABCD)" },
      desc: {
        en: "Zone AB covers Keskuspuisto & Kuusijärvi trailhead. Zone ABC covers Nuuksio Haukkalampi, Sipoonkorpi, and Luukki. Zone ABCD covers Meiko (Kirkkonummi). Buy tickets easily in the official HSL mobile app.",
        zh: "AB区覆盖中央公园和Kuusijärvi入口；ABC区覆盖努克西奥Haukkalampi、西波和Luukki；ABCD区覆盖Kirkkonummi的Meiko秘境。建议直接使用HSL App购票。",
        fi: "AB-lippu kattaa Keskuspuiston ja Kuusijärven. ABC kattaa Nuuksion Haukkalammen, Sipoonkorven ja Luukin. ABCD-lippu tarvitaan Meikoon (Kirkkonummi)."
      }
    },
    {
      icon: "🚆",
      title: { en: "Commuter Trains", zh: "通勤近郊火车", fi: "Lähijunat (I, P, K, R, U)" },
      desc: {
        en: "I/P ring rail to Malmi/Myyrmäki; K train to Kerava/Korso for Sipoonkorpi feeder buses; U/L/Y trains west along the coastal line to Espoo & Kirkkonummi for Nuuksio and Meiko.",
        zh: "I/P线环线火车直通万塔；K线直通Kerava/Korso换乘西波接驳公交；U/L/Y线往西沿沿海铁路线直通埃斯波与Kirkkonummi（前往努克西奥与Meiko）。",
        fi: "I/P-kehäradat, K-juna Korsoon ja Keravalle Sipoonkorven busseihin, U/L/Y-junat länteen Espooseen ja Kirkkonummelle Meikoon."
      }
    },
    {
      icon: "🚌",
      title: { en: "Trunk Bus Lines", zh: "干线快速公交", fi: "Runkobussit & Linjat" },
      desc: {
        en: "Orange trunk buses 500, 510, 520, 530 provide orbital cross-city connections. Bus 345 from Kalasatama/Elielinaukio goes direct to Luukki, Vaakkoi, and Tremanskärr.",
        zh: "橙色干线公交500/510/520/530提供高频跨区环线换乘；345路从Kalasatama/火车站直达Luukki、Vaakkoi与Tremanskärr秘境入口。",
        fi: "Runkolinjat 500, 510, 520, 530 sekä Vihdintien bussi 345 vievät suoraan Luukkiin, Vaakkoihin ja Tremanskärriin."
      }
    },
    {
      icon: "🚲",
      title: { en: "Bikes & Gear Rules", zh: "自行车与携篮规定", fi: "Polkupyörät & Varusteet" },
      desc: {
        en: "Bicycles travel free on commuter trains and the Metro (avoid weekday peak hours 07:00–09:00 and 15:00–18:00). Bicycles are not allowed on regular buses. Carry mushrooms in rigid wicker baskets.",
        zh: "近郊火车和地铁允许免费携带自行车（建议避开工作日早晚高峰）；普通公交车不可带单车。采菇请务必携带透气硬质竹篮或板条木筐。",
        fi: "Polkupyörät kulkevat maksutta lähijunissa ja metrossa (vältä ruuhka-aikoja). Bussiin pyörää ei voi ottaa. Kuljeta sienet ilmavassa korissa."
      }
    }
  ];

  const hiddenGems = [
    {
      name: { en: "Meiko Nature Reserve", zh: "Meiko 自然保护区", fi: "Meikon luonnonsuojelualue" },
      loc: "Kirkkonummi • Zone D",
      route: {
        en: "Train U/L to Kirkkonummi station + Bus 907 to Myllykylä or 4 km bike/taxi",
        zh: "U/L线火车至Kirkkonummi站 + 换乘907路至Myllykylä，或骑行/打车4公里",
        fi: "U/L-juna Kirkkonummelle + bussi 907 tai 4 km pyöräily/taksi"
      },
      highlights: {
        en: "Pristine, crystal-clear oligotrophic wilderness lakes, ancient quartzite crags, and untouched old-growth pine/spruce heaths. Very low picking pressure compared to Nuuksio.",
        zh: "极清澈的原始贫营养冰川湖泊群、古老石英岩峭壁与未经砍伐的百年松杉原始林。周末游客仅为努克西奥的零头，极少采摘干扰。",
        fi: "Kirkasvetiset erämaajärvet, jyrkät kalliomänniköt ja vanhat aarnimetsät. Huomattavasti Nuuksiota rauhallisempi."
      },
      species: ["cantharellus_cibarius", "craterellus_tubaeformis", "boletus_edulis", "hydnum_repandum"]
    },
    {
      name: { en: "Tremanskärr Nature Reserve", zh: "Tremanskärr 泥炭沼泽森林", fi: "Tremanskärrin luonnonsuojelualue" },
      loc: "Northern Espoo • Zone C",
      route: {
        en: "Bus 345 from Elielinaukio along Vihdintie to Rinnekoti / Tremanskärr entrance",
        zh: "火车站广场乘345路沿Vihdintie至Rinnekoti/Tremanskärr入口",
        fi: "Bussi 345 Elielinaukiolta Vihdintietä Rinnekodin / Tremanskärrin pysäkille"
      },
      highlights: {
        en: "Natural raised peat bog with wooden duckboard trails surrounded by primeval, moss-laden Norway spruce forests. Dense carpet of bilberry and funnel chanterelles in October.",
        zh: "芬兰南部珍贵的原生态高位泥炭藓沼泽，木栈道穿行其中，外围被高大浓密的云杉原始林环抱。深秋10月苔藓层密布漏斗鸡油菌与齿菌。",
        fi: "Luonnontilainen keidassuo pitkospuilla, jota ympäröi satumaisen sammaleinen kuusikko. Syksyllä erinomainen suppilovahveropaikka."
      },
      species: ["craterellus_tubaeformis", "hydnum_repandum", "lactarius_trivialis", "russula_paludosa"]
    },
    {
      name: { en: "Vaakkoi Wilderness Plateau", zh: "Vaakkoi 荒原森林台地", fi: "Vaakkoin erämaa-alue" },
      loc: "Northern Espoo • Zone C",
      route: {
        en: "Bus 345 to Vaakkoi stop (trailhead directly on Vihdintie)",
        zh: "乘345路公交在Vaakkoi站下车，起点直接位于Vihdintie路旁",
        fi: "Bussi 345 Vaakkoin pysäkille (lähtöpaikka suoraan Vihdintien varressa)"
      },
      highlights: {
        en: "Roadless backcountry wilderness between Luukki and Nuuksio. Rugged rocky ridges, natural kettle ponds, and zero commercial facilities. Exceptional bolete and funnel chanterelle habitat.",
        zh: "位于Luukki与Nuuksio之间的无车道原始荒野台地。地势起伏剧烈，石英岩脊与湿地相嵌，完全无商业设施，是牛肝菌与漏斗鸡油菌绝佳秘境。",
        fi: "Tieverkoston ulkopuolella oleva kalliometsäalue Luukin ja Nuuksion välissä. Ei kahviloita tai ruuhkia, runsaasti tatteja ja vahveroita."
      },
      species: ["boletus_edulis", "boletus_pinophilus", "suillus_variegatus", "craterellus_cornucopioides"]
    },
    {
      name: { en: "Luukki Kettle Lakes & Northern Trails", zh: "Luukki 冰川锅穴湖森林深处", fi: "Luukin erämaajärvet ja pohjoispolut" },
      loc: "Northern Espoo • Zone C",
      route: {
        en: "Bus 345 direct to Luukin kartano; walk north toward Kaitalampi / Halkolampi",
        zh: "乘345路直达Luukin kartano庄园；避开沙滩向北深入Kaitalampi与Halkolampi森林",
        fi: "Bussi 345 Luukin kartanolle; suuntaa pohjoiseen Kaitalammelle ja Halkolammelle"
      },
      highlights: {
        en: "While the manor and beach get recreational visitors, the rugged kettle lakes and western esker ridges are rich in pine boletes, trumpet chanterelles, and milkcaps.",
        zh: "大多数市民只在庄园草坪与湖滨浴场休闲，往北深入森林，冰川锅穴湖泊与松树沙丘地带生机勃勃，松蘑、牛肝菌与黑号角菇产量极高。",
        fi: "Kartanon uimarannan ulkopuolella avautuvat harjumänniköt ja suppalammet, joiden reunoilta löytyy runsaasti herkkutatteja ja rouskuja."
      },
      species: ["boletus_pinophilus", "cantharellus_cibarius", "craterellus_cornucopioides", "lactarius_rufus"]
    },
    {
      name: { en: "Northern Sipoonkorpi / Kuusijärvi to Bisajärvi", zh: "北西波森林（Kuusijärvi 至 Bisajärvi）", fi: "Pohjois-Sipoonkorpi (Kuusijärveltä Bisajärvelle)" },
      loc: "Vantaa / Sipoo • Zone B/C",
      route: {
        en: "Bus 736/739 to Kuusijärvi; hike east along the northern forested trail toward Bisajärvi",
        zh: "乘736/739路公交至Kuusijärvi；沿北向森林小径向东徒步深入Bisajärvi湖畔",
        fi: "Bussi 736/739 Kuusijärvelle; vaella itään vanhaa metsäreittiä Bisajärvelle"
      },
      highlights: {
        en: "Far quieter than the southern Kalkkiuunintie entrance. Deep mossy spruce ravines and rocky slopes teeming with hedgehog mushrooms, porcini, and late autumn funnel chanterelles.",
        zh: "相比南入口Kalkkiuunintie游客稀少很多。幽深的云杉苔藓峡谷与岩石裂隙间，卷缘齿菌、美味牛肝菌和深秋漏斗鸡油菌层出不穷。",
        fi: "Paljon eteläistä Kalkkiuunintietä rauhallisempi reitti. Syvät sammalkorvet ovat loistavia orakas- ja suppispaikkoja."
      },
      species: ["hydnum_repandum", "boletus_edulis", "craterellus_tubaeformis", "cortinarius_caperatus"]
    }
  ];

  container.innerHTML = `
    <!-- Section Header Banner -->
    <div class="integrated-monograph-header" style="margin-bottom: 2rem;">
      <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: #ecfdf5; color: #047857; font-size: 0.78rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 9999px; margin-bottom: 0.65rem; border: 1px solid #a7f3d0;">
        <span>🚌 ${t.tabSpots || "Transit Spots & Trails"}</span> • <span>Zone A–D • 6 Core Trailheads • 5 Hidden Gems</span>
      </div>
      <h1 class="integrated-monograph-title" style="margin-bottom: 0.4rem;">${titleMap[lang] || titleMap.en}</h1>
      ${lang2 ? `<div class="integrated-monograph-subtitle">${titleMap[lang2] || ""}</div>` : ""}
      <p class="integrated-monograph-desc">${descMap[lang] || descMap.en}</p>
    </div>

    <!-- 1. HSL Transit Framework (4 Quick Cards) -->
    <div class="transit-quick-strip" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-bottom: 2.25rem;">
      ${transitCards.map(tc => `
        <div style="background: #ffffff; border: 1px solid var(--border); border-radius: var(--radius); padding: 1.15rem; box-shadow: var(--shadow); display: flex; flex-direction: column;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
            <span style="font-size: 1.35rem;">${tc.icon}</span>
            <strong style="font-size: 0.95rem; color: #1e3a2b;">${tc.title[lang] || tc.title.en}</strong>
          </div>
          <p style="font-size: 0.84rem; color: #475569; line-height: 1.5; margin: 0;">${tc.desc[lang] || tc.desc.en}</p>
        </div>
      `).join("")}
    </div>

    <!-- 2. Prime Trailhead Cards & Live Directions (Front and Center!) -->
    <div class="section-divider-header" style="margin-bottom: 1.25rem;">
      <h2 style="font-size: 1.4rem; font-weight: 800; color: #1e3a2b; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
        <span>🥾</span> <span>${lang === "zh" ? "6大主力公共交通直达采摘点与Google Maps一键导航" : (lang === "fi" ? "6 parasta HSL-sienireittiä ja suora navigointi" : "6 Prime Foraging Trailheads & Live Navigation")}</span>
      </h2>
      <p style="font-size: 0.9rem; color: #64748b;">
        ${lang === "zh" ? "含公交直达班次、乘车耗时、推荐徒步路线、起点经纬度定位与实时Google Maps导航" : (lang === "fi" ? "Bussilinjat, matka-ajat, suositellut rengasreitit ja suorat Google Maps -opasteet lähtöpisteille" : "Live transit lines, travel durations, trailhead coordinates, and direct Google Maps directions")}
      </p>
    </div>

    <div class="spots-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 3rem;">
      ${I18N.spots.map(s => `
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
      `).join("")}
    </div>

    <!-- 3. The 5 Low-Pressure Hidden Wilderness Gems -->
    <div class="section-divider-header" style="margin-bottom: 1.25rem;">
      <h2 style="font-size: 1.4rem; font-weight: 800; color: #1e3a2b; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
        <span>🌲</span> <span>${lang === "zh" ? "芬兰森林5大小众少人采摘秘境深度评测" : (lang === "fi" ? "5 hiljaista ja salaista erämaakohdetta" : "5 Low-Pressure 'Hidden Gem' Wilderness Forests")}</span>
      </h2>
      <p style="font-size: 0.9rem; color: #64748b;">
        ${lang === "zh" ? "避开周末拥挤人流！深入未经密集踩踏的原生态清幽林区，坐享丰厚无扰的菌菇收获" : (lang === "fi" ? "Vältä suosituimpien reittien ruuhkat ja nauti koskemattoman metsän antimista rauhassa" : "Escape the weekend crowds: pristine moss carpets, undisturbed mycelial flushes, and tranquil backcountry lakes")}
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2.5rem;">
      ${hiddenGems.map(g => `
        <div style="background: #ffffff; border: 1px solid var(--border); border-radius: var(--radius); padding: 1.35rem; box-shadow: var(--shadow); display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem;">
            <div>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #1e3a2b; margin: 0;">${g.name[lang] || g.name.en}</h3>
              ${lang2 ? `<div style="font-size: 0.88rem; color: #64748b; margin-top: 0.15rem;">${g.name[lang2] || ""}</div>` : ""}
            </div>
            <span style="font-size: 0.76rem; font-weight: 700; background: #ecfdf5; color: #047857; padding: 0.2rem 0.55rem; border-radius: 9999px; border: 1px solid #a7f3d0; white-space: nowrap;">
              ${g.loc}
            </span>
          </div>

          <div style="font-size: 0.84rem; color: #334155; background: #f8fafc; padding: 0.6rem 0.75rem; border-radius: 6px; margin: 0.6rem 0 0.85rem; border: 1px solid #e2e8f0;">
            <strong>🚌 Transit:</strong> ${g.route[lang] || g.route.en}
          </div>

          <p style="font-size: 0.86rem; color: #475569; line-height: 1.55; margin-bottom: 1rem; flex: 1;">
            ${g.highlights[lang] || g.highlights.en}
          </p>

          <div style="border-top: 1px solid #f1f5f9; padding-top: 0.75rem;">
            <div style="font-size: 0.78rem; font-weight: 700; color: #64748b; margin-bottom: 0.35rem; text-transform: uppercase; letter-spacing: 0.04em;">Key Species:</div>
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
              ${g.species.map(spId => {
                const sp = I18N.species.find(s => s.id === spId);
                if (!sp) return "";
                const spName = sp.names[lang]?.primary || sp.latinName;
                return `<a href="#/mushroom/${sp.id}" class="inline-species-chip" onclick="navigateToMushroom('${sp.id}'); return false;">🍄 ${spName}</a>`;
              }).join("")}
            </div>
          </div>
        </div>
      `).join("")}
    </div>

    <!-- 4. Transit Etiquette on HSL -->
    <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: var(--radius); padding: 1.5rem; margin-bottom: 2rem;">
      <h3 style="font-size: 1.15rem; font-weight: 800; color: #14532d; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
        <span>🎒</span> <span>${lang === "zh" ? "公共交通采摘乘车礼仪与野外装备指南" : (lang === "fi" ? "Sienestäjän joukkoliikenne-etiketti ja varusteet" : "Public Transit Foraging Etiquette & Field Gear")}</span>
      </h3>
      <ul style="padding-left: 1.25rem; font-size: 0.88rem; color: #166534; line-height: 1.6;">
        <li><strong>${lang === "zh" ? "篮具透气" : (lang === "fi" ? "Hengittävä kori" : "Breathable Baskets")}:</strong> ${lang === "zh" ? "使用硬质竹篮、柳条篮或透气布袋，严禁使用密闭塑料袋，防止蘑菇出汗变质发酸。" : (lang === "fi" ? "Käytä aina ilmavaa sieni- tai pärekoria, älä koskaan muovipussia." : "Always use rigid wicker baskets or canvas totes; never use plastic bags where heat and condensation spoil proteins.")}</li>
        <li><strong>${lang === "zh" ? "现场初筛" : (lang === "fi" ? "Puhdista metsässä" : "Clean on Site")}:</strong> ${lang === "zh" ? "在森林就地用刷子或小刀清理泥土松针，切除虫蛀泥根，避免松针杂物在公共交通上散落。" : (lang === "fi" ? "Puhdista sienet jo maastossa roskien välttämiseksi liikennevälineissä." : "Brush dirt and pine needles off caps in the woods before boarding buses or trains.")}</li>
        <li><strong>${lang === "zh" ? "手机电量保护" : (lang === "fi" ? "Pidä varavirta mukana" : "Power Bank")}:</strong> ${lang === "zh" ? "秋季森林低温会加速手机电量流失，务必携带充电宝，确保随时可使用112定位与HSL查车次。" : (lang === "fi" ? "Kylmä syysilma kuluttaa akkua; ota mukaan ladattu varavirtalähde 112- ja HSL-sovelluksia varten." : "Cold autumn air drains phone batteries quickly; carry a portable power bank for emergency 112 GPS and HSL timetable routing.")}</li>
      </ul>
    </div>
  `;
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
  const t = I18N.ui[lang] || I18N.ui.en;

  const titleMap = {
    en: "🛡️ Legal Rights, Nature Protection & Forest Safety in Finland",
    zh: "🛡️ 芬兰自然公共权、自然保护区法规与森林安全守则",
    fi: "🛡️ Jokamiehenoikeudet, luonnonsuojelualueet ja metsäturvallisuus"
  };
  const descMap = {
    en: "Master Everyman's Right (Jokamiehenoikeus), commercial vs personal limits, strict rules in nature reserves, and protective protocols against ticks (punkit) and deer keds (hirvikärpäset). Includes 112 Suomi app setup.",
    zh: "详尽解析芬兰人人享有的自然公共权（Jokamiehenoikeus）、采摘限额、自然保护区禁区界限，以及防范森林蜱虫（punkit）与鹿蝇（hirvikärpäset）的实地生存指南与112急救配置。",
    fi: "Kattava opas jokamiehenoikeuksiin, rauhoitettuihin suojelualueisiin ja maastoturvallisuuteen punkkeja sekä hirvikärpäsiä vastaan."
  };

  const allowedRules = [
    {
      en: "Pick Wild Mushrooms & Berries: Harvest wild edible mushrooms, berries, and uncultivated flowers freely on both state and private land without permits or fees.",
      zh: "自由采摘野菌与浆果：可在国家公有土地和私人林地上免费采摘野生蘑菇、浆果（蓝莓、越橘、云莓）与野花，无需许可证或缴纳任何税费。",
      fi: "Sienten ja marjojen poiminta: Saat poimia luonnonmarjoja, sieniä ja kukkia vapaasti myös toisen maalla ilman lupaa."
    },
    {
      en: "Walk, Ski & Cycle: Free pedestrian and cycling right-of-way through natural forests, heaths, wetlands, and frozen waterways.",
      zh: "自由通行与骑行：拥有徒步、滑雪、骑自行车穿越天然森林、荒原、湿地与冰封水域的法定通行权。",
      fi: "Liikkuminen: Saat liikkua jalan, hiihtäen ja pyöräillen luonnontilaisilla alueilla."
    },
    {
      en: "Temporary Camping: Pitch a tent for 1–2 nights on open natural terrain, provided you do not cause disturbance or pitch too close to homes.",
      zh: "短期野营扎帐：可在远离民居的天然开阔地短暂停留露营1-2晚，不得造成喧哗干扰。",
      fi: "Tilapäinen leiriytyminen: Saat telttailla tilapäisesti (1–2 yötä) riittävän etäällä asumuksista."
    },
    {
      en: "Tax-Free Commercial Sale: In Finland, you can legally sell wild mushrooms you foraged yourself completely tax-free under Income Tax Act § 89.",
      zh: "免税出售采摘果实：根据芬兰所得税法第89条，个人亲手采摘的野生蘑菇与浆果无论自食还是直接出售，所得收入完全依法免税！",
      fi: "Veroton myynti: Itse poimittujen luonnonmarjojen ja sienten myyntitulot ovat Suomessa tuloverolain 89 § mukaan verovapaita."
    }
  ];

  const prohibitedRules = [
    {
      en: "Do NOT Enter Private Yards (Pihapiiri): Stay at least 50–100m away from private homes, summer cottages (mökki), and cultivated fields.",
      zh: "严禁侵入私人庭院（Pihapiiri）：必须与他人永久住宅、度假木屋（Mökki）和耕地保持至少50-100米距离，避开视线与听觉范围。",
      fi: "Pihapiirirauha: Älä mene liian lähelle asuttuja taloja, mökkejä tai viljelyksiä (vähintään 50–100 m)."
    },
    {
      en: "Do NOT Harm Living Trees: Never break branches, chop wood, or peel birch bark (tuohi) from living trees without the landowner's explicit permission.",
      zh: "严禁损伤活体树木：严禁折断树枝、砍伐树木，或擅自剥取活白桦树皮（Tuohi）与钻取树汁，违者属违法毁坏林木罪。",
      fi: "Elävien puiden vahingoittaminen: Oksien taittaminen, puun kaataminen tai tuohen kiskominen ilman lupaa on kielletty."
    },
    {
      en: "Do NOT Gather Moss or Lichen: Gathering moss (sammal) or reindeer lichen (jäkälä) is strictly prohibited without landowner consent.",
      zh: "严禁铲采苔藓与地衣：铲取地表苔藓（Sammal）或驯鹿地衣（Jäkälä）破坏脆弱腐殖质层，未经地主书面许可严格禁止。",
      fi: "Sammalen ja jäkälän keruu: Sammalta tai jäkälää ei saa ottaa ilman maanomistajan lupaa."
    },
    {
      en: "Do NOT Light Open Campfires: Fires on bare ground or rock are illegal except at official municipal / Metsähallitus designated fire pits.",
      zh: "严禁随意野外生火：裸地或岩石上严禁点燃明火！仅可在国家公园划定的官方营火点生火，森林火险预警期间全境严禁任何明火。",
      fi: "Tulenteko: Avotulta ei saa tehdä maastoon ilman lupaa paitsi virallisille tulentekopaikoille."
    }
  ];

  container.innerHTML = `
    <!-- Section Header Banner -->
    <div class="integrated-monograph-header" style="margin-bottom: 2rem;">
      <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: #ecfdf5; color: #047857; font-size: 0.78rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 9999px; margin-bottom: 0.65rem; border: 1px solid #a7f3d0;">
        <span>🛡️ ${t.tabSafety || "Safety & Guidelines"}</span> • <span>Everyman's Right • Nature Reserves • Ticks & 112</span>
      </div>
      <h1 class="integrated-monograph-title" style="margin-bottom: 0.4rem;">${titleMap[lang] || titleMap.en}</h1>
      ${lang2 ? `<div class="integrated-monograph-subtitle">${titleMap[lang2] || ""}</div>` : ""}
      <p class="integrated-monograph-desc">${descMap[lang] || descMap.en}</p>
    </div>

    <!-- 1. Everyman's Right (Allowed vs Prohibited Side-by-Side) -->
    <div class="section-divider-header" style="margin-bottom: 1.25rem;">
      <h2 style="font-size: 1.4rem; font-weight: 800; color: #1e3a2b; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
        <span>⚖️</span> <span>${lang === "zh" ? "芬兰自然公共权法定权利与绝对禁区红线" : (lang === "fi" ? "Jokamiehenoikeudet: Sallittu ja kielletty" : "Everyman's Right: Statutory Rights vs. Strict Prohibitions")}</span>
      </h2>
      <p style="font-size: 0.9rem; color: #64748b;">
        ${lang === "zh" ? "宪法习惯法保障的大自然馈赠，采摘者必须严格自律恪守私人领地边界与环境保护责任" : (lang === "fi" ? "Suomen ainutlaatuinen oikeus nauttia luonnosta vastuullisesti ja luontoa kunnioittaen" : "Enjoying the generous Nordic nature responsibly while respecting private property and delicate biomes")}
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2.5rem;">
      <!-- Allowed Card -->
      <div style="background: #ffffff; border: 1px solid #86efac; border-top: 4px solid #16a34a; border-radius: var(--radius); padding: 1.35rem; box-shadow: var(--shadow);">
        <h3 style="font-size: 1.15rem; font-weight: 800; color: #15803d; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
          <span>✅</span> <span>${lang === "zh" ? "法律允许（人人享有的法定权利）" : (lang === "fi" ? "Mitä saat tehdä (Sallitut)" : "What You CAN Do (Your Rights)")}</span>
        </h3>
        <ul style="padding-left: 1.2rem; font-size: 0.86rem; color: #334155; line-height: 1.55;">
          ${allowedRules.map(r => `
            <li style="margin-bottom: 0.65rem;">
              ${r[lang] || r.en}
            </li>
          `).join("")}
        </ul>
      </div>

      <!-- Prohibited Card -->
      <div style="background: #ffffff; border: 1px solid #fca5a5; border-top: 4px solid #dc2626; border-radius: var(--radius); padding: 1.35rem; box-shadow: var(--shadow);">
        <h3 style="font-size: 1.15rem; font-weight: 800; color: #991b1b; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
          <span>❌</span> <span>${lang === "zh" ? "法律严禁（违法禁止行为）" : (lang === "fi" ? "Mitä et saa tehdä (Kielletyt)" : "What You CANNOT Do (Strictly Forbidden)")}</span>
        </h3>
        <ul style="padding-left: 1.2rem; font-size: 0.86rem; color: #334155; line-height: 1.55;">
          ${prohibitedRules.map(r => `
            <li style="margin-bottom: 0.65rem;">
              ${r[lang] || r.en}
            </li>
          `).join("")}
        </ul>
      </div>
    </div>

    <!-- 3. Nordic Forest Health: Ticks & Deer Keds -->
    <div class="section-divider-header" style="margin-bottom: 1.25rem;">
      <h2 style="font-size: 1.4rem; font-weight: 800; color: #1e3a2b; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
        <span>🐜</span> <span>${lang === "zh" ? "北欧森林害虫防范实操：蜱虫与鹿蝇生存手册" : (lang === "fi" ? "Metsäturvallisuus: Punkit ja hirvikärpäset" : "Nordic Forest Health: Ticks & Deer Keds Defense")}</span>
      </h2>
      <p style="font-size: 0.9rem; color: #64748b;">
        ${lang === "zh" ? "南部海岸林区从4月至深秋活跃。穿戴长靴、浅色长裤与细齿梳子，回家必查皮肤" : (lang === "fi" ? "Suojaudu punkeilta ja hirvikärpäsiltä oikealla pukeutumisella ja päivittäisellä tarkastuksella" : "Active across southern Uusimaa from April to late autumn. Protective socks, smooth fabrics, and nightly skin checks")}
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem; margin-bottom: 2.5rem;">
      <!-- Ticks Card -->
      <div style="background: #ffffff; border: 1px solid var(--border); border-radius: var(--radius); padding: 1.35rem; box-shadow: var(--shadow);">
        <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem;">
          <span style="font-size: 1.3rem;">🕷️</span>
          <h3 style="font-size: 1.1rem; font-weight: 800; color: #1e3a2b; margin: 0;">${lang === "zh" ? "蜱虫 (Punkit / Puutiaiset)" : (lang === "fi" ? "Punkit (Puutiaiset)" : "Ticks (Punkit)")}</h3>
        </div>
        <p style="font-size: 0.85rem; color: #475569; line-height: 1.5; margin-bottom: 0.75rem;">
          ${lang === "zh" ? "携带莱姆病螺旋体（Borrelia）与森林脑炎病毒（TBE）。潜伏于近地低矮灌木和草叶尖端。" : (lang === "fi" ? "Voivat levittää borrelioosia ja puutiaisaivokuumetta (TBE). Viihtyvät aluskasvillisuudessa." : "Carry Borrelia (Lyme) and Tick-Borne Encephalitis (TBE). Wait on low shrubs and grass.")}
        </p>
        <ul style="padding-left: 1.15rem; font-size: 0.84rem; color: #334155; line-height: 1.5;">
          <li><strong>${lang === "zh" ? "防护穿戴" : (lang === "fi" ? "Pukeutuminen" : "Clothing")}:</strong> ${lang === "zh" ? "浅色长裤塞入长袜，穿高帮橡胶靴（Kumisaappaat），喷涂DEET或派卡瑞丁驱虫喷雾。" : (lang === "fi" ? "Vaaleat vaatteet, lahkeet sukkien sisään, kumisaappaat ja punkkikarkote." : "Light-colored trousers tucked into high socks; wear rubber boots and apply DEET repellents.")}</li>
          <li><strong>${lang === "zh" ? "每日体检" : (lang === "fi" ? "Punkkitarkastus" : "Nightly Check")}:</strong> ${lang === "zh" ? "回家后必须立刻彻底检查腋下、膝后窝、腹股沟、发际线与耳后。" : (lang === "fi" ? "Tarkista iho huolellisesti joka ilta: polvitaipeet, kainalot, hiusraja." : "Thoroughly inspect skin behind knees, armpits, groin, and along the hairline nightly.")}</li>
          <li><strong>${lang === "zh" ? "科学拔虫" : (lang === "fi" ? "Poisto" : "Removal")}:</strong> ${lang === "zh" ? "使用细尖镊子贴紧皮肤垂直缓慢拔出，切勿旋转挤压虫腹，伤口酒精消毒。" : (lang === "fi" ? "Vedä punkki suoraan ulos pinseteillä kiertämättä ja desinfioi puremakohta." : "Grasp with fine-tipped tweezers close to the skin and pull straight out without twisting or squeezing.")}</li>
        </ul>
      </div>

      <!-- Deer Keds Card -->
      <div style="background: #ffffff; border: 1px solid var(--border); border-radius: var(--radius); padding: 1.35rem; box-shadow: var(--shadow);">
        <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem;">
          <span style="font-size: 1.3rem;">🪰</span>
          <h3 style="font-size: 1.1rem; font-weight: 800; color: #1e3a2b; margin: 0;">${lang === "zh" ? "鹿蝇 (Hirvikärpäset)" : (lang === "fi" ? "Hirvikärpäset" : "Deer Keds (Hirvikärpäset)")}</h3>
        </div>
        <p style="font-size: 0.85rem; color: #475569; line-height: 1.5; margin-bottom: 0.75rem;">
          ${lang === "zh" ? "8月下旬至10月大爆发。飞向体温宿主后立即脱翅，强行钻入头发、胡须与领口爬行叮咬，易引起剧烈红肿痒疹。" : (lang === "fi" ? "Parveilevat elo-lokakuussa. Pudottavat siipensä laskeuduttuaan ja ryömivät hiuksiin." : "Swarm late August to October. Drop wings upon landing and crawl vigorously into hair, beards, and collars.")}
        </p>
        <ul style="padding-left: 1.15rem; font-size: 0.84rem; color: #334155; line-height: 1.5;">
          <li><strong>${lang === "zh" ? "光滑面料" : (lang === "fi" ? "Liukaspintaiset vaatteet" : "Smooth Fabrics")}:</strong> ${lang === "zh" ? "穿紧实光滑的尼龙冲锋衣（严禁抓绒摇粒绒衣物，抓绒是鹿蝇吸附磁铁）。" : (lang === "fi" ? "Käytä liukaspintaista kuoriasua. Vältä fleeceä, johon ne tarttuvat hanakasti." : "Wear smooth synthetic shell jackets; fleece is a magnet for deer keds.")}</li>
          <li><strong>${lang === "zh" ? "头部防护" : (lang === "fi" ? "Päähine" : "Headwear")}:</strong> ${lang === "zh" ? "佩戴紧口帽子或魔术头巾包裹住全部头发，领口拉链完全拉拢。" : (lang === "fi" ? "Käytä tiukkaa lakkia ja suojaa niska ja kaula huivilla." : "Wear a snug cap or bandana covering all hair; zip collars all the way up.")}</li>
          <li><strong>${lang === "zh" ? "细齿梳排查" : (lang === "fi" ? "Tiheä kampa" : "Fine Comb")}:</strong> ${lang === "zh" ? "采摘结束上车前，务必用细齿扁梳彻底梳理头发，拍打外衣后再坐车。" : (lang === "fi" ? "Kampaa hiukset tiheällä kammalla ennen autoon tai kotiin menoa." : "Carry a fine-toothed comb to extract them from hair before boarding transit or entering homes.")}</li>
        </ul>
      </div>
    </div>

    <!-- 4. Sustainable & Ethical Harvesting -->
    <div style="background: #ffffff; border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow);">
      <h3 style="font-size: 1.15rem; font-weight: 800; color: #1e3a2b; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
        <span>🌿</span> <span>${lang === "zh" ? "可持续采摘与苔藓保护伦理" : (lang === "fi" ? "Kestävän ja vastuullisen sienestyksen periaatteet" : "Sustainable & Ethical Harvesting Ethics")}</span>
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin-top: 0.85rem;">
        <div style="background: #f8fafc; padding: 0.85rem 1rem; border-radius: 6px; border: 1px solid #e2e8f0;">
          <strong style="color: #0f172a; font-size: 0.9rem;">${lang === "zh" ? "切根 vs 轻旋轻拔" : (lang === "fi" ? "Leikkaa tai kierrä" : "Cut vs. Gentle Twist")}:</strong>
          <p style="color: #475569; font-size: 0.84rem; line-height: 1.5; margin: 0.25rem 0 0;">${lang === "zh" ? "牛肝菌与鸡油菌用小刀贴苔藓切下，或轻轻旋转拔起后现场削去泥根，保护菌丝根基。" : (lang === "fi" ? "Leikkaa veitsellä tai kierrä varovasti irti ja puhdista tyvi maastossa." : "Slice cleanly at moss level or gently twist and pull; neither method harms future mycelial flushes.")}</p>
        </div>
        <div style="background: #f8fafc; padding: 0.85rem 1rem; border-radius: 6px; border: 1px solid #e2e8f0;">
          <strong style="color: #0f172a; font-size: 0.9rem;">${lang === "zh" ? "绝不掀起苔藓毯" : (lang === "fi" ? "Älä revi sammalta" : "Never Tear Up Moss")}:</strong>
          <p style="color: #475569; font-size: 0.84rem; line-height: 1.5; margin: 0.25rem 0 0;">${lang === "zh" ? "采摘漏斗鸡油菌时严禁成片掀翻苔藓！若有拨动，务必将苔藓压回原位保温保水。" : (lang === "fi" ? "Paina siirretty sammal aina takaisin paikalleen suojaamaan herkkää rihmastoa." : "Never rip up moss blankets. Always press disturbed moss back down to protect moisture-sensitive mycelium.")}</p>
        </div>
        <div style="background: #f8fafc; padding: 0.85rem 1rem; border-radius: 6px; border: 1px solid #e2e8f0;">
          <strong style="color: #0f172a; font-size: 0.9rem;">${lang === "zh" ? "留老菇传播孢子" : (lang === "fi" ? "Jätä vanhat sienet" : "Leave Overripe Specimens")}:</strong>
          <p style="color: #475569; font-size: 0.84rem; line-height: 1.5; margin: 0.25rem 0 0;">${lang === "zh" ? "软烂、发黑或严重虫蛀的成熟菌体请留在森林，供昆虫小兽食用并释放数十亿孢子繁殖。" : (lang === "fi" ? "Vanhat ja toukkaiset sienet kuuluvat metsään levittämään itiöitä tulevia vuosia varten." : "Spongy, waterlogged, or maggot-eaten mushrooms must stay in the woods to disperse spores for future seasons.")}</p>
        </div>
        <div style="background: #f8fafc; padding: 0.85rem 1rem; border-radius: 6px; border: 1px solid #e2e8f0;">
          <strong style="color: #0f172a; font-size: 0.9rem;">${lang === "zh" ? "严禁密闭塑料袋" : (lang === "fi" ? "Ei muovipusseja" : "Never Use Plastic Bags")}:</strong>
          <p style="color: #475569; font-size: 0.84rem; line-height: 1.5; margin: 0.25rem 0 0;">${lang === "zh" ? "塑料袋内高温缺氧会使蘑菇蛋白质急剧发酵自溶，几小时内即可产生有毒代谢物！" : (lang === "fi" ? "Muovipussissa sienet hikoilevat ja pilaantuvat nopeasti jopa myrkyllisiksi." : "In plastic, mushrooms sweat, anaerobic bacteria multiply rapidly, and proteins break down into toxic amines within hours.")}</p>
        </div>
      </div>
    </div>
  `;
}

// (Field handbook chapters are now natively integrated into the 6 canonical sections above)

/* ==========================================================================
   Forest Offline Field Cache Manager & PWA Engine
   ========================================================================== */

const ForestCacheManager = {
  CACHE_IMAGE_NAME: 'helsinki-mushroom-images-v1',
  CACHE_STATIC_NAME: 'helsinki-mushroom-core-v1',
  totalImages: 213,
  isDownloading: false,

  async init() {
    this.setupListeners();
    this.setupNetworkMonitoring();
    this.registerServiceWorker();
    await this.updateCacheStatusUI();
  },

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then((reg) => {
            console.log('[PWA] Service Worker registered with scope:', reg.scope);
          })
          .catch((err) => {
            console.warn('[PWA] Service Worker registration failed:', err);
          });
      });
    }
  },

  setupNetworkMonitoring() {
    const updateNetworkUI = () => {
      const banner = document.getElementById('offline-status-banner');
      const pill = document.getElementById('btn-forest-cache');
      const label = document.getElementById('forest-cache-label');
      const lang = I18N.currentLang || 'en';
      const t = I18N.ui[lang] || I18N.ui.en;

      if (!navigator.onLine) {
        if (banner) banner.style.display = 'block';
        if (pill) pill.classList.add('offline');
        if (label) label.textContent = t.offlineBadgeOffline || '📡 Off-Grid / Offline';
      } else {
        if (banner) banner.style.display = 'none';
        if (pill) pill.classList.remove('offline');
        if (label && !this.isDownloading) label.textContent = t.offlineBadgeReady || '🌲 Offline Ready';
      }
    };

    window.addEventListener('online', updateNetworkUI);
    window.addEventListener('offline', updateNetworkUI);
    updateNetworkUI();
  },

  setupListeners() {
    const btnOpen = document.getElementById('btn-forest-cache');
    const modal = document.getElementById('forest-cache-modal');
    const btnClose = document.getElementById('btn-close-cache-modal');
    const btnDownload = document.getElementById('btn-cache-all-photos');
    const btnClear = document.getElementById('btn-clear-photos-cache');

    if (btnOpen && modal) {
      btnOpen.addEventListener('click', (e) => {
        e.preventDefault();
        this.openModal();
      });
    }

    if (btnClose && modal) {
      btnClose.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeModal();
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        this.closeModal();
      }
    });

    if (btnDownload) {
      btnDownload.addEventListener('click', (e) => {
        e.preventDefault();
        this.downloadAllPhotos();
      });
    }

    if (btnClear) {
      btnClear.addEventListener('click', (e) => {
        e.preventDefault();
        this.clearPhotoCache();
      });
    }
  },

  openModal() {
    const modal = document.getElementById('forest-cache-modal');
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      this.updateCacheStatusUI();
    }
  },

  closeModal() {
    const modal = document.getElementById('forest-cache-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  },

  async getCachedImageUrls() {
    if (!('caches' in window)) return [];
    try {
      const cache = await caches.open(this.CACHE_IMAGE_NAME);
      const requests = await cache.keys();
      return requests.map(r => r.url);
    } catch (e) {
      return [];
    }
  },

  async getImageList() {
    try {
      const res = await fetch('images/images_list.json');
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {}
    return [];
  },

  async updateCacheStatusUI() {
    if (!('caches' in window)) return;
    try {
      const cachedUrls = await this.getCachedImageUrls();
      const count = cachedUrls.length;
      const total = this.totalImages;

      const progressContainer = document.getElementById('cache-progress-container');
      const progressBar = document.getElementById('cache-progress-bar-fill');
      const progressText = document.getElementById('cache-progress-text');
      const btnDownload = document.getElementById('btn-cache-all-photos');
      const btnDownloadText = document.getElementById('btn-cache-all-photos-text');
      const btnClear = document.getElementById('btn-clear-photos-cache');
      const notice = document.getElementById('cache-all-cached-notice');
      const lang = I18N.currentLang || 'en';
      const t = I18N.ui[lang] || I18N.ui.en;

      if (progressContainer) progressContainer.style.display = 'block';

      const pct = Math.min(100, Math.round((count / total) * 100));
      if (progressBar) progressBar.style.width = `${pct}%`;
      if (progressText) {
        progressText.textContent = `${count} / ${total} ${t.offlineProgressCached || 'photos cached'} (${pct}%)`;
      }

      if (count >= total) {
        if (notice) notice.style.display = 'block';
        if (btnDownload) btnDownload.style.display = 'none';
        if (btnClear) btnClear.style.display = 'inline-block';
      } else if (count > 0) {
        if (notice) notice.style.display = 'none';
        if (btnDownload) {
          btnDownload.style.display = 'inline-block';
          if (btnDownloadText) {
            btnDownloadText.textContent = t.offlineBtnCacheAll || '📥 Pre-cache All 215 Photos';
          }
        }
        if (btnClear) btnClear.style.display = 'inline-block';
      } else {
        if (notice) notice.style.display = 'none';
        if (btnDownload) {
          btnDownload.style.display = 'inline-block';
          if (btnDownloadText) {
            btnDownloadText.textContent = t.offlineBtnCacheAll || '📥 Pre-cache All 215 Photos';
          }
        }
        if (btnClear) btnClear.style.display = 'none';
      }
    } catch (e) {
      console.warn('[PWA] updateCacheStatusUI error:', e);
    }
  },

  async downloadAllPhotos() {
    if (this.isDownloading || !('caches' in window)) return;
    this.isDownloading = true;

    const pill = document.getElementById('btn-forest-cache');
    const pillLabel = document.getElementById('forest-cache-label');
    const btnDownload = document.getElementById('btn-cache-all-photos');
    const progressBar = document.getElementById('cache-progress-bar-fill');
    const progressText = document.getElementById('cache-progress-text');
    const lang = I18N.currentLang || 'en';
    const t = I18N.ui[lang] || I18N.ui.en;

    if (pill) pill.classList.add('downloading');
    if (pillLabel) pillLabel.textContent = t.offlineBadgeDownloading || '⏳ Caching...';
    if (btnDownload) btnDownload.disabled = true;

    try {
      let imageList = await this.getImageList();
      if (!imageList || imageList.length === 0) {
        // Fallback to species images from I18N
        imageList = [];
        if (I18N.species) {
          I18N.species.forEach(sp => {
            if (sp.image) imageList.push(sp.image);
            if (sp.gallery) {
              sp.gallery.forEach(g => {
                if (g.file) imageList.push(g.file.replace(/^\.\//, ''));
              });
            }
          });
        }
        imageList = [...new Set(imageList)];
      }

      const total = imageList.length || this.totalImages;
      const cache = await caches.open(this.CACHE_IMAGE_NAME);
      let loaded = 0;

      // Parallel batch execution with concurrency of 6
      const concurrency = 6;
      const queue = [...imageList];

      const worker = async () => {
        while (queue.length > 0) {
          const imgUrl = queue.shift();
          try {
            const match = await cache.match(imgUrl);
            if (!match) {
              const res = await fetch(imgUrl);
              if (res.ok) {
                await cache.put(imgUrl, res);
              }
            }
          } catch (err) {
            console.warn('[PWA] Image cache fetch failed for:', imgUrl, err);
          }
          loaded++;
          const pct = Math.min(100, Math.round((loaded / total) * 100));
          if (progressBar) progressBar.style.width = `${pct}%`;
          if (progressText) {
            progressText.textContent = `${loaded} / ${total} ${t.offlineProgressCached || 'photos cached'} (${pct}%)`;
          }
        }
      };

      const workers = Array.from({ length: concurrency }, () => worker());
      await Promise.all(workers);

    } catch (err) {
      console.warn('[PWA] Error during bulk photo caching:', err);
    } finally {
      this.isDownloading = false;
      if (pill) pill.classList.remove('downloading');
      if (btnDownload) btnDownload.disabled = false;
      this.setupNetworkMonitoring();
      await this.updateCacheStatusUI();
    }
  },

  async clearPhotoCache() {
    if (!('caches' in window)) return;
    try {
      await caches.delete(this.CACHE_IMAGE_NAME);
      await this.updateCacheStatusUI();
    } catch (e) {
      console.warn('[PWA] Error clearing photo cache:', e);
    }
  }
};






