const fs = require('fs');
const path = require('path');

const repoDir = __dirname;

// Load i18n to get species metadata
const i18nCode = fs.readFileSync(path.join(repoDir, 'i18n.js'), 'utf8');
const I18N = new Function(i18nCode + '; return I18N;')();

const speciesMap = {};
I18N.species.forEach(s => {
  speciesMap[s.latinName.toLowerCase()] = s.id;
});

// Also map key variants or specific names
const nameVariants = {
  'cantharellus cibarius': 'cantharellus_cibarius',
  'craterellus tubaeformis': 'craterellus_tubaeformis',
  'cantharellus tubaeformis': 'craterellus_tubaeformis',
  'hydnum repandum': 'hydnum_repandum',
  'craterellus cornucopioides': 'craterellus_cornucopioides',
  'boletus edulis': 'boletus_edulis',
  'boletus pinophilus': 'boletus_pinophilus',
  'boletus reticulatus': 'boletus_reticulatus',
  'amanita virosa': 'amanita_virosa',
  'cortinarius rubellus': 'cortinarius_rubellus',
  'galerina marginata': 'galerina_marginata',
  'gyromitra esculenta': 'gyromitra_esculenta',
  'paxillus involutus': 'paxillus_involutus',
  'lactarius torminosus': 'lactarius_torminosus',
  'lactarius rufus': 'lactarius_rufus',
  'lactarius deliciosus': 'lactarius_deliciosus',
  'lactarius trivialis': 'lactarius_trivialis',
  'lactarius deterrimus': 'lactarius_deterrimus',
  'lactarius volemus': 'lactarius_volemus',
  'lactarius utilis': 'lactarius_utilis',
  'lactarius necator': 'lactarius_necator',
  'lactarius mammosus': 'lactarius_mammosus',
  'russula decolorans': 'russula_decolorans',
  'russula paludosa': 'russula_paludosa',
  'russula claroflava': 'russula_claroflava',
  'russula aeruginea': 'russula_aeruginea',
  'russula cyanoxantha': 'russula_cyanoxantha',
  'russula vesca': 'russula_vesca',
  'russula xerampelina': 'russula_xerampelina',
  'russula vinosa': 'russula_vinosa',
  'russula integra': 'russula_integra',
  'russula emetica': 'russula_emetica',
  'cortinarius caperatus': 'cortinarius_caperatus',
  'albatrellus ovinus': 'albatrellus_ovinus',
  'albatrellus confluens': 'albatrellus_confluens',
  'laetiporus sulphureus': 'laetiporus_sulphureus',
  'leccinum versipelle': 'leccinum_versipelle',
  'leccinum scabrum': 'leccinum_scabrum',
  'leccinum vulpinum': 'leccinum_vulpinum',
  'leccinum aurantiacum': 'leccinum_aurantiacum',
  'leccinum variicolor': 'leccinum_variicolor',
  'suillus luteus': 'suillus_luteus',
  'suillus variegatus': 'suillus_variegatus',
  'suillus bovinus': 'suillus_bovinus',
  'suillus grevillei': 'suillus_grevillei',
  'hydnum rufescens': 'hydnum_rufescens',
  'craterellus lutescens': 'craterellus_lutescens',
  'cantharellus amethysteus': 'cantharellus_amethysteus',
  'tricholoma matsutake': 'tricholoma_matsutake',
  'tricholoma portentosum': 'tricholoma_portentosum',
  'macrolepiota procera': 'macrolepiota_procera',
  'agaricus arvensis': 'agaricus_arvensis',
  'agaricus silvaticus': 'agaricus_silvaticus',
  'coprinus comatus': 'coprinus_comatus',
  'infundibulicybe geotropa': 'infundibulicybe_geotropa',
  'clitocybe nebularis': 'clitocybe_nebularis',
  'marasmius oreades': 'marasmius_oreades',
  'armillaria mellea': 'armillaria_mellea',
  'kuehneromyces mutabilis': 'kuehneromyces_mutabilis',
  'calvatia gigantea': 'calvatia_gigantea',
  'lycoperdon perlatum': 'lycoperdon_perlatum',
  'hygrophoropsis aurantiaca': 'hygrophoropsis_aurantiaca',
  'tylopilus felleus': 'tylopilus_felleus',
  'amanita muscaria': 'amanita_muscaria'
};

const chapterTargetHash = {
  '01': '#/safety',
  '02': '#/spots',
  '03': '#/habitats',
  '04': '#/lookalikes',
  '05': '#/catalog',
  '06': '#/catalog',
  '07': '#/cooking',
  '08': '#/catalog',
  'zh': '#/cooking'
};

const chapters = [
  {
    id: "01",
    slug: "01_legal_and_ethics",
    file: "01_legal_and_ethics.md",
    chapterNum: "Chapter 01",
    icon: "⚖️",
    title: {
      en: "Legal Rights, Nature Protection & Forest Safety",
      zh: "芬兰自然公共权、自然保护区法规与森林安全守则",
      fi: "Jokamiehenoikeudet, luonnonsuojelualueet ja metsäturvallisuus"
    },
    badge: {
      en: "Legal & Ethics",
      zh: "法律与伦理",
      fi: "Laki ja etiikka"
    },
    readTime: {
      en: "6 min read",
      zh: "6 分钟阅读",
      fi: "6 min lukuaika"
    },
    desc: {
      en: "Master Everyman's Right (Jokamiehenoikeus), commercial vs personal limits, strict rules in nature reserves, and protective protocols against ticks (punkit) and deer keds (hirvikärpäset). Includes 112 Suomi app setup.",
      zh: "详尽解析芬兰人人享有的自然公共权（Jokamiehenoikeus）、采摘限额、自然保护区禁区界限，以及防范森林蜱虫（punkit）与鹿蝇（hirvikärpäset）的实地生存指南与112急救配置。",
      fi: "Kattava opas jokamiehenoikeuksiin, rauhoitettuihin suojelualueisiin ja maastoturvallisuuteen punkkeja sekä hirvikärpäsiä vastaan."
    },
    targetSpecies: ["amanita_virosa", "cortinarius_rubellus", "cantharellus_cibarius", "craterellus_tubaeformis"]
  },
  {
    id: "02",
    slug: "02_helsinki_transit_spots_guide",
    file: "02_helsinki_transit_spots_guide.md",
    chapterNum: "Chapter 02",
    icon: "🚌",
    title: {
      en: "Helsinki Foraging Spots by HSL Transit (Zone A–D)",
      zh: "赫尔辛基大区HSL公共交通采蘑菇宝典（含5大小众秘境）",
      fi: "Helsingin seudun sienipaikat HSL-yhteyksillä ja 5 salaista helmeä"
    },
    badge: {
      en: "Transit & Maps",
      zh: "交通路线与秘境",
      fi: "Reitit ja kartat"
    },
    readTime: {
      en: "12 min read",
      zh: "12 分钟阅读",
      fi: "12 min lukuaika"
    },
    desc: {
      en: "Step-by-step public transit routes, trailheads, and Google Maps links for Keskuspuisto, Sipoonkorpi, Nuuksio, Luukki, plus 5 low-pressure hidden gems: Meiko (Kirkkonummi), Tremanskärr, Northern Sipoonkorpi, Salmi, and Vestra.",
      zh: "详尽整理可搭乘HSL公交/火车直达的经典森林采摘点（中央公园、西波国家公园、努克西奥、Luukki），并特别收录5大小众少人采摘的森林秘境（Meiko、Tremanskärr、北西波等），附起点导航与行车时刻。",
      fi: "Tarkat julkisen liikenteen reitit, lähtöpisteet ja Google Maps -linkit Keskuspuistoon, Sipoonkorpeen, Nuuksioon, Luukkiin sekä 5 rauhalliseen erämaakohteeseen."
    },
    targetSpecies: ["cantharellus_cibarius", "craterellus_tubaeformis", "craterellus_cornucopioides", "boletus_edulis", "boletus_pinophilus", "boletus_reticulatus", "hydnum_repandum", "lactarius_rufus", "lactarius_deliciosus", "leccinum_versipelle", "russula_paludosa", "cortinarius_caperatus", "albatrellus_ovinus"]
  },
  {
    id: "03",
    slug: "03_seasonal_calendar_and_habitats",
    file: "03_seasonal_calendar_and_habitats.md",
    chapterNum: "Chapter 03",
    icon: "📅",
    title: {
      en: "Seasonal Calendar, Habitats & The Chanterelle Dilemma",
      zh: "物候出菇日历、树种生境生态与金黄鸡油菌寻菇秘法",
      fi: "Satokalenteri, metsätyypit ja kantarellin maastoekologia"
    },
    badge: {
      en: "Ecology & Phenology",
      zh: "生态与树种辨识",
      fi: "Ekologia ja puut"
    },
    readTime: {
      en: "10 min read",
      zh: "10 分钟阅读",
      fi: "10 min lukuaika"
    },
    desc: {
      en: "Month-by-month fruiting timelines (May to November), Finnish forest types (kuusikko, männikkö, lehto), and an in-depth breakdown of why golden chanterelles seem absent while funnel chanterelles abound in autumn, featuring 3-tree field diagnostics (Birch vs Pine vs Spruce).",
      zh: "5月至11月出菇时令表、芬兰四大林型生态学、深度破解“为何9月满地漏斗菇却难寻鸡油菌”的季节与林型生境错位之谜，并附垂枝白桦、欧洲赤松、欧洲云杉三大树种外生菌根现场鉴别要点与图解。",
      fi: "Kuukausikohtainen satokalenteri, metsätyypit sekä syvällinen katsaus kantarellin ja suppilovahveron esiintymiseroihin syksyllä, mukana rauduskoivun, männyn ja kuusen vertailukuva."
    },
    targetSpecies: ["cantharellus_cibarius", "craterellus_tubaeformis", "craterellus_cornucopioides", "boletus_edulis", "boletus_pinophilus", "boletus_reticulatus", "hydnum_repandum", "lactarius_rufus", "lactarius_deliciosus", "lactarius_trivialis", "amanita_virosa", "cortinarius_rubellus"]
  },
  {
    id: "04",
    slug: "04_deadly_and_toxic_species",
    file: "04_deadly_and_toxic_species.md",
    chapterNum: "Chapter 04",
    icon: "☠️",
    title: {
      en: "Deadly & Toxic Species Survival Manual",
      zh: "芬兰致命剧毒与危险有毒真菌生死鉴别避险手册",
      fi: "Tappavan myrkylliset ja vaaralliset sienet: Selviytymisopas"
    },
    badge: {
      en: "Safety & Toxicity",
      zh: "生死避险手册",
      fi: "Myrkkysienet"
    },
    readTime: {
      en: "9 min read",
      zh: "9 分钟阅读",
      fi: "9 min lukuaika"
    },
    desc: {
      en: "Absolute zero-tolerance safety manual: Destroying Angel (Amanita virosa), Deadly Webcap (Cortinarius rubellus), Funeral Bell (Galerina marginata), and False Morel (Gyromitra esculenta). Toxins, latent incubation periods, lethal dosages, and emergency protocols.",
      zh: "零容忍安全防线：白毒伞（毁灭天使）、致命丝膜菌、纹缘盔孢伞（丧钟菇）及鹿花菌的形态特征、毒素机理（Amatoxin、Orellanine、Gyromitrin）、潜伏期与急救求生协议。",
      fi: "Ehdottoman tärkeä opas Suomen vaarallisimpiin myrkkysieniin: valkokärpässieni, suippumyrkkyseitikki, myrkkynääpikkä ja korvasieni. Oireet, toksiinit ja ensiaputoimet."
    },
    targetSpecies: ["amanita_virosa", "cortinarius_rubellus", "galerina_marginata", "gyromitra_esculenta", "amanita_muscaria", "paxillus_involutus", "tylopilus_felleus", "russula_emetica", "hygrophoropsis_aurantiaca"]
  },
  {
    id: "05",
    slug: "05_beginner_safe_species",
    file: "05_beginner_safe_species.md",
    chapterNum: "Chapter 05",
    icon: "🍄",
    title: {
      en: "The \"Safe Five\" Beginner Species",
      zh: "新手绝对安全采摘“安全五剑客”（零混淆美味菌）",
      fi: "Aloittelijan \"Varma Viisikko\" ja helpot ruokasienet"
    },
    badge: {
      en: "Beginner Choice",
      zh: "新手必修五菌",
      fi: "Varma viisikko"
    },
    readTime: {
      en: "8 min read",
      zh: "8 分钟阅读",
      fi: "8 min lukuaika"
    },
    desc: {
      en: "The 5 foolproof species with distinct physical traits that cannot be mistaken for deadly toxins: Golden Chanterelle, Funnel Chanterelle, Hedgehog Mushroom, Black Trumpet, and King Bolete (Porcini). Field identification, habitat markers, and lookalike filters.",
      zh: "形态极其鲜明、绝无致命混淆种的芬兰森林新手必学五菌：金黄鸡油菌、漏斗鸡油菌、美味齿菌（白刺儿菜）、灰黑喇叭菌以及美味牛肝菌（大红菇牛肝）。",
      fi: "Viisi selkeää ja herkullista ruokasientä, joilla ei ole tappavia näköislajeja: kantarelli, suppilovahvero, vaalea orakas, mustatorvisieni ja herkkutatti."
    },
    targetSpecies: ["cantharellus_cibarius", "craterellus_tubaeformis", "hydnum_repandum", "craterellus_cornucopioides", "boletus_edulis"]
  },
  {
    id: "06",
    slug: "06_intermediate_and_advanced",
    file: "06_intermediate_and_advanced.md",
    chapterNum: "Chapter 06",
    icon: "🧺",
    title: {
      en: "Intermediate & Advanced Gourmet Species",
      zh: "进阶与资深老饕野菌指南（乳菇焯水、红菇折断与牛肝菌）",
      fi: "Kokeneen sienestäjän herkut ja esikäsiteltävät lajit"
    },
    badge: {
      en: "Advanced Foraging",
      zh: "进阶老饕指南",
      fi: "Kokeneille"
    },
    readTime: {
      en: "11 min read",
      zh: "11 分钟阅读",
      fi: "11 min lukuaika"
    },
    desc: {
      en: "Expand your basket with parboil-required milkcaps (Lactarius torminosus, L. rufus), crisp brittlegills (Russula decolorans), orange birch boletes (Leccinum versipelle), gypsy mushrooms (Cortinarius caperatus), and sheep polypore.",
      zh: "突破五大基础菌：需要科学水煮脱苦去毒的白乳菇、北欧红菇辨别法（折断无菌丝韧性）、桦树红头牛肝菌与进阶美味菌。系统掌握排毒工艺与风味挖掘。",
      fi: "Laajenna sieniosaamistasi: ryöpättävät rouskut (karvarousku, kangasrousku), haurasmalikat, lehmäntatit, kangastatit ja kehnäsieni."
    },
    targetSpecies: ["lactarius_torminosus", "lactarius_rufus", "lactarius_trivialis", "lactarius_deliciosus", "russula_decolorans", "russula_aeruginea", "russula_paludosa", "leccinum_versipelle", "cortinarius_caperatus", "albatrellus_ovinus", "suillus_variegatus", "suillus_luteus"]
  },
  {
    id: "07",
    slug: "07_preservation_and_recipes",
    file: "07_preservation_and_recipes.md",
    chapterNum: "Chapter 07",
    icon: "🍳",
    title: {
      en: "Preservation & Authentic Finnish Recipes",
      zh: "芬兰传统野菌储藏法（烘干/盐渍/冷冻）与正统北欧料理",
      fi: "Sienien säilöntä (kuivaus, suolaus) ja perinteiset reseptit"
    },
    badge: {
      en: "Culinary & Storage",
      zh: "储藏与经典料理",
      fi: "Säilöntä & keittiö"
    },
    readTime: {
      en: "10 min read",
      zh: "10 分钟阅读",
      fi: "10 min lukuaika"
    },
    desc: {
      en: "Dehydration, salt-curing milkcaps (suolasienet), sauté-freezing, and authentic Finnish dishes: Chanterelle pie (kantarellipiirakka), mushroom salad (sienisalaatti), and creamy wild mushroom soup.",
      zh: "系统化储藏全指南：风干脱水法、经典芬兰传统盐渍乳菇法（Suolasienet）、黄油热煸冷冻法；附正统芬兰鸡油菌奶油咸派、芬兰圣诞传统红菇色拉及野生牛肝菌浓汤食谱。",
      fi: "Kuivaaminen, rouskujen suolaus, pakastus sekä parhaat perinteiset reseptit: kantarellipiirakka, suolasienisalaatti ja kermainen tattikeitto."
    },
    targetSpecies: ["cantharellus_cibarius", "craterellus_tubaeformis", "craterellus_cornucopioides", "boletus_edulis", "lactarius_rufus", "lactarius_torminosus", "lactarius_trivialis", "hydnum_repandum", "russula_decolorans"]
  },
  {
    id: "08",
    slug: "08_expanded_edible_species_index",
    file: "08_expanded_edible_species_index.md",
    chapterNum: "Chapter 08",
    icon: "📋",
    title: {
      en: "Master Index: 50+ Wild Edible Mushrooms of Finland",
      zh: "全景大典：芬兰50+种野生食用菌分类全书（八大家族分类图鉴）",
      fi: "Suomen yli 50 syötävän luonnonvaraisen sienen lajiluettelo"
    },
    badge: {
      en: "Master Index (54 Species)",
      zh: "50+食用菌大典",
      fi: "50+ lajin suurluettelo"
    },
    readTime: {
      en: "18 min read",
      zh: "18 分钟阅读",
      fi: "18 min lukuaika"
    },
    desc: {
      en: "The complete Finnish mycological index cataloging 54 wild edible species across 8 families (Boletaceae, Cantharellaceae, Hydnaceae, Russulaceae, Agaricaceae, Tricholomataceae, Polyporaceae, and Ascomycota) with edibility ratings and host trees.",
      zh: "收录芬兰真菌志记载的全部54种野生食用真菌，跨越牛肝菌科、鸡油菌科、齿菌科、红菇科、蘑菇科、口蘑科、多孔菌科及子囊菌门，包含三级美味评级、菌根树种与实地辨识特征。",
      fi: "Täydellinen 54 luonnonvaraisen ruokasienen mestariluettelo ryhmiteltynä 8 heimoon, sisältäen ruoka-arvot, isäntäpuut ja keskeiset maastotuntomerkit."
    },
    targetSpecies: ["cantharellus_cibarius", "craterellus_tubaeformis", "hydnum_repandum", "craterellus_cornucopioides", "boletus_edulis", "boletus_pinophilus", "boletus_reticulatus", "lactarius_deliciosus", "tricholoma_matsutake", "macrolepiota_procera", "armillaria_mellea", "coprinus_comatus"]
  },
  {
    id: "zh",
    slug: "cooking_and_recipes_zh",
    file: "cooking_and_recipes_zh.md",
    chapterNum: "Special Guide",
    icon: "🇨🇳",
    title: {
      en: "Chinese Wild Mushroom Culinary Mastery & Cross-Culture Recipes",
      zh: "中华野菌烹饪处理心法与中西融合经典名菜食谱",
      fi: "Villisienien perinteinen kiinalainen keittiömestariopas"
    },
    badge: {
      en: "Chinese Culinary",
      zh: "中华料理专著",
      fi: "Kiinalainen keittiö"
    },
    readTime: {
      en: "10 min read",
      zh: "10 分钟阅读",
      fi: "10 min lukuaika"
    },
    desc: {
      en: "Specialist culinary guide bridging Finnish wild harvest with Chinese culinary techniques: high-temperature wok searing, chicken-fat braising, umami soups, and cross-cultural gourmet dishes.",
      zh: "专为华人采摘老饕撰写的深度料理指南：鸡油菌干煸云腿、野生牛肝菌瓦煲焖鸡、喇叭菌竹荪清润老火汤、以及极品野生菌酱熬制心法，将北欧极纯森林珍馐融入中华镬气之中。",
      fi: "Erityisopas pohjoismaisten metsäsienien valmistamiseen perinteisen kiinalaisen keittiön tekniikoilla: wokkaukseen, haudutukseen ja aromaattisiin liemiin."
    },
    targetSpecies: ["cantharellus_cibarius", "craterellus_tubaeformis", "boletus_edulis", "craterellus_cornucopioides", "armillaria_mellea", "tricholoma_matsutake", "lactarius_deliciosus", "coprinus_comatus", "macrolepiota_procera", "hydnum_repandum"]
  }
];

function parseMarkdown(md, isLiveApp = false) {
  let html = md;

  // 1. Code blocks first
  const codeBlocks = [];
  html = html.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
    const placeholder = `___CODEBLOCK_${codeBlocks.length}___`;
    codeBlocks.push({ lang, code });
    return placeholder;
  });

  // 2. Inline code
  const inlineCodes = [];
  html = html.replace(/`([^`]+)`/g, (match, code) => {
    const placeholder = `___INLINECODE_${inlineCodes.length}___`;
    inlineCodes.push(code);
    return placeholder;
  });

  // 3. GitHub callouts: > [!NOTE], > [!TIP], > [!IMPORTANT], > [!WARNING], > [!CAUTION]
  html = html.replace(/^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*\n((?:>.*\n?)*)/gim, (match, type, body) => {
    const cleanBody = body.replace(/^>\s?/gm, '').trim();
    const typeClass = type.toLowerCase() === 'caution' ? 'danger' : (type.toLowerCase() === 'warning' ? 'warning' : 'note');
    return `<div class="reader-alert ${typeClass}"><strong>${type.toUpperCase()}:</strong> ${cleanBody}</div>\n`;
  });

  // 4. Standard blockquotes: > ...
  html = html.replace(/^>\s?(.*)$/gm, '<blockquote>$1</blockquote>');
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '\n');

  // 5. Headers
  html = html.replace(/^######\s+(.+)$/gm, '<h6>$1</h6>');
  html = html.replace(/^#####\s+(.+)$/gm, '<h5>$1</h5>');
  html = html.replace(/^####\s+(.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^#\s+(.+)$/gm, '<h1>$1</h1>');

  // 6. Horizontal rules
  html = html.replace(/^---$/gm, '<hr>');

  // 7. Bold & Italic
  html = html.replace(/\*\*\*([^\n]+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*([^\n]+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^\n]+?)\*/g, '<em>$1</em>');

  // 8. Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
    let finalSrc = src;
    if (isLiveApp) {
      if (finalSrc.startsWith('../images/')) finalSrc = finalSrc.replace('../images/', 'images/');
    } else {
      if (finalSrc.startsWith('images/')) finalSrc = '../' + finalSrc;
    }
    return `<figure class="reader-figure"><img src="${finalSrc}" alt="${alt}" loading="lazy"><figcaption>${alt}</figcaption></figure>`;
  });

  // 9. Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
    let targetUrl = url;

    // Check if it links to a mushroom
    const mushroomMatch = targetUrl.match(/(?:\.\.\/index\.html|index\.html)?#\/mushroom\/([a-z0-9_]+)/);
    if (mushroomMatch) {
      const spId = mushroomMatch[1];
      if (isLiveApp) {
        return `<a href="#/mushroom/${spId}" class="inline-species-chip" onclick="if(window.navigateToMushroom){window.navigateToMushroom('${spId}');return false;}"><span class="chip-icon">🍄</span> <span class="chip-title">${text}</span></a>`;
      } else {
        return `<a href="../index.html#/mushroom/${spId}" class="inline-species-chip" title="View identification guide"><span class="chip-icon">🍄</span> <span class="chip-title">${text}</span></a>`;
      }
    }

    // Check if it links to a chapter
    const chapterMap = {
      '01_legal_and_ethics.md': '01',
      '01_legal_and_ethics.html': '01',
      '02_helsinki_transit_spots_guide.md': '02',
      '02_helsinki_transit_spots_guide.html': '02',
      '03_seasonal_calendar_and_habitats.md': '03',
      '03_seasonal_calendar_and_habitats.html': '03',
      '04_deadly_and_toxic_species.md': '04',
      '04_deadly_and_toxic_species.html': '04',
      '05_beginner_safe_species.md': '05',
      '05_beginner_safe_species.html': '05',
      '06_intermediate_and_advanced.md': '06',
      '06_intermediate_and_advanced.html': '06',
      '07_preservation_and_recipes.md': '07',
      '07_preservation_and_recipes.html': '07',
      '08_expanded_edible_species_index.md': '08',
      '08_expanded_edible_species_index.html': '08',
      'cooking_and_recipes_zh.md': 'zh',
      'cooking_and_recipes_zh.html': 'zh'
    };

    if (chapterMap[targetUrl]) {
      const chId = chapterMap[targetUrl];
      if (isLiveApp) {
        const hash = chapterTargetHash[chId] || `#/chapter/${chId}`;
        return `<a href="${hash}" class="inline-chapter-link" onclick="if(window.navigateToChapter){window.navigateToChapter('${chId}');return false;}">${text}</a>`;
      } else {
        return `<a href="${targetUrl.replace(/\.md$/, '.html')}" class="inline-chapter-link">${text}</a>`;
      }
    }

    if (targetUrl.endsWith('.md') && !targetUrl.startsWith('http')) {
      targetUrl = targetUrl.replace(/\.md$/, '.html');
    }
    const isExternal = targetUrl.startsWith('http');
    const isYouTube = targetUrl.includes('youtube.com') || targetUrl.includes('youtu.be');
    if (isYouTube) {
      const cleanTitle = text.replace(/"/g, '&quot;');
      return `<a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="inline-video-btn" title="${cleanTitle}"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="color: #dc2626;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg><span>${text}</span></a>`;
    }
    return `<a href="${targetUrl}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`;
  });

  // 10. Tables
  html = html.replace(/((?:\|[^\n]+\|\r?\n)+)/g, (match) => {
    const lines = match.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
    if (lines.length < 2) return match;
    const headerCols = lines[0].split('|').slice(1, -1).map(c => c.trim());
    const isSep = /^\|(?:\s*:?-+:?\s*\|)+$/.test(lines[1]);
    if (!isSep) return match;

    let tableHtml = '<div class="table-container"><table><thead><tr>';
    headerCols.forEach(col => {
      tableHtml += `<th>${col}</th>`;
    });
    tableHtml += '</tr></thead><tbody>';

    for (let i = 2; i < lines.length; i++) {
      const rowCols = lines[i].split('|').slice(1, -1).map(c => c.trim());
      tableHtml += '<tr>';
      rowCols.forEach(col => {
        tableHtml += `<td>${col}</td>`;
      });
      tableHtml += '</tr>';
    }
    tableHtml += '</tbody></table></div>';
    return tableHtml;
  });

  // 11. Unordered lists
  html = html.replace(/(?:^|\n)(?:[-*+]\s+[^\n]+(?:\n|$))+/g, (match) => {
    const items = match.trim().split('\n').map(line => {
      return line.replace(/^[-*+]\s+/, '').trim();
    });
    return '\n<ul>\n' + items.map(item => `  <li>${item}</li>`).join('\n') + '\n</ul>\n';
  });

  // 12. Ordered lists
  html = html.replace(/(?:^|\n)(?:\d+\.\s+[^\n]+(?:\n|$))+/g, (match) => {
    const items = match.trim().split('\n').map(line => {
      return line.replace(/^\d+\.\s+/, '').trim();
    });
    return '\n<ol>\n' + items.map(item => `  <li>${item}</li>`).join('\n') + '\n</ol>\n';
  });

  // 13. Paragraphs
  const paragraphs = html.split(/\n{2,}/);
  html = paragraphs.map(para => {
    const p = para.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<ol') || p.startsWith('<div') || p.startsWith('<figure') || p.startsWith('<blockquote') || p.startsWith('<table') || p.startsWith('<hr') || p.startsWith('___CODEBLOCK_')) {
      return p;
    }
    return `<p>${p.replace(/\n/g, '<br>')}</p>`;
  }).join('\n\n');

  // 14. Restore inline codes
  html = html.replace(/___INLINECODE_(\d+)___/g, (match, idx) => {
    const code = inlineCodes[idx];
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<code>${escaped}</code>`;
  });

  // 15. Restore code blocks
  html = html.replace(/___CODEBLOCK_(\d+)___/g, (match, idx) => {
    const { lang, code } = codeBlocks[idx];
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<pre><code class="language-${lang || 'text'}">${escaped}</code></pre>`;
  });

  // 16. In-text species auto-linking for <em>Latin Name</em> that are NOT already in an <a> tag
  html = html.replace(/<em>([^<]+)<\/em>/g, (match, innerText) => {
    const cleanName = innerText.trim().toLowerCase();
    const spId = nameVariants[cleanName] || speciesMap[cleanName];
    if (spId) {
      if (isLiveApp) {
        return `<a href="#/mushroom/${spId}" class="inline-species-chip" onclick="if(window.navigateToMushroom){window.navigateToMushroom('${spId}');return false;}" title="View identification guide"><span class="chip-icon">🍄</span> <span class="chip-title"><em>${innerText}</em></span></a>`;
      } else {
        return `<a href="../index.html#/mushroom/${spId}" class="inline-species-chip" title="View identification guide in live app"><span class="chip-icon">🍄</span> <span class="chip-title"><em>${innerText}</em></span></a>`;
      }
    }
    return match;
  });

  return html;
}

// Build handbook_data.js
const handbookDataChapters = [];
const docsDir = path.join(repoDir, 'docs');

chapters.forEach((ch, idx) => {
  const prevCh = idx > 0 ? chapters[idx - 1] : null;
  const nextCh = idx < chapters.length - 1 ? chapters[idx + 1] : null;
  const srcPath = path.join(docsDir, ch.file);

  if (!fs.existsSync(srcPath)) {
    console.warn(`File not found: ${srcPath}`);
    return;
  }

  const rawMd = fs.readFileSync(srcPath, 'utf8');
  const liveHtml = parseMarkdown(rawMd, true);
  const staticHtml = parseMarkdown(rawMd, false);

  handbookDataChapters.push({
    id: ch.id,
    slug: ch.slug,
    file: ch.file,
    chapterNum: ch.chapterNum,
    icon: ch.icon,
    title: ch.title,
    badge: ch.badge,
    readTime: ch.readTime,
    desc: ch.desc,
    targetSpecies: ch.targetSpecies,
    url: `docs/${ch.file.replace(/\.md$/, '.html')}`,
    html: liveHtml
  });

  // Generate static HTML for docs/
  const optionsHtml = chapters.map(c => `
    <option value="${c.file.replace(/\.md$/, '.html')}" ${c.file === ch.file ? 'selected' : ''}>
      ${c.icon} ${c.title.en}
    </option>
  `).join('');

  const fullStaticDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${ch.title.en} | Helsinki Mushroom Guide</title>
  <link rel="stylesheet" href="../styles.css">
  <style>
    body {
      background-color: var(--bg);
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
    }
    .doc-live-banner {
      background: linear-gradient(90deg, #1e3a2b 0%, #064e3b 100%);
      color: #ffffff;
      padding: 0.65rem 1.25rem;
      border-bottom: 1px solid rgba(52, 211, 153, 0.3);
      position: sticky;
      top: 0;
      z-index: 101;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    .doc-live-banner-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .banner-badge {
      background: rgba(16, 185, 129, 0.25);
      color: #6ee7b7;
      font-size: 0.76rem;
      font-weight: 700;
      padding: 0.2rem 0.55rem;
      border-radius: 9999px;
      border: 1px solid rgba(52, 211, 153, 0.4);
      white-space: nowrap;
    }
    .banner-text {
      font-size: 0.86rem;
      color: #e2e8f0;
      flex: 1;
      min-width: 260px;
    }
    .banner-cta {
      background: #10b981;
      color: #ffffff;
      font-weight: 700;
      font-size: 0.82rem;
      text-decoration: none;
      padding: 0.35rem 0.85rem;
      border-radius: 6px;
      white-space: nowrap;
      transition: all 0.15s ease;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }
    .banner-cta:hover {
      background: #059669;
      transform: translateY(-1px);
    }
    .doc-sticky-header {
      background: #182e22;
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      padding: 0.75rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .doc-nav-left {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }
    .doc-btn-back {
      color: #fff;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-weight: 600;
      font-size: 0.88rem;
      padding: 0.4rem 0.85rem;
      background: rgba(255, 255, 255, 0.12);
      border-radius: var(--radius);
      transition: all 0.2s ease;
    }
    .doc-btn-back:hover {
      background: #2d5a42;
      color: #fff;
      transform: translateX(-2px);
    }
    .doc-select {
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.25);
      padding: 0.4rem 0.75rem;
      border-radius: var(--radius);
      font-size: 0.85rem;
      cursor: pointer;
      outline: none;
      max-width: 320px;
    }
    .doc-select option {
      background: #182e22;
      color: #fff;
    }
    .doc-main-container {
      max-width: 960px;
      margin: 2rem auto;
      padding: 0 1.25rem 4rem;
      flex: 1;
      width: 100%;
    }
    .doc-card {
      background: #ffffff;
      border-radius: var(--radius);
      padding: 2.5rem 3rem;
      box-shadow: var(--shadow);
      border: 1px solid var(--border);
    }
    .doc-content-area {
      line-height: 1.75;
      font-size: 1.02rem;
      color: #334155;
    }
    .doc-content-area h1 {
      font-size: 2rem;
      color: #1e3a2b;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      line-height: 1.25;
      border-bottom: 2px solid var(--border);
      padding-bottom: 0.5rem;
    }
    .doc-content-area h2 {
      font-size: 1.45rem;
      color: #0f172a;
      margin-top: 2rem;
      margin-bottom: 0.75rem;
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.4rem;
    }
    .doc-content-area h3 {
      font-size: 1.18rem;
      color: #1e293b;
      margin-top: 1.5rem;
      margin-bottom: 0.6rem;
    }
    .doc-content-area p {
      margin-bottom: 1rem;
    }
    .doc-content-area ul, .doc-content-area ol {
      margin-bottom: 1.25rem;
      padding-left: 1.75rem;
    }
    .doc-content-area li {
      margin-bottom: 0.4rem;
    }
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin: 1.5rem 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    th, td {
      border: 1px solid var(--border);
      padding: 0.75rem 1rem;
      text-align: left;
    }
    th {
      background: #f8fafc;
      font-weight: 700;
      color: #0f172a;
    }
    tr:nth-child(even) td {
      background: #fcfcfd;
    }
    .reader-alert {
      padding: 1rem 1.25rem;
      border-radius: var(--radius);
      margin: 1.5rem 0;
      font-size: 0.95rem;
      line-height: 1.55;
    }
    .reader-alert.note {
      background-color: #eff6ff;
      border-left: 4px solid #3b82f6;
      color: #1e40af;
    }
    .reader-alert.warning {
      background-color: var(--warning-light);
      border-left: 4px solid var(--warning);
      color: #92400e;
    }
    .reader-alert.danger {
      background-color: var(--danger-light);
      border-left: 4px solid var(--danger);
      color: #991b1b;
    }
    .reader-figure {
      margin: 1.5rem 0;
      text-align: center;
    }
    .reader-figure img {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    }
    .reader-figure figcaption {
      margin-top: 0.5rem;
      font-size: 0.85rem;
      color: var(--text-muted);
      font-style: italic;
    }
    .inline-species-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      background: #ecfdf5;
      color: #047857;
      border: 1px solid #a7f3d0;
      padding: 0.05rem 0.5rem;
      border-radius: 9999px;
      font-size: 0.88em;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.15s ease;
      vertical-align: baseline;
      white-space: nowrap;
    }
    .inline-species-chip:hover {
      background: #10b981;
      color: #ffffff;
      border-color: #10b981;
      transform: translateY(-1px);
    }
    .inline-chapter-link {
      color: #047857;
      font-weight: 600;
      text-decoration: underline;
    }
    .inline-chapter-link:hover {
      color: #065f46;
    }
    pre {
      background: #0f172a;
      color: #f8fafc;
      padding: 1rem 1.25rem;
      border-radius: var(--radius);
      overflow-x: auto;
      font-size: 0.88rem;
      margin: 1.25rem 0;
    }
    code {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      background: rgba(0,0,0,0.06);
      padding: 0.15rem 0.35rem;
      border-radius: 4px;
      font-size: 0.88em;
    }
    pre code {
      background: transparent;
      padding: 0;
    }
    blockquote {
      border-left: 4px solid #2d5a42;
      padding-left: 1rem;
      margin: 1.25rem 0;
      color: var(--text-muted);
      font-style: italic;
    }
    hr {
      border: 0;
      border-top: 1px solid var(--border);
      margin: 2rem 0;
    }
    .doc-footer-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 3rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border);
      flex-wrap: wrap;
      gap: 1rem;
    }
    .doc-nav-btn {
      padding: 0.5rem 1rem;
      border-radius: var(--radius);
      font-weight: 600;
      font-size: 0.88rem;
      text-decoration: none;
      background: var(--bg);
      border: 1px solid var(--border);
      color: var(--text-main);
      transition: all 0.2s ease;
    }
    .doc-nav-btn:hover {
      background: #2d5a42;
      color: #fff;
    }
    .doc-nav-btn.primary {
      background: #1e3a2b;
      color: #fff;
    }
    .doc-nav-btn.primary:hover {
      background: #2d5a42;
    }
    @media (max-width: 768px) {
      .doc-card {
        padding: 1.5rem;
      }
      .doc-content-area h1 {
        font-size: 1.5rem;
      }
      .doc-select {
        max-width: 100%;
        width: 100%;
      }
    }
  </style>
</head>
<body>

  <!-- Sticky Live App Banner -->
  <aside class="doc-live-banner" aria-label="Interactive Version Available">
    <div class="doc-live-banner-inner">
      <span class="banner-badge">✨ Live Interactive App</span>
      <span class="banner-text">This monograph is fully integrated into our interactive Field Handbook with 3-photo botanical galleries, transit trailheads, and species cross-linking.</span>
      <a href="../index.html${chapterTargetHash[ch.id] || '#/catalog'}" class="banner-cta">Open in Live App →</a>
    </div>
  </aside>

  <!-- Sticky Header Bar -->
  <header class="doc-sticky-header">
    <div class="doc-nav-left">
      <a href="../index.html${chapterTargetHash[ch.id] || '#/catalog'}" class="doc-btn-back">🍄 Live App Section</a>
      <a href="../index.html#/catalog" class="doc-btn-back">🍄 63 Species Catalog</a>
      <a href="https://powerpig99.github.io/not-a-toe/" class="doc-btn-back" target="_blank" rel="noopener" title="Author Blog (Not a ToE)">🌌 Blog</a>
      <a href="https://powerpig99.github.io/hunting-in-finland/" class="doc-btn-back" target="_blank" rel="noopener" title="Companion Guide: Hunting in Finland">🌲 Hunting Guide</a>
      <select class="doc-select" onchange="if(this.value) window.location.href=this.value" aria-label="Jump to Chapter">
        ${optionsHtml}
      </select>
    </div>
    <div>
      <a href="${ch.file}" class="doc-btn-back" target="_blank" style="background:rgba(255,255,255,0.08); font-weight:normal; font-size:0.8rem;">📄 Raw .md Source</a>
    </div>
  </header>

  <!-- Main Content -->
  <main class="doc-main-container">
    <article class="doc-card">
      <div class="doc-content-area">
        ${staticHtml}
      </div>

      <!-- Navigation Footer -->
      <footer class="doc-footer-nav">
        <div>
          ${prevCh ? `<a href="${prevCh.file.replace(/\.md$/, '.html')}" class="doc-nav-btn">← ${prevCh.icon} Prev Chapter</a>` : `<a href="../index.html#/catalog" class="doc-nav-btn">← Main Catalog</a>`}
        </div>
        <div>
          <button onclick="window.scrollTo({top:0, behavior:'smooth'})" class="doc-nav-btn" style="cursor:pointer;">↑ Top</button>
        </div>
        <div>
          ${nextCh ? `<a href="${nextCh.file.replace(/\.md$/, '.html')}" class="doc-nav-btn primary">${nextCh.icon} Next Chapter →</a>` : `<a href="../index.html#/catalog" class="doc-nav-btn primary">Complete Guide ✓</a>`}
        </div>
      </footer>
    </article>
  </main>

  <footer style="background:#182e22; color:rgba(255,255,255,0.7); text-align:center; padding:2rem 1rem; font-size:0.88rem;">
    <p>🍄 <strong>The Definitive Guide to Mushroom Foraging in Helsinki & Uusimaa</strong></p>
    <p style="margin-top:0.5rem;">
      <a href="../index.html" style="color:#a7f3d0;">Home Portal</a> • 
      <a href="../index.html${chapterTargetHash[ch.id] || '#/catalog'}" style="color:#a7f3d0;">Live App Section</a> • 
      <a href="https://powerpig99.github.io/not-a-toe/" style="color:#a7f3d0;" target="_blank" rel="noopener">Not a ToE Blog</a> • 
      <a href="https://powerpig99.github.io/hunting-in-finland/" style="color:#a7f3d0;" target="_blank" rel="noopener">Hunting in Finland</a> • 
      <a href="https://github.com/powerpig99/helsinki-mushroom-guide" style="color:#a7f3d0;" target="_blank" rel="noopener">GitHub</a>
    </p>
  </footer>

</body>
</html>`;

  const outPath = path.join(docsDir, ch.file.replace(/\.md$/, '.html'));
  fs.writeFileSync(outPath, fullStaticDoc, 'utf8');
  console.log(`Generated docs/${ch.file.replace(/\.md$/, '.html')}`);
});

// Write handbook_data.js at repoDir
const handbookDataContent = `// Precompiled Live Handbook Database (9 Chapters)
// Auto-generated by build_docs_html.js - DO NOT EDIT DIRECTLY

const HANDBOOK_DATA = {
  chapters: ${JSON.stringify(handbookDataChapters, null, 2)}
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { HANDBOOK_DATA };
}
`;

const handbookDataPath = path.join(repoDir, 'handbook_data.js');
fs.writeFileSync(handbookDataPath, handbookDataContent, 'utf8');
console.log(`Generated handbook_data.js (${handbookDataChapters.length} chapters, ${(handbookDataContent.length / 1024).toFixed(1)} KB)`);

// Also update overview.html
const readmePath = path.join(repoDir, 'README.md');
if (fs.existsSync(readmePath)) {
  const readmeMd = fs.readFileSync(readmePath, 'utf8');
  const parsedReadme = parseMarkdown(readmeMd, false);

  const overviewHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Overview & Complete Guide | Helsinki Mushroom Guide (赫尔辛基野菌指南)</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    body {
      background-color: var(--bg);
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
    }
    .doc-live-banner {
      background: linear-gradient(90deg, #1e3a2b 0%, #064e3b 100%);
      color: #ffffff;
      padding: 0.65rem 1.25rem;
      border-bottom: 1px solid rgba(52, 211, 153, 0.3);
      position: sticky;
      top: 0;
      z-index: 101;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    .doc-live-banner-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .banner-badge {
      background: rgba(16, 185, 129, 0.25);
      color: #6ee7b7;
      font-size: 0.76rem;
      font-weight: 700;
      padding: 0.2rem 0.55rem;
      border-radius: 9999px;
      border: 1px solid rgba(52, 211, 153, 0.4);
      white-space: nowrap;
    }
    .banner-text {
      font-size: 0.86rem;
      color: #e2e8f0;
      flex: 1;
      min-width: 260px;
    }
    .banner-cta {
      background: #10b981;
      color: #ffffff;
      font-weight: 700;
      font-size: 0.82rem;
      text-decoration: none;
      padding: 0.35rem 0.85rem;
      border-radius: 6px;
      white-space: nowrap;
      transition: all 0.15s ease;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }
    .banner-cta:hover {
      background: #059669;
      transform: translateY(-1px);
    }
    .doc-sticky-header {
      background: #182e22;
      backdrop-filter: blur(12px);
      padding: 0.75rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .doc-nav-left {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }
    .doc-btn-back {
      color: #fff;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-weight: 600;
      font-size: 0.88rem;
      padding: 0.4rem 0.85rem;
      background: rgba(255, 255, 255, 0.12);
      border-radius: var(--radius);
      transition: all 0.2s ease;
    }
    .doc-btn-back:hover {
      background: #2d5a42;
      color: #fff;
      transform: translateX(-2px);
    }
    .doc-main-container {
      max-width: 960px;
      margin: 2rem auto;
      padding: 0 1.25rem 4rem;
      flex: 1;
      width: 100%;
    }
    .doc-card {
      background: #ffffff;
      border-radius: var(--radius);
      padding: 2.5rem 3rem;
      box-shadow: var(--shadow);
      border: 1px solid var(--border);
    }
    .doc-content-area {
      line-height: 1.75;
      font-size: 1.02rem;
      color: #334155;
    }
    .doc-content-area h1 {
      font-size: 2rem;
      color: #1e3a2b;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      line-height: 1.25;
      border-bottom: 2px solid var(--border);
      padding-bottom: 0.5rem;
    }
    .doc-content-area h2 {
      font-size: 1.45rem;
      color: #0f172a;
      margin-top: 2rem;
      margin-bottom: 0.75rem;
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.4rem;
    }
    .table-container {
      width: 100%;
      overflow-x: auto;
      margin: 1.5rem 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    th, td {
      border: 1px solid var(--border);
      padding: 0.75rem 1rem;
      text-align: left;
    }
    th {
      background: #f8fafc;
      font-weight: 700;
      color: #0f172a;
    }
    .reader-figure img {
      max-width: 100%;
      border-radius: 8px;
    }
    .inline-species-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      background: #ecfdf5;
      color: #047857;
      border: 1px solid #a7f3d0;
      padding: 0.05rem 0.5rem;
      border-radius: 9999px;
      font-size: 0.88em;
      text-decoration: none;
      font-weight: 600;
    }
  </style>
</head>
<body>

  <!-- Sticky Live App Banner -->
  <aside class="doc-live-banner" aria-label="Interactive Version Available">
    <div class="doc-live-banner-inner">
      <span class="banner-badge">✨ Live Interactive App</span>
      <span class="banner-text">Explore the Helsinki Mushroom Guide with live 3-photo botanical galleries, HSL transit filters & field handbook.</span>
      <a href="index.html#/catalog" class="banner-cta">Open Live Interactive App →</a>
    </div>
  </aside>

  <header class="doc-sticky-header">
    <div class="doc-nav-left">
      <a href="index.html#/catalog" class="doc-btn-back">🍄 Live App Catalog</a>
      <a href="index.html#/habitats" class="doc-btn-back">🌲 Habitats & Trees</a>
      <a href="https://powerpig99.github.io/not-a-toe/" class="doc-btn-back" target="_blank" rel="noopener" title="Author Blog (Not a ToE)">🌌 Blog</a>
      <a href="https://powerpig99.github.io/hunting-in-finland/" class="doc-btn-back" target="_blank" rel="noopener" title="Companion Guide: Hunting in Finland">🌲 Hunting Guide</a>
    </div>
    <div>
      <a href="README.md" class="doc-btn-back" target="_blank" style="background:rgba(255,255,255,0.08); font-weight:normal; font-size:0.8rem;">📄 Raw README.md</a>
    </div>
  </header>

  <main class="doc-main-container">
    <article class="doc-card">
      <div class="doc-content-area">
        ${parsedReadme}
      </div>
    </article>
  </main>

  <footer style="background:#182e22; color:rgba(255,255,255,0.7); text-align:center; padding:2rem 1rem; font-size:0.88rem;">
    <p>🍄 <strong>The Definitive Guide to Mushroom Foraging in Helsinki & Uusimaa</strong></p>
    <p style="margin-top:0.5rem;">
      <a href="index.html" style="color:#a7f3d0;">Home Portal</a> • 
      <a href="https://powerpig99.github.io/not-a-toe/" style="color:#a7f3d0;" target="_blank" rel="noopener">Not a ToE Blog</a> • 
      <a href="https://powerpig99.github.io/hunting-in-finland/" style="color:#a7f3d0;" target="_blank" rel="noopener">Hunting in Finland</a> • 
      <a href="https://github.com/powerpig99/helsinki-mushroom-guide" style="color:#a7f3d0;" target="_blank" rel="noopener">GitHub</a>
    </p>
  </footer>

</body>
</html>`;

  fs.writeFileSync(path.join(repoDir, 'overview.html'), overviewHtml, 'utf8');
  console.log('Generated overview.html');
}

console.log('Done compiling all documentation and generating handbook_data.js!');
