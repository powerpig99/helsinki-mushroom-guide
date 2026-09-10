// Trilingual Internationalization Database (English, 中文, Suomi)
// Helsinki Wild Mushroom Foraging Guide

const I18N = {
  // Current active language (default to 'en')
  currentLang: "en",
  // Optional secondary comparison language (null or 'en', 'zh', 'fi')
  secondaryLang: null,

  // UI Strings
  ui: {
    en: {
      siteBadge: "🇫🇮 Helsinki & Uusimaa Mycological Companion",
      siteTitle: "Helsinki Wild Mushroom Guide",
      siteSubtitle: "A definitive, safety-first field guide for foraging wild mushrooms across the hemiboreal forests of the Helsinki Metropolitan Area — a live record of living the philosophy. Explore the journey on <a href=\"https://powerpig99.github.io/not-a-toe/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"blog-subtitle-link\">Not a ToE</a>.",
      emergencyTitle: "Poisoning Emergency? Call Finnish Poison Information Centre",
      emergencySubtitle: "Free 24/7 service across Finland: 0800 147 111 • General Emergency: 112",
      callPoison: "📞 Call 0800 147 111",
      call112: "🚨 Call 112",
      tabCatalog: "🍄 Species Identification (22)",
      tabLookalikes: "⚖️ Lookalike Comparator",
      tabCooking: "🍳 Cooking & Prep Guide",
      tabSpots: "🚌 Helsinki HSL Spots",
      tabSafety: "🛡️ Safety & Everyman's Right",
      searchPlaceholder: "Search by Finnish, Latin, English, Chinese, or traits (e.g. spines, pores)...",
      skillLevelLabel: "Skill Level:",
      monthFilterLabel: "Fruiting Month:",
      allLevels: "All Species",
      beginnerLevel: "Beginner-Safe",
      intermediateLevel: "Intermediate",
      advancedLevel: "Advanced",
      deadlyLevel: "Deadly Toxic",
      noResultsTitle: "No matching mushrooms found",
      noResultsDesc: "Try clearing your search term or selecting a different month/skill filter.",
      underCapLabel: "Under-Cap:",
      capLabel: "Cap:",
      stemLabel: "Stem:",
      odorLabel: "Aroma:",
      skillTag: "Skill:",
      refId: "Ref ID:",
      safeBadge: "Safe / Edible",
      dangerBadge: "Danger / Avoid",
      badgeChoice: "Choice Edible",
      badgeGood: "Good Edible",
      badgeEdible: "Edible",
      badgeParboil: "Must Parboil (!)",
      badgeDeadly: "DEADLY TOXIC",
      badgeInedible: "Inedible",
      backToCatalog: "← Back",
      whereWhenTitle: "📍 When & Where to Find (Helsinki & Uusimaa)",
      searchTacticsTitle: "👁️ Search Tactics & Eye Training",
      lookalikesTitle: "⚠️ Lookalikes & Pitfalls to Pay Attention to",
      cookingTitle: "🍳 Culinary Preparation & Recipes",
      anatomyTitle: "🔍 Field Diagnostic Checklist",
      swipeHint: "Swipe photo left / right for more angles",
      viewDetails: "Read Full Field Guide →",
      readRecipe: "View Recipe & Steps",
      popularTrailLabel: "Popular Trail",
      startingPointLabel: "Starting Point",
      openMapBtn: "Directions",
      primeLocationTitle: "Prime Foraging Trailhead",
      watchVideoBtn: "Watch on YouTube",
      watchRecipeVideoBtn: "Watch Recipe Video",
      videoGuideBadge: "Video Tutorial",
      prepTime: "Prep:",
      cookTime: "Cook:",
      servings: "Servings:",
      footerNote: "Helsinki Mushroom Foraging Companion • Built for local biodiversity and safe foraging in Uusimaa.",
      footerDisclaimer: "Always verify specimens with 100% certainty before consumption. Emergency: 112 • Poison Center: 0800 147 111."
    },
    zh: {
      siteBadge: "🇫🇮 芬兰赫尔辛基与乌西玛大区野生真菌野外手册",
      siteTitle: "赫尔辛基野生蘑菇采摘与鉴别指南",
      siteSubtitle: "专为大赫尔辛基地区森林生态定制的权威安全野生真菌采摘指南 —— 践行生活哲学的鲜活实录。阅读更多哲学实录请访问博客：<a href=\"https://powerpig99.github.io/not-a-toe/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"blog-subtitle-link\">Not a ToE</a>。",
      emergencyTitle: "疑似蘑菇中毒？立即致电芬兰中毒信息中心",
      emergencySubtitle: "全芬兰24小时免费求助电话：0800 147 111 • 急救电话：112",
      callPoison: "📞 致电 0800 147 111",
      call112: "🚨 拨打急救 112",
      tabCatalog: "🍄 物种鉴别目录 (22种)",
      tabLookalikes: "⚖️ 危险近缘种对比",
      tabCooking: "🍳 烹饪处理与经典食谱",
      tabSpots: "🚌 赫尔辛基地铁公交采摘点",
      tabSafety: "🛡️ 安全法则与自然公共权",
      searchPlaceholder: "输入中文（如鸡油菌）、芬兰语、学名、特征（如菌刺、菌孔）搜索...",
      skillLevelLabel: "采摘难度:",
      monthFilterLabel: "出菇月份:",
      allLevels: "全部物种",
      beginnerLevel: "新手极安全",
      intermediateLevel: "进阶食用",
      advancedLevel: "资深/需处理",
      deadlyLevel: "致命剧毒",
      noResultsTitle: "未找到匹配的蘑菇",
      noResultsDesc: "请尝试清除搜索关键词，或切换不同的月份/难度筛选器。",
      underCapLabel: "菌盖下方:",
      capLabel: "菌盖形态:",
      stemLabel: "菌柄特征:",
      odorLabel: "气味特征:",
      skillTag: "难度等级:",
      refId: "物种编号:",
      safeBadge: "安全 / 可食用",
      dangerBadge: "危险 / 严禁采食",
      badgeChoice: "顶级美味 (***)",
      badgeGood: "优质食用 (**)",
      badgeEdible: "普通食用 (*)",
      badgeParboil: "必须焯水去毒 (!)",
      badgeDeadly: "致命剧毒 (☠️)",
      badgeInedible: "不可食用/极苦",
      backToCatalog: "← Back",
      whereWhenTitle: "📍 采摘时令与地点（赫尔辛基及近郊）",
      searchTacticsTitle: "👁️ 森林实战寻菇技巧与眼力训练",
      lookalikesTitle: "⚠️ 易混淆近缘种与防毒鉴别核心",
      cookingTitle: "🍳 烹饪预处理、焯水排毒与储藏",
      anatomyTitle: "🔍 野外宏观解剖特征诊断清单",
      swipeHint: "左右滑动图片查看不同角度与解剖细节",
      viewDetails: "阅读专属详细指南 →",
      readRecipe: "查看烹饪步骤",
      popularTrailLabel: "热门步道",
      startingPointLabel: "出发起点",
      openMapBtn: "地图导航",
      primeLocationTitle: "推荐采摘路线与起点",
      watchVideoBtn: "观看视频教学",
      watchRecipeVideoBtn: "观看食谱教学",
      videoGuideBadge: "视频示范",
      prepTime: "准备时间:",
      cookTime: "烹饪时间:",
      servings: "分量:",
      footerNote: "赫尔辛基野外采菇指南 • 旨在促进当地生物多样性认知与安全森林采摘实践。",
      footerDisclaimer: "入口前必须有100%的鉴别把握！若有丝毫疑虑严禁食用。芬兰急救电话：112 • 芬兰中毒中心：0800 147 111。"
    },
    fi: {
      siteBadge: "🇫🇮 Helsingin ja Uudenmaan sienestäjän maasto-opas",
      siteTitle: "Helsingin Paikallinen Sieniopas",
      siteSubtitle: "Kattava ja turvallisuuslähtöinen opas villisienestykseen pääkaupunkiseudun metsissä — elävää filosofiaa käytännön tekoina. Tutustu matkaan blogissa <a href=\"https://powerpig99.github.io/not-a-toe/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"blog-subtitle-link\">Not a ToE</a>.",
      emergencyTitle: "Epäiletkö sienimyrkytystä? Soita Myrkytystietokeskukseen",
      emergencySubtitle: "Maksuton 24/7-neuvonta koko maassa: 0800 147 111 • Yleinen hätänumero: 112",
      callPoison: "📞 Soita 0800 147 111",
      call112: "🚨 Soita 112",
      tabCatalog: "🍄 Lajiluettelo ja tunnistus (22)",
      tabLookalikes: "⚖️ Näköislajien vertailu",
      tabCooking: "🍳 Käsittely ja perinteiset reseptit",
      tabSpots: "🚌 HSL-bussilla ja junalla sieneen",
      tabSafety: "🛡️ Turvaohjeet ja jokaisenoikeudet",
      searchPlaceholder: "Hae suomalaisella tai tieteellisellä nimellä, piirteillä (esim. heltat, pillit)...",
      skillLevelLabel: "Taitotaso:",
      monthFilterLabel: "Satokuukausi:",
      allLevels: "Kaikki lajit",
      beginnerLevel: "Aloittelijalle varma",
      intermediateLevel: "Kokeneemmalle",
      advancedLevel: "Vaatii esikäsittelyn",
      deadlyLevel: "Tappavan myrkyllinen",
      noResultsTitle: "Yhtään sientä ei löytynyt",
      noResultsDesc: "Kokeile tyhjentää hakukenttä tai vaihtaa kuukautta tai taitotasoa.",
      underCapLabel: "Lakin alapinta:",
      capLabel: "Lakki:",
      stemLabel: "Jalka:",
      odorLabel: "Tuoksu:",
      skillTag: "Vaativuus:",
      refId: "Lajitunnus:",
      safeBadge: "Turvallinen ruokasieni",
      dangerBadge: "Varoitus / Myrkyllinen",
      badgeChoice: "Erinomainen (***)",
      badgeGood: "Hyvä (**)",
      badgeEdible: "Syötävä (*)",
      badgeParboil: "Ryöpättävä (!)",
      badgeDeadly: "TAPPAVAN MYRKYLLINEN",
      badgeInedible: "Kelvoton / Karvas",
      backToCatalog: "← Back",
      whereWhenTitle: "📍 Milloin ja mistä löytää pääkaupunkiseudulla",
      searchTacticsTitle: "👁️ Etsintävinkit ja maastotaktiikka",
      lookalikesTitle: "⚠️ Näköislajit ja vaaranpaikat",
      cookingTitle: "🍳 Käsittely, ruoanvalmistus ja säilöntä",
      anatomyTitle: "🔍 Tuntomerkkiluettelo maastossa",
      swipeHint: "Pyyhkäise kuvaa vasemmalle tai oikealle",
      viewDetails: "Avaa lajin oma kenttäopas →",
      readRecipe: "Katso valmistusohje",
      popularTrailLabel: "Suositeltu reitti",
      startingPointLabel: "Lähtöpiste",
      openMapBtn: "Avaa kartta",
      primeLocationTitle: "Paras maastoreitti & lähtöpiste",
      watchVideoBtn: "Katso video",
      watchRecipeVideoBtn: "Katso videoresepti",
      videoGuideBadge: "Videolinkki",
      prepTime: "Esivalmistelu:",
      cookTime: "Kypsennys:",
      servings: "Annosmäärä:",
      footerNote: "Helsingin Paikallinen Sieniopas • Luotu Uudenmaan luonnon ja turvallisen sienestyksen tueksi.",
      footerDisclaimer: "Syö vain 100 % varmuudella tuntemiasi sieniä. Hätänumero: 112 • Myrkytystietokeskus: 0800 147 111."
    }
  },

  // Months labels
  months: {
    en: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    zh: ["5月", "6月", "7月", "8月", "9月", "10月", "11月"],
    fi: ["Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras"]
  },

  // Direct Lookalike Relationships between Catalog Species
  lookalikeMap: {
    cantharellus_cibarius: ["hygrophoropsis_aurantiaca"],
    craterellus_tubaeformis: ["cortinarius_rubellus"],
    craterellus_cornucopioides: ["craterellus_tubaeformis"],
    hydnum_repandum: ["albatrellus_ovinus"],
    boletus_edulis: ["tylopilus_felleus", "boletus_pinophilus"],
    boletus_pinophilus: ["tylopilus_felleus", "boletus_edulis"],
    leccinum_versipelle: ["boletus_edulis"],
    albatrellus_ovinus: ["hydnum_repandum"],
    cortinarius_caperatus: ["cortinarius_rubellus"],
    lactarius_deliciosus: ["lactarius_torminosus"],
    lactarius_torminosus: ["lactarius_deliciosus", "lactarius_rufus"],
    lactarius_rufus: ["cortinarius_rubellus", "lactarius_torminosus"],
    russula_decolorans: ["russula_emetica"],
    russula_emetica: ["russula_decolorans"],
    hygrophoropsis_aurantiaca: ["cantharellus_cibarius"],
    tylopilus_felleus: ["boletus_edulis", "boletus_pinophilus"],
    amanita_virosa: ["cortinarius_caperatus", "albatrellus_ovinus"],
    cortinarius_rubellus: ["craterellus_tubaeformis", "lactarius_rufus"],
    galerina_marginata: ["craterellus_tubaeformis"],
    gyromitra_esculenta: ["craterellus_cornucopioides"],
    paxillus_involutus: ["lactarius_rufus", "lactarius_torminosus"],
    amanita_muscaria: ["amanita_virosa"]
  },

  // Recommended Foraging Locations, Popular Trails, and Starting Point Trailheads
  foragingLocations: {
    nuuksio_haukkalampi: {
      id: "nuuksio_haukkalampi",
      areaName: {
        en: "Nuuksio National Park (Haukkalampi)",
        zh: "努克西奥国家公园（豪卡湖区）",
        fi: "Nuuksion kansallispuisto (Haukkalampi)"
      },
      popularTrail: {
        en: "Korpinkierros Trail (Raven Loop, 7.2 km)",
        zh: "Korpinkierros 乌鸦环线步道（7.2公里）",
        fi: "Korpinkierros (7,2 km)"
      },
      startingPoint: {
        en: "Haukkalammen luontotupa / Parking (Haukkalammentie 32, Espoo)",
        zh: "Haukkalammen luontotupa 自然小屋与停车场（Haukkalammentie 32, Espoo）",
        fi: "Haukkalammen luontotupa / P-alue (Haukkalammentie 32, Espoo)"
      },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo"
    },
    nuuksio_kattila: {
      id: "nuuksio_kattila",
      areaName: {
        en: "Nuuksio National Park (Kattila)",
        zh: "努克西奥国家公园（卡蒂拉林区）",
        fi: "Nuuksion kansallispuisto (Kattila)"
      },
      popularTrail: {
        en: "Kattilanjärvi Wilderness Trail",
        zh: "Kattilanjärvi 湖畔荒野步道",
        fi: "Kattilanjärven polkuverkosto"
      },
      startingPoint: {
        en: "Kattila Parking / Bus 245A Terminus (Kattilantie 424, Espoo)",
        zh: "Kattila 停车场 / 245A公交车终点站（Kattilantie 424, Espoo）",
        fi: "Kattilan P-alue / Bussi 245A päätepysäkki (Kattilantie 424, Espoo)"
      },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Kattila+Nuuksio"
    },
    sipoonkorpi_kuusijarvi: {
      id: "sipoonkorpi_kuusijarvi",
      areaName: {
        en: "Sipoonkorpi National Park (Kuusijärvi)",
        zh: "西波国家森林公园（库西湖林区）",
        fi: "Sipoonkorven kansallispuisto (Kuusijärvi)"
      },
      popularTrail: {
        en: "Kuusijärvi–Bisajärvi Trail via Sudentassu Bridge (Kalkkiruukki Loop)",
        zh: "经狼爪桥（Sudentassu）前往Bisajärvi湖畔林区步道",
        fi: "Kuusijärvi–Bisajärvi-reitti Sudentassu-sillan kautta (Kalkkiruukin kierros)"
      },
      startingPoint: {
        en: "Kuusijärvi Outdoor Center / Parking (Kuusijärventie 3, Vantaa)",
        zh: "Kuusijärvi 户外活动中心与停车场（Kuusijärventie 3, Vantaa）",
        fi: "Kuusijärven ulkoilualue / P-alue (Kuusijärventie 3, Vantaa)"
      },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Kuusij%C3%A4rven+ulkoilualue"
    },
    sipoonkorpi_bakunkarr: {
      id: "sipoonkorpi_bakunkarr",
      areaName: {
        en: "Sipoonkorpi National Park (Bakunkärr)",
        zh: "西波国家森林公园（巴昆克尔林区）",
        fi: "Sipoonkorven kansallispuisto (Bakunkärr)"
      },
      popularTrail: {
        en: "Bakunkärr Old Spruce Trail (2 km)",
        zh: "Bakunkärr 老龄云杉环线步道（2公里）",
        fi: "Bakunkärrin kierros (2 km)"
      },
      startingPoint: {
        en: "Knutersintie Parking Area (Knutersintie 256, Sipoo)",
        zh: "Knutersintie 森林停车场（Knutersintie 256, Sipoo）",
        fi: "Knutersintien P-alue (Knutersintie 256, Sipoo)"
      },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Knutersintie+256+Sipoo"
    },
    keskuspuisto_paloheina: {
      id: "keskuspuisto_paloheina",
      areaName: {
        en: "Central Park (Paloheinä)",
        zh: "赫尔辛基中央公园（帕罗黑奈）",
        fi: "Helsingin Keskuspuisto (Paloheinä)"
      },
      popularTrail: {
        en: "Paloheinä Nature Trail & Forest Loop",
        zh: "Paloheinä 自然森林环线步道与榛树小径",
        fi: "Paloheinän luontopolku & ulkoilureitti"
      },
      startingPoint: {
        en: "Paloheinän maja / Parking (Pakilantie 124, Helsinki)",
        zh: "Paloheinän maja 森林小筑与停车场（Pakilantie 124, Helsinki）",
        fi: "Paloheinän maja / P-alue (Pakilantie 124, Helsinki)"
      },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Palohein%C3%A4n+maja+Helsinki"
    },
    keskuspuisto_pitkakoski: {
      id: "keskuspuisto_pitkakoski",
      areaName: {
        en: "Central Park (Pitkäkoski Ravine)",
        zh: "赫尔辛基中央公园（皮特凯考斯基峡谷）",
        fi: "Helsingin Keskuspuisto (Pitkäkoski)"
      },
      popularTrail: {
        en: "Pitkäkoski River Ravine & Nature Reserve Trail",
        zh: "Pitkäkoski 河畔峡谷自然步道",
        fi: "Pitkäkosken rantarinteiden ulkoilureitti"
      },
      startingPoint: {
        en: "Pitkäkosken ulkoilumaja / Parking (Kuninkaantammentie 19, Helsinki)",
        zh: "Pitkäkosken ulkoilumaja 户外小屋与停车场（Kuninkaantammentie 19, Helsinki）",
        fi: "Pitkäkosken ulkoilumaja / P-alue (Kuninkaantammentie 19, Helsinki)"
      },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Pitk%C3%A4kosken+ulkoilumaja"
    },
    luukki: {
      id: "luukki",
      areaName: {
        en: "Luukki Outdoor Area (North Espoo)",
        zh: "北埃斯波卢基自然森林区",
        fi: "Luukin ulkoilualue (Pohjois-Espoo)"
      },
      popularTrail: {
        en: "Seitsemän lammen reitti (Seven Ponds Trail, 8.6 km)",
        zh: "Seitsemän lammen reitti 七湖环线步道（8.6公里）",
        fi: "Seitsemän lammen reitti (8,6 km)"
      },
      startingPoint: {
        en: "Luukin kartano / Parking (Luukintie 33, Espoo)",
        zh: "Luukin kartano 庄园主停车场（Luukintie 33, Espoo）",
        fi: "Luukin kartanon P-alue (Luukintie 33, Espoo)"
      },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Luukin+kartano+Espoo"
    },
    petikko: {
      id: "petikko",
      areaName: {
        en: "Petikko & Vestra Woodlands",
        zh: "万塔佩蒂克与韦斯特拉林区",
        fi: "Petikon ulkoilualue (Vantaa)"
      },
      popularTrail: {
        en: "Petikko Nature Trail & Hazel Groves Path",
        zh: "Petikko 榛树阔叶林自然步道",
        fi: "Petikon luontopolku & ulkoilureitti"
      },
      startingPoint: {
        en: "Petikon ulkoilualue / Parking (Tallimäentie 2, Vantaa)",
        zh: "Petikon ulkoilualue 停车场（Tallimäentie 2, Vantaa）",
        fi: "Petikon ulkoilualue / P-alue (Tallimäentie 2, Vantaa)"
      },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Petikon+ulkoilualue+Vantaa"
    },
    uutela: {
      id: "uutela",
      areaName: {
        en: "Uutela Coastal Forest",
        zh: "东赫尔辛基乌特拉海滨森林公园",
        fi: "Uutelan rantametsä (Vuosaari)"
      },
      popularTrail: {
        en: "Uutela Nature Trail (Kluuvit ja rantaniityt Loop, 3.8 km)",
        zh: "Uutela 海滨自然步道环线（3.8公里）",
        fi: "Uutelan luontopolku (3,8 km)"
      },
      startingPoint: {
        en: "Kahvila Kampela / Uutela Parking (Pursilahdenranta 1, Helsinki)",
        zh: "Kahvila Kampela / Uutela 入口停车场（Pursilahdenranta 1, Helsinki）",
        fi: "Kahvila Kampela / Uutelan P-alue (Pursilahdenranta 1, Helsinki)"
      },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Kahvila+Kampela+Helsinki"
    }
  },

  // Map each catalog species to its prime foraging trailhead
  speciesLocations: {
    cantharellus_cibarius: "nuuksio_haukkalampi",
    craterellus_tubaeformis: "sipoonkorpi_kuusijarvi",
    hydnum_repandum: "luukki",
    craterellus_cornucopioides: "keskuspuisto_paloheina",
    boletus_edulis: "sipoonkorpi_kuusijarvi",
    boletus_pinophilus: "uutela",
    amanita_virosa: "nuuksio_haukkalampi",
    cortinarius_rubellus: "sipoonkorpi_kuusijarvi",
    galerina_marginata: "keskuspuisto_pitkakoski",
    gyromitra_esculenta: "sipoonkorpi_kuusijarvi",
    paxillus_involutus: "keskuspuisto_paloheina",
    lactarius_torminosus: "keskuspuisto_paloheina",
    lactarius_rufus: "nuuksio_kattila",
    lactarius_deliciosus: "uutela",
    russula_decolorans: "luukki",
    russula_emetica: "luukki",
    cortinarius_caperatus: "nuuksio_haukkalampi",
    albatrellus_ovinus: "sipoonkorpi_bakunkarr",
    leccinum_versipelle: "petikko",
    hygrophoropsis_aurantiaca: "nuuksio_haukkalampi",
    tylopilus_felleus: "nuuksio_haukkalampi",
    amanita_muscaria: "keskuspuisto_paloheina"
  },

  // Authentic YouTube Cooking & Preparation Video Tutorials for Edible Species
  cookingVideos: {
    cantharellus_cibarius: {
      url: "https://www.youtube.com/watch?v=0TysiLgHhd4",
      title: {
        en: "How to Make Finnish Chanterelle Cream Sauce (Kantarellikastike)",
        zh: "经典芬兰奶油鸡油菌浓汁制作教学 (Kantarellikastike)",
        fi: "Klassisen kermaisen kantarellikastikkeen valmistus"
      }
    },
    craterellus_tubaeformis: {
      url: "https://www.youtube.com/watch?v=-fyPqfJxX5s",
      title: {
        en: "How to Cook Funnel Chanterelle Soup from Dried & Fresh Mushrooms",
        zh: "北欧漏斗鸡油菌汤烹饪教学（干菇泡发与烹饪）",
        fi: "Suppilovahverokeitto kuivatuista tai tuoreista sienistä"
      }
    },
    hydnum_repandum: {
      url: "https://www.youtube.com/watch?v=BqxMFHyYvOQ",
      title: {
        en: "Cleaning & Pan-Frying Hedgehog Mushrooms (Vaaleaorakas)",
        zh: "卷缘齿菌清洁与黄油香煎脆菇热三明治 (Vaaleaorakas)",
        fi: "Vaaleaorakkaan käsittely ja paistaminen pannulla"
      }
    },
    craterellus_cornucopioides: {
      url: "https://www.youtube.com/watch?v=hepze8cMwVo",
      title: {
        en: "Black Trumpet Mushroom Soup & Dehydration Cooking (Mustatorvisieni)",
        zh: "黑号角菇浓汤烹制与风干脱水食用技巧 (Mustatorvisieni)",
        fi: "Mustatorvisienikeitto ja kuivattujen torvisienten käyttö"
      }
    },
    boletus_edulis: {
      url: "https://www.youtube.com/watch?v=XWB5C1ludQc",
      title: {
        en: "How to Clean & Pan-Sear Fresh Porcini in Garlic Butter",
        zh: "鲜采牛肝菌（美味牛肝菌）处理与大蒜黄油香煎法",
        fi: "Tuoreiden herkkutattien puhdistus ja paistaminen voissa"
      }
    },
    boletus_pinophilus: {
      url: "https://www.youtube.com/watch?v=XWB5C1ludQc",
      title: {
        en: "Cooking Fresh Pine Boletes (Männynherkkutatti)",
        zh: "松生牛肝菌厚切香煎与森林野味搭配 (Männynherkkutatti)",
        fi: "Männynherkkutattien valmistus ja paistaminen"
      }
    },
    gyromitra_esculenta: {
      url: "https://www.youtube.com/watch?v=kyf3FQOgyKQ",
      title: {
        en: "Official Finnish False Morel Double-Parboiling Detoxification & Omelette",
        zh: "芬兰官方鹿花菌二次沸水焯水脱毒流程与滑蛋做法",
        fi: "Korvasienien turvallinen ryöppäys ja korvasienimunakas"
      }
    },
    lactarius_torminosus: {
      url: "https://www.youtube.com/watch?v=RQR7FLnapZo",
      title: {
        en: "Parboiling Milkcaps & Making Traditional Finnish Mushroom Salad (Sienisalaatti)",
        zh: "白汁乳菇焯水去毒与芬兰经典传统酸奶油沙拉做法",
        fi: "Karvarouskun ryöppäys ja perinteinen sienisalaatti"
      }
    },
    lactarius_rufus: {
      url: "https://www.youtube.com/watch?v=6F67wBKOv0c",
      title: {
        en: "How to Parboil & Salt Northern Forest Milkcaps (Rouskujen ryöppäys)",
        zh: "芬兰森林乳菇沸水滚煮排毒法（Ryöppäys）与盐渍储藏",
        fi: "Metsärouskujen oikeaoppinen ryöppäys runsaassa vedessä"
      }
    },
    lactarius_deliciosus: {
      url: "https://www.youtube.com/watch?v=DtfIopmfpic",
      title: {
        en: "Traditional Pan-Fried Saffron Milkcaps (No Boiling Required)",
        zh: "经典大蒜欧芹香煎松乳菇做法（无需焯水，直接下锅）",
        fi: "Perinteinen leppärouskujen paistaminen pannulla (ilman ryöppäystä)"
      }
    },
    russula_decolorans: {
      url: "https://www.youtube.com/watch?v=RQd0Mli8SZc",
      title: {
        en: "How to Sauté Mild Brittlegills & Forest Mushrooms in Natural Juices",
        zh: "温和红菇与野菇干锅出汁香煎技术 (Haperot)",
        fi: "Haperoiden ja villisienien haudutus omassa liemessään"
      }
    },
    cortinarius_caperatus: {
      url: "https://www.youtube.com/watch?v=GgDhElL30YE",
      title: {
        en: "Cooking Gypsy Mushrooms in Butter & Cream (Kehnäsieni)",
        zh: "皱盖罗鳞伞（隐花丝膜菌）黄油煎制与奶油炖法",
        fi: "Kehnäsienen tunnistus, puhdistus ja ruoanvalmistus"
      }
    },
    albatrellus_ovinus: {
      url: "https://www.youtube.com/watch?v=EM_DzS2lVZ8",
      title: {
        en: "Cooking Sheep Polypore: Breaded Forest Cutlet & Soup (Lampaankääpä)",
        zh: "地花孔菌（羊孔菌）香脆素肉排与浓汤烹饪教学",
        fi: "Lampaankäävän valmistus leikkeeksi ja keitoksi"
      }
    },
    leccinum_versipelle: {
      url: "https://www.youtube.com/watch?v=XWB5C1ludQc",
      title: {
        en: "Thorough 20-Minute Cooking Rule for Leccinum Birch Boletes",
        zh: "白桦疣柄牛肝菌必须彻底加热20分钟烹饪演示",
        fi: "Punikkitattien turvallinen ja perusteellinen kypsennys"
      }
    }
  },

  // Species Data (Trilingual Content)
  species: [
    {
      id: "cantharellus_cibarius",
      latinName: "Cantharellus cibarius",
      whereWhen: {"en": "Fruiting from early July until October, with peak flushes following warm late-summer rains in August. Thrives along mossy trails, shaded slope margins, granite outcrop crevices, and mixed spruce-birch heaths (tuore kangas). Prime spots: Keskuspuisto (Paloheinä & Pirkkola), Nuuksio (around Haukkalampi slopes), and Luukki forest borders.", "zh": "7月上旬一直出菇至10月，8月下旬夏末温暖雷雨后迎来大爆发。最喜在光线柔和的步道两旁苔藓坡、花岗岩岩缝台地以及云杉-白桦混交林边缘生长。大赫尔辛基重点出菇地：中央公园Paloheinä林区、Nuuksio国家公园Haukkalampi环湖山坡、Luukki休闲森林小径旁。", "fi": "Satoaika heinäkuun alkupuolelta lokakuulle, paras sesonki elo-syyskuussa lämpimien sateiden jälkeen. Viihtyy valoisissa sammalikoissa, polkujen varsilla, kalliomänniköiden reunoilla ja kuusi-koivu-sekametsissä. Parhaita paikkoja: Keskuspuiston Paloheinä ja Pirkkola, Nuuksion Haukkalammen ympäristö ja Luukki."},
      searchTactics: {"en": "Focus your gaze on the edges of trampled footpaths and sunny slope clearings where rainwater drains slowly. Scan for bright egg-yolk yellow buttons pushing through green moss or half-concealed under fallen birch leaves. Golden Chanterelles are highly gregarious: if you spot one, stop immediately and crouch low—there are almost always dozens clustered within a 3-meter radius.", "zh": "重点搜寻泥土小径的边缘与向阳缓坡，那里雨水不易积水且透光。注意寻找顶开绿色羽状苔藓或半藏在枯黄桦树落叶下的明黄色小菌纽。鸡油菌极喜群聚生：一旦发现一朵，务必立刻停下脚步蹲低身姿，地毯式细察周边3米范围，通常会有整窝数十朵同伴！采摘时用小刀在贴近苔藓处平切，避免拔松底层菌丝菌根。", "fi": "Tarkkaile polkujen pientareita ja valoisia rinteitä, joihin vesi valuu. Etsi sammalesta tai koivunlehtien alta pilkottavaa kirkkaankeltaista väriä. Kantarelli kasvaa ryhmissä: kun löydät yhden, pysähdy ja kyykisty katsomaan matalalta – lähellä on lähes aina kymmeniä muita. Leikkaa sieni veitsellä tyvestä sammalta repimättä."},
      lookalikes: {"en": "Confusing species: False Chanterelle (Hygrophoropsis aurantiaca). Differentiating keys: False Chanterelle has knife-thin, crowded, blade-like TRUE gills (not blunt ridges), a fiery neon-orange cap, soft flexible flesh, and a slender stem that darkens to brown near the base. It lacks the rich fruity apricot aroma of true chanterelles. In southern Europe, the poisonous Jack-o'-lantern (Omphalotus olearius) grows in dense wood clusters, but it does not occur in Finland.", "zh": "主要混淆种：假鸡油菌（橙黄拟假芝 Hygrophoropsis aurantiaca）。鉴别秘诀：假鸡油菌长着如刀刃般极其薄细锋利的【真菌褶】（真品为粗厚钝圆的假褶/肋状脊）；颜色为艳丽刺目的火橙色；肉质薄软如海绵垫；且菌柄基部常发黑变褐；完全没有真鸡油菌那股诱人的清甜杏子果香。在南欧生长的有毒毒脐菇（Omphalotus olearius）丛生于木桩上，芬兰本土无分布。", "fi": "Tärkein näköislaji: Valekantarelli (Hygrophoropsis aurantiaca). Tuntomerkkierot: Valekantarellilla on terävät, paperinohuet tiheät heltat (oikeat heltat, ei pyöreitä poimuja), räikeän oranssi väri, pehmeä vetelä malto ja tyvestä tummuva jalka. Siltä puuttuu kantarellin hieno hedelmäinen aprikoosin tuoksu. Valekantarelli ei ole hengenvaarallinen, mutta mauton ja sitkeä."},
      cookingGuide: {"en": "Preparation: Never soak in water; sweep off pine needles with a natural bristle mushroom knife brush. Technique: Sweat chopped chanterelles in a hot, dry skillet without fat until they release their natural moisture and the liquid reduces by half. Then add abundant butter, shallots, sea salt, and finish with heavy cream (kuohukerma) and fresh dill. Preservation: Freeze in their concentrated natural broth. NEVER dehydrate chanterelles—drying makes them tough as leather and bitter.", "zh": "预处理：绝对不要泡水洗，用蘑菇刀毛刷扫净松针浮泥。烹饪准则：干锅中火翻炒，菌体遇热会自然涌出极其清香的原汤，待原汁蒸发过半收浓时，投入大块咸黄油、红葱头丁与海盐大火煎香，出锅前淋入鲜奶油与新鲜莳萝碎。储藏秘诀：连自身浓缩原汤分装冷冻可存1年。切忌风干烘烤：脱水会导致肉质韧如皮革且带苦涩！", "fi": "Esikäsittely: Älä koskaan liota vedessä; puhdista havunneulaset ja sammalet sieniveitsen harjalla. Valmistus: Hauduta paloiteltuja sieniä ensin kuivalla kuumalla pannulla ilman rasvaa, kunnes neste irtoaa ja haihtuu puoliksi. Lisää sitten reilusti voita, sipulia ja merisuolaa, ja viimeistele kuohukermalla ja tillillä. Säilöntä: Pakasta omassa haihdutetussa liemessään. ÄLÄ KUIVAA: kuivattuna kantarellista tulee sitkeä ja kitkerä."},
      image: "./images/cantharellus_cibarius.jpg",
      gallery: [{"file": "./images/cantharellus_cibarius.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/cantharellus_cibarius_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) Alan Rockefeller, some rights reserved (CC BY)"}, {"file": "./images/cantharellus_cibarius_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) Alan Rockefeller, some rights reserved (CC BY)"}, {"file": "./images/cantharellus_cibarius_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Bruce Newhouse, some rights reserved (CC BY-NC-ND)"}],
      rating: "***",
      edibility: "choice",
      level: "beginner",
      months: [7, 8, 9, 10],
      names: {
        en: { primary: "Golden Chanterelle", local: "Keltavahvero", alt: "Chanterelle / Girolle" },
        zh: { primary: "鸡油菌", local: "黄油菌 / 杏仁菌", alt: "Cantharellus cibarius" },
        fi: { primary: "Keltavahvero", local: "Kantarelli", alt: "Cantharellus cibarius" }
      },
      habitatName: {
        en: "Mesic spruce-birch moss paths & bedrock edges",
        zh: "云杉、白桦混交苔藓小径及花岗岩苔藓边缘",
        fi: "Tuore kangasmetsä, polunvarret, kalliomänniköt"
      },
      morphology: {
        en: {
          cap: "3–10 cm, uniform egg-yolk yellow, wavy lobed margin",
          underCap: "Thick, blunt branching ridges (poimut) decurrent down stem",
          stem: "Solid, dense, tapering downward, yellow throughout",
          odor: "Delicate fruity perfume of ripe apricots"
        },
        zh: {
          cap: "3–10厘米，纯正蛋黄色，边缘波状褶皱卷曲",
          underCap: "假菌褶（钝肋状脊），分叉蔓延至菌柄，不可刮落",
          stem: "实心坚实，基部渐细，内外皆为黄色",
          odor: "清甜宜人的成熟杏子或黄桃果香"
        },
        fi: {
          cap: "3–10 cm, munankeltainen, reunoilta poimuinen ja aaltoileva",
          underCap: "Paksut, tylpät ja haaraiset poimut, jotka jatkuvat pitkälle jalkaan",
          stem: "Kiinteä, umpinainen, tyveä kohti kapeneva keltainen jalka",
          odor: "Miellyttävä, makeahko aprikoosimainen hedelmätuoksu"
        }
      },
      culinaryTip: {
        en: "Cook dry in pan first to evaporate natural liquid, then finish with butter and cream. NEVER dehydrate; drying turns it tough and bitter!",
        zh: "下锅前切忌用水泡洗！干锅中火翻炒出自身水分，待汁液收浓后再加黄油或奶油。切勿风干脱水，烘干会导致其肉质变韧且泛苦！",
        fi: "Hauduta ensin kuivalla pannulla omassa liemessään, lisää vasta sitten voi ja kerma. Älä koskaan kuivaa; muuttuu sitkeäksi ja kitkeräksi!"
      },
      lookalikeAlert: {
        en: "False Chanterelle (Hygrophoropsis aurantiaca) has knife-thin, crowded true gills and vivid orange coloring.",
        zh: "注意区分假鸡油菌（橙黄拟假芝），假菌褶刀口极锋利薄细且色泽偏橘红。",
        fi: "Valekantarellilla (Hygrophoropsis aurantiaca) on terävät, veitsenterävät tiheät heltat ja oranssimpi väri."
      }
    },
    {
      id: "craterellus_tubaeformis",
      latinName: "Craterellus tubaeformis",
      whereWhen: {"en": "The late autumn treasure of Southern Finland, fruiting from September through November and persisting even after multiple sub-zero night frosts. Prefers deep, moist feather moss (Hylocomium splendens, Pleurozium schreberi) in shaded, old-growth Norway spruce forests (tuore kangas) on north-facing hillsides. Prime spots: Sipoonkorpi (Bisajärvi and Tasakallio), Keskuspuisto (Pitkäkoski ravines), and Vaakkoi in North Espoo.", "zh": "芬兰深秋真正的森林宝藏，出菇期从9月贯穿至11月下旬，甚至能经受数轮零下夜霜。极喜生长在老龄挪威云杉林背阴北坡极其湿润深厚的羽状绿苔藓地层毯中。大赫尔辛基绝佳采点：西波国家公园（Sipoonkorpi）的Bisajärvi湖畔林区、中央公园最北段的Pitkäkoski水系幽深峡谷、以及北埃斯波的Vaakkoi原始云杉林。", "fi": "Syksyn kruunaamaton kuningas, joka tekee satoa syyskuusta pitkälle marraskuuhun ja kestää toistuvia yöpakkasia. Kasvaa paksussa, kosteassa seinäsammalikossa ja kerrossammalikossa vanhoissa varjoisissa kuusikoissa pohjoisrinteillä. Parhaita paikkoja: Sipoonkorven Bisajärven ja Tasakallion maastot, Keskuspuiston Pitkäkosken notkot sekä Vaakkoi Pohjois-Espoossa."},
      searchTactics: {"en": "Their yellow-brown to grey caps provide masterful camouflage against rotting spruce needles and fallen birch leaves. Walk very slowly along mossy hollows. Do not look directly down; scan 2–3 meters ahead at a low oblique angle. The moment you spot one perforated cap, immediately drop to your knees: your eyes will acclimatize, and you will suddenly discover hundreds of bright yellow hollow stems standing all around you! Always inspect stems individually—never grab blind handfuls out of deep moss.", "zh": "黄褐色的菌盖与针叶枯枝落叶融为一体，堪称自然界伪装大师。漫步苔藓洼地时切莫直挺挺低头，而应微倾身体向前方2-3米处低角度扫视。一旦发现第一只带有中心小孔的菌盖，立刻蹲伏下来：你的瞳孔与视觉焦点会在几秒内适应微光，随后你会惊喜地发现周围密密麻麻站立着成百上千只金黄色空心柄！必须单朵采摘检查，严禁在深厚苔藓中整把盲拔，以防误拔同生的毒物。", "fi": "Ruskehtava lakki naamioituu täydellisesti havunneulasten ja lehtien sekaan. Etene hitaasti kosteissa painanteissa ja katsele matalasta kulmasta parin metrin päähän. Kun havaitset yhden torven, kyykisty alas: silmäsi tottuvat ja yhtäkkiä näet satoja keltaisia jalkoja ympärilläsi! Poimi aina sieni kerrallaan tyvestä tarkastaen – älä koskaan kahmi sokkona kourallista sammaleesta."},
      lookalikes: {"en": "CRITICAL LIFE-SAVING LOOKALIKE: Deadly Webcap (Cortinarius rubellus). Both species share the exact same mossy spruce habitat in Uusimaa! How to differentiate with 100% certainty: Funnel Chanterelles have a deeply perforated funnel-shaped cap opening into a bright yellow-orange stem that is COMPLETELY HOLLOW like a drinking straw, with blunt branched grey-yellow ridges underneath. The Deadly Webcap has a pointed conical cinnamon-brown cap (wizard hat), a SOLID stem with yellow zigzag banding, and rusty-brown true gills containing fatal orellanine toxin.", "zh": "【性命攸关的核心鉴别】：致命赭红丝膜菌（Cortinarius rubellus）。这两种真菌在乌西玛的云杉苔藓带完全混生！百分百鉴别铁律：漏斗鸡油菌的菌盖中央有通透的穿孔，直通下方鲜艳黄橙色的菌柄，【菌柄内部完全空心如吸管】，菌盖下方为灰黄色分叉钝棱脊。而致死剧毒的赭红丝膜菌菌盖中央带尖锐圆锥形凸起，【菌柄实心坚韧带黄色之字蛇纹斑】，下方是锈褐色真菌褶，含导致不可逆肾衰竭的奥来毒素！", "fi": "HENGENPELASTAVA NÄKÖISLAJI: Suippumyrkkyseitikki (Cortinarius rubellus). Molemmat jakavat saman kostean kuusikkomaaston Uudellamaalla! Varmat tuntomerkit: Suppilovahverolla on suppilomainen reikä lakin keskellä ja kirkkaankeltainen, TÄYSIN ONTTOMAINEN pillimäinen jalka sekä tylpät haaraiset poimut. Suippumyrkkyseitillä on terävä huippunuppi lakissa, UMPINAINEN kanelinruskea jalka keltaisilla siksak-vöillä ja myrkylliset ruosteenruskeat heltat."},
      cookingGuide: {"en": "The premier drying mushroom of Northern Europe. Spread on food dehydrator trays at 40°C for 6–8 hours until crisp; store in airtight glass jars for 3–5 years without flavor loss. In cooking, rehydrate in warm water (saving the dark broth) or fry fresh in butter with garlic, yellow onions, heavy cream, and melt in Finnish smoked cheese (Koskenlaskija Savu) for autumn soups, savoury wild pies, and game sauces.", "zh": "北欧风干储藏第一名菇！置于烘干机40℃烘烤6-8小时至彻底干脆，玻璃密封罐避光能存3-5年不失香气。烹饪时温水泡发20分钟（泡菇水滤渣后留作浓汤底），加黄油、大蒜、洋葱慢煎，或加入高汤并融化芬兰传统烟熏奶酪（Koskenlaskija Savu）煮成丝滑深秋暖身浓汤，亦极适做菌菇咸派馅料。", "fi": "Pohjoisen ykkössieni kuivaukseen. Kuivaa kasvikuivurissa 40 °C:ssa 6–8 tuntia täysin rapsakaksi; säilyy tiiviissä lasipurkissa vuosia aromikkaana. Käytä keittoihin Koskenlaskija Savu -juuston kanssa, kermaisiin piirakoihin tai paista sellaisenaan voissa sipulin kera. Kuivattujen sienten liotusvesi on erinomaista kastikepohjaa."},
      image: "./images/craterellus_tubaeformis.jpg",
      gallery: [{"file": "./images/craterellus_tubaeformis.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/craterellus_tubaeformis_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) Bryan D. Gronemeier, all rights reserved"}, {"file": "./images/craterellus_tubaeformis_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) Bryan D. Gronemeier, all rights reserved"}, {"file": "./images/craterellus_tubaeformis_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Bryan D. Gronemeier, all rights reserved"}],
      rating: "***",
      edibility: "choice",
      level: "beginner",
      months: [9, 10, 11],
      names: {
        en: { primary: "Funnel Chanterelle", local: "Suppilovahvero", alt: "Yellow Foot" },
        zh: { primary: "漏斗鸡油菌", local: "黄柄黄号角菇 / 喇叭鸡油菌", alt: "Craterellus tubaeformis" },
        fi: { primary: "Suppilovahvero", local: "Suppis", alt: "Craterellus tubaeformis" }
      },
      habitatName: {
        en: "Deep moist feather-moss blankets in old-growth spruce heaths",
        zh: "老龄云杉林阴凉深处湿润的羽状苔藓地层毯中",
        fi: "Tuoreet mustikkatyypin kuusikot, kosteat sammalikot"
      },
      morphology: {
        en: {
          cap: "2–6 cm, yellowish-brown to dark umber, trumpet-shaped with central hole",
          underCap: "Blunt, forking greyish-yellow ridges running down stem",
          stem: "Bright yellow-orange, COMPLETELY HOLLOW like a drinking straw",
          odor: "Rich, pleasant earthy and forest aroma"
        },
        zh: {
          cap: "2–6厘米，棕黄至褐黑色，深漏斗喇叭状，中心穿孔通向菌柄",
          underCap: "灰黄或土黄色钝棱脊，不规则分叉并下延",
          stem: "鲜艳的黄橙色，完全空心（如吸管状）",
          odor: "温和浓郁的森林泥土与菌类复合芬芳"
        },
        fi: {
          cap: "2–6 cm, ruskea tai harmaanruskea, suppilomainen, keskellä reikä",
          underCap: "Haaraiset, harmaankeltaiset ja tylpät poimut",
          stem: "Kirkkaankeltainen tai kellanoranssi, TÄYSIN ONTTOMAINEN pilli",
          odor: "Miellyttävä, maamainen ja raikkaan sienimäinen"
        }
      },
      culinaryTip: {
        en: "The king of dried mushrooms! Superb when dehydrated at 40°C. Survives sub-zero frosts into late November.",
        zh: "北欧烘干保存的王者！40℃低温风干后香气浓郁，可常温保存数年。极耐初霜，11月底降雪前仍可采摘。",
        fi: "Kuivauksen kuningas! Kuivuu täydellisesti 40 °C:ssa. Kestää pikkupakkasia jopa marraskuun loppuun."
      },
      warning: {
        en: "Inspect every mushroom individually to verify the hollow yellow stem (never grab blind clumps, to avoid the solid-stemmed Deadly Webcap).",
        zh: "采摘时务必单朵检查其空心黄柄，严禁整把盲揪，以防将同生在苔藓中的致死剧毒赭红丝膜菌混入！",
        fi: "Tarkista jokainen sieni erikseen: jalassa oltava ontto keltainen putki (varo suippumyrkkyseitikkiä!)."
      }
    },
    {
      id: "hydnum_repandum",
      latinName: "Hydnum repandum",
      whereWhen: {"en": "Fruits from August through October. Inhabits mossy spruce hollows, shaded birch-spruce slopes, and moist depressions in mature coniferous forests. Often forms large, arcs or complete fairy rings. Prime spots: Luukki (around Lake Hauklampi), Sipoonkorpi (Bakunkärr), and Nuuksio valleys.", "zh": "出菇期从8月至10月。喜居于成熟针阔混交林、阴湿云杉背阴坡及厚苔藓洼地，常常成排长成弧线或巨大的“仙女圈”。大赫尔辛基高产地：北埃斯波Luukki湖区周边林地、西波国家公园Bakunkärr山谷、以及Nuuksio未开发阴湿山沟。", "fi": "Satoaika elokuusta lokakuulle. Asustaa paksusammalisissa kuusikoissa, rinteiden notkoissa ja sekametsien kosteapohjaisissa osissa. Muodostaa usein näyttäviä noidankehiä. Parhaita paikkoja: Luukin Hauklammen ympäristö, Sipoonkorven Bakunkärr ja Nuuksion laaksot."},
      searchTactics: {"en": "Look for irregular, thick, creamy-white to pale biscuit-colored shapes breaking through green moss carpets. As you lift the cap, check the underside immediately: you will see thousands of delicate, soft white-to-cream spines. If you find one hedgehog, scan the terrain in a gentle arc—they almost always grow along subterranean mycelial circles.", "zh": "在深绿色苔藓地表搜寻边缘不规则、厚实厚润的乳白色或浅米饼色菌盖。轻轻揭开观察菌盖下方：若布满千百根密密麻麻、触指即落的脆弱柔软小菌刺，即是此菇！找到第一朵后，沿着弧形轨迹向前寻找，通常会顺着地底菌丝环连续收获数公斤。", "fi": "Etsi paksuja, epäsäännöllisiä kermanvaaleita tai vaaleanruskeita lakkeja, jotka puskevat sammalen läpi. Käännä sieni ja tarkista alapinta: se on täynnä pehmeitä, helposti irtoavia vaaleita piikkejä. Seuraa maastoa loivassa kaaressa, sillä orakkaat kasvavat usein laajoissa kehillä."},
      lookalikes: {"en": "ZERO POISONOUS LOOKALIKES: There is no toxic mushroom in Northern Europe with spines underneath the cap! The only confusing species is its close sibling, the Rufous Hedgehog (Hydnum rufescens / Rusko-orakas), which is smaller, orange-terracotta in color, has slightly darker spines, and is equally delicious. Exceptionally bug-resistant; maggots rarely touch it.", "zh": "【零有毒混淆种】：在北欧整个自然界中，没有任何一种菌盖下生刺的蘑菇是有毒的！唯一的近亲是赤褐齿菌（Hydnum rufescens / Rusko-orakas），体型稍小，色泽偏赤陶橙褐色，刺也偏黄，同样属于顶级美味食用菌。更难能可贵的是它极少生虫，几乎朵朵纯净坚实。", "fi": "EI YHTÄKÄÄN MYRKYLLISTÄ NÄKÖISLAJIA: Pohjois-Euroopassa ei kasva yhtään myrkyllistä lakin alapinnalta piikkistä sientä! Ainoa samannäköinen on sen lähisukulainen rusko-orakas (Hydnum rufescens), joka on hieman pienempi, oranssinruskea ja yhtä erinomainen ruokasieni. Orakkaat ovat lähes aina täysin toukattomia."},
      cookingGuide: {"en": "Gentle preparation: Brush spines lightly if sand is caught between them. Exceptionally firm and meaty texture that holds up under high heat without turning soggy. Slice thick (1 cm planks), dredge in flour and beaten egg, and pan-fry in browned butter like schnitzel steaks, seasoned simply with sea salt and black pepper. Can also be pickled or frozen in own juices.", "zh": "预处理极简：若刺缝间夹有泥沙，用软刷轻轻拂落即可。肉质极其紧实有咬劲，大火煎炒绝不软烂出水塌陷。经典吃法：切成1厘米厚大排，两面裹轻薄蛋液与面粉，投入冒烟的焦香黄油平底锅中双面煎至酥脆微焦如牛排，仅撒少许海盐与黑胡椒即是人间极品。焯水过油亦可冷冻储藏。", "fi": "Käsittely: Pyyhi piikit kevyesti harjalla, jos väliin on jäänyt hiekkaa. Malto on poikkeuksellisen kiinteää eikä vety pannulla. Leikkaa 1 cm paksuisiksi viipaleiksi, leivitä jauhossa ja kananmunassa, ja paista voissa rapeiksi sienipihveiksi. Mausta vain suolalla ja mustapippurilla. Erinomainen myös etikkasäilykkeenä tai ryöpättynä pakasteena."},
      image: "./images/hydnum_repandum.jpg",
      gallery: [{"file": "./images/hydnum_repandum.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/hydnum_repandum_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) Alexis Tinker-Tsavalas, some rights reserved (CC BY)"}, {"file": "./images/hydnum_repandum_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) Alexis Tinker-Tsavalas, some rights reserved (CC BY)"}, {"file": "./images/hydnum_repandum_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Alexis Tinker-Tsavalas, some rights reserved (CC BY)"}],
      rating: "***",
      edibility: "choice",
      level: "beginner",
      months: [8, 9, 10],
      names: {
        en: { primary: "Wood Hedgehog", local: "Vaaleaorakas", alt: "Hedgehog Mushroom" },
        zh: { primary: "卷缘齿菌", local: "白齿菌 / 刺儿菇", alt: "Hydnum repandum" },
        fi: { primary: "Vaaleaorakas", local: "Orakas", alt: "Hydnum repandum" }
      },
      habitatName: {
        en: "Mossy hollows under mature Norway spruce & birch",
        zh: "成熟挪威云杉与桦木林下苔藓洼地，常形成蘑菇圈",
        fi: "Tuoreet kuusikot, lehtomaiset sammalikot"
      },
      morphology: {
        en: {
          cap: "5–15 cm, ivory to pale cream-biscuit, firm, wavy margin",
          underCap: "Covered in thousands of soft, fragile WHITE SPINES (orakset) 2–6 mm",
          stem: "Sturdy, thick, solid, off-white, snapping cleanly",
          odor: "Fresh, mild, slightly fruity"
        },
        zh: {
          cap: "5–15厘米，乳白、米黄色至淡饼干色，厚实且边缘波状",
          underCap: "密布极脆弱易脱落的柔软白色小刺（长2-6毫米）",
          stem: "粗壮短实，纯白色，质地如石膏般脆生生掰断",
          odor: "清香纯净，老熟个体略带辛香"
        },
        fi: {
          cap: "5–15 cm, kermanvaalea tai vaaleankellertävä, tanakka ja mutkainen",
          underCap: "Pinnalla tuhansia pehmeitä ja hauraita vaaleita piikkejä (oraksia)",
          stem: "Paksu, kiinteä, vaalea, murtuu lohjeten kuin liitu",
          odor: "Mieto, raikas ja sienenomainen"
        }
      },
      culinaryTip: {
        en: "ZERO poisonous lookalikes with spines under the cap in Finland! Extremely resistant to maggot larvae.",
        zh: "安全度极高！芬兰本土没有任何带刺有毒真菌。几乎从不生虫，切厚片裹蛋液面粉煎至金黄酥脆如牛排。",
        fi: "Suomessa ei ole yhtäkään myrkyllistä orakassientä! Ei juuri koskaan toukkainen. Loistava paistettavaksi pihvinä."
      }
    },
    {
      id: "craterellus_cornucopioides",
      latinName: "Craterellus cornucopioides",
      whereWhen: {"en": "Fruiting from mid-August through October. Strictly prefers warm, moist, nutrient-rich deciduous groves (lehto) under European hazel (Corylus avellana), birch, and pedunculate oak. Grows in rich humus and mossy clay banks. Prime spots: Keskuspuisto (Maunula hazel groves), Petikko in Vantaa, and sheltered deciduous slopes in Nuuksio.", "zh": "8月中旬至10月出菇。特异性偏爱富营养、微碱性的湿暖阔叶林（lehto），与欧榛（Corylus avellana）、夏栎（橡树）共生，长于肥沃腐殖土与青苔斜坡上。大赫尔辛基黄金地段：中央公园Maunula受保护的欧榛树林外缘、万塔Petikko富营养阔叶林、以及Nuuksio背风朝阳的栎树谷地。", "fi": "Satoaika elokuun puolivälistä lokakuuhun. Vaatii ravinteikkaita, lämpimiä ja kosteita lehtoja, erityisesti pähkinäpensaiden (Corylus avellana), tammien ja koivujen alla. Kasvaa paksussa multamaassa ja sammalisilla savipenereillä. Parhaita paikkoja: Keskuspuiston Maunulan pähkinäpensaikot, Petikko Vantaalla ja Nuuksion suojaisat rinnelehdot."},
      searchTactics: {"en": "Black Trumpets are notoriously invisible to standing foragers—their soot-black to ash-grey funnels look identical to shadows between decaying leaves. Drop onto your knees and scan uphill against the light under hazel bushes. Once your vision tunes in to the velvety charcoal texture, an entire hidden colony will reveal itself. Harvest cleanly with scissors or by pinching at base.", "zh": "站立行走几乎不可能看到它！炭灰墨黑的薄号角在昏暗的榛树落叶堆中与阴影完全无异。寻菇绝招：在欧榛树冠遮蔽下双膝跪地或深蹲，逆着微光由下向上仰角扫视地面。一旦你的视网膜识别出那种如黑色丝绒般的细腻质感，整片原本空无一物的枯叶地就会神奇地显现出成百上千只号角！建议用小剪刀沿基部平齐剪下，保持内部清洁无土。", "fi": "Mustatorvisieni on maastossa lähes näkymätön seisaaltaan katsottuna – musta torvi sulautuu maatuviin lehtiin ja puiden varjoihin. Kyykisty maahan pähkinäpensaiden alle ja katsele yläviistoon valoa vasten. Kun silmä oppii erottamaan mustan samettisen pinnan, huomaat usein olevasi keskellä valtavaa esiintymää. Leikkaa torvet saksilla tyvestä puhtauden takaamiseksi."},
      lookalikes: {"en": "ZERO POISONOUS LOOKALIKES: There is no toxic lookalike in Northern Europe for a thin, hollow, black-to-dark-grey trumpet horn with a smooth/wrinkled under-surface. The closely related Sinuous Chanterelle (Pseudocraterellus undulatus) is paler grey-brown, ruffled, and equally delicious.", "zh": "【绝无有毒混淆种】：在整个北欧自然界，没有任何一种黑灰色、中空薄质、外壁平滑无褶皱的喇叭形有毒真菌。近缘的皱边假号角菌（Pseudocraterellus undulatus）颜色稍浅偏灰褐色，褶边波折，同样属于上等食用野菌。", "fi": "EI MYRKYLLISIÄ NÄKÖISLAJEJA: Pohjois-Euroopassa ei ole mitään myrkyllistä sientä, joka muistuttaisi ohutmaltoista, mustaa onttoa torvea, jonka alapinta on sileä tai poimuinen. Lähisukulainen harmaatorvisieni (Pseudocraterellus undulatus) on vaaleamman ruskeanharmaa ja yhtä herkullinen."},
      cookingGuide: {"en": "The 'Black Gold' and culinary truffle of Finnish forests. Slit open the hollow horn lengthways to brush out trapped needle litter. Dehydration is supreme: dry at 40°C and crush into black flakes. A single spoonful of crushed Black Trumpet stirred into brown butter, steak pan-juices, game sauces, risottos, or pasta elevates the dish with intoxicating truffle-like umami.", "zh": "芬兰森林的“黑黄金”与天然松露！烹饪前沿中空号角纵向撕开，轻刷内腔偶尔掉入的落叶杂物。脱水风干是其香气的极致归宿：40℃烘干后用手碾成黑色碎末，密封储藏。无论是在西冷牛排的浓缩肉汁、烩饭、奶油意面还是中式菌菇鸡汤中加入一调羹黑喇叭菌粉，都能赋予菜肴深邃迷醉的松露级顶级鲜味。", "fi": "Metsiemme musta kulta ja tryffelimäinen maustaja. Halkaise torvi pituussuunnassa ja puhdista sisältä mahdolliset roskat. Kuivaus on paras säilöntätapa: kuivaa 40 °C:ssa ja murenna jauheeksi. Yksikin ruokalusikallinen kuivattua mustatorvisientä kastikkeissa, riistapadoissa, risotossa tai pastassa tuo ruokaan huumaavan syvän maun."},
      image: "./images/craterellus_cornucopioides.jpg",
      gallery: [{"file": "./images/craterellus_cornucopioides.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/craterellus_cornucopioides_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) naturkvinnan, all rights reserved"}, {"file": "./images/craterellus_cornucopioides_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) naturkvinnan, all rights reserved"}, {"file": "./images/craterellus_cornucopioides_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) naturkvinnan, all rights reserved"}],
      rating: "***",
      edibility: "choice",
      level: "beginner",
      months: [8, 9, 10],
      names: {
        en: { primary: "Black Trumpet", local: "Mustatorvisieni", alt: "Horn of Plenty" },
        zh: { primary: "灰包号角菇", local: "黑喇叭菌 / 穷人松露", alt: "Craterellus cornucopioides" },
        fi: { primary: "Mustatorvisieni", local: "Mustis", alt: "Craterellus cornucopioides" }
      },
      habitatName: {
        en: "Herb-rich groves (lehto) under European hazel & oak",
        zh: "阔叶林地、欧榛丛与橡树林下湿润落叶层中",
        fi: "Lehtomaiset metsät, pähkinäpensaiden ja tammien juurella"
      },
      morphology: {
        en: {
          cap: "3–8 cm, deeply funnel-shaped trumpet horn, flaring wavy rim",
          underCap: "Smooth to faintly wrinkled ash-grey surface; NO gills, pores, or spines",
          stem: "Hollow horn continuous with cap, charcoal to soot-black",
          odor: "Intensely aromatic, floral, fruity, truffle-like"
        },
        zh: {
          cap: "3–8厘米，深长号角喇叭状，外翻波浪口，薄而富有韧性",
          underCap: "外侧平滑或微起灰粉状细皱，既无菌褶也无孔刺",
          stem: "与菌盖一体通空的黑灰色喇叭筒",
          odor: "浓郁扑鼻的干酪与松露级深层芳香"
        },
        fi: {
          cap: "3–8 cm, ohutmaltoinen, syvän torvimainen, nahanmusta tai tuhkanharmaa",
          underCap: "Ulkopinta sileä tai heikosti ryppyinen, ei helttaa eikä pillejä",
          stem: "Ontto torvimainen tyvi, joka liittyy saumattomasti lakkiin",
          odor: "Voimakkaan hedelmäinen, mausteinen ja tryffelimäinen"
        }
      },
      culinaryTip: {
        en: "The 'Black Gold' of Finnish woods. Dry and crush into coarse flakes for seasoning steaks, risottos, and pasta.",
        zh: "芬兰森林的“黑黄金”。极易晒干，碾碎成粉末调入酱汁、奶油牛排与意面中，香气冠绝群菌。",
        fi: "Metsiemme musta kulta! Kuivaa ja murenna maustejauhona kastikkeisiin, risottoihin ja riistaruoille."
      }
    },
    {
      id: "boletus_edulis",
      latinName: "Boletus edulis",
      whereWhen: {"en": "Flushes heavily in August and early September following soaking thunderstorms. Forms mycorrhizal partnerships with Norway spruce in mesic heaths (tuore kangas) and Silver birch. Prime spots: Sipoonkorpi (around Kuusijärvi and Bisajärvi), Nuuksio (Haukkalampi trails), and Luukki forest boundaries.", "zh": "8月至9月上旬在暴雨洗礼后迎来集中爆发。主要与挪威云杉及白桦树形成外生菌根，生于蓝莓苔藓针叶林（tuore kangas）。大赫尔辛基核心产区：西波国家公园（Kuusijärvi与Bisajärvi之间的老林区）、Nuuksio步道深处、以及北埃斯波Luukki自然林边界。", "fi": "Tuottaa valtavia satoja elo-syyskuussa rankkasateiden jälkeen. Elää symbioosissa kuusen ja koivun kanssa tuoreissa mustikkatyypin kangasmetsissä. Parhaita paikkoja: Sipoonkorpi (Kuusijärven ja Bisajärven ympäristö), Nuuksion polkuverkosto ja Luukki."},
      searchTactics: {"en": "Look for glossy, toasted-bun domes swelling above green feather moss, especially in the transitional band between tall blueberry bushes and open moss hollows. Harvest early in the morning: warm autumn days allow fungus gnats to lay eggs rapidly, causing the pore layer to become maggoty within 24 hours. Young 'cork' buttons with pure white under-pores are culinary perfection.", "zh": "在蓝莓灌木丛与平整羽状苔藓交界的地表断层，搜寻油亮凸起如烤小面包般的棕褐半球。务必清晨赶早采摘：温暖秋季森林中的蕈蚊极易在海绵孔层产卵，24小时内幼虫就会侵蚀管孔。菌盖下方海绵孔尚呈纯白坚硬（如红酒软木塞）的幼菇为无虫无洞的极品！切开检查菇肉，纯白不变色即可入筐。", "fi": "Etsi sämpylänruskeita pyöreitä lakkeja, jotka nousevat seinäsammalesta erityisesti mustikkatiheikköjen ja avoimen sammalen rajapinnassa. Kerää aikaisin aamulla: lämpiminä päivinä sienisääsket munivat nopeasti pillistöön, jolloin se toukkantuu vuorokaudessa. Nuoret, kivikovat tatit, joiden pillistö on vielä lumivalkoinen, ovat ruokasienten aatelia."},
      lookalikes: {"en": "Confusing species: Bitter Bolete (Tylopilus felleus / Sappitatti). The Bitter Bolete is not deadly, but a single slice will render an entire dish inedible with lingering gall-like bitterness. Differentiating keys: The King Bolete has fine, delicate WHITE raised netting on the upper stem, white pores that turn yellowish-olive in age, and sweet nutty flesh. The Bitter Bolete has coarse, prominent, dark brown netting, pores that mature to dirty flesh-pink, and burns with extreme bitterness on the tip of the tongue within 5 seconds.", "zh": "最关键混淆种：苦粉孢牛肝菌（苦牛肝 Tylopilus felleus / Sappitatti）。苦牛肝虽无致命剧毒，但一小片就会将整锅佳肴变为难以咽下的苦胆水！鉴别铁律：美味牛肝菌菌柄上半段覆有精致微细的【白色立体网纹】，菌孔由白转黄绿或橄榄色，舌尝甘甜坚果香；苦牛肝菌柄全柄密布【粗大凸起深褐黑网纹】，菌孔老熟后泛出【污肉粉红、褐粉色】，切一丁点用舌尖轻碰5秒内狂苦无比！", "fi": "Tärkein näköislaji: Sappitatti (Tylopilus felleus). Sappitatti ei ole tappava, mutta tekee kitkeryydellään ruoasta syömäkelvotonta. Tuntomerkkierot: Herkkutatilla on hieno, vaalea verkkokuvio jalan yläosassa, nuorena valkoinen ja vanhana kellanvihreä pillistö sekä makean pähkinäinen maku. Sappitatilla on voimakas, kohollaan oleva tummanruskea verkkokuvio, vanhetessa likaisen vaaleanpunaiseksi muuttuva pillistö ja polttavan karvas maku kielellä kokeiltaessa."},
      cookingGuide: {"en": "Never wash in water—pores turn waterlogged and mushy instantly; wipe cap with a damp towel. Cut in 5 mm planks to dry at 45°C for exquisite winter Porcini risottos, pasta, and broths. Fresh young ceps are sublime sliced into thick medallions and pan-seared in garlic butter until deeply browned and caramelized, served with flaky sea salt and cracked black pepper.", "zh": "绝不可浸水清洗——海绵孔吸水后瞬间变软烂海绵；仅用微湿厨房纸拭净菌盖。切成5毫米均匀厚片在45℃下烘干脱水，是制作正宗牛肝菌意式烩饭（Risotto）、浓汤的极品香料。生鲜幼菇切厚片用大火牛油蒜蓉慢煎至两面焦黄起脆壳，撒片状海盐与现磨黑胡椒，甘美丰腴如脂。", "fi": "Älä koskaan pese vedellä – pillistö imee veden heti ja vetistyy; pyyhi lakki nihkeällä talouspaperilla. Viipaloi 5 mm paksuisiksi siivuiksi ja kuivaa 45 °C:ssa risottopohjaksi tai kastikkeisiin. Tuoreet kiinteät tatit ovat parhaimmillaan paksuina kiekkoina voissa ja valkosipulissa rapeaksi paistettuina sormisuolan ja mustapippurin kera."},
      image: "./images/boletus_edulis.jpg",
      gallery: [{"file": "./images/boletus_edulis.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/boletus_edulis_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) Carita Bergman, some rights reserved (CC BY-NC-ND)"}, {"file": "./images/boletus_edulis_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) Carita Bergman, some rights reserved (CC BY-NC-ND)"}, {"file": "./images/boletus_edulis_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Damon Tighe, some rights reserved (CC BY-NC)"}],
      rating: "***",
      edibility: "choice",
      level: "beginner",
      months: [8, 9],
      names: {
        en: { primary: "King Bolete", local: "Herkkutatti", alt: "Porcini / Penny Bun" },
        zh: { primary: "美味牛肝菌", local: "大腿菇 / 白牛肝菌 / 普奇尼", alt: "Boletus edulis" },
        fi: { primary: "Herkkutatti", local: "Kivitatti", alt: "Boletus edulis" }
      },
      habitatName: {
        en: "Spruce-blueberry moss heaths and mixed conifer borders",
        zh: "云杉蓝莓苔藓林地及针阔交界地带",
        fi: "Tuoreet mustikkatyypin kuusikot ja sekametsät"
      },
      morphology: {
        en: {
          cap: "8–25 cm, bun-brown to chestnut, greasy damp sheen, convex",
          underCap: "Spongy tubes: pure white when young, aging to yellow-olive",
          stem: "Stout club-shaped, adorned with fine white net pattern near top",
          odor: "Nutty, rich and pleasantly sweet"
        },
        zh: {
          cap: "8–25厘米，如烤熟小面包般半球形，油亮栗褐色",
          underCap: "海绵状海绵孔：幼时纯白坚实如奶油，老后变黄绿或橄榄色",
          stem: "下粗上细的圆球/棒状柄，上半截覆有清晰立体的细白网纹",
          odor: "坚果香浓厚，切面纯白且永不氧化变蓝变黑"
        },
        fi: {
          cap: "8–25 cm, sämpylänruskea, pintanahka hieman tahmea, kupera",
          underCap: "Pillistö: nuorena puhtaanvalkoinen, vanhetessa kellertyvä ja oliivinvihreä",
          stem: "Tynnyrimäinen, tukeva, yläosassa hento valkoinen verkkokuvio",
          odor: "Pähkinäinen, miellyttävä ja makeahko"
        }
      },
      culinaryTip: {
        en: "Harvest young buttons before fungus gnats lay eggs in the sponge. Cut into planks and dehydrate or pan-fry fresh.",
        zh: "采摘趁早！幼菇孔层尚未泛绿时口感最佳且无虫蛀。切薄片风干或切厚丁用大火蒜油快煎。",
        fi: "Kerää nuorena ennen kuin hyönteiset ehtivät pillistöön. Viipaloi kuivattavaksi tai paista tuoreena pannulla."
      },
      lookalikeAlert: {
        en: "Watch out for Bitter Bolete (Tylopilus felleus): coarse dark mesh and violently bitter taste.",
        zh: "警惕苦粉孢牛肝菌（苦牛肝）：柄覆粗黑网纹，舌尖触碰剧苦，会毁掉整锅菜。",
        fi: "Varo sappitattia (Tylopilus felleus): tumma karkea verkkokuvio ja polttavan karvas maku."
      }
    },
    {
      id: "boletus_pinophilus",
      latinName: "Boletus pinophilus",
      whereWhen: {"en":"Fruits from July through October across dry, sunny sandy pine heaths (kuiva kangas), lichen-covered granite outcrop terraces, and coastal pine forests. Prime spots in Uusimaa: Sipoonkorpi rocky crags, Porkkalanniemi pine ridges, and Vuosaari coastal woodlands.","zh":"7月至10月生于干燥向阳的沙质松树林（kuiva kangas）、覆满地衣的花岗岩岩脊台地以及海边松林中。大赫尔辛基绝佳采点：西波国家公园（Sipoonkorpi）高地岩丘、Porkkalanniemi海角松林山脊、以及Vuosaari沿海松树步道。","fi":"Satoaika heinäkuusta lokakuuhun kuivissa mäntykankaissa, jäkäläisillä kallioilla ja hiekkapohjaisissa männiköissä. Pääkaupunkiseudun parhaita paikkoja: Sipoonkorven kalliomaastot, Porkkalanniemen männiköt ja Vuosaaren rannikkometsät."},
      searchTactics: {"en":"Scan sunny, well-drained slopes beneath Scots pines (Pinus sylvestris). Look for distinctive humps pushing up reindeer lichen and dry pine needles. The cap is deep wine-red to mahogany-copper with a wrinkly texture. The stem is massive and bulbous, anchored deep in sandy soil.","zh":"在向阳、排水优良的欧洲赤松林缓坡搜寻。寻找被顶起的地衣和松针堆小土包。菌盖呈深沉的酒红褐色或紫铜色，表面微带皱褶。菌柄极其粗壮呈球棒状，深固于沙质土壤中。","fi":"Haravoi katseellasi valoisia mäntyrinteitä ja jäkäläalueita. Etsi sammal- ja neulasmaton kohoumia. Lakki on syvän viininpunaruskea tai kuparinen ja usein ryppyinen. Jalka on erittäin massiivinen ja mukulamainen."},
      lookalikes: {"en":"Tylopilus felleus (Bitter Bolete) has pinkish pores and a dark coarse raised net on the stem with violently bitter flesh. Boletus edulis has a lighter hazel-tan cap and white net, also choice edible.","zh":"警惕苦粉孢牛肝菌（苦牛肝），其菌孔老后泛脏粉红，菌柄有粗大深色凸出黑网纹且极苦；美味牛肝菌（白牛肝）菌盖偏浅褐，网纹为白色，同属顶级美味。","fi":"Sappitatti (Tylopilus felleus) erottuu punertavan pillistön, karkean tumman verkon ja polttavan karvaan maun perusteella. Herkkutatti on vaaleamman ruskea valkoisella verkolla ja yhtä laadukas ruokasieni."},
      cookingGuide: {"en":"Exceptional culinary bolete with unusually dense, firm, crunchy flesh that retains its bite after cooking. Excellent sliced thick and seared in butter, roasted with thyme, or dried in 4mm slices for rich winter risottos and stews. Never requires parboiling.","zh":"极品牛肝菌，肉质比普通白牛肝更为致密紧实、富有脆感，久煮不烂。极宜厚切用黄油大火香煎、配百里香烤制，或切4毫米薄片风干储藏，用于冬日煨汤与意式烩饭。无需焯水。","fi":"Poikkeuksellisen kiinteä ja rapeamaltoinen herkkutatti, joka säilyttää rakenteensa kypsennettäessä. Leikkaa paksuiksi viipaleiksi ja paista voissa, paahda uunissa tai kuivaa viipaleina talven risottoihin ja keittoihin. Ei vaadi ryöppäystä."},
      image: "./images/boletus_pinophilus.jpg",
      gallery: [{"file": "./images/boletus_pinophilus.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/boletus_pinophilus_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) Svetlana Belmesova, some rights reserved (CC BY-NC)"}, {"file": "./images/boletus_pinophilus_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) Svetlana Belmesova, some rights reserved (CC BY-NC)"}, {"file": "./images/boletus_pinophilus_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Tellur Fenner (Blue Wind School of Botanical Studies), some rights reserved (CC BY-NC)"}],
      rating: "***",
      edibility: "choice",
      level: "beginner",
      months: [7, 8, 9, 10],
      names: {
        en: { primary: "Pine Bolete", local: "Männynherkkutatti", alt: "Pinewood King Bolete" },
        zh: { primary: "松生牛肝菌", local: "红褐牛肝菌", alt: "Boletus pinophilus" },
        fi: { primary: "Männynherkkutatti", local: "Ruskotatti", alt: "Boletus pinophilus" }
      },
      habitatName: {
        en: "Sub-xeric sandy pine heaths among lingonberry and lichens",
        zh: "干燥沙质欧洲赤松林，伴生红豆草与地衣",
        fi: "Kuivat kangasmänniköt, hiekkapohjaiset puolukkakankaat"
      },
      morphology: {
        en: {
          cap: "8–25 cm, deep mahogany wine-red to reddish-brown, wrinkled margin",
          underCap: "White pores aging to olive-yellow, reddish tint at margin",
          stem: "Massive, bulbous, pale reddish-buff with red-brown net",
          odor: "Deep earthy and nutty"
        },
        zh: {
          cap: "8–25厘米，红木红褐至深紫褐色，边缘微起皱",
          underCap: "管孔初纯白后深黄绿，孔口边缘微染红褐色",
          stem: "粗圆硕大，覆有红褐色网状花纹",
          odor: "极为坚实的松林泥土与坚果香"
        },
        fi: {
          cap: "8–25 cm, tumman punaruskea, usein muhkurainen ja poimuinen",
          underCap: "Pillistö aluksi valkoinen, myöhemmin kellanvihreä, reuna punertava",
          stem: "Tanakka, paksu, punaruskean verkon kirjoma",
          odor: "Syvä metsäinen ja aromikas tuoksu"
        }
      },
      culinaryTip: {
        en: "Exceptionally firm flesh that retains crispness during cooking. Outstanding roasted with root vegetables.",
        zh: "肉质致密坚韧，烹调中不易散烂软塌，烤根茎类蔬菜或切片涮火锅极佳。",
        fi: "Erittäin kiinteä maltoinen tatti, joka säilyttää rakenteensa erinomaisesti ruoanlaitossa."
      }
    },
    {
      id: "amanita_virosa",
      latinName: "Amanita virosa",
      whereWhen: {"en": "DEADLY POISONOUS: Fruits August to October in moist, acidic Norway spruce forests (tuore kangas) with thick feather moss throughout Helsinki, Espoo, Vantaa, and Sipoo. Common in Pitkäkoski, Sipoonkorpi, Nuuksio, and Luukki.", "zh": "【致命剧毒！一朵致死】：8月至10月在赫尔辛基、埃斯波、万塔及西波各大潮湿酸性挪威云杉林藓苔层中极度常见。常见于中央公园Pitkäkoski、Sipoonkorpi、Nuuksio和Luukki。", "fi": "TAPPAVAN MYRKYLLINEN: Esiintyy elo-lokakuussa kosteissa, happamissa paksusammalisissa kuusikoissa koko Uudellamaalla. Erittäin yleinen Pitkäkoskella, Sipoonkorvessa, Nuuksiossa ja Luukissa."},
      searchTactics: {"en": "NEVER PICK FOR CONSUMPTION. Learn to identify to stay safe: Pure silky white all over. Gills are pure white and free from the stem. A delicate skirt-like ring hangs from the upper stem, and a loose bag-like volva cup is buried deep in the moss at the base. Do not pluck mushrooms without inspecting the stem base!", "zh": "【严禁采食！务必辨识】：通体纯白丝绢光泽。菌褶纯白色且离生。柄上部有下垂膜质菌环，【基部深埋在苔藓中有松散的白色袋状菌托】。采摘任何野菌都必须连根拔起查验是否有菌托，严禁采食任何带有纯白菌褶的白蘑菇！", "fi": "ÄLÄ KOSKAAN KERÄÄ SYÖTÄVÄKSI. Tunnista hengenvaaran välttämiseksi: Puhtaan valkoinen koko sieni. Heltat ovat aina valkoiset ja irti jalasta. Jalassa riippuva hapsuinen rengas ja tyvellä syvällä sammaleessa pussimainen tuppi. Tarkista aina jalan tyvi!"},
      lookalikes: {"en": "Novices confuse it with edible Field Mushrooms / Champignons (Agaricus / Herkkusieni). Agaricus gills turn pink, then chocolate-brown in maturity, and NEVER have a basal volva cup. Golden rule in Finland: NEVER eat white mushrooms with white gills.", "zh": "极易被不知情者误当作白蘑菇/草菇（Agaricus / Herkkusieni）。食用洋菇成熟后菌褶会变为粉红至深巧克力褐色，且【绝对没有基部袋状菌托】。在芬兰的初学者保命铁律：绝不采食任何菌褶纯白的白色蘑菇！", "fi": "Sekoitetaan valitettavasti syötäviin herkkusieniin (Agaricus). Herkkusienten heltat muuttuvat vanhetessa vaaleanpunaisiksi ja suklaanruskeiksi, eikä niillä koskaan ole pussimaista tuppea tyvellä. Suomen sääntö: ÄLÄ KOSKAAN syö valkohelttaista valkoista sientä."},
      cookingGuide: {"en": "DO NOT COOK. DO NOT EAT. Contains lethal amatoxins that resist boiling, frying, and drying. Causes massive liver necrosis after 6–24h latency. If suspected, call Finnish Poison Information Centre immediately: 0800 147 111 or Emergency 112.", "zh": "【严禁烹饪！剧毒致死】：含耐高温鹅膏毒肽，水煮、爆炒、烘干皆无法破坏其毒性！食用后有6-24小时无症状潜伏期，随后引发暴发性肝肾衰竭坏死！疑似误食立即拨打芬兰中毒中心0800 147 111或急救112！", "fi": "EI SAA VALMISTAA EIKÄ SYÖDÄ. Tappavat amatoksiinit eivät tuhoudu keittämällä, paistamalla eikä kuivaamalla. Aiheuttaa maksakuolion 6–24 h viiveen jälkeen. Soita heti Myrkytystietokeskukseen: 0800 147 111 tai 112."},
      image: "./images/amanita_virosa.jpg",
      gallery: [{"file": "./images/amanita_virosa.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/amanita_virosa_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) simjar, some rights reserved (CC BY-NC)"}, {"file": "./images/amanita_virosa_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) Jesse Kalwij, some rights reserved (CC BY-NC)"}, {"file": "./images/amanita_virosa_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Jesse Kalwij, some rights reserved (CC BY-NC)"}],
      rating: "☠️☠️☠️",
      edibility: "deadly",
      level: "deadly",
      months: [8, 9, 10],
      names: {
        en: { primary: "Destroying Angel", local: "Valkokärpässieni", alt: "Deadly White Amanita" },
        zh: { primary: "致命白毒伞", local: "鳞柄白毒鹅膏 / 毁灭天使", alt: "Amanita virosa" },
        fi: { primary: "Valkokärpässieni", local: "Valkoinen kärpässieni", alt: "Amanita virosa" }
      },
      habitatName: {
        en: "Moist spruce heaths, mossy spruce-birch forests in Uusimaa",
        zh: "乌西玛大区阴暗湿润的挪威云杉林与白桦混交苔藓丛",
        fi: "Tuoreet kuusikot, paksusammaliset sekametsät"
      },
      morphology: {
        en: {
          cap: "5–12 cm, PURE SILKY WHITE throughout, conical-bell shaped",
          underCap: "PURE WHITE GILLS, crowded, free from stem; never turns pink or brown",
          stem: "Slender white stem with delicate skirt-like ring and LOOSE SAC VOLVA at base",
          odor: "Faint sickly-sweet, unpleasantly cloying or radish-like"
        },
        zh: {
          cap: "5–12厘米，通体纯白如玉，初呈钟形后微平展",
          underCap: "纯白菌褶，离生，极密集；老熟也绝不变成粉色或褐色",
          stem: "修长白色，中上部有下垂菌环，基部深埋在苔藓中有松散杯状菌托（菌袋）",
          odor: "微带令人不适的甜腻腥臭味或生萝卜味"
        },
        fi: {
          cap: "5–12 cm, puhtaanvalkoinen, nuorena kartiomainen, myöhemmin laakeneva",
          underCap: "AINA PUHTAANVALKOISET tiheät irtotiheät heltat",
          stem: "Valkoinen, hapsuinen, yläosassa riippuva rengas ja tyvellä suuri pussimainen tuppi",
          odor: "Imelän makeahko, epämiellyttävä retikkamainen lemu"
        }
      },
      warning: {
        en: "DEADLY AMATOXINS. Destroys human liver and kidneys. Fatal latency: 6–24 hours asymptomatic before violent collapse.",
        zh: "【致命剧毒】含致命鹅膏毒肽，不可逆破坏肝肾细胞。潜伏期长达6-24小时无症状，随后剧烈霍乱样吐泻并迅速导致多器官衰竭亡！",
        fi: "TAPPAVA MYRKKY: Amatoksiinit tuhoavat maksan ja munuaiset. 6–24 tunnin oireeton viive ennen romahdusta!"
      }
    },
    {
      id: "cortinarius_rubellus",
      latinName: "Cortinarius rubellus",
      whereWhen: {"en": "DEADLY POISONOUS: Fruits August to October in damp, acidic Norway spruce moss heaths alongside blueberry bushes and Golden Chanterelles in Nuuksio, Sipoonkorpi, Vaakkoi, and Luukki.", "zh": "【致命剧毒！潜伏期极长】：8月至10月生于潮湿酸性挪威云杉林中，常与蓝莓灌木丛及真假鸡油菌混生于同一片苔藓毯上。Nuuksio、Sipoonkorpi、Vaakkoi与Luukki高发。", "fi": "TAPPAVAN MYRKYLLINEN: Kasvaa elo-lokakuussa kosteissa happamissa mustikkatyypin kuusikoissa kantarellien ja mustikoiden vieressä Nuuksiossa, Sipoonkorvessa, Vaakkoissa ja Luukissa."},
      searchTactics: {"en": "NEVER PICK FOR CONSUMPTION. Distinct conical cinnamon-copper cap with a sharp central pointed peak (umbo). Thick rusty-brown gills. The stem is cinnamon-brown adorned with yellow zigzag bands, and is SOLID throughout (unlike the hollow Funnel Chanterelle).", "zh": "【严禁采食！】肉桂红褐色菌盖，顶端有极锐利锥状乳突。菌褶厚稀肉桂锈红。菌柄为带黄色“之”字形蛇纹斑带的【实心肉柱】（与漏斗鸡油菌的空心黄管截然相反）。", "fi": "ÄLÄ KERÄÄ SYÖTÄVÄKSI. Kartiomainen kanelinruskea lakki, jossa terävä piikkimäinen huippu. Paksut ruosteenruskeat heltat. Jalka on kanelinruskea keltaisilla siksak-vöillä ja TÄYSIN UMPINAINEN."},
      lookalikes: {"en": "Frequently gathered accidentally by people picking Funnel Chanterelles or Chroogomphus rutilus. Funnel Chanterelles have a HOLLOW yellow stem and perforated funnel cap; Deadly Webcaps have a SOLID stem and pointed peak.", "zh": "极易被混在漏斗鸡油菌中一起采摘。漏斗鸡油菌为黄色空心管状柄且菌顶有穿孔洞；赭红丝膜菌为实心坚韧带斑柄且顶端尖突，含导致肾坏死的奥来毒素。", "fi": "Sekoitetaan usein suppilovahveroihin sammalikossa kahmiessa. Suppilovahverolla on ONTTOMAINEN keltainen jalka ja reikäinen suppilo; myrkkyseitillä umpinainen jalka ja terävä lakki."},
      cookingGuide: {"en": "DO NOT COOK. DO NOT EAT. Contains orellanine, a potent nephrotoxin causing permanent kidney destruction. Symptoms appear 2 to 14 days later, leading to lifelong dialysis or death. Call 0800 147 111.", "zh": "【严禁烹饪！剧毒致死】：含奥来毒素，不可逆摧毁肾小管。潜伏期长达2至14天，发病时已造成终身肾衰竭甚至死亡！中毒中心：0800 147 111。", "fi": "EI SAA SYÖDÄ. Orellaniini tuhoaa munuaiset peruuttamattomasti. Oireet alkavat vasta 2–14 vuorokauden kuluttua johtaen elinikäiseen dialyysiin. Soita 0800 147 111."},
      image: "./images/cortinarius_rubellus.jpg",
      gallery: [{"file": "./images/cortinarius_rubellus.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/cortinarius_rubellus_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) gnomie_87, some rights reserved (CC BY-NC)"}, {"file": "./images/cortinarius_rubellus_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) gnomie_87, some rights reserved (CC BY-NC)"}, {"file": "./images/cortinarius_rubellus_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) gnomie_87, some rights reserved (CC BY-NC)"}],
      rating: "☠️☠️☠️",
      edibility: "deadly",
      level: "deadly",
      months: [8, 9, 10],
      names: {
        en: { primary: "Deadly Webcap", local: "Suippumyrkkyseitikki", alt: "Red Webcap" },
        zh: { primary: "赭红丝膜菌", local: "尖顶毒丝膜菌 / 致命丝膜菌", alt: "Cortinarius rubellus" },
        fi: { primary: "Suippumyrkkyseitikki", local: "Myrkkyseitikki", alt: "Cortinarius rubellus" }
      },
      habitatName: {
        en: "Moist acidic spruce heaths alongside blueberries and chanterelles",
        zh: "酸性潮湿云杉林，常混生在欧洲蓝莓丛与鸡油菌旁",
        fi: "Kosteat, happamat mustikkatyypin kuusikot ja korvet"
      },
      morphology: {
        en: {
          cap: "3–8 cm, cinnamon to reddish-copper, distinct sharp pointed conical peak (umbo)",
          underCap: "Thick, widely spaced rusty-cinnamon gills with cobweb veil in youth",
          stem: "Cinnamon-brown with yellow zigzag bands; SOLID inside",
          odor: "Faint raw radish or damp soil"
        },
        zh: {
          cap: "3–8厘米，红褐色至肉桂色，中央有极明显尖锐圆锥状凸起（如巫师帽）",
          underCap: "厚而稀疏的锈红肉桂色菌褶，幼时具蛛网状菌丝残余",
          stem: "肉桂褐色，表面有黄色“之”字形蛇纹斑带，内部实心坚韧",
          odor: "微弱的生萝卜味或潮湿地窖泥土味"
        },
        fi: {
          cap: "3–8 cm, kanelin- tai kuparinruskea, selkeä terävä suippuinen kohouma",
          underCap: "Harakseen sijoittuneet paksut kanelinruskeat heltat",
          stem: "Kellanruskea, keltaisten siksak-vöiden kirjoma, umpinainen",
          odor: "Heikko retikkamainen tai naurismainen tuoksu"
        }
      },
      warning: {
        en: "DEADLY ORELLANINE TOXIN. 2 to 14 days latency! Destroys kidneys permanently, causing irreversible renal failure.",
        zh: "【致命剧毒】含奥来毒素（Orellanine）。潜伏期长达2至14天！早期几乎无异样，发病时肾脏滤过微管已遭毁灭性纤维化硬化坏死！",
        fi: "TAPPAVA MYRKKY: Orellaniini tuhoaa munuaiset pysyvästi. Oireet ilmaantuvat vasta 2–14 päivän kuluttua syömisestä!"
      }
    },
    {
      id: "galerina_marginata",
      latinName: "Galerina marginata",
      whereWhen: {"en":"DEADLY POISONOUS: August to November. Fruits on decaying coniferous logs, rotting spruce and birch stumps, buried wood chips, and logging debris throughout all Helsinki forests (Keskuspuisto, Haltiala, Nuuksio).","zh":"【致命剧毒！致死量极小】：8月至11月出菇。专一生长于腐朽倒木、云杉及白桦树桩、埋于地下的碎木屑上。赫尔辛基各大森林（中央公园、Haltiala原始林区、Nuuksio）腐木上均广泛分布。","fi":"TAPPAVAN MYRKYLLINEN: Elo-marraskuussa. Kasvaa lahoavilla havupuiden rungoilla, kannoilla, hakkuutähteillä ja kuorikkeella kaikissa Helsingin metsissä (Keskuspuisto, Haltiala, Nuuksio)."},
      searchTactics: {"en":"NEVER PICK FOR CONSUMPTION. Learn to identify to stay safe: Small honey-brown to ochre cap (2-6cm) with translucent striate edge when wet. Slender brownish stem with a fragile membranous ring and silvery-white silky fibrillose coating below the ring. Distinct mealy/flour-like odor.","zh":"【严禁采食！务必认清保命】：菌盖小（2-6cm），潮湿时呈蜜褐或黄褐色，边缘有透光条纹。纤细菌柄上具脆弱膜质菌环，菌环下方覆有银白色丝绢光泽纤维。具明显生面粉气味。","fi":"ÄLÄ KOSKAAN KERÄÄ SYÖTÄVÄKSI. Pieni hunajanruskea lakki (2–6 cm), jonka reuna on kosteana läpisäteinen. Hento ruskehtava jalka, jossa pieni rengas ja sen alapuolella hopeanvalkoista silkkisäikeisyyttä. Tuoksu jauhomainen."},
      lookalikes: {"en":"LETHALLY confused with edible Sheathed Woodtuft (Kuehneromyces mutabilis / Koivunkantosieni). Kuehneromyces has prominent dark bristly scales below the ring. Strict rule for novices: NEVER forage small brown wood-dwelling mushrooms in Finland!","zh":"【极度危险混淆】：极易与食用菌毛柄库恩菇（变色鳞伞/Koivunkantosieni）混淆。后者菌环下方密布粗糙深褐色反卷鳞片。初学者安全铁律：在芬兰绝不采摘生长在木桩上的任何小型褐色真菌！","fi":"SEKOITETAAN HENGENVAARALLISESTI koivunkantosieniin (Kuehneromyces mutabilis). Koivunkantosienellä on renkaan alapuolella karkeita tummanruskeita suomuja. Aloittelijan sääntö: Älä koskaan poimi pieniä ruskeita lahottajasieniä!"},
      cookingGuide: {"en":"DO NOT COOK. DO NOT EAT. Contains deadly amatoxins causing severe destruction of liver cells and kidneys after a 6-24 hour delay. Cooking, boiling, or drying does NOT neutralize amatoxins. Emergency: 112 / Poison Info: 0800 147 111.","zh":"【严禁烹饪！一小把足以致命】：含高致命鹅膏毒肽，耐高温，水煮爆炒皆不失效。食用后经6至24小时潜伏期突发暴发性肝坏死！急救：112 / 芬兰中毒中心：0800 147 111。","fi":"EI SAA VALMISTAA EIKÄ SYÖDÄ. Sisältää kuolettavia amatoksiineja, jotka tuhoavat maksasolut 6–24 tunnin viiveen jälkeen. Keittäminen tai kuivaus ei poista myrkkyä. Hätänumero: 112 / Myrkytystietokeskus: 0800 147 111."},
      image: "./images/galerina_marginata.jpg",
      gallery: [{"file": "./images/galerina_marginata.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/galerina_marginata_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) Alan Rockefeller, some rights reserved (CC BY)"}, {"file": "./images/galerina_marginata_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) Alan Rockefeller, some rights reserved (CC BY)"}, {"file": "./images/galerina_marginata_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Alan Rockefeller, some rights reserved (CC BY)"}],
      rating: "☠️☠️☠️",
      edibility: "deadly",
      level: "deadly",
      months: [8, 9, 10, 11],
      names: {
        en: { primary: "Funeral Bell", local: "Myrkkynääpikkä", alt: "Deadly Skullcap" },
        zh: { primary: "纹缘盔孢伞", local: "丧钟毒盔伞 / 剧毒条缘菇", alt: "Galerina marginata" },
        fi: { primary: "Myrkkynääpikkä", local: "Hautajaissieni", alt: "Galerina marginata" }
      },
      habitatName: {
        en: "Decaying conifer logs, rotting spruce stumps, mossy wood debris",
        zh: "腐烂的针叶树桩、倒木苔藓及腐木堆上丛生",
        fi: "Lahopuulla, havupuiden kannoilla ja lahoavilla rungoilla"
      },
      morphology: {
        en: {
          cap: "1.5–4.5 cm, ochre-brown to watery cinnamon, translucent striate margin",
          underCap: "Crowded ochre-yellow to rusty-brown gills",
          stem: "Thin brownish stem with small membranous ring, silky fibrils below (no coarse scales)",
          odor: "Floury or mealy"
        },
        zh: {
          cap: "1.5–4.5厘米，赭黄至水浸肉桂色，湿润时边缘有微透条纹",
          underCap: "较密集的黄赭色至锈褐色菌褶",
          stem: "纤细褐色菌柄，有微小膜质菌环，环下部呈银白丝绢光滑状（绝无翘起黑鳞片）",
          odor: "面粉味或生面团腥味"
        },
        fi: {
          cap: "1.5–4.5 cm, kellanruskea tai hunajanruskea, reunasta kosteusmuuntuva",
          underCap: "Tiheät, aluksi kellertävät, myöhemmin ruosteenruskeat heltat",
          stem: "Hento, rengas jalassa, renkaan alapuolella vaaleita pitkittäissäikeitä",
          odor: "Jauhomainen"
        }
      },
      warning: {
        en: "DEADLY AMATOXINS. Destroys human liver. Do not harvest wood-decay clusters unless you check stem scales individually.",
        zh: "【致命剧毒】含与白毒伞同源的致命鹅膏肽。极易与可食用的库恩菇（光帽鳞伞）混淆，切勿在不查验菌柄鳞片的情况下丛采烂木菇！",
        fi: "TAPPAVA MYRKKY: Sisältää samoja amatoksiineja kuin valkokärpässieni. Älä sekoita koivunkantosienieen!"
      }
    },
    {
      id: "gyromitra_esculenta",
      latinName: "Gyromitra esculenta",
      whereWhen: {"en":"DEADLY POISONOUS RAW / DELICACY WHEN DETOXIFIED: Spring mushroom fruiting May to early June in sandy Scots pine woods, logging clearings, disturbed soil, vehicle tracks, and sand pits in Uusimaa (e.g. Sipoonkorpi, Nuuksio sandy tracks).","zh":"【生食致命剧毒 / 规范处理后为传统珍馐】：春季特色菌，5月至6月上旬出菇。生于沙质松树林开阔地、伐木采伐迹地、被车轮碾压的沙土凹痕及泥土裸露地。Sipoonkorpi与Nuuksio沙质小径多见。","fi":"TAPPAVAN MYRKYLLINEN RAAKANA / HERKKUSIENI OIKEIN KÄSITELTYNÄ: Kevätsieni, sato touko-kesäkuussa hiekkapohjaisissa kangasmetsissä, hakkuuaukeilla, polunvarsilla ja maansiirtoalueilla Uudellamaalla (esim. Sipoonkorpi, Nuuksio)."},
      searchTactics: {"en":"Look for rounded, brain-like or convoluted dark walnut-brown to reddish-brown caps poking through needle litter. The mushroom is entirely hollow inside with multi-chambered folds.","zh":"在开春融雪后的沙地松针间搜寻类似深核桃红褐色的大脑沟回状或胡桃壳皱缩状不规则菌盖。菌体内部完全空心，呈多腔室褶皱。","fi":"Etsi aivomaisesti poimuttuneita, pähkinänruskeita tai punaruskeita möykkyjä hiekkamaalta. Sieni on sisältä täysin ontto ja lokeroinen."},
      lookalikes: {"en":"Gyromitra gigas (Iso korvasieni) has a lighter yellowish cap; Morchella (Huhtasieni / True Morel) has regular honeycomb-like pits and ridges rather than brain folds and is non-toxic.","zh":"巨鹿花菌（Gyromitra gigas）颜色偏黄褐；真正羊肚菌（Morchella / Huhtasieni）表面呈规则蜂窝状网眼与凹坑，无大脑回旋褶皱且无剧毒。","fi":"Laakakorvasienellä ja isokorvasienellä on kellertävämpi lakki; aidoilla huhtasienillä (Morchella) on säännöllinen kennomainen lokerikko aivopoimujen sijaan."},
      cookingGuide: {"en":"LETHAL RAW (contains gyromitrin). MANDATORY OFFICIAL FINNISH DETOXIFICATION: Must be boiled twice in rolling water (1 part mushrooms to 3+ parts water) for at least 5 minutes each time, discarding water and rinsing thoroughly in cold water between. Keep windows wide open to avoid breathing toxic fumes! Cook in traditional spring butter-cream sauces.","zh":"【生食含剧毒鹿花菌素！严禁直接食用】：芬兰食品安全局法定脱毒程序：必须在沸水中大火滚煮两次，每次至少5分钟（水菇比例至少3:1），煮完倒掉毒水并用大量冷水彻底冲洗！煮菇时必须开窗通风，切勿吸入蒸汽！脱毒后加黄油奶油炖煮，风味浓郁无比。","fi":"TAPPAVA RAAKANA (sisältää gyromitriinia). PAKOLLINEN KÄSITTELY: Ryöpättävä kahteen kertaan runsaassa vedessä (1 osa sieniä, 3 osaa vettä) vähintään 5 minuuttia kerrallaan. Keitinvesi kaadetaan pois ja sienet huuhdellaan huolellisesti kylmällä vedellä keittojen välillä. Tuuleta keittiö höyryjen takia! Valmista kermakastikkeeksi."},
      image: "./images/gyromitra_esculenta.jpg",
      gallery: [{"file": "./images/gyromitra_esculenta.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/gyromitra_esculenta_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) Panda5360, some rights reserved (CC BY-NC)"}, {"file": "./images/gyromitra_esculenta_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) Panda5360, some rights reserved (CC BY-NC)"}, {"file": "./images/gyromitra_esculenta_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Pilgrim218, some rights reserved (CC BY-NC)"}],
      rating: "!",
      edibility: "parboil",
      level: "advanced",
      months: [5, 6],
      names: {
        en: { primary: "False Morel", local: "Korvasieni", alt: "Brain Mushroom" },
        zh: { primary: "鹿花菌", local: "脑状羊肚菌 / 假羊肚菌", alt: "Gyromitra esculenta" },
        fi: { primary: "Korvasieni", local: "Kevätsieni", alt: "Gyromitra esculenta" }
      },
      habitatName: {
        en: "Disturbed sandy pine clearings and logging tire ruts in spring",
        zh: "春季5-6月沙质红松砍伐迹地、林间车辙压过翻起的湿泥中",
        fi: "Keväisin hiekkapohjaisilla männikköaukeilla, ajourilla ja rikotussa maassa"
      },
      morphology: {
        en: {
          cap: "5–12 cm, chestnut-reddish brown, convoluted brain-like folded lobes",
          underCap: "No gills or pores; hollow chambered internal cavity",
          stem: "Short, wrinkled, whitish with lilac tint",
          odor: "Rich mushroom aroma"
        },
        zh: {
          cap: "5–12厘米，栗红褐色，极具特征的脑回状复杂卷褶，内部空腔多室",
          underCap: "既无菌褶也无孔，表层褶皱即产生孢子部位",
          stem: "短小且带有皱缩纵棱，灰白带浅紫晕",
          odor: "生菌气味浓郁，生食有剧毒"
        },
        fi: {
          cap: "5–12 cm, aivomaisesti poimuttunut, pähkinän- tai suklaanruskea",
          underCap: "Ei erillistä pillistöä tai helttaa; ontto ja lokeroinen sisältä",
          stem: "Lyhyt, poimuinen, vaalea tai vaaleanpunertava",
          odor: "Voimakkaan miellyttävä sienituoksu"
        }
      },
      warning: {
        en: "DEADLY TOXIC RAW (Gyromitrin / MMH). Inhaling steam can poison you! Must be boiled twice in abundant water (5 min each) with open ventilation.",
        zh: "【生食致死】含剧毒鹿花蕈素（体内水解为火箭燃料成分一甲基肼）。连水蒸气都有毒！必须在通风处用大量水煮沸焯烫两次（每次5分钟），煮水必须倒弃！",
        fi: "TAPPAVAN MYRKYLLINEN RAAKANA. Sisältää gyromitriinia (MMH). Keitettävä vähintään kaksi kertaa runsaassa vedessä (5 min) hyvässä tuuletuksessa!"
      }
    },
    {
      id: "paxillus_involutus",
      latinName: "Paxillus involutus",
      whereWhen: {"en":"DANGEROUS & POTENTIALLY DEADLY OVER TIME: August to October. Extremely common in deciduous and coniferous woods, birch parks, urban lawns, roadsides, and private gardens across all Helsinki (Töölönlahti, Keskuspuisto, Meilahti).","zh":"【危险！累积性致死免疫溶血】：8月至10月。极其常见于阔叶与针叶林、白桦公园、城市草坪、路旁与私家花园（Töölönlahti、中央公园、Meilahti处处可见）。","fi":"VAARALLINEN JA KUOLETTAVA: Elo-lokakuussa. Erittäin yleinen havu- ja lehtimetsissä, koivikoissa, puistoissa, pihoilla ja teiden varsilla koko Helsingissä (Töölönlahti, Keskuspuisto, Meilahti)."},
      searchTactics: {"en":"Thick yellow-brown to olive-tan cap with a strongly inrolled, velvety-fuzzy margin. Decurrent brownish-yellow gills that bruise instantly dark reddish-brown when scratched with a thumbnail.","zh":"黄褐色至橄榄赭色厚菌盖，边缘向内紧紧卷曲呈厚毛绒圈状。延生黄褐色菌褶，指甲轻刮处会立即氧化变深红褐色。","fi":"Paksumaltoinen ruskeankeltainen lakki, jonka reuna on tiukasti sisäänkiertynyt ja nukkainen. Johtavat heltat tummuvat voimakkaasti punaruskeiksi painettaessa kynnellä."},
      lookalikes: {"en":"Historically boiled and eaten in older generations, but now medically proven to cause Paxillus syndrome: an immune hemolysis where antibodies destroy your red blood cells after repeated consumption, leading to acute kidney collapse.","zh":"过往年代曾有人焯水食用，但现代医学已证实其含有抗原，反复食用会激活人体免疫系统攻击破坏自身红细胞，诱发急性溶血性肾衰竭致死！","fi":"Aiemmin vanha kansa keitti syötäväksi, mutta aiheuttaa Paxillus-syndrooman: vasta-aineet alkavat tuhota elimistön omia punasoluja toistuvan syönnin jälkeen johtaen munuaisvaurioon ja kuolemaan."},
      cookingGuide: {"en":"DO NOT EAT. Toxins cannot be removed by boiling, parboiling, or drying. The hemolytic mechanism accumulates over meals. Completely avoid.","zh":"【严禁食用！】任何水煮、焯水、烘干均无法破坏该致敏抗原。毒性在体内累积触发致命溶血反应。切勿采食。","fi":"EI SAA SYÖDÄ. Myrkyllisiä antigeenejä ei voi poistaa keittämällä eikä kuivaamalla. Älä koskaan kerää ruoaksi."},
      image: "./images/paxillus_involutus.jpg",
      gallery: [{"file": "./images/paxillus_involutus.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/paxillus_involutus_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) Victoria M., some rights reserved (CC BY)"}, {"file": "./images/paxillus_involutus_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) Victoria M., some rights reserved (CC BY)"}, {"file": "./images/paxillus_involutus_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Victoria M., some rights reserved (CC BY)"}],
      rating: "☠️☠️",
      edibility: "deadly",
      level: "deadly",
      months: [7, 8, 9, 10],
      names: {
        en: { primary: "Brown Rollrim", local: "Pulkkosieni", alt: "Poison Rollrim" },
        zh: { primary: "卷边桩菇", local: "卷缘红褶菌 / 脉褶菌", alt: "Paxillus involutus" },
        fi: { primary: "Pulkkosieni", local: "Involutus", alt: "Paxillus involutus" }
      },
      habitatName: {
        en: "Urban parks, roadside verges, mixed spruce-birch stands across Helsinki",
        zh: "赫尔辛基城市绿地、行道树基部、白桦与针叶林缘",
        fi: "Puistot, pientareet, pihat ja sekametsät"
      },
      morphology: {
        en: {
          cap: "5–15 cm, olive-brown to ochre, distinctly INROLLED VELVETY MARGIN",
          underCap: "Yellowish-olive gills that bruise dark brown instantly when touched",
          stem: "Stout, brownish, central or eccentric",
          odor: "Sourish, mushroomy"
        },
        zh: {
          cap: "5–15厘米，橄榄灰褐至赭褐色，幼到老【边缘深度向内卷曲且带绒毛】",
          underCap: "黄褐色网脉状菌褶，指尖轻压即刻氧化变为深棕褐色",
          stem: "粗糙短壮，色同菌盖",
          odor: "微酸的土腥味"
        },
        fi: {
          cap: "5–15 cm, oliivin- tai nahanruskea, reuna voimakkaasti sisäänkiertynyt ja nukkainen",
          underCap: "Rusehtavankeltaiset heltat, jotka tummuvat kosketuksesta ruskeiksi",
          stem: "Tanakka, lakin värinen",
          odor: "Hapan, sienimäinen"
        }
      },
      warning: {
        en: "PAXILLUS SYNDROME. Repeated consumption triggers sudden fatal autoimmune hemolysis destroying red blood cells.",
        zh: "【严重免疫过敏毒性】曾被旧俄系书籍误列为可食。多次食用后体内抗体突发引发急性免疫溶血，红细胞瞬间破裂致休克肾衰竭！",
        fi: "AIHEUTTAA PAXILLUS-SYNDROORMAN. Jatkuva käyttö laukaisee hengenvaarallisen autoimmuunihemolyysin!"
      }
    },
    {
      id: "lactarius_torminosus",
      latinName: "Lactarius torminosus",
      whereWhen: {"en":"August to October. Strictly mycorrhizal with Birch (Betula). Abundant on birch borders, forest path verges, moist grassy woodland edges, and heaths in Helsinki (Keskuspuisto, Seurasaari, Haltiala).","zh":"8月至10月。严格与白桦树共生。在赫尔辛基白桦树林缘、步道草地边缘、湿润草坡林地（中央公园、Seurasaari、Haltiala）极为丰富。","fi":"Elo-lokakuussa. Esiintyy koivun seuralaisena valoisissa koivikoissa, polkujen varsilla, metsäniityillä ja kankailla Helsingissä (Keskuspuisto, Seurasaari, Haltiala)."},
      searchTactics: {"en":"Search the dripline of birch trees. Look for salmon-pink to reddish-pink caps with concentric darker zones and a conspicuously shaggy, beard-like woolly margin. Damaged flesh exudes acrid white milk.","zh":"在白桦树冠投影外围寻找。特征为鲑鱼肉粉色或红粉色菌盖，表面有深浅同心环带，边缘密被长毛状下卷的粗羊毛胡须。划破菌褶流出辛辣灼口的乳白色汁液。","fi":"Etsi koivujen alta. Vaaleanpunainen rengaskuvioinen lakki, jonka reunassa on erittäin selvä villava, takkuinen karvapeite. Erittelee polttavan valkoista maitiaisnestettä."},
      lookalikes: {"en":"Lactarius pubescens (Valkokarvarousku) is paler/whitish with woolly margin and also requires boiling. Other milkcaps with white acrid milk.","zh":"白毛乳菇（Lactarius pubescens）颜色更白，同样需要焯水排毒；与美味松乳菇区别在于本种汁液为纯白且极辣（松乳菇为胡萝卜橙汁且不辣）。","fi":"Valkokarvarousku (Lactarius pubescens) on vaaleampi ja vaatii saman käsittelyn; leppärouskuilla maitiaisneste on oranssia, karvarouskulla valkoista."},
      cookingGuide: {"en":"MANDATORY 10-MINUTE PARBOILING (RYÖPPÄYS): Raw flesh is violently acrid and gastro-toxic. Boil in generous water (1:4 ratio) for 10 minutes, drain, rinse with cold water, and press out excess liquid. Star ingredient of traditional Finnish Mushroom Salad (Sienisalaatti) with onions, smetana, and white pepper, or preserved in salt.","zh":"【必须焯水10分钟（Ryöppäys）！】：生菇剧烈辛辣灼舌且引起胃肠炎。必须投入大量沸水中大火滚煮10分钟，倒掉苦水并用冷水冲透滤干。芬兰传统蘑菇沙拉（Sienisalaatti）不二主角：切碎与红洋葱末、酸奶油（Smetana/Kermaviili）、白胡椒粉和盐拌匀，亦极宜盐渍越冬。","fi":"EHDOTON RYÖPPÄYS 10 MINUUTTIA: Raakana polttavan kirpeä ja myrkyllinen. Keitä runsaassa vedessä 10 min, kaada vesi pois, huuhtele kylmällä vedellä ja purista liika neste. Perinteisen suomalaisen sienisalaatin ykkösraaka-aine sipulin, kermaviilin/smetanan ja pippurin kanssa, tai suolasieneksi."},
      image: "./images/lactarius_torminosus.jpg",
      gallery: [{"file": "./images/lactarius_torminosus.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/lactarius_torminosus_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) George Lee, some rights reserved (CC BY-NC)"}, {"file": "./images/lactarius_torminosus_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) George Lee, some rights reserved (CC BY-NC)"}, {"file": "./images/lactarius_torminosus_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Avery Bartels, some rights reserved (CC BY-NC)"}],
      rating: "!",
      edibility: "parboil",
      level: "intermediate",
      months: [8, 9, 10],
      names: {
        en: { primary: "Woolly Milkcap", local: "Karvarousku", alt: "Bearded Milkcap" },
        zh: { primary: "白绒乳菇", local: "毛头乳菇 / 桦乳菇 / 卷缘毛乳菇", alt: "Lactarius torminosus" },
        fi: { primary: "Karvarousku", local: "Rousku", alt: "Lactarius torminosus" }
      },
      habitatName: {
        en: "Birch roots, damp mossy edges, mixed woodlands",
        zh: "白桦树根际共生，林间潮湿苔藓带",
        fi: "Koivikot, sekametsät, rantatiheiköt"
      },
      morphology: {
        en: {
          cap: "5–12 cm, salmon-pink with darker rings and DENSE SHAGGY WOOLY HAIRS at margin",
          underCap: "Pale pinkish-cream gills exuding WHITE ACRID MILK",
          stem: "Pale pinkish, firm becoming hollow",
          odor: "Fruity but violently peppery and burning when raw"
        },
        zh: {
          cap: "5–12厘米，鲜肉粉色带同心环带，菌盖边缘密布厚长白色羊毛状丛卷毛",
          underCap: "密生浅肉粉色菌褶，割破渗出白浆，尝之如灼烈生辣椒",
          stem: "粉肉色，老后中空",
          odor: "果香混杂烈性辛辣白乳汁"
        },
        fi: {
          cap: "5–12 cm, lohenpunainen, rengaskuvioinen, reunassa tiheää pörröistä karvaa",
          underCap: "Vaaleanpunertavat tiheät heltat, joista vuotaa valkoista polttavaa maitiaisnestettä",
          stem: "Lakin värinen, ontostuva",
          odor: "Hedelmäinen, raakana suuta polttava maku"
        }
      },
      culinaryTip: {
        en: "Must be parboiled for 10–15 minutes, drained and rinsed. The quintessential ingredient for Finnish Christmas Sienisalaatti!",
        zh: "必须焯水去辣！在大锅沸水中焯煮10-15分钟彻底排出苦辣素，过凉水挤干后腌制，是芬兰传统圣诞酸奶油沙拉的绝配底料！",
        fi: "Keitettävä vähintään 10–15 minuuttia ja huuhdeltava! Perinteisen suomalaisen sienisalaatin tärkein perusraaka-aine."
      }
    },
    {
      id: "lactarius_rufus",
      latinName: "Lactarius rufus",
      whereWhen: {"en":"July to November. One of Finland's most prolific wild mushrooms! Fruits by the millions across dry acidic Scots pine heaths (kuiva kangas), mossy granite crags, and peat bogs across all Uusimaa forests (e.g. Nuuksio, Sipoonkorpi, Luukki).","zh":"7月至11月。芬兰大自然出菇量最大的野生菇之一！数以百万计地出产于干燥酸性松树苔藓林（kuiva kangas）、花岗岩岩缝及泥炭藓沼泽边缘，各大森林（Nuuksio、Sipoonkorpi、Luukki）随处可见。","fi":"Heinä-marraskuussa. Suomen satoisimpia luonnonsieniä! Satoa syntyy miljoonittain kuivissa mäntykankaissa, kallioilla ja rämeillä koko Uudenmaan alueella (kuten Nuuksio, Sipoonkorpi, Luukki)."},
      searchTactics: {"en":"Look on dry pine needle floors and mossy mounds. Smooth reddish-brown to copper-bay cap with a sharp central pointed nipple (pieni suippo nysty). Broken flesh yields abundant white milk that burns the tongue.","zh":"在干燥松针地与低矮苔藓包上扫视。菌盖为光滑红褐色或赤铜色，中央有一枚尖锐凸起的小乳突。划伤处涌出大量纯白乳汁，沾在舌尖有强烈辛辣感。","fi":"Etsi kuivalta neulaskarikkeelta ja kalliopainanteista. Sileä punaruskea lakki, jonka keskellä on terävä nysty. Valkeaa polttavaa maitiaisnestettä vuotaa runsaasti."},
      lookalikes: {"en":"Cortinarius rubellus (Deadly Webcap) also grows in pine heaths, but Cortinarius has NO MILK whatsoever and rust-brown gills. ALWAYS test for white milky liquid!","zh":"【务必区分赭红丝膜菌】：致命赭红丝膜菌亦生于针叶林，但丝膜菌【绝对没有白色乳汁】且菌褶呈锈红肉桂色。采摘时必须划伤菌褶确认有纯白乳汁！","fi":"Suippumyrkkyseitikki (Cortinarius rubellus) kasvaa samankaltaisissa maastoissa, mutta seitikillä EI OLE MAITIAISNESTETTÄ ja heltat ovat ruosteenruskeat. Tarkista aina maitiaisneste!"},
      cookingGuide: {"en":"MANDATORY 10-MINUTE PARBOILING (RYÖPPÄYS): Boil for 10 minutes in rolling water, discard the water, and rinse in cold water. Becomes mild, crunchy, and savory. Quintessential Finnish salted mushroom (suolasieni) layered in crocks with coarse sea salt, or chopped into winter mushroom salads.","zh":"【必须焯水10分钟（Ryöppäys）！】：大火沸水滚煮10分钟后弃去苦水，冷水冲净挤干。苦辣味彻底消除，口感爽脆。芬兰经典传统盐渍蘑菇（Suolasieni）首选原料：在陶罐中一层粗海盐一层焯水松乳菇腌渍，深冬浸泡脱盐后拌沙拉，风味一流。","fi":"EHDOTON RYÖPPÄYS 10 MINUUTTIA: Keitä 10 minuuttia runsaassa vedessä, kaada keitinvesi pois ja huuhtele kylmällä vedellä. Menettää poltteensa ja muuttuu rapeaksi. Perinteisin suolasieni, joka säilötään karkean merisuolan kera."},
      image: "./images/lactarius_rufus.jpg",
      gallery: [{"file": "./images/lactarius_rufus.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/lactarius_rufus_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) lunaferna, some rights reserved (CC BY-NC)"}, {"file": "./images/lactarius_rufus_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) woodhaunt, some rights reserved (CC BY-NC)"}, {"file": "./images/lactarius_rufus_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) woodhaunt, some rights reserved (CC BY-NC)"}],
      rating: "!",
      edibility: "parboil",
      level: "intermediate",
      months: [8, 9, 10],
      names: {
        en: { primary: "Rufous Milkcap", local: "Kangasrousku", alt: "Red Hot Milkcap" },
        zh: { primary: "红乳菇", local: "辣乳菇 / 尖突红乳菇", alt: "Lactarius rufus" },
        fi: { primary: "Kangasrousku", local: "Kankuri", alt: "Lactarius rufus" }
      },
      habitatName: {
        en: "Dry Scots pine heaths among lingonberry, heather, and lichens",
        zh: "干燥贫瘠的赤松林砂土苔藓地，常密生于越橘与石蕊地衣间",
        fi: "Kuivat kangasmetsät, kalliomänniköt ja puolukkamaat"
      },
      morphology: {
        en: {
          cap: "3–8 cm, terracotta-red to brick brown, sharp central conical pimple (nypy)",
          underCap: "Pale ochre gills exuding white blisteringly peppery latex",
          stem: "Slender, brittle, reddish-buff",
          odor: "Resinous, scorching peppery raw"
        },
        zh: {
          cap: "3–8厘米，红陶土红褐色，中央有一枚尖锐凸起的小乳突（nypy）",
          underCap: "黄白至淡赭色菌褶，流出乳白汁液，辣如烈火烧喉",
          stem: "红褐肉色，质脆",
          odor: "松脂香气，生浆辣喉"
        },
        fi: {
          cap: "3–8 cm, tiilen- tai kanelinpunaruskea, keskellä selkeä terävä nypy",
          underCap: "Vaaleankellertävät heltat, joista vuotaa runsasta polttavan valkeaa maitoa",
          stem: "Solakka, lakin värinen, hauras",
          odor: "Pihkainen tuoksu, raakana polttavan tulinen maku"
        }
      },
      culinaryTip: {
        en: "Parboil for 10 minutes in boiling water. Ideal for traditional salt-curing in jars with coarse sea salt and allspice.",
        zh: "沸水焯煮10分钟滤去辣味。焯熟挤干后与粗海盐、多香果分层码入密封罐盐腌，冬日取出泡水脱盐即可做馅做汤。",
        fi: "Ryöppää 10 minuuttia runsaassa vedessä. Erinomainen perinteiseen suolasienisäilöntään maustepippurin kera."
      }
    },
    {
      id: "lactarius_deliciosus",
      latinName: "Lactarius deliciosus",
      whereWhen: {"en":"August to October. Found in young Scots pine stands, sandy road banks, grassy pine clearings, and coastal dunes in Helsinki and Espoo (Vuosaari, Uutela, Matinkylä).","zh":"8月至10月。生于年轻欧洲赤松幼林、沙质路堤草丛、向阳松林林窗及沿海沙丘（Vuosaari、Uutela海滨步道常见）。","fi":"Elo-lokakuussa. Viihtyy nuorissa männiköissä, hiekkateiden pientareilla, ruohikkoisilla aukeilla ja hiekkamailla Helsingissä ja Espoossa (Vuosaari, Uutela, Matinkylä)."},
      searchTactics: {"en":"Look for bright carrot-orange to apricot caps with faint concentric rings, often developing greenish-blue verdigris patches. KEY ID: exudes BRIGHT CARROT-ORANGE MILK (never white!), slowly turning reddish or green.","zh":"搜寻鲜艳胡萝卜橙色或杏橙色的菌盖，带有同心圆斑带，常伴有蓝绿色铜锈斑。核心鉴别：伤处涌出【极其鲜艳的胡萝卜橙色汁液】（绝非白色！），后渐转暗红或铜绿色。","fi":"Etsi kirkkaan porkkananoransseja tai oranssinkirjavia lakkeja, joissa on usein vihertäviä laikkuja. TUNTOMERKKI: Erittelee KIRKKAAN ORANSSIA maitiaisnestettä (ei koskaan valkoista!)."},
      lookalikes: {"en":"Lactarius deterrimus (Kuusenleppärousku) grows with Spruce, turns green rapidly, also choice edible. Woolly milkcap (L. torminosus) has acrid white milk and woolly rims.","zh":"云杉美味乳菇（Lactarius deterrimus）与云杉共生，极易变绿，同样是顶级食用菌；而白乳菇（毛头乳菇）汁液为白色且边缘带毛茸须。","fi":"Kuusenleppärousku (Lactarius deterrimus) kasvaa kuusen seurassa ja vihertyy voimakkaammin, erinomainen ruokasieni. Karvarouskulla maitiaisneste on valkoista."},
      cookingGuide: {"en":"NO PARBOILING REQUIRED! Unlike white-milking rouskut, this is a choice gourmet mushroom that should NEVER be boiled in water. Fry directly in sizzling butter with garlic and onions, or grill whole caps. Notice: harmlessly turns urine reddish.","zh":"【严禁焯水！直接生煎】：与白汁乳菇完全不同，这是顶级美味食用菌，绝不可用水焯煮！直接用热黄油加大蒜与洋葱煎透，或整朵烤制，香脆多汁。注：食用后尿液可能变红，属于无害天然色素沉淀。","fi":"EI SAA RYÖPPÄÄ: Toisin kuin valkomaitiaiset rouskut, leppärouskua ei saa koskaan keittää vedessä! Paista suoraan voissa sipulin kera tai paahda kokonaisena pannulla. Huom: voi värjätä virtsan vaarattomasti punaiseksi."},
      image: "./images/lactarius_deliciosus.jpg",
      gallery: [{"file": "./images/lactarius_deliciosus.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/lactarius_deliciosus_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) Nicolas Schwab, some rights reserved (CC BY-NC)"}, {"file": "./images/lactarius_deliciosus_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) Nicolas Schwab, some rights reserved (CC BY-NC)"}, {"file": "./images/lactarius_deliciosus_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Nicolas Schwab, some rights reserved (CC BY-NC)"}],
      rating: "***",
      edibility: "choice",
      level: "intermediate",
      months: [8, 9, 10],
      names: {
        en: { primary: "Saffron Milkcap", local: "Männynleppärousku", alt: "Red Pine Mushroom" },
        zh: { primary: "松乳菇", local: "美味乳菇 / 枞树菇 / 铜绿菌", alt: "Lactarius deliciosus" },
        fi: { primary: "Männynleppärousku", local: "Leppärousku", alt: "Lactarius deliciosus" }
      },
      habitatName: {
        en: "Young Scots pine groves on sunny, gravelly or sandy terrain",
        zh: "向阳开阔的赤松幼林、沙质灌木草坡上",
        fi: "Nuoret männiköt, hiekkaiset kankaat ja polunvarret"
      },
      morphology: {
        en: {
          cap: "4–12 cm, warm carrot-orange with darker concentric rings, bruising emerald-green",
          underCap: "Vivid orange gills exuding BRIGHT CARROT-ORANGE MILK",
          stem: "Orange with darker pitted hollow spots",
          odor: "Fruity, pleasantly resinous"
        },
        zh: {
          cap: "4–12厘米，鲜艳胡萝卜橙黄色带同心环带，受伤碰损处慢慢变为孔雀石绿",
          underCap: "橙红菌褶，伤破渗出【鲜亮胡萝卜橙色乳汁】（永不变白）",
          stem: "中空有凹窝斑点",
          odor: "甘甜果香与松脂芬芳"
        },
        fi: {
          cap: "4–12 cm, porkkananoranssi, vyöhykkeellinen, vihertyvä rikkoutuessaan",
          underCap: "Oranssit heltat, maitiaisneste on PORKKANANORANSSIA (ei valkoista)",
          stem: "Oranssi, kuoppatäpläinen, ontto",
          odor: "Hedelmäinen, raikas aromi"
        }
      },
      culinaryTip: {
        en: "NO PARBOILING REQUIRED! Sauté directly in butter with sea salt and garlic. One of the finest mushrooms in Eurasia.",
        zh: "无需焯水！绝不可水煮！切片加黄油、大蒜直接在平底锅里慢煎，或切片搭配五花肉爆炒，汤汁金红诱人。",
        fi: "EI TARVITSE RYÖPPÄYSTÄ! Paista suoraan pannulla voissa ja ripauksessa merisuolaa. Euroopan huippuherkkuja."
      }
    },
    {
      id: "russula_decolorans",
      latinName: "Russula decolorans",
      whereWhen: {"en":"July to September. Common in damp, mossy Norway spruce heaths (tuore kangas) with thick blueberry bushes (Vaccinium myrtillus) and sphagnum hollows in Nuuksio, Sipoonkorpi, and Luukki.","zh":"7月至9月。常见于潮湿长满蓝莓灌木（Vaccinium myrtillus）的云杉苔藓林（tuore kangas）以及林间泥炭藓洼地边缘（Nuuksio、Sipoonkorpi、Luukki）。","fi":"Heinä-syyskuussa. Yleinen kosteissa mustikkatyypin kuusimetsissä ja suonlaiteilla paksussa sammalikossa Nuuksiossa, Sipoonkorvessa ja Luukissa."},
      searchTactics: {"en":"Look for warm apricot-orange, brick-yellow to coppery-orange caps among green blueberry leaves. The chalky white stem snaps cleanly like blackboard chalk. Bruised flesh and stem turn distinctly slate-grey over time.","zh":"在绿油油的蓝莓枝叶间寻找杏橙色、砖黄或铜橙色的圆菌盖。白垩质地菌柄像粉笔一样能脆生生折断。切伤或碰伤部位随时间推移会变成独特的瓦石灰色。","fi":"Etsi kuparin- tai aprikoosinkeltaisia lakkeja mustikanvarpujen seasta. Liitumainen jalka murtuu puhtaasti ilman säikeitä. Vaurioitunut malto harmaantuu selvästi."},
      lookalikes: {"en":"Russula emetica (The Sickener) has a flaming cherry-red cap, snow-white non-greying gills, and a fiery burning taste. Mild-tasting Russula species are safe to eat.","zh":"毒红菇（Russula emetica）菌盖呈艳红色，菌褶纯白永不变灰，且舌尖尝之辛辣刺痛；红菇属鉴别法：口尝微甜温和者皆可食用，辛辣者弃之。","fi":"Tulipunahapero (Russula emetica) on kirkkaanpunainen, malto ei harmaannu ja maku on polttavan kirpeä. Miedot haperot ovat hyviä ruokasieniä."},
      cookingGuide: {"en":"Excellent mild brittlegill requiring NO parboiling. Perfect for pan-frying with butter and shallots, braising with potatoes, or mixing into mushroom casseroles. Turning dark slate-grey upon cooking is normal and traditional in Finland.","zh":"极为温和甜美的红菇，无需焯水。直接加黄油与红葱头煎炒、与土豆同焖，或做菌菇砂锅焗菜。加热烹调后菇肉颜色会自然转为深灰黑，此为正常本色。","fi":"Erinomainen mieto ruokasieni, jota ei tarvitse ryöpätä. Paista suoraan pannulla voissa, lisää keittoihin tai pataruokiin. Malton tummuminen harmaaksi kypsennettäessä kuuluu asiaan."},
      image: "./images/russula_decolorans.jpg",
      gallery: [{"file": "./images/russula_decolorans.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/russula_decolorans_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) Daniel Zucker, some rights reserved (CC BY)"}, {"file": "./images/russula_decolorans_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) Daniel Zucker, some rights reserved (CC BY)"}, {"file": "./images/russula_decolorans_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Daniel Zucker, some rights reserved (CC BY)"}],
      rating: "***",
      edibility: "choice",
      level: "intermediate",
      months: [8, 9],
      names: {
        en: { primary: "Copper Brittlegill", local: "Kangashapero", alt: "Grey-stemmed Russula" },
        zh: { primary: "褪色红菇", local: "灰柄红菇 / 铜红菇", alt: "Russula decolorans" },
        fi: { primary: "Kangashapero", local: "Hapero", alt: "Russula decolorans" }
      },
      habitatName: {
        en: "Pine and spruce heaths with abundant bilberry bushes",
        zh: "针叶林中伴生蓝莓与苔藓的松树、云杉高燥处",
        fi: "Kangas- ja korpimetsät, mustikkamaat"
      },
      morphology: {
        en: {
          cap: "6–12 cm, warm copper-orange to brick red, snapping like chalk",
          underCap: "Creamy-yellow brittle gills, bruising slowly ash-grey",
          stem: "Pure white turning DISTINCTLY ASH-GREY when bruised or aged",
          odor: "Mild, sweet nutty taste (passes Russula test)"
        },
        zh: {
          cap: "6–12厘米，古铜橘红至红砖色，肉质像苹果般干脆折断",
          underCap: "淡乳黄色脆质菌褶，无奶汁渗出，碰捏后变灰",
          stem: "白色，老熟或掐捏损伤后【逐渐变铁灰色】",
          odor: "清香微甜，坚果回甘（通过红菇舌尖尝味法则）"
        },
        fi: {
          cap: "6–12 cm, tiilenoranssi tai kuparinpunainen, malto murtuu liitumaisesti",
          underCap: "Kermanvalkeat mureat heltat, jotka harmaantuvat rikkoutuessaan",
          stem: "Valkoinen, vanhetessa ja kolhiintuessa SELKEÄSTI HARMAANTUVA",
          odor: "Mieto, miellyttävä pähkinäinen maku"
        }
      },
      culinaryTip: {
        en: "Firm and meaty texture. Delicious pan-fried with diced onions or used in autumn game stews.",
        zh: "肉质紧实耐煮，通过舌尖微尝确定无辣味后，可直接与洋葱爆炒，或切丁炖鸡汤。",
        fi: "Kiinteä ja runsasmaltoinen sieni. Mahtava pannulla sipulin kanssa tai riistapadoissa."
      }
    },
    {
      id: "russula_emetica",
      latinName: "Russula emetica",
      whereWhen: {"en":"POISONOUS / GASTRO-IRRITANT: July to October. Very common in wet sphagnum moss bogs, peat swamps, and soggy coniferous depressions throughout Uusimaa (e.g. Nuuksio, Sipoonkorpi).","zh":"【有毒胃肠刺激性真菌】：7月至10月。极其多见于潮湿泥炭藓沼泽、湿地松林及阴湿针叶林低洼积水区（如Nuuksio、Sipoonkorpi）。","fi":"MYRKYLLINEN: Heinä-lokakuussa. Hyvin yleinen kosteissa rahkasammalsoissa, rämeillä ja mäntymetsien märissä painanteissa Uudellamaalla (esim. Nuuksio, Sipoonkorpi)."},
      searchTactics: {"en":"Noticeable flaming cherry-scarlet red, glossy, slightly sticky cap with peelable skin. Pure snow-white gills and brittle white stem. Extremely fiery peppery taste if tested on tongue tip.","zh":"鲜艳如红樱桃般的亮红色菌盖，潮湿时粘滑，表皮易剥离。菌褶与菌柄皆纯白如雪，质脆易碎。舌尖触尝极其辛辣呛口。","fi":"Loistavan helakanpunainen, kiiltävä lakki, jonka pintakelmu irtoaa helposti. Puhtaanvalkoiset heltat ja jalka. Maku heti erittäin polttavan pippurinen."},
      lookalikes: {"en":"Russula paludosa (Isohapero) has a large red cap but mild apple-sweet taste and is choice edible. Safe test rule: ONLY for Russula and Lactarius, a crumb on the tongue tip tests mild vs peppery (never do this for Amanita or Cortinarius!).","zh":"沼泽红菇（Isohapero）菌盖同样红艳，但尝之香甜温和，为顶级食用菌。注意：口尝法仅限红菇属与乳菇属（吐出不咽），绝对严禁用于鹅膏菌或丝膜菌！","fi":"Isohapero (Russula paludosa) on myös punainen, mutta sen maku on mieto ja sieni erinomainen. Haperoiden maistamistesti: maista palaa kielenkärjellä ja sylkäise pois – kirpeät hylätään."},
      cookingGuide: {"en":"INEDIBLE & TOXIC. Causes severe nausea, acute vomiting, abdominal pain, and diarrhea. Boiling does not make it appetizing. Never harvest.","zh":"【严禁食用！】摄入会导致严重的急性呕吐、剧烈腹绞痛及腹泻胃肠炎症状。水煮亦无法去除刺激性。切勿采摘。","fi":"EI SYÖTÄVÄ, MYRKYLLINEN. Aiheuttaa voimakasta pahoinvointia, vatsakipuja ja oksentelua. Älä kerää ruokasieneksi."},
      image: "./images/russula_emetica.jpg",
      gallery: [{"file": "./images/russula_emetica.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/russula_emetica_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) noah_siegel, some rights reserved (CC BY-NC-SA)"}, {"file": "./images/russula_emetica_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) Science Mom, some rights reserved (CC BY-NC)"}, {"file": "./images/russula_emetica_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Jules Demski, some rights reserved (CC BY-NC)"}],
      rating: "☠️",
      edibility: "inedible",
      level: "intermediate",
      months: [8, 9, 10],
      names: {
        en: { primary: "The Sickener", local: "Tulipunahapero", alt: "Emetic Russula" },
        zh: { primary: "毒红菇", local: "呕吐红菇 / 辣红菇", alt: "Russula emetica" },
        fi: { primary: "Tulipunahapero", local: "Myrkkyhapero", alt: "Russula emetica" }
      },
      habitatName: {
        en: "Damp bog moss, wet spruce depressions, Sphagnum pillows",
        zh: "湿冷云杉泥炭藓沼泽洼地，水湿极重处",
        fi: "Kosteat korvet, rahkasammalikot ja suonlaiteet"
      },
      morphology: {
        en: {
          cap: "4–9 cm, brilliant glossy scarlet-cherry red, peelable skin",
          underCap: "Pure snow-white brittle gills, never turns yellow or grey",
          stem: "Pure white, fragile chalky texture",
          odor: "Fruity scent, but violently peppery and burning on tongue within 3 seconds"
        },
        zh: {
          cap: "4–9厘米，耀眼欲滴的亮樱桃红、血红色，表皮湿滑易撕剥",
          underCap: "纯雪白色脆质菌褶，绝不变黄也不变灰",
          stem: "雪白脆弱，如粉笔",
          odor: "略有水果香，但舌尖轻尝3秒内如烈火辣椒般狂辣灼喉！"
        },
        fi: {
          cap: "4–9 cm, hehkuvan tulipunainen, kiiltävä ja helposti nyljettävä nahka",
          underCap: "Puhtaan valkoiset, mureat heltat",
          stem: "Lumivalkoinen ja hauras",
          odor: "Hedelmäinen tuoksu, mutta maku polttavan pippurinen muutamassa sekunnissa"
        }
      },
      warning: {
        en: "Causes violent stomach cramps and vomiting if swallowed. Fails the Russula mildness taste test.",
        zh: "【胃肠胃毒】引起严重呕吐与剧烈胃痉挛。舌尖轻尝即知奇辣无比，切勿吞咽！",
        fi: "Aiheuttaa voimakasta vatsakipua ja oksentelua. Hylkää hapero, jos se polttaa maistettaessa kielellä!"
      }
    },
    {
      id: "cortinarius_caperatus",
      latinName: "Cortinarius caperatus",
      whereWhen: {"en":"August to October. Plentiful in nutrient-poor acidic pine and spruce heaths, blueberry and lingonberry forests (mustikkatyypin kangasmetsä) in Nuuksio, Sipoonkorpi, and Espoo woodlands.","zh":"8月至10月。丰富产于贫瘠酸性云杉和松树林、蓝莓与越橘矮灌木苔藓带（Nuuksio、Sipoonkorpi及埃斯波北区森林）。","fi":"Elo-lokakuussa. Yleinen karuissa kangasmetsissä, mustikkatyypin kuusikoissa ja männiköissä Nuuksiossa, Sipoonkorvessa ja Espoon metsissä."},
      searchTactics: {"en":"Look for warm straw-buff to ochre-yellow caps with a distinct frosted silvery-white bloom (kehnä) in the center and radial wrinkling toward the margin. The stem bears a thin, delicate membranous ring (rengas).","zh":"寻找麦秆黄至土黄色的菌盖，特征是菌顶中心覆盖一层独特的银白色薄霜粉（kehnä），边缘有辐射状细密浅皱纹。菌柄中上部有一枚纤薄的小菌环。","fi":"Etsi oljenkeltaisia lakkeja, joiden keskellä on selvä vaalea helmiäishohtoinen härmä (kehnä) ja reunoilla säteittäisiä ryppyjä. Jalassa ohut rengas."},
      lookalikes: {"en":"Cortinarius rubellus (Deadly Webcap) is cinnamon-red with a pointed cap and NO true ring. Inocybe species have darker spores and lack the white frosty center. Always check for the frosted cap center, wrinkled margins, and thin ring.","zh":"致命赭红丝膜菌无真菌环，顶端有锐尖突且呈肉桂深褐色；丝盖伞属体型较小且孢子深暗。采摘罗鳞伞必须同时确认：中心霜白薄粉、边缘放射皱纹、柄上薄菌环三要素！","fi":"Suippumyrkkyseitikki on kanelinruskea, terävänuppinen eikä sillä ole aitoa rengasta. Varmista aina kehnäsienen tuntomerkit: jauhemainen kehnä keskellä, poimuinen reuna ja rengas jalassa."},
      cookingGuide: {"en":"Celebrated five-star Nordic gourmet mushroom. Very tender, aromatic, and delicate. Superb gently pan-fried in butter, folded into morning omelettes, or cooked in white wine cream sauces with game. Dries and freezes well.","zh":"北欧享负盛名的五星级美味野生菌！肉质极其细嫩芳香。极适加少许黄油微火香煎、拌入早晨欧姆蛋、或配白葡萄酒奶油炖煮鹿肉与禽肉。烘干与焯汗冷冻均极佳。","fi":"Suosittu viiden tähden ruokasieni. Malto on mureaa ja hienon makuista. Paista miedolla lämmöllä voissa, käytä munakkaisiin tai kermakastikkeisiin riistan seuraksi. Kuivuu ja pakastuu erinomaisesti."},
      image: "./images/cortinarius_caperatus.jpg",
      gallery: [{"file": "./images/cortinarius_caperatus.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/cortinarius_caperatus_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) Christine Young, some rights reserved (CC BY)"}, {"file": "./images/cortinarius_caperatus_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) Christine Young, some rights reserved (CC BY)"}, {"file": "./images/cortinarius_caperatus_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Christine Young, some rights reserved (CC BY)"}],
      rating: "***",
      edibility: "choice",
      level: "advanced",
      months: [8, 9],
      names: {
        en: { primary: "Gypsy Mushroom", local: "Kehnäsieni", alt: "Rozites caperatus" },
        zh: { primary: "皱盖罗鳞伞", local: "吉普赛菇 / 银粉伞", alt: "Cortinarius caperatus" },
        fi: { primary: "Kehnäsieni", local: "Kehnä", alt: "Cortinarius caperatus" }
      },
      habitatName: {
        en: "Among blueberry bushes in mixed spruce-pine forests",
        zh: "针叶云杉与赤松林间蓝莓丛生的高产地",
        fi: "Mustikkatyypin kangasmetsät, kuusikot ja sekametsät"
      },
      morphology: {
        en: {
          cap: "5–12 cm, straw-yellow to ochre, center covered in SILVERY FROSTED POWDER (kehnä)",
          underCap: "Clay-yellow to cinnamon gills with finely serrated edges",
          stem: "Stout with a distinct persistent yellowish-white MEMBRANOUS RING midway up",
          odor: "Mild, pleasantly sweet and mushroomy"
        },
        zh: {
          cap: "5–12厘米，麦秆黄至淡土黄色，菌盖中央密覆一层【如霜如粉的银白糠皮（kehnä）】",
          underCap: "泥黄色至肉桂褐色菌褶，边缘带微细锯齿",
          stem: "粗壮，中段有明显的【持久膜质菌环】",
          odor: "芳香甘甜，具有高雅的菌菇香"
        },
        fi: {
          cap: "5–12 cm, oljenkeltainen, lakin keskellä selkeä hopeanhohtoinen jauhe (kehnä)",
          underCap: "Savenkeltaiset tai kanelinruskeat sahateräiset heltat",
          stem: "Tanakka, varren keskiosassa pysyvä kapea kalvorengas",
          odor: "Makeahko ja hieno sienen tuoksu"
        }
      },
      culinaryTip: {
        en: "Prized gourmet mushroom with tender texture. Advanced foragers only: double-check the silvery cap frost and stem ring to avoid deadly Cortinarius species!",
        zh: "芬兰极受推崇的顶级食用菌。注意：仅限资深采菇者采食，必须仔细确认菌盖上的“银霜糠层”和柄部的“持久菌环”，严防误认其他丝膜菌！",
        fi: "Yksi parhaista ruokasienistämme! Varmista lakin kehnäisyys ja varren rengas suippumyrkkyseitikin välttämiseksi."
      }
    },
    {
      id: "albatrellus_ovinus",
      latinName: "Albatrellus ovinus",
      whereWhen: {"en":"August to October. Old, moss-rich Norway spruce forests (kuusikot) on fertile or calcareous soils. Often fruits in huge overlapping clusters and extensive fairy rings in Sipoonkorpi and Nuuksio.","zh":"8月至10月。老龄长满厚苔藓的挪威云杉林中，喜较肥沃或钙质土壤。常在西波国家公园（Sipoonkorpi）与Nuuksio形成壮观的巨型群聚与蘑菇圈。","fi":"Elo-lokakuussa. Vanhankaltaisissa sammalpeitteisissä kuusikoissa tuoreilla kankailla. Kasvaa usein laajoina ryhminä ja noidankehinä Sipoonkorvessa ja Nuuksiossa."},
      searchTactics: {"en":"Large irregular whitish to pale grey-buff caps (5-20cm) growing directly from the soil. The under-cap surface has a very shallow, dense, white pore layer that turns greenish-yellow when cooked or bruised.","zh":"菌盖宽大（5-20cm）呈不规则起伏的灰白色至浅黄褐色波浪肉饼状，直接从苔藓地层长出。菌盖下方覆盖致密微小的白色浅孔层，加热煮熟或揉搓后会变为鲜艳的柠檬黄微绿色彩。","fi":"Kookkaat (5–20 cm) epäsäännölliset vaaleanharmaat tai kermanvalkoiset lakit maassa sammaleessa. Alapinnalla tiheä valkoinen pillistö, joka muuttuu kypsennettäessä keltaiseksi."},
      lookalikes: {"en":"Albatrellus subrubescens (Korpilampaankääpä) has a violet-brown spotted cap, bitter taste, and grows with pine; Hydnum repandum has spines, not pores.","zh":"紫斑地花（Albatrellus subrubescens）与松树共生且味苦；卷缘齿菌（Hydnum repandum）下表面是柔软下垂的小刺，而非孔层。","fi":"Korpilampaankääpä (Albatrellus subrubescens) on oranssinruskeampi, karvaanmakuinen ja kasvaa männyn seurassa. Vaaleaorakkaalla on alapinnalla piikit, ei pillejä."},
      cookingGuide: {"en":"Firm and meaty. Famous in Finland for turning canary yellow upon cooking! Cut into thick cutlets, dredge in flour and breadcrumbs, and fry as 'Forest Schnitzels'. Also superb minced into mushroom patties or preserved in vinegar marinade.","zh":"肉质致密坚实如肉排。在芬兰以加热后转为明亮金黄色著称！最经典吃法是切成厚厚大片，裹上面粉和面包屑，在平底锅用黄油炸成香酥的“森林素猪排”（Forest Schnitzel），或打碎做成菌菇肉饼。","fi":"Kiinteä ja runsasmaltoinen. Muuttuu paistettaessa kirkkaankeltaiseksi! Leikkaa paksuiksi viipaleiksi, leivitä korppujauhoissa ja paista 'metsäleikkeiksi'. Sopii loistavasti myös jauhettuna murekkeisiin ja etikkasäilykkeeksi."},
      image: "./images/albatrellus_ovinus.jpg",
      gallery: [{"file": "./images/albatrellus_ovinus.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/albatrellus_ovinus_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) Dylan T. Taylor, some rights reserved (CC BY-NC)"}, {"file": "./images/albatrellus_ovinus_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) Dylan T. Taylor, some rights reserved (CC BY-NC)"}, {"file": "./images/albatrellus_ovinus_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Dylan T. Taylor, some rights reserved (CC BY-NC)"}],
      rating: "***",
      edibility: "choice",
      level: "intermediate",
      months: [8, 9, 10],
      names: {
        en: { primary: "Sheep Polypore", local: "Lampaankääpä", alt: "Forest Sheep Fungi" },
        zh: { primary: "羊孔菌", local: "绵羊地孔菌 / 白地花菌", alt: "Albatrellus ovinus" },
        fi: { primary: "Lampaankääpä", local: "Kääpä", alt: "Albatrellus ovinus" }
      },
      habitatName: {
        en: "Terrestrial in old-growth mossy spruce forests",
        zh: "老龄成熟挪威云杉林中厚厚绿苔藓地上（长在土表而非树干上）",
        fi: "Vanhat paksusammaliset kuusikot, maassa sammalikossa"
      },
      morphology: {
        en: {
          cap: "6–20 cm, irregular creamy-white cap, cracking into dry mosaic patches",
          underCap: "Extremely tiny, microscopic white pores running down stem",
          stem: "Short, thick, solid, off-white",
          odor: "Pleasant, mild nutty-almond scent"
        },
        zh: {
          cap: "6–20厘米，不规则裂瓣米白块状，干燥时如马赛克般微裂",
          underCap: "密布肉眼几乎辨不出的极微细白孔层，稍向下延",
          stem: "短粗偏生于基部",
          odor: "清雅淡坚果香，入锅受热瞬间【肉质神奇转变为亮柠檬黄色】"
        },
        fi: {
          cap: "6–20 cm, kermanvalkoinen tai vaaleanruskea, halkeileva laakea lakki",
          underCap: "Erittäin hieno, pistemäinen valkoinen pillistö",
          stem: "Lyhyt ja tukeva",
          odor: "Mieto ja pähkinäinen; MUUTTUU PANNULLA SITRUUNANKELTAISEKSI!"
        }
      },
      culinaryTip: {
        en: "The Magic Test: When pan-fried in butter, the white flesh turns VIBRANT LEMON-YELLOW! Outstanding breaded as schnitzel.",
        zh: "鉴别魔法：下热油锅煎炒时，纯白菇肉会在几秒内转变为【鲜艳柠檬黄】！裹上面包糠煎成素牛排，口感极为柔韧弹牙。",
        fi: "Pannulla sitruunankeltaiseksi muuttuminen varmistaa lajin! Erinomainen leivitettynä leikkeenä."
      }
    },
    {
      id: "leccinum_versipelle",
      latinName: "Leccinum versipelle",
      whereWhen: {"en":"July to October. Exclusively associated with birch trees (Betula). Abundant in mixed woodlands, forest paths, suburban park edges, and lake margins across Helsinki (Keskuspuisto, Seurasaari, Lauttasaari, Haltiala).","zh":"7月至10月。严格与白桦树共生。遍布赫尔辛基各大混交林、步道旁、湖岸及郊野公园（中央公园、Seurasaari、Lauttasaari、Haltiala随处可见）。","fi":"Heinä-lokakuussa. Kasvaa koivujen seuralaisena sekametsissä, metsäteiden varsilla, puistoissa ja rannoilla koko Helsingissä (Keskuspuisto, Seurasaari, Lauttasaari, Haltiala)."},
      searchTactics: {"en":"Noticeable fiery brick-red to orange-russet cap with cuticle overlapping the margin. The tall, sturdy stem is densely covered in small black-tipped scales. Cut flesh rapidly discolors: blue-grey then inky purple-black.","zh":"耀眼的砖红至鲜橙色毡状菌盖，表皮边缘下延略微包裹孔层。粗壮菌柄密布深黑色立体小鳞片。切开后白菇肉迅速氧化，先泛灰紫蓝，最终变为深沉的墨黑紫色。","fi":"Näyttävä tiilenpunainen tai oranssi samettinen lakki. Paksussa jalassa on runsaasti pieniä mustia tupsuja/suomuja. Malto tummuu leikattaessa nopeasti sinipunaiseksi ja mustaksi."},
      lookalikes: {"en":"Leccinum aurantiacum (Aspen Bolete) has reddish-brown stem scales and associates with aspen. All Leccinum punikkitatit are edible but MUST follow the 20-minute cooking rule.","zh":"白杨牛肝菌（Haavanpunikkitatti）与欧洲山杨共生，菌柄鳞片偏棕红。所有红绒盖牛肝菌属物种食用前皆必须严格遵守“彻底加热20分钟”法则！","fi":"Haavanpunikkitatilla (Leccinum aurantiacum) jalan suomut ovat punaruskeita ja se kasvaa haavan alla. Kaikki punikkitatit vaativat 20 min kypsennyksen."},
      cookingGuide: {"en":"MANDATORY 20-MINUTE COOKING RULE: Raw or undercooked Leccinum tatit contain toxins causing severe stomach cramps and nausea. Must be thoroughly sautéed or simmered for at least 15-20 minutes. Flesh turns pitch-black upon cooking, which is completely natural and delicious in hearty stews.","zh":"【必须彻底加热20分钟！】：生食或半生食用会引发剧烈胃痛和严重呕吐。烹饪时切片入锅，中火炒或炖至少15-20分钟。熟透后菇肉通体漆黑如墨，此为天然酶促反应，风味醇厚如牛肉，炖肉极香。","fi":"EHDOTON 20 MINUUTIN KYPSENNYS: Raaka tai huonosti kypsennetty punikkitatti aiheuttaa kovia vatsanväänteitä ja pahoinvointia. Paista tai hauduta vähintään 15–20 minuuttia. Malto muuttuu pannulla pikimustaksi, mikä on luonnollista ja erinomaisen makuista padoissa."},
      image: "./images/leccinum_versipelle.jpg",
      gallery: [{"file": "./images/leccinum_versipelle.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/leccinum_versipelle_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) Александр Рогожин, all rights reserved"}, {"file": "./images/leccinum_versipelle_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) escander, some rights reserved (CC BY-NC)"}, {"file": "./images/leccinum_versipelle_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Jeanne Robinson, all rights reserved"}],
      rating: "***",
      edibility: "choice",
      level: "intermediate",
      months: [7, 8, 9, 10],
      names: {
        en: { primary: "Orange Birch Bolete", local: "Koivunpunikkitatti", alt: "Red-capped Scaber Stalk" },
        zh: { primary: "白桦红柄牛肝菌", local: "橙盖褐孔牛肝菌 / 桦褐疣柄牛肝菌", alt: "Leccinum versipelle" },
        fi: { primary: "Koivunpunikkitatti", local: "Punikkitatti", alt: "Leccinum versipelle" }
      },
      habitatName: {
        en: "Silver birch root zones, mixed forest borders",
        zh: "白桦树根系共生区、林缘灌木及路边草地",
        fi: "Koivujen seuralaisena, kankailla ja metsänreunoilla"
      },
      morphology: {
        en: {
          cap: "8–20 cm, vivid brick-orange to apricot, suede-like texture",
          underCap: "Greyish-white spongy pores, bruising brownish",
          stem: "Tall, covered with dense BLACK WOOLLY SCALES (mustat tupsut) on white",
          odor: "Rich mushroom fragrance; flesh stains blue-black when cut"
        },
        zh: {
          cap: "8–20厘米，鲜艳的红砖橙红或杏色，表面如麂皮质感，皮层稍稍包出边缘",
          underCap: "灰白色细孔，老化后转深灰褐色",
          stem: "挺拔修长，白色柄柱密覆凸起的小黑鳞片绒毛（疣柄）",
          odor: "切开后白色菇肉几分钟内迅速变为灰紫后转深蓝黑色"
        },
        fi: {
          cap: "8–20 cm, hehkuvan tiilenpunainen tai oranssi, nahkamainen reuna",
          underCap: "Harmaanvalkea pillistö, joka tummuu kosketuksesta",
          stem: "Vaalea jalka, jota peittävät selvät mustat nukkatupsut",
          odor: "Miellyttävä; malto tummuu leikattaessa siniharmaaksi"
        }
      },
      culinaryTip: {
        en: "MANDATORY COOKING: Must be cooked thoroughly for at least 15–20 minutes to deactivate gastric irritants. Never undercook!",
        zh: "【严禁半生食】所有疣柄牛肝菌都含不耐热胃肠道刺激素，必须在锅中充分翻炒或炖煮【至少15-20分钟】方可进食，生食极易剧烈恶心胃绞痛！",
        fi: "EHDOTTOMASTI KYPSENNETTÄVÄ: Paistettava vähintään 15–20 minuuttia vatsavaivojen välttämiseksi!"
      }
    },
    {
      id: "hygrophoropsis_aurantiaca",
      latinName: "Hygrophoropsis aurantiaca",
      whereWhen: {"en":"August to November. Common on decaying pine needles, woodchips, coniferous bark litter, and acidic sandy soils throughout Helsinki forest trails and parks (Keskuspuisto, Nuuksio, Luukki).","zh":"8月至11月。常见于赫尔辛基林间小径旁的腐烂松针堆、碎木屑层、针叶树皮落屑及酸性沙土上（中央公园、Nuuksio、Luukki）。","fi":"Elo-marraskuussa. Kasvaa neulaskarikkeella, lahopuulla, hakkeella ja happamilla mailla metsien kätköissä ja puistoissa (Keskuspuisto, Nuuksio, Luukki)."},
      searchTactics: {"en":"Vivid flame-orange to golden cap with a darker sunken center. Underside features knife-thin, crowded, blade-like TRUE gills that fork repeatedly. Stem is thin, flexible, and darkens to black-brown near the base.","zh":"刺目的火橙色或金橙色菌盖，中央微凹且色泽深暗。菌盖下方是极其薄细、刀刃般锋利密集的【真菌褶】。菌柄较细软，基部渐变为黑褐色。","fi":"Räikeän helovanoranssi lakki, joka on keskeltä usein tummempi. Alapinnalla ohuet, veitsenterävät ja tiheät haaraiset heltat. Jalka on hoikka ja tummuu tyvestä ruskeanmustaksi."},
      lookalikes: {"en":"Golden Chanterelle (Cantharellus cibarius) has blunt, thick, branching ridges (poimut), uniform warm egg-yellow color, solid white interior flesh, and a rich apricot scent.","zh":"真鸡油菌（Cantharellus cibarius）长着钝厚圆润的分叉假菌褶（脉状棱脊），色泽为纯正蛋黄，切开肉质致密雪白，散发清甜杏子香气。","fi":"Keltavahverolla (kantarelli) on paksut pyöreät poimut, tasaisen munankeltainen väri, kiinteä vaalea malto ja ihana aprikoosin tuoksu."},
      cookingGuide: {"en":"INEDIBLE / VERY LOW QUALITY. Flesh is thin, dry, rubbery, and completely tasteless. Can cause gastrointestinal discomfort in sensitive people. Do not pick.","zh":"【不可食用 / 品质极劣】：肉质薄软干瘪，韧如海绵，完全没有任何香气。过量食用易引发肠胃不适。请认准其形态避免与真鸡油菌混淆。","fi":"KELVOTON RUOKASIENEKSI. Malto on ohutta, sitkeää ja mautonta. Voi aiheuttaa herkille lieviä vatsavaivoja. Älä kerää koriin."},
      image: "./images/hygrophoropsis_aurantiaca.jpg",
      gallery: [{"file": "./images/hygrophoropsis_aurantiaca.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/hygrophoropsis_aurantiaca_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) jeaniusbeanius, all rights reserved"}, {"file": "./images/hygrophoropsis_aurantiaca_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) Anja Erbou Thormann, all rights reserved"}, {"file": "./images/hygrophoropsis_aurantiaca_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) Anja Erbou Thormann, all rights reserved"}],
      rating: "*",
      edibility: "inedible",
      level: "beginner",
      months: [8, 9, 10, 11],
      names: {
        en: { primary: "False Chanterelle", local: "Valekantarelli", alt: "False Golden Chanterelle" },
        zh: { primary: "假鸡油菌", local: "橙黄拟假芝 / 假黄油菌", alt: "Hygrophoropsis aurantiaca" },
        fi: { primary: "Valekantarelli", local: "Valekanttari", alt: "Hygrophoropsis aurantiaca" }
      },
      habitatName: {
        en: "Conifer needle debris, rotting pine bark, woodland clearings",
        zh: "松针落叶层、腐朽松树皮碎屑及针叶枯木边",
        fi: "Havupuiden neulasikkeellä, lahoilla kannoilla ja puunjätteillä"
      },
      morphology: {
        en: {
          cap: "2–7 cm, vivid bright orange to brownish-orange, soft velvet touch",
          underCap: "THIN, CROWDED, KNIFE-SHARP TRUE GILLS (not blunt ridges)",
          stem: "Slender, flexible, often brownish-black toward base",
          odor: "Bland or indistinct"
        },
        zh: {
          cap: "2–7厘米，鲜艳刺目的亮橙色，柔韧绒质触感",
          underCap: "刀刃般极其薄锐密集、分叉的真菌褶（绝非鸡油菌的钝粗假褶）",
          stem: "细长柔软，基部常带有深褐色或黑色斑晕",
          odor: "缺乏清甜果香，平淡无奇"
        },
        fi: {
          cap: "2–7 cm, voimakkaan oranssi tai oranssinruskea, pehmeä",
          underCap: "TERÄVÄT, tiheät ja ohuet heltat (ei pyöreitä poimuja)",
          stem: "Hento, tyveä kohti tummuva tai mustanruskea",
          odor: "Mieto, ei aprikoosimainen"
        }
      },
      culinaryTip: {
        en: "Not deadly poisonous, but tasteless, leathery and can cause minor gastric irritation. Leave it in the woods.",
        zh: "虽无致死剧毒，但口感如嚼皮革且无香气，部分敏感体质食后会消化不良，不建议采食。",
        fi: "Ei tappava, mutta mauton ja sitkeä. Jätä metsään."
      }
    },
    {
      id: "tylopilus_felleus",
      latinName: "Tylopilus felleus",
      whereWhen: {"en":"July to September. Acidic spruce and pine forests, often fruiting directly on or around mossy rotting conifer stumps and sandy trails in Nuuksio, Sipoonkorpi, and Luukki.","zh":"7月至9月。酸性云杉与松树林中，常直接生长于覆满青苔的腐朽树桩旁或沙质小径苔藓坡上（Nuuksio、Sipoonkorpi、Luukki）。","fi":"Heinä-syyskuussa. Happamissa havu- ja sekametsissä, usein lahonneiden kantojen läheisyydessä ja hiekkapohjaisilla kankailla Nuuksiossa, Sipoonkorvessa ja Luukissa."},
      searchTactics: {"en":"Remarkably deceptive: resembles a plump King Bolete (Porcini). The pore sponge is pure white when young, but turns dirty PINKISH-BROWN with age. The stem features a dark brown, coarse, raised mesh pattern.","zh":"极具欺骗性：外形与肥壮的美味牛肝菌如出一辙。幼时菌孔纯白，但老熟后转为【脏肉粉红、粉褐色】。菌柄表面密布深黑褐色凸出的粗大立体网纹。","fi":"Pettävän näköinen: muistuttaa herkkutattia. Pillistö on nuorena valkoinen, mutta muuttuu vanhetessa likaisen vaaleanpunaiseksi. Jalassa karkea tummanruskea verkkokuvio."},
      lookalikes: {"en":"King Bolete (Boletus edulis) has white pores turning yellowish-olive, and a fine WHITE mesh net on the upper stem. If ever in doubt: touch a tiny crumb of flesh to your tongue—Tylopilus is VIOLENTLY BITTER within 5 seconds!","zh":"美味牛肝菌（Boletus edulis）菌孔老熟转黄绿橄榄色，菌柄上半段为细致纯白网纹。最可靠判别：切下一丁点菇肉轻触舌尖，苦牛肝5秒内会泛起剧烈苦胆水苦味！","fi":"Herkkutatilla pillistö muuttuu kellanvihreäksi ja jalassa on hento valkoinen verkko. Jos epäröit maastossa: kosketa pientä palaa kielenkärjellä – sappitatti maistuu heti sietämättömän karvaalta!"},
      cookingGuide: {"en":"INEDIBLE DUE TO VIOLENT BITTERNESS. Non-toxic, but a single slice will ruin an entire dinner with intense bile-like bitterness that survives all boiling, frying, and drying.","zh":"【极苦无法咽下！】：虽无烈性致命毒素，但苦度极其惊人。只要有一小片混入锅中，整锅佳肴就会彻底化为苦水，烹饪无法去除苦味。一旦辨出立即丢弃。","fi":"SYÖMÄKELVOTON SIETÄMÄTTÖMÄN KARVAUDEN VUOKSI. Ei varsinaisesti myrkyllinen, mutta yksikin pala pilaa koko sieniruuan karvaudellaan, joka ei häviä kypsentämällä."},
      image: "./images/tylopilus_felleus.jpg",
      gallery: [{"file": "./images/tylopilus_felleus.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/tylopilus_felleus_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "no rights reserved"}, {"file": "./images/tylopilus_felleus_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "no rights reserved"}, {"file": "./images/tylopilus_felleus_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "no rights reserved"}],
      rating: "O",
      edibility: "inedible",
      level: "beginner",
      months: [7, 8, 9],
      names: {
        en: { primary: "Bitter Bolete", local: "Sappitatti", alt: "Bitter Tylopilus" },
        zh: { primary: "苦粉孢牛肝菌", local: "苦牛肝菌 / 胆味牛肝菌", alt: "Tylopilus felleus" },
        fi: { primary: "Sappitatti", local: "Sappitatti", alt: "Tylopilus felleus" }
      },
      habitatName: {
        en: "Spruce roots, rotting conifer stumps, mossy pathsides",
        zh: "云杉树根际、腐烂树桩旁及酸性苔藓路肩",
        fi: "Havumetsät, lahopuut ja sammaloituneet kannot"
      },
      morphology: {
        en: {
          cap: "6–15 cm, pale brown to grey-tan, smooth convex",
          underCap: "Pores turn DIRTY PINKISH-BROWN in maturity",
          stem: "Covered in prominent, coarse, RAISED DARK-BROWN MESH NETTING",
          odor: "Extremely, tongue-numbingly bitter on the tongue within 5 seconds"
        },
        zh: {
          cap: "6–15厘米，浅灰褐色至土黄色，光洁半球形",
          underCap: "管孔初白，成熟后渐变为【污粉红、肉粉褐色】",
          stem: "粗大，表面覆有极其凸出刺目的【粗大深黑褐色立体网纹】",
          odor: "切一小块用舌尖轻碰，5秒内泛起如胆汁般难以忍受的剧烈苦味！"
        },
        fi: {
          cap: "6–15 cm, vaaleanruskea, nahkamaisen pehmeä",
          underCap: "Pillistö aluksi valkea, myöhemmin selvästi LIKAISEN VAALEANPUNAINEN",
          stem: "Pinnalla karkea, kohollaan oleva tummanruskea verkkokuvio",
          odor: "Kielelle kokeiltaessa polttavan ja sietämättömän sappimaisen karvas"
        }
      },
      culinaryTip: {
        en: "Inedible. A single specimen will ruin an entire pot of porcini soup with lingering bitterness.",
        zh: "不可食用！无毒但极苦。一小块混入牛肝菌中就会彻底毁掉整锅昂贵的蘑菇汤。",
        fi: "Kelvoton. Yksikin sappitatti pilaa kitkeryydellään koko sienikattilan."
      }
    },
    {
      id: "amanita_muscaria",
      latinName: "Amanita muscaria",
      whereWhen: {"en":"POISONOUS / PSYCHOACTIVE: August to October. Very common in birch and spruce woodlands, forest edges, and city parks throughout Helsinki (Keskuspuisto, Meilahti, Otaniemi).","zh":"【有毒 / 致幻性真菌】：8月至10月。极其常见于白桦和云杉混交林、林缘草地及城市绿化带中（中央公园、Meilahti、Otaniemi处处可见）。","fi":"MYRKYLLINEN: Elo-lokakuussa. Hyvin yleinen koivikoissa, kuusikoissa, puistoissa ja pientareilla Helsingin seudulla (Keskuspuisto, Meilahti, Otaniemi)."},
      searchTactics: {"en":"The iconic fairy-tale toadstool: bright scarlet-red cap dotted with white pyramidal warts, pure white gills, and a white stem with a hanging skirt-like ring and bulbous concentric base.","zh":"经典的童话红蘑菇：鲜艳夺目的猩红色菌盖，上面点缀着白色的金字塔形鳞片残渣，纯白色菌褶，带有下垂宽菌环的白菌柄，基部膨大具数圈同心环鳞。","fi":"Klassinen satukirjasieni: loistavan punainen lakki valkoisilla suomuilla, puhtaanvalkoiset heltat, jalassa riippuva rengas ja sipulimainen tyvi."},
      lookalikes: {"en":"Amanita regalis (Ruskokärpässieni) has an umber-brown to liver-brown cap with yellow warts. Amanita caesarea has orange gills, but does not occur in Finland.","zh":"褐色毒蝇伞（Amanita regalis）菌盖为深肝褐色或黄褐色配黄色鳞片。芬兰本土无橙褶的凯撒食用鹅膏。","fi":"Ruskokärpässienellä (Amanita regalis) on keltaruskea lakki keltaisilla täplillä ja se on yhtä lailla myrkyllinen."},
      cookingGuide: {"en":"POISONOUS - DO NOT EAT. Contains ibotenic acid and muscimol, neurotoxins causing nausea, dizziness, confusion, delirium, and muscle spasms. Historically used in milk to kill flies, never for food.","zh":"【严禁食用！】含鹅膏蕈氨酸和蝇蕈醇等神经毒素，摄入后引发恶心、呕吐、意识混乱、幻觉、共济失调及肌肉震颤痉挛。历史上曾泡牛奶诱杀苍蝇，绝不可作为食材食用。","fi":"MYRKYLLINEN - ÄLÄ SYÖ. Sisältää iboteenihappoa ja muskimolia, jotka aiheuttavat pahoinvointia, sekavuutta, harhoja ja lihaskouristuksia. Ei ruokasieni."},
      image: "./images/amanita_muscaria.jpg",
      gallery: [{"file": "./images/amanita_muscaria.jpg", "caption": {"en": "General habit and habitat", "zh": "野外生长整体形态与环境", "fi": "Kasvupaikka ja yleiskuva"}, "attribution": "Field observation"}, {"file": "./images/amanita_muscaria_1.jpg", "caption": {"en": "Under-cap details (gills/pores/spines)", "zh": "菌盖下方细节（菌褶/孔层/菌刺）", "fi": "Lakin alapinnan yksityiskohdat"}, "attribution": "(c) elephantmom, some rights reserved (CC BY-NC)"}, {"file": "./images/amanita_muscaria_2.jpg", "caption": {"en": "Cap surface, margin & stem", "zh": "菌盖表皮、边缘与菌柄特写", "fi": "Lakin pinta, reuna ja jalka"}, "attribution": "(c) elephantmom, some rights reserved (CC BY-NC)"}, {"file": "./images/amanita_muscaria_3.jpg", "caption": {"en": "Specimen cluster / maturity stage", "zh": "群生状态或不同成熟度阶段", "fi": "Kasvuryhmä tai kehitysvaihe"}, "attribution": "(c) cactusdan, all rights reserved"}],
      rating: "☠️",
      edibility: "deadly",
      level: "deadly",
      months: [8, 9, 10],
      names: {
        en: { primary: "Fly Agaric", local: "Punakärpässieni", alt: "Red Toadstool" },
        zh: { primary: "毒蝇伞", local: "毒蝇鹅膏 / 蛤蟆菌 / 红伞白点菇", alt: "Amanita muscaria" },
        fi: { primary: "Punakärpässieni", local: "Punanuttu", alt: "Amanita muscaria" }
      },
      habitatName: {
        en: "Spruce and birch forests throughout Finland",
        zh: "芬兰全境云杉与白桦林间，秋季极常见",
        fi: "Yleinen kuusikoissa ja koivikoissa koko maassa"
      },
      morphology: {
        en: {
          cap: "8–20 cm, bright scarlet-red with white pyramidal warts",
          underCap: "Pure white crowded gills, free from stem",
          stem: "White stem with skirt-like ring and bulbous concentric rings at base",
          odor: "Indistinct"
        },
        zh: {
          cap: "8–20厘米，鲜红醒目，上面密生白色至淡黄色角锥状鳞片残余",
          underCap: "纯白色菌褶，离生",
          stem: "粗长白色，具明显下垂菌环，基部膨大且有几圈同心鳞裂",
          odor: "无特殊气味"
        },
        fi: {
          cap: "8–20 cm, helakanpunainen, pinnalla valkoisia suojussuomuja",
          underCap: "Puhtaanvalkoiset irtonaiset heltat",
          stem: "Valkoinen, renkaallinen, sipulityvinen"
        }
      },
      warning: {
        en: "POISONOUS. Contains ibotenic acid and muscimol, causing delirium, muscle twitches, hallucinations, and severe gastrointestinal illness.",
        zh: "【神经毒性】含异恶唑衍生物（蝇蕈醇与伊博胜酸），致幻谵妄、痉挛抽搐并引起剧烈肠胃炎，切勿采食！",
        fi: "MYRKYLLINEN. Sisältää iboteenihappoa ja muskimolia; aiheuttaa sekavuutta, kouristuksia ja vakavia vatsavaivoja."
      }
    }
  ],

  // Cooking & Preparation Guide & Recipes
  cookingGuide: {
    en: {
      title: "Wild Mushroom Preparation & Authentic Recipes",
      intro: "Proper preparation elevates wild mushrooms into sublime dining while neutralizing indigestible compounds. Master these core techniques:",
      principles: [
        {
          title: "1. The Cleaning Rule: Brush, Never Soak",
          content: "Wild mushrooms act like biological sponges. Submerging them in water saturates their cells, diluting their delicate aromatics. Use a curved mushroom knife with horsehair bristles to sweep away pine needles and moss. If sandy, wipe caps with a damp cloth."
        },
        {
          title: "2. Sautéing in Natural Juices (Haudutus omassa liemessä)",
          content: "The authentic Finnish prep method for Chanterelles, Hedgehog mushrooms, and Boletes: Slice cleaned mushrooms into a wide dry pan over medium heat with NO fat. As heat activates cellular enzymes, mushrooms weep their fragrant broth. Simmer until the juices reduce by half, then freeze with the broth or add butter to crisp up.",
          videoUrl: "https://www.youtube.com/watch?v=RQd0Mli8SZc"
        },
        {
          title: "3. The Science of Parboiling (Ryöppäys)",
          content: "Certain milkcaps (e.g. Woolly Milkcap / Karvarousku, Rufous Milkcap / Kangasrousku) contain acrid sesquiterpene resins that cause severe stomach irritation. Boil them for 10–15 minutes in copious boiling water (3L per 1kg mushrooms). Flush with cold water and discard the boiling water completely.",
          videoUrl: "https://www.youtube.com/watch?v=6F67wBKOv0c"
        },
        {
          title: "4. Dehydration Principles (Kuivaus)",
          content: "Funnel Chanterelles and Black Trumpets are built for drying (40°C–45°C in a food dehydrator). Dried in glass jars, they keep for 3–5 years. NEVER dehydrate Golden Chanterelles: drying renders their flesh leathery and bitter."
        }
      ],
      recipes: [
        {
          name: "Classic Finnish Chanterelle Cream Sauce (Kermainen kantarellikastike)",
          prep: "10 min",
          cook: "15 min",
          servings: "4",
          videoUrl: "https://www.youtube.com/watch?v=0TysiLgHhd4",
          ingredients: [
            "500 g fresh Golden Chanterelles, coarsely chopped",
            "1 large shallot or yellow onion, finely diced",
            "3 tbsp salted butter",
            "200 ml Finnish heavy whipping cream (kuohukerma)",
            "1/2 tsp sea salt and 1/4 tsp ground white pepper",
            "2 tbsp fresh dill or flat-leaf parsley, minced"
          ],
          steps: [
            "Sweat the chopped chanterelles in a dry frying pan until their natural liquid releases and evaporates.",
            "Add the butter and diced onions. Sauté gently over medium heat for 4–5 minutes until the chanterelles turn golden.",
            "Pour in the heavy cream. Reduce heat and simmer gently for 8–10 minutes until thick and glossy.",
            "Season with salt and white pepper, fold in fresh dill, and serve hot poured over steamed new potatoes."
          ]
        },
        {
          name: "Traditional Finnish Salted Milkcap Salad (Perinteinen sienisalaatti)",
          prep: "15 min (+ desalting)",
          cook: "0 min",
          servings: "4–6",
          videoUrl: "https://www.youtube.com/watch?v=RQR7FLnapZo",
          ingredients: [
            "300 g desalted parboiled milkcaps (e.g. Woolly Milkcap / Karvarousku)",
            "1 small red onion, finely diced",
            "150 g Finnish smetana (42% fat sour cream) or thick crème fraîche",
            "1/4 tsp finely ground white pepper",
            "1 tsp fresh lemon juice or white wine vinegar",
            "Fresh chives for garnish"
          ],
          steps: [
            "Squeeze excess water from the desalted parboiled milkcaps and dice finely into 3 mm cubes.",
            "In a mixing bowl, whip the chilled smetana lightly with a fork until smooth.",
            "Fold in the diced mushrooms and finely chopped red onion.",
            "Season with white pepper and lemon juice. Rest chilled in the fridge for 1 hour before serving on dark rye bread."
          ]
        },
        {
          name: "Sipoonkorpi Funnel Chanterelle Soup with Smoked Cheese (Suppilovahverokeitto)",
          prep: "15 min",
          cook: "25 min",
          servings: "4",
          videoUrl: "https://www.youtube.com/watch?v=-fyPqfJxX5s",
          ingredients: [
            "1 liter fresh (or 30 g dried) Funnel Chanterelles",
            "2 tbsp butter, 1 yellow onion, 1 garlic clove minced",
            "2 tbsp flour, 600 ml rich vegetable/mushroom broth",
            "200 ml heavy cream",
            "100 g Finnish Koskenlaskija Savu (smoked processed melting cheese)",
            "Fresh thyme, sea salt, black pepper"
          ],
          steps: [
            "Sauté onions, garlic, and funnel chanterelles in butter with fresh thyme for 5 minutes.",
            "Dust with flour, cook for 1 minute, then gradually whisk in the hot broth to create a smooth soup.",
            "Simmer for 10 minutes. Lower the heat, stir in cream and cubes of smoked cheese until melted and velvety.",
            "Season with black pepper and serve with crusty sourdough bread."
          ]
        },
        {
          name: "Nordic Wild Mushroom & Pork Stir-Fry (葱姜蒜香野菌炒肉丝)",
          prep: "15 min",
          cook: "8 min",
          servings: "3–4",
          videoUrl: "https://www.youtube.com/watch?v=XWB5C1ludQc",
          ingredients: [
            "350 g fresh firm wild mushrooms (Boletes / Hedgehog / Leccinum)",
            "200 g pork tenderloin, thinly sliced into strips",
            "3 scallions cut into sections, 3 slices ginger, 2 garlic cloves minced",
            "1 tbsp soy sauce, 1 tsp oyster sauce, 1 tsp Shaoxing cooking wine",
            "2 tbsp cooking oil, pinch of white pepper and toasted sesame oil"
          ],
          steps: [
            "Marinate pork strips with 1 tsp soy sauce, wine, and a pinch of cornstarch for 10 minutes.",
            "Blanch Leccinum / Boletes in boiling water for 3 minutes (or dry-sauté in pan until firm) to pre-cook.",
            "Heat wok with oil over high heat. Sear pork strips until 80% done, then remove.",
            "Add ginger, garlic, and scallions to the wok, toss in the pre-cooked mushrooms, and stir-fry vigorously for 2 minutes.",
            "Return pork, drizzle with soy sauce and oyster sauce, toss together for 1 minute, and finish with sesame oil."
          ]
        }
      ]
    },
    zh: {
      title: "野生菌烹饪预处理与中西经典食谱",
      intro: "正确的预处理是激发野生菌殿堂级鲜味的关键，同时能化解其难消化的粗纤维与微毒成分。请牢记四大原则：",
      principles: [
        {
          title: "一、清洗法则：软刷干理，切忌久泡",
          content: "野生真菌吸水力极强，如海绵般吸收自来水后会稀释自身精油香气。用蘑菇刀自带的猪鬃毛刷轻扫泥土松针；菌盖有细沙可用微湿布擦拭，绝不可泡水洗涤。"
        },
        {
          title: "二、自身汁液慢焖法（Haudutus omassa liemessä）",
          content: "芬兰处理鸡油菌、牛肝菌、齿菌的黄金准则：净菇切片，干锅不放任何油，中火加热，菇体会自然析出大量鲜美原汤。待原汁收至一半，即可连汤分装冷冻保存1年；若当顿享用，待汁干时下黄油中火煎至边缘微焦。",
          videoUrl: "https://www.youtube.com/watch?v=RQd0Mli8SZc"
        },
        {
          title: "三、科学焯水杀青去辣（Ryöppäys）",
          content: "白绒乳菇（Karvarousku）与红乳菇（Kangasrousku）等含有辛辣树脂毒素，生食会引发剧烈胃绞痛。必须在大锅沸水（1公斤菇配3升水）中滚煮10-15分钟，捞出后用大量冷水冲凉冲洗，焯菇水含有溶出毒素必须倒弃！",
          videoUrl: "https://www.youtube.com/watch?v=6F67wBKOv0c"
        },
        {
          title: "四、风干脱水与储藏（Kuivaus）",
          content: "漏斗鸡油菌和黑喇叭菌天生为风干而生（40℃-45℃低温烘干）。密封避光能存3-5年，随用随抓。切记：金黄鸡油菌绝对不要晒干，风干会变得如皮革般坚韧且产生不悦的苦涩味！"
        }
      ],
      recipes: [
        {
          name: "经典北欧奶油鸡油菌浓汁 (Kermainen kantarellikastike)",
          prep: "10 分钟",
          cook: "15 分钟",
          servings: "4 人份",
          videoUrl: "https://www.youtube.com/watch?v=0TysiLgHhd4",
          ingredients: [
            "500克 新鲜黄鸡油菌，手撕或切粗块",
            "1个 红葱头或小洋葱，切细碎丁",
            "3汤匙 优质咸味黄油",
            "200毫升 芬兰高脂鲜奶油（Kuohukerma，脂含量35%+）",
            "半茶匙 海盐，1/4茶匙 白胡椒粉",
            "2汤匙 新鲜莳萝碎或欧芹碎"
          ],
          steps: [
            "将鸡油菌放入干平底锅中火加热，慢焙出自身天然菌汁，待水分自然挥发收浓。",
            "投入黄油与洋葱碎，转中小火慢翻炒4-5分钟，直至鸡油菌边缘泛出诱人金黄油光。",
            "缓缓倒入鲜奶油，转微火慢煨8-10分钟，让奶油自然浓缩挂勺如丝绒。",
            "撒入海盐与白胡椒调味，出锅前撒入新鲜莳萝，趁热淋在刚煮透的黄心小土豆上享用。"
          ]
        },
        {
          name: "传统芬兰酸奶油腌乳菇沙拉 (Perinteinen sienisalaatti)",
          prep: "15 分钟 (+脱盐时间)",
          cook: "无需加热",
          servings: "4–6 人份",
          videoUrl: "https://www.youtube.com/watch?v=RQR7FLnapZo",
          ingredients: [
            "300克 焯水脱辣后盐腌的乳菇（如白绒乳菇Karvarousku），提前冷水浸泡脱盐",
            "1个 紫洋葱，切极细微丁",
            "150克 芬兰法式高脂酸奶油（Smetana，42%脂肪）或浓稠法式酸奶油",
            "1/4茶匙 研磨白胡椒粉",
            "1茶匙 鲜柠檬汁或白葡萄酒醋",
            "鲜小葱碎点缀"
          ],
          steps: [
            "将脱盐挤干水分的焯水乳菇切成3毫米见方的小碎丁。",
            "在沙拉碗中用叉子将冰镇酸奶油打散至柔滑细腻。",
            "倒入菇丁与细洋葱碎，充分翻拌均匀。",
            "调入白胡椒粉与柠檬汁，加盖放入冰箱冷藏静置1小时让洋葱与菌香充分融合，抹在黑麦黑面包（Ruisleipä）上食用。"
          ]
        },
        {
          name: "西波森林漏斗鸡油菌烟熏奶酪浓汤 (Suppilovahverokeitto)",
          prep: "15 分钟",
          cook: "25 分钟",
          servings: "4 人份",
          videoUrl: "https://www.youtube.com/watch?v=-fyPqfJxX5s",
          ingredients: [
            "1升 新鲜漏斗鸡油菌（或30克风干漏斗鸡油菌温水泡发）",
            "2汤匙 黄油，1个 洋葱丁，1瓣 大蒜末",
            "2汤匙 面粉，600毫升 浓蔬菜或菌菇高汤",
            "200毫升 浓奶油",
            "100克 芬兰Koskenlaskija Savu烟熏融化软奶酪（可用烟熏高达代）",
            "新鲜百里香叶、海盐、黑胡椒"
          ],
          steps: [
            "锅中融化黄油，爆香洋葱、大蒜和漏斗鸡油菌，加入百里香翻炒5分钟释放香气。",
            "均匀撒入面粉翻炒1分钟去除生粉味，分次缓缓注入温热高汤搅打均匀。",
            "小火沸腾慢煮10分钟。调微火，加入鲜奶油与切块的烟熏奶酪，轻柔搅融至汤体丝滑醇厚。",
            "磨入现磨黑胡椒与少许海盐，装盘配硬皮酸面包，是芬兰深秋雨后驱寒极品。"
          ]
        },
        {
          name: "葱姜蒜香野菌炒肉丝 (Nordic Wild Mushroom & Pork Stir-Fry)",
          prep: "15 分钟",
          cook: "8 分钟",
          servings: "3–4 人份",
          videoUrl: "https://www.youtube.com/watch?v=XWB5C1ludQc",
          ingredients: [
            "350克 坚实野生菌（美味牛肝菌/红柄牛肝菌/齿菌切厚片）",
            "200克 猪里脊肉，切细丝",
            "3根 小香葱切段，3片 生姜，2瓣 大蒜切片",
            "1汤匙 优质生抽，1茶匙 蚝油，1茶匙 绍兴黄酒",
            "2汤匙 烹调油，少许白胡椒粉、香油"
          ],
          steps: [
            "肉丝加少许生抽、料酒、白胡椒粉和淀粉抓匀腌制10分钟。",
            "牛肝菌/红柄牛肝菌在沸水中先飞水焯烫3分钟（确保彻底熟透，防肠胃不适），捞出沥干。",
            "热锅冷油，大火将肉丝滑炒至八成熟变色，盛出备用。",
            "锅底留香油，爆香葱段、姜片与蒜片，倒入焯熟的野菌片，大火猛火快炒2分钟析出镬气。",
            "倒入肉丝，烹入生抽与蚝油翻炒均匀1分钟，淋香油出锅装盘。"
          ]
        }
      ]
    },
    fi: {
      title: "Villisienien Esikäsittely & Perinteiset Reseptit",
      intro: "Oikea käsittely nostaa luonnonantimet huippuravintolatason herkuiksi ja poistaa karvaat yhdisteet:",
      principles: [
        {
          title: "1. Puhdistus: Harjaa, älä liota vedessä",
          content: "Sieni on kuin sieni; se imee veden solukkoonsa ja menettää herkän makunsa. Käytä sieniveitsen harjasta havunneulasten ja roskien poistoon. Pyyhi hiekkainen lakki korkeintaan nihkeällä liinalla."
        },
        {
          title: "2. Haudutus omassa liemessä",
          content: "Kantarellien, herkkutattien ja vaaleaorakkaiden paras käsittelytapa: paloittele sienet kuivalle kuumalle pannulle ilman rasvaa. Kuumuus saa sienet luovuttamaan oman aromaattisen liemensä. Hauduta, kunnes neste puolittuu. Pakasta liemineen tai lisää voi ja paista rapeaksi.",
          videoUrl: "https://www.youtube.com/watch?v=RQd0Mli8SZc"
        },
        {
          title: "3. Ryöppäyksen merkitys (Keittäminen)",
          content: "Kirpeät rouskut (karvarousku, kangasrousku) sisältävät polttavia hartsiaineita. Ne on keitettävä runsaassa vedessä 10–15 minuuttia. Huuhtele kylmällä vedellä ja heitä keitinvesi aina pois.",
          videoUrl: "https://www.youtube.com/watch?v=6F67wBKOv0c"
        },
        {
          title: "4. Kuivaus (Kuivatus)",
          content: "Suppilovahverot ja mustatorvisienet kuivuvat vaivatta (40–45 °C kasvikuivurissa). Säilyvät lasipurkeissa vuosia. Älä koskaan kuivaa kantarelleja; niistä tulee sitkeitä ja kitkeriä."
        }
      ],
      recipes: [
        {
          name: "Perinteinen kermainen kantarellikastike",
          prep: "10 min",
          cook: "15 min",
          servings: "4",
          videoUrl: "https://www.youtube.com/watch?v=0TysiLgHhd4",
          ingredients: [
            "500 g tuoreita kantarelleja paloiteltuna",
            "1 keltasipuli tai salottisipuli hienonnettuna",
            "3 rkl voita",
            "2 dl kuohukermaa",
            "1/2 tl merisuolaa, 1/4 tl valkopippuria",
            "2 rkl tuoretta tilliä tai persiljaa"
          ],
          steps: [
            "Hauduta kantarelleja kuivalla pannulla, kunnes suurin osa nesteestä on haihtunut.",
            "Lisää voi ja hienonnettu sipuli. Kuullota miedolla lämmöllä 4–5 minuuttia.",
            "Kaada joukkoon kerma. Anna poreilla hiljalleen 8–10 minuuttia, kunnes kastike sakenee.",
            "Mausta suolalla ja valkopippurilla. Lisää yrtit ja tarjoile uusien perunoiden kanssa."
          ]
        },
        {
          name: "Perinteinen sienisalaatti suolasienistä",
          prep: "15 min (+ liotus)",
          cook: "0 min",
          servings: "4–6",
          videoUrl: "https://www.youtube.com/watch?v=RQR7FLnapZo",
          ingredients: [
            "300 g liotettuja ryöpättyjä suolasieniä (karvarouskuja tms.)",
            "1 pieni punasipuli hienoksi silputtuna",
            "150 g smetanaa (42 % rasvaa)",
            "1/4 tl hienonnettua valkopippuria",
            "1 tl sitruunamehua tai vaaleaa viinietikkaa"
          ],
          steps: [
            "Purista liotetuista sienistä liika vesi ja hakkaa ne pieniksi, n. 3 mm kuutioiksi.",
            "Notkista kylmä smetana kulhossa kevyesti haarukalla.",
            "Käännä sienisilppu ja hieno punasipuli smetanan joukkoon.",
            "Mausta valkopippurilla ja sitruunamehulla. Anna tekeytyä jääkaapissa tunti ennen tarjoilua ruisleivällä."
          ]
        },
        {
          name: "Suppilovahverokeitto Koskenlaskija-savujuustolla",
          prep: "15 min",
          cook: "25 min",
          servings: "4",
          videoUrl: "https://www.youtube.com/watch?v=-fyPqfJxX5s",
          ingredients: [
            "1 l tuoreita (tai 30 g kuivattuja) suppilovahveroita",
            "2 rkl voita, 1 sipuli, 1 valkosipulinkynsi",
            "2 rkl vehnäjauhoja, 6 dl kasvis- tai sienilientä",
            "2 dl kuohukermaa",
            "100 g Koskenlaskija Savu -sulatejuustoa",
            "Tuoretta timjamia, suolaa, mustapippuria"
          ],
          steps: [
            "Kuullota voissa sipulit ja sienet tuoreen timjamin kanssa 5 minuuttia.",
            "Sekoita joukkoon jauhot ja vatkaa vähitellen kuuma kasvisliemi tasaiseksi keitoksi.",
            "Keitä hiljalleen 10 minuuttia. Laske lämpöä, sekoita joukkoon kerma ja juustopalat kunnes juusto sulaa.",
            "Mausta mustapippurilla ja nauti rapean hapanjuurileivän kera."
          ]
        },
        {
          name: "Paistetut villisienet ja porsaansuikaleet wokissa",
          prep: "15 min",
          cook: "8 min",
          servings: "3–4",
          videoUrl: "https://www.youtube.com/watch?v=XWB5C1ludQc",
          ingredients: [
            "350 g tuoreita kiinteitä herkkutatteja tai orakkaita",
            "200 g porsaan sisäfileetä ohuina suikaleina",
            "3 kevätsipulia, inkivääriä, valkosipulia",
            "Soijakastiketta, osterikastiketta, seesamiöljyä, öljyä"
          ],
          steps: [
            "Esikypsennä tatit kiehuvassa vedessä 3 min (tai pannulla nesteet haihduttaen).",
            "Ruskista marinoidut lihasuikaleet nopeasti kuumassa pannussa ja siirrä sivuun.",
            "Kuullota inkivääri, valkosipuli ja kevätsipuli, lisää sienet ja paista kovalla lämmöllä 2 min.",
            "Yhdistä liha, mausta soijalla ja osterikastikkeella, viimeistele seesamiöljyllä."
          ]
        }
      ]
    }
  },

  // HSL Spots Trilingual
  spots: [
    {
      name: {
        en: "Keskuspuisto (Paloheinä & Pitkäkoski)",
        zh: "赫尔辛基中央公园（帕罗黑奈与皮特凯考斯基段）",
        fi: "Keskuspuisto (Paloheinä & Pitkäkoski)"
      },
      municipality: "Helsinki",
      zone: "Zone AB",
      popularTrail: {
        en: "Paloheinä Forest Loop & Pitkäkoski River Ravine Trail",
        zh: "Paloheinä 森林环线与 Pitkäkoski 河畔峡谷自然步道",
        fi: "Paloheinän ulkoilureitti & Pitkäkosken luontopolku"
      },
      startingPoint: {
        en: "Paloheinän maja / Parking (Pakilantie 124, Helsinki)",
        zh: "Paloheinän maja 森林小筑与停车场（Pakilantie 124, Helsinki）",
        fi: "Paloheinän maja / P-alue (Pakilantie 124, Helsinki)"
      },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Palohein%C3%A4n+maja+Helsinki",
      transit: {
        en: "Bus 66 (Paloheinän maja) or Bus 67 / 560 (Pitkäkoski) from Helsinki Central Station",
        zh: "从中央火车站乘66路直达Paloheinän maja，或乘67/560路至Pitkäkoski林缘",
        fi: "Bussi 66 (Paloheinän maja) tai 67 / 560 (Pitkäkoski) Rautatientorilta"
      },
      time: "30–35 min",
      terrain: {
        en: "Old-growth spruce heaths, hazel groves, damp river ravines",
        zh: "成熟云杉老林、欧榛树林与凡塔河峡谷阴湿区",
        fi: "Vanhaa kuusikkoa, pähkinälehtoja, Vantaanjoen rantarinteitä"
      },
      species: ["Funnel Chanterelle", "Porcini", "Black Trumpet", "Chanterelle"],
      tip: {
        en: "The northernmost sections around Pitkäkoski nature reserve borders have deep untouched spruce moss.",
        zh: "最北端的Pitkäkoski自然保护区边沿（非保护区核心）有极好的深厚云杉苔藓层，秋末漏斗鸡油菌密布。",
        fi: "Pitkäkosken luonnonsuojelualueen laitamilla on koskemattominta sammalikkoa."
      }
    },
    {
      name: {
        en: "Sipoonkorpi National Park (Kuusijärvi & Bisajärvi)",
        zh: "西波国家森林公园（库西湖与比萨湖林区）",
        fi: "Sipoonkorven kansallispuisto (Kuusijärvi & Bisajärvi)"
      },
      municipality: "Vantaa / Sipoo",
      zone: "Zone B / C",
      popularTrail: {
        en: "Kuusijärvi–Bisajärvi Trail via Sudentassu Bridge (Kalkkiruukki Loop)",
        zh: "经狼爪桥（Sudentassu）前往 Bisajärvi 湖畔林区步道",
        fi: "Kuusijärvi–Bisajärvi-reitti Sudentassu-sillan kautta (Kalkkiruukin kierros)"
      },
      startingPoint: {
        en: "Kuusijärvi Outdoor Center / Parking (Kuusijärventie 3, Vantaa)",
        zh: "Kuusijärvi 户外活动中心与停车场（Kuusijärventie 3, Vantaa）",
        fi: "Kuusijärven ulkoilualue / P-alue (Kuusijärventie 3, Vantaa)"
      },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Kuusij%C3%A4rven+ulkoilualue",
      transit: {
        en: "Train K/P to Tikkurila + Bus 736/739 to Kuusijärvi; cross the suspension bridge",
        zh: "城际火车K/P线至Tikkurila车站，转乘公交736/739直达Kuusijärvi，穿过木制悬索吊桥入林",
        fi: "Juna K/P Tikkurilaan + Bussi 736/739 Kuusijärvelle; kulje Sudentassu-siltaa"
      },
      time: "45 min",
      terrain: {
        en: "Rugged spruce heaths, mossy granite cliffs, peatland edges",
        zh: "险峻的花岗岩苔藓台地、茂密云杉林与原始沼泽边沿",
        fi: "Jylhää kalliometsää, sammaleisia kuusikoita ja suonlaitoja"
      },
      species: ["Funnel Chanterelle (Vast carpets)", "Porcini", "Hedgehog Mushroom", "Milkcaps"],
      tip: {
        en: "The single best location in Uusimaa for massive carpets of Funnel Chanterelles in October.",
        zh: "大赫尔辛基地区10月采摘漏斗鸡油菌的首屈一指圣地，沿Bisajärvi湖畔常能装满数大筐。",
        fi: "Uudenmaan paras paikka poimia suppilovahveroita ämpärikaupalla loka-marraskuussa."
      }
    },
    {
      name: {
        en: "Nuuksio National Park (Haukkalampi & Kattila)",
        zh: "努克西奥国家公园（豪卡湖与卡蒂拉荒野林区）",
        fi: "Nuuksion kansallispuisto (Haukkalampi & Kattila)"
      },
      municipality: "Espoo",
      zone: "Zone C",
      popularTrail: {
        en: "Korpinkierros Trail (Raven Loop, 7.2 km) & Kattila Wilderness Paths",
        zh: "Korpinkierros 乌鸦环线步道（7.2公里）与 Kattila 原始冷杉荒野",
        fi: "Korpinkierros (7,2 km) & Kattilan maastoreitit"
      },
      startingPoint: {
        en: "Haukkalammen luontotupa / Parking (Haukkalammentie 32, Espoo)",
        zh: "Haukkalammen luontotupa 自然小屋与主停车场（Haukkalammentie 32, Espoo）",
        fi: "Haukkalammen luontotupa / P-alue (Haukkalammentie 32, Espoo)"
      },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Haukkalammen+luontotupa+Espoo",
      transit: {
        en: "Commuter Train U/E/X to Espoon keskus + Bus 245/245A to Haukkalammentie / Kattila",
        zh: "中央车站乘通勤火车U/E线至Espoon keskus，站台转乘245/245A至Haukkalammentie或终点Kattila",
        fi: "Lähijuna U/E Espoon keskukseen + Bussi 245/245A Haukkalammelle tai Kattilaan"
      },
      time: "60 min",
      terrain: {
        en: "Glacial rock valleys, pine-lichen ridges, pristine spruce taiga",
        zh: "冰川湖峡谷、赤松地衣山脊及原始云杉针叶林苔藓洼地",
        fi: "Kalliomänniköitä, jyrkänteitä ja kuusikkoisia laaksoja"
      },
      species: ["Chanterelle", "King Bolete", "Sheep Polypore", "Black Trumpet"],
      tip: {
        en: "Take Bus 245A all the way to Kattila terminus to escape the tourist crowds and reach undisturbed mires.",
        zh: "建议坐245A一路坐到终点站Kattila，远离Haukkalampi游客大军，探索未受踩踏的冷杉沼泽林。",
        fi: "Ota bussi 245A päätepysäkille Kattilaan välttääksesi pääreittien ruuhkat."
      }
    },
    {
      name: {
        en: "Luukki & Vaakkoi Outdoor Areas",
        zh: "北埃斯波卢基与瓦科伊自然保护林区",
        fi: "Luukki & Vaakkoi (Pohjois-Espoo)"
      },
      municipality: "North Espoo",
      zone: "Zone C",
      popularTrail: {
        en: "Seitsemän lammen reitti (Seven Ponds Trail, 8.6 km)",
        zh: "Seitsemän lammen reitti 七湖环线步道（8.6公里）",
        fi: "Seitsemän lammen reitti (8,6 km)"
      },
      startingPoint: {
        en: "Luukin kartano Parking (Luukintie 33, Espoo)",
        zh: "Luukin kartano 庄园主停车场（Luukintie 33, Espoo）",
        fi: "Luukin kartanon P-alue (Luukintie 33, Espoo)"
      },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Luukin+kartano+Espoo",
      transit: {
        en: "Bus 345 direct from Elielinaukio (Helsinki Central Station)",
        zh: "中央车站西侧Elielinaukio广场乘坐345路大巴直达Luukki或Vaakkoi站",
        fi: "Bussi 345 suoraan Elielinaukiolta Luukkiin tai Vaakkoihin"
      },
      time: "45–55 min",
      terrain: {
        en: "Old spruce moss carpets around pristine forest lakes",
        zh: "深邃宁静的古老云杉林，环抱多个未开发天然森林湖泊",
        fi: "Vanhaa kuusikkoa kirkasvetisten metsälampien ympärillä"
      },
      species: ["Hedgehog Mushroom", "Porcini", "Pine Bolete", "Russula"],
      tip: {
        en: "Local foragers' favorite hidden spot. Enormous fairy rings of Hedgehog mushrooms.",
        zh: "本地老采菇人的私藏宝地！游客极少，8-9月湖畔常有一圈圈巨大的卷缘齿菌。",
        fi: "Kokeneiden kerääjien suosiossa; valtavia vaaleaorakas-esiintymiä."
      }
    },
    {
      name: {
        en: "Petikko & Vestra Woodlands",
        zh: "万塔佩蒂克与韦斯特拉林区",
        fi: "Petikko & Vestra (Vantaa)"
      },
      municipality: "Vantaa",
      zone: "Zone B / C",
      popularTrail: {
        en: "Petikko Nature Trail & Hazel Groves Path",
        zh: "Petikko 榛树阔叶林自然步道",
        fi: "Petikon luontopolku & ulkoilureitti"
      },
      startingPoint: {
        en: "Petikon ulkoilualue Parking (Tallimäentie 2, Vantaa)",
        zh: "Petikon ulkoilualue 停车场（Tallimäentie 2, Vantaa）",
        fi: "Petikon ulkoilualue / P-alue (Tallimäentie 2, Vantaa)"
      },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Petikon+ulkoilualue+Vantaa",
      transit: {
        en: "Bus 321 from Elielinaukio or Bus 345 to Askisto edge",
        zh: "中央车站乘321路至Petikko，或乘345至Askisto林缘",
        fi: "Bussi 321 Elielinaukiolta tai 345 Askiston reunaan"
      },
      time: "40 min",
      terrain: {
        en: "Herb-rich groves (lehto), dense hazel thickets, moraine slopes",
        zh: "富营养阔叶林、茂密榛树丛与冰碛石丘陵",
        fi: "Reheviä lehtomaisia kankaita ja pähkinäpensaikkoja"
      },
      species: ["Black Trumpet", "Orange Birch Bolete", "Summer Cep", "Chanterelle"],
      tip: {
        en: "Look under dense hazel thickets in late August for concealed colonies of Black Trumpets.",
        zh: "8月下旬在欧榛树丛密不透风的落叶下细寻，常有成片黑金般的灰包号角菇。",
        fi: "Etsi pähkinäpensaiden alta loppukesällä mustatorvisieniä."
      }
    },
    {
      name: {
        en: "Uutela Coastal Forest",
        zh: "东赫尔辛基乌特拉海滨森林公园",
        fi: "Uutelan rantametsä (Vuosaari)"
      },
      municipality: "East Helsinki",
      zone: "Zone B",
      popularTrail: {
        en: "Uutela Nature Trail (Kluuvit ja rantaniityt Loop, 3.8 km)",
        zh: "Uutela 海滨自然步道环线（3.8公里）",
        fi: "Uutelan luontopolku (3,8 km)"
      },
      startingPoint: {
        en: "Kahvila Kampela / Uutela Parking (Pursilahdenranta 1, Helsinki)",
        zh: "Kahvila Kampela / Uutela 入口停车场（Pursilahdenranta 1, Helsinki）",
        fi: "Kahvila Kampela / Uutelan P-alue (Pursilahdenranta 1, Helsinki)"
      },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Kahvila+Kampela+Helsinki",
      transit: {
        en: "Metro to Vuosaari station + 15 min walk through park or Bus 560 to Aurinkolahti",
        zh: "地铁红线坐到终点站Vuosaari，穿过公园步行15分钟或转乘560路至Aurinkolahti海湾",
        fi: "Metro Vuosaareen + 15 min kävely tai bussi 560 Aurinkolahteen"
      },
      time: "35 min",
      terrain: {
        en: "Maritime Scots pine, granite outcrops, coastal spruce rim",
        zh: "波罗的海海滨红松基岩林、海风吹拂的花岗岩岩脊",
        fi: "Kalliomännikköä ja rannikon kuusikoita"
      },
      species: ["Pine Bolete", "Rufous Milkcap", "Chanterelle"],
      tip: {
        en: "Convenient quick afternoon forage on metro line. Dry pine knolls yield excellent Pine Boletes.",
        zh: "交通最便捷的近郊海景采摘点，沙石松树丘陵常可偶遇硕大的红木色松生牛肝菌。",
        fi: "Nopea retkikohde metron varrella; männiköistä löytyy komeita männynherkkutatteja."
      }
    }
  ],

  // Safety Guidelines and Forest Regulations
  safetyGuidelines: {
    everymansRight: {
      title: {
        en: "⚖️ Everyman’s Right (Jokamiehenoikeus)",
        zh: "⚖️ 芬兰自然公共权 (Jokamiehenoikeus)",
        fi: "⚖️ Jokamiehenoikeus Suomessa"
      },
      desc: {
        en: "In Finland, you have the statutory legal right to forage wild mushrooms and berries on public and private land without permits or fees.",
        zh: "法律赋予所有人（包括外国游客与居留人员）在芬兰公有和私有森林免费采摘野果与野生蘑菇的权利。",
        fi: "Jokamiehenoikeudella saa vapaasti poimia luonnonmarjoja, sieniä ja kukkia toisenkin maalla."
      },
      rules: [
        {
          en: "Respect Private Yards: Stay at least 50–100m away from private homes, gardens, and summer cottages.",
          zh: "尊重私人庭院：严禁进入他人住宅、庭院或度假木屋（Mökki）周边至少50-100米范围内。",
          fi: "Pihapiirirauha: Älä mene liian lähelle asuttuja taloja tai mökkejä (n. 50–100 m)."
        },
        {
          en: "Do Not Harm Living Trees: Never break branches or peel birch bark (tuohi).",
          zh: "爱护活树：严禁砍折活树树枝、剥取白桦树皮（Tuohi）或取桦树汁。",
          fi: "Älä vahingoita puita: Elävien puiden kaataminen, oksien taittaminen tai tuohen kiskominen on kiellettyä."
        },
        {
          en: "No Moss/Lichen Gathering: Taking moss without landowner consent is strictly prohibited.",
          zh: "禁采苔藓地衣：未经地主允许擅自铲取苔藓或地衣属于违法行为。",
          fi: "Sammalenotto kielletty: Sammalta tai jäkälää ei saa kerätä ilman maanomistajan lupaa."
        },
        {
          en: "Open Fires: Strictly banned on bare ground; use only official maintained campfire sites.",
          zh: "严禁随意野火：仅可在国家公园规划的指定营火点生火，森林火险预警期严禁任何明火。",
          fi: "Tulenteko: Avotulen teko maastoon ilman lupaa on kielletty lukuun ottamatta virallisia tulentekopaikkoja."
        }
      ]
    },
    foolproofFive: {
      title: {
        en: "🛡️ The \"Foolproof Five\" Rules",
        zh: "🛡️ 新手“五大安全金菇”法则",
        fi: "🛡️ Aloittelijan Varmat Viisi"
      },
      desc: {
        en: "Beginners in Finnish forests should strictly restrict their harvest to these 5 unmistakable species:",
        zh: "新手在芬兰森林请严格只采以下5种绝无剧毒混淆的特征菇：",
        fi: "Aloittelijan kannattaa keskittyä näihin viiteen helposti tunnistettavaan ruokasienilajiin:"
      },
      species: [
        {
          en: "Chanterelle: Blunt ridges, apricot aroma, solid stem.",
          zh: "黄鸡油菌：粗钝分叉假菌褶，杏子果香，实心黄柄。",
          fi: "Kantarelli: Haaraiset poimut, aprikoosituoksu, umpinainen keltainen jalka."
        },
        {
          en: "Funnel Chanterelle: Perforated trumpet, hollow yellow stem.",
          zh: "漏斗鸡油菌：顶端穿孔如漏斗，鲜黄空心管状菌柄。",
          fi: "Suppilovahvero: Suppilomainen reikä keskellä, kirkkaankeltainen ontto pilli."
        },
        {
          en: "Hedgehog Mushroom: Soft spines underneath, zero toxic lookalikes.",
          zh: "卷缘齿菌：菌盖下方密布柔软白色小菌刺，芬兰本土无任何带刺毒菇。",
          fi: "Vaaleaorakas: Lakin alla hauraat piikit, ei myrkyllisiä näköislajeja."
        },
        {
          en: "Black Trumpet: Thin black hollow horn, no gills or pores.",
          zh: "灰包号角菇：薄而柔韧的炭黑喇叭号角，无褶无刺。",
          fi: "Mustatorvisieni: Ohutmaltoinen musta torvi, alapinta lähes sileä."
        },
        {
          en: "King Bolete (Porcini): Spongy pores, fine white net on stem.",
          zh: "美味牛肝菌：海绵状吸水管孔，上半柄有精致立体白色细网纹。",
          fi: "Herkkutatti: Valkoinen pillistö joka kellertyy, valkoinen verkkokuvio jalassa."
        }
      ]
    },
    forestSafety: {
      title: {
        en: "🌲 Forest Safety: Ticks & Navigation",
        zh: "🌲 森林防虫与自救指南",
        fi: "🌲 Metsän Turvallisuus"
      },
      items: [
        {
          en: "Ticks (Punkit): Wear high boots, tuck trousers into socks, and do a nightly body inspection.",
          zh: "蜱虫 (Punkit)：穿浅色长裤扎进长袜中，配高筒胶靴。回家必做全身体检，拔虫用镊子垂直拔出。",
          fi: "Punkit: Kumisaappaat, housunlahkeet sukkien sisään, päivittäinen punkkitarkastus."
        },
        {
          en: "Deer Keds (Hirvikärpäset): Active late August to October. Wear smooth nylon jackets and a tight cap.",
          zh: "鹿蝇 (Hirvikärpäset)：8月下旬至10月活跃。落入发丝即脱翅爬行，戴紧致帽子与光滑冲锋衣，备细齿梳子。",
          fi: "Hirvikärpäset: Liukaspintaiset vaatteet, hattu, tiheä kampa taskuun."
        },
        {
          en: "112 Suomi App: Install the free official app; it beams satellite GPS coordinates if you dial 112.",
          zh: "112 Suomi App：手机务必提前下载官方112软件，一旦遇险报警会自动传输卫星经纬度。",
          fi: "112 Suomi -sovellus: Asenna puhelimeen; välittää sijaintikoordinaatit automaattisesti hätäkeskukseen."
        },
        {
          en: "Power Bank: Cold autumn air depletes smartphone batteries fast; always carry a portable battery pack.",
          zh: "移动电源：深秋低温会使手机电池迅速掉电，务必携带充电宝以防迷路。",
          fi: "Varavirtalähde: Syksyn viileys tyhjentää akun nopeasti; pidä mukana powerbank."
        }
      ]
    }
  }
};
