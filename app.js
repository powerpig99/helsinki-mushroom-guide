// Trilingual Dynamic Web Application Logic with Interactive Lightbox Gallery
// Helsinki Wild Mushroom Guide

let currentTab = "catalog";
let currentLevelFilter = "all";
let currentMonthFilter = null;
let searchQuery = "";

// Lightbox Gallery State
let currentGallerySpecies = null;
let currentGalleryIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  // Load saved language preference or default to 'en'
  const savedLang = localStorage.getItem("helsinki_mushroom_lang");
  if (savedLang && ["en", "zh", "fi"].includes(savedLang)) {
    I18N.currentLang = savedLang;
  }

  setupLanguageSwitcher();
  setupTabs();
  setupFilters();
  setupGalleryListeners();
  applyLanguage(I18N.currentLang);
});

// Setup Language Switcher
function setupLanguageSwitcher() {
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const newLang = btn.dataset.lang;
      if (newLang !== I18N.currentLang) {
        I18N.currentLang = newLang;
        localStorage.setItem("helsinki_mushroom_lang", newLang);
        applyLanguage(newLang);
      }
    });
  });
}

// Apply selected language across the entire application
function applyLanguage(lang) {
  const t = I18N.ui[lang];

  // Update active state of language buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Header & Static Text
  document.getElementById("site-badge").textContent = t.siteBadge;
  document.getElementById("site-title").textContent = t.siteTitle;
  document.getElementById("site-subtitle").textContent = t.siteSubtitle;
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

  // If gallery modal is open, re-render its text
  if (currentGallerySpecies) {
    updateGalleryView();
  }
}

// Setup Navigation Tabs
function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTab = btn.dataset.tab;

      document.getElementById("tab-catalog").style.display = currentTab === "catalog" ? "block" : "none";
      document.getElementById("tab-lookalikes").style.display = currentTab === "lookalikes" ? "block" : "none";
      document.getElementById("tab-cooking").style.display = currentTab === "cooking" ? "block" : "none";
      document.getElementById("tab-spots").style.display = currentTab === "spots" ? "block" : "none";
      document.getElementById("tab-safety").style.display = currentTab === "safety" ? "block" : "none";
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
  const galleryHintText = lang === "zh" ? "📸 点击查看图集" : (lang === "fi" ? "📸 Avaa kuvagalleria" : "📸 View Gallery");

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
    const morph = m.morphology[lang];
    const photoCount = (m.gallery && m.gallery.length) ? m.gallery.length : 1;

    return `
      <div class="mushroom-card">
        <div class="card-image-wrap" onclick="openGallery('${m.id}', 0)" title="${galleryHintText}">
          <img src="${m.image}" alt="${nameData.primary}" loading="lazy">
          <div class="card-badges">
            <span class="badge ${badgeClass}">${badgeText}</span>
          </div>
          <div class="star-rating">${m.rating}</div>
          <div class="card-gallery-hint">
            <span>${galleryHintText} (${photoCount})</span>
          </div>
        </div>
        <div class="card-body">
          <div class="card-title-area">
            <h3 class="card-finnish-name" style="cursor: pointer;" onclick="openGallery('${m.id}', 0)">${nameData.primary}</h3>
            <div class="card-latin-name">${m.latinName}</div>
            <div class="card-english-name">${nameData.local} • <em>${nameData.alt}</em></div>
          </div>

          <div class="meta-row">
            <span class="meta-tag" style="background:#e0f2fe; color:#0369a1;">📍 ${m.habitatName[lang]}</span>
            <div style="display:flex; gap:0.25rem;">${monthTags}</div>
          </div>

          <div class="card-morphology">
            <div class="morphology-item">
              <span class="morphology-label">${t.underCapLabel}</span>
              <span><strong>${morph.underCap}</strong></span>
            </div>
            <div class="morphology-item">
              <span class="morphology-label">${t.capLabel}</span>
              <span>${morph.cap}</span>
            </div>
            <div class="morphology-item">
              <span class="morphology-label">${t.stemLabel}</span>
              <span>${morph.stem || ""}</span>
            </div>
            <div class="morphology-item">
              <span class="morphology-label">${t.odorLabel}</span>
              <span>${morph.odor || ""}</span>
            </div>
          </div>

          ${m.warning && m.warning[lang] ? `<div class="card-alert">⚠️ ${m.warning[lang]}</div>` : ""}
          ${m.culinaryTip && m.culinaryTip[lang] ? `<div class="card-tip">🍳 ${m.culinaryTip[lang]}</div>` : ""}
          ${m.lookalikeAlert && m.lookalikeAlert[lang] ? `<div style="background:#fef3c7; color:#92400e; padding:0.5rem; border-radius:6px; font-size:0.8rem; margin-bottom:0.75rem;">🔍 ${m.lookalikeAlert[lang]}</div>` : ""}

          <div class="card-footer">
            <button onclick="openGallery('${m.id}', 0)" style="background: none; border: none; color: var(--primary); font-weight: 700; font-size: 0.85rem; cursor: pointer; display: flex; align-items: center; gap: 0.35rem; padding: 0;">
              🖼️ ${lang === 'zh' ? '查看更多图片' : (lang === 'fi' ? 'Katso kuvat' : 'View Gallery')}
            </button>
            <span>${t.refId} ${m.id}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
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

// -------------------------------------------------------------
// Lookalike Comparator Render
// -------------------------------------------------------------
function renderLookalikes() {
  const container = document.getElementById("lookalike-container");
  if (!container) return;

  const lang = I18N.currentLang;
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
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e293b;">${pair.title[lang]}</h3>
          <p style="font-size: 0.85rem; color: #64748b; margin-top: 0.2rem;">${pair.summary[lang]}</p>
        </div>
      </div>
      <div class="comparator-pair-grid">
        <div class="comparator-item edible">
          <span class="badge badge-choice">${t.safeBadge}</span>
          <h4 style="font-size: 1.15rem; font-weight: 800; margin-top: 0.4rem; color: #14532d; cursor:pointer;" onclick="openGallery('${pair.edible.id}', 0)">${pair.edible.name[lang]} 📸</h4>
          <div style="height: 180px; border-radius: 8px; overflow: hidden; margin: 0.75rem 0; cursor:pointer;" onclick="openGallery('${pair.edible.id}', 0)" title="Click to view gallery">
            <img src="${pair.edible.image}" alt="Edible" style="width:100%; height:100%; object-fit: cover;">
          </div>
          <ul class="diff-checklist">
            ${pair.edible.traits[lang].map(tr => `<li style="color: #166534;">✅ ${tr}</li>`).join("")}
          </ul>
        </div>
        <div class="comparator-item toxic">
          <span class="badge badge-deadly">${t.dangerBadge}</span>
          <h4 style="font-size: 1.15rem; font-weight: 800; margin-top: 0.4rem; color: #7f1d1d; cursor:pointer;" onclick="openGallery('${pair.toxic.id}', 0)">${pair.toxic.name[lang]} 📸</h4>
          <div style="height: 180px; border-radius: 8px; overflow: hidden; margin: 0.75rem 0; cursor:pointer;" onclick="openGallery('${pair.toxic.id}', 0)" title="Click to view gallery">
            <img src="${pair.toxic.image}" alt="Toxic" style="width:100%; height:100%; object-fit: cover;">
          </div>
          <ul class="diff-checklist">
            ${pair.toxic.traits[lang].map(tr => `<li style="color: #991b1b;">⚠️ ${tr}</li>`).join("")}
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
  const guide = I18N.cookingGuide[lang];
  const t = I18N.ui[lang];

  container.innerHTML = `
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--shadow);">
      <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--primary); margin-bottom: 0.5rem;">${guide.title}</h2>
      <p style="color: #475569; font-size: 1rem; margin-bottom: 1.5rem;">${guide.intro}</p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
        ${guide.principles.map(p => `
          <div style="background: #f8fafc; border-left: 4px solid var(--primary); padding: 1.25rem; border-radius: 6px;">
            <h4 style="font-size: 1.05rem; font-weight: 700; color: #0f172a; margin-bottom: 0.4rem;">${p.title}</h4>
            <p style="font-size: 0.88rem; color: #475569; line-height: 1.5;">${p.content}</p>
          </div>
        `).join("")}
      </div>
    </div>

    <h3 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 1.25rem;">🍲 ${lang === "zh" ? "经典食谱制作" : (lang === "fi" ? "Perinteiset Reseptit" : "Featured Field Recipes")}</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.75rem;">
      ${guide.recipes.map(rcp => `
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; box-shadow: var(--shadow); display: flex; flex-direction: column;">
          <h4 style="font-size: 1.25rem; font-weight: 800; color: #1e3a2b; margin-bottom: 0.5rem;">${rcp.name}</h4>
          
          <div style="display: flex; gap: 1rem; font-size: 0.85rem; color: #64748b; margin-bottom: 1rem; background: #f1f5f9; padding: 0.5rem 0.75rem; border-radius: 6px;">
            <span>⏱️ <strong>${t.prepTime}</strong> ${rcp.prep}</span>
            <span>🔥 <strong>${t.cookTime}</strong> ${rcp.cook}</span>
            <span>🍽️ <strong>${t.servings}</strong> ${rcp.servings}</span>
          </div>

          <div style="margin-bottom: 1rem;">
            <div style="font-size: 0.85rem; font-weight: 700; color: #334155; margin-bottom: 0.35rem;">Ingredients:</div>
            <ul style="padding-left: 1.2rem; font-size: 0.85rem; color: #475569; line-height: 1.5;">
              ${rcp.ingredients.map(ing => `<li>${ing}</li>`).join("")}
            </ul>
          </div>

          <div style="margin-top: auto; padding-top: 0.75rem; border-top: 1px solid #e2e8f0;">
            <div style="font-size: 0.85rem; font-weight: 700; color: #334155; margin-bottom: 0.35rem;">Instructions:</div>
            <ol style="padding-left: 1.2rem; font-size: 0.85rem; color: #334155; line-height: 1.5;">
              ${rcp.steps.map(step => `<li style="margin-bottom: 0.25rem;">${step}</li>`).join("")}
            </ol>
          </div>
        </div>
      `).join("")}
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

  container.innerHTML = I18N.spots.map(s => `
    <div class="spot-card">
      <div class="spot-header">
        <div>
          <h3 class="spot-title">${s.name[lang]}</h3>
          <span style="font-size: 0.8rem; color: #64748b;">📍 ${s.municipality}</span>
        </div>
        <span class="spot-zone">${s.zone}</span>
      </div>

      <div class="spot-transit">
        <p><strong>🚌 HSL:</strong> ${s.transit[lang]}</p>
        <p style="margin-top: 0.35rem;"><strong>⏱️ Duration:</strong> ~${s.time}</p>
      </div>

      <div style="font-size: 0.85rem; color: #334155; margin-bottom: 0.5rem;">
        <strong>Terrain:</strong> ${s.terrain[lang]}
      </div>

      <div style="font-size: 0.85rem; color: #166534; background: #f0fdf4; padding: 0.6rem; border-radius: 6px; margin-bottom: 0.75rem;">
        💡 <em>${s.tip[lang]}</em>
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

  if (lang === "zh") {
    container.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; box-shadow: var(--shadow);">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e3a2b; margin-bottom: 0.75rem;">⚖️ 芬兰自然公共权 (Jokamiehenoikeus)</h3>
          <p style="font-size: 0.9rem; color: #334155; margin-bottom: 0.75rem;">
            法律赋予所有人（包括外国游客与居留人员）在芬兰公有和私有森林免费采摘野果与野生蘑菇的权利。
          </p>
          <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: #475569; line-height: 1.6;">
            <li><strong>尊重私人庭院：</strong>严禁进入他人住宅、庭院或度假木屋（Mökki）周边至少50-100米范围内。</li>
            <li><strong>爱护活树：</strong>严禁砍折活树树枝、剥取白桦树皮（Tuohi）或取桦树汁。</li>
            <li><strong>禁采苔藓地衣：</strong>未经地主允许擅自铲取苔藓或地衣属于违法行为。</li>
            <li><strong>严禁随意野火：</strong>仅可在国家公园规划的指定营火点生火，森林火险预警期严禁任何明火。</li>
          </ul>
        </div>

        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; box-shadow: var(--shadow);">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e3a2b; margin-bottom: 0.75rem;">🛡️ 新手“五大安全金菇”法则</h3>
          <p style="font-size: 0.9rem; color: #334155; margin-bottom: 0.75rem;">
            新手在芬兰森林请严格只采以下5种绝无剧毒混淆的特征菇：
          </p>
          <ol style="padding-left: 1.25rem; font-size: 0.85rem; color: #475569; line-height: 1.6;">
            <li><strong>黄鸡油菌：</strong>粗钝分叉假菌褶，杏子果香，实心黄柄。</li>
            <li><strong>漏斗鸡油菌：</strong>顶端穿孔如漏斗，鲜黄空心管状菌柄。</li>
            <li><strong>卷缘齿菌：</strong>菌盖下方密布柔软白色小菌刺，芬兰本土无任何带刺毒菇。</li>
            <li><strong>灰包号角菇：</strong>薄而柔韧的炭黑喇叭号角，无褶无刺。</li>
            <li><strong>美味牛肝菌：</strong>海绵状吸水管孔，上半柄有精致立体白色细网纹。</li>
          </ol>
        </div>

        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; box-shadow: var(--shadow);">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e3a2b; margin-bottom: 0.75rem;">🌲 森林防虫与自救指南</h3>
          <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: #475569; line-height: 1.6;">
            <li><strong>蜱虫 (Punkit)：</strong>穿浅色长裤扎进长袜中，配高筒胶靴。回家必做全身体检，拔虫用镊子垂直拔出。</li>
            <li><strong>鹿蝇 (Hirvikärpäset)：</strong>8月下旬至10月活跃。落入发丝即脱翅爬行，戴紧致帽子与光滑冲锋衣，备细齿梳子。</li>
            <li><strong>112 Suomi App：</strong>手机务必提前下载官方112软件，一旦遇险报警会自动传输卫星经纬度。</li>
            <li><strong>移动电源：</strong>深秋低温会使手机电池迅速掉电，务必携带充电宝以防迷路。</li>
          </ul>
        </div>
      </div>
    `;
  } else if (lang === "fi") {
    container.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; box-shadow: var(--shadow);">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e3a2b; margin-bottom: 0.75rem;">⚖️ Jokamiehenoikeus Suomessa</h3>
          <p style="font-size: 0.9rem; color: #334155; margin-bottom: 0.75rem;">
            Jokamiehenoikeudella saa vapaasti poimia luonnonmarjoja, sieniä ja kukkia toisenkin maalla.
          </p>
          <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: #475569; line-height: 1.6;">
            <li><strong>Pihapiirirauha:</strong> Älä mene liian lähelle asuttuja taloja tai mökkejä (n. 50–100 m).</li>
            <li><strong>Älä vahingoita puita:</strong> Elävien puiden kaataminen, oksien taittaminen tai tuohen kiskominen on kiellettyä.</li>
            <li><strong>Sammalenotto kielletty:</strong> Sammalta tai jäkälää ei saa kerätä ilman maanomistajan lupaa.</li>
            <li><strong>Tulenteko:</strong> Avotulen teko maastoon ilman lupaa on kielletty lukuun ottamatta virallisia tulentekopaikkoja.</li>
          </ul>
        </div>

        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; box-shadow: var(--shadow);">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e3a2b; margin-bottom: 0.75rem;">🛡️ Aloittelijan Varmat Viisi</h3>
          <ol style="padding-left: 1.25rem; font-size: 0.85rem; color: #475569; line-height: 1.6;">
            <li><strong>Kantarelli:</strong> Haaraiset poimut, aprikoosituoksu, umpinainen keltainen jalka.</li>
            <li><strong>Suppilovahvero:</strong> Suppilomainen reikä keskellä, kirkkaankeltainen ontto pilli.</li>
            <li><strong>Vaaleaorakas:</strong> Lakin alla hauraat piikit, ei myrkyllisiä näköislajeja.</li>
            <li><strong>Mustatorvisieni:</strong> Ohutmaltoinen musta torvi, alapinta lähes sileä.</li>
            <li><strong>Herkkutatti:</strong> Valkoinen pillistö joka kellertyy, valkoinen verkkokuvio jalassa.</li>
          </ol>
        </div>

        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; box-shadow: var(--shadow);">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e3a2b; margin-bottom: 0.75rem;">🌲 Metsän Turvallisuus</h3>
          <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: #475569; line-height: 1.6;">
            <li><strong>Punkit:</strong> Kumisaappaat, housunlahkeet sukkien sisään, päivittäinen punkkitarkastus.</li>
            <li><strong>Hirvikärpäset:</strong> Liukaspintaiset vaatteet, hattu, tiheä kampa taskuun.</li>
            <li><strong>112 Suomi -sovellus:</strong> Asenna puhelimeen; välittää sijaintikoordinaatit automaattisesti hätäkeskukseen.</li>
            <li><strong>Varavirtalähde:</strong> Syksyn viileys tyhjentää akun nopeasti; pidä mukana powerbank.</li>
          </ul>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; box-shadow: var(--shadow);">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e3a2b; margin-bottom: 0.75rem;">⚖️ Everyman’s Right (*Jokamiehenoikeus*)</h3>
          <p style="font-size: 0.9rem; color: #334155; margin-bottom: 0.75rem;">
            In Finland, you have the statutory legal right to forage wild mushrooms and berries on public and private land without permits or fees.
          </p>
          <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: #475569; line-height: 1.6;">
            <li><strong>Respect Private Yards:</strong> Stay at least 50–100m away from private homes, gardens, and summer cottages.</li>
            <li><strong>Do Not Harm Living Trees:</strong> Never break branches or peel birch bark (*tuohi*).</li>
            <li><strong>No Moss/Lichen Gathering:</strong> Taking moss without landowner consent is strictly prohibited.</li>
            <li><strong>Open Fires:</strong> Strictly banned on bare ground; use only official maintained campfire sites.</li>
          </ul>
        </div>

        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; box-shadow: var(--shadow);">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e3a2b; margin-bottom: 0.75rem;">🛡️ The "Foolproof Five" Rules</h3>
          <ol style="padding-left: 1.25rem; font-size: 0.85rem; color: #475569; line-height: 1.6;">
            <li><strong>Chanterelle:</strong> Blunt ridges, apricot aroma, solid stem.</li>
            <li><strong>Funnel Chanterelle:</strong> Perforated trumpet, hollow yellow stem.</li>
            <li><strong>Hedgehog Mushroom:</strong> Soft spines underneath, zero toxic lookalikes.</li>
            <li><strong>Black Trumpet:</strong> Thin black hollow horn, no gills or pores.</li>
            <li><strong>King Bolete (Porcini):</strong> Spongy pores, fine white net on stem.</li>
          </ol>
        </div>

        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; box-shadow: var(--shadow);">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e3a2b; margin-bottom: 0.75rem;">🌲 Forest Safety: Ticks & Navigation</h3>
          <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: #475569; line-height: 1.6;">
            <li><strong>Ticks (*Punkit*):</strong> Wear high boots, tuck trousers into socks, and do a nightly body inspection.</li>
            <li><strong>Deer Keds (*Hirvikärpäset*):</strong> Active late August to October. Wear smooth nylon jackets and a tight cap.</li>
            <li><strong>112 Suomi App:</strong> Install the free official app; it beams satellite GPS coordinates if you dial 112.</li>
            <li><strong>Power Bank:</strong> Cold autumn air depletes smartphone batteries fast; always carry a portable battery pack.</li>
          </ul>
        </div>
      </div>
    `;
  }
}
