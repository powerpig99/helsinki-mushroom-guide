// Trilingual Dynamic Web Application Logic with Dedicated Mobile Field Guides
// Helsinki Wild Mushroom Guide

let currentTab = "catalog";
let currentLevelFilter = "all";
let currentFamilyFilter = "all";
let currentMonthFilter = null;
let searchQuery = "";
let currentMushroomId = null;
let currentTierFilter = null;
let currentTheme = (typeof localStorage !== "undefined" && localStorage.getItem ? localStorage.getItem("mushroom_theme") : null) || (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

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

  initTheme();
  setupLanguageSwitcher();
  setupTabs();
  setupFilters();
  setupGalleryListeners();
  setupRouter();
  applyLanguage(I18N.currentLang);
  handleRoute();
  ForestCacheManager.init();
});


function initTheme() {
  if (typeof document === "undefined") return;
  const htmlEl = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle-btn");
  const sunIcon = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  const moonIcon = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  if (htmlEl && htmlEl.setAttribute) htmlEl.setAttribute("data-theme", currentTheme);
  if (themeBtn) {
    themeBtn.innerHTML = currentTheme === "dark" ? sunIcon : moonIcon;
    themeBtn.setAttribute("aria-label", currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    themeBtn.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      if (htmlEl && htmlEl.setAttribute) htmlEl.setAttribute("data-theme", currentTheme);
      if (typeof localStorage !== "undefined" && localStorage.setItem) {
        localStorage.setItem("mushroom_theme", currentTheme);
      }
      themeBtn.innerHTML = currentTheme === "dark" ? sunIcon : moonIcon;
      themeBtn.setAttribute("aria-label", currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });
  }
}
window.initTheme = initTheme;

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

// Markdown Paragraph & Header Formatting Helper
function formatMarkdownParagraphs(text) {
  if (!text) return "";
  const paragraphs = text.split(/\n\n+/);
  return paragraphs.map(para => {
    let p = para.trim();
    if (!p) return "";
    if (p.startsWith("### ")) {
      return `<h3 style="font-size: 1.05rem; font-weight: 800; color: var(--fg); margin: 1.25rem 0 0.45rem 0; display: flex; align-items: center; gap: 0.4rem;">${p.replace(/^###\s*/, "")}</h3>`;
    }
    if (p.startsWith("## ")) {
      return `<h3 style="font-size: 1.15rem; font-weight: 800; color: var(--fg); margin: 1.35rem 0 0.5rem 0;">${p.replace(/^##\s*/, "")}</h3>`;
    }
    // Bold and italic formatting
    p = p.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
         .replace(/\*(.+?)\*/g, '<em>$1</em>');
    return `<p style="margin-bottom: 0.85rem; line-height: 1.68; font-size: 0.92rem; color: var(--fg);">${p}</p>`;
  }).join("");
}

// Render Rich Bilingual Markdown Monograph Block
function renderBilingualMarkdown(obj, lang1, lang2) {
  if (!obj) return "";
  const text1 = typeof obj === "string" ? obj : (obj[lang1] || obj.en || "");
  const formatted1 = formatMarkdownParagraphs(text1);
  if (!lang2 || lang1 === lang2) {
    return `<div class="bilingual-text">${formatted1}</div>`;
  }
  const text2 = typeof obj === "string" ? obj : (obj[lang2] || obj.en || "");
  const formatted2 = formatMarkdownParagraphs(text2);

  return `
    <div class="bilingual-container">
      <div class="bilingual-primary">${formatted1}</div>
      <div class="bilingual-secondary">${formatted2}</div>
    </div>
  `;
}


// Foraging Spot Google Maps Patterns (Compound & specific phrases listed first)
const FORAGING_SPOT_PATTERNS = [
  { pattern: /Salmi & Iso-Parikas/g, url: "https://www.google.com/maps/search/?api=1&query=Salmen+ulkoilualue+Vihti" },
  { pattern: /Salmi ja Iso-Parikas/g, url: "https://www.google.com/maps/search/?api=1&query=Salmen+ulkoilualue+Vihti" },
  { pattern: /Salmi与Iso-Parikas/g, url: "https://www.google.com/maps/search/?api=1&query=Salmen+ulkoilualue+Vihti" },
  { pattern: /Vestra & Riipilä/g, url: "https://www.google.com/maps/search/?api=1&query=Vestrantie+Vantaa" },
  { pattern: /Vestran ja Riipilän/g, url: "https://www.google.com/maps/search/?api=1&query=Vestrantie+Vantaa" },
  { pattern: /Vestra与Riipilä/g, url: "https://www.google.com/maps/search/?api=1&query=Vestrantie+Vantaa" },
  { pattern: /Meiko Nature Reserve/g, url: "https://www.google.com/maps/search/?api=1&query=Meiko+Kirkkonummi" },
  { pattern: /Meikon luonnonsuojelualue/g, url: "https://www.google.com/maps/search/?api=1&query=Meiko+Kirkkonummi" },
  { pattern: /Meiko自然保护区/g, url: "https://www.google.com/maps/search/?api=1&query=Meiko+Kirkkonummi" },
  { pattern: /Tremanskärr & Kurkijärvi/g, url: "https://www.google.com/maps/search/?api=1&query=Tremansk%C3%A4rr+Espoo" },
  { pattern: /Tremanskärrin luonnonsuojelualue/g, url: "https://www.google.com/maps/search/?api=1&query=Tremansk%C3%A4rr+Espoo" },
  { pattern: /Tremanskärr泥炭沼泽/g, url: "https://www.google.com/maps/search/?api=1&query=Tremansk%C3%A4rr+Espoo" },
  { pattern: /Byabäcken/g, url: "https://www.google.com/maps/search/?api=1&query=Byab%C3%A4cken+Sipoo" },
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
          <div class="prime-location-area">${loc.areaName[lang] || loc.areaName.en}</div>
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
              <span class="chinese-recipe-author">${r.creator}</span>
              <span class="chinese-recipe-duration">${r.duration}</span>
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
  const quoteText = document.getElementById("ground-quote-text");
  if (quoteText && t.quoteNotAToE) quoteText.textContent = t.quoteNotAToE;
  const quoteLink = document.getElementById("ground-quote-link");
  if (quoteLink && t.quoteLink) quoteLink.textContent = t.quoteLink;
  if (typeof currentCatalogViewMode !== "undefined" && (currentCatalogViewMode === "safe5" || currentCatalogViewMode === "intermediate")) {
    renderTierIntroBanner(currentCatalogViewMode);
  }
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

  // Search Placeholder & Quick Tags
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.placeholder = t.searchPlaceholder;
  }
  const labelQuickTags = document.getElementById("label-quick-tags");
  if (labelQuickTags && t.quickTagsLabel) {
    labelQuickTags.textContent = t.quickTagsLabel;
  }
  const labelMoreFilters = document.getElementById("label-more-filters");
  const filterDrawer = document.getElementById("catalog-filter-drawer");
  const isDrawerOpen = filterDrawer && filterDrawer.style.display !== "none";
  if (labelMoreFilters) {
    labelMoreFilters.textContent = isDrawerOpen ? (t.btnHideFilters || "Close ▴") : (t.btnMoreFilters || "Filters ▾");
  }
  const btnResetFilters = document.getElementById("btn-reset-filters");
  if (btnResetFilters && t.btnResetFilters) {
    btnResetFilters.textContent = t.btnResetFilters;
  }
  const btnCompareToggle = document.getElementById("btn-toggle-compare");
  if (btnCompareToggle && t.btnCompareToggle) {
    btnCompareToggle.title = t.btnCompareToggle;
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
      forestCacheLabel.textContent = t.offlineBadgeOffline || "Off-Grid / Offline";
    } else if (typeof ForestCacheManager !== 'undefined' && ForestCacheManager.isDownloading) {
      forestCacheLabel.textContent = t.offlineBadgeDownloading || "⏳ Caching...";
    } else {
      forestCacheLabel.textContent = t.offlineBadgeReady || "Offline Ready";
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
  const normId = normalizeChapterId(chId);
  const data = (typeof HANDBOOK_DATA !== 'undefined' && HANDBOOK_DATA && HANDBOOK_DATA.chapters)
    ? HANDBOOK_DATA.chapters
    : ((typeof window !== 'undefined' && window.HANDBOOK_DATA && window.HANDBOOK_DATA.chapters)
        ? window.HANDBOOK_DATA.chapters
        : (typeof I18N !== 'undefined' && I18N.handbookChapters ? I18N.handbookChapters : []));
  if (!data || data.length === 0) return null;
  return data.find(c => c.id === normId || c.id === chId) || null;
}

function renderSpeciesChipsForChapter(ch, lang, t) {
  if (!ch || !ch.targetSpecies || ch.targetSpecies.length === 0) return "";
  return `
    <div class="live-reader-species-strip">
      <strong style="color: var(--fg);">${t.handbookTargetSpecies || "Featured Species in this Section:"}</strong>
      ${ch.targetSpecies.map(spId => {
        const sp = I18N.species.find(s => s.id === spId);
        if (!sp) return "";
        const spName = sp.names[lang]?.primary || sp.latinName;
        return `<a href="#/mushroom/${sp.id}" class="inline-species-chip" onclick="navigateToMushroom('${sp.id}'); return false;">${spName}</a>`;
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
  } else if (clean === "09") {
    window.location.hash = "#/mushroom/ganoderma_lucidum";
    showMushroomDetail("ganoderma_lucidum");
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
  const tierBanner = document.getElementById("tier-intro-banner");

  if (currentCatalogViewMode === "grid") {
    currentTierFilter = null;
    if (tierBanner) {
      tierBanner.style.display = "none";
      tierBanner.innerHTML = "";
    }
    if (controlsPanel) controlsPanel.style.display = "block";
    if (mushroomGrid) mushroomGrid.style.display = "grid";
    if (monographContainer) monographContainer.style.display = "none";
    renderCatalog();
  } else if (currentCatalogViewMode === "safe5") {
    currentTierFilter = "safe5";
    if (controlsPanel) controlsPanel.style.display = "none";
    if (mushroomGrid) mushroomGrid.style.display = "grid";
    if (monographContainer) monographContainer.style.display = "none";
    renderTierIntroBanner("safe5");
    renderCatalog();
  } else if (currentCatalogViewMode === "intermediate") {
    currentTierFilter = "intermediate";
    if (controlsPanel) controlsPanel.style.display = "none";
    if (mushroomGrid) mushroomGrid.style.display = "grid";
    if (monographContainer) monographContainer.style.display = "none";
    renderTierIntroBanner("intermediate");
    renderCatalog();
  } else if (currentCatalogViewMode === "master") {
    currentTierFilter = null;
    if (tierBanner) {
      tierBanner.style.display = "none";
      tierBanner.innerHTML = "";
    }
    if (controlsPanel) controlsPanel.style.display = "none";
    if (mushroomGrid) mushroomGrid.style.display = "none";
    if (monographContainer) {
      monographContainer.style.display = "block";
      renderCatalogMonograph("master");
    }
  }
}
window.switchCatalogViewMode = switchCatalogViewMode;

function renderTierIntroBanner(mode) {
  const banner = document.getElementById("tier-intro-banner");
  if (!banner) return;
  const lang = I18N.currentLang;
  const lang2 = I18N.secondaryLang;
  const t = I18N.ui[lang] || I18N.ui.en;

  if (mode === "safe5") {
    banner.className = "tier-intro-banner safe5-theme";
    banner.style.display = "block";
    banner.innerHTML = `
      <div class="tier-intro-header">
        <div class="tier-badge-row">
          <span class="tier-badge">⭐ Zero Lethal Lookalikes</span>
          <span class="tier-count">5 Core Species</span>
        </div>
        <h2 class="tier-intro-title">${t.tierIntroSafe5Title || "The Safe Five Beginner Mushrooms"}</h2>
        ${lang2 && I18N.ui[lang2]?.tierIntroSafe5Title ? `<div class="tier-intro-subtitle">${I18N.ui[lang2].tierIntroSafe5Title}</div>` : ""}
      </div>
      <p class="tier-intro-desc">${t.tierIntroSafe5Desc || ""}</p>
      
      <div class="tier-features-bar">
        <span class="tier-feature-pill">✓ False Gills (Poimut)</span>
        <span class="tier-feature-pill">✓ Under-cap Spines (Oraat)</span>
        <span class="tier-feature-pill">✓ Hollow Stem Funnel</span>
        <span class="tier-feature-pill">✓ Spongy Pores (Pillit)</span>
      </div>

      <!-- Featured Beginner Video & Channel Recommendation -->
      <div class="tier-video-card">
        <a href="https://www.youtube.com/watch?v=xoptBgrLlg0" target="_blank" rel="noopener noreferrer" class="tier-video-thumb-link" title="${t.beginnerVideoTitle || "Beginners Guide to Wild Mushroom Foraging"}">
          <img src="https://img.youtube.com/vi/xoptBgrLlg0/mqdefault.jpg" alt="${t.beginnerVideoTitle || "Beginners Guide to Wild Mushroom Foraging"}" class="tier-video-thumb" loading="lazy" />
          <div class="tier-video-play-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <span class="tier-video-duration">24:13</span>
        </a>
        <div class="tier-video-info">
          <div class="tier-video-badge-row">
            <span class="tier-video-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="color: #dc2626;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              ${t.beginnerMasterclassBadge || "Recommended Beginner Masterclass"}
            </span>
            <a href="https://www.youtube.com/@mushroomwonderland1" target="_blank" rel="noopener noreferrer" class="tier-channel-link" title="Mushroom Wonderland YouTube Channel">
              <strong>Mushroom Wonderland</strong> ↗
            </a>
          </div>
          <h4 class="tier-video-title">
            <a href="https://www.youtube.com/watch?v=xoptBgrLlg0" target="_blank" rel="noopener noreferrer">
              ${t.beginnerVideoTitle || "Beginners Guide to Wild Mushroom Foraging (2024)"}
            </a>
          </h4>
          <p class="tier-video-desc">${t.beginnerVideoDesc || ""}</p>
          <div class="tier-video-actions">
            <a href="https://www.youtube.com/watch?v=xoptBgrLlg0" target="_blank" rel="noopener noreferrer" class="btn-video-link btn-video-link-sm" title="${t.watchVideoBtn || "Watch on YouTube"}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="color: #dc2626;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              <span>${t.watchVideoBtn || "Watch Video"} (24m)</span>
            </a>
            <a href="https://www.youtube.com/@mushroomwonderland1" target="_blank" rel="noopener noreferrer" class="tier-channel-btn" title="Open YouTube Channel">
              <span>${t.visitChannelBtn || "Visit Channel ↗"}</span>
            </a>
            <button type="button" class="tier-channel-btn" onclick="switchNavTab('safety'); setTimeout(() => { const el = document.getElementById('inaturalist-app-guide'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 150);" title="View iNaturalist installation guide">
              <span>iNaturalist Guide ▾</span>
            </button>
          </div>
        </div>
      </div>

      <div class="tier-actions-bar">
        <button id="btn-toggle-safe5-monograph" class="tier-action-btn" onclick="toggleTierMonograph('05')">
          ${t.tierReadMonographBtn || "Open Chapter 05 Monograph"}
        </button>
        <button class="tier-action-btn secondary" onclick="switchCatalogViewMode('grid')">
          ${t.labelViewGrid || "Show All 63 Species"}
        </button>
      </div>
    `;
  } else if (mode === "intermediate") {
    banner.className = "tier-intro-banner intermediate-theme";
    banner.style.display = "block";
    banner.innerHTML = `
      <div class="tier-intro-header">
        <div class="tier-badge-row">
          <span class="tier-badge warning">Preparation & Ring Discipline</span>
          <span class="tier-count">Intermediate & Advanced</span>
        </div>
        <h2 class="tier-intro-title">${t.tierIntroIntermediateTitle || "Intermediate Gourmet Species"}</h2>
        ${lang2 && I18N.ui[lang2]?.tierIntroIntermediateTitle ? `<div class="tier-intro-subtitle">${I18N.ui[lang2].tierIntroIntermediateTitle}</div>` : ""}
      </div>
      <p class="tier-intro-desc">${t.tierIntroIntermediateDesc || ""}</p>
      
      <div class="tier-features-bar">
        <span class="tier-feature-pill">Parboiling Acrid Milkcaps (Ryöppäys)</span>
        <span class="tier-feature-pill">Bolete Sticky Pellicle Peeling</span>
        <span class="tier-feature-pill">Annulus Ring vs Volva Verification</span>
      </div>

      <div class="tier-actions-bar">
        <button id="btn-toggle-intermediate-monograph" class="tier-action-btn" onclick="toggleTierMonograph('06')">
          ${t.tierReadMonographBtn || "Open Chapter 06 Monograph"}
        </button>
        <button class="tier-action-btn secondary" onclick="switchCatalogViewMode('grid')">
          ${t.labelViewGrid || "Show All 63 Species"}
        </button>
      </div>
    `;
  } else {
    banner.style.display = "none";
    banner.innerHTML = "";
  }
}
window.renderTierIntroBanner = renderTierIntroBanner;

function toggleTierMonograph(chId) {
  const container = document.getElementById("catalog-monograph-container");
  if (!container) return;
  const lang = I18N.currentLang;
  const t = I18N.ui[lang] || I18N.ui.en;

  if (container.style.display === "block" && container.dataset.activeCh === chId) {
    container.style.display = "none";
    container.dataset.activeCh = "";
  } else {
    container.style.display = "block";
    container.dataset.activeCh = chId;
    renderCatalogMonographForChapter(chId);
    container.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
window.toggleTierMonograph = toggleTierMonograph;

function renderCatalogMonograph(mode) {
  let chId = "05";
  if (mode === "intermediate") chId = "06";
  else if (mode === "master") chId = "08";
  renderCatalogMonographForChapter(chId);
}
window.renderCatalogMonograph = renderCatalogMonograph;

function renderCatalogMonographForChapter(chId) {
  const container = document.getElementById("catalog-monograph-container");
  if (!container) return;

  const lang = I18N.currentLang;
  const lang2 = I18N.secondaryLang;
  const t = I18N.ui[lang] || I18N.ui.en;

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
          <span class="reader-readtime">${ch.readTime ? ch.readTime[lang] : ""}</span>
        </div>
      </div>
      <h1 class="integrated-monograph-title">${ch.title[lang]}</h1>
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
      <button class="reader-pager-btn" onclick="container.scrollIntoView({ behavior: 'smooth', block: 'start' })">
        ${t.handbookTopBtn || "↑ Top"}
      </button>
    </div>
  `;
}
window.renderCatalogMonographForChapter = renderCatalogMonographForChapter;

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

// Filter and Drawer State Utilities
function updateActiveFiltersUI() {
  let count = 0;
  if (currentLevelFilter && currentLevelFilter !== "all") count++;
  if (currentFamilyFilter && currentFamilyFilter !== "all") count++;
  if (currentMonthFilter !== null) count++;

  const badge = document.getElementById("active-filters-badge");
  const resetBtn = document.getElementById("btn-reset-filters");
  const toggleBtn = document.getElementById("btn-toggle-filters");

  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  }
  if (resetBtn) {
    resetBtn.style.display = (count > 0 || searchQuery) ? "inline-block" : "none";
  }
  if (toggleBtn) {
    toggleBtn.classList.toggle("has-active", count > 0);
  }
}
window.updateActiveFiltersUI = updateActiveFiltersUI;

function toggleCatalogFilters() {
  const drawer = document.getElementById("catalog-filter-drawer");
  const label = document.getElementById("label-more-filters");
  const lang = I18N.currentLang || "en";
  const t = I18N.ui[lang] || I18N.ui.en;

  if (!drawer) return;
  const isHidden = drawer.style.display === "none" || !drawer.style.display;
  drawer.style.display = isHidden ? "flex" : "none";
  if (label) {
    label.textContent = isHidden ? (t.btnHideFilters || "Close ▴") : (t.btnMoreFilters || "Filters ▾");
  }
}
window.toggleCatalogFilters = toggleCatalogFilters;

function resetAllCatalogFilters() {
  currentFamilyFilter = "all";
  currentLevelFilter = "all";
  currentTierFilter = null;
  currentMonthFilter = null;
  searchQuery = "";

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  const clearBtn = document.getElementById("search-clear-btn");
  if (clearBtn) clearBtn.style.display = "none";

  document.querySelectorAll(".level-btn").forEach(b => b.classList.toggle("active", b.dataset.level === "all"));
  document.querySelectorAll(".family-btn").forEach(b => b.classList.toggle("active", b.dataset.family === "all"));
  document.querySelectorAll(".month-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".view-mode-btn").forEach(b => b.classList.toggle("active", b.dataset.mode === "grid"));
  const tierBanner = document.getElementById("tier-intro-banner");
  if (tierBanner) tierBanner.style.display = "none";

  updateActiveFiltersUI();
  renderCatalog();
}
window.resetAllCatalogFilters = resetAllCatalogFilters;

function clearCatalogSearch() {
  searchQuery = "";
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.value = "";
    searchInput.focus();
  }
  const clearBtn = document.getElementById("search-clear-btn");
  if (clearBtn) clearBtn.style.display = "none";
  updateActiveFiltersUI();
  renderCatalog();
}
window.clearCatalogSearch = clearCatalogSearch;

function toggleCompareLanguage() {
  const row = document.getElementById("secondary-lang-row");
  const btn = document.getElementById("btn-toggle-compare");
  if (!row) return;
  const isHidden = row.style.display === "none" || !row.style.display;
  row.style.display = isHidden ? "inline-flex" : "none";
  if (btn) btn.classList.toggle("active", isHidden);
}
window.toggleCompareLanguage = toggleCompareLanguage;

// Setup Filters
function setupFilters() {
  const searchInput = document.getElementById("search-input");
  const searchClearBtn = document.getElementById("search-clear-btn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery ? "block" : "none";
      }
      if (searchQuery) {
        // Reset category/tier/level/month filters so global search searches all 63 species
        currentFamilyFilter = "all";
        currentLevelFilter = "all";
        currentTierFilter = null;
        currentMonthFilter = null;
        
        document.querySelectorAll(".level-btn").forEach(b => b.classList.toggle("active", b.dataset.level === "all"));
        document.querySelectorAll(".family-btn").forEach(b => b.classList.toggle("active", b.dataset.family === "all"));
        document.querySelectorAll(".month-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".view-mode-btn").forEach(b => b.classList.toggle("active", b.dataset.mode === "grid"));
        const tierBanner = document.getElementById("tier-intro-banner");
        if (tierBanner) tierBanner.style.display = "none";
      }
      updateActiveFiltersUI();
      renderCatalog();
    });
  }

  const levelButtons = document.querySelectorAll(".level-btn");
  levelButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      levelButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentLevelFilter = btn.dataset.level;
      updateActiveFiltersUI();
      renderCatalog();
    });
  });

  const familyButtons = document.querySelectorAll(".family-btn");
  familyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      familyButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFamilyFilter = btn.dataset.family;
      updateActiveFiltersUI();
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
      updateActiveFiltersUI();
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
    if (currentTierFilter === "safe5") {
      const safe5Ids = [
        "cantharellus_cibarius",
        "cantharellus_amethysteus",
        "craterellus_tubaeformis",
        "hydnum_repandum",
        "hydnum_rufescens",
        "craterellus_cornucopioides",
        "boletus_edulis",
        "boletus_pinophilus"
      ];
      return safe5Ids.includes(m.id);
    }
    if (currentTierFilter === "intermediate") {
      const intermediateTargetIds = [
        "cortinarius_caperatus",
        "macrolepiota_procera",
        "leccinum_versipelle",
        "leccinum_scabrum",
        "suillus_luteus",
        "suillus_variegatus",
        "lactarius_torminosus",
        "lactarius_rufus",
        "lactarius_trivialis",
        "russula_decolorans",
        "russula_paludosa",
        "russula_aeruginea",
        "albatrellus_ovinus",
        "tricholoma_matsutake"
      ];
      if (intermediateTargetIds.includes(m.id)) return true;
      return (m.level === "intermediate" || m.level === "advanced") && m.edibility !== "deadly" && m.edibility !== "inedible";
    }
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
      const en = `${m.names?.en?.primary || ""} ${m.names?.en?.local || ""} ${m.names?.en?.alt || ""}`.toLowerCase();
      const zh = `${m.names?.zh?.primary || ""} ${m.names?.zh?.local || ""} ${m.names?.zh?.alt || ""}`.toLowerCase();
      const fi = `${m.names?.fi?.primary || ""} ${m.names?.fi?.local || ""} ${m.names?.fi?.alt || ""}`.toLowerCase();
      const morph = `${m.morphology?.[lang]?.underCap || ""} ${m.morphology?.[lang]?.cap || ""} ${m.morphology?.[lang]?.odor || ""}`.toLowerCase();
      const cul = (m.culinaryTip && m.culinaryTip[lang]) || "";
      const hab = (m.habitatName && m.habitatName[lang]) || "";
      const notes = (m.culturalNotes && (m.culturalNotes.zh + " " + m.culturalNotes.en + " " + m.culturalNotes.fi)) || "";
      const haystack = `${m.id} ${m.latinName} ${en} ${zh} ${fi} ${morph} ${cul} ${hab} ${notes}`.toLowerCase();
      if (!haystack.includes(searchQuery)) {
        return false;
      }
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--card-bg); border-radius: var(--radius); border: 1px solid var(--card-border);">
        <p style="font-size: 1.25rem; font-weight: 700; color: var(--fg);">${t.noResultsTitle}</p>
        <p style="color: var(--muted); margin-top: 0.5rem;">${t.noResultsDesc}</p>
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
    else if (m.edibility === "medicinal") { badgeClass = "badge-medicinal"; badgeText = t.badgeMedicinal || "Medicinal"; }

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
            <span class="meta-tag" style="background:var(--card-hover); color:var(--muted); border:1px solid var(--card-border);">${m.habitatName[lang]}${nameData2 ? ` / ${m.habitatName[lang2]}` : ""}</span>
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

          ${m.warning && m.warning[lang] ? `<div class="card-alert">${m.warning[lang]}${nameData2 && m.warning[lang2] ? `<div class="card-secondary-alert" style="color:var(--danger); font-size:0.8rem; margin-top:3px;">${m.warning[lang2]}</div>` : ""}</div>` : ""}
          ${m.culinaryTip && m.culinaryTip[lang] ? `<div class="card-tip">${m.culinaryTip[lang]}${nameData2 && m.culinaryTip[lang2] ? `<div class="card-secondary-tip" style="color:var(--warning); font-size:0.8rem; margin-top:3px;">${m.culinaryTip[lang2]}</div>` : ""}</div>` : ""}
          ${m.lookalikeAlert && m.lookalikeAlert[lang] ? `<div class="card-lookalike-alert">${m.lookalikeAlert[lang]}${nameData2 && m.lookalikeAlert[lang2] ? `<div class="card-secondary-lk-alert">${m.lookalikeAlert[lang2]}</div>` : ""}</div>` : ""}

          ${(() => {
            const lkIds = (I18N.lookalikeMap && I18N.lookalikeMap[m.id]) ? I18N.lookalikeMap[m.id] : [];
            const firstLk = lkIds.length > 0 ? I18N.species.find(s => s.id === lkIds[0]) : null;
            if (!firstLk) return "";
            return `
              <div class="card-lookalike-pill" onclick="event.stopPropagation(); navigateToMushroom('${firstLk.id}')" title="${lang === 'zh' ? '点击对比易混淆种' : (lang === 'fi' ? 'Katso näköislaji' : 'Compare with lookalike')}: ${firstLk.names[lang]?.primary}">
                
                <span class="card-lk-label">${lang === 'zh' ? '近缘混淆' : (lang === 'fi' ? 'Näköislaji' : 'Lookalike')}:</span>
                <span class="card-lk-name">${firstLk.names[lang]?.primary || firstLk.latinName}</span>
                ${(firstLk.edibility === 'deadly' || firstLk.level === 'deadly') ? `<span class="card-lk-deadly">${lang === "zh" ? "剧毒" : (lang === "fi" ? "Myrkyllinen" : "Deadly")}</span>` : ''}
              </div>
            `;
          })()}

          <div class="card-footer">
            <span class="card-ref-id">${t.refId} ${m.id}</span>
            <span class="card-view-cue">${t.viewDetails}</span>
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
  else if (sp.edibility === "medicinal") { badgeClass = "badge-medicinal"; badgeText = t.badgeMedicinal || "Medicinal"; }

  // Skill level label determination
  let levelText = t.beginnerLevel;
  if (sp.level === "intermediate") levelText = t.intermediateLevel;
  else if (sp.level === "advanced") levelText = t.advancedLevel;
  else if (sp.level === "deadly") levelText = t.deadlyLevel;

  // Fruiting months tags
  const monthTags = sp.months.map(num => {
    const idx = num - 5;
    return `<span class="meta-tag active" style="background:var(--accent); color:var(--bg); font-weight:700;">${monthNames[idx] || num}</span>`;
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
  const isInedibleOrToxic = isDeadly || sp.edibility === "inedible" || (sp.rating && sp.rating.includes("☠"));

  const dangerBannerHtml = isInedibleOrToxic ? `
    <div class="detail-danger-card">
      <div class="detail-danger-title">
        <span>${isDeadly ? (lang === 'zh' ? '【致命剧毒！严禁采食】' : (lang === 'fi' ? 'TAPPAVAN MYRKYLLINEN' : 'DEADLY TOXIC SPECIMEN')) : (lang === 'zh' ? '【不可食用 / 极苦或有毒】' : (lang === 'fi' ? 'EI SYÖTÄVÄ / MYRKYLLINEN' : 'INEDIBLE / TOXIC'))}</span>
        ${nameData2 ? `<span style="font-size:0.85rem; font-weight:700; color:var(--danger); margin-left:0.5rem;">(${isDeadly ? (lang2 === 'zh' ? '【致命剧毒】' : (lang2 === 'fi' ? 'TAPPAVAN MYRKYLLINEN' : 'DEADLY TOXIC')) : (lang2 === 'zh' ? '【不可食用】' : (lang2 === 'fi' ? 'EI SYÖTÄVÄ' : 'INEDIBLE'))})</span>` : ""}
      </div>
      <div style="margin-bottom: 1rem;">
        ${renderBilingualText(sp.warning, lang, lang2)}
      </div>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        <a href="tel:0800147111" class="emergency-btn" style="background:#dc2626; color:#fff; text-decoration:none; display:inline-flex; align-items:center; gap:0.35rem; font-weight:700; padding:0.6rem 1.2rem; border-radius:8px;">芬兰中毒中心 / Poison Center: 0800 147 111</a>
        <a href="tel:112" class="emergency-btn" style="background:#7f1d1d; color:#fff; text-decoration:none; display:inline-flex; align-items:center; gap:0.35rem; font-weight:700; padding:0.6rem 1.2rem; border-radius:8px;">紧急急救 / Emergency: 112</a>
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
        let riskBadgeText = `${lang === 'zh' ? '同为可食用近缘种' : (lang === 'fi' ? 'Myös syötävä näköislaji' : 'Edible Sister Species')}`;
        if (lk.edibility === "deadly" || lk.level === "deadly") {
          riskBadgeClass = "badge-risk-deadly";
          riskBadgeText = `${lang === 'zh' ? '致命剧毒警报！' : (lang === 'fi' ? 'TAPPAVA VAARA!' : 'DEADLY LOOKALIKE RISK!')}`;
        } else if (lk.edibility === "inedible") {
          riskBadgeClass = "badge-risk-inedible";
          riskBadgeText = `${lang === 'zh' ? '不可食用 / 极苦混淆' : (lang === 'fi' ? 'Kelvoton näköislaji' : 'Inedible / Bitter Lookalike')}`;
        } else if (lk.edibility === "parboil") {
          riskBadgeClass = "badge-risk-parboil";
          riskBadgeText = `${lang === 'zh' ? '需水焯去毒后食用' : (lang === 'fi' ? 'Vaatii ryöppäyksen' : 'Must Parboil Before Eating')}`;
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
                ${(lk.morphology[lang2]?.underCap) ? `<div style="color:var(--muted); font-size:0.8rem; margin-top:2px;">${lk.morphology[lang2].underCap}</div>` : ""}
              </div>
            </div>
          </a>
        `;
      }).join("")}
    </div>
  ` : "";

  // Render Full Field Guide Detail Layout
  container.innerHTML = `
    <!-- Detail Top Bar with Back Button & Edibility Badge -->
    <div class="detail-top-bar">
      <div class="detail-top-bar-left">
        <button class="btn-back-catalog" onclick="navigateToCatalog()" aria-label="Back" title="Back to Species Guide">
          <svg class="back-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span class="btn-back-label">Back</span>
        </button>
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
            ${nameData2 ? ` <span style="color:var(--muted); font-weight:400;">| ${nameData2.local}</span>` : ""}
          </div>
        </div>
        <div class="detail-badge-group">
          <span class="badge ${badgeClass}" style="font-size:0.9rem; padding:0.35rem 0.85rem;">${badgeText}</span>
        </div>
      </div>

      <div class="detail-meta-bar">
        <div>
          <strong>${lang === 'zh' ? '生境类型' : (lang === 'fi' ? 'Elinympäristö' : 'Habitat')}:</strong> 
          ${sp.habitatName[lang]}
          ${nameData2 ? ` / <span style="color:var(--muted);">${sp.habitatName[lang2]}</span>` : ""}
        </div>
        <div style="display:flex; align-items:center; gap:0.35rem;">
          <strong>${lang === 'zh' ? '出菇月份' : (lang === 'fi' ? 'Satosenssi' : 'Fruiting Season')}:</strong>
          <div style="display:flex; gap:0.25rem;">${monthTags}</div>
        </div>
        <div><strong>${t.skillLevelLabel}</strong> ${levelText}</div>
        <div><strong>${t.refId}</strong> ${sp.id}</div>
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

    ${sp.culturalNotes ? `
    <!-- OPTIONAL SECTION: Ecological, Cultural & Foraging Tradition Monograph -->
    <div class="detail-section-card">
      <h2 class="detail-section-title">
        <span>${lang === 'zh' ? '松茸深度档案：生态分布、分类地位与北欧采摘习俗' : (lang === 'fi' ? 'Lajiprofiili: Ekologia, historia ja keruuperinne' : 'Species Dossier: Ecology, History & Nordic Foraging Tradition')}</span>
      </h2>
      <div class="detail-section-body" style="line-height: 1.65;">
        ${renderBilingualMarkdown(sp.culturalNotes, lang, lang2)}
      </div>
    </div>
    ` : ""}

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
    captionEl.textContent = capText;
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
    en: "Deadly Lookalikes & Toxin Survival Guide",
    zh: "芬兰致命毒菇识别与毒素避险全景指南",
    fi: "Näköislajien vertailu ja hengenvaaralliset myrkkysienet"
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
    },
    {
      title: {
        en: "Pine Matsutake vs. Booted Knight & Deadly Webcap",
        zh: "芬兰野生松茸 vs 锈褐口蘑 (假松茸) 与 致命丝膜菌",
        fi: "Tuoksuvalmuska vs. Ruskovalmuska ja Suippumyrkkyseitikki"
      },
      summary: {
        en: "Gourmet gold vs. bitter lookalike & lethal toxin. True Matsutake features a firm white scaly stem with an unmistakable cinnamon-sweet perfume. Booted Knight lacks spicy cinnamon fragrance, and Deadly Webcap contains lethal orellanine.",
        zh: "顶级珍馐 vs 苦涩劣质与致命肾毒素。正品芬兰松茸具极度坚实肉质、棉毛菌环及无可替代的肉桂甜香与雪松香气；锈褐口蘑缺乏肉桂异香且味涩；致命丝膜菌菌肉锈黄带尖顶，含致命奥来毒素！",
        fi: "Huippugourmet vs. kitkerä näköislaji ja hengenvaarallinen myrkkysieni. Oikean tuoksuvalmuskan tunnistaa huumaavasta kanelimaisesta tuoksusta ja tukevasta valko-ruskeasta renkaallisesta jalasta."
      },
      edible: {
        id: "tricholoma_matsutake",
        name: { en: "Pine Matsutake (Tuoksuvalmuska)", zh: "芬兰野生松茸 (Tricholoma matsutake)", fi: "Tuoksuvalmuska (Matsutake)" },
        image: "./images/tricholoma_matsutake.jpg",
        status: t.badgeChoice,
        traits: {
          en: [
            "Aroma: Intense, unmistakable sweet perfume of cinnamon, cedarwood, fresh pine resin, and crisp autumn earth",
            "Cap & Stem: Buff to reddish-brown fibrous scales; very stout solid stem with persistent white cottony ring",
            "Gills: White to pale cream, crowded, slowly developing rusty-brown spots when mature",
            "Flesh: Extraordinarily dense, firm, and heavy, never spongy"
          ],
          zh: [
            "气味铁证：极度浓郁独特的复合甜香，将肉桂香、松脂香与雪松木质香融为一体，无可替代",
            "菌盖与菌柄：密被红褐粗糙纤维鳞片；极其粗壮如棒槌的实心菌柄，具明显白色棉毛状菌环",
            "菌褶：细密乳白至浅乳黄，老熟边缘常现细小锈褐色斑点",
            "肉质：极其肥厚紧实致密坚硬，手感沉重如石"
          ],
          fi: [
            "Tuoksu: Huumaavan voimakas makean mausteinen tuoksu, jossa yhdistyvät kaneli, havupuu ja pihka",
            "Lakki ja jalka: Kuitusuomuinen, erittäin tukeva jalka selkeällä vanumaisella renkaalla",
            "Heltat: Valkoiset tai kermanvaaleat, vanhana ruskeatäpläiset",
            "Malto: Erittäin kiinteä, kova ja paksu"
          ]
        }
      },
      toxic: {
        id: "cortinarius_rubellus",
        name: { en: "Deadly Webcap & Booted Knight", zh: "致命丝膜菌 (Cortinarius rubellus) & 锈褐口蘑", fi: "Suippumyrkkyseitikki & Ruskovalmuska" },
        image: "./images/cortinarius_rubellus.jpg",
        status: t.badgeDeadly,
        traits: {
          en: [
            "Deadly Webcap: Rusty copper-brown conical cap with a sharp pointed umbo; stem has yellow zigzag bands; lethal orellanine destroys kidneys!",
            "Booted Knight (T. focale): Bright orange-reddish cap; mealy/flour-like or bland odor lacking the cinnamon fragrance",
            "Spore Print & Gills: Rusty brown spores on Webcap gills vs. pure white spore print of Matsutake",
            "Shared Habitat: Both grow in dry sandy pine forests sharing identical terrain with Matsutake!"
          ],
          zh: [
            "致命丝膜菌：锈红至肉桂褐色，顶端具极尖锐锥状突起，柄具黄色之字形蛛网蛇纹，含奥来毒素彻底破坏肾脏！",
            "锈褐口蘑 (假松茸)：橙红褐色菌盖，生面粉味或微土味，完全缺乏松茸高贵浓烈的肉桂甜香",
            "孢子与菌褶：丝膜菌为深锈褐色孢子印；松茸为纯白色孢子印与乳白菌褶",
            "生境重叠隐患：皆生于干燥沙质松林（Kuiva kangas），与松茸地盘完全重叠，严防混采！"
          ],
          fi: [
            "Suippumyrkkyseitikki: Kettumaisen ruosteenruskea terävällä huipulla, keltaisia siksak-vöitä jalassa, orellaniini tuhoaa munuaiset!",
            "Ruskovalmuska: Oranssinpunaruskea lakki, jauhomainen tuoksu, ei koskaan kanelimainen",
            "Itiöpöly: Seitikeillä ruosteenruskea vs. valmuskoilla puhtaanvalkoinen",
            "Yhteinen elinympäristö: Kasvavat karuilla hiekkamäntykankailla samoissa paikoissa kuin tuoksuvalmuska!"
          ]
        }
      }
    }
  ];

  container.innerHTML = `
    <!-- Section Header Banner -->
    <div class="integrated-monograph-header danger-theme" style="margin-bottom: 2rem;">
      <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: var(--danger-soft); color: var(--danger); font-size: 0.78rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 9999px; margin-bottom: 0.65rem; border: 1px solid var(--danger-border);">
        <span>${t.tabLookalikes || "Deadly Lookalikes"}</span> • <span>Zero Tolerance • 5 Visual Comparators • Toxin Science</span>
      </div>
      <h1 class="integrated-monograph-title" style="color: var(--danger); margin-bottom: 0.4rem;">${titleMap[lang] || titleMap.en}</h1>
      ${lang2 ? `<div class="integrated-monograph-subtitle">${titleMap[lang2] || ""}</div>` : ""}
    </div>

    <!-- 1. The 5 Interactive Visual Comparators (Front & Center!) -->
    <div class="section-divider-header" style="margin-bottom: 1.5rem;">
      <h2 style="font-size: 1.45rem; font-weight: 800; color: var(--fg); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
        <span>${lang === "zh" ? "5大高危真假混淆微距形态对决（一键直达详情）" : (lang === "fi" ? "5 kriittistä näköislajivertailua" : "5 Critical Side-by-Side Visual Lookalike Comparators")}</span>
      </h2>
      <p style="font-size: 0.92rem; color: var(--muted);">
        ${lang === "zh" ? "微距形态特征、钝分叉假褶vs锋利真褶、立体网眼与致命潜伏期特征全方位对比" : (lang === "fi" ? "Tarkat mikroskooppiset ja morfologiset erot rinnakkain, poimut vs. heltat ja jalkojen piirteet" : "Direct side-by-side morphological feature breakdowns, blunt ridges vs knife gills, and stem netting")}
      </p>
    </div>

    ${pairs.map(pair => `
      <div class="comparator-card">
        <div class="comparator-header">
          <div>
            <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--fg); margin: 0 0 0.35rem 0;">
              ${pair.title[lang]}
              ${lang2 ? `<span style="font-size: 0.95rem; color:var(--muted); display:block; margin-top:0.2rem; font-weight:400;">${pair.title[lang2]}</span>` : ""}
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
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 0.5rem 0 0; color: var(--accent); cursor:pointer;" onclick="navigateToMushroom('${pair.edible.id}')">
              ${pair.edible.name[lang]}
              ${lang2 ? `<span style="color:var(--muted); font-size:0.85rem; display:block; font-weight:400; margin-top: 2px;">${pair.edible.name[lang2]}</span>` : ""}
            </h4>
            <div class="comparator-img-wrap" onclick="navigateToMushroom('${pair.edible.id}')" title="${t.viewDetails || 'View details'}">
              <img src="${pair.edible.image}" alt="${pair.edible.name[lang]}">
            </div>
            <ul class="diff-checklist">
              ${pair.edible.traits[lang].map((tr, idx) => `
                <li style="color: var(--fg);">
                  <span style="color: var(--accent); font-weight: 700; flex-shrink: 0;">✓</span>
                  <div>
                    <span>${tr}</span>
                    ${lang2 && pair.edible.traits[lang2]?.[idx] ? `<div style="color:var(--muted); font-size:0.82rem; margin-top:2px;">${pair.edible.traits[lang2][idx]}</div>` : ""}
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
            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 0.5rem 0 0; color: var(--danger); cursor:pointer;" onclick="navigateToMushroom('${pair.toxic.id}')">
              ${pair.toxic.name[lang]}
              ${lang2 ? `<span style="color:var(--muted); font-size:0.85rem; display:block; font-weight:400; margin-top: 2px;">${pair.toxic.name[lang2]}</span>` : ""}
            </h4>
            <div class="comparator-img-wrap" onclick="navigateToMushroom('${pair.toxic.id}')" title="${t.viewDetails || 'View details'}">
              <img src="${pair.toxic.image}" alt="${pair.toxic.name[lang]}">
            </div>
            <ul class="diff-checklist">
              ${pair.toxic.traits[lang].map((tr, idx) => `
                <li style="color: var(--fg);">
                  <span style="color: var(--danger); font-weight: 700; flex-shrink: 0;">✕</span>
                  <div>
                    <span>${tr}</span>
                    ${lang2 && pair.toxic.traits[lang2]?.[idx] ? `<div style="color:var(--muted); font-size:0.82rem; margin-top:2px;">${pair.toxic.traits[lang2][idx]}</div>` : ""}
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
      <h2 style="font-size: 1.45rem; font-weight: 800; color: var(--fg); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
        <span>${lang === "zh" ? "芬兰主要毒素细胞作用机理与超长潜伏期剖析" : (lang === "fi" ? "Sienten myrkkytyypit ja solutason vaikutukset" : "Lethal Toxin Biochemistry & Delayed Symptoms Guide")}</span>
      </h2>
      <p style="font-size: 0.92rem; color: var(--muted);">
        ${lang === "zh" ? "牢记不可逆细胞损伤机制：高温水煮对鹅膏毒肽与奥来毒素完全无效！" : (lang === "fi" ? "Opi tuntemaan solumyrkkyjen tuhomekanismit: keittäminen ei auta amatoksiiniin tai orellaniiniin!" : "Understanding the irreversible cellular damage mechanisms: cooking does NOT destroy amatoxins or orellanine!")}
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem; margin-bottom: 2.5rem;">
      ${toxins.map(tox => `
        <div style="background: var(--card-bg); border: 1px solid var(--danger-border); border-left: 4px solid var(--danger); border-radius: var(--radius); padding: 1.25rem; box-shadow: var(--shadow); display: flex; flex-direction: column;">
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--danger); margin-bottom: 0.25rem;">${tox.name[lang] || tox.name.en}</h3>
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--muted); margin-bottom: 0.5rem;">${tox.source}</div>
          <div style="background: var(--danger-soft); color: var(--danger); border: 1px solid var(--danger-border); font-size: 0.82rem; font-weight: 700; padding: 0.35rem 0.65rem; border-radius: 4px; margin-bottom: 0.75rem;">
            ${tox.latency[lang] || tox.latency.en}
          </div>
          <p style="font-size: 0.86rem; color: var(--fg); line-height: 1.55; margin: 0; flex: 1;">
            ${tox.mechanism[lang] || tox.mechanism.en}
          </p>
        </div>
      `).join("")}
    </div>

    <!-- 3. Zero Tolerance Harvesting Protocol -->
    <div style="background: color-mix(in srgb, var(--danger) 6%, var(--card-bg)); border: 1px solid var(--danger-border); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 2rem;">
      <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--danger); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
        <span>${lang === "zh" ? "野外防误食“零容忍黄金法则”" : (lang === "fi" ? "Sienestäjän nollatoleranssi ja kultainen sääntö" : "The Zero-Tolerance Golden Rule for Wild Foraging")}</span>
      </h3>
      <ol style="padding-left: 1.25rem; font-size: 0.88rem; color: var(--fg); line-height: 1.6;">
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
    const isForaging = v.tradition === 'foraging';

    return `
      <div class="cooking-gallery-card" data-categories="${catClasses}">
        <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="cooking-gallery-thumb-wrap" title="${title}">
          <img src="https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg" alt="${title}" class="cooking-gallery-thumb" loading="lazy" />
          <div class="cooking-gallery-play-btn" title="${title}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <span class="cooking-gallery-duration">${v.duration}</span>
          <span class="cooking-gallery-badge ${isChinese ? 'chinese' : (isForaging ? 'foraging' : 'nordic')}">
            ${isChinese ? (lang === 'zh' ? '中华大师课' : 'Chinese Masterclass') : (isForaging ? (lang === 'zh' ? '初学入门野采' : (lang === 'fi' ? 'Aloittelijan opas' : 'Foraging Masterclass')) : 'Suomi / Nordic')}
          </span>
        </a>
        <div class="cooking-gallery-info">
          <div class="cooking-gallery-creator">
            ${v.channelUrl ? `<a href="${v.channelUrl}" target="_blank" rel="noopener noreferrer" class="gallery-creator-link" title="${v.creator}">${v.creator} ↗</a>` : v.creator}
          </div>
          <h4 class="cooking-gallery-card-title">${title}</h4>
          ${title2 ? `<div class="cooking-gallery-card-subtitle">${title2}</div>` : ""}
          <p class="cooking-gallery-card-desc">${desc}</p>
          <div class="cooking-gallery-card-footer">
            ${sp ? `
              <a href="#/mushroom/${sp.id}" onclick="navigateToMushroom('${sp.id}'); return false;" class="gallery-species-chip" title="${spName}">
                <img src="${sp.image}" alt="${spName}" class="gallery-chip-thumb" />
                <span>${spName}</span>
              </a>
            ` : (v.channelUrl ? `
              <a href="${v.channelUrl}" target="_blank" rel="noopener noreferrer" class="gallery-channel-pill" title="Mushroom Wonderland YouTube Channel">
                <span>${t.channelLabel || "Channel"}</span>
              </a>
            ` : `<div></div>`)}
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
    en: "Culinary Preparation, Preservation Science & Forest Kitchen",
    zh: "芬兰野菇保鲜科学、传统风味料理与中餐实战心法",
    fi: "Sienien säilöntä, esikäsittely ja perinteiset metsäreseptit"
  };
  const descMap = {
    en: "Dehydration temperature curves, dry-pan sweating (haudutus), milkcap salt-curing (suolasienet), 29 video masterclasses, and authentic Nordic & Chinese recipes.",
    zh: "低温风干脱水曲线、干锅焖蒸杀青排酸（Haudutus）、乳菇焯水漂烫除苦与分层腌渍（Suolasienet），附29堂中芬视频大课与经典林地食谱。",
    fi: "Kuivauslämpötilat, sienten haudutus omassa nesteessään, rouskujen ryöppäys ja suolaus, 29 mestarikurssivideota ja perinteiset reseptit."
  };

  const chineseMastery = [
    {
      icon: "",
      title: { en: "High-Heat Dry Wok Searing", zh: "猛火干锅煸炒出水法", fi: "Kuivapaahto wokissa" },
      desc: {
        en: "Nordic mushrooms hold 90% water. Searing them in a hot, dry wok without oil first evaporates excess liquid. Once squeaking and slightly caramelizing, add rapeseed oil, garlic, and fresh chili.",
        zh: "芬兰野菌含水量高达90%。切勿起锅直接下油焖炸！先将改刀切片的菌子倒入大火干锅中不断翻炒，逼出大量水气至表面微焦紧致，再淋入菜籽油、大蒜碎与青红椒大火快炒。",
        fi: "Sienissä on 90 % vettä. Paahda sienet ensin kuivassa kuumassa wokissa ilman öljyä nesteen haihduttamiseksi, ja lisää rypsiöljy ja mausteet vasta sitten."
      }
    },
    {
      icon: "",
      title: { en: "Cantonese Steaming with Ginger", zh: "广式葱姜清蒸原味法", fi: "Höyrytys inkiväärillä" },
      desc: {
        en: "Supreme for pristine young Porcini (*Boletus edulis*) and Orange Birch Boletes (*Leccinum versipelle*). Slice 5mm thick, arrange on plate with julienned ginger and scallions, steam 6–8 minutes, finish with hot sesame oil and light soy sauce.",
        zh: "极品幼嫩美味牛肝菌（白牛肝）与桦树牛肝菌（红头牛肝）的最顶级吃法！切5毫米薄片平铺，撒大量姜丝与葱白，大火蒸6-8分钟，淋热花生油激香，浇少许生抽即可享用天然山野之美。",
        fi: "Loistava tapa valmistaa nuoret herkkutatit: viipaloi ohuelti, höyrytä inkiväärin ja kevätsipulin kanssa 6–8 minuuttia ja viimeistele tilkalla kuumaa seesamiöljyä ja soijaa."
      }
    },
    {
      icon: "",
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
            ${t.videoMasterclassesTitle || "Video Masterclasses & Forest Kitchen Guides"}
          </h3>
          <p class="cooking-gallery-desc">
            ${t.videoMasterclassesDesc || "Authentic video tutorials from Finnish Martat experts and Chinese masterchefs, covering forest-to-table techniques, parboiling, and preservation."}
          </p>
        </div>
      </div>

      <div class="cooking-gallery-filters" id="cooking-gallery-filters">
        <button class="gallery-filter-btn active" onclick="filterCookingVideos('all', this)">${t.videoFilterAll || "All Masterclasses (29)"}</button>
        <button class="gallery-filter-btn" onclick="filterCookingVideos('beginner', this)">${t.videoFilterBeginner || "Beginners & Foraging"}</button>
        <button class="gallery-filter-btn" onclick="filterCookingVideos('finnish', this)">${t.videoFilterFinnish || "Finnish & Martat"}</button>
        <button class="gallery-filter-btn" onclick="filterCookingVideos('chinese', this)">${t.videoFilterChinese || "Chinese Masterclasses"}</button>
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
      <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: var(--accent-soft); color: var(--accent); font-size: 0.78rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 9999px; margin-bottom: 0.65rem; border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);">
        <span>${t.tabCooking || "Cooking & Preservation"}</span> • <span>Preservation Science • 29 Videos • Classic Recipes</span>
      </div>
      <h1 class="integrated-monograph-title" style="margin-bottom: 0.4rem;">${titleMap[lang] || titleMap.en}</h1>
      ${lang2 ? `<div class="integrated-monograph-subtitle">${titleMap[lang2] || ""}</div>` : ""}
      <p class="integrated-monograph-desc">${descMap[lang] || descMap.en}</p>
    </div>

    <!-- 1. Essential Kitchen & Preservation Principles (4 Cards) -->
    <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow);">
      <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--fg); margin-bottom: 0.5rem;">
        ${guide.title}
        ${guide2 ? `<span style="display:block; font-size: 0.98rem; color:var(--muted); margin-top:0.2rem; font-weight:400;">${guide2.title}</span>` : ""}
      </h2>
      <div style="color: var(--muted); font-size: 0.92rem; margin-bottom: 1.25rem;">
        <p>${guide.intro}</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
        ${guide.principles.map((p, idx) => `
          <div style="background: var(--card-hover); border: 1px solid var(--card-border); padding: 1rem; border-radius: 6px; display: flex; flex-direction: column;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--fg); margin-bottom: 0.35rem;">${p.title}</h4>
            <p style="font-size: 0.85rem; color: var(--muted); line-height: 1.5; margin-bottom: 0.5rem;">${p.content}</p>
            ${guide2 && guide2.principles?.[idx] ? `
              <div style="margin-top: 0.4rem; font-size: 0.82rem; color: var(--muted); line-height: 1.45;">
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

    <!-- 2. Video Masterclasses Gallery (29 Videos) -->
    ${videoGallerySectionHtml}

    <!-- 3. Featured Traditional Recipes -->
    <div class="section-divider-header" style="margin-bottom: 1.25rem;">
      <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--fg); margin-bottom: 0.35rem;">
        ${lang === "zh" ? "芬兰传统林地风味食谱精选" : (lang === "fi" ? "Perinteiset Reseptit" : "Featured Traditional Nordic Recipes")}
      </h3>
      <p style="font-size: 0.9rem; color: var(--muted);">
        ${lang === "zh" ? "包含备料时间、烹调火候、完整食材清单与视频教学演示" : (lang === "fi" ? "Valmistusajat, raaka-aineet, vaiheittaiset ohjeet ja videot" : "Prep times, ingredients, step-by-step instructions, and video walkthroughs")}
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2.5rem;">
      ${guide.recipes.map((rcp, idx) => {
        const rcp2 = guide2 && guide2.recipes?.[idx] ? guide2.recipes[idx] : null;
        return `
        <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 1.25rem; display: flex; flex-direction: column; box-shadow: var(--shadow);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.4rem;">
            <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--fg); margin: 0;">
              ${rcp.name}
              ${rcp2 ? `<span style="display:block; font-size: 0.9rem; color:var(--muted); margin-top:0.2rem; font-weight:400;">${rcp2.name}</span>` : ""}
            </h4>
            ${rcp.videoUrl ? `
              <a href="${rcp.videoUrl}" target="_blank" rel="noopener noreferrer" class="btn-recipe-video" title="${rcp.name}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="color: #dc2626;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span>${t.watchVideoBtn || "Watch Video"}</span>
              </a>
            ` : ""}
          </div>
          
          <div style="display: flex; gap: 0.75rem; font-size: 0.82rem; color: var(--muted); margin-bottom: 0.85rem; background: var(--card-hover); border: 1px solid var(--card-border); padding: 0.4rem 0.6rem; border-radius: 4px; flex-wrap: wrap;">
            <span><strong>${t.prepTime}</strong> ${rcp.prep}</span>
            <span><strong>${t.cookTime}</strong> ${rcp.cook}</span>
            <span><strong>${t.servings}</strong> ${rcp.servings}</span>
          </div>

          <div style="margin-bottom: 0.85rem;">
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--fg); margin-bottom: 0.3rem;">Ingredients:</div>
            <ul style="padding-left: 1.1rem; font-size: 0.82rem; color: var(--fg); line-height: 1.5;">
              ${rcp.ingredients.map((ing, iIdx) => `
                <li>
                  ${ing}
                  ${rcp2 && rcp2.ingredients?.[iIdx] ? `<div style="color:var(--muted); font-size: 0.78rem; margin-top: 1px;">${rcp2.ingredients[iIdx]}</div>` : ""}
                </li>
              `).join("")}
            </ul>
          </div>

          <div style="margin-top: auto; padding-top: 0.75rem; border-top: 1px solid var(--border);">
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--fg); margin-bottom: 0.3rem;">Instructions:</div>
            <ol style="padding-left: 1.1rem; font-size: 0.82rem; color: var(--fg); line-height: 1.5;">
              ${rcp.steps.map((step, sIdx) => `
                <li style="margin-bottom: 0.3rem;">
                  ${step}
                  ${rcp2 && rcp2.steps?.[sIdx] ? `<div style="color:var(--muted); font-size: 0.78rem; margin-top: 1px;">${rcp2.steps[sIdx]}</div>` : ""}
                </li>
              `).join("")}
            </ol>
          </div>
        </div>
      `;
      }).join("")}
    </div>

    <!-- 4. Chinese Wild Mushroom Mastery -->
    <div style="background: color-mix(in srgb, var(--warning) 6%, var(--card-bg)); border: 1px solid var(--warning-border); border-left: 4px solid var(--warning); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow);">
      <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--warning); margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.4rem;">
        <span>${lang === "zh" ? "中餐烹饪实战心法：如何驾驭芬兰野生菌" : (lang === "fi" ? "Kiinalaisen keittiön sienisalaisuudet" : "Chinese Wild Mushroom Culinary Mastery")}</span>
      </h3>
      <p style="font-size: 0.88rem; color: var(--muted); margin-bottom: 1.25rem;">
        ${lang === "zh" ? "巧妙融合云南干巴菌/牛肝菌旺火爆炒技法与粤式清蒸原味，释放北欧野生菌极致鲜度" : (lang === "fi" ? "Wok-paahtoa, höyrytystä ja aromaattisia liemiä pohjoisen villisienille" : "Applying high-heat wok searing, ginger steaming, and slow-simmered umami broths to Nordic wild mushrooms")}
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
        ${chineseMastery.map(cm => `
          <div style="background: var(--card-bg); border: 1px solid var(--warning-border); border-radius: 6px; padding: 1rem; display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; gap: 0.45rem; margin-bottom: 0.35rem;">
              <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--warning); margin: 0;">${cm.title[lang] || cm.title.en}</h4>
            </div>
            <p style="font-size: 0.84rem; color: var(--muted); line-height: 1.55; margin: 0;">${cm.desc[lang] || cm.desc.en}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// Forest Habitats, Trees & Seasons (Chapter 03 Integration)
// -------------------------------------------------------------
// -------------------------------------------------------------
// Forest Habitats, Trees & Seasons (Chapter 03 Integration)
// -------------------------------------------------------------
window.toggleChapter03Reader = function() {
  const drawer = document.getElementById("ch03-full-monograph-drawer");
  const btn = document.getElementById("btn-toggle-ch03-reader");
  if (!drawer) return;
  const isHidden = drawer.style.display === "none";
  drawer.style.display = isHidden ? "block" : "none";
  if (btn) {
    const lang = I18N.currentLang;
    if (isHidden) {
      btn.innerHTML = lang === "zh" ? "收起手册第三章完整长文 ↑" : (lang === "fi" ? "Piilota luvun 03 koko teksti ↑" : "Collapse Full Chapter 03 Monograph ↑");
    } else {
      btn.innerHTML = lang === "zh" ? "展开阅读手册第三章完整长文 (Unabridged) ↓" : (lang === "fi" ? "Lue luvun 03 koko teksti (Lyhentämätön) ↓" : "Expand Full Chapter 03 Monograph (Unabridged) ↓");
    }
  }
};

function renderHabitats() {
  const container = document.getElementById("habitats-container");
  if (!container) return;

  const lang = I18N.currentLang;
  const lang2 = I18N.secondaryLang;
  const t = I18N.ui[lang] || I18N.ui.en;

  const ch03 = getHandbookChapter("03");

  const titleMap = {
    en: "Finnish Forest Ecology, Seasonal Calendar & Tree Host Diagnostics",
    zh: "芬兰典型森林生境生态、逐月物候日历与树种菌根辨识实战",
    fi: "Suomen metsätyypit, satokalenteri ja puulajien tunnistusopas"
  };
  const descMap = {
    en: "Master Cajander's 4 forest site types (lehto, tuore kangas, kuiva kangas, korpi), month-by-month fruiting phenology from May to November, the 3-tree field identification matrix (Birch vs Pine vs Spruce), and the field solution to the Chanterelle Dilemma.",
    zh: "系统掌握Cajander四大森林林型生境（阔叶草本林、湿润云杉苔藓林、干燥松树苔原、湿地沼泽）、5至11月逐月物候出菇日历、三大主力共生树种辨识微距图鉴与秋季寻菇破解心法。",
    fi: "Opi tuntemaan Cajanderin metsätyypit (lehto, tuore kangas, kuiva kangas, korpi/räme), kuukausittainen satokalenteri toukokuusta marraskuuhun, kolmen pääpuulajin tunnistus sekä kantarellin maastoekologia."
  };

  const habitatSites = [
    {
      icon: "",
      name: { en: "Lehto (Herb-Rich Deciduous Groves)", zh: "Lehto（富营养阔叶草本林）", fi: "Lehto (Jalot lehtimetsät)" },
      badge: { en: "Neutral Humus • Filtered Sunlight", zh: "中性腐殖土 • 斑驳光影", fi: "Multamaa • Suodattunut valo" },
      soil: {
        en: "Nutrient-dense, damp humus, alkaline to neutral pH. Filtered sunlight beneath lush broadleaved canopies.",
        zh: "富营养深厚腐殖土，微酸至中性pH值，阔叶高树冠下斑驳漫射光与温和湿润微气候。",
        fi: "Ravinteikas, kostea multamaa, neutraali pH. Lehvästön suodattama pehmeä valo."
      },
      trees: {
        en: "Silver birch, European hazel, aspen, pedunculate oak, bird cherry.",
        zh: "白桦、欧洲榛、欧洲山杨、夏栎、稠李。",
        fi: "Rauduskoivu, pähkinäpensas, haapa, tammi, tuomi."
      },
      locations: {
        en: "Keskuspuisto (Maunula hazel groves), Petikko (Vantaa), Tammisto nature reserve.",
        zh: "中央公园Maunula受保护榛树林、万塔Petikko阔叶谷地、Tammisto自然保护区边界。",
        fi: "Keskuspuiston Maunula, Vantaan Petikko, Tammiston tammi- ja pähkinälehdot."
      },
      species: ["craterellus_cornucopioides", "boletus_reticulatus", "russula_cyanoxantha"]
    },
    {
      icon: "",
      name: { en: "Tuore kangas (Mesic Spruce-Blueberry Heath)", zh: "Tuore kangas（湿润云杉苔藓林 • 首都圈主力）", fi: "Tuore kangas (Mustikkatyypin kuusikko)" },
      badge: { en: "The Capital Region's Motherlode • Deep Feathermoss", zh: "首都圈主力林型 • 深厚赤茎藓毯", fi: "Pääkaupunkiseudun aarreaitta • Seinäsammal" },
      soil: {
        en: "Acidic podzol, thick moisture-retentive carpet of red-stemmed feathermoss (Pleurozium) and stair-step moss (Hylocomium), carpeted in bilberry (mustikka).",
        zh: "典型酸性格林灰壤，地表覆盖厚实蓄水的赤茎藓与塔藓绿毯，广泛伴生茂密欧洲越橘（蓝莓）。",
        fi: "Hapan podsolimaa, paksu kostea seinäsammal- ja metsäkerrossammalmatto, mustikanvarvusto."
      },
      trees: {
        en: "Norway spruce (Picea abies), mixed with scattered birch. Heavy shade, cool damp microclimate.",
        zh: "挪威云杉（Picea abies）纯林或混生少量白桦。林下浓荫蔽日，维持清凉湿润微气候。",
        fi: "Kuusi (Picea abies), seassa koivua. Varjoisa ja viileän kostea mikroilmasto."
      },
      locations: {
        en: "Sipoonkorpi ravines, Nuuksio lake plateaus, Luukki, Pitkäkoski old-growth.",
        zh: "西波国家公园幽深峡谷、努克西奥湖区阶地、Luukki原始林、Pitkäkoski古云杉林。",
        fi: "Sipoonkorven notkot, Nuuksion järviylänkö, Luukin aarnimetsät, Pitkäkoski."
      },
      species: ["boletus_edulis", "craterellus_tubaeformis", "hydnum_repandum", "cortinarius_caperatus"],
      warning: {
        en: "LETHAL CAUTION: This exact feathermoss layer is also home to the lethal Destroying Angel (Amanita virosa) and Deadly Webcap (Cortinarius rubellus)!",
        zh: "致命警示：该湿润云杉苔藓层同时也是致命剧毒白毒鹅膏（Amanita virosa）与赭红丝膜菌（Cortinarius rubellus）的原生共生家园！",
        fi: "VAARA: Tämä sama kuusikon sammalikko on myös hengenvaarallisen valkokärpässienen ja suippumyrkkyseitikin elinympäristö!"
      }
    },
    {
      icon: "",
      name: { en: "Kuiva kangas (Sub-xeric Pine-Lingonberry Heath)", zh: "Kuiva kangas（干燥松树苔原地 • 越橘石楠林）", fi: "Kuiva kangas (Männikkö & kankaat)" },
      badge: { en: "Coarse Sand & Moraine • Open Sunlit Canopy", zh: "粗砂冰碛土 • 高挑开阔阳生林", fi: "Hiekkamaa • Valoisa männikkö" },
      soil: {
        en: "Coarse sand, gravelly glacial moraine, thin humus layer, rapid drainage, bright open sunlit canopy. Lichens and lingonberry dominate.",
        zh: "粗砂质冰碛土、花岗岩石砾与薄腐殖质沙土，排水极快，高挑通透的松树冠层透光度极高，地衣与红豆越橘铺垫。",
        fi: "Karkea hiekkamaa, moreeni, ohut humuskerros, nopea kuivuminen, valoisa ja avara mäntymetsä jäkälämattoineen."
      },
      trees: {
        en: "Scots pine (Pinus sylvestris), lingonberry, heather, silvery reindeer lichens (Cladonia); prime habitat for King Boletes and Nordic Matsutake (tuoksuvalmuska).",
        zh: "欧洲赤松（Pinus sylvestris）、红豆越橘、石楠、银灰色驯鹿地衣毯；松树牛肝菌与北欧野生松茸（tuoksuvalmuska / 香口蘑）的核心家园。",
        fi: "Mänty (Pinus sylvestris), puolukka, kanerva, harmaat poronjäkälämatot; männynherkkutatin ja tuoksuvalmuskan (matsutake) paras elinympäristö."
      },
      locations: {
        en: "Uutela coastal cliffs, Salmi & Iso-Parikas moraine ridges, rocky plateaus of Nuuksio, and vast northern pine heaths of Lapland and Kainuu.",
        zh: "Uutela海滨峭壁、Salmi与Iso-Parikas冰碛山脊、努克西奥岩丘高地，以及拉普兰和凯努广袤的北欧赤松沙质台地。",
        fi: "Uutelan rantakalliot, Salmen ja Iso-Parikkaan harjut, Nuuksion kalliomänniköt sekä Kainuun ja Lapin laajat mäntykankaat."
      },
      species: ["boletus_pinophilus", "lactarius_deliciosus", "lactarius_rufus", "suillus_variegatus", "tricholoma_matsutake"]
    },
    {
      icon: "",
      name: { en: "Korpi & Räme (Spruce Mires & Peatland Bogs)", zh: "Korpi 与 Räme（云杉沼泽与泥炭湿地）", fi: "Korpi ja Räme (Suometsät & keidassuot)" },
      badge: { en: "Waterlogged Peat • Spongy Sphagnum Pillows", zh: "常年积水深厚泥炭 • 泥炭藓海绵垫", fi: "Kosteat turvemaat • Rahkasammal" },
      soil: {
        en: "Waterlogged peat, perpetual dampness, spongy Sphagnum moss hummocks, low nutrient availability.",
        zh: "常年积水深厚泥炭层，极度潮湿多孔的泥炭藓（Sphagnum）海绵沼泽垫，低pH值与少矿物质。",
        fi: "Turvekerros, jatkuva kosteus, upottavat rahkasammalmättäät."
      },
      trees: {
        en: "Stunted pine, downy birch (Betula pubescens), bog bilberry (juolukka), Labrador tea.",
        zh: "矮化赤松、毛白桦（Betula pubescens）、笃斯越橘、喇叭茶灌木。",
        fi: "Käppyrämännyt, hieskoivu, juolukka, suopursu."
      },
      locations: {
        en: "Tremanskärr nature reserve, Sipoonkorpi bog fringes, Nuuksio peat basins.",
        zh: "Tremanskärr高位泥炭沼泽、西波森林湿地边缘、努克西奥沼泽低地。",
        fi: "Tremanskärrin keidassuo, Sipoonkorven suojuotit, Nuuksion rämeet."
      },
      species: ["leccinum_versipelle", "russula_paludosa", "lactarius_trivialis"]
    }
  ];

  const phenologyCalendar = [
    {
      period: "05–06 • Spring / Kevät",
      title: { en: "Spring Anomaly: False Morel", zh: "早春反常期：春鹿花菌", fi: "Kevät: Korvasieni" },
      desc: {
        en: "Fruiting in sandy disturbed pine soil and logging tracks. Contains volatile gyromitrin; requires mandatory double-parboiling.",
        zh: "在受压实的砂质松树土壤与林业拖拉机车辙中萌发。含有挥发性剧毒鹿花菌素，需严格遵循两次通风彻底水煮去毒。",
        fi: "Hiekkapohjaiset männiköt, hakkuualueet ja ajourat. Sisältää gyromitriinia; vaatii ehdottoman ryöppäyksen."
      },
      species: ["gyromitra_esculenta"]
    },
    {
      period: "07 • Midsummer / Keskikesä",
      title: { en: "Midsummer Awakening: Golden Chanterelles", zh: "盛夏觉醒：金黄鸡油菌与早生牛肝菌", fi: "Keskikesä: Keltavahvero ja varhaistatit" },
      desc: {
        en: "Warm summer rains trigger early flushes of Golden Chanterelles along exposed forest paths, sunny bedrock crevices, and ditch banks.",
        zh: "温热夏雨促使金黄鸡油菌沿林间压实小径、朝阳岩石裂隙与排水渠边缘萌发；白桦牛肝菌陆续现身。",
        fi: "Lämpimät sateet herättävät kantarellit polunvarsille, kallioperän halkeamiin ja aurinkoisille rinteille."
      },
      species: ["cantharellus_cibarius", "leccinum_scabrum"]
    },
    {
      period: "08 • The Grand Flush / Elokuu",
      title: { en: "The Grand Flush: King Boletes, Russulas & Matsutake", zh: "黄金爆发期：美味牛肝菌、红菇与野生松茸盛宴", fi: "Elokuu: Herkkutattien suursato, haperot ja tuoksuvalmuska" },
      desc: {
        en: "Warm nights (>12°C) combined with thunderstorms produce massive Porcini flushes lasting 2–3 weeks. On dry sandy pine heaths, prized Nordic Matsutake (tuoksuvalmuska) begins its main fruiting flush.",
        zh: "连续温热夜温（>12°C）叠加晚夏暴雷雨，引爆美味牛肝菌狂欢。而在干燥沙质赤松林中，备受尊崇的北欧野生松茸（tuoksuvalmuska / 香口蘑）亦迎来核心出菇主汛期。",
        fi: "Lämpimät yöt ja ukkossateet laukaisevat herkkutattien massiivisen sadon. Karuilla mäntykankailla alkaa arvostetun tuoksuvalmuskan (matsutake) paras satokausi."
      },
      species: ["boletus_edulis", "boletus_pinophilus", "tricholoma_matsutake", "lactarius_deliciosus", "russula_paludosa"]
    },
    {
      period: "09 • The Golden Peak / Syyskuu",
      title: { en: "The Golden Peak: 50+ Species Concurrently", zh: "真菌巅峰月：50余种珍馐群芳争艳", fi: "Syyskuu: Sienikauden huipennus (50+ lajia)" },
      desc: {
        en: "The undisputed crown month of Finnish mycology: Wood Hedgehogs, Black Trumpets, Sheep Polypores, Gypsy Mushrooms, Nordic Pine Matsutake, and all traditional salting milkcaps.",
        zh: "芬兰采菇无可争议的黄金皇冠之月：卷缘齿菌、黑号角菇、白地花菌、吉普赛菇、北欧野生松茸与全套传统腌渍乳菇铺满林地。",
        fi: "Sienikauden ehdoton huippu: vaaleaorakkaat, mustatorvisienet, lampaankäävät, kehnäsienet, tuoksuvalmuska ja suolasienirouskut."
      },
      species: ["hydnum_repandum", "craterellus_cornucopioides", "albatrellus_ovinus", "cortinarius_caperatus", "tricholoma_matsutake"]
    },
    {
      period: "10–11 • Late Autumn / Loppusyksy",
      title: { en: "Frost-Resistant Bounty: Funnel Chanterelles", zh: "深秋抗霜期：漏斗鸡油菌无尽地毯", fi: "Loka–marraskuu: Suppilovahveron valtakausi" },
      desc: {
        en: "Funnel Chanterelles thrive down to freezing (-4°C). Can be harvested frozen solid on the moss; culinary texture remains flawless until heavy snow.",
        zh: "耐受深秋初霜（0°C至-4°C），即使在苔藓上冻成冰棒也能采回家缓慢解冻，口感鲜美丝毫不损，采摘期持续至大雪封山。",
        fi: "Suppilovahvero kestää pakkasyöt ja voidaan poimia jopa umpijäässä. Kausi jatkuu pysyvään lumeen asti."
      },
      species: ["craterellus_tubaeformis"]
    }
  ];

  container.innerHTML = `
    <!-- Section Header Banner -->
    <div class="integrated-monograph-header" style="margin-bottom: 2rem;">
      <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: var(--accent-soft); color: var(--accent); font-size: 0.78rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 9999px; margin-bottom: 0.65rem; border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);">
        <span>${t.tabHabitats || "Habitats, Trees & Seasons"}</span> • <span>Cajander Forest Types • Seasonal Calendar • 3-Tree Diagnostics</span>
      </div>
      <h1 class="integrated-monograph-title" style="margin-bottom: 0.4rem;">${titleMap[lang] || titleMap.en}</h1>
      ${lang2 ? `<div class="integrated-monograph-subtitle">${titleMap[lang2] || ""}</div>` : ""}
      <p class="integrated-monograph-desc">${descMap[lang] || descMap.en}</p>
      ${ch03 ? renderSpeciesChipsForChapter(ch03, lang, t) : ""}
    </div>

    <!-- 1. The 4 Cajander Forest Site Types -->
    <div class="section-divider-header" style="margin-bottom: 1.25rem;">
      <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--fg); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
        <span>${lang === "zh" ? "芬兰4大典型森林林型生境与共生菌根分类（Cajander分类法）" : (lang === "fi" ? "4 Suomen päämetsätyyppiä ja sienilajit (Cajanderin luokittelu)" : "The 4 Main Finnish Forest Site Types & Mycorrhizal Partners")}</span>
      </h2>
      <p style="font-size: 0.9rem; color: var(--muted);">
        ${lang === "zh" ? "芬兰植物学家通过林下地表植被严格划分林型，不同土壤、光照与树种孕育截然不同的真菌群落" : (lang === "fi" ? "Aluskasvillisuus ja puusto määrittävät maaperän kosteuden ja sienirihmastojen elämän" : "Understory indicator vegetation and host canopy dictate soil moisture, acidity, and root-symbiotic flushes")}
      </p>
    </div>

    <div class="habitat-site-grid">
      ${habitatSites.map(site => `
        <div class="habitat-site-card">
          <div class="habitat-site-header">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <h3 class="habitat-site-title">${site.name[lang] || site.name.en}</h3>
            </div>
            <span class="habitat-badge">${site.badge[lang] || site.badge.en}</span>
          </div>

          <div class="habitat-prop-block">
            <div><span class="habitat-prop-label">Soil & Light:</span> ${site.soil[lang] || site.soil.en}</div>
          </div>

          <div class="habitat-prop-block">
            <div><span class="habitat-prop-label">Host Trees:</span> ${site.trees[lang] || site.trees.en}</div>
          </div>

          <div style="font-size: 0.84rem; color: var(--muted); margin-bottom: 0.85rem;">
            <strong>Prime Locations:</strong> ${site.locations[lang] || site.locations.en}
          </div>

          ${site.warning ? `
            <div style="font-size: 0.82rem; color: var(--danger); background: var(--danger-soft); border: 1px solid var(--danger-border); padding: 0.55rem 0.75rem; border-radius: 6px; margin-bottom: 0.85rem; line-height: 1.45;">
              ${site.warning[lang] || site.warning.en}
            </div>
          ` : ""}

          <div style="margin-top: auto; border-top: 1px solid var(--rule); padding-top: 0.75rem;">
            <div style="font-size: 0.78rem; font-weight: 700; color: var(--muted); margin-bottom: 0.35rem; text-transform: uppercase; letter-spacing: 0.04em;">Key Symbionts:</div>
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
              ${site.species.map(spId => {
                const sp = I18N.species.find(s => s.id === spId);
                if (!sp) return "";
                const spName = sp.names[lang]?.primary || sp.latinName;
                return `<a href="#/mushroom/${sp.id}" class="inline-species-chip" onclick="navigateToMushroom('${sp.id}'); return false;">${spName}</a>`;
              }).join("")}
            </div>
          </div>
        </div>
      `).join("")}
    </div>

    <!-- 2. Month-by-Month Foraging Calendar -->
    <div class="section-divider-header" style="margin-bottom: 1.25rem;">
      <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--fg); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
        <span>${lang === "zh" ? "芬兰南部野生菌逐月物候出菇日历（5月至11月）" : (lang === "fi" ? "Etelä-Suomen sienikalenteri kuukausittain (toukokuu–marraskuu)" : "Southern Finland Month-by-Month Foraging Calendar")}</span>
      </h2>
      <p style="font-size: 0.9rem; color: var(--muted);">
        ${lang === "zh" ? "把握气温、昼长与降雨周期：从早春鹿花菌到盛夏牛肝菌暴发，再到耐霜深秋漏斗鸡油菌" : (lang === "fi" ? "Lämpötila, valojakso ja sateet ohjaavat lajien satoaikoja keväästä ensilumiin" : "Temperature, day length, and rainfall cycles dictating flushes from spring morels to late frost chanterelles")}
      </p>
    </div>

    <div class="phenology-grid">
      ${phenologyCalendar.map(cal => `
        <div class="phenology-card">
          <span class="phenology-month-tag">${cal.period}</span>
          <h3 class="phenology-month-title">${cal.title[lang] || cal.title.en}</h3>
          <p style="font-size: 0.85rem; color: var(--muted); line-height: 1.55; margin-bottom: 0.85rem; flex: 1;">
            ${cal.desc[lang] || cal.desc.en}
          </p>
          <div style="border-top: 1px solid var(--rule); padding-top: 0.65rem;">
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
              ${cal.species.map(spId => {
                const sp = I18N.species.find(s => s.id === spId);
                if (!sp) return "";
                const spName = sp.names[lang]?.primary || sp.latinName;
                return `<a href="#/mushroom/${sp.id}" class="inline-species-chip" onclick="navigateToMushroom('${sp.id}'); return false;">${spName}</a>`;
              }).join("")}
            </div>
          </div>
        </div>
      `).join("")}
    </div>

    <!-- 3. The Chanterelle Dilemma & 3-Tree Field Diagnostics -->
    <div class="chanterelle-dilemma-card">
      <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--fg); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.45rem;">
        <span>${lang === "zh" ? "鸡油菌寻菇之谜：为什么满山遍野是漏斗鸡油菌，却难觅金黄鸡油菌？" : (lang === "fi" ? "Kantarellin mysteeri: Miksi suppilovahveroita on kaikkialla mutta kantarelleja ei?" : "The Chanterelle Dilemma: Why Heaps of Funnels but No Golden Chanterelles?")}</span>
      </h2>
      <p style="font-size: 0.9rem; color: var(--muted); margin-bottom: 1.25rem;">
        ${lang === "zh" ? "“是不是因为真鸡油菌太显眼，早被别人捡光了？”这是每位秋季采菇者最常有的疑惑。真实根源在于物候时钟、微生境分异与共生树种差异：" : (lang === "fi" ? "Onko syynä poimintapaine vai jokin muu? Syynä ovat satokauden vaihe, metsän kosteus ja puulajit:" : "Is it human picking pressure or biology? The true answers lie in seasonality, micro-habitat divergence, and tree mycorrhiza:")}
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
        <div style="background: var(--card-hover); border: 1px solid var(--card-border); border-radius: 6px; padding: 1rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--fg); margin: 0 0 0.35rem;">${lang === "zh" ? "1. 物候周期分异" : (lang === "fi" ? "1. Satokauden ajoitus" : "1. Calendar Phase")}</h4>
          <p style="font-size: 0.85rem; color: var(--muted); line-height: 1.5; margin: 0;">
            ${lang === "zh" ? "漏斗鸡油菌是晚秋主力（9月中旬至11月达到峰值），嗜好低温潮湿；金黄鸡油菌主汛期在7月至8月盛夏，进入深秋后仅有零星残余。" : (lang === "fi" ? "Suppilovahvero on myöhäissyksyn sieni (huippu syys-marraskuussa). Keltavahveron pääsato valmistuu jo heinä-elokuussa." : "Funnel chanterelles peak late (Sept–Nov) in cold rain; Golden chanterelles peak in warm midsummer (July–Aug) and taper off in late autumn.")}
          </p>
        </div>

        <div style="background: var(--card-hover); border: 1px solid var(--card-border); border-radius: 6px; padding: 1rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--fg); margin: 0 0 0.35rem;">${lang === "zh" ? "2. 森林“房间”与微生境" : (lang === "fi" ? "2. Metsätyyppi ja valo" : "2. Micro-Habitat Divergence")}</h4>
          <p style="font-size: 0.85rem; color: var(--muted); line-height: 1.5; margin: 0;">
            ${lang === "zh" ? "满地漏斗鸡油菌说明你身处深邃阴暗、极度潮湿的厚苔藓纯云杉林（Kuusikko）；而金黄鸡油菌需要更多日照与温暖，偏爱白桦与松树根系交界处。" : (lang === "fi" ? "Suppikset viihtyvät pimeässä ja kosteassa sammalkuusikossa. Kantarelli vaatii valoa, lämpöä ja koivun tai männyn juuristoa." : "If you are surrounded by funnels, you are standing in dark, damp spruce feathermoss. Golden chanterelles demand warmth, sunlight, and birch/pine roots.")}
          </p>
        </div>

        <div style="background: var(--card-hover); border: 1px solid var(--card-border); border-radius: 6px; padding: 1rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--fg); margin: 0 0 0.35rem;">${lang === "zh" ? "3. 辨识度与周末人流" : (lang === "fi" ? "3. Näkyvyys ja poiminta" : "3. Visibility & Human Pressure")}</h4>
          <p style="font-size: 0.85rem; color: var(--muted); line-height: 1.5; margin: 0;">
            ${lang === "zh" ? "金黄鸡油菌通体亮黄，休闲步道旁一眼便见，周末极易被游客采净；漏斗鸡油菌菌盖呈迷彩色，与落叶苔藓完美融为一体，路人常踩过而浑然不觉。" : (lang === "fi" ? "Kantarellin kirkas keltainen väri erottuu kauas ja polunvarret kerätään tyhjiksi. Suppiksen ruskea lakki maastoutuu täydellisesti." : "Golden chanterelles are brilliant yellow and stripped bare on tourist paths; brown funnel chanterelles are natural camouflage and walked over by hundreds.")}
          </p>
        </div>
      </div>

      <!-- 3-Tree Field Diagnostics -->
      <div class="tree-diagnostic-container">
        <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--fg); margin: 0 0 0.35rem; display: flex; align-items: center; gap: 0.4rem;">
          <span>${lang === "zh" ? "芬兰三大主力树种辨识微距图鉴（白桦 vs 赤松 vs 云杉）" : (lang === "fi" ? "Kolme pääpuulajia: Rauduskoivu, Mänty ja Kuusi" : "The Big Three Tree Diagnostics: Silver Birch vs. Scots Pine vs. Norway Spruce")}</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--muted); margin: 0 0 1rem;">
          ${lang === "zh" ? "看树采菇是北欧采蘑菇最高效的本领：白桦生真鸡油与牛肝，赤松出松蘑与松乳菇，云杉下铺满漏斗鸡油菌与齿菌。" : (lang === "fi" ? "Puuston tunnistaminen on sienestäjän tärkein taito: eri puut elävät symbioosissa eri sienilajien kanssa." : "Reading the canopy is the ultimate foraging skill: birch yields golden chanterelles, pine yields boletes and milkcaps, spruce yields funnels and hedgehogs.")}
        </p>

        <img src="images/birch_pine_spruce.jpg" alt="Silver Birch, Scots Pine, Norway Spruce in Finnish forest" class="habitats-tree-img" loading="lazy" />
        <div class="habitats-img-caption">
          ${lang === "zh" ? "芬兰森林三大主角（从左至右）：白桦 (Betula pendula) • 欧洲赤松 (Pinus sylvestris) • 挪威云杉 (Picea abies)" : (lang === "fi" ? "Suomen metsien pääpuulajit: Rauduskoivu (vas.) • Mänty (kesk.) • Kuusi (oik.)" : "The Big Three Forest Trees of Finland: Silver Birch (left) • Scots Pine (center) • Norway Spruce (right)")}
        </div>

        <div class="tree-cols-grid">
          <!-- Birch -->
          <div class="tree-col-card">
            <h4 class="tree-col-title">${lang === "zh" ? "白桦" : (lang === "fi" ? "Rauduskoivu" : "Silver Birch")}</h4>
            <div class="tree-col-latin">Betula pendula • Koivu</div>
            <div class="tree-feature-row"><strong>Bark:</strong> Chalk-white papery peeling bark with black horizontal lenticels; deep dark diamond fissures at trunk base.</div>
            <div class="tree-feature-row"><strong>Canopy:</strong> Broadleaf: triangular serrated leaves, radiant golden yellow in autumn. Dappled sunlit floor.</div>
            <div class="tree-feature-row"><strong>Floor:</strong> Light moss, grass hummocks, fallen birch leaves. Rich humus with good warmth.</div>
            <div class="tree-feature-row"><strong>Fungi:</strong> <strong>Golden Chanterelle</strong>, King Bolete, Orange Birch Bolete, Brown Birch Scaber Stalk.</div>
          </div>

          <!-- Pine -->
          <div class="tree-col-card">
            <h4 class="tree-col-title">${lang === "zh" ? "欧洲赤松" : (lang === "fi" ? "Mänty" : "Scots Pine")}</h4>
            <div class="tree-col-latin">Pinus sylvestris • Mänty</div>
            <div class="tree-feature-row"><strong>Bark:</strong> Two-toned trunk: flaky cinnamon-orange bark on top 2/3; dark grey-brown thick scaly plates at base.</div>
            <div class="tree-feature-row"><strong>Canopy:</strong> Conifer: needles grow in pairs (clusters of 2). High sparse airy crown, bright dry forest floor.</div>
            <div class="tree-feature-row"><strong>Floor:</strong> Sandy moraine, silvery reindeer lichens, lingonberry, heather. Rapid drainage.</div>
            <div class="tree-feature-row"><strong>Fungi:</strong> <strong>Pine Bolete</strong> (*männynherkkutatti*), <strong>Pine Matsutake</strong> (*tuoksuvalmuska* / 松口蘑), Saffron Milkcap, Rufous Milkcap, Velvet Bolete.</div>
          </div>

          <!-- Spruce -->
          <div class="tree-col-card">
            <h4 class="tree-col-title">${lang === "zh" ? "挪威云杉" : (lang === "fi" ? "Kuusi" : "Norway Spruce")}</h4>
            <div class="tree-col-latin">Picea abies • Kuusi</div>
            <div class="tree-feature-row"><strong>Bark:</strong> Uniform dark reddish-brown to grey-brown scaly bark extending the entire trunk height.</div>
            <div class="tree-feature-row"><strong>Canopy:</strong> Conifer: short sharp needles growing singly around twigs. Dense conical heavy shade.</div>
            <div class="tree-feature-row"><strong>Floor:</strong> Deep feathermoss sponge (*Pleurozium*, *Hylocomium*), bilberry bushes (*mustikka*). Constant moisture.</div>
            <div class="tree-feature-row"><strong>Fungi:</strong> <strong>Funnel Chanterelle</strong>, Wood Hedgehog, Porcini, and lethal <strong>Deadly Webcap</strong>.</div>
          </div>
        </div>
      </div>

      <!-- 4 Autumn Tactics for Golden Chanterelles -->
      <div style="background: var(--card-hover); border: 1px solid var(--card-border); border-radius: 8px; padding: 1.25rem;">
        <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--fg); margin: 0 0 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
          <span>${lang === "zh" ? "深秋采摘金黄鸡油菌实操心法（4大转场绝招）" : (lang === "fi" ? "4 vinkkiä syyskantarellien löytämiseen" : "4 Field Tactics to Find Golden Chanterelles in Autumn")}</span>
        </h3>
        <ol style="padding-left: 1.2rem; font-size: 0.86rem; color: var(--fg); line-height: 1.6; margin: 0;">
          <li><strong>${lang === "zh" ? "走出幽暗云杉林" : (lang === "fi" ? "Siirry pois pimeästä kuusikosta" : "Exit Dark Spruce Woods")}:</strong> ${lang === "zh" ? "从密不透风的云杉峡谷向外走，转向白桦疏林带、农田林缘与向阳的西南坡面，寻找深秋阳光尚能烘暖的土地。" : (lang === "fi" ? "Hakeudu kuusikosta koivikkoon, pellonreunoihin tai valoisiin etelärinteisiin." : "Walk out of deep spruce hollows into birch stands, forest margins, and sunny west/south-facing slopes.")}</li>
          <li><strong>${lang === "zh" ? "沿土路与石脊巡查" : (lang === "fi" ? "Seuraa polkuja ja kallionreunoja" : "Follow Paths & Rock Rims")}:</strong> ${lang === "zh" ? "重点巡视受压实的林道边际、拖拉机土路车辙，以及花岗岩岩丘（kallio）与白桦松树交接的苔藓缝隙。" : (lang === "fi" ? "Tarkista tallatut polunvarret, metsäautotiet ja kalliomännikön reunamat." : "Inspect compressed edges of walking tracks, dirt roads, and granite rock ledges meeting birch and pine.")}</li>
          <li><strong>${lang === "zh" ? "寻找苔藓落叶微突起" : (lang === "fi" ? "Etsi sammalmättäiden kohoumia" : "Search Moss Hummocks")}:</strong> ${lang === "zh" ? "深秋真鸡油菌常半埋在白桦黄叶与苔藓底下。注意地表微隆的圆形凸起，轻轻拨开落叶，底下往往藏着胖乎乎的鹅黄幼菇。" : (lang === "fi" ? "Syksyllä kantarellit kasvavat usein lehtien alla piilossa; nosta varovasti sammalmättäitä." : "In late autumn, golden chanterelles fruit semi-submerged beneath birch leaves. Look for rounded bumps in the moss.")}</li>
          <li><strong>${lang === "zh" ? "妥善保存GPS定位点" : (lang === "fi" ? "Merkitse paikka kartalle" : "Save Your GPS Pin")}:</strong> ${lang === "zh" ? "鸡油菌菌丝极其长寿稳定，一旦发现一处群落，往后数十年每年都会在同一处持续萌发。随手在地图打下坐标！" : (lang === "fi" ? "Keltavahveron rihmasto elää vuosikymmeniä samalla paikalla: tallenna koordinaatit tulevia vuosia varten." : "Chanterelle mycelium is perennial and long-lived. A patch will fruit in the exact same spot for decades.")}</li>
        </ol>
      </div>
    </div>

    <!-- 4. Complete Handbook Chapter 03 Unabridged Monograph -->
    ${ch03 ? `
      <div style="margin-top: 2.5rem; text-align: center;">
        <button id="btn-toggle-ch03-reader" class="btn-toggle-monograph" onclick="toggleChapter03Reader()">
          ${lang === "zh" ? "展开阅读手册第三章完整长文 (Unabridged) ↓" : (lang === "fi" ? "Lue luvun 03 koko teksti (Lyhentämätön) ↓" : "Expand Full Chapter 03 Monograph (Unabridged) ↓")}
        </button>
      </div>

      <div id="ch03-full-monograph-drawer" style="display: none; margin-top: 1.5rem;">
        <article class="live-reader-body integrated-monograph-body">
          ${ch03.html || ""}
        </article>
      </div>
    ` : ""}
  `;
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
    en: "Helsinki Foraging Spots by HSL Transit & 5 Hidden Wilderness Gems",
    zh: "赫尔辛基大区HSL公共交通采蘑菇宝典与5大隐世秘境",
    fi: "Helsingin seudun sienipaikat HSL-yhteyksillä ja 5 salaista erämaahelmeä"
  };
  const descMap = {
    en: "Direct commuter trains, trunk buses, and live Google Maps trailhead navigation for Keskuspuisto, Sipoonkorpi, Nuuksio, and Luukki, plus 5 peaceful, low-pressure wilderness gems across the capital region.",
    zh: "详尽整理搭乘HSL火车与干线公交直达的经典森林采摘点（中央公园、西波国家公园、努克西奥、Luukki），并特别收录5大极少人知的清幽秘境，附起终点定位与Google Maps一键导航。",
    fi: "Kattava opas julkisen liikenteen sienireiteille Keskuspuistoon, Sipoonkorpeen, Nuuksioon ja Luukkiin sekä 5 rauhalliseen erämaakohteeseen suoralla Google Maps -navigoinnilla."
  };

  const transitCards = [
    {
      icon: "",
      title: { en: "Zone A–D Ticketing", zh: "ABCD区票务攻略", fi: "Vyöhykeliput (ABCD)" },
      desc: {
        en: "Zone AB covers Keskuspuisto & Kuusijärvi trailhead. Zone ABC covers Nuuksio Haukkalampi, Sipoonkorpi, and Luukki. Zone ABCD covers Meiko (Kirkkonummi). Buy tickets easily in the official HSL mobile app.",
        zh: "AB区覆盖中央公园和Kuusijärvi入口；ABC区覆盖努克西奥Haukkalampi、西波和Luukki；ABCD区覆盖Kirkkonummi的Meiko秘境。建议直接使用HSL App购票。",
        fi: "AB-lippu kattaa Keskuspuiston ja Kuusijärven. ABC kattaa Nuuksion Haukkalammen, Sipoonkorven ja Luukin. ABCD-lippu tarvitaan Meikoon (Kirkkonummi)."
      }
    },
    {
      icon: "",
      title: { en: "Commuter Trains", zh: "通勤近郊火车", fi: "Lähijunat (I, P, K, R, U)" },
      desc: {
        en: "I/P ring rail to Malmi/Myyrmäki; K train to Kerava/Korso for Sipoonkorpi feeder buses; U/L/Y trains west along the coastal line to Espoo & Kirkkonummi for Nuuksio and Meiko.",
        zh: "I/P线环线火车直通万塔；K线直通Kerava/Korso换乘西波接驳公交；U/L/Y线往西沿沿海铁路线直通埃斯波与Kirkkonummi（前往努克西奥与Meiko）。",
        fi: "I/P-kehäradat, K-juna Korsoon ja Keravalle Sipoonkorven busseihin, U/L/Y-junat länteen Espooseen ja Kirkkonummelle Meikoon."
      }
    },
    {
      icon: "",
      title: { en: "Trunk Bus Lines", zh: "干线快速公交", fi: "Runkobussit & Linjat" },
      desc: {
        en: "Orange trunk buses 500, 510, 520, 530 provide orbital cross-city connections. Bus 345 from Kalasatama/Elielinaukio goes direct to Luukki, Vaakkoi, and Tremanskärr.",
        zh: "橙色干线公交500/510/520/530提供高频跨区环线换乘；345路从Kalasatama/火车站直达Luukki、Vaakkoi与Tremanskärr秘境入口。",
        fi: "Runkolinjat 500, 510, 520, 530 sekä Vihdintien bussi 345 vievät suoraan Luukkiin, Vaakkoihin ja Tremanskärriin."
      }
    },
    {
      icon: "",
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
        en: "Train U, Y, or L to Kirkkonummi station (~30 min) + Bus 907 to Myllykylä or 3.5 km hike/bike along Korsolammentie",
        zh: "U/Y/L线火车至Kirkkonummi站（约30分钟）+ 换乘907路至Myllykylä，或沿Korsolammentie骑行/步行3.5公里",
        fi: "U-, Y- tai L-juna Kirkkonummelle (~30 min) + bussi 907 tai 3,5 km pyöräily/kävely Korsolammentietä"
      },
      highlights: {
        en: "Pristine oligotrophic wilderness lakes, ancient quartzite crags, and untouched old-growth pine/spruce heaths. Very low picking pressure compared to Nuuksio; exceptional for chanterelles and hedgehogs.",
        zh: "极清澈的原始冰川湖泊群、古老石英岩峭壁与未经砍伐的百年松杉原始林。周末游客仅为努克西奥的零头，极少采摘干扰，岩缝鸡油菌与齿菌丰富。",
        fi: "Kirkasvetiset erämaajärvet, jyrkät kalliomänniköt ja vanhat aarnimetsät. Huomattavasti Nuuksiota rauhallisempi; loistava kantarelli- ja orakasmaasto."
      },
      species: ["cantharellus_cibarius", "craterellus_tubaeformis", "boletus_edulis", "hydnum_repandum"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Meiko+Kirkkonummi"
    },
    {
      name: { en: "Tremanskärr & Kurkijärvi", zh: "Tremanskärr 与 Kurkijärvi 泥炭沼泽林区", fi: "Tremanskärr ja Kurkijärvi" },
      loc: "Northern Espoo • Zone C",
      route: {
        en: "Bus 345 from Elielinaukio along Vihdintie to Kalajärven keskus or Rinnekoti / Tremanskärr entrance",
        zh: "从Elielinaukio乘345路沿Vihdintie至Kalajärven keskus或Rinnekoti/Tremanskärr入口",
        fi: "Bussi 345 Elielinaukiolta Vihdintietä Kalajärvelle tai Rinnekodin / Tremanskärrin pysäkille"
      },
      highlights: {
        en: "Natural raised peat bog with wooden duckboard trails surrounded by primeval, moss-laden Norway spruce forests. Outer trails remain quiet and deserted while crowds pack nearby Luukki.",
        zh: "芬兰南部原生态高位泥炭藓沼泽与木栈道，外围被高大浓密的云杉原始林环抱。邻近的Luukki人满为患时，这里外围林径依然幽静无人，盛产漏斗鸡油菌与红绒盖牛肝菌。",
        fi: "Luonnontilainen keidassuo pitkospuilla vanhan kuusikon syleilyssä. Rauhallinen kohde Luukin ruuhkien ulkopuolella; runsaasti suppilovahveroita ja tatteja."
      },
      species: ["craterellus_tubaeformis", "hydnum_repandum", "lactarius_trivialis", "leccinum_versipelle"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Tremansk%C3%A4rr+Espoo"
    },
    {
      name: { en: "Northern Sipoonkorpi via Byabäcken & Fiskträsk West", zh: "北西波森林（Byabäcken 溪谷与 Fiskträsk 西侧）", fi: "Pohjois-Sipoonkorpi (Byabäcken ja Fiskträsk Länsi)" },
      loc: "Sipoo • Zone D",
      route: {
        en: "Bus 785, 787, or 788 from Rautatientori to Länsitie / Byabäcken, or Bus 738 to Landbo / Källängen",
        zh: "从Rautatientori乘785/787/788路公交至Länsitie / Byabäcken，或乘738路至Landbo / Källängen",
        fi: "Bussi 785, 787 tai 788 Rautatientorilta Länsitielle / Byabäckeniin, tai bussi 738 Landbohon"
      },
      highlights: {
        en: "90% of visitors enter from the south at Kuusijärvi. The northern Byabäcken valley offers deep taiga solitude, hazelnut groves for Black Trumpets, and mossy spruce hollows with zero tourist crowds.",
        zh: "90%的游客挤在南侧Kuusijärvi入口。北侧Byabäcken溪谷展现纯正泰加林荒野风貌，阔叶榛树林盛产黑号角菇，深谷幽潭间漏斗鸡油菌成片分布。",
        fi: "Pohjois-Sipoonkorpi ja Byabäckenin jokilaakso ovat aitoa erämaata kaukana Kuusijärven ruuhkista. Huippupaikka mustatorvisienille ja suppilovahveroille."
      },
      species: ["craterellus_cornucopioides", "hydnum_repandum", "boletus_edulis", "craterellus_tubaeformis"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Byab%C3%A4cken+Sipoo"
    },
    {
      name: { en: "Salmi & Iso-Parikas", zh: "Salmi 与 Iso-Parikas 荒野湖区", fi: "Salmi ja Iso-Parikas" },
      loc: "Vihti / Northern Nuuksio • Zone D",
      route: {
        en: "Bus 345 from Elielinaukio to Rinnekoti / Lahnus, or regional bus along Highway 120 (Vihdintie) to Salmentie (Zone D)",
        zh: "从Elielinaukio乘345路至Rinnekoti/Lahnus，或沿120号公路（Vihdintie）乘区域客运至Salmentie（D区）",
        fi: "Bussi 345 Elielinaukiolta Rinnekodille / Lahnukseen tai Vihdintien bussi Salmentielle (D-vyöhyke)"
      },
      highlights: {
        en: "The wild northern frontier of the Nuuksio lake plateau in Vihti. Local picking pressure drops by 80% compared to Haukkalampi. Rugged moraine ridges between Lake Salmijärvi and Iso-Parikas with pure taiga atmosphere, heavy pine-heath for Pine Boletes, Saffron Milkcaps, and untouched chanterelles on mossy ledges.",
        zh: "位于Vihti境内的Nuuksio湖泊高原北部荒野前沿，采摘压力比Haukkalampi低80%。Salmijärvi与Iso-Parikas湖之间的冰碛岩脊展现纯正泰加林风貌，松树荒原盛产松树牛肝菌、松乳菇与原始岩缝鸡油菌。",
        fi: "Nuuksion järviylängön villi pohjoinen erämaa Vihdissä. Poimintapaine 80 % alhaisempi kuin Haukkalammella. Jylhät harjut ja koskemattomat mäntykankaat herkkutateille ja rouskuille."
      },
      species: ["boletus_pinophilus", "lactarius_deliciosus", "cantharellus_cibarius", "craterellus_tubaeformis"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Salmen+ulkoilualue+Vihti"
    },
    {
      name: { en: "Vestra & Riipilä Agricultural Forest Margins", zh: "Vestra 与 Riipilä 田野林缘交界带", fi: "Vestran ja Riipilän maalaisreitit" },
      loc: "Northern Vantaa • Zone C",
      route: {
        en: "Train I or P to Kivistö Station + Bus 445 or 576 to Vestrantie / Riipiläntie",
        zh: "I/P线火车至Kivistö站 + 换乘445/576路公交深入Vestrantie或Riipiläntie",
        fi: "I/P-juna Kivistön asemalle + bussi 445 tai 576 Vestrantielle / Riipiläntielle"
      },
      highlights: {
        en: "Traditional Finnish farmsteads, tractor tracks, ditch edges, and secondary birch-aspen stands. Ignored by city crowds because it is not an official national park; heavily laden with Golden Chanterelles and King Boletes.",
        zh: "传统芬兰农庄、拖拉机小道、田边排水渠与次生白桦-欧洲山杨林。因非国家公园而少有游人，当地老饕常满载真鸡油菌与牛肝菌。",
        fi: "Peltojen ja sekametsien reunavyöhykkeitä, joissa poimintapaine on minimaalinen. Erinomaisia kantarelli- ja herkkutattipaikkoja."
      },
      species: ["cantharellus_cibarius", "boletus_edulis", "leccinum_versipelle", "craterellus_tubaeformis"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Vestrantie+Vantaa"
    }
  ];

  container.innerHTML = `
    <!-- Section Header Banner -->
    <div class="integrated-monograph-header" style="margin-bottom: 2rem;">
      <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: var(--accent-soft); color: var(--accent); font-size: 0.78rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 9999px; margin-bottom: 0.65rem; border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);">
        <span>${t.tabSpots || "Transit Spots & Trails"}</span> • <span>Zone A–D • 6 Core Trailheads • 5 Hidden Gems</span>
      </div>
      <h1 class="integrated-monograph-title" style="margin-bottom: 0.4rem;">${titleMap[lang] || titleMap.en}</h1>
      ${lang2 ? `<div class="integrated-monograph-subtitle">${titleMap[lang2] || ""}</div>` : ""}
      <p class="integrated-monograph-desc">${descMap[lang] || descMap.en}</p>
    </div>

    <!-- 1. HSL Transit Framework (4 Quick Cards) -->
    <div class="transit-quick-strip" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-bottom: 2.25rem;">
      ${transitCards.map(tc => `
        <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 1.15rem; box-shadow: var(--shadow); display: flex; flex-direction: column;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
            <strong style="font-size: 0.95rem; color: var(--fg);">${tc.title[lang] || tc.title.en}</strong>
          </div>
          <p style="font-size: 0.84rem; color: var(--muted); line-height: 1.5; margin: 0;">${tc.desc[lang] || tc.desc.en}</p>
        </div>
      `).join("")}
    </div>

    <!-- 2. Prime Trailhead Cards & Live Directions (Front and Center!) -->
    <div class="section-divider-header" style="margin-bottom: 1.25rem;">
      <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--fg); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
        <span>${lang === "zh" ? "6大主力公共交通直达采摘点与Google Maps一键导航" : (lang === "fi" ? "6 parasta HSL-sienireittiä ja suora navigointi" : "6 Prime Foraging Trailheads & Live Navigation")}</span>
      </h2>
      <p style="font-size: 0.9rem; color: var(--muted);">
        ${lang === "zh" ? "含公交直达班次、乘车耗时、推荐徒步路线、起点经纬度定位与实时Google Maps导航" : (lang === "fi" ? "Bussilinjat, matka-ajat, suositellut rengasreitit ja suorat Google Maps -opasteet lähtöpisteille" : "Live transit lines, travel durations, trailhead coordinates, and direct Google Maps directions")}
      </p>
    </div>

    <div class="spots-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 3rem;">
      ${I18N.spots.map(s => `
        <div class="spot-card">
          <div class="spot-header">
            <div>
              <h3 class="spot-title">${s.name[lang]}</h3>
              ${lang2 ? `<div style="font-size: 0.88rem; color:var(--muted); margin-top: 0.15rem; font-weight:400;">${s.name[lang2]}</div>` : ""}
              <span style="font-size: 0.8rem; color: var(--muted);">${s.municipality}</span>
            </div>
            <span class="spot-zone">${s.zone}</span>
          </div>

          <div class="spot-transit">
            <p><strong>HSL:</strong> ${s.transit[lang]}</p>
            ${lang2 ? `<p style="color: var(--muted); font-size: 0.82rem; margin-top: 0.2rem;">${s.transit[lang2]}</p>` : ""}
            <p style="margin-top: 0.35rem;"><strong>Duration:</strong> ~${s.time}</p>
          </div>

          ${s.popularTrail ? `
          <div class="spot-trailhead-box">
            <div class="spot-trailhead-row">
              <span class="prime-item-label">${t.popularTrailLabel || 'Popular Trail'}:</span>
              <span class="prime-item-value">${s.popularTrail[lang]}</span>
              ${lang2 ? `<div class="prime-item-secondary">${s.popularTrail[lang2]}</div>` : ""}
            </div>
            <div class="spot-trailhead-row" style="margin-top: 0.35rem;">
              <span class="prime-item-label">${t.startingPointLabel || 'Starting Point'}:</span>
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

          <div style="font-size: 0.85rem; color: var(--fg); margin-bottom: 0.5rem;">
            <strong>Terrain:</strong> ${s.terrain[lang]}
            ${lang2 ? `<div style="color: var(--muted); font-size: 0.82rem; margin-top: 0.15rem;">${s.terrain[lang2]}</div>` : ""}
          </div>

          <div style="font-size: 0.85rem; color: var(--fg); background: var(--accent-soft); border: 1px solid var(--card-border); padding: 0.6rem; border-radius: 6px; margin-bottom: 0.75rem;">
            <div><em>${s.tip[lang]}</em></div>
            ${lang2 ? `<div style="color: var(--muted); font-size: 0.82rem; margin-top: 0.25rem;"><em>${s.tip[lang2]}</em></div>` : ""}
          </div>

          <div style="font-size: 0.8rem; font-weight: 700; color: var(--muted); margin-bottom: 0.25rem;">Target Species:</div>
          <div class="spot-species-list">
            ${s.species.map(sp => `<span class="species-tag">${sp}</span>`).join("")}
          </div>
        </div>
      `).join("")}
    </div>

    <!-- 3. The 5 Low-Pressure Hidden Wilderness Gems -->
    <div class="section-divider-header" style="margin-bottom: 1.25rem;">
      <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--fg); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
        <span>${lang === "zh" ? "芬兰森林5大小众少人采摘秘境深度评测" : (lang === "fi" ? "5 hiljaista ja salaista erämaakohdetta" : "5 Low-Pressure 'Hidden Gem' Wilderness Forests")}</span>
      </h2>
      <p style="font-size: 0.9rem; color: var(--muted);">
        ${lang === "zh" ? "避开周末拥挤人流！深入未经密集踩踏的原生态清幽林区，坐享丰厚无扰的菌菇收获" : (lang === "fi" ? "Vältä suosituimpien reittien ruuhkat ja nauti koskemattoman metsän antimista rauhassa" : "Escape the weekend crowds: pristine moss carpets, undisturbed mycelial flushes, and tranquil backcountry lakes")}
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2.5rem;">
      ${hiddenGems.map(g => `
        <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 1.35rem; box-shadow: var(--shadow); display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem;">
            <div>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--fg); margin: 0;">${g.name[lang] || g.name.en}</h3>
              ${lang2 ? `<div style="font-size: 0.88rem; color: var(--muted); margin-top: 0.15rem;">${g.name[lang2] || ""}</div>` : ""}
            </div>
            <span style="font-size: 0.76rem; font-weight: 700; background: var(--accent-soft); color: var(--accent); padding: 0.2rem 0.55rem; border-radius: 9999px; border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent); white-space: nowrap;">
              ${g.loc}
            </span>
          </div>

          <div style="font-size: 0.84rem; color: var(--fg); background: var(--card-hover); padding: 0.6rem 0.75rem; border-radius: 6px; margin: 0.6rem 0 0.85rem; border: 1px solid var(--card-border);">
            <strong>Transit:</strong> ${g.route[lang] || g.route.en}
          </div>

          <p style="font-size: 0.86rem; color: var(--muted); line-height: 1.55; margin-bottom: 1rem; flex: 1;">
            ${g.highlights[lang] || g.highlights.en}
          </p>

          <div style="border-top: 1px solid var(--rule); padding-top: 0.75rem;">
            <div style="font-size: 0.78rem; font-weight: 700; color: var(--muted); margin-bottom: 0.35rem; text-transform: uppercase; letter-spacing: 0.04em;">Key Species:</div>
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
              ${g.species.map(spId => {
                const sp = I18N.species.find(s => s.id === spId);
                if (!sp) return "";
                const spName = sp.names[lang]?.primary || sp.latinName;
                return `<a href="#/mushroom/${sp.id}" class="inline-species-chip" onclick="navigateToMushroom('${sp.id}'); return false;">${spName}</a>`;
              }).join("")}
            </div>
            ${g.mapUrl ? `
            <div style="margin-top: 0.85rem;">
              <a href="${g.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-location-map" title="${g.name[lang] || g.name.en}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                <span>${t.openMapBtn || 'Directions'}</span>
              </a>
            </div>` : ""}
          </div>
        </div>
      `).join("")}
    </div>

    <!-- 4. Transit Etiquette on HSL -->
    <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-left: 4px solid var(--accent); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 2rem;">
      <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--accent); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
        <span>${lang === "zh" ? "公共交通采摘乘车礼仪与野外装备指南" : (lang === "fi" ? "Sienestäjän joukkoliikenne-etiketti ja varusteet" : "Public Transit Foraging Etiquette & Field Gear")}</span>
      </h3>
      <ul style="padding-left: 1.25rem; font-size: 0.88rem; color: var(--fg); line-height: 1.6;">
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
    en: "Legal Rights, Nature Protection & Forest Safety in Finland",
    zh: "芬兰自然公共权、自然保护区法规与森林安全守则",
    fi: "Jokamiehenoikeudet, luonnonsuojelualueet ja metsäturvallisuus"
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
      <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: var(--accent-soft); color: var(--accent); font-size: 0.78rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 9999px; margin-bottom: 0.65rem; border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);">
        <span>${t.tabSafety || "Safety & Guidelines"}</span> • <span>Everyman's Right • Nature Reserves • Ticks & 112</span>
      </div>
      <h1 class="integrated-monograph-title" style="margin-bottom: 0.4rem;">${titleMap[lang] || titleMap.en}</h1>
      ${lang2 ? `<div class="integrated-monograph-subtitle">${titleMap[lang2] || ""}</div>` : ""}
      <p class="integrated-monograph-desc">${descMap[lang] || descMap.en}</p>
    </div>

    <!-- 1. Everyman's Right (Allowed vs Prohibited Side-by-Side) -->
    <div class="section-divider-header" style="margin-bottom: 1.25rem;">
      <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--fg); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
        <span>${lang === "zh" ? "芬兰自然公共权法定权利与绝对禁区红线" : (lang === "fi" ? "Jokamiehenoikeudet: Sallittu ja kielletty" : "Everyman's Right: Statutory Rights vs. Strict Prohibitions")}</span>
      </h2>
      <p style="font-size: 0.9rem; color: var(--muted);">
        ${lang === "zh" ? "宪法习惯法保障的大自然馈赠，采摘者必须严格自律恪守私人领地边界与环境保护责任" : (lang === "fi" ? "Suomen ainutlaatuinen oikeus nauttia luonnosta vastuullisesti ja luontoa kunnioittaen" : "Enjoying the generous Nordic nature responsibly while respecting private property and delicate biomes")}
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2.5rem;">
      <!-- Allowed Card -->
      <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-top: 4px solid var(--accent); border-radius: var(--radius); padding: 1.35rem; box-shadow: var(--shadow);">
        <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--accent); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
          <span>${lang === "zh" ? "法律允许（人人享有的法定权利）" : (lang === "fi" ? "Mitä saat tehdä (Sallitut)" : "What You CAN Do (Your Rights)")}</span>
        </h3>
        <ul style="padding-left: 1.2rem; font-size: 0.86rem; color: var(--fg); line-height: 1.55;">
          ${allowedRules.map(r => `
            <li style="margin-bottom: 0.65rem;">
              ${r[lang] || r.en}
            </li>
          `).join("")}
        </ul>
      </div>

      <!-- Prohibited Card -->
      <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-top: 4px solid var(--danger); border-radius: var(--radius); padding: 1.35rem; box-shadow: var(--shadow);">
        <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--danger); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
          <span>${lang === "zh" ? "法律严禁（违法禁止行为）" : (lang === "fi" ? "Mitä et saa tehdä (Kielletyt)" : "What You CANNOT Do (Strictly Forbidden)")}</span>
        </h3>
        <ul style="padding-left: 1.2rem; font-size: 0.86rem; color: var(--fg); line-height: 1.55;">
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
      <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--fg); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
        <span>${lang === "zh" ? "北欧森林害虫防范实操：蜱虫与鹿蝇生存手册" : (lang === "fi" ? "Metsäturvallisuus: Punkit ja hirvikärpäset" : "Nordic Forest Health: Ticks & Deer Keds Defense")}</span>
      </h2>
      <p style="font-size: 0.9rem; color: var(--muted);">
        ${lang === "zh" ? "南部海岸林区从4月至深秋活跃。穿戴长靴、浅色长裤与细齿梳子，回家必查皮肤" : (lang === "fi" ? "Suojaudu punkeilta ja hirvikärpäsiltä oikealla pukeutumisella ja päivittäisellä tarkastuksella" : "Active across southern Uusimaa from April to late autumn. Protective socks, smooth fabrics, and nightly skin checks")}
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem; margin-bottom: 2.5rem;">
      <!-- Ticks Card -->
      <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 1.35rem; box-shadow: var(--shadow);">
        <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem;">
          
          <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--fg); margin: 0;">${lang === "zh" ? "蜱虫 (Punkit / Puutiaiset)" : (lang === "fi" ? "Punkit (Puutiaiset)" : "Ticks (Punkit)")}</h3>
        </div>
        <p style="font-size: 0.85rem; color: var(--muted); line-height: 1.5; margin-bottom: 0.75rem;">
          ${lang === "zh" ? "携带莱姆病螺旋体（Borrelia）与森林脑炎病毒（TBE）。潜伏于近地低矮灌木和草叶尖端。" : (lang === "fi" ? "Voivat levittää borrelioosia ja puutiaisaivokuumetta (TBE). Viihtyvät aluskasvillisuudessa." : "Carry Borrelia (Lyme) and Tick-Borne Encephalitis (TBE). Wait on low shrubs and grass.")}
        </p>
        <ul style="padding-left: 1.15rem; font-size: 0.84rem; color: var(--fg); line-height: 1.5;">
          <li><strong>${lang === "zh" ? "防护穿戴" : (lang === "fi" ? "Pukeutuminen" : "Clothing")}:</strong> ${lang === "zh" ? "浅色长裤塞入长袜，穿高帮橡胶靴（Kumisaappaat），喷涂DEET或派卡瑞丁驱虫喷雾。" : (lang === "fi" ? "Vaaleat vaatteet, lahkeet sukkien sisään, kumisaappaat ja punkkikarkote." : "Light-colored trousers tucked into high socks; wear rubber boots and apply DEET repellents.")}</li>
          <li><strong>${lang === "zh" ? "每日体检" : (lang === "fi" ? "Punkkitarkastus" : "Nightly Check")}:</strong> ${lang === "zh" ? "回家后必须立刻彻底检查腋下、膝后窝、腹股沟、发际线与耳后。" : (lang === "fi" ? "Tarkista iho huolellisesti joka ilta: polvitaipeet, kainalot, hiusraja." : "Thoroughly inspect skin behind knees, armpits, groin, and along the hairline nightly.")}</li>
          <li><strong>${lang === "zh" ? "科学拔虫" : (lang === "fi" ? "Poisto" : "Removal")}:</strong> ${lang === "zh" ? "使用细尖镊子贴紧皮肤垂直缓慢拔出，切勿旋转挤压虫腹，伤口酒精消毒。" : (lang === "fi" ? "Vedä punkki suoraan ulos pinseteillä kiertämättä ja desinfioi puremakohta." : "Grasp with fine-tipped tweezers close to the skin and pull straight out without twisting or squeezing.")}</li>
        </ul>
      </div>

      <!-- Deer Keds Card -->
      <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 1.35rem; box-shadow: var(--shadow);">
        <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem;">
          <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--fg); margin: 0;">${lang === "zh" ? "鹿蝇 (Hirvikärpäset)" : (lang === "fi" ? "Hirvikärpäset" : "Deer Keds (Hirvikärpäset)")}</h3>
        </div>
        <p style="font-size: 0.85rem; color: var(--muted); line-height: 1.5; margin-bottom: 0.75rem;">
          ${lang === "zh" ? "8月下旬至10月大爆发。飞向体温宿主后立即脱翅，强行钻入头发、胡须与领口爬行叮咬，易引起剧烈红肿痒疹。" : (lang === "fi" ? "Parveilevat elo-lokakuussa. Pudottavat siipensä laskeuduttuaan ja ryömivät hiuksiin." : "Swarm late August to October. Drop wings upon landing and crawl vigorously into hair, beards, and collars.")}
        </p>
        <ul style="padding-left: 1.15rem; font-size: 0.84rem; color: var(--fg); line-height: 1.5;">
          <li><strong>${lang === "zh" ? "光滑面料" : (lang === "fi" ? "Liukaspintaiset vaatteet" : "Smooth Fabrics")}:</strong> ${lang === "zh" ? "穿紧实光滑的尼龙冲锋衣（严禁抓绒摇粒绒衣物，抓绒是鹿蝇吸附磁铁）。" : (lang === "fi" ? "Käytä liukaspintaista kuoriasua. Vältä fleeceä, johon ne tarttuvat hanakasti." : "Wear smooth synthetic shell jackets; fleece is a magnet for deer keds.")}</li>
          <li><strong>${lang === "zh" ? "头部防护" : (lang === "fi" ? "Päähine" : "Headwear")}:</strong> ${lang === "zh" ? "佩戴紧口帽子或魔术头巾包裹住全部头发，领口拉链完全拉拢。" : (lang === "fi" ? "Käytä tiukkaa lakkia ja suojaa niska ja kaula huivilla." : "Wear a snug cap or bandana covering all hair; zip collars all the way up.")}</li>
          <li><strong>${lang === "zh" ? "细齿梳排查" : (lang === "fi" ? "Tiheä kampa" : "Fine Comb")}:</strong> ${lang === "zh" ? "采摘结束上车前，务必用细齿扁梳彻底梳理头发，拍打外衣后再坐车。" : (lang === "fi" ? "Kampaa hiukset tiheällä kammalla ennen autoon tai kotiin menoa." : "Carry a fine-toothed comb to extract them from hair before boarding transit or entering homes.")}</li>
        </ul>
      </div>
    </div>

    <!-- 4. Sustainable & Ethical Harvesting -->
    <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow);">
      <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--fg); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
        <span>${lang === "zh" ? "可持续采摘与苔藓保护伦理" : (lang === "fi" ? "Kestävän ja vastuullisen sienestyksen periaatteet" : "Sustainable & Ethical Harvesting Ethics")}</span>
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin-top: 0.85rem;">
        <div style="background: var(--card-hover); padding: 0.85rem 1rem; border-radius: 6px; border: 1px solid var(--card-border);">
          <strong style="color: var(--fg); font-size: 0.9rem;">${lang === "zh" ? "切根 vs 轻旋轻拔" : (lang === "fi" ? "Leikkaa tai kierrä" : "Cut vs. Gentle Twist")}:</strong>
          <p style="color: var(--muted); font-size: 0.84rem; line-height: 1.5; margin: 0.25rem 0 0;">${lang === "zh" ? "牛肝菌与鸡油菌用小刀贴苔藓切下，或轻轻旋转拔起后现场削去泥根，保护菌丝根基。" : (lang === "fi" ? "Leikkaa veitsellä tai kierrä varovasti irti ja puhdista tyvi maastossa." : "Slice cleanly at moss level or gently twist and pull; neither method harms future mycelial flushes.")}</p>
        </div>
        <div style="background: var(--card-hover); padding: 0.85rem 1rem; border-radius: 6px; border: 1px solid var(--card-border);">
          <strong style="color: var(--fg); font-size: 0.9rem;">${lang === "zh" ? "绝不掀起苔藓毯" : (lang === "fi" ? "Älä revi sammalta" : "Never Tear Up Moss")}:</strong>
          <p style="color: var(--muted); font-size: 0.84rem; line-height: 1.5; margin: 0.25rem 0 0;">${lang === "zh" ? "采摘漏斗鸡油菌时严禁成片掀翻苔藓！若有拨动，务必将苔藓压回原位保温保水。" : (lang === "fi" ? "Paina siirretty sammal aina takaisin paikalleen suojaamaan herkkää rihmastoa." : "Never rip up moss blankets. Always press disturbed moss back down to protect moisture-sensitive mycelium.")}</p>
        </div>
        <div style="background: var(--card-hover); padding: 0.85rem 1rem; border-radius: 6px; border: 1px solid var(--card-border);">
          <strong style="color: var(--fg); font-size: 0.9rem;">${lang === "zh" ? "留老菇传播孢子" : (lang === "fi" ? "Jätä vanhat sienet" : "Leave Overripe Specimens")}:</strong>
          <p style="color: var(--muted); font-size: 0.84rem; line-height: 1.5; margin: 0.25rem 0 0;">${lang === "zh" ? "软烂、发黑或严重虫蛀的成熟菌体请留在森林，供昆虫小兽食用并释放数十亿孢子繁殖。" : (lang === "fi" ? "Vanhat ja toukkaiset sienet kuuluvat metsään levittämään itiöitä tulevia vuosia varten." : "Spongy, waterlogged, or maggot-eaten mushrooms must stay in the woods to disperse spores for future seasons.")}</p>
        </div>
        <div style="background: var(--card-hover); padding: 0.85rem 1rem; border-radius: 6px; border: 1px solid var(--card-border);">
          <strong style="color: var(--fg); font-size: 0.9rem;">${lang === "zh" ? "严禁密闭塑料袋" : (lang === "fi" ? "Ei muovipusseja" : "Never Use Plastic Bags")}:</strong>
          <p style="color: var(--muted); font-size: 0.84rem; line-height: 1.5; margin: 0.25rem 0 0;">${lang === "zh" ? "塑料袋内高温缺氧会使蘑菇蛋白质急剧发酵自溶，几小时内即可产生有毒代谢物！" : (lang === "fi" ? "Muovipussissa sienet hikoilevat ja pilaantuvat nopeasti jopa myrkyllisiksi." : "In plastic, mushrooms sweat, anaerobic bacteria multiply rapidly, and proteins break down into toxic amines within hours.")}</p>
        </div>
      </div>
    </div>

    <!-- 5. Featured Case Study: Everyman's Right & Finnish Matsutake (Tuoksuvalmuska / 松茸) -->
    <div style="background: var(--card-bg); border: 1px solid var(--accent); border-left: 5px solid var(--accent); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow);">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          
          <div>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--fg); margin: 0;">
              ${lang === "zh" ? "特别专题：芬兰松茸 (Tuoksuvalmuska) 与自然公共权的商业传奇" : (lang === "fi" ? "Erityistapaus: Tuoksuvalmuska ja jokamiehenoikeus" : "Special Feature: Finnish Pine Matsutake & Everyman's Right")}
            </h3>
            <span style="font-size: 0.8rem; color: var(--accent); font-weight: 600;">Tricholoma matsutake • 2007 Kauppasieni • §89 Tuloverolaki</span>
          </div>
        </div>
        <button type="button" class="btn btn-secondary" onclick="navigateToMushroom('tricholoma_matsutake')" style="border-color: var(--accent); color: var(--accent); font-weight: 600; font-size: 0.82rem; padding: 0.4rem 0.85rem; border-radius: 9999px; cursor: pointer;">
          ${lang === "zh" ? "打开松茸全景专著 →" : (lang === "fi" ? "Avaa tuoksuvalmuskan monografia →" : "Open Pine Matsutake Monograph →")}
        </button>
      </div>
      <p style="font-size: 0.88rem; color: var(--fg); line-height: 1.6; margin-bottom: 0.75rem;">
        ${lang === "zh" 
          ? "芬兰不仅拥有纯正的日本同种野生松茸（学名 <em>Tricholoma matsutake</em>，直译“香口蘑”），更是北欧最重要的松茸产地之一。芬兰于 2007 年将其正式列入国家推荐商业交易食用菌名录（Kauppasieni）。得益于芬兰自然公共权与所得税法第 89 条，采摘者无论在公有林还是私人松林采摘数百公斤松茸，自食与出售所得均依法免税！" 
          : (lang === "fi" 
            ? "Suomi on yksi Pohjois-Euroopan merkittävimmistä tuoksuvalmuskan (<em>Tricholoma matsutake</em>) esiintymisalueista. DNA-tutkimukset vahvistivat sen olevan sama huippuarvostettu laji kuin Japanin matsutake. Vuonna 2007 se lisättiin viralliseksi kauppasieneksi. Jokamiehenoikeuden ja tuloverolain 89 § nojalla poimiminen ja myynti on täysin verovapaata!" 
            : "Finland is one of Northern Europe's premier habitats for wild Matsutake (<em>Tricholoma matsutake</em> / Tuoksuvalmuska). DNA research confirmed it is genetically identical to prestigious East Asian Matsutake. Added to Finland's official commercial edible mushrooms (Kauppasieni) in 2007, foraging and selling your harvest is completely tax-free under Everyman's Right.")}
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; font-size: 0.8rem; color: var(--muted);">
        <span style="background: var(--card-hover); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid var(--rule);">${lang === "zh" ? "生境：干燥沙质赤松疏林 (Kuiva kangas)" : (lang === "fi" ? "Kasvupaikka: Karut mäntykankaat" : "Habitat: Dry sandy Scots pine heaths")}</span>
        <span style="background: var(--card-hover); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid var(--rule);">${lang === "zh" ? "盛产期：7月底至10月初 (盛产8-9月)" : (lang === "fi" ? "Satoaika: Heinä–lokakuu" : "Season: Late July to October")}</span>
        <span style="background: var(--card-hover); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid var(--rule);">${lang === "zh" ? "特征：浓郁肉桂复合甜香与棉毛菌环" : (lang === "fi" ? "Tunnusmerkki: Huumaava kanelin tuoksu" : "Hallmark: Sweet spicy cinnamon aroma")}</span>
      </div>
    </div>

    <!-- 6. Recommended Field Video Education & Channels -->
    <div style="background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow);">
      <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--fg); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
        <span>${lang === "zh" ? "权威野采学习频道与视频课程推荐" : (lang === "fi" ? "Suositellut opetusvideot ja YouTube-kanavat" : "Recommended Educational Channels & Field Video Guides")}</span>
      </h3>
      <p style="font-size: 0.88rem; color: var(--muted); line-height: 1.5; margin-bottom: 1rem;">
        ${lang === "zh" 
          ? "严选高质量真菌学教育与北欧权威家政组织视频资源，涵盖新手装备、菌根树种识别、焯水去毒与烹饪技法。" 
          : (lang === "fi" 
            ? "Valikoidut korkeatasoiset sienikanavat ja oppaat: välineet, puiden symbioosi, ryöppäys ja ruoanvalmistus." 
            : "Carefully curated mycology educator channels and Finnish household guides covering field gear, tree mycorrhiza, parboiling, and safe cooking.")}
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
        <!-- Mushroom Wonderland Card -->
        <div style="background: var(--card-hover); border: 1px solid var(--card-border); border-radius: 8px; padding: 1rem; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.4rem;">
              <span style="font-size: 0.76rem; font-weight: 700; color: var(--accent); background: var(--accent-soft); padding: 0.15rem 0.5rem; border-radius: 9999px;">
                ${lang === "zh" ? "新手入门野采首选" : (lang === "fi" ? "Paras aloittelijoille" : "Premier Beginner Guide")}
              </span>
              <span style="font-size: 0.78rem; color: var(--muted);">24:13</span>
            </div>
            <h4 style="font-size: 0.96rem; font-weight: 800; color: var(--fg); margin: 0 0 0.35rem 0;">
              Mushroom Wonderland (Aaron Hilliard)
            </h4>
            <p style="font-size: 0.82rem; color: var(--muted); line-height: 1.5; margin: 0 0 0.75rem 0;">
              ${lang === "zh" 
                ? "“野生蘑菇野采初学完全入门指南”主讲人 Aaron Hilliard（美国奥林匹克学院真菌学教师）。详讲透气编织竹篮释放孢子原理、菌刀现场毛刷清理、云杉/赤松菌根树木共生、100%确定防毒原则与干锅慢煸出水法。" 
                : (lang === "fi" 
                  ? "Sienikouluttaja Aaron Hilliardin opas: poimintakori itiöiden leviämiseen, veitsi ja harja, puiden symbioosi, 100 % tunnistusvarmuus ja kuivapaistotekniikka." 
                  : "Educator Aaron Hilliard’s 'Beginners Guide to Wild Mushroom Foraging 2024'. Covers rigid baskets for spore dispersal, knife cleaning, spruce/pine mycorrhizal symbiosis, and dry sautéing.")}
            </p>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <a href="https://www.youtube.com/watch?v=xoptBgrLlg0" target="_blank" rel="noopener noreferrer" class="btn-video-link btn-video-link-sm" style="flex: 1; justify-content: center;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="color: #dc2626;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              <span>${lang === "zh" ? "观看新手大课" : (lang === "fi" ? "Katso video" : "Watch Video")} (24m)</span>
            </a>
            <a href="https://www.youtube.com/@mushroomwonderland1" target="_blank" rel="noopener noreferrer" class="tier-channel-btn" style="flex: 1; justify-content: center; text-align: center;">
              <span>${lang === "zh" ? "访问频道 ↗" : (lang === "fi" ? "Kanava ↗" : "Visit Channel ↗")}</span>
            </a>
          </div>
        </div>

        <!-- Martat Card -->
        <div style="background: var(--card-hover); border: 1px solid var(--card-border); border-radius: 8px; padding: 1rem; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.4rem;">
              <span style="font-size: 0.76rem; font-weight: 700; color: #0284c7; background: rgba(2, 132, 199, 0.12); padding: 0.15rem 0.5rem; border-radius: 9999px;">
                ${lang === "zh" ? "芬兰本土家政与烹饪" : (lang === "fi" ? "Perinteinen Martat" : "Finnish Kitchen Heritage")}
              </span>
              <span style="font-size: 0.78rem; color: var(--muted);">Martat</span>
            </div>
            <h4 style="font-size: 0.96rem; font-weight: 800; color: var(--fg); margin: 0 0 0.35rem 0;">
              Martat (Marttaliitto)
            </h4>
            <p style="font-size: 0.82rem; color: var(--muted); line-height: 1.5; margin: 0 0 0.75rem 0;">
              ${lang === "zh" 
                ? "芬兰百年家政联合会官方指南。经典示范苦味乳菇科学沸水焯水脱毒（Ryöppäys）、分层盐渍越冬（Suolasienet）与传统奶油鸡油菌浓汤制作。" 
                : (lang === "fi" 
                  ? "Marttojen viralliset sienioppaat: kirpeiden rouskujen ryöppäys, suolasienten valmistus ja perinteiset sieniruoat." 
                  : "Finland's premier household organization demonstrating correct parboiling of acrid milkcaps (ryöppäys), traditional salt-curing, and classic chanterelle sauces.")}
            </p>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button type="button" class="btn-video-link btn-video-link-sm" onclick="switchNavTab('cooking'); filterCookingVideos('finnish');" style="flex: 1; justify-content: center; cursor: pointer;">
              <span>${lang === "zh" ? "查看全部29部视频教程" : (lang === "fi" ? "Avaa 29 opetusvideota" : "Browse All 29 Videos")} →</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 7. Essential Field Companion Apps: iNaturalist & 112 Suomi -->
    <div id="inaturalist-app-guide" style="background: var(--card-bg); border: 1px solid var(--accent); border-left: 5px solid var(--accent); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow);">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem;">
        <div>
          <div style="display: inline-flex; align-items: center; gap: 0.35rem; background: var(--accent-soft); color: var(--accent); font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 9999px; margin-bottom: 0.4rem;">
            <span>Community Science & Field AI</span> • <span>Recommended by Aaron Hilliard</span>
          </div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--fg); margin: 0;">
            ${t.inaturalistTitle || "iNaturalist: Community Science & Mushroom Identification"}
          </h3>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <a href="https://apps.apple.com/app/inaturalist/id421397028" target="_blank" rel="noopener noreferrer" class="tier-channel-btn" style="color: var(--fg); font-weight: 700;" title="Download on iOS App Store">
            ${t.appStoreIos || "iOS App Store"} ↗
          </a>
          <a href="https://play.google.com/store/apps/details?id=org.inaturalist.android" target="_blank" rel="noopener noreferrer" class="tier-channel-btn" style="color: var(--fg); font-weight: 700;" title="Download on Google Play">
            ${t.playStoreAndroid || "Google Play"} ↗
          </a>
          <a href="https://www.inaturalist.org" target="_blank" rel="noopener noreferrer" class="tier-channel-btn" title="Open iNaturalist Web Portal">
            ${t.webPortal || "inaturalist.org"} ↗
          </a>
        </div>
      </div>

      <p style="font-size: 0.9rem; color: var(--fg); line-height: 1.6; margin-bottom: 1.25rem;">
        ${t.inaturalistDesc || ""}
      </p>

      <!-- Step-by-Step Installation & Setup Guide -->
      <h4 style="font-size: 1rem; font-weight: 800; color: var(--fg); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.35rem;">
        <span>${t.inaturalistInstallGuide || "Installation & Field Setup Guide"}</span>
      </h4>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.85rem; margin-bottom: 1.25rem;">
        <div style="background: var(--card-hover); padding: 0.85rem 1rem; border-radius: 6px; border: 1px solid var(--card-border);">
          <div style="font-size: 0.82rem; font-weight: 800; color: var(--accent); margin-bottom: 0.25rem;">STEP 1 • INSTALL</div>
          <p style="font-size: 0.82rem; color: var(--fg); line-height: 1.45; margin: 0;">${t.step1Install || ""}</p>
        </div>
        <div style="background: var(--card-hover); padding: 0.85rem 1rem; border-radius: 6px; border: 1px solid var(--card-border);">
          <div style="font-size: 0.82rem; font-weight: 800; color: var(--accent); margin-bottom: 0.25rem;">STEP 2 • ACCOUNT</div>
          <p style="font-size: 0.82rem; color: var(--fg); line-height: 1.45; margin: 0;">${t.step2Account || ""}</p>
        </div>
        <div style="background: var(--card-hover); padding: 0.85rem 1rem; border-radius: 6px; border: 1px solid var(--card-border);">
          <div style="font-size: 0.82rem; font-weight: 800; color: var(--accent); margin-bottom: 0.25rem;">STEP 3 • PERMISSIONS</div>
          <p style="font-size: 0.82rem; color: var(--fg); line-height: 1.45; margin: 0;">${t.step3Permissions || ""}</p>
        </div>
        <div style="background: var(--card-hover); padding: 0.85rem 1rem; border-radius: 6px; border: 1px solid var(--card-border);">
          <div style="font-size: 0.82rem; font-weight: 800; color: var(--accent); margin-bottom: 0.25rem;">STEP 4 • 4-PHOTO PROTOCOL</div>
          <p style="font-size: 0.82rem; color: var(--fg); line-height: 1.45; margin: 0;">${t.step4PhotoProtocol || ""}</p>
        </div>
      </div>

      <!-- Warning & Safety Banner -->
      <div style="background: color-mix(in srgb, var(--danger) 8%, var(--card-bg)); border: 1px solid var(--danger-border); border-radius: 6px; padding: 0.85rem 1rem; font-size: 0.85rem; color: var(--fg); line-height: 1.55; display: flex; align-items: flex-start; gap: 0.5rem;">
        
        <span>${t.inaturalistWarning || ""}</span>
      </div>

      <!-- Seek Companion Note -->
      <div style="margin-top: 0.85rem; font-size: 0.8rem; color: var(--muted); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <span><strong>${t.seekAppName || "Seek by iNaturalist"}</strong>: ${t.seekAppDesc || ""}</span>
        <a href="https://www.inaturalist.org/pages/seek_app" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">
          ${lang === 'zh' ? '了解 Seek 极速版 →' : (lang === 'fi' ? 'Lue lisää Seek-sovelluksesta →' : 'Learn about Seek →')}
        </a>
      </div>
    </div>
  `;
}

// (Field handbook chapters are now natively integrated into the 6 canonical sections above)

/* ==========================================================================
   Forest Offline Field Cache Manager & PWA Engine
   ========================================================================== */

const ForestCacheManager = {
  CACHE_IMAGE_NAME: 'helsinki-mushroom-images-v2',
  CACHE_STATIC_NAME: 'helsinki-mushroom-core-v2',
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
        if (label) label.textContent = t.offlineBadgeOffline || 'Off-Grid / Offline';
      } else {
        if (banner) banner.style.display = 'none';
        if (pill) pill.classList.remove('offline');
        if (label && !this.isDownloading) label.textContent = t.offlineBadgeReady || 'Offline Ready';
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
            btnDownloadText.textContent = t.offlineBtnCacheAll || 'Pre-cache All 215 Photos';
          }
        }
        if (btnClear) btnClear.style.display = 'inline-block';
      } else {
        if (notice) notice.style.display = 'none';
        if (btnDownload) {
          btnDownload.style.display = 'inline-block';
          if (btnDownloadText) {
            btnDownloadText.textContent = t.offlineBtnCacheAll || 'Pre-cache All 215 Photos';
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






