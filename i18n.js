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
      quoteNotAToE: "“In the hemiboreal forest, foraging is not an escape, but an unyielding encounter with ecological reality — where complete, unhurried certainty is the only ground upon which we step.”",
      quoteLink: "Not a ToE (Living Philosophy) →",
      tierIntroSafe5Title: "⭐ The \"Safe Five\" Beginner Mushrooms of Southern Finland",
      tierIntroSafe5Desc: "If you are new to foraging in Finland, start exclusively with these five species. Each has unmistakable macroscopic characteristics (false gills, hollow funnels, ventral spines, or sponge-like pores) and ZERO deadly lookalikes in Finland when following basic verification rules.",
      tierIntroIntermediateTitle: "🧺 Intermediate & Advanced Gourmet Species",
      tierIntroIntermediateDesc: "Expand your basket with species requiring culinary preparation (parboiling acrid milkcaps to remove peppery toxins, peeling slimy bolete pellicles) or rigorous morphological validation (checking veil rings vs volva).",
      tierReadMonographBtn: "📖 Read Full Handbook Monograph →",
      tierHideMonographBtn: "✕ Close Monograph",
      tabCatalog: "🍄 Species (63)",
      tabLookalikes: "⚖️ Lookalikes",
      tabHabitats: "🌲 Habitats & Seasons",
      tabSpots: "🚌 Transit & Trails",
      tabCooking: "🍳 Cooking & Recipes",
      tabSafety: "🛡️ Safety & Rights",
      btnMoreFilters: "Filters ▾",
      btnHideFilters: "Close ▴",
      btnResetFilters: "Reset",
      btnCompareToggle: "± Compare",
      labelViewGrid: "All 63 Species",
      labelViewSafe5: "Safe Five",
      labelViewIntermediate: "Intermediate",
      labelViewMaster: "Monographs",
      btnBackToGrid: "← Back to Species",
      handbookReaderTitle: "Live Field Handbook",
      handbookAllChapters: "All Chapters Overview",
      handbookBackToOverview: "← All Chapters",
      handbookNextChapter: "Next Chapter →",
      handbookPrevChapter: "← Previous Chapter",
      handbookTopBtn: "↑ Top",
      handbookReadTime: "Reading time:",
      handbookTargetSpecies: "Featured Species in this Chapter:",
      handbookReferencesTitle: "📚 Field Handbook References",
      handbookReferencesSubtitle: "In-depth monographs, ecological analyses, and recipes featuring this species:",
      handbookReadInChapter: "Read Chapter →",
      handbookReturnToChapter: "← Return to Chapter",
      handbookStaticDocNotice: "Viewing static offline document. Open in live interactive app for 3-photo galleries & maps:",
      handbookOpenInteractive: "Open Live Interactive Reader →",
      portalSpotsTitle: "📖 Complete Transit Guide & 5 Hidden Gems in Handbook Chapter 02",
      portalSpotsDesc: "Explore in-depth bus timetables, secret trailhead parking, and low-pressure wilderness valleys across Meiko, Tremanskärr, Northern Sipoonkorpi, Salmi, and Vestra.",
      portalSpotsBtn: "Read Live Chapter 02 →",
      portalSafetyTitle: "🛡️ Forest Safety, Legal Rights & Deadly Species Survival Manual",
      portalSafetyDesc: "Master Everyman's Right in nature reserves, tick protection protocols, and zero-tolerance fatal toxin mechanisms (Amatoxins, Orellanine, Gyromitrin).",
      portalSafetyBtn1: "Read Chapter 01 (Rights & Safety) →",
      portalSafetyBtn2: "Read Chapter 04 (Deadly Species) →",
      portalCookingTitle: "🍳 Nordic Preservation Science & Chinese Wild Mushroom Mastery",
      portalCookingDesc: "Dehydration curves, milkcap salt-curing (suolasienet), authentic Finnish pies & soups, plus high-temperature Chinese wok-searing and umami broths.",
      portalCookingBtn1: "Read Chapter 07 (Preservation & Nordic Recipes) →",
      portalCookingBtn2: "Read Special Guide (Chinese Culinary) →",
      portalLookalikesTitle: "☠️ In-Depth Lookalikes & Deadly Toxins Manual in Chapter 04",
      portalLookalikesDesc: "Learn the irreversible cellular damage mechanisms, delayed incubation periods (up to 17 days), and why boiling does not neutralize Amanita or Cortinarius toxins.",
      portalLookalikesBtn: "Read Chapter 04 Survival Manual →",
      handbookTitle: "📚 Complete Helsinki Mushroom Field Handbook (9 Chapters)",
      handbookSubtitle: "Read our comprehensive field guide monographs online anytime. All 9 chapters cover everything from transit lines and forest ecology to deadly lookalikes, 50+ edible species, and gourmet cooking.",
      readChapterBtn: "Read Chapter Online →",
      viewFullToc: "📖 View Complete Table of Contents & Overview",
      headerLinkHandbook: "🌲 Forest Habitats & Tree Identification →",
      headerLinkSpecies: "⭐ Safe Five & 50+ Species Masterclass →",
      searchPlaceholder: "Search by Finnish, Latin, English, Chinese, or traits (e.g. spines, pores)...",
      quickTagsLabel: "Popular:",
      skillLevelLabel: "Skill Level:",
      monthFilterLabel: "Fruiting Month:",
      allLevels: "All Species",
      beginnerLevel: "Beginner-Safe",
      intermediateLevel: "Intermediate",
      advancedLevel: "Advanced",
      deadlyLevel: "Deadly Toxic",
      familyFilterLabel: "Family / Group:",
      allFamilies: "All Groups (63)",
      famChanterelles: "Chanterelles (5)",
      famBoletes: "Boletes (13)",
      famTooth: "Tooth Fungi (2)",
      famPolypores: "Polypores (3)",
      famMilkcaps: "Milkcaps (9)",
      famBrittlegills: "Brittlegills (10)",
      famOthers: "Gilled & Others (14)",
      famDeadly: "Deadly Lookalikes (7)",
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
      chineseRecipesTitle: "Top Chinese Culinary Recipes (中华名菜)",
      videoMasterclassesTitle: "🎥 Video Masterclasses & Forest Kitchen Guides",
      videoMasterclassesDesc: "Authentic video tutorials from Finnish Martat experts and Chinese masterchefs, covering forest-to-table techniques, parboiling, and preservation.",
      videoFilterAll: "All Masterclasses (28)",
      videoFilterFinnish: "🇫🇮 Finnish & Martat",
      videoFilterChinese: "🇨🇳 Chinese Masterclasses",
      videoFilterChanterelle: "Chanterelles & Trumpets",
      videoFilterBolete: "Boletes & Porcini",
      videoFilterMilkcap: "Milkcaps & Salting",
      videoFilterSoup: "Soups & Broths",
      sharedCulinaryBadge: "Shared Technique",
      sharedCulinaryNotice: "Culinary & preparation guide shared with sister species:",
      viewSpeciesGuideBtn: "View Mushroom Field Guide →",
      prepTime: "Prep:",
      cookTime: "Cook:",
      servings: "Servings:",
      footerNote: "Helsinki Mushroom Foraging Companion • Built for local biodiversity and safe foraging in Uusimaa.",
      footerDisclaimer: "Always verify specimens with 100% certainty before consumption. Emergency: 112 • Poison Center: 0800 147 111.",
      offlineBadgeReady: "🌲 Offline Ready",
      offlineBadgeDownloading: "⏳ Caching Photos...",
      offlineBadgeOffline: "📡 Off-Grid / Offline",
      offlineBannerText: "📡 Offline Field Mode: All 50+ species monographs, 40+ recipes, visual comparators, and safety rules are running 100% off-grid from local cache.",
      offlineModalTitle: "🌲 Forest Offline Field Cache",
      offlineModalSubtitle: "Foraging with Zero Cellular Signal across Helsinki & Uusimaa",
      offlineModalCoreTitle: "Core App & Field Guide Data",
      offlineModalCoreDesc: "All species monographs, recipes, lookalike comparators, and Finnish emergency rules are permanently stored in your browser cache.",
      offlineModalCoreStatus: "✓ Active & Cached Offline",
      offlineModalPhotosTitle: "Species Reference Photographs",
      offlineModalPhotosDesc: "High-resolution photos for all 50+ species (215 images, ~48 MB). Pre-cache them so every single photo gallery opens instantly deep in the forest.",
      offlineBtnCacheAll: "📥 Pre-cache All 215 Photos for Offline Forest Use",
      offlineBtnClearCache: "🗑️ Clear Cached Photos",
      offlineProgressCached: "photos cached",
      offlineAllCachedNotice: "✓ All 215 species photos are saved offline in local storage!",
      offlineCloseBtn: "Close"
    },
    zh: {
      siteBadge: "🇫🇮 芬兰赫尔辛基与乌西玛大区野生真菌野外手册",
      siteTitle: "赫尔辛基野生蘑菇采摘与鉴别指南",
      siteSubtitle: "专为大赫尔辛基地区森林生态定制的权威安全野生真菌采摘指南 —— 践行生活哲学的鲜活实录。阅读更多哲学实录请访问博客：<a href=\"https://powerpig99.github.io/not-a-toe/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"blog-subtitle-link\">Not a ToE</a>。",
      emergencyTitle: "疑似蘑菇中毒？立即致电芬兰中毒信息中心",
      emergencySubtitle: "全芬兰24小时免费求助电话：0800 147 111 • 急救电话：112",
      callPoison: "📞 致电 0800 147 111",
      call112: "🚨 拨打急救 112",
      quoteNotAToE: "“在北半球针阔混交林中，采蘑菇绝非逃避现实，而是一场同生态法则毫无妥协的相逢——唯有沉静彻底的确信，才是我们踏出的每一步基石。”",
      quoteLink: "Not a ToE（非万物理论 · 实践哲学）→",
      tierIntroSafe5Title: "⭐ 芬兰南部初学必采“安全五大菌”",
      tierIntroSafe5Desc: "初到芬兰森林采菇，请严格锁定这五种特征鲜明的主力物种。它们具备极易辨识的宏观解剖特征（分叉假褶、漏斗中空柄、菌盖腹面肉刺、蜂窝海绵管孔），在北欧绝无致命混淆种。",
      tierIntroIntermediateTitle: "🧺 进阶美味与资深老饕物种精选",
      tierIntroIntermediateDesc: "超越五大基础菌：需要掌握科学水煮焯水脱毒工艺的松乳菇/白乳菇、黏皮牛肝菌去皮处理，以及必须严格区分菌环与菌托的环柄菇和锦绣蜡伞等进阶高风味真菌。",
      tierReadMonographBtn: "📖 阅读手册完整专论 →",
      tierHideMonographBtn: "✕ 收起专论",
      tabCatalog: "🍄 物种图鉴 (63)",
      tabLookalikes: "⚖️ 毒菇混淆",
      tabHabitats: "🌲 生境物候",
      tabSpots: "🚌 路线秘境",
      tabCooking: "🍳 烹饪食谱",
      tabSafety: "🛡️ 法规安全",
      btnMoreFilters: "筛选 ▾",
      btnHideFilters: "收起 ▴",
      btnResetFilters: "重置",
      btnCompareToggle: "± 对照",
      labelViewGrid: "全部 63 种",
      labelViewSafe5: "安全五大菌",
      labelViewIntermediate: "进阶美味",
      labelViewMaster: "完整大典",
      btnBackToGrid: "← 返回图鉴",
      handbookReaderTitle: "实地野菌交互典籍",
      handbookAllChapters: "全部章节总览",
      handbookBackToOverview: "← 全部章节总览",
      handbookNextChapter: "下一章 →",
      handbookPrevChapter: "← 上一章",
      handbookTopBtn: "↑ 返回顶部",
      handbookReadTime: "预计阅读时间：",
      handbookTargetSpecies: "本章重点收录物种：",
      handbookReferencesTitle: "📚 典籍章节深度收录与专章论述",
      handbookReferencesSubtitle: "本物种在以下实地野菌专章中有系统的生态学生境、避险或料理论述：",
      handbookReadInChapter: "阅读专章 →",
      handbookReturnToChapter: "← 返回阅读章节",
      handbookStaticDocNotice: "当前正在浏览静态文档。点击进入包含三视角高清图集与实时筛选的交互式典籍：",
      handbookOpenInteractive: "在交互式典籍中打开 →",
      portalSpotsTitle: "📖 完整公交指引与5大小众秘境详见典籍第02章",
      portalSpotsDesc: "深度解析大赫尔辛基公交与火车直达路线、隐秘停车坐标，以及Meiko、Tremanskärr、北西波等5大小众采摘圣地。",
      portalSpotsBtn: "在典籍中阅读第02章 →",
      portalSafetyTitle: "🛡️ 森林法规、自然公共权与生死避险手册详见典籍第01 & 04章",
      portalSafetyDesc: "详尽解读自然保护区采摘法规、蜱虫与鹿蝇防护，以及致命毒素（鹅膏毒素、丝膜菌素、鹿花菌素）机理与急救流程。",
      portalSafetyBtn1: "阅读第01章（自然权与安全）→",
      portalSafetyBtn2: "阅读第04章（剧毒避险）→",
      portalCookingTitle: "🍳 芬兰传统储藏法与中华野菌烹饪心法详见第07章与中文专著",
      portalCookingDesc: "风干脱水曲线、芬兰传统盐渍乳菇（Suolasienet）、正统咸派浓汤，以及中华大火干煸、云腿焖鸡与野生菌高汤心法。",
      portalCookingBtn1: "阅读第07章（储藏与北欧料理）→",
      portalCookingBtn2: "阅读中文料理专著（火候与名菜）→",
      portalLookalikesTitle: "☠️ 极度危险混淆种与毒理机制详见典籍第04章",
      portalLookalikesDesc: "深入剖析致命丝膜菌长达17天潜伏期机理，以及为何白毒伞毒素耐受高温蒸煮、必须绝对零容忍避险。",
      portalLookalikesBtn: "阅读第04章生死避险手册 →",
      handbookTitle: "📚 赫尔辛基野生蘑菇野外手册全书与专著系列 (共9章)",
      handbookSubtitle: "随时随地在线阅读9大完整深度专著章节。从赫尔辛基公交采菇点、林型与树种共生生态，到致命毒菇避险、50+食用菌全景大典及中西烹饪心法。",
      readChapterBtn: "在线阅读本章完整专著 →",
      viewFullToc: "📖 打开全书完整目录与总览",
      headerLinkHandbook: "🌲 森林生境与松/杉/白桦树种图鉴 →",
      headerLinkSpecies: "⭐ 安全五大菌与50+分类大典 →",
      searchPlaceholder: "输入中文（如鸡油菌）、芬兰语、学名、特征（如菌刺、菌孔）搜索...",
      quickTagsLabel: "热门直达:",
      skillLevelLabel: "采摘难度:",
      monthFilterLabel: "出菇月份:",
      allLevels: "全部物种",
      beginnerLevel: "新手极安全",
      intermediateLevel: "进阶食用",
      advancedLevel: "资深/需处理",
      deadlyLevel: "致命剧毒",
      familyFilterLabel: "分类家族:",
      allFamilies: "全部类别 (63种)",
      famChanterelles: "鸡油菌与号角菇 (5)",
      famBoletes: "牛肝菌类 (13)",
      famTooth: "齿菌类 (2)",
      famPolypores: "多孔菌与地花菌 (3)",
      famMilkcaps: "乳菇类 (9)",
      famBrittlegills: "红菇类 (10)",
      famOthers: "伞菌与马勃 (14)",
      famDeadly: "致命毒菇对照 (7)",
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
      chineseRecipesTitle: "中华经典名菜烹饪教学",
      videoMasterclassesTitle: "🎥 视频烹饪大师课与森林厨房精选",
      videoMasterclassesDesc: "精选芬兰本土Martat权威家政真菌处理、北欧传统料理与中华特级厨师野菌镬气名菜实操视频，林间到餐桌全流程演示。",
      videoFilterAll: "全部大师课 (28)",
      videoFilterFinnish: "🇫🇮 芬兰传统与处理",
      videoFilterChinese: "🇨🇳 中华厨艺名菜",
      videoFilterChanterelle: "鸡油菌与号角菇",
      videoFilterBolete: "牛肝菌家族",
      videoFilterMilkcap: "乳菇焯水与盐渍",
      videoFilterSoup: "浓汤与炖汤",
      sharedCulinaryBadge: "同科共享烹饪心法",
      sharedCulinaryNotice: "本物种与同科姊妹种共享烹饪调味、焯水排毒与储藏技巧：",
      viewSpeciesGuideBtn: "查看物种生态图鉴 →",
      prepTime: "准备时间:",
      cookTime: "烹饪时间:",
      servings: "分量:",
      footerNote: "赫尔辛基野外采菇指南 • 旨在促进当地生物多样性认知与安全森林采摘实践。",
      footerDisclaimer: "入口前必须有100%的鉴别把握！若有丝毫疑虑严禁食用。芬兰急救电话：112 • 芬兰中毒中心：0800 147 111。",
      offlineBadgeReady: "🌲 离线野外可用",
      offlineBadgeDownloading: "⏳ 正在缓存图集...",
      offlineBadgeOffline: "📡 森林离线模式",
      offlineBannerText: "📡 离线野外模式生效中：全部50+物种专论、40+菜谱、对照图谱与急救信息均由本地缓存提供，无需手机网络。",
      offlineModalTitle: "🌲 森林野外离线缓存管理",
      offlineModalSubtitle: "在赫尔辛基原始森林零信号区域畅通使用",
      offlineModalCoreTitle: "核心应用与图鉴全书数据",
      offlineModalCoreDesc: "全站所有物种图鉴、菜谱、对比图表及安全急救准则已永久储存于浏览器离线数据库中。",
      offlineModalCoreStatus: "✓ 已就绪并保持离线运行",
      offlineModalPhotosTitle: "高分辨率物种参考图集",
      offlineModalPhotosDesc: "全站215张多角度实拍鉴别大图（约 48 MB）。一键预缓存到本地，进入Nuuksio或Sipoonkorpi原始林区即使断网也能秒速开图。",
      offlineBtnCacheAll: "📥 一键预缓存全部 215 张森林图集",
      offlineBtnClearCache: "🗑️ 清理已缓存图片",
      offlineProgressCached: "张图片已缓存",
      offlineAllCachedNotice: "✓ 全部 215 张物种高清图集已完整保存至本地！",
      offlineCloseBtn: "关闭",
      offlineActionStatusBtn: "🌲 离线缓存"
    },
    fi: {
      siteBadge: "🇫🇮 Helsingin ja Uudenmaan sienestäjän maasto-opas",
      siteTitle: "Helsingin Paikallinen Sieniopas",
      siteSubtitle: "Kattava ja turvallisuuslähtöinen opas villisienestykseen pääkaupunkiseudun metsissä — elävää filosofiaa käytännön tekoina. Tutustu matkaan blogissa <a href=\"https://powerpig99.github.io/not-a-toe/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"blog-subtitle-link\">Not a ToE</a>.",
      emergencyTitle: "Epäiletkö sienimyrkytystä? Soita Myrkytystietokeskukseen",
      emergencySubtitle: "Maksuton 24/7-neuvonta koko maassa: 0800 147 111 • Yleinen hätänumero: 112",
      callPoison: "📞 Soita 0800 147 111",
      call112: "🚨 Soita 112",
      quoteNotAToE: "“Hemiboreaalisessa metsässä sienestys ei ole pakoa arjesta, vaan tinkimätön kohtaaminen ekologisen todellisuuden kanssa — jossa täydellinen, kiireetön varmuus on ainoa kestävä perusta.”",
      quoteLink: "Not a ToE (Elävä filosofia) →",
      tierIntroSafe5Title: "⭐ Etelä-Suomen \"Turvalliset viisi\" aloittelijan ruokasientä",
      tierIntroSafe5Desc: "Jos aloittelet sienestystä Suomessa, keskity aluksi näihin viiteen lajiin. Jokaisella on selkeät tuntomerkit (poimut, ontto jalka, oraat tai pillit) eikä niillä ole tappavan myrkyllisiä näköislajeja.",
      tierIntroIntermediateTitle: "🧺 Kokeneen sienestäjän herkut ja esikäsiteltävät lajit",
      tierIntroIntermediateDesc: "Laajenna sienitietämystäsi: ryöpättävät rouskut, nahanpoistoa vaativat tatit sekä lajit, joiden tunnistamisessa vaaditaan rengas- ja tuppituntomerkkien varmaa hallintaa.",
      tierReadMonographBtn: "📖 Lue koko käsikirjan luku →",
      tierHideMonographBtn: "✕ Sulje monografia",
      tabCatalog: "🍄 Lajit (63)",
      tabLookalikes: "⚖️ Näköislajit",
      tabHabitats: "🌲 Elinympäristöt",
      tabSpots: "🚌 Reitit & paikat",
      tabCooking: "🍳 Ruoka & säilöntä",
      tabSafety: "🛡️ Turvallisuus",
      btnMoreFilters: "Valinnat ▾",
      btnHideFilters: "Sulje ▴",
      btnResetFilters: "Nollaa",
      btnCompareToggle: "± Vertaa",
      labelViewGrid: "Kaikki 63 lajia",
      labelViewSafe5: "Varma Viisikko",
      labelViewIntermediate: "Kokeneemmalle",
      labelViewMaster: "Monografiat",
      btnBackToGrid: "← Takaisin lajeihin",
      handbookReaderTitle: "Interaktiivinen kenttäopas",
      handbookAllChapters: "Kaikkien lukujen yleisnäkymä",
      handbookBackToOverview: "← Kaikki luvut",
      handbookNextChapter: "Seuraava luku →",
      handbookPrevChapter: "← Edellinen luku",
      handbookTopBtn: "↑ Alkuun",
      handbookReadTime: "Arvioitu lukuaika:",
      handbookTargetSpecies: "Luvussa käsitellyt lajit:",
      handbookReferencesTitle: "📚 Kirjallisuusviitteet kenttäoppaassa",
      handbookReferencesSubtitle: "Tätä lajia käsitellään perusteellisesti seuraavissa kenttäoppaan luvuissa:",
      handbookReadInChapter: "Lue luku →",
      handbookReturnToChapter: "← Palaa lukuun",
      handbookStaticDocNotice: "Tarkastelet staattista dokumenttia. Avaa interaktiivisessa oppaassa kuvagallerioineen ja reitteineen:",
      handbookOpenInteractive: "Avaa interaktiivisessa sovelluksessa →",
      portalSpotsTitle: "📖 Kattava reittiopas ja 5 salaista helmeä luvussa 02",
      portalSpotsDesc: "Tutustu tarkkoihin HSL-yhteyksiin, lähtöpisteisiin ja rauhallisiin erämaakohteisiin (Meiko, Tremanskärr, Pohjois-Sipoonkorpi, Salmi, Vestra).",
      portalSpotsBtn: "Lue luku 02 kenttäoppaassa →",
      portalSafetyTitle: "🛡️ Jokamiehenoikeudet ja myrkkysienten selviytymisopas luvuissa 01 & 04",
      portalSafetyDesc: "Kertaa luonnonsuojelualueiden säännöt, punkkisuojaus sekä hengenvaarallisten toksiinien (amatoksiinit, orellaniini) toimintamekanismit.",
      portalSafetyBtn1: "Lue luku 01 (Oikeudet ja turvallisuus) →",
      portalSafetyBtn2: "Lue luku 04 (Myrkkysienet) →",
      portalCookingTitle: "🍳 Sienien säilöntä ja perinteiset reseptit luvuissa 07 & Kiina-opas",
      portalCookingDesc: "Kuivaaminen, rouskujen suolaus, perinteinen sienisalaatti sekä kiinalaisen keittiön tekniikat villisienille.",
      portalCookingBtn1: "Lue luku 07 (Säilöntä ja reseptit) →",
      portalCookingBtn2: "Lue kiinalainen keittiömestariopas →",
      portalLookalikesTitle: "☠️ Vaaralliset näköislajit ja toksiinit luvussa 04",
      portalLookalikesDesc: "Opi tunnistamaan tappavan myrkylliset valkokärpässieni ja suippumyrkkyseitikki sekä välttämään kohtalokkaat erehdykset.",
      portalLookalikesBtn: "Lue luku 04 selviytymisopas →",
      handbookTitle: "📚 Helsingin Sienioppaan Käsikirjasarja (9 lukua)",
      handbookSubtitle: "Lue kattavat sienestysmonografiat suoraan verkossa. 9 erillistä lukua kattavat kaiken HSL-reiteistä ja metsätyypeistä myrkkysieniin, säilöntään ja 50+ syötävään sieneen.",
      readChapterBtn: "Lue luku verkossa →",
      viewFullToc: "📖 Avaa käsikirjan koko sisällysluettelo",
      headerLinkHandbook: "🌲 Metsätyypit ja puiden tunnistus →",
      headerLinkSpecies: "⭐ Varma Viisikko & 50+ lajin suurluettelo →",
      searchPlaceholder: "Hae suomalaisella tai tieteellisellä nimellä, piirteillä (esim. heltat, pillit)...",
      quickTagsLabel: "Suosikit:",
      skillLevelLabel: "Taitotaso:",
      monthFilterLabel: "Satokuukausi:",
      allLevels: "Kaikki lajit",
      beginnerLevel: "Aloittelijalle varma",
      intermediateLevel: "Kokeneemmalle",
      advancedLevel: "Vaatii esikäsittelyn",
      deadlyLevel: "Tappavan myrkyllinen",
      familyFilterLabel: "Heimo ja ryhmä:",
      allFamilies: "Kaikki lajit (63)",
      famChanterelles: "Vahverot (5)",
      famBoletes: "Tatit (13)",
      famTooth: "Orakkaat (2)",
      famPolypores: "Käävät ja lampaankäävät (3)",
      famMilkcaps: "Rouskut (9)",
      famBrittlegills: "Haperot (10)",
      famOthers: "Helttasienet ja muut (14)",
      famDeadly: "Myrkkysienet (7)",
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
      chineseRecipesTitle: "Perinteiset kiinalaiset reseptit",
      videoMasterclassesTitle: "🎥 Ruoanvalmistusvideot ja Metsäkeittiö",
      videoMasterclassesDesc: "Aitoja video-oppaita Marttojen perinteisistä sienikäsittelyistä, säilönnästä ja kiinalaisten keittiömestareiden villisieniresepteistä.",
      videoFilterAll: "Kaikki videot (28)",
      videoFilterFinnish: "🇫🇮 Suomalainen & Martat",
      videoFilterChinese: "🇨🇳 Kiinalainen keittiö",
      videoFilterChanterelle: "Vahverot & torvisienet",
      videoFilterBolete: "Tatit & herkkutatit",
      videoFilterMilkcap: "Rouskut & suolaus",
      videoFilterSoup: "Keitot & liemet",
      sharedCulinaryBadge: "Jaettu valmistusohje",
      sharedCulinaryNotice: "Tämä laji jakaa esikäsittely- ja valmistustekniikat seuraavan lähilajin kanssa:",
      viewSpeciesGuideBtn: "Katso lajikuvaus →",
      prepTime: "Esivalmistelu:",
      cookTime: "Kypsennys:",
      servings: "Annosmäärä:",
      footerNote: "Helsingin Paikallinen Sieniopas • Luotu Uudenmaan luonnon ja turvallisen sienestyksen tueksi.",
      footerDisclaimer: "Syö vain 100 % varmuudella tuntemiasi sieniä. Hätänumero: 112 • Myrkytystietokeskus: 0800 147 111.",
      offlineBadgeReady: "🌲 Valmis maastoon",
      offlineBadgeDownloading: "⏳ Tallennetaan kuvia...",
      offlineBadgeOffline: "📡 Maastotila (Offline)",
      offlineBannerText: "📡 Maaston offline-tila aktiivinen: Kaikki 50+ lajikuvausta, 40+ reseptiä, näköislajit ja hätäohjeet toimivat 100 % ilman verkkoyhteyttä.",
      offlineModalTitle: "🌲 Maaston offline-tallennus",
      offlineModalSubtitle: "Sienestä turvallisesti ilman verkkoyhteyttä Uudellamaalla",
      offlineModalCoreTitle: "Sovellus ja lajitiedot",
      offlineModalCoreDesc: "Kaikki lajikuvaukset, reseptit, näköislajivertailut ja turvasäännöt on tallennettu selaimen välimuistiin.",
      offlineModalCoreStatus: "✓ Valmis ja käytettävissä ilman verkkoa",
      offlineModalPhotosTitle: "Lajien korkearesoluutioiset tunnistuskuvat",
      offlineModalPhotosDesc: "Tunnistuskuvat kaikille lajeille (215 kuvaa, n. 48 Mt). Tallenna kaikki kuvat laitteellesi, jotta kuvagalleriat avautuvat metsässä ilman viivettä.",
      offlineBtnCacheAll: "📥 Tallenna kaikki 215 kuvaa maastokäyttöön",
      offlineBtnClearCache: "🗑️ Tyhjennä tallennetut kuvat",
      offlineProgressCached: "kuvaa tallennettu",
      offlineAllCachedNotice: "✓ Kaikki 215 tunnistuskuvaa on tallennettu laitteellesi!",
      offlineCloseBtn: "Sulje"
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
      "cantharellus_cibarius": [
          "hygrophoropsis_aurantiaca",
          "cantharellus_amethysteus"
      ],
      "craterellus_tubaeformis": [
          "craterellus_lutescens",
          "cortinarius_rubellus"
      ],
      "craterellus_lutescens": [
          "craterellus_tubaeformis"
      ],
      "craterellus_cornucopioides": [
          "craterellus_tubaeformis"
      ],
      "cantharellus_amethysteus": [
          "cantharellus_cibarius"
      ],
      "boletus_edulis": [
          "tylopilus_felleus",
          "boletus_reticulatus",
          "boletus_pinophilus"
      ],
      "boletus_pinophilus": [
          "boletus_edulis",
          "tylopilus_felleus"
      ],
      "boletus_reticulatus": [
          "boletus_edulis",
          "tylopilus_felleus"
      ],
      "leccinum_versipelle": [
          "leccinum_vulpinum",
          "leccinum_aurantiacum",
          "boletus_edulis"
      ],
      "leccinum_vulpinum": [
          "leccinum_versipelle",
          "leccinum_aurantiacum"
      ],
      "leccinum_aurantiacum": [
          "leccinum_versipelle",
          "leccinum_vulpinum"
      ],
      "leccinum_scabrum": [
          "leccinum_variicolor",
          "tylopilus_felleus"
      ],
      "leccinum_variicolor": [
          "leccinum_scabrum"
      ],
      "suillus_luteus": [
          "suillus_variegatus",
          "suillus_grevillei"
      ],
      "suillus_variegatus": [
          "suillus_luteus",
          "suillus_bovinus"
      ],
      "suillus_bovinus": [
          "suillus_variegatus",
          "suillus_luteus"
      ],
      "suillus_grevillei": [
          "suillus_luteus"
      ],
      "tylopilus_felleus": [
          "boletus_edulis",
          "boletus_pinophilus",
          "boletus_reticulatus"
      ],
      "hydnum_repandum": [
          "hydnum_rufescens",
          "albatrellus_ovinus"
      ],
      "hydnum_rufescens": [
          "hydnum_repandum"
      ],
      "albatrellus_ovinus": [
          "albatrellus_confluens",
          "hydnum_repandum"
      ],
      "albatrellus_confluens": [
          "albatrellus_ovinus"
      ],
      "laetiporus_sulphureus": [
          "albatrellus_ovinus"
      ],
      "lactarius_deliciosus": [
          "lactarius_deterrimus",
          "lactarius_torminosus"
      ],
      "lactarius_deterrimus": [
          "lactarius_deliciosus",
          "lactarius_torminosus"
      ],
      "lactarius_volemus": [
          "lactarius_rufus"
      ],
      "lactarius_trivialis": [
          "lactarius_utilis",
          "lactarius_necator"
      ],
      "lactarius_utilis": [
          "lactarius_trivialis"
      ],
      "lactarius_torminosus": [
          "lactarius_deliciosus",
          "lactarius_rufus"
      ],
      "lactarius_rufus": [
          "cortinarius_rubellus",
          "lactarius_torminosus",
          "lactarius_mammosus"
      ],
      "lactarius_necator": [
          "lactarius_trivialis"
      ],
      "lactarius_mammosus": [
          "lactarius_rufus"
      ],
      "russula_decolorans": [
          "russula_paludosa",
          "russula_claroflava",
          "russula_emetica"
      ],
      "russula_paludosa": [
          "russula_emetica",
          "russula_decolorans",
          "russula_vinosa"
      ],
      "russula_claroflava": [
          "russula_decolorans"
      ],
      "russula_aeruginea": [
          "russula_cyanoxantha",
          "amanita_virosa"
      ],
      "russula_cyanoxantha": [
          "russula_aeruginea"
      ],
      "russula_vesca": [
          "russula_paludosa"
      ],
      "russula_xerampelina": [
          "russula_paludosa",
          "russula_vinosa"
      ],
      "russula_vinosa": [
          "russula_paludosa",
          "russula_xerampelina"
      ],
      "russula_integra": [
          "russula_paludosa"
      ],
      "russula_emetica": [
          "russula_paludosa",
          "russula_decolorans",
          "russula_vesca"
      ],
      "cortinarius_caperatus": [
          "cortinarius_rubellus",
          "tricholoma_matsutake"
      ],
      "tricholoma_matsutake": [
          "tricholoma_portentosum",
          "cortinarius_caperatus",
          "cortinarius_rubellus"
      ],
      "tricholoma_portentosum": [
          "tricholoma_matsutake"
      ],
      "macrolepiota_procera": [
          "amanita_virosa",
          "agaricus_arvensis"
      ],
      "agaricus_arvensis": [
          "amanita_virosa",
          "agaricus_silvaticus"
      ],
      "agaricus_silvaticus": [
          "agaricus_arvensis"
      ],
      "coprinus_comatus": [
          "amanita_virosa"
      ],
      "infundibulicybe_geotropa": [
          "clitocybe_nebularis"
      ],
      "clitocybe_nebularis": [
          "infundibulicybe_geotropa",
          "amanita_virosa"
      ],
      "marasmius_oreades": [
          "galerina_marginata"
      ],
      "armillaria_mellea": [
          "kuehneromyces_mutabilis",
          "galerina_marginata"
      ],
      "kuehneromyces_mutabilis": [
          "galerina_marginata",
          "armillaria_mellea"
      ],
      "calvatia_gigantea": [
          "lycoperdon_perlatum",
          "amanita_virosa"
      ],
      "lycoperdon_perlatum": [
          "calvatia_gigantea",
          "amanita_virosa"
      ],
      "amanita_virosa": [
          "agaricus_arvensis",
          "macrolepiota_procera",
          "cortinarius_caperatus",
          "albatrellus_ovinus"
      ],
      "cortinarius_rubellus": [
          "craterellus_tubaeformis",
          "lactarius_rufus",
          "cortinarius_caperatus",
          "tricholoma_matsutake"
      ],
      "galerina_marginata": [
          "kuehneromyces_mutabilis",
          "armillaria_mellea",
          "craterellus_tubaeformis"
      ],
      "gyromitra_esculenta": [
          "craterellus_cornucopioides"
      ],
      "paxillus_involutus": [
          "lactarius_rufus",
          "lactarius_torminosus"
      ],
      "amanita_muscaria": [
          "amanita_virosa"
      ],
      "hygrophoropsis_aurantiaca": [
          "cantharellus_cibarius"
      ]
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
      url: "https://www.youtube.com/watch?v=JBj7XznS8fU",
      title: {
        en: "Traditional Finnish Chanterelle Cream Sauce (Kantarellikastike)",
        zh: "经典芬兰传统奶油鸡油菌浓汁制作教程",
        fi: "Perinteisen kermaisen kantarellikastikkeen valmistus"
      },
      chineseRecipes: [
        {
          url: "https://www.youtube.com/watch?v=9NEKn4yqJvY",
          creator: "云南妹子啦嘀嗒",
          duration: "4:29",
          title: {
            en: "Yunnan Wild Chanterelle Stir-Fry with Fresh Peppers (Crispy & Tender)",
            zh: "云南野生鸡油菌青红椒大火爆炒（甜嫩脆滑极下饭）",
            fi: "Yunnanilainen villien vahveroiden pikapaisto tuoreella chilillä"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=oQflKhysm2A",
          creator: "美食台 FoodVideo",
          duration: "2:02",
          title: {
            en: "Shangri-La Secrets to Sautéing Wild Forest Chanterelles",
            zh: "美食台：香格里拉大厨炒新鲜野生林地菌子的独门绝招",
            fi: "Shangri-Lan mestarin niksit metsävahveroiden paistamiseen"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=KYb4HSSahEk",
          creator: "Jenny's Kitchen",
          duration: "2:24",
          title: {
            en: "Wok-Seared Wild Chanterelles with Fresh Sea Scallops & Garlic",
            zh: "鲜果木香鸡油菌蒜蓉爆炒鲜带子/扇贝（高档粤式海鲜搭配）",
            fi: "Vahveroiden ja kampasimpukoiden pikapaisto valkosipulilla"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=5VXiFDkb9dk",
          creator: "飲食男女 大師姐食譜",
          duration: "2:16",
          title: {
            en: "Masterchef Cantonese Wok-Fried Chanterelles with Chicken Fillet",
            zh: "香港饮食男女大师姐食谱：镬气十足野生鸡油菌炒滑鸡球",
            fi: "Perinteinen kantonilainen vahvero-kanawokki"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=OIByq7YxNdg",
          creator: "品味食間 Taste Food time",
          duration: "4:16",
          title: {
            en: "Nourishing Slow-Simmered Chicken Broth with Forest Chanterelles",
            zh: "古法慢火清炖野生鸡油菇土鸡汤（果香清甜、暖胃滋补）",
            fi: "Mieto ja aromaattinen villivahvera-kanaliemi"
          }
        }
      ]
    },
    craterellus_tubaeformis: {
      url: "https://www.youtube.com/watch?v=-fyPqfJxX5s",
      title: {
        en: "How to Cook Funnel Chanterelle Soup from Dried & Fresh Mushrooms",
        zh: "北欧漏斗鸡油菌汤烹饪教学（干菇泡发与烹饪）",
        fi: "Suppilovahverokeitto kuivatuista tai tuoreista sienistä"
      },
      chineseRecipes: [
        {
          url: "https://www.youtube.com/watch?v=9NEKn4yqJvY",
          creator: "云南妹子啦嘀嗒",
          duration: "4:29",
          title: {
            en: "Yunnan Wild Chanterelle Stir-Fry with Fresh Peppers (Crispy & Tender)",
            zh: "云南野生鸡油菌/漏斗菌青红椒大火爆炒（甜嫩脆滑极下饭）",
            fi: "Yunnanilainen villien vahveroiden pikapaisto tuoreella chilillä"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=oQflKhysm2A",
          creator: "美食台 FoodVideo",
          duration: "2:02",
          title: {
            en: "Shangri-La Secrets to Sautéing Wild Forest Chanterelles & Boletes",
            zh: "美食台：香格里拉大厨炒新鲜野生林地菌子的独门绝招",
            fi: "Shangri-Lan mestarin niksit metsävahveroiden paistamiseen"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=KYb4HSSahEk",
          creator: "Jenny's Kitchen",
          duration: "2:24",
          title: {
            en: "Wok-Seared Wild Chanterelles with Fresh Sea Scallops & Garlic",
            zh: "鲜果木香鸡油菌蒜蓉爆炒鲜带子/扇贝（高档粤式海鲜搭配）",
            fi: "Vahveroiden ja kampasimpukoiden pikapaisto valkosipulilla"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=5VXiFDkb9dk",
          creator: "飲食男女 大師姐食譜",
          duration: "2:16",
          title: {
            en: "Masterchef Cantonese Wok-Fried Chanterelles with Chicken Fillet",
            zh: "香港饮食男女大师姐食谱：镬气十足野生鸡油菌炒滑鸡球",
            fi: "Perinteinen kantonilainen vahvero-kanawokki"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=OIByq7YxNdg",
          creator: "品味食間 Taste Food time",
          duration: "4:16",
          title: {
            en: "Nourishing Slow-Simmered Chicken Broth with Forest Chanterelles",
            zh: "古法慢火清炖野生鸡油菇土鸡汤（果香清甜、暖胃滋补）",
            fi: "Mieto ja aromaattinen villivahvera-kanaliemi"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=BQxezCwNZ98",
          creator: "優視 • 美食頻道",
          duration: "6:31",
          title: {
            en: "Nordic Wild Chanterelle Velouté Soup with Chinese Culinary Touch",
            zh: "北欧秋季经典野采鸡油菌浓汤制作（全中文讲解家庭版）",
            fi: "Pohjoismainen kermainen vahverokeitto kiinalaisin keittiöniksein"
          }
        }
      ]
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
      },
      chineseRecipes: [
        {
          url: "https://www.youtube.com/watch?v=zBrJFnXTMcQ",
          creator: "Lily's Meals",
          duration: "3:29",
          title: {
            en: "Classic Stir-Fried Boletes with Garlic & Chili (Forest Aroma)",
            zh: "经典蒜片青椒干椒爆炒牛肝菌（原汁原味释放山野鲜香）",
            fi: "Perinteinen herkkutatin pikapaisto valkosipulilla ja chilillä"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=-H_7xTFu8Ls",
          creator: "兑兑 Duidui in Finland",
          duration: "5:31",
          title: {
            en: "Finnish Forest Foraging: Chinese Spiced Oil-Preserved Boletes",
            zh: "芬兰森林采摘野味：中式香料油浸野生牛肝菌与保存法",
            fi: "Suomen metsistä kerättyjen herkkutattien säilöntä mausteöljyssä"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=BSvep9GRHlg",
          creator: "Shirley的快乐厨房",
          duration: "4:16",
          title: {
            en: "Nourishing Clear Chicken Broth with Wild Boletes (Porcini Soup)",
            zh: "原汁原味牛肝菌清炖土鸡汤（汤色清亮醇厚、鲜香甘润）",
            fi: "Kirkas ja ravitseva villitatti-kanaliemi"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=PmO9194VTnw",
          creator: "三妹妹厨房",
          duration: "3:59",
          title: {
            en: "Yunnan Cured Ham & Wild Bolete Braised Fragrant Rice",
            zh: "云南经典火腿鸡肉牛肝菌焖饭（米粒吸饱山珍浓郁鲜味）",
            fi: "Yunnan-tyylinen tatti-kinkku-riisipata"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=c_KosrETlbs",
          creator: "美食台 FoodVideo",
          duration: "2:54",
          title: {
            en: "5 Master Secrets to Stir-Frying Wild Boletes (FoodVideo)",
            zh: "美食台：大厨秘传炒出完美野生牛肝菌的5大诀窍",
            fi: "Mestarilliset niksit villitattien paistamiseen (FoodVideo)"
          }
        }
      ]
    },
    boletus_pinophilus: {
      url: "https://www.youtube.com/watch?v=IGxtCj8ZuFE",
      title: {
        en: "Cooking Wild Boletes in Butter & Cream (Tattikastike)",
        zh: "北欧松生牛肝菌黄油奶油浓汁烹饪教学",
        fi: "Herkullisen tattikastikkeen valmistus pannulla"
      },
      chineseRecipes: [
        {
          url: "https://www.youtube.com/watch?v=zBrJFnXTMcQ",
          creator: "Lily's Meals",
          duration: "3:29",
          title: {
            en: "Classic Stir-Fried Boletes with Garlic & Chili (Forest Aroma)",
            zh: "经典蒜片青椒干椒爆炒牛肝菌（原汁原味释放山野鲜香）",
            fi: "Perinteinen herkkutatin pikapaisto valkosipulilla ja chilillä"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=-H_7xTFu8Ls",
          creator: "兑兑 Duidui in Finland",
          duration: "5:31",
          title: {
            en: "Finnish Forest Foraging: Chinese Spiced Oil-Preserved Boletes",
            zh: "芬兰森林采摘野味：中式香料油浸野生牛肝菌与保存法",
            fi: "Suomen metsistä kerättyjen herkkutattien säilöntä mausteöljyssä"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=BSvep9GRHlg",
          creator: "Shirley的快乐厨房",
          duration: "4:16",
          title: {
            en: "Nourishing Clear Chicken Broth with Wild Boletes (Porcini Soup)",
            zh: "原汁原味牛肝菌清炖土鸡汤（汤色清亮醇厚、鲜香甘润）",
            fi: "Kirkas ja ravitseva villitatti-kanaliemi"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=PmO9194VTnw",
          creator: "三妹妹厨房",
          duration: "3:59",
          title: {
            en: "Yunnan Cured Ham & Wild Bolete Braised Fragrant Rice",
            zh: "云南经典火腿鸡肉牛肝菌焖饭（米粒吸饱山珍浓郁鲜味）",
            fi: "Yunnan-tyylinen tatti-kinkku-riisipata"
          }
        },
        {
          url: "https://www.youtube.com/watch?v=c_KosrETlbs",
          creator: "美食台 FoodVideo",
          duration: "2:54",
          title: {
            en: "5 Master Secrets to Stir-Frying Wild Boletes (FoodVideo)",
            zh: "美食台：大厨秘传炒出完美野生牛肝菌的5大诀窍",
            fi: "Mestarilliset niksit villitattien paistamiseen (FoodVideo)"
          }
        }
      ]
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
      url: "https://www.youtube.com/watch?v=tL8_h3I0bC4",
      title: {
        en: "Official Finnish Guide: Parboiling & Salting Forest Milkcaps (Martat)",
        zh: "芬兰Martat权威教学：森林红乳菇焯水脱苦与传统盐渍法",
        fi: "Rouskujen perinteinen ryöppäys ja suolaaminen (Martat)"
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
      url: "https://www.youtube.com/watch?v=PvEH3kYOTDQ",
      title: {
        en: "Pan-Frying Wild Russula Brittlegills with Onions & Black Pepper",
        zh: "野采红菇洋葱黑胡椒出汁香煎做法（无需焯水）",
        fi: "Mietoina poimittujen haperoiden paistaminen sipulin kera"
      }
    },
    cortinarius_caperatus: {
      url: "https://www.youtube.com/watch?v=xZybP1obYFQ",
      title: {
        en: "Pan-Braising Fresh Gypsy Mushrooms (Cortinarius caperatus)",
        zh: "鲜采皱盖罗鳞伞（隐花丝膜菌）慢火焖煎做法",
        fi: "Tuoreen kehnäsienen kypsennys ja paistaminen"
      }
    },
    albatrellus_ovinus: {
      url: "https://www.youtube.com/watch?v=5oeFlbj43_c",
      title: {
        en: "Restaurant-Quality Creamy Sheep Polypore Soup (Lampaankääpäkeitto)",
        zh: "地花孔菌（羊孔菌）经典奶油浓汤餐厅级烹饪教学",
        fi: "Ravintolatason kermainen lampaankääpäkeitto"
      }
    },
    leccinum_versipelle: {
      url: "https://www.youtube.com/watch?v=o3XPSC6HKDc",
      title: {
        en: "Thorough Pan-Cooking for Orange Birch Boletes (20-Minute Safety Rule)",
        zh: "白桦疣柄牛肝菌识别与必须彻底加热20分钟烹饪演示",
        fi: "Punikkitattien turvallinen ja perusteellinen kypsennys pannulla"
      }
    }
  },

  // Species Data (Trilingual Content)
  species: [
    {
      id: "cantharellus_cibarius",
      "chapters": ["02","03","05","07","08","zh"],
          latinName: "Cantharellus cibarius",
      family: "cantharellaceae",
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
      "chapters": ["02","03","05","07","08","zh"],
          latinName: "Craterellus tubaeformis",
      family: "cantharellaceae",
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
      "chapters": ["02","03","05","07","08","zh"],
          latinName: "Hydnum repandum",
      family: "hydnaceae",
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
      "chapters": ["02","03","05","07","08","zh"],
          latinName: "Craterellus cornucopioides",
      family: "cantharellaceae",
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
      "chapters": ["02","03","05","07","08","zh"],
          latinName: "Boletus edulis",
      family: "boletaceae",
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
      "chapters": ["02","03","07","08"],
          latinName: "Boletus pinophilus",
      family: "boletaceae",
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
      "chapters": ["01","03","04"],
          latinName: "Amanita virosa",
      family: "deadly_toxic",
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
      "chapters": ["01","03","04"],
          latinName: "Cortinarius rubellus",
      family: "deadly_toxic",
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
      "chapters": ["04"],
          latinName: "Galerina marginata",
      family: "deadly_toxic",
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
      "chapters": ["04"],
          latinName: "Gyromitra esculenta",
      family: "deadly_toxic",
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
      "chapters": ["04"],
          latinName: "Paxillus involutus",
      family: "deadly_toxic",
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
      "chapters": ["06","07","08"],
          latinName: "Lactarius torminosus",
      family: "lactarius_parboil",
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
      "chapters": ["02","03","06","07","08"],
          latinName: "Lactarius rufus",
      family: "lactarius_parboil",
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
      "chapters": ["02","03","06","08","zh"],
          latinName: "Lactarius deliciosus",
      family: "lactarius_mild",
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
      "chapters": ["02","06","07","08"],
          latinName: "Russula decolorans",
      family: "russulaceae",
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
      "chapters": ["04"],
          latinName: "Russula emetica",
      family: "russulaceae",
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
      "chapters": ["02","06","08"],
          latinName: "Cortinarius caperatus",
      family: "agaric_others",
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
      "chapters": ["02","06","07","08"],
          latinName: "Albatrellus ovinus",
      family: "polyporaceae",
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
      "chapters": ["02","03","06","08"],
          latinName: "Leccinum versipelle",
      family: "boletaceae",
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
      "chapters": ["04","05"],
          latinName: "Hygrophoropsis aurantiaca",
      family: "deadly_toxic",
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
      "chapters": ["04"],
          latinName: "Tylopilus felleus",
      family: "boletaceae",
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
      "chapters": ["04"],
          latinName: "Amanita muscaria",
      family: "deadly_toxic",
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
          stem: "Valkoinen, renkaallinen, sipulityvinen",
          odor: "Heikko / tavallinen sienentuoksu"
        }
      },
      warning: {
        en: "POISONOUS. Contains ibotenic acid and muscimol, causing delirium, muscle twitches, hallucinations, and severe gastrointestinal illness.",
        zh: "【神经毒性】含异恶唑衍生物（蝇蕈醇与伊博胜酸），致幻谵妄、痉挛抽搐并引起剧烈肠胃炎，切勿采食！",
        fi: "MYRKYLLINEN. Sisältää iboteenihappoa ja muskimolia; aiheuttaa sekavuutta, kouristuksia ja vakavia vatsavaivoja."
      }
    },
{
          "id": "craterellus_lutescens",
          "chapters": ["02","08"],
          "latinName": "Craterellus lutescens",
          "family": "cantharellaceae",
          "rating": "***",
          "edibility": "choice",
          "level": "beginner",
          "months": [
                8,
                9,
                10,
                11
          ],
          "names": {
                "en": {
                      "primary": "Yellow Foot / Flame Chanterelle",
                      "local": "Kosteikkovahvero",
                      "alt": "Cantharellus lutescens"
                },
                "zh": {
                      "primary": "黄柄黄肉鸡油菌",
                      "local": "湿地鸡油菌 / 金黄喇叭菌",
                      "alt": "Craterellus lutescens"
                },
                "fi": {
                      "primary": "Kosteikkovahvero",
                      "local": "Kosteikkovahvero",
                      "alt": "Craterellus lutescens"
                }
          },
          "habitatName": {
                "en": "Spruce bogs, paludified moss depressions & rich fen edges",
                "zh": "云杉泥炭藓沼泽、林中积水苔藓凹坑及富营养湿地林缘",
                "fi": "Korpikuusikot, rahkasammaliset kosteikot ja lähteiköt"
          },
          "morphology": {
                "en": {
                      "cap": "2–7 cm, wavy lobed, yellowish-brown to dark sepia with orange flush",
                      "underCap": "Nearly smooth to faintly wrinkled veins, bright salmon-orange to apricot-yellow",
                      "stem": "Hollow, flattened with groove, vivid fiery chrome-yellow to orange",
                      "odor": "Intensely fruity, sweet floral perfume reminiscent of apricots and mirabelles"
                },
                "zh": {
                      "cap": "2–7厘米，薄漏斗状，波状边缘，黄褐至深黑褐色，透出橙光",
                      "underCap": "近乎平滑或仅具微弱波状浅皱肋，呈鲜亮杏黄橙色",
                      "stem": "空心，侧扁具纵沟，呈醒目极艳丽的金黄橙色",
                      "odor": "极其浓郁强烈的清甜杏桃与成熟花果芳香"
                },
                "fi": {
                      "cap": "2–7 cm, suppilomainen, aaltoilevareunainen, kellanruskea tai tummanruskea",
                      "underCap": "Lähes sileä tai matalapoimuinen, kirkkaan kellanoranssi",
                      "stem": "Ontto, litteähkö, loistavan keltanoranssi",
                      "odor": "Erittäin voimakas ja makea, hedelmäinen tuoksu"
                }
          },
          "culinaryTip": {
                "en": "Supreme culinary chanterelle. Exceptional dried or quick-sautéed in butter. Retains extraordinary fruity fragrance.",
                "zh": "北欧顶级食用菌之一。清炒极香脆，亦极其适合风干烘烤，脱水后会释放出犹如杏干般的浓郁蜜香。",
                "fi": "Huippuluokan ruokasieni. Kuivattuna erinomainen, säilyttää upean hedelmäisen arominsa."
          },
          "lookalikeAlert": {
                "en": "Closely related Funnel Chanterelle (C. tubaeformis) has distinct branched grey-yellow ridges underneath, not smooth salmon skin.",
                "zh": "与漏斗鸡油菌（Suppilovahvero）近缘，但后者菌盖下方具清晰分叉的灰黄色假菌褶，而非平滑鲜橙色。",
                "fi": "Muistuttaa suppilovahveroa, mutta lakin alapinta on poimuton ja oranssimpi."
          },
          "whereWhen": {
                "en": "Fruits from late August through November. Strictly loves wet, spring-fed spruce bogs and peat moss (Sphagnum). Prime spots: Sipoonkorpi nature bogs, Nuuksio lake depressions, and Meiko wetland margins.",
                "zh": "8月下旬至11月出菇。特异性偏爱阴冷湿润、长满泥炭藓的云杉沼泽和涌泉周边。大赫尔辛基绝佳地：西波国家公园幽深沼泽区、Nuuksio湿地湖畔及Meiko保护区盆地。",
                "fi": "Sato elo-marraskuussa. Kasvaa kosteissa sammaleisissa korpikuusikoissa ja soiden laiteilla."
          },
          "searchTactics": {
                "en": "Search where your boots sink into wet Sphagnum peat moss beneath tall spruces. Look for the glowing, neon-orange hollow stems peeking out of emerald moss.",
                "zh": "当胶靴踩入深陷的潮湿泥炭藓坑时放慢脚步。在深绿苔藓丛中寻找那一根根宛如火苗般跳跃的鲜艳黄橙色菌柄。",
                "fi": "Etsi upottavista rahkasammalokoista vanhojen kuusten alta. Kirkkaankeltainen jalka paljastaa sienen."
          },
          "lookalikes": {
                "en": "Funnel Chanterelle (Craterellus tubaeformis) is also choice edible. No poisonous lookalikes share this bright hollow orange stem and smooth apricot underside in bogs.",
                "zh": "漏斗鸡油菌同为顶级美味。在芬兰湿地苔藓中，没有具有此类金黄空心柄和平滑橙色腹面的有毒真菌。",
                "fi": "Suppilovahvero on toinen samankaltainen herkku. Ei vaarallisia näköislajeja samoissa biotoopeissa."
          },
          "cookingGuide": {
                "en": "Cook gently in foaming butter with chives or shallots. Sauté for 3–5 minutes. Dehydrate on racks at 40°C for year-round soups and winter game sauces.",
                "zh": "黄油融化后中小火翻炒3-5分钟，加小葱碎和海盐即可出锅；或直接40度低温风干，是炖肉与冬日野味浓汤的最佳香料菌。",
                "fi": "Paista nopeasti voissa tai kuivaa matalassa lämmössä. Sopii erinomaisesti riistaruokiin ja kastikkeisiin."
          },
          "image": "./images/craterellus_lutescens.jpg",
          "gallery": [
          {
                "file": "./images/craterellus_lutescens.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) timendez, some rights reserved (CC BY-NC), uploaded by timendez"
          },
          {
                "file": "./images/craterellus_lutescens_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "Botanical specimen observation (iNaturalist CC)"
          },
          {
                "file": "./images/craterellus_lutescens_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "Specimen observation (iNaturalist CC)"
          }
]
    },
{
          "id": "cantharellus_amethysteus",
          "chapters": ["02","08"],
          "latinName": "Cantharellus amethysteus",
          "family": "cantharellaceae",
          "rating": "**",
          "edibility": "good",
          "level": "beginner",
          "months": [
                7,
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Amethyst Chanterelle",
                      "local": "Samettivahvero",
                      "alt": "Cantharellus amethysteus"
                },
                "zh": {
                      "primary": "紫绒鸡油菌",
                      "local": "紫鳞鸡油菌 / 绒毛鸡油菌",
                      "alt": "Cantharellus amethysteus"
                },
                "fi": {
                      "primary": "Samettivahvero",
                      "local": "Samettikantarelli",
                      "alt": "Cantharellus amethysteus"
                }
          },
          "habitatName": {
                "en": "Deciduous groves, oak-hazel slopes & mossy birch margins",
                "zh": "阔叶林、橡树-欧榛山坡及长有苔藓的白桦林缘",
                "fi": "Lehdot, tammi- ja pähkinämetsät, koivikot"
          },
          "morphology": {
                "en": {
                      "cap": "3–9 cm, golden-yellow covered with delicate lilac-purple to violet velvety scales",
                      "underCap": "Blunt, thick, decurrent yellow ridges",
                      "stem": "Solid, firm, golden-buff",
                      "odor": "Fruity apricot scent, identical to golden chanterelle"
                },
                "zh": {
                      "cap": "3–9厘米，底色金黄，菌盖表面覆有精致淡紫至紫罗兰色绒毛细鳞片",
                      "underCap": "粗厚钝圆的蛋黄色延生假菌褶（肋状脊）",
                      "stem": "实心，粗壮坚韧，淡黄色",
                      "odor": "清新的成熟杏子香气，与普通黄鸡油菌无异"
                },
                "fi": {
                      "cap": "3–9 cm, keltapohjainen, pinnalla hienoja lilan- tai violetinsävyisiä nukkasuomuja",
                      "underCap": "Paksut, keltaiset poimut",
                      "stem": "Tukeva, umpinainen, kellertävä",
                      "odor": "Hedelmäinen, kantarellimainen tuoksu"
                }
          },
          "culinaryTip": {
                "en": "Equivalent to the golden chanterelle in texture and flavor. Pan-fry in butter; beautiful contrast in wild forest plates.",
                "zh": "口感与风味与经典黄鸡油菌完全一致。黄油干煎至微焦，紫金相间的色泽在餐盘上极具观赏美感。",
                "fi": "Maultaan ja rakenteeltaan täysin kantarellin veroinen ruokasieni. Paista voissa."
          },
          "lookalikeAlert": {
                "en": "Can only be confused with common Golden Chanterelle (C. cibarius), which is equally safe and choice.",
                "zh": "仅可能与普通金黄鸡油菌混淆，两者均为安全可口的优质食用菌，无任何混毒风险。",
                "fi": "Voi sekoittaa vain tavalliseen keltavahveroon, joka on yhtä erinomainen ruokasieni."
          },
          "whereWhen": {
                "en": "Mid-July to October in warmer nutrient-rich deciduous pockets in Uusimaa (e.g. Ruissalo-type oak groves, Tammisaari, and sheltered spots in Espoo).",
                "zh": "7月中旬至10月生于乌西玛大区温暖富营养的阔叶栎林带。在大赫尔辛基南缘及埃斯波阳光斜坡偶见。",
                "fi": "Heinä-lokakuussa ravinteisissa lehtimetsissä ja tammien läheisyydessä."
          },
          "searchTactics": {
                "en": "Look under mature oaks and hazel bushes on dappled sunny banks. Check the cap center for the telltale violet velvet dusting.",
                "zh": "在成熟橡树与榛树下斑驳的向阳斜坡搜寻，细察金黄菌盖中心是否有那一层高雅的淡紫色天鹅绒细鳞。",
                "fi": "Tarkkaile tammien alustoja ja valoisia lehtorinteitä. Huomaa lakin violetti sävy."
          },
          "lookalikes": {
                "en": "Golden Chanterelle (Cantharellus cibarius) lacks the lilac-violet scales. Both are safe choice edibles.",
                "zh": "经典黄鸡油菌无紫色鳞片。两者皆为绝佳无毒真菌。",
                "fi": "Keltavahverolla ei ole lilaa suomutusta lakin keskustassa."
          },
          "cookingGuide": {
                "en": "Clean with brush, cook in dry pan to sweat out natural juices, then fry in salted butter and garnish with fresh herbs.",
                "zh": "毛刷扫净，热锅煸出原汤收浓，入足量咸黄油香煎，加新鲜欧芹或莳萝调味。",
                "fi": "Puhdista harjalla, haihduta neste pannulla ja paista voissa."
          },
          "image": "./images/cantharellus_amethysteus.jpg",
          "gallery": [
          {
                "file": "./images/cantharellus_amethysteus.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Federico Calledda, some rights reserved (CC BY-NC), uploaded by Federico Calledda"
          },
          {
                "file": "./images/cantharellus_amethysteus_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Vincent Fatton, all rights reserved"
          },
          {
                "file": "./images/cantharellus_amethysteus_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) N. Pauker, all rights reserved"
          }
]
    },
{
          "id": "boletus_reticulatus",
          "chapters": ["02","03","08"],
          "latinName": "Boletus reticulatus",
          "family": "boletaceae",
          "rating": "***",
          "edibility": "choice",
          "level": "beginner",
          "months": [
                6,
                7,
                8,
                9
          ],
          "names": {
                "en": {
                      "primary": "Summer Cep",
                      "local": "Tammenherkkutatti",
                      "alt": "Boletus aestivalis"
                },
                "zh": {
                      "primary": "网纹牛肝菌",
                      "local": "夏牛肝菌 / 橡树牛肝菌",
                      "alt": "Boletus reticulatus"
                },
                "fi": {
                      "primary": "Tammenherkkutatti",
                      "local": "Kesäherkkutatti",
                      "alt": "Boletus reticulatus"
                }
          },
          "habitatName": {
                "en": "Oak groves, hazel thickets & southern birch parks",
                "zh": "橡树林、欧榛灌木丛及南部开阔白桦草地",
                "fi": "Tammimetsät, jalopuumetsiköt ja pähkinälehdot"
          },
          "morphology": {
                "en": {
                      "cap": "6–20 cm, pale buff-brown to suede-fawn, dry, finely velvety, cracking in dry weather",
                      "underCap": "Pores white initially, turning greenish-yellow; free from stem",
                      "stem": "Club-shaped to bulbous, pale tan, with distinct raised white net covering entire length",
                      "odor": "Sweet, intensely nutty and pleasant mushroom aroma"
                },
                "zh": {
                      "cap": "6–20厘米，淡黄褐至鹿皮浅褐色，干燥微带细天鹅绒感，干旱时表皮易产生龟裂纹",
                      "underCap": "菌孔幼时雪白紧实，成熟后变黄绿色，菌管在柄部凹陷",
                      "stem": "球棒状至基部膨大，淡褐色，表面布满清晰凸起的白色网状纹路一直延伸至菌柄基部",
                      "odor": "甘甜浓郁、纯正宜人的极品坚果牛肝菌香"
                },
                "fi": {
                      "cap": "6–20 cm, vaaleanruskea, himmeäpintainen, hienosamettinen, kuivana usein halkeileva",
                      "underCap": "Pillistö aluksi valkoinen, myöhemmin kellanvihreä",
                      "stem": "Paksu, vaaleanruskea, pinnassa selkeä valkoinen verkkokuvio tyveen saakka",
                      "odor": "Makeahko, voimakkaan pähkinäinen ja miellyttävä"
                }
          },
          "culinaryTip": {
                "en": "Premier summer delicacy. Tender and sweet flesh. Pan-sear raw in butter or slice into carpaccio if young.",
                "zh": "初夏顶级美味。肉质比秋季美味牛肝更显柔嫩甘甜。鲜嫩幼菌可直接切极薄片生食（Carpaccio）或黄油嫩煎。",
                "fi": "Alukesän huippuherkku. Malto pehmeämpää ja makeampaa kuin herkkutatilla. Paista voissa."
          },
          "lookalikeAlert": {
                "en": "Bitter Bolete (Tylopilus felleus) has a coarse DARK black-brown net and pink pores with acrid bitter taste.",
                "zh": "警惕苦粉孢牛肝菌（苦牛肝），其具粗大深黑色凸起网纹，菌孔呈脏粉色且极苦！",
                "fi": "Sappitatilla on karkea tumma verkko ja punertava pillistö sekä sietämättömän karvas maku."
          },
          "whereWhen": {
                "en": "Fruits earlier than B. edulis, from mid-June to August during warm spells under broadleaf trees in Southern Finland.",
                "zh": "出菇时间明显早于秋季美味牛肝，6月中旬夏至前后至8月在乌西玛大区暖温阔叶林下现身。",
                "fi": "Sato alkaa jo kesä-heinäkuussa lämpimissä lehtimetsissä."
          },
          "searchTactics": {
                "en": "Search around the bases of ancient oak and hazel trees in urban parks and coastal reserves.",
                "zh": "重点在老橡树、欧榛灌木林下以及沿海向阳的开阔林缘地表搜寻。",
                "fi": "Etsi vanhojen tammien ja pähkinäpensaiden alta lämpimiltä paikoilta."
          },
          "lookalikes": {
                "en": "Boletus edulis (King Bolete) has white net only on upper stem and a darker reddish greasy cap.",
                "zh": "美味牛肝菌菌盖更光滑油润，且白色网纹通常仅限于菌柄上部三分之一。",
                "fi": "Herkkutatilla verkko rajoittuu jalan yläosaan ja lakki on kiiltävämpi."
          },
          "cookingGuide": {
                "en": "Slice 5mm thick, sear in brown butter with garlic and parsley for 4 minutes. Outstanding in pasta.",
                "zh": "切半厘米厚片，以焦香黄油中火煎至两面金黄微脆，撒蒜蓉与欧芹，拌入意面风味绝伦。",
                "fi": "Viipaloi ja paista voissa valkosipulin ja persiljan kanssa. Erinomainen pastoissa."
          },
          "image": "./images/boletus_reticulatus.jpg",
          "gallery": [
          {
                "file": "./images/boletus_reticulatus.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Felipe Hidalgo, some rights reserved (CC BY-NC), uploaded by Felipe Hidalgo"
          },
          {
                "file": "./images/boletus_reticulatus_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Matthias Thomssen, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/boletus_reticulatus_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Matthias Thomssen, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "leccinum_vulpinum",
          "chapters": ["02","06","08"],
          "latinName": "Leccinum vulpinum",
          "family": "boletaceae",
          "rating": "**",
          "edibility": "good",
          "level": "intermediate",
          "months": [
                7,
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Pine Red-Capped Scaber",
                      "local": "Männynpunikkitatti",
                      "alt": "Leccinum vulpinum"
                },
                "zh": {
                      "primary": "松生红盖牛肝菌",
                      "local": "松林红绒盖牛肝菌",
                      "alt": "Leccinum vulpinum"
                },
                "fi": {
                      "primary": "Männynpunikkitatti",
                      "local": "Männynpunikki",
                      "alt": "Leccinum vulpinum"
                }
          },
          "habitatName": {
                "en": "Dry sandy Scots pine heaths, rocky lichen terraces & blueberry patches",
                "zh": "干燥沙质欧洲赤松林、花岗岩地衣岩台及蓝莓矮灌木丛",
                "fi": "Kuivat kangasmetsät, kalliomänniköt ja hiekkapohjaiset mäntykankaat"
          },
          "morphology": {
                "en": {
                      "cap": "6–18 cm, dark brick-red to chestnut-red, dry, overhangs tubes at margin",
                      "underCap": "Pores cream-grey, bruising brownish",
                      "stem": "Solid, covered with dark brown to black rough fibrous scales",
                      "odor": "Mild earthy mushroom aroma"
                },
                "zh": {
                      "cap": "6–18厘米，深砖红至红栗色，表皮常超出菌盖边缘形成明显保护皮膜",
                      "underCap": "菌孔乳白至灰褐，触碰后逐渐泛淡污褐色",
                      "stem": "坚实粗壮，表面密布粗糙的深褐色至黑褐色丛毛状小鳞片",
                      "odor": "温和朴实的森林泥土与菌菇气息"
                },
                "fi": {
                      "cap": "6–18 cm, tiilenpunainen tai tumman punaruskea, reunanahka kääntyy pillien yli",
                      "underCap": "Pillistö harmaanvalkoinen, vanhana harmahtava",
                      "stem": "Tukeva, peittynyt ruskeanmustiin karkeisiin nukkasuomuihin",
                      "odor": "Mieto, miellyttävä"
                }
          },
          "culinaryTip": {
                "en": "Firm meaty texture. MUST BE COOKED THOROUGHLY (>15 min) to prevent stomach upset. Blackens upon cooking.",
                "zh": "肉质紧实耐煮。必须彻底加热烹饪15分钟以上以防肠胃不适！受热烹调后菌肉会转为深灰色至黑亮色。",
                "fi": "Kiinteä ja hyvä ruokasieni. VAATII VÄHINTÄÄN 15 MINUUTIN KYPSENNYKSEN vatsavaivojen välttämiseksi."
          },
          "lookalikeAlert": {
                "en": "Other red-capped Leccinum species (L. versipelle under birch, L. aurantiacum under aspen) are all similarly good edibles requiring thorough cooking.",
                "zh": "与桦树红绒盖牛肝菌及山杨牛肝菌外形相近，均为无毒优质食用菌，均需充分烹熟后食用。",
                "fi": "Kaikki punikkitatit ovat hyviä ruokasieniä, kunhan ne kypsennetään kunnolla."
          },
          "whereWhen": {
                "en": "July through October in dry pine ridges across Nuuksio, Sipoonkorpi granite cliffs, and coastal Porkkala.",
                "zh": "7月至10月在Nuuksio山脊、西波国家公园高地岩丘及Porkkalanniemi海角赤松林中极为多见。",
                "fi": "Heinä-lokakuussa kallioisilla mäntykankailla koko Uudellamaalla."
          },
          "searchTactics": {
                "en": "Spot the dome-like brick-red caps rising above the light green reindeer lichen under pines.",
                "zh": "在赤松下浅灰绿色的驯鹿地衣毯和红莓灌木中，搜寻宛如小砖包般耸起的深红菌盖。",
                "fi": "Etsi vaalean jäkälikön ja varpujen keskeltä männyn juurilta."
          },
          "lookalikes": {
                "en": "Orange Birch Bolete (L. versipelle) grows strictly with birch and has coal-black scales on a white stem.",
                "zh": "白桦红盖牛肝菌专生于桦树下，菌柄底色雪白且鳞片呈纯黑色。",
                "fi": "Koivunpunikkitatilla on puhtaanvalkea jalka mustilla suomuilla ja se kasvaa koivun alla."
          },
          "cookingGuide": {
                "en": "Cube finely, simmer in a stew or sauté with onions for 20 minutes until thoroughly cooked. Superb in hearty Finnish beef stews.",
                "zh": "切成小丁，与洋葱在锅中翻炒并焖煮至少20分钟，肉质极其脆爽有嚼劲，是炖牛肉和配杂粮饭的绝佳食材。",
                "fi": "Paloittele ja paista pannulla vähintään 15–20 minuuttia. Sopii lihapatoihin."
          },
          "image": "./images/leccinum_vulpinum.jpg",
          "gallery": [
          {
                "file": "./images/leccinum_vulpinum.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Christine Young, some rights reserved (CC BY), uploaded by Christine Young"
          },
          {
                "file": "./images/leccinum_vulpinum_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Emilija Čiužaitė, all rights reserved"
          },
          {
                "file": "./images/leccinum_vulpinum_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Kira Marchenkova, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "leccinum_aurantiacum",
          "chapters": ["06","08"],
          "latinName": "Leccinum aurantiacum",
          "family": "boletaceae",
          "rating": "**",
          "edibility": "good",
          "level": "intermediate",
          "months": [
                7,
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Aspen Bolete",
                      "local": "Haavanpunikkitatti",
                      "alt": "Leccinum aurantiacum"
                },
                "zh": {
                      "primary": "欧洲山杨牛肝菌",
                      "local": "杨树红盖牛肝菌 / 橙红疣柄牛肝菌",
                      "alt": "Leccinum aurantiacum"
                },
                "fi": {
                      "primary": "Haavanpunikkitatti",
                      "local": "Haavanpunikki",
                      "alt": "Leccinum aurantiacum"
                }
          },
          "habitatName": {
                "en": "Mixed deciduous forests with European aspen (Populus tremula)",
                "zh": "含有欧洲山杨（Populus tremula）的针阔混交林与向阳阔叶林",
                "fi": "Sekametsät ja lehdot, joissa kasvaa haapaa"
          },
          "morphology": {
                "en": {
                      "cap": "6–20 cm, warm orange-red to apricot-tan, velvety when dry",
                      "underCap": "Pores whitish to cream-buff, small round tubes",
                      "stem": "Stout, scales initially white turning rusty-reddish-brown (not jet black)",
                      "odor": "Mild, pleasant mushroom aroma"
                },
                "zh": {
                      "cap": "6–20厘米，温润的杏橙红至橘黄色，干燥时呈细腻丝绒质感",
                      "underCap": "菌孔白色至浅乳黄色，管孔细密均一",
                      "stem": "粗壮挺拔，菌柄上的绒毛小鳞片幼时为白色，后转为红褐至锈褐色（非纯黑）",
                      "odor": "清香温和"
                },
                "fi": {
                      "cap": "6–20 cm, oranssinpunainen tai hehkuvan oranssi, samettipintainen",
                      "underCap": "Pillistö valkeahko, myöhemmin ruskehtava",
                      "stem": "Tukeva, suomut aluksi valkoisia, muuttuvat vaaleanruskeiksi tai punaruskeiksi",
                      "odor": "Mieto"
                }
          },
          "culinaryTip": {
                "en": "Firm and substantial. Must be cooked for 15–20 minutes thoroughly before consumption.",
                "zh": "肉质厚重充实。入口前必须彻底烹熟煮透15至20分钟。",
                "fi": "Hyvä ja kiinteä ruokasieni. Vaatii huolellisen, vähintään 15 minuutin kypsennyksen."
          },
          "lookalikeAlert": {
                "en": "All red-capped Leccinum species share the same safety rule: safe and delicious, but never eat raw or half-cooked.",
                "zh": "所有红盖疣柄牛肝菌共享相同安全准则：美味无毒，但严禁生食或夹生食用！",
                "fi": "Kaikilla punikeilla sama sääntö: kypsennä aina kunnolla."
          },
          "whereWhen": {
                "en": "Fruiting late summer to early autumn wherever European aspen trees grow, especially along sunny forest tracks.",
                "zh": "夏末至初秋出菇于欧洲山杨树下，尤其在林缘朝阳透光地段常见。",
                "fi": "Heinä-syyskuussa haapojen seuralaisena."
          },
          "searchTactics": {
                "en": "Look for fluttery trembling aspen leaves, then scan the grass and leaf litter around the tree drip line.",
                "zh": "在森林中抬头辨识风吹哗哗作响的欧洲山杨圆叶，随后在树冠投影周围搜寻鲜亮橙色菌盖。",
                "fi": "Etsi havisevien haapojen alta ruohikosta."
          },
          "lookalikes": {
                "en": "Orange Birch Bolete (L. versipelle) has coal-black scales right from youth and partners with birch.",
                "zh": "白桦红盖牛肝菌幼时鳞片即为炭黑色，且严格与白桦共生。",
                "fi": "Koivunpunikkitatti kasvaa koivun alla ja sen jalassa on mustat suomut."
          },
          "cookingGuide": {
                "en": "Chop into bite-sized pieces and cook into creamy mushroom pasta or bake into a savory autumn pie.",
                "zh": "切滚刀块与蒜片下锅翻炒出汤汁收浓，加淡奶油制成经典牛肝菌意面酱，或作咸派馅料。",
                "fi": "Hauduta pannulla ja valmista sienikastike tai piirakka."
          },
          "image": "./images/leccinum_aurantiacum.jpg",
          "gallery": [
          {
                "file": "./images/leccinum_aurantiacum.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Federico Calledda, some rights reserved (CC BY-NC), uploaded by Federico Calledda"
          },
          {
                "file": "./images/leccinum_aurantiacum_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Berno Hellauer, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/leccinum_aurantiacum_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Susan Elliott, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "leccinum_scabrum",
          "chapters": ["02","06","08"],
          "latinName": "Leccinum scabrum",
          "family": "boletaceae",
          "rating": "*",
          "edibility": "edible",
          "level": "beginner",
          "months": [
                7,
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Brown Birch Bolete",
                      "local": "Lehmäntatti",
                      "alt": "Leccinum scabrum"
                },
                "zh": {
                      "primary": "褐疣柄牛肝菌",
                      "local": "桦树牛肝菌 / 牛菇",
                      "alt": "Leccinum scabrum"
                },
                "fi": {
                      "primary": "Lehmäntatti",
                      "local": "Lehmäntatti",
                      "alt": "Leccinum scabrum"
                }
          },
          "habitatName": {
                "en": "Moist birch forests, mossy path borders & birch peat margins",
                "zh": "湿润白桦林、长满苔藓的小径旁及桦木沼泽林缘",
                "fi": "Koivikot, sekametsät ja soiden reunat"
          },
          "morphology": {
                "en": {
                      "cap": "5–15 cm, uniform grey-brown to chocolate-brown, smooth, soft and cushion-like",
                      "underCap": "Pores whitish, becoming dingy brownish-grey with age; deep spongy layer",
                      "stem": "Slender, white covered with grey to blackish scabers; flesh remains white when sliced",
                      "odor": "Mild earthy odor"
                },
                "zh": {
                      "cap": "5–15厘米，均一灰褐色至浅巧克力褐色，表面平滑，老后海绵般松软",
                      "underCap": "菌孔白色，成熟后转灰褐色，孔层厚而易脱落",
                      "stem": "较修长纤细，白色底面上密布灰黑色粗糙斑点小疣；剖开后肉色基本不变黑",
                      "odor": "微弱泥土香"
                },
                "fi": {
                      "cap": "5–15 cm, tuhkanruskea tai harmaanruskea, pehmeämaltoinen",
                      "underCap": "Pillistö vaalea, vanhana ruskeanharmaa",
                      "stem": "Hoikka, valkeahko, harmaanmustien suomujen peitossa; malto ei tummu leikattaessa",
                      "odor": "Mieto"
                }
          },
          "culinaryTip": {
                "en": "Soft texture. Harvest only young firm buttons; best chopped into mixed mushroom soups and stews.",
                "zh": "肉质相对松软。建议仅采摘菌盖紧实闭合的幼菌；适合切碎混入杂菌汤或炖菜中增添菌香。",
                "fi": "Pehmeämaltoinen. Kerää vain nuoria kiinteitä yksilöitä keittoihin ja patoihin."
          },
          "lookalikeAlert": {
                "en": "Can be confused with other brown Leccinum species (e.g. L. variicolor), all of which are safe edibles.",
                "zh": "可与斑褐疣柄牛肝菌等混淆，均为完全无毒的食用菌。",
                "fi": "Ei vaarallisia näköislajeja."
          },
          "whereWhen": {
                "en": "Abundant across all Helsinki birch woodlands from July to October, even in suburban park edges.",
                "zh": "7月至10月在赫尔辛基凡有白桦树的林地极为普遍，甚至在城市公园草坪边沿也屡见不鲜。",
                "fi": "Hyvin yleinen koivujen alla kaikkialla Uudellamaalla heinä-lokakuussa."
          },
          "searchTactics": {
                "en": "Look right at the bases of Silver Birch trunks in grassy open glades.",
                "zh": "在开阔草地边缘的垂枝白桦树根附近巡视即可轻松发现。",
                "fi": "Etsi koivujen läheltä ruohikoista."
          },
          "lookalikes": {
                "en": "Tylopilus felleus (Bitter Bolete) grows with conifers, has pink pores and violently bitter taste.",
                "zh": "苦粉孢牛肝菌（苦牛肝）生于针叶林，菌孔粉红且味极苦。",
                "fi": "Sappitatti kasvaa havumetsissä, on maultaan polttavan karvas ja sen pillistö on punertava."
          },
          "cookingGuide": {
                "en": "Use young caps sliced in soups with potatoes, dill, and sour cream. Discard soft waterlogged old caps.",
                "zh": "取幼嫩菌盖切丁，与土豆、莳萝和酸奶油同煮芬兰传统蘑菇浓汤。弃用吸水松垮的老菌。",
                "fi": "Käytä nuoret lakit sienikeittoon perunan ja tillin kera."
          },
          "image": "./images/leccinum_scabrum.jpg",
          "gallery": [
          {
                "file": "./images/leccinum_scabrum.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Federico Calledda, some rights reserved (CC BY-NC), uploaded by Federico Calledda"
          },
          {
                "file": "./images/leccinum_scabrum_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) jmorgado2803, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/leccinum_scabrum_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) kevininne, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "leccinum_variicolor",
          "chapters": ["06","08"],
          "latinName": "Leccinum variicolor",
          "family": "boletaceae",
          "rating": "**",
          "edibility": "good",
          "level": "intermediate",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Mottled Bolete",
                      "local": "Kirjotatti",
                      "alt": "Leccinum variicolor"
                },
                "zh": {
                      "primary": "斑褐疣柄牛肝菌",
                      "local": "花盖疣柄牛肝菌",
                      "alt": "Leccinum variicolor"
                },
                "fi": {
                      "primary": "Kirjotatti",
                      "local": "Kirjotatti",
                      "alt": "Leccinum variicolor"
                }
          },
          "habitatName": {
                "en": "Sphagnum moss in birch bogs & damp heath margins",
                "zh": "白桦沼泽林泥炭藓层及阴湿蓝莓苔藓地",
                "fi": "Rahkasammaliset koivuvaltaiset suot ja kosteat kankaat"
          },
          "morphology": {
                "en": {
                      "cap": "5–12 cm, marbled with mottled patches of dark charcoal-brown and whitish spots",
                      "underCap": "Cream-white pores",
                      "stem": "Densely scabrous; stem base bruises vivid blue-green when cut",
                      "odor": "Pleasant mild mushroom scent"
                },
                "zh": {
                      "cap": "5–12厘米，表面具大理石花纹般深炭灰褐色与淡白灰斑驳交织的花斑",
                      "underCap": "乳白色菌孔，成熟后转浅灰褐色",
                      "stem": "粗糙黑鳞密布，菌柄基部肉质在切开后会转为醒目的蓝绿色",
                      "odor": "清淡悦人的菌香"
                },
                "fi": {
                      "cap": "5–12 cm, lakin pinnassa tummanharmaan ja vaalean kirjavia läiskiä",
                      "underCap": "Pillistö kermanvalkea",
                      "stem": "Mustanharmaasuomuinen; jalan tyvi muuttuu leikattaessa sinihreäksi",
                      "odor": "Mieto"
                }
          },
          "culinaryTip": {
                "en": "Noticeably firmer flesh than L. scabrum. Excellent sautéed with butter and shallots.",
                "zh": "肉质明显比普通的褐疣柄牛肝菌更为紧致结实。用黄油与红葱碎大火快炒极具风味。",
                "fi": "Selvästi lehmäntattia kiinteämpi. Erinomainen paistettuna."
          },
          "lookalikeAlert": {
                "en": "The blue-green staining at the stem base is normal and indicates this choice species, not toxicity.",
                "zh": "菌柄基部切开后变蓝绿色是该种天然特征，绝非有毒变色，请安心享用。",
                "fi": "Jalan tyven sinihreä väriytyminen on lajityypillistä eikä merkki myrkyllisyydestä."
          },
          "whereWhen": {
                "en": "August to October in moist, mossy birch tracts across Sipoonkorpi and North Espoo.",
                "zh": "8月至10月生于Sipoonkorpi与北埃斯波长满泥炭藓的桦木湿地周边。",
                "fi": "Elo-lokakuussa kosteissa korpimetsissä koivujen alla."
          },
          "searchTactics": {
                "en": "Look for mottled dark caps hidden among thick green bog mosses under birch trees.",
                "zh": "在桦树旁的厚绿苔藓丛中搜寻带有斑驳大理石纹路的花色菌盖。",
                "fi": "Tarkkaile paksusammalikoita koivujen läheisyydessä."
          },
          "lookalikes": {
                "en": "Brown Birch Bolete (L. scabrum) has uniform brown cap and no blue-green base staining.",
                "zh": "褐疣柄牛肝菌菌盖颜色单一且基部不变蓝绿。",
                "fi": "Lehmäntatti on tasavärisempi eikä sen jalka muutu vihreänsiniseksi."
          },
          "cookingGuide": {
                "en": "Pan-fry with butter, garlic, and fresh thyme. Firm texture holds up very well in mixed mushroom skillets.",
                "zh": "切片入热黄油锅加蒜瓣百里香翻炒，肉质紧实耐煮，炒杂菌中口感极佳。",
                "fi": "Paista voissa valkosipulin ja timjamin kanssa."
          },
          "image": "./images/leccinum_variicolor.jpg",
          "gallery": [
          {
                "file": "./images/leccinum_variicolor.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Vladimir Bryukhov, some rights reserved (CC BY-NC), uploaded by Vladimir Bryukhov"
          },
          {
                "file": "./images/leccinum_variicolor_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) christian-1956, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/leccinum_variicolor_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Pyry Liedes, some rights reserved (CC BY)"
          }
]
    },
{
          "id": "suillus_luteus",
          "chapters": ["06","08"],
          "latinName": "Suillus luteus",
          "family": "boletaceae",
          "rating": "**",
          "edibility": "good",
          "level": "beginner",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Slippery Jack",
                      "local": "Voitatti",
                      "alt": "Suillus luteus"
                },
                "zh": {
                      "primary": "褐环乳牛肝菌",
                      "local": "黄油牛肝菌 / 滑菇",
                      "alt": "Suillus luteus"
                },
                "fi": {
                      "primary": "Voitatti",
                      "local": "Voitatti",
                      "alt": "Suillus luteus"
                }
          },
          "habitatName": {
                "en": "Young Scots pine stands, sandy roadbanks, grassy path verges & pine plantations",
                "zh": "幼龄欧洲赤松林、沙质林道边坡、草地小径边缘及松树种植林",
                "fi": "Nuoret mäntymetsät, polunvarret, hiekkaiset pientareet"
          },
          "morphology": {
                "en": {
                      "cap": "4–12 cm, chocolate-brown to chestnut, covered in thick slimy glutinous skin when wet",
                      "underCap": "Pores bright yellow, small, angular; covered by white veil in youth",
                      "stem": "Cylindrical, pale yellow above a prominent membranous purple-white ring",
                      "odor": "Fruity and slightly acidic"
                },
                "zh": {
                      "cap": "4–12厘米，深巧克力褐色至红栗色，潮湿时覆有一层极其黏稠顺滑的胶质胶皮",
                      "underCap": "菌孔亮黄色，细密角形；幼时被白色菌膜完全覆盖",
                      "stem": "圆柱形，具显著膜质紫色至白色下垂菌环，菌环上方有黄色腺点",
                      "odor": "清新果香微带酸意"
                },
                "fi": {
                      "cap": "4–12 cm, suklaanruskea, kosteana erittäin limainen",
                      "underCap": "Pillistö kirkkaankeltainen, nuorena suojuksen peittämä",
                      "stem": "Renkaallinen, yläosastaan vaaleankeltainen, rengas kalvomainen ja violetinsävyinen",
                      "odor": "Hedelmäinen, lievästi hapan"
                }
          },
          "culinaryTip": {
                "en": "ALWAYS peel off the slimy cap cuticle before cooking! It peels like a sticker; omitting peeling can cause laxative effects.",
                "zh": "下锅前务必剥掉菌盖表面的黏皮！只需用小刀从边缘轻轻一提即可整片撕下。如不撕皮可能引起轻微腹泻。",
                "fi": "POISTA LAKIN LIMAKALVO AINA ennen ruoaksi valmistamista; voi aiheuttaa vatsavaivoja jos sitä ei kuorita."
          },
          "lookalikeAlert": {
                "en": "Velvet Bolete (S. variegatus) has a dry velvety cap with no ring; Larch Bolete (S. grevillei) strictly associates with larch.",
                "zh": "斑点乳牛肝菌（Kangastatti）无菌环且盖面干燥无黏液；落叶松乳牛肝严格仅生于落叶松下。",
                "fi": "Kangastatilla ei ole rengasta eikä limakalvoa."
          },
          "whereWhen": {
                "en": "August to October along sunny sandy roadside pine ditches throughout Espoo, Vantaa and Helsinki.",
                "zh": "8月至10月在赫尔辛基及近郊沙质向阳的松树道旁、林中小径两边成片生长。",
                "fi": "Elo-lokakuussa mäntykankailla ja teiden varsilla."
          },
          "searchTactics": {
                "en": "Scan sunny grassy ditch banks beside Scots pine woods after warm autumn rains.",
                "zh": "夏末秋雨后，在向阳且长着杂草的松林沙沟斜坡上极易寻找。",
                "fi": "Etsi valoisilta tienpientareilta mäntyjen läheisyydestä."
          },
          "lookalikes": {
                "en": "Suillus bovinus lacks a ring and has wider composite pores running down the stem.",
                "zh": "牛乳牛肝菌无菌环，菌孔更大且复合延生。",
                "fi": "Nummitatilla ei ole rengasta ja sen pillistö on karkeampi."
          },
          "cookingGuide": {
                "en": "Peel skin, fry in hot butter with onions, or pickle in a spiced vinegar brine for traditional Finnish smorgasbord.",
                "zh": "剥去黏皮后切块，入热黄油中与洋葱爆炒，或加香醋与莳萝腌制成北欧传统冷盘酸甜渍蘑菇。",
                "fi": "Kuori kalvo, paista voissa tai säilö etikkaliemeen."
          },
          "image": "./images/suillus_luteus.jpg",
          "gallery": [
          {
                "file": "./images/suillus_luteus.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Davide Puddu, some rights reserved (CC BY), uploaded by Davide Puddu"
          },
          {
                "file": "./images/suillus_luteus_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) vahatalo, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/suillus_luteus_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Oldřich Nedvěd, all rights reserved"
          }
]
    },
{
          "id": "suillus_variegatus",
          "chapters": ["06","08"],
          "latinName": "Suillus variegatus",
          "family": "boletaceae",
          "rating": "**",
          "edibility": "good",
          "level": "beginner",
          "months": [
                7,
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Velvet Bolete",
                      "local": "Kangastatti",
                      "alt": "Suillus variegatus"
                },
                "zh": {
                      "primary": "斑点乳牛肝菌",
                      "local": "细点牛肝菌 / 干燥乳牛肝",
                      "alt": "Suillus variegatus"
                },
                "fi": {
                      "primary": "Kangastatti",
                      "local": "Kangastatti",
                      "alt": "Suillus variegatus"
                }
          },
          "habitatName": {
                "en": "Dry sandy pine heaths, mossy bedrock terraces & blueberry slopes",
                "zh": "干燥沙质松林、苔藓覆盖的花岗岩台地及蓝莓荒原",
                "fi": "Kuivat ja tuoreet mäntykankaat, kalliomänniköt"
          },
          "morphology": {
                "en": {
                      "cap": "5–13 cm, ochre-yellow to buff, dry felt-like/velvety with fine darker freckles; NO slime",
                      "underCap": "Pores dingy olive-yellow to ochre-brown; bruises faintly blue-green when pressed",
                      "stem": "Solid, yellowish-ochre, smooth, no ring",
                      "odor": "Distinctive, slightly metallic, acidic or pine-needle aroma"
                },
                "zh": {
                      "cap": "5–13厘米，赭黄至沙黄色，表面干燥如毛毡或细天鹅绒，覆有微小深色斑点，绝无黏液",
                      "underCap": "菌孔污橄榄黄至赭褐色，轻按后会缓慢转泛微弱蓝绿色",
                      "stem": "实心坚实，赭黄色，表面平滑无菌环",
                      "odor": "独特微带金属感与松针清香的微酸气息"
                },
                "fi": {
                      "cap": "5–13 cm, himmeän kellanruskea, hienosuomuinen tai nukkainen, kuiva",
                      "underCap": "Pillistö oliivinruskea, sinertyy hitaasti painettaessa",
                      "stem": "Tasapaksu, kellertävä, renkaaton",
                      "odor": "Omaleimainen, hieman hapan tai metallinen"
                }
          },
          "culinaryTip": {
                "en": "Outstanding mushroom for dehydration. Drying transforms its slightly acidic raw aroma into rich savory umami.",
                "zh": "芬兰极佳的烘干脱水菌之一！干燥过程会将其略带酸性的原味转化为浓郁醇厚的鲜味物质（Umami）。",
                "fi": "Erinomainen kuivattuna. Kuivaus tuo esiin upean syvän sienen aromin."
          },
          "lookalikeAlert": {
                "en": "Flesh faintly turns blue when bruised—this is natural and safe. Completely distinct from bitter or toxic species.",
                "zh": "切开后肉质微变蓝绿是其正常生理反应，完全无毒，切勿惊慌。",
                "fi": "Liejumaan sinertyminen leikatessa on normaalia."
          },
          "whereWhen": {
                "en": "Extremely abundant across all Southern Finland pine heaths from late July through October.",
                "zh": "7月下旬至10月在芬兰南部所有的赤松林地极其高产，往往一采便是一大筐。",
                "fi": "Erittäin yleinen ja satoisa koko Uudellamaalla elo-syyskuussa."
          },
          "searchTactics": {
                "en": "Look in sunny dry pine stands where reindeer lichen grows alongside low blueberry bushes.",
                "zh": "在赤松林间阳光充足、地衣与矮蓝莓混生的平缓坡地上极易寻找。",
                "fi": "Etsi jäkäliköistä ja varpikoista mäntyjen alta."
          },
          "lookalikes": {
                "en": "Slippery Jack (S. luteus) has a slimy cap and a ring; Velvet bolete is dry and ringless.",
                "zh": "褐环乳牛肝菌（Voitatti）盖面极黏且有菌环；斑点乳牛肝菌盖面干燥如毡且无菌环。",
                "fi": "Voitatilla on limainen lakki ja rengas."
          },
          "cookingGuide": {
                "en": "Slice into 4mm ribbons and dry in a food dehydrator. Grind dried slices into umami mushroom powder for seasoning sauces.",
                "zh": "切4毫米薄片入烘干机烘干储藏，或打碎成野生纯天然蘑菇味精粉，煮汤调汁香气扑鼻。",
                "fi": "Viipaloi ja kuivaa. Jauha kuivatut tatit maustejauhoksi kastikkeisiin."
          },
          "image": "./images/suillus_variegatus.jpg",
          "gallery": [
          {
                "file": "./images/suillus_variegatus.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Federico Calledda, some rights reserved (CC BY-NC), uploaded by Federico Calledda"
          },
          {
                "file": "./images/suillus_variegatus_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Petr Harant, some rights reserved (CC BY)"
          },
          {
                "file": "./images/suillus_variegatus_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Petr Harant, some rights reserved (CC BY)"
          }
]
    },
{
          "id": "suillus_bovinus",
          "chapters": ["06","08"],
          "latinName": "Suillus bovinus",
          "family": "boletaceae",
          "rating": "*",
          "edibility": "edible",
          "level": "beginner",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Bovine Bolete",
                      "local": "Nummitatti",
                      "alt": "Suillus bovinus"
                },
                "zh": {
                      "primary": "牛乳牛肝菌",
                      "local": "牛菌 / 黄乳牛肝",
                      "alt": "Suillus bovinus"
                },
                "fi": {
                      "primary": "Nummitatti",
                      "local": "Nummitatti",
                      "alt": "Suillus bovinus"
                }
          },
          "habitatName": {
                "en": "Poor sandy pine heaths, mossy granite outcrops & pine road verges",
                "zh": "贫瘠沙质松林、苔藓覆盖的花岗岩露头及松林道旁",
                "fi": "Karut hiekkakankaat, kalliomänniköt ja polunreunat"
          },
          "morphology": {
                "en": {
                      "cap": "4–10 cm, pale ochre-buff to clay-yellow, elastic rubbery flesh; slightly sticky when moist",
                      "underCap": "Wide, compound, angular pores running slightly down stem, grey-yellow to olive-ochre",
                      "stem": "Slender, same color as cap, no ring",
                      "odor": "Mild, fruity-acidic"
                },
                "zh": {
                      "cap": "4–10厘米，浅赭黄至黏土黄色，肉质极富弹性犹如橡胶皮，潮湿时略黏",
                      "underCap": "菌孔粗大、复合、呈不规则大角孔，略微沿菌柄向下延生，橄榄黄色",
                      "stem": "较纤细，与菌盖同色，无菌环",
                      "odor": "温和清淡微带果香"
                },
                "fi": {
                      "cap": "4–10 cm, vaalean kellanruskea, nahkamaisen sitkeä, kosteana tahmea",
                      "underCap": "Pillistö laaja, karkean kulmikas, johteinen, harmaan- tai oliivinkeltainen",
                      "stem": "Hoikka, lakin värinen, renkaaton",
                      "odor": "Mieto"
                }
          },
          "culinaryTip": {
                "en": "Rubbery texture. Turns pinkish-purple when cooked. Best picked young and mixed into mushroom stews.",
                "zh": "肉质偏橡胶韧性。下锅受热烹煮后肉质会奇特地转为淡粉紫红色！宜采幼菌混炒。",
                "fi": "Sitkeämaltoinen. Muuttuu kypsennettäessä violetinsävyiseksi. Parhaimmillaan sekasienissä."
          },
          "lookalikeAlert": {
                "en": "Often grows in rings together with the small pink mushroom Gomphidius roseus, which is also edible.",
                "zh": "常与小巧粉红色的粉红铆钉菇（Gomphidius roseus）共生聚集成圈，两者均可食用。",
                "fi": "Kasvaa usein yhdessä vaaleanpunaisen punanuljaskan (Gomphidius roseus) kanssa."
          },
          "whereWhen": {
                "en": "Abundant in late August and September on bare sandy pine clearings across Uusimaa.",
                "zh": "8月下旬至9月在乌西玛大区贫瘠沙地松林步道边缘大量簇生。",
                "fi": "Elokuusta lokakuulle karuissa männiköissä."
          },
          "searchTactics": {
                "en": "Scan sunny patches where pine roots are exposed along trails in pine heaths.",
                "zh": "沿松林步道两旁沙质裸露处搜寻成群生长的浅黄色扁平菌盖。",
                "fi": "Etsi hiekkateiden reunoilta ja männiköiden aukkopaikoilta."
          },
          "lookalikes": {
                "en": "Velvet bolete (S. variegatus) has smaller freckled pores and a velvety dry cap.",
                "zh": "斑点乳牛肝菌菌孔细小且盖面呈毛毡状。",
                "fi": "Kangastatilla on hienompi pillistö ja kuiva nukkainen lakki."
          },
          "cookingGuide": {
                "en": "Chop finely, sauté in butter with onions and add to hearty soups.",
                "zh": "切碎后与洋葱在黄油中慢炒，适于做杂菇馅料或浓汤。",
                "fi": "Paloittele hienoksi ja paista sipulin kanssa."
          },
          "image": "./images/suillus_bovinus.jpg",
          "gallery": [
          {
                "file": "./images/suillus_bovinus.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Jerry Cooper, some rights reserved (CC BY), uploaded by Jerry Cooper"
          },
          {
                "file": "./images/suillus_bovinus_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Nataliia Sosnovshchenko, all rights reserved"
          },
          {
                "file": "./images/suillus_bovinus_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Petr Harant, some rights reserved (CC BY)"
          }
]
    },
{
          "id": "suillus_grevillei",
          "chapters": ["06","08"],
          "latinName": "Suillus grevillei",
          "family": "boletaceae",
          "rating": "**",
          "edibility": "good",
          "level": "beginner",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Larch Bolete",
                      "local": "Lehtikuusentatti",
                      "alt": "Suillus grevillei"
                },
                "zh": {
                      "primary": "落叶松乳牛肝菌",
                      "local": "落叶松牛肝菌 / 金黄乳牛肝",
                      "alt": "Suillus grevillei"
                },
                "fi": {
                      "primary": "Lehtikuusentatti",
                      "local": "Lehtikuusentatti",
                      "alt": "Suillus grevillei"
                }
          },
          "habitatName": {
                "en": "Strictly under European and Siberian Larch (Larix) trees in parks and planted forests",
                "zh": "特异性专一严格生长于公园、植树区或树木园的落叶松（Larix）树下",
                "fi": "Ainoastaan lehtikuusten (Larix) seurassa puistoissa ja istutuksissa"
          },
          "morphology": {
                "en": {
                      "cap": "4–12 cm, brilliant golden-yellow to rich chestnut-orange, very slimy when wet",
                      "underCap": "Pores bright lemon-yellow, turning brownish when bruised",
                      "stem": "Solid, golden-yellow above a thick, persistent pale yellow ring",
                      "odor": "Mild pleasant mushroom aroma"
                },
                "zh": {
                      "cap": "4–12厘米，鲜艳夺目的金黄至红栗橙色，湿润时表面覆有一层极厚黏液胶层",
                      "underCap": "菌孔鲜柠檬黄色，受压后微转淡褐色",
                      "stem": "坚实粗壮，在醒目的厚质浅黄菌环上方呈金黄色",
                      "odor": "温和宜人"
                },
                "fi": {
                      "cap": "4–12 cm, kirkkaankeltainen tai oranssinruskea, kosteana erittäin limainen",
                      "underCap": "Pillistö kirkkaankeltainen, ruskettuu hieman kosketuksesta",
                      "stem": "Tukeva, renkaallinen, renkaan yläpuolelta keltainen",
                      "odor": "Mieto"
                }
          },
          "culinaryTip": {
                "en": "Peel off the gelatinous cap skin before cooking. Firm tender flesh, lovely golden color on the plate.",
                "zh": "下锅前务必剥掉菌盖黏皮。肉质鲜嫩柔滑，烹制后呈现诱人的金黄色泽。",
                "fi": "Poista limakalvo ennen valmistusta. Kaunis keltainen ja maukas ruokasieni."
          },
          "lookalikeAlert": {
                "en": "Strict mycorrhizal partner with Larix trees; cannot be mistaken for poisonous species.",
                "zh": "严格仅在落叶松树根周围出菇，只要认准落叶松林，绝无任何有毒混淆种风险。",
                "fi": "Kasvaa vain lehtikuusten alla, joten laji on helppo tunnistaa turvallisesti."
          },
          "whereWhen": {
                "en": "Late August through October under planted larches in Helsinki botanic gardens, parks, and Arboretum sites.",
                "zh": "8月下旬至10月在赫尔辛基及近郊各类植物园、城市公园栽种的落叶松树下集中出菇。",
                "fi": "Elo-lokakuussa lehtikuusi-istutuksissa ja puistoissa."
          },
          "searchTactics": {
                "en": "Find larch needles (soft needles in rosettes that turn yellow in autumn) and look right around the base.",
                "zh": "先辨认落叶松（秋天松针呈簇状簇生且会整体变金黄脱落），在树干周围数米草地搜寻。",
                "fi": "Etsi puistojen lehtikuusten alta."
          },
          "lookalikes": {
                "en": "Slippery Jack (S. luteus) associates strictly with pines, has chocolate cap and purple-toned ring.",
                "zh": "褐环乳牛肝菌（Voitatti）严格与赤松共生，盖面为巧克力棕褐色且菌环泛紫白。",
                "fi": "Voitatti kasvaa männyn alla ja on lakiltaan tummemman ruskea."
          },
          "cookingGuide": {
                "en": "Peel slimy skin, slice and fry in butter with garlic. Delicious in risottos.",
                "zh": "剥去黏皮后切片，与蒜片在黄油中煎至微黄，拌入意式烩饭风味极佳。",
                "fi": "Kuori limakalvo ja paista voissa. Erinomainen risottoon."
          },
          "image": "./images/suillus_grevillei.jpg",
          "gallery": [
          {
                "file": "./images/suillus_grevillei.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Светлана Мещерягина, some rights reserved (CC BY-NC), uploaded by Светлана Мещерягина"
          },
          {
                "file": "./images/suillus_grevillei_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Michal Honskus, some rights reserved (CC BY)"
          },
          {
                "file": "./images/suillus_grevillei_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) irvinditz, all rights reserved"
          }
]
    },
{
          "id": "hydnum_rufescens",
          "chapters": ["02","08"],
          "latinName": "Hydnum rufescens",
          "family": "hydnaceae",
          "rating": "**",
          "edibility": "good",
          "level": "beginner",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Terracotta Hedgehog",
                      "local": "Rusko-orakas",
                      "alt": "Hydnum rufescens"
                },
                "zh": {
                      "primary": "红齿菌",
                      "local": "红褐齿菌 / 赤黄刺菌",
                      "alt": "Hydnum rufescens"
                },
                "fi": {
                      "primary": "Rusko-orakas",
                      "local": "Rusko-orakas",
                      "alt": "Hydnum rufescens"
                }
          },
          "habitatName": {
                "en": "Coniferous and mixed forests, mossy spruce slopes & pine heaths",
                "zh": "针叶林与针阔混交林、长满苔藓的云杉斜坡及赤松林地",
                "fi": "Havumetsät, kuusikot ja kalliomänniköt"
          },
          "morphology": {
                "en": {
                      "cap": "3–8 cm, warm reddish-orange to terracotta-tan, thinner and more regular than H. repandum",
                      "underCap": "Dense hanging soft spines (piikit), salmon-cream, brushing off easily; NOT decurrent down stem",
                      "stem": "Central, slender, pale orange-buff",
                      "odor": "Delicate fruity-nutty fragrance"
                },
                "zh": {
                      "cap": "3–8厘米，温暖的红橙色至红砖褐色，体型比卷缘齿菌更小且菌盖较薄平展",
                      "underCap": "密布脆弱柔软的垂悬细菌刺，浅橙肉色，用指尖一拂即落；菌刺不明显沿柄下延",
                      "stem": "居中，纤细均匀，淡橙米色",
                      "odor": "淡淡的坚果与清甜果香"
                },
                "fi": {
                      "cap": "3–8 cm, punakellertävä tai oranssinruskea, ohuempi kuin vaaleaorakkaalla",
                      "underCap": "Pehmeät, lohkeilevat piikit, eivät juuri jatku jalkaan",
                      "stem": "Keskellä lakkia, hoikempi, vaalea",
                      "odor": "Mieto, miellyttävä"
                }
          },
          "culinaryTip": {
                "en": "100% bug-free and zero poisonous lookalikes! Firm, crunchy texture; nutty taste without bitterness.",
                "zh": "100%绝不生虫！在芬兰森林中绝无任何长有菌刺的有毒蘑菇。口感极爽脆坚实，带坚果清香。",
                "fi": "Täysin madoton ja 100 % turvallinen ruokasieni. Rapea ja pähkinäinen."
          },
          "lookalikeAlert": {
                "en": "Wood Hedgehog (Hydnum repandum) is much paler (creamy-white), larger, and thicker-fleshed. Both are safe choice edibles.",
                "zh": "卷缘齿菌（白刺儿菜）体型更大，菌体呈淡乳白色且菌刺向下延伸。两者均为顶级安全美味菌。",
                "fi": "Vaaleaorakas on kookkaampi ja puhtaan kermanvalkea. Molemmat erinomaisia."
          },
          "whereWhen": {
                "en": "August through October across mossy coniferous woods in Keskuspuisto, Nuuksio, and Sipoonkorpi.",
                "zh": "8月至10月生于中央公园、Nuuksio及Sipoonkorpi的苔藓针叶林地中，常成群结队生长。",
                "fi": "Elo-lokakuussa havumetsissä koko pääkaupunkiseudulla."
          },
          "searchTactics": {
                "en": "Look for warm terracotta coins peeking through green feathermoss. Always check underside to confirm spines!",
                "zh": "在绿色羽状苔藓毯上搜寻类似红橙色硬币般的小圆盖，翻转菌盖确认底下是柔软密集的菌刺！",
                "fi": "Etsi oranssinruskeita lakkeja sammalikosta. Käännä sieni ja tarkista piikit!"
          },
          "lookalikes": {
                "en": "There are ZERO poisonous mushrooms in Finland with spines underneath the cap.",
                "zh": "芬兰真菌志中记载的全部菌刺类真菌绝无致命剧毒种！初学者极其安全。",
                "fi": "Suomessa ei kasva yhtään myrkyllistä orakasta."
          },
          "cookingGuide": {
                "en": "Brush off forest debris. Sauté directly in butter with sea salt and garlic. Retains its wonderful crunch.",
                "zh": "毛刷扫净，无需焯水，直接入热黄油中与蒜蓉爆炒，口感极其鲜脆弹牙。",
                "fi": "Puhdista harjalla ja paista voissa valkosipulin kanssa."
          },
          "image": "./images/hydnum_rufescens.jpg",
          "gallery": [
          {
                "file": "./images/hydnum_rufescens.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Kari Pihlaviita, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/hydnum_rufescens_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Юлия Гришанова, all rights reserved"
          },
          {
                "file": "./images/hydnum_rufescens_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Dace, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "albatrellus_confluens",
          "chapters": ["06","08"],
          "latinName": "Albatrellus confluens",
          "family": "polyporaceae",
          "rating": "*",
          "edibility": "edible",
          "level": "intermediate",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Northern Fleshy Polypore",
                      "local": "Typäskääpä",
                      "alt": "Albatrellus confluens"
                },
                "zh": {
                      "primary": "融合地花菌",
                      "local": "聚合多孔菌 / 肉质地花菌",
                      "alt": "Albatrellus confluens"
                },
                "fi": {
                      "primary": "Typäskääpä",
                      "local": "Typäskääpä",
                      "alt": "Albatrellus confluens"
                }
          },
          "habitatName": {
                "en": "Old-growth spruce heaths, mossy spruce-pine slopes",
                "zh": "老龄成熟云杉林、长满深厚苔藓的云杉-松树林坡",
                "fi": "Vanhat kuusikot, paksusammaliset havumetsät"
          },
          "morphology": {
                "en": {
                      "cap": "5–20 cm, warm apricot-orange to terracotta-buff, overlapping clustered caps grown together",
                      "underCap": "Tiny white pores, not bruising yellow when cooked (unlike A. ovinus)",
                      "stem": "Irregular, thick, fused together into a common base",
                      "odor": "Mild, faintly bitter when old"
                },
                "zh": {
                      "cap": "5–20厘米，温润的杏黄橙色至肉褐橙色，多个菌盖常紧密挤压叠生、融合在一起",
                      "underCap": "极其微小的白色细孔层；下锅受热油煎时不会变黄绿色（与绵羊地花菌鉴别点）",
                      "stem": "形态不规则粗壮，数个菌柄常在基部合并相连",
                      "odor": "清淡，老熟个体微带一丝苦气"
                },
                "fi": {
                      "cap": "5–20 cm, kellertävän oranssi tai nahanruskea, usein useita lakkeja yhteenkasvaneina",
                      "underCap": "Hyvin pienet valkoiset pillit; ei muutu pannulla keltaiseksi toisin kuin lampaankääpä",
                      "stem": "Epäsäännöllinen, usein tyvestä yhteen kasvanut",
                      "odor": "Mieto, vanhana hieman karvas"
                }
          },
          "culinaryTip": {
                "en": "Harvest only young caps. Older specimens can be slightly bitter. Excellent pickled or parboiled in mixed bakes.",
                "zh": "建议仅采摘幼嫩菌盖。老菌肉可能略带微苦。适合焯水后做酸甜腌渍，或切薄片烤制混搭菜肴。",
                "fi": "Käytä vain nuoria yksilöitä. Sopii säilöttäväksi ja sekasieniin."
          },
          "lookalikeAlert": {
                "en": "Sheep Polypore (Albatrellus ovinus) has creamy-white caps and turns distinctly yellow-green when cooked.",
                "zh": "绵羊地花菌（Lampaankääpä）菌盖整体更白，且在黄油锅中受热后会神奇地转变为明亮黄绿色。",
                "fi": "Lampaankääpä on vaaleampi ja muuttuu paistettaessa kellanvihreäksi."
          },
          "whereWhen": {
                "en": "August to October in mature mossy coniferous heaths in Nuuksio, Luukki, and Sipoonkorpi.",
                "zh": "8月至10月在Nuuksio、Luukki及Sipoonkorpi的成熟老龄针叶林中密集簇生。",
                "fi": "Elo-lokakuussa vanhoissa havumetsissä."
          },
          "searchTactics": {
                "en": "Look for large clustered aprons of fused terracotta caps pushing up thick spruce moss.",
                "zh": "在厚厚的云杉苔藓层中寻找成簇合并生长、宛如大块橙黄围裙般的丛生地花菌。",
                "fi": "Etsi suuria yhteenkasvaneita lakkeja kuusikoista."
          },
          "lookalikes": {
                "en": "Albatrellus ovinus is premier choice; both are non-toxic.",
                "zh": "绵羊地花菌同属无毒，二者皆为安全可食的地面多孔菌。",
                "fi": "Lampaankääpä on parempi ruokasieni; molemmat myrkyttömiä."
          },
          "cookingGuide": {
                "en": "Parboil for 3 minutes to remove any hint of bitterness, then pickle in spiced vinegar or fry crisp.",
                "zh": "沸水焯水3分钟可完全去除老菌的一丝微苦，随后捞出沥干做醋渍或配黑胡椒香煎。",
                "fi": "Kiehautus poistaa mahdollisen karvauden. Säilö etikkaan tai paista."
          },
          "image": "./images/albatrellus_confluens.jpg",
          "gallery": [
          {
                "file": "./images/albatrellus_confluens.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) david-t, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/albatrellus_confluens_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Alex O, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/albatrellus_confluens_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Emma Richter, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "laetiporus_sulphureus",
          "chapters": ["06","08"],
          "latinName": "Laetiporus sulphureus",
          "family": "polyporaceae",
          "rating": "**",
          "edibility": "good",
          "level": "intermediate",
          "months": [
                6,
                7,
                8,
                9
          ],
          "names": {
                "en": {
                      "primary": "Chicken of the Woods",
                      "local": "Rikkikääpä",
                      "alt": "Laetiporus sulphureus"
                },
                "zh": {
                      "primary": "硫色绚孔菌",
                      "local": "森林之鸡 / 硫黄多孔菌",
                      "alt": "Laetiporus sulphureus"
                },
                "fi": {
                      "primary": "Rikkikääpä",
                      "local": "Rikkikääpä",
                      "alt": "Laetiporus sulphureus"
                }
          },
          "habitatName": {
                "en": "Trunks of living or dead deciduous trees, especially ancient English oaks (Quercus robur)",
                "zh": "阔叶老树树干（特别是古老夏栎/橡树 Quercus robur）及柳树干上",
                "fi": "Tammien ja jalopuiden rungot lehdoissa ja puistoissa"
          },
          "morphology": {
                "en": {
                      "cap": "10–40 cm wide brackets, vibrant sulphur-yellow to electric coral-orange, soft and velvety when young",
                      "underCap": "Vivid sulphur-yellow tiny pore layer",
                      "stem": "Essentially stemless; attached directly to tree trunk in large overlapping shelves",
                      "odor": "Pleasant, meaty, mushroomy"
                },
                "zh": {
                      "cap": "10–40厘米，覆瓦状重叠巨型菌阶，呈醒目极艳丽的硫黄色至亮珊瑚橙色，幼时肉质厚软多汁",
                      "underCap": "纯正鲜亮的硫磺黄色微孔层",
                      "stem": "几无菌柄，直接成片侧生锚定在橡树树干上",
                      "odor": "浓郁肉香与新鲜蘑菇气味"
                },
                "fi": {
                      "cap": "10–40 cm, loistavan rikin- tai oranssinkeltainen, nuorena pehmeä ja mehukas",
                      "underCap": "Rikinkeltaiset pienet pillit",
                      "stem": "Jalaton, kasvaa suoraan puun rungosta hyllymäisinä ryhminä",
                      "odor": "Miellyttävä, lihamainen"
                }
          },
          "culinaryTip": {
                "en": "Harvest ONLY the tender outer 2–3 cm margin of young fleshy brackets. Old parts are tough and chalky. Cook thoroughly.",
                "zh": "务必仅采割幼嫩多汁菌体最外缘2-3厘米的娇嫩肉边！内部老肉干柴如粉笔。烹调口感神似鲜嫩鸡胸肉！",
                "fi": "Kerää vain nuorten kääpien pehmeät ulkoreunat (2–3 cm). Kypsennä aina perusteellisesti."
          },
          "lookalikeAlert": {
                "en": "Unmistakable neon-yellow/orange shelves growing on oaks; no dangerous lookalike in Finland.",
                "zh": "醒目的高明度霓虹黄橙色树干菌阶，在芬兰森林中绝无剧毒类似种。",
                "fi": "Loistavan keltainen väri tammen rungolla tekee lajista erehtymättömän."
          },
          "whereWhen": {
                "en": "June to September on ancient oak trees in coastal Uusimaa parks and protected deciduous groves (e.g. Tammisaari, Ruissalo, Kaivopuisto).",
                "zh": "6月至9月生于芬兰南部沿海古老橡树树干上（如赫尔辛基古公园、Tammisaari古树带）。",
                "fi": "Kesä-syyskuussa tammien rungoilla Etelä-Suomessa."
          },
          "searchTactics": {
                "en": "Look 1–3 meters above ground level on the trunks of massive old oak trees.",
                "zh": "在巨大古老橡树的主干上距离地面1-3米处平视搜寻，鲜艳金黄色极其夺目。",
                "fi": "Tarkkaile vanhojen tammien runkoja silmänkorkeudelta."
          },
          "lookalikes": {
                "en": "Other tree brackets are hard, woody, and inedible. None have this bright lemon-sulphur flesh.",
                "zh": "其他寄生在树干上的多孔菌质地坚硬木质化，无此鲜嫩硫黄色肉质。",
                "fi": "Muut käävät ovat kovia ja puumaisia."
          },
          "cookingGuide": {
                "en": "Slice tender margins into strips, bread with panko, and deep-fry like chicken nuggets, or stir-fry with ginger and soy sauce.",
                "zh": "将嫩边切成长条，裹面粉鸡蛋与面包糠炸成香酥“素鸡米花”，或加姜丝大葱热镬快炒，口感滑嫩宛如滑鸡球。",
                "fi": "Leikkaa suikaleiksi, leivitä ja paista kuin kananugetit. Erinomainen kanan korvike."
          },
          "image": "./images/laetiporus_sulphureus.jpg",
          "gallery": [
          {
                "file": "./images/laetiporus_sulphureus.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Артём Свиридов, all rights reserved, uploaded by Артём Свиридов"
          },
          {
                "file": "./images/laetiporus_sulphureus_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) plainjane74, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/laetiporus_sulphureus_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Sheelagh Halsey, some rights reserved (CC BY)"
          }
]
    },
{
          "id": "lactarius_deterrimus",
          "chapters": ["02","06","08"],
          "latinName": "Lactarius deterrimus",
          "family": "lactarius_mild",
          "rating": "**",
          "edibility": "good",
          "level": "beginner",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Spruce Milkcap",
                      "local": "Kuusenleppärousku",
                      "alt": "Lactarius deterrimus"
                },
                "zh": {
                      "primary": "劣味乳菇",
                      "local": "云杉红菇 / 云杉松乳菇",
                      "alt": "Lactarius deterrimus"
                },
                "fi": {
                      "primary": "Kuusenleppärousku",
                      "local": "Kuusenleppärousku",
                      "alt": "Lactarius deterrimus"
                }
          },
          "habitatName": {
                "en": "Norway spruce heaths, young spruce plantations & grassy spruce edges",
                "zh": "挪威云杉林、幼龄云杉种植地及长草的云杉林缘",
                "fi": "Kuusikot, kuusentaimikot ja sammaleiset kuusirinteet"
          },
          "morphology": {
                "en": {
                      "cap": "4–12 cm, carrot-orange with green concentric stains, funnel-shaped when mature",
                      "underCap": "Gills orange, crowded, bruising slowly deep emerald-green",
                      "stem": "Hollow, cylindrical, orange, often with dark green spots; lacks deep pit depressions",
                      "odor": "Fruity and pleasant"
                },
                "zh": {
                      "cap": "4–12厘米，鲜艳胡萝卜橙色，伴有同心环纹，受伤后泛浓绿绣斑，成熟后呈漏斗状",
                      "underCap": "菌褶橙色，细密延生，划破后流出胡萝卜橙色乳汁，触碰处转墨绿色",
                      "stem": "空心，橙色，常带暗绿晕斑，但表面无松乳菇那样深陷的麻坑凹陷",
                      "odor": "清新果香"
                },
                "fi": {
                      "cap": "4–12 cm, oranssi, vihertyvä, lakin reuna pitkään sisäänkiertynyt",
                      "underCap": "Heltat oranssit, vihertyvät kosketuksesta; oranssi maitiaisneste",
                      "stem": "Ontto, oranssi, ilman kuoppatäpliä",
                      "odor": "Miellyttävä, raikas"
                }
          },
          "culinaryTip": {
                "en": "Sweet orange milk; DOES NOT REQUIRE PARBOILING. Pan-fry directly in butter. Turn emerald-green during handling—this is 100% safe.",
                "zh": "乳汁甜美甘润，绝对无需焯水！直接入黄油香煎。切口或采摘触碰后转墨绿色属于其天然酚类氧化反应，完全无害安全。",
                "fi": "Mieto oranssi maitiaisneste; EI VAADI RYÖPPÄYSTÄ. Paista suoraan pannulla voissa."
          },
          "lookalikeAlert": {
                "en": "Saffron Milkcap (L. deliciosus) grows strictly with pine, has pit-spotted stem and milder richer taste.",
                "zh": "真松乳菇（L. deliciosus）严格与赤松共生，菌柄具有凹陷斑坑，风味更浓纯；两者皆为免焯水的上品乳菇。",
                "fi": "Männynleppärousku kasvaa männyn alla ja sen jalassa on selkeitä kuoppatäpliä."
          },
          "whereWhen": {
                "en": "August through October wherever Norway spruce grows abundantly across Helsinki Keskuspuisto and Sipoonkorpi.",
                "zh": "8月至10月在赫尔辛基中央公园、西波国家公园等地的云杉林区极为常见。",
                "fi": "Elo-lokakuussa hyvin yleinen kuusimetsissä pääkaupunkiseudulla."
          },
          "searchTactics": {
                "en": "Search beneath young spruces on mossy ditch borders. Look for bright orange caps with emerald-green blotches.",
                "zh": "在小云杉树下的苔藓水沟边搜寻，橙绿斑驳的菌盖极其醒目。",
                "fi": "Etsi nuorten kuusten alta ja sammaleisilta ojilta."
          },
          "lookalikes": {
                "en": "Lactarius deliciosus is equally good. Sharp acrid milkcaps exude white milk, not orange.",
                "zh": "有辛辣苦涩毒性的乳菇流出的皆为白色乳汁，绝非鲜亮橙红色！",
                "fi": "Polttavat ja ryöpättävät rouskut erittävät valkoista maitiaisnestettä."
          },
          "cookingGuide": {
                "en": "Fry whole caps in butter with salt and crushed black pepper. Superb on sourdough toast.",
                "zh": "整朵菌盖不切，入黄油锅小火慢煎至两面焦黄，撒粗海盐与黑胡椒碎，配酸面包堪称极品北欧秋味。",
                "fi": "Paista kokonaiset lakit voissa rapeiksi pannulla. Nauti leivän päällä."
          },
          "image": "./images/lactarius_deterrimus.jpg",
          "gallery": [
          {
                "file": "./images/lactarius_deterrimus.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) John Plischke, some rights reserved (CC BY-NC), uploaded by John Plischke"
          },
          {
                "file": "./images/lactarius_deterrimus_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Florian Adelsberger, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/lactarius_deterrimus_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Vincent Fatton, all rights reserved"
          }
]
    },
{
          "id": "lactarius_volemus",
          "chapters": ["06","08"],
          "latinName": "Lactarius volemus",
          "family": "lactarius_mild",
          "rating": "***",
          "edibility": "choice",
          "level": "intermediate",
          "months": [
                7,
                8,
                9
          ],
          "names": {
                "en": {
                      "primary": "Weeping Milkcap",
                      "local": "Kultarousku",
                      "alt": "Lactifluus volemus"
                },
                "zh": {
                      "primary": "橙黄乳菇",
                      "local": "多汁乳菇 / 金黄乳菇",
                      "alt": "Lactifluus volemus"
                },
                "fi": {
                      "primary": "Kultarousku",
                      "local": "Kultarousku",
                      "alt": "Lactarius volemus"
                }
          },
          "habitatName": {
                "en": "Warm deciduous groves, hazel thickets & oak woodlands in Southern Finland",
                "zh": "芬兰南部温暖向阳的阔叶林、欧榛丛及夏栎树下",
                "fi": "Lämpimät lehdot, pähkinälehdot ja tammimetsät"
          },
          "morphology": {
                "en": {
                      "cap": "6–15 cm, velvety tawny orange to golden apricot, dry, cracking with age",
                      "underCap": "Cream-ochre gills, exuding copious sticky white milk that stains brown",
                      "stem": "Solid, dense, velvety, matching cap color",
                      "odor": "Unmistakable intense aroma of cooked shellfish, crab or herring"
                },
                "zh": {
                      "cap": "6–15厘米，深金黄橙至鹿皮杏黄色，表面干燥呈丝绒感，老后略龟裂",
                      "underCap": "浅黄米色菌褶，稍经触碰即汹涌流出大量白色黏稠乳汁，乳汁干燥后变为棕褐色",
                      "stem": "坚实粗硬如实木，与菌盖同色",
                      "odor": "极其独特的熟煮海蟹、熟龙虾或清蒸海鱼般的浓郁海鲜鲜甜芳香"
                },
                "fi": {
                      "cap": "6–15 cm, samettipintainen, kullanruskea tai oranssinruskea",
                      "underCap": "Heltat vaaleankellertävät; vuotaa runsaasti valkoista tahmeaa maitiaisnestettä",
                      "stem": "Tukeva, kova, samettinen, lakin värinen",
                      "odor": "Omaleimainen, keitettyä rapua tai silliä muistuttava voimakas tuoksu"
                }
          },
          "culinaryTip": {
                "en": "Rare and prized! NEVER PARBOIL. The shellfish aroma mellows upon pan-searing into a sublime gourmet treat.",
                "zh": "芬兰难得一见的宝藏野菌！绝对严禁焯水！其海鲜甲壳芳香在黄油煎炸后转化为极致鲜甜的脆嫩享受。",
                "fi": "Arvostettu herkku! EI SAA RYÖPÄTÄ. Rapumainen tuoksu muuttuu paistettaessa upeaksi aromiksi."
          },
          "lookalikeAlert": {
                "en": "Copious mild white milk and seafood aroma make this completely unmistakable.",
                "zh": "涌流如注且毫无辛辣苦涩的甜白乳汁、加上独特的清蒸熟蟹香气，使其极具辨识度，绝无误食风险。",
                "fi": "Juokseva valkoinen mieto maito ja äyriäismäinen tuoksu estävät sekaannukset."
          },
          "whereWhen": {
                "en": "Mid-summer to early autumn in southern coastal microclimates of Uusimaa.",
                "zh": "盛夏7月至9月上旬，在乌西玛大区南部沿海微气候温暖的阔叶栎林斜坡出菇。",
                "fi": "Heinä-syyskuussa Uudenmaan eteläisissä lehtometsissä."
          },
          "searchTactics": {
                "en": "Search mossy banks under hazels and oaks. Gently nick a gill: white milk should instantly drip like tears.",
                "zh": "在欧榛与橡树根下的苔藓坡寻找。指甲轻轻划破菌褶，立刻如泪滴般汹涌渗出乳汁即为真品。",
                "fi": "Etsi pähkinäpensaiden alta. Viillosta pursuava runsas maito varmistaa lajin."
          },
          "lookalikes": {
                "en": "Acrid red milkcaps (L. rufus) have sharp pointed umbo, peppery burning taste, and grow in pine heaths.",
                "zh": "松林红乳菇（Kangasrousku）生于松树林，菌盖中央有锐尖突起且乳汁极辛辣。",
                "fi": "Kangasrousku kasvaa kankailla, on polttavan karvas ja lakin keskellä on terävä nypy."
          },
          "cookingGuide": {
                "en": "Slice thick, fry slowly in butter until golden. Pair with poached fish or seafood chowder.",
                "zh": "厚切下锅，以优质黄油中小火煎透至表面焦脆，搭配煎鱼或白葡萄酒海鲜浓汤绝妙。",
                "fi": "Viipaloi ja paista voissa kullankeltaiseksi. Sopii kalaruokien seuraan."
          },
          "image": "./images/lactarius_volemus.jpg",
          "gallery": [
          {
                "file": "./images/lactarius_volemus.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Trent Roberts, all rights reserved, uploaded by Trent Roberts"
          },
          {
                "file": "./images/lactarius_volemus_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Katia Burelle, all rights reserved"
          },
          {
                "file": "./images/lactarius_volemus_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Ryoko Fukuyama, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "lactarius_trivialis",
          "chapters": ["03","06","07","08"],
          "latinName": "Lactarius trivialis",
          "family": "lactarius_parboil",
          "rating": "!*",
          "edibility": "parboil",
          "level": "advanced",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Northern Milkcap",
                      "local": "Haaparousku",
                      "alt": "Lactarius trivialis"
                },
                "zh": {
                      "primary": "灰紫乳菇",
                      "local": "北欧白杨乳菇 / 圣诞沙拉菇",
                      "alt": "Lactarius trivialis"
                },
                "fi": {
                      "primary": "Haaparousku",
                      "local": "Haaparousku",
                      "alt": "Lactarius trivialis"
                }
          },
          "habitatName": {
                "en": "Moist spruce-birch heaths, mossy depressions & aspen margins",
                "zh": "潮湿云杉-白桦混交林、深厚苔藓低洼处及白杨林缘",
                "fi": "Kosteat kuusikot, korpimetsät ja haavikot"
          },
          "morphology": {
                "en": {
                      "cap": "7–20 cm, slimy, lead-grey to violet-purple when young, fading to pale buff-tan",
                      "underCap": "Cream-white gills, exuding white fiery-acrid milk that slowly dries grey-green",
                      "stem": "Stout, hollow, slimy when wet, pale cream-grey",
                      "odor": "Faintly fruity, latex is intensely burning peppery"
                },
                "zh": {
                      "cap": "7–20厘米，肥厚巨大，幼时呈铅灰至带紫丁香紫色，湿润时极黏滑，老后褪为浅灰褐色",
                      "underCap": "乳白色菌褶，分泌极其辛辣刺舌的白色乳汁，乳汁干燥后在菌褶上缓慢氧化成灰绿色斑",
                      "stem": "粗壮中空，表面微黏，浅灰白相间",
                      "odor": "微带果香，乳汁火辣灼舌"
                },
                "fi": {
                      "cap": "7–20 cm, nuorena violetinharmaa tai lyijynharmaa, hyvin limainen, vanhana vaaleneva",
                      "underCap": "Heltat vaaleat; polttavan kirpeä valkoinen maito muuttuu harmaanvihreäksi kuivuessaan",
                      "stem": "Paksu, ontto, limainen, vaalea",
                      "odor": "Mieto, mutta maito on polttavan kirpeää"
                }
          },
          "culinaryTip": {
                "en": "THE #1 TRADITIONAL FINNISH MUSHROOM FOR SALTING. MUST BE PARBOILED FOR 10 MINUTES in ample boiling water, then rinsed thoroughly.",
                "zh": "芬兰传统圣诞蘑菇色拉（Sienisalaatti）当之无愧的头牌核心菌！必须放入大量沸水中持续焯水滚煮10分钟，捞出冷水冲凉脱毒去辣后盐渍。",
                "fi": "Suomen suosituin suolasieni perinteiseen sienisalaattiin. VAATII 10 MINUUTIN RYÖPPÄYKSEN runsaassa vedessä."
          },
          "lookalikeAlert": {
                "en": "Pale Northern Milkcap (L. utilis) is equally good after 10 min boiling; Woolly milkcap (L. torminosus) has pink shaggy hairs.",
                "zh": "浅色白杨乳菇（L. utilis）色泽偏浅黄米色，焯水10分钟后同样绝佳；白桦毛乳菇边缘带浓密粉红羊毛圈。",
                "fi": "Kalvashaaparousku on vaaleampi mutta yhtä hyvä suolasieni 10 min ryöppäyksen jälkeen."
          },
          "whereWhen": {
                "en": "Massive flushes from mid-August through October across all damp spruce forests in Greater Helsinki.",
                "zh": "8月中旬至10月在赫尔辛基所有阴湿成熟的云杉苔藓林中迎来暴风雨般的爆发采摘潮。",
                "fi": "Elo-lokakuussa valtavan runsassatoinen kosteissa kuusikoissa koko Uudellamaalla."
          },
          "searchTactics": {
                "en": "Look in moist feather moss depressions along northern slopes in spruce woods. Often produces giant specimens.",
                "zh": "在云杉老林背阴北坡、极湿润深厚的绿苔藓凹坑搜寻，常能发现脸盆般巨大的灰紫色肥实菌盖。",
                "fi": "Etsi paksusammalisista notkoista kuusikoiden pohjoisrinteiltä."
          },
          "lookalikes": {
                "en": "Ugly Milkcap (L. necator) is dark blackish-olive; both require parboiling.",
                "zh": "墨黑乳菇（L. necator）通体墨黑微泛橄榄色，同需焯水处理。",
                "fi": "Mustarousku on tumman oliivinmusta ja vaatii 15 min keittämisen."
          },
          "cookingGuide": {
                "en": "Boil in rolling water for 10 min. Drain and rinse. Layer with sea salt in glass jars (suolasienet). For salad, soak out salt, chop, and fold into sour cream with red onions.",
                "zh": "大锅沸水滚煮10分钟，捞出冷水冲洗沥干。按每公斤蘑菇配100克粗海盐在玻璃坛中压紧层叠盐渍。食用时温水退盐切碎，拌入紫洋葱碎与酸奶油，清爽脆脆。",
                "fi": "Ryöppää 10 min, huuhtele ja suolaa kerroksittain purkkiin. Valmista perinteinen sienisalaatti kermaviilin ja punasipulin kera."
          },
          "image": "./images/lactarius_trivialis.jpg",
          "gallery": [
          {
                "file": "./images/lactarius_trivialis.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) teehoo, some rights reserved (CC BY-NC-SA)"
          },
          {
                "file": "./images/lactarius_trivialis_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Alexander, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/lactarius_trivialis_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Ilari Helvamo, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "lactarius_utilis",
          "chapters": ["06","08"],
          "latinName": "Lactarius utilis",
          "family": "lactarius_parboil",
          "rating": "!*",
          "edibility": "parboil",
          "level": "advanced",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Pale Northern Milkcap",
                      "local": "Kalvashaaparousku",
                      "alt": "Lactarius utilis"
                },
                "zh": {
                      "primary": "浅色白杨乳菇",
                      "local": "光盖白杨乳菇 / 米黄乳菇",
                      "alt": "Lactarius utilis"
                },
                "fi": {
                      "primary": "Kalvashaaparousku",
                      "local": "Kalvashaaparousku",
                      "alt": "Lactarius utilis"
                }
          },
          "habitatName": {
                "en": "Birch forests, mixed spruce-birch heaths & grassy woodland margins",
                "zh": "白桦林、云杉-白桦混交苔藓地及长草森林边缘",
                "fi": "Koivikot, sekametsät ja laidunmetsät"
          },
          "morphology": {
                "en": {
                      "cap": "8–18 cm, slimy when wet, pale cream to yellowish-buff, smooth, lacking purple tones",
                      "underCap": "Cream-white gills with burning acrid white milk",
                      "stem": "Stout, hollow, pale yellowish-white",
                      "odor": "Faintly fruity, very sharp latex"
                },
                "zh": {
                      "cap": "8–18厘米，湿润时极滑腻，呈纯净的浅乳白至淡沙黄米色，平滑无灰紫色调",
                      "underCap": "乳白色细密菌褶，渗出刺痛舌苔的辛辣白乳汁",
                      "stem": "粗大中空，淡黄色至象牙白",
                      "odor": "微带果香，汁液极辛辣"
                },
                "fi": {
                      "cap": "8–18 cm, limainen, tasaisen kellertävänvalkoinen tai kermanvaalea, ei violetinsävyjä",
                      "underCap": "Heltat vaaleat; polttavan kirpeä valkoinen maito",
                      "stem": "Tukeva, ontto, vaalea",
                      "odor": "Mieto, maito polttavaa"
                }
          },
          "culinaryTip": {
                "en": "PARBOIL FOR 10 MINUTES before use. Once parboiled, it possesses the same crisp, fleshy texture as L. trivialis.",
                "zh": "必须在大量沸水中焯水滚煮10分钟后食用。焯透后肉质与灰紫乳菇一样爽脆丰满，为芬兰顶级传统盐渍原料。",
                "fi": "Ryöppää 10 minuuttia. Maultaan ja laadultaan täysin haaparouskun veroinen suolasieni."
          },
          "lookalikeAlert": {
                "en": "Can only be confused with L. trivialis (darker purple-grey) or edible mild species. Completely safe after proper boiling.",
                "zh": "仅可能与灰紫乳菇混淆，规范水煮脱毒后两者皆为安全美味无匹的盐渍佳品。",
                "fi": "Erottuu haaparouskusta vaaleamman kellertävän värinsä ansiosta."
          },
          "whereWhen": {
                "en": "Late August through October under birch and mixed conifers across Uusimaa.",
                "zh": "8月下旬至10月生于白桦及混交针叶林下，在乌西玛大区产量极高。",
                "fi": "Elo-lokakuussa yleinen koivua kasvavissa metsissä."
          },
          "searchTactics": {
                "en": "Scan the edges of sunny birch groves where light illuminates the glossy pale caps in green moss.",
                "zh": "在向阳桦树林缘观察，光线照耀下其浅色泛光的滑腻菌盖在绿苔中十分显眼。",
                "fi": "Etsi valoisista koivikoista ja polkujen laiteilta."
          },
          "lookalikes": {
                "en": "L. trivialis is darker violet-grey; both are prepared identically.",
                "zh": "灰紫乳菇色泽更深泛紫灰，两者烹饪处理方法完全一致。",
                "fi": "Haaparousku on tummempi; molemmat valmistetaan samoin."
          },
          "cookingGuide": {
                "en": "Parboil in boiling water 10 min, drain, cool in icy water. Salt in jars with 10% coarse sea salt and allspice berries.",
                "zh": "沸水焯水10分钟捞出，冷水浸凉沥干。按10%海盐比例层叠入坛盐渍，撒数粒多香果提香。",
                "fi": "Ryöppää 10 min, jäähdytä ja suolaa perinteisesti maustepippurin kera."
          },
          "image": "./images/lactarius_utilis.jpg",
          "gallery": [
          {
                "file": "./images/lactarius_utilis.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) teehoo, some rights reserved (CC BY-NC-SA)"
          },
          {
                "file": "./images/lactarius_utilis_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) antlehto, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/lactarius_utilis_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Светлана Нестерова, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "lactarius_necator",
          "chapters": ["06","08"],
          "latinName": "Lactarius necator",
          "family": "lactarius_parboil",
          "rating": "!*",
          "edibility": "parboil",
          "level": "advanced",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Ugly Milkcap",
                      "local": "Mustarousku",
                      "alt": "Lactarius turpis"
                },
                "zh": {
                      "primary": "丑乳菇",
                      "local": "墨黑乳菇 / 芬兰黑排毒菇",
                      "alt": "Lactarius necator"
                },
                "fi": {
                      "primary": "Mustarousku",
                      "local": "Mustarousku",
                      "alt": "Lactarius necator"
                }
          },
          "habitatName": {
                "en": "Moist spruce-birch heaths, mossy trails & shaded ditch edges",
                "zh": "潮湿云杉-白桦林、长满苔藓的小路及遮阴沟渠边",
                "fi": "Kosteat kuusikot, sekametsät ja polunvarret"
          },
          "morphology": {
                "en": {
                      "cap": "6–18 cm, dark blackish-olive to muddy brown, slimy, margin inrolled with shaggy olive-brown wool",
                      "underCap": "Cream-yellow gills, staining brownish-black when bruised; copious white acrid milk",
                      "stem": "Stout, slimy, dark olive-brown with sunken pits",
                      "odor": "Pungent earthy aroma, hot burning latex"
                },
                "zh": {
                      "cap": "6–18厘米，深沉的墨黑橄榄色至泥褐色，极黏滑，菌盖边缘深内卷且覆有粗糙橄榄褐色丛毛",
                      "underCap": "乳黄白色菌褶，揉搓后迅速泛黑褐色，分泌大量辛辣白乳汁",
                      "stem": "粗实，湿时黏，暗橄榄棕色，表面常有凹陷暗斑",
                      "odor": "强烈的森林腐殖土气息，乳汁辛辣灼热"
                },
                "fi": {
                      "cap": "6–18 cm, tumman oliivinvihreä tai mustanruskea, limainen, reuna pitkään sisäänkiertynyt ja karvainen",
                      "underCap": "Vaaleankellertävät heltat, tummuvat kosketuksesta; valkoinen polttava maitiaisneste",
                      "stem": "Tukeva, limainen, tumman oliivinruskea",
                      "odor": "Voimakas maamainen tuoksu, maito polttavan kirpeää"
                }
          },
          "culinaryTip": {
                "en": "MUST BE PARBOILED FOR 15 MINUTES to neutralize acrid resin and necatorin compound, then rinsed thoroughly in fresh cold water.",
                "zh": "芬兰传统美食！因含坏死性树脂酸，必须放入大量沸水中开盖持续滚煮至少15分钟，并彻底冷水冲洗去毒。",
                "fi": "VAATII VÄHINTÄÄN 15 MINUUTIN RYÖPPÄYKSEN runsaassa vedessä ja huolellisen huuhtelun."
          },
          "lookalikeAlert": {
                "en": "Dark olive-black woolly cap and white burning milk make it unmistakable in Finnish woods.",
                "zh": "其黑绿如墨的菌盖质感与遇伤变黑的菌褶极易认出，在芬兰森林中辨识度极高。",
                "fi": "Tumma oliivinvihreä väri ja karvareunainen lakki ovat selkeitä tuntomerkkejä."
          },
          "whereWhen": {
                "en": "Late August through October. Very common in moist mixed woods throughout Helsinki and Espoo.",
                "zh": "8月下旬至10月在赫尔辛基中央公园、埃斯波阴湿混合林中极其多见。",
                "fi": "Elo-lokakuussa hyvin yleinen Uudenmaan sekametsissä."
          },
          "searchTactics": {
                "en": "Scan muddy footpath margins and damp depressions where fallen birch leaves gather.",
                "zh": "在泥泞林间小径旁及落满桦树叶的阴湿低洼地搜寻暗黑如泥饼的厚菌盖。",
                "fi": "Etsi polkujen varsilta kosteista painanteista."
          },
          "lookalikes": {
                "en": "Northern Milkcap (L. trivialis) is violet-grey without the shaggy dark olive woolly rim.",
                "zh": "灰紫乳菇呈紫灰色且边缘无粗糙黑绿毛须。",
                "fi": "Haaparousku on lilanharmaa ja sileäreunainen."
          },
          "cookingGuide": {
                "en": "Parboil 15 min, rinse, then cure with salt in crock pots. Meatiest and crunchiest of all salted mushrooms.",
                "zh": "大滚水焯煮15分钟，冰水反复漂洗沥干，加盐腌渍。其盐渍后的肉质是所有乳菇中最富韧劲脆爽的！",
                "fi": "Keitä 15 min, huuhtele ja suolaa. Malto on erittäin kiinteää ja rapeaa."
          },
          "image": "./images/lactarius_necator.jpg",
          "gallery": [
          {
                "file": "./images/lactarius_necator.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Christian Schwarz, some rights reserved (CC BY-NC), uploaded by Christian Schwarz"
          },
          {
                "file": "./images/lactarius_necator_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Анна Иванова, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/lactarius_necator_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Игорь, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "lactarius_mammosus",
          "chapters": ["06","08"],
          "latinName": "Lactarius mammosus",
          "family": "lactarius_parboil",
          "rating": "**",
          "edibility": "good",
          "level": "intermediate",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Fenugreek Milkcap",
                      "local": "Kangaspalsamirousku",
                      "alt": "Lactarius mammosus"
                },
                "zh": {
                      "primary": "香乳菇",
                      "local": "葫芦巴香乳菇 / 椰香乳菇",
                      "alt": "Lactarius mammosus"
                },
                "fi": {
                      "primary": "Kangaspalsamirousku",
                      "local": "Palsamirousku",
                      "alt": "Lactarius mammosus"
                }
          },
          "habitatName": {
                "en": "Dry sandy Scots pine heaths & lichen terraces",
                "zh": "干燥沙质欧洲赤松林地与地衣花岗岩台地",
                "fi": "Kuivat kangasmetsät, jäkäläkankaat ja kalliomänniköt"
          },
          "morphology": {
                "en": {
                      "cap": "3–8 cm, dry velvety grey-brown to charcoal-ochre with a sharp central nipple (nypy)",
                      "underCap": "Cream to pinkish-ochre gills; white latex drying slowly with faint coconut aroma",
                      "stem": "Slender, grey-brown",
                      "odor": "Distinct sweet scent of dried coconut, fenugreek, or curry powder when dried"
                },
                "zh": {
                      "cap": "3–8厘米，干燥呈细毛毡绒状，灰褐至暗木炭赭色，菌盖中心具尖锐凸起的小乳突",
                      "underCap": "乳白至肉粉黄色菌褶，流出白色乳汁，风干时散发迷人的椰香与葫芦巴香",
                      "stem": "纤细坚实，灰褐色",
                      "odor": "极为独特的干燥椰子肉、葫芦巴或淡咖喱香料般的芬芳"
                },
                "fi": {
                      "cap": "3–8 cm, kuiva, harmaanruskea, hienonukkainen, keskellä selvä terävä nypy",
                      "underCap": "Vaaleankellertävät heltat; valkoinen maito",
                      "stem": "Hoikka, harmaanruskea",
                      "odor": "Voimakas kookoksen ja currymausteen tuoksu kuivattaessa"
                }
          },
          "culinaryTip": {
                "en": "Exceptional spice mushroom. Dry and powder to season sauces, stews, and game dishes with its exotic coconut-curry warmth.",
                "zh": "绝佳的天然野生香料菌！极其适合烘干脱水后研磨成香料粉，为炖肉与野味酱汁带来温暖的椰香复合风味。",
                "fi": "Erinomainen maustesieni! Kuivaa ja jauha kastikkeiden mausteeksi."
          },
          "lookalikeAlert": {
                "en": "Rufous Milkcap (L. rufus) has a reddish-terracotta cap, searingly hot milk, and lacks coconut perfume.",
                "zh": "松林红乳菇（Kangasrousku）通体为红陶土色，乳汁极度辛辣灼痛且毫无椰香味。",
                "fi": "Kangasrousku on punaruskea ja sen maito polttavan tulista ilman kookoksen tuoksua."
          },
          "whereWhen": {
                "en": "Late August through October in dry sandy pine forests across Nuuksio and Porkkala.",
                "zh": "8月下旬至10月生于Nuuksio及沿海Porkkala的干燥沙质松林中。",
                "fi": "Elo-lokakuussa kuivilla mäntykankailla."
          },
          "searchTactics": {
                "en": "Search among dry reindeer lichen beneath pines; look for small grey velvety caps with a sharp center point.",
                "zh": "在赤松下干燥的灰白地衣丛中搜寻带有尖顶小突起的小巧灰褐色毛毡盖。",
                "fi": "Etsi jäkäliköistä mäntyjen juurelta."
          },
          "lookalikes": {
                "en": "Lactarius rufus is hot red-brown; L. mammosus is dry grey-brown.",
                "zh": "松林红乳菇呈红褐色；香乳菇呈干燥灰褐色。",
                "fi": "Kangasrousku on punaisempi ja tulisen makuinen."
          },
          "cookingGuide": {
                "en": "Dehydrate whole at 40°C. Crush between fingers into stews as an aromatic spice.",
                "zh": "40度整朵脱水烘干储藏，使用时在手指间碾碎洒入炖菜或咖喱中增香。",
                "fi": "Kuivaa ja käytä mausteena riista- ja liharuokiin."
          },
          "image": "./images/lactarius_mammosus.jpg",
          "gallery": [
          {
                "file": "./images/lactarius_mammosus.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Federico Calledda, some rights reserved (CC BY-NC), uploaded by Federico Calledda"
          },
          {
                "file": "./images/lactarius_mammosus_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Peter Nathaniel Boyer, some rights reserved (CC BY)"
          },
          {
                "file": "./images/lactarius_mammosus_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Peter Nathaniel Boyer, some rights reserved (CC BY)"
          }
]
    },
{
          "id": "russula_paludosa",
          "chapters": ["02","03","06","08"],
          "latinName": "Russula paludosa",
          "family": "russulaceae",
          "rating": "***",
          "edibility": "choice",
          "level": "beginner",
          "months": [
                7,
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Marsh Brittlegill",
                      "local": "Isohapero",
                      "alt": "Russula paludosa"
                },
                "zh": {
                      "primary": "沼泽红菇",
                      "local": "大红菇 / 苹果红菇",
                      "alt": "Russula paludosa"
                },
                "fi": {
                      "primary": "Isohapero",
                      "local": "Isohapero",
                      "alt": "Russula paludosa"
                }
          },
          "habitatName": {
                "en": "Pine bogs, damp bilberry heaths & mossy peat borders",
                "zh": "赤松泥炭沼泽、阴湿欧洲越橘（蓝莓）矮丛及泥炭藓林缘",
                "fi": "Rämeet, korvet, mustikkatyypin kangasmetsät ja suonlaiteet"
          },
          "morphology": {
                "en": {
                      "cap": "8–20 cm, glossy brilliant apple-red to blood-red, center often yellowish-orange; massive thick flesh",
                      "underCap": "Cream-white brittle gills, edge near cap rim often delicately flushed with pink",
                      "stem": "Chunky, solid, snow-white, frequently with an exquisite pastel pink flush",
                      "odor": "Mild, sweet nutty scent; completely mild pleasant taste"
                },
                "zh": {
                      "cap": "8–20厘米，极其硕大肥厚，呈鲜艳亮丽的熟透苹果红至鲜血红色，中央常带淡橙黄光泽",
                      "underCap": "乳白色脆硬菌褶，在靠近菌盖边缘处常染有一抹极其迷人的淡粉红色",
                      "stem": "粗壮坚硬，纯白色菌柄上常常拂过一层淡淡的娇嫩粉红晕彩",
                      "odor": "清香甘甜，生尝完全温和甜脆，毫无任何辛辣！"
                },
                "fi": {
                      "cap": "8–20 cm, kiiltävän veren- tai omenanpunainen, keskeltä usein kellertävä, suuri ja paksumaltoinen",
                      "underCap": "Kermanvalkeat mureat heltat, terä usein hennosti punertava",
                      "stem": "Tukeva, valkoinen, usein kauniin ruusunpunaisen huurteen värjäämä",
                      "odor": "Mieto ja makeahko; maku täysin mieto ja pähkinäinen"
                }
          },
          "culinaryTip": {
                "en": "One of Finland’s absolute best gourmet brittlegills! Crisp, sweet, and nutty. Pan-fry directly in butter without boiling.",
                "zh": "芬兰森林中最顶级美味的红菇之一！肉质清甜脆嫩如坚果，绝对无需焯水，直接入黄油中香煎即可享用无上美味。",
                "fi": "Yksi parhaista ruokasienistämme! Mieto, rapea ja maukas. Paista suoraan voissa ilman ryöppäystä."
          },
          "lookalikeAlert": {
                "en": "The Sickener (Russula emetica) is small, soft, fragile, and has violently burning peppery taste. Always apply the Russula nibble test!",
                "zh": "警惕毒红菇（Russula emetica），后者体型瘦小脆弱，菌柄纯白无粉晕，舌尖轻尝有剧烈如辣椒般的灼痛！谨记红菇舌尖尝试法。",
                "fi": "Myrkyllinen tulihapero (R. emetica) on pehmeä, hento ja polttavan tulisen makuinen."
          },
          "whereWhen": {
                "en": "Abundant from late July through October across damp pine bogs and mossy heaths in Sipoonkorpi and Nuuksio.",
                "zh": "7月下旬至10月在Sipoonkorpi与Nuuksio的湿润松树沼泽和蓝莓灌木地极高产。",
                "fi": "Hyvin satoisa heinä-lokakuussa kosteissa mäntymetsissä."
          },
          "searchTactics": {
                "en": "Scan damp moss and blueberry carpets beneath pines for giant, shining scarlet caps that look like polished red apples.",
                "zh": "在赤松林下湿润的深厚苔藓与蓝莓灌木丛中搜寻宛如遗落红苹果般光彩照人的鲜红巨型菌盖。",
                "fi": "Etsi suuria omenanpunaisia lakkeja mustikanvarvuista."
          },
          "lookalikes": {
                "en": "Russula emetica is intensely hot-peppery on the tongue. If mild, it is safe.",
                "zh": "毒红菇舌尖尝有剧烈辣味；沼泽红菇肉质清甜无辣。",
                "fi": "Tulihaperon maku polttaa välittömästi kielellä."
          },
          "cookingGuide": {
                "en": "Slice thick, pan-sear in butter with chives and a pinch of salt. Excellent added to wild mushroom omelets.",
                "zh": "切半厘米厚片，以黄油中小火煎透至金黄，撒小葱末与海盐，配入蘑菇烘蛋无比鲜美。",
                "fi": "Paista viipaleet voissa kullanruskeiksi. Erinomainen munakkaisiin."
          },
          "image": "./images/russula_paludosa.jpg",
          "gallery": [
          {
                "file": "./images/russula_paludosa.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Marco Floriani, some rights reserved (CC BY-NC), uploaded by Marco Floriani"
          },
          {
                "file": "./images/russula_paludosa_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Sarah Dubois, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/russula_paludosa_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Gustavo Vasquez, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "russula_claroflava",
          "chapters": ["06","08"],
          "latinName": "Russula claroflava",
          "family": "russulaceae",
          "rating": "***",
          "edibility": "choice",
          "level": "beginner",
          "months": [
                7,
                8,
                9
          ],
          "names": {
                "en": {
                      "primary": "Yellow Swamp Brittlegill",
                      "local": "Keltahapero",
                      "alt": "Russula claroflava"
                },
                "zh": {
                      "primary": "鲜黄红菇",
                      "local": "黄红菇 / 沼地黄红菇",
                      "alt": "Russula claroflava"
                },
                "fi": {
                      "primary": "Keltahapero",
                      "local": "Keltahapero",
                      "alt": "Russula claroflava"
                }
          },
          "habitatName": {
                "en": "Damp birch woods, peat bog borders & mossy willow carrs",
                "zh": "湿润白桦林、泥炭沼泽边缘及长满苔藓的柳树灌木湿地",
                "fi": "Kosteat koivikot, soiden reunat ja korpimetsät"
          },
          "morphology": {
                "en": {
                      "cap": "5–12 cm, brilliant chrome-yellow to egg-yolk yellow, smooth and slightly sticky when moist",
                      "underCap": "Pale cream gills, slowly turning ash-grey when bruised or with age",
                      "stem": "Pure white, bruising distinctly lead-grey when handled or cut",
                      "odor": "Delicate fruity-nutty perfume; completely mild sweet taste"
                },
                "zh": {
                      "cap": "5–12厘米，夺目纯正的铬黄色至鲜蛋黄色，湿润时微黏滑",
                      "underCap": "浅乳白色脆菌褶，受损或老熟后会缓慢氧化转为明显的灰褐色至铅灰色",
                      "stem": "纯白色，受擦碰或切开后迅速氧化转为铅灰色",
                      "odor": "清甜芳香的坚果香气，生尝肉质完全温和甘甜"
                },
                "fi": {
                      "cap": "5–12 cm, loistavan kirkkaankeltainen, himmeänkiiltävä",
                      "underCap": "Heltat vaaleankeltaiset, muuttuvat vahingoittuneina ja vanhetessaan tuhkanharmaiksi",
                      "stem": "Valkoinen, harmaantuu voimakkaasti kosketuksesta ja leikattaessa",
                      "odor": "Mieto, hedelmäinen ja miellyttävä"
                }
          },
          "culinaryTip": {
                "en": "Top-tier Finnish brittlegill. Very sweet and firm. Flesh turns grey when cooked—this is natural and safe!",
                "zh": "芬兰公认最顶级可口的红菇之一！甘甜多汁脆爽。受热烹调后菌肉会自然转灰，完全无毒请安心食用。",
                "fi": "Huippuluokan ruokasieni! Erittäin makea ja rapea. Malto harmaantuu kypsennettäessä."
          },
          "lookalikeAlert": {
                "en": "Brilliant yellow cap coupled with ash-greying flesh and birch mycorrhiza makes this virtually foolproof.",
                "zh": "明亮铬黄菌盖加上遇伤变灰的菌肉以及白桦共生习性，使其极易确凿鉴别。",
                "fi": "Kirkas keltainen väri ja malton harmaantuminen tekevät tunnistuksesta helpon."
          },
          "whereWhen": {
                "en": "July through September in wet birch bogs and lakeside mosses across Uusimaa.",
                "zh": "7月至9月在乌西玛大区湿润的白桦沼泽林及湖畔苔藓丛中大量涌现。",
                "fi": "Heinä-syyskuussa kosteissa koivikoissa."
          },
          "searchTactics": {
                "en": "Scan wet Sphagnum moss around Downy Birch (Betula pubescens) trunks for pure yellow sunburst caps.",
                "zh": "在毛白桦树下的泥炭藓湿地巡视宛如一轮轮黄色小太阳般的明艳菌盖。",
                "fi": "Etsi suokoivujen ympäriltä upottavasta sammalikosta."
          },
          "lookalikes": {
                "en": "Other yellow russulas (e.g. Russula ochroleuca) have peppery/bitter taste and do not turn grey.",
                "zh": "黄赭红菇（R. ochroleuca）有辣苦味且肉质不变灰。",
                "fi": "Sinappihapero on polttavan makuinen eikä harmaannu."
          },
          "cookingGuide": {
                "en": "Sauté in butter with fresh dill. Excellent in wild mushroom pies and risottos.",
                "zh": "黄油热锅翻炒撒新鲜莳萝碎，是制作芬兰传统蘑菇咸派与意大利烩饭的极品好料。",
                "fi": "Paista voissa ja mausta tillillä. Loistava piirakoihin."
          },
          "image": "./images/russula_claroflava.jpg",
          "gallery": [
          {
                "file": "./images/russula_claroflava.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Federico Calledda, some rights reserved (CC BY-NC), uploaded by Federico Calledda"
          },
          {
                "file": "./images/russula_claroflava_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) ari1965, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/russula_claroflava_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Ludo Leclerc, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "russula_aeruginea",
          "chapters": ["06","08"],
          "latinName": "Russula aeruginea",
          "family": "russulaceae",
          "rating": "**",
          "edibility": "good",
          "level": "intermediate",
          "months": [
                7,
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Green Birch Brittlegill",
                      "local": "Koivunhapero",
                      "alt": "Russula aeruginea"
                },
                "zh": {
                      "primary": "铜绿红菇",
                      "local": "绿红菇 / 桦树青红菇",
                      "alt": "Russula aeruginea"
                },
                "fi": {
                      "primary": "Koivunhapero",
                      "local": "Koivunhapero",
                      "alt": "Russula aeruginea"
                }
          },
          "habitatName": {
                "en": "Birch forests, park lawns, woodland margins with Silver Birch",
                "zh": "白桦林、城市公园草坪及含有垂枝白桦的森林边缘",
                "fi": "Koivikot, sekametsät, puistot ja pihojen koivujen alustat"
          },
          "morphology": {
                "en": {
                      "cap": "5–10 cm, grass-green to olive-grey with yellowish center, smooth, tacky when wet",
                      "underCap": "Cream to pale ochre brittle gills, often with rusty spots when mature",
                      "stem": "Pure white, cylindrical, firm, brittle as chalk; NO ring, NO volval cup",
                      "odor": "Mild, faintly fruity; taste is mild and nutty (occasional mild peppery gills in young specimens)"
                },
                "zh": {
                      "cap": "5–10厘米，青草绿至淡橄榄灰绿色，中央常泛淡黄，潮湿时微黏",
                      "underCap": "乳白至淡赭黄色脆菌褶，老熟时常带有微小铁锈色斑点",
                      "stem": "纯白色，圆柱形，如粉笔般一掰即脆断；【绝对无菌环，基部绝对无菌托】",
                      "odor": "清香温和，生尝肉质清甜带坚果香"
                },
                "fi": {
                      "cap": "5–10 cm, ruohonvihreä tai harmaanvihreä, keskeltä usein kellertävä",
                      "underCap": "Kermanvalkeat mureat heltat, vanhana usein ruostetäpläiset",
                      "stem": "Puhtaanvalkoinen, murea kuin liitu; EI rengasta, EI tuppea",
                      "odor": "Mieto, hedelmäinen; maku mieto pähkinäinen"
                }
          },
          "culinaryTip": {
                "en": "Delicious nutty edible. Pan-fry in butter. CRITICAL SAFETY: Verify chalk-like brittle flesh, and absolute lack of ring or volva to avoid deadly Amanita!",
                "zh": "清脆可口的优质食用红菇。下锅黄油香煎极香。生死安全红线：必须确认其菌柄如粉笔脆断无菌丝，且绝对无菌环、无杯状菌托，杜绝混淆剧毒鹅膏！",
                "fi": "Herkullinen pähkinäinen ruokasieni. TÄRKEÄ TURVAVINKKI: Varmista murea liitumainen rakenne; EI rengasta eikä tuppea!"
          },
          "lookalikeAlert": {
                "en": "NEVER confuse with deadly Death Cap (Amanita phalloides - rare in Finland) or Destroying Angel. Russula flesh snaps cleanly with NO fibers, NO ring, NO cup.",
                "zh": "严禁混淆有毒鹅膏！红菇肉质一折即像粉笔断裂、绝无纵向纤维拉丝，且茎部绝无活动菌环或脚底菌托包被！",
                "fi": "Valkokärpässienellä ja kavalakärpässienellä on rengas ja tyvituppi; haperolla ei koskaan."
          },
          "whereWhen": {
                "en": "Common throughout July to October wherever birch trees grow in Southern Finland.",
                "zh": "7月至10月在芬兰南部白桦树下极为常见，从森林深处到市内公园皆有出菇。",
                "fi": "Hyvin yleinen koivujen seuralainen heinä-lokakuussa."
          },
          "searchTactics": {
                "en": "Look in short grass beneath birch trees in parks and path clearings for muted greenish caps.",
                "zh": "在公园和林边短草地白桦树荫下搜寻温润的浅绿或草绿色小菌盖。",
                "fi": "Etsi matalasta ruohikosta koivujen alta."
          },
          "lookalikes": {
                "en": "Charcoal Burner (R. cyanoxantha) has greasy flexible gills; both are safe choice edibles.",
                "zh": "变色红菇（R. cyanoxantha）菌褶如丝滑油脂且揉搓不断碎，同属顶级安全美味。",
                "fi": "Kyyhkyshaperolla on joustavat rasvaiset heltat."
          },
          "cookingGuide": {
                "en": "Pan-fry directly in butter with shallots and parsley for 5–7 minutes until lightly browned.",
                "zh": "热锅放黄油，加入切片红菇与洋葱末香煎5至7分钟至微泛金黄即可。",
                "fi": "Paista voissa sipulin ja persiljan kanssa."
          },
          "image": "./images/russula_aeruginea.jpg",
          "gallery": [
          {
                "file": "./images/russula_aeruginea.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Federico Calledda, some rights reserved (CC BY-NC), uploaded by Federico Calledda"
          },
          {
                "file": "./images/russula_aeruginea_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) mihail_lukyanchik, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/russula_aeruginea_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) lara_privat, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "russula_cyanoxantha",
          "chapters": ["06","08"],
          "latinName": "Russula cyanoxantha",
          "family": "russulaceae",
          "rating": "***",
          "edibility": "choice",
          "level": "intermediate",
          "months": [
                7,
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Charcoal Burner",
                      "local": "Kyyhkyshapero",
                      "alt": "Russula cyanoxantha"
                },
                "zh": {
                      "primary": "蓝黄红菇",
                      "local": "变色红菇 / 灰鸽红菇",
                      "alt": "Russula cyanoxantha"
                },
                "fi": {
                      "primary": "Kyyhkyshapero",
                      "local": "Kyyhkyshapero",
                      "alt": "Russula cyanoxantha"
                }
          },
          "habitatName": {
                "en": "Rich deciduous groves, hazel thickets & oak-birch woodlands",
                "zh": "富营养阔叶林、欧榛树林及夏栎-白桦混交林地",
                "fi": "Rehevät lehdot, pähkinäpensaikot ja tammimetsät"
          },
          "morphology": {
                "en": {
                      "cap": "6–15 cm, marbled iridescent purple, slate-blue, olive-green and violet, shiny",
                      "underCap": "White gills that are FLEXIBLE AND GREASY to the touch, NOT shattering like other brittlegills!",
                      "stem": "Pure white, firm, chunky",
                      "odor": "Pleasant nutty aroma; mild hazelnut taste"
                },
                "zh": {
                      "cap": "6–15厘米，具有如鸽羽般虹彩斑驳的板岩蓝、深紫、橄榄绿与灰褐色渐变色泽，表面油亮",
                      "underCap": "纯白菌褶具神奇的柔韧与油脂丝滑触感，用手指轻拂绝不破碎破碎（全红菇属独一无二特征！）",
                      "stem": "纯白色，粗实坚挺",
                      "odor": "极为宜人的纯正榛果与坚果香气"
                },
                "fi": {
                      "cap": "6–15 cm, monivärinen, teräksenharmaa, lila, vihreänsävyinen tai violetti, kiiltävä",
                      "underCap": "Valkoiset heltat ovat RASVAISEN JOUSTAVAT EIVÄTKÄ MURENE kosketettaessa!",
                      "stem": "Puhtaanvalkoinen, tukeva",
                      "odor": "Pähkinäinen ja erittäin miellyttävä"
                }
          },
          "culinaryTip": {
                "en": "Considered by European mycologists as the crown jewel of all brittlegills. Firm, tender, and intensely hazelnut-sweet.",
                "zh": "被全欧洲真菌学家与美食家公认为整个红菇科的无冕之王！肉质弹嫩温润，充满天然榛子甘香。",
                "fi": "Eurooppalaisten sienestäjien ylistämä haperoiden aatelinen. Erittäin maukas ja kiinteä."
          },
          "lookalikeAlert": {
                "en": "Touch the gills with a finger: if they bend flexibly like soft rubber without crumbling, it is the Charcoal Burner!",
                "zh": "用手指指腹轻轻抚摸菌褶：如果柔韧顺滑如软橡胶而不折断碎落，即100%是蓝黄红菇！",
                "fi": "Kokeile helttoja sormella: jos ne joustavat pehmeästi murenematta, kyseessä on kyyhkyshapero!"
          },
          "whereWhen": {
                "en": "Mid-July through October in sheltered southern deciduous pockets across Uusimaa.",
                "zh": "7月中旬至10月在乌西玛大区向阳背风的富营养阔叶林带出菇。",
                "fi": "Heinä-lokakuussa lämpimissä lehtimetsissä Etelä-Suomessa."
          },
          "searchTactics": {
                "en": "Search beneath oaks and hazels on leaf-strewn slopes; test the flexible gills on suspicious specimens.",
                "zh": "在橡树与欧榛落叶覆盖的斜坡搜寻带有灰蓝紫虹彩的油润菌盖，用手指轻按菌褶即可确诊。",
                "fi": "Etsi tammien ja pähkinäpensaiden alta lehtomaasta."
          },
          "lookalikes": {
                "en": "Other purple/green russulas have brittle shattering gills. No toxic species has flexible gills and no ring.",
                "zh": "其他红菇菌褶一碰即碎成细渣；有毒鹅膏菌绝无此柔韧油腻褶且具菌环菌托。",
                "fi": "Muilla haperoilla heltat murenevat heti kosketuksesta."
          },
          "cookingGuide": {
                "en": "Sauté gently in butter with fresh thyme and a touch of sea salt. Sensational in creamy pasta sauces.",
                "zh": "以优质黄油中小火香煎，加少许百里香与海盐，其柔韧口感与坚果香调拌入意面惊为天人。",
                "fi": "Paista miedolla lämmöllä voissa. Sopii täydellisesti pastakastikkeisiin."
          },
          "image": "./images/russula_cyanoxantha.jpg",
          "gallery": [
          {
                "file": "./images/russula_cyanoxantha.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Federico Calledda, some rights reserved (CC BY-NC), uploaded by Federico Calledda"
          },
          {
                "file": "./images/russula_cyanoxantha_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) kastpaul, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/russula_cyanoxantha_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Theodore, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "russula_vesca",
          "chapters": ["06","08"],
          "latinName": "Russula vesca",
          "family": "russulaceae",
          "rating": "***",
          "edibility": "choice",
          "level": "beginner",
          "months": [
                7,
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Bare-Toothed Russula",
                      "local": "Palterohapero",
                      "alt": "Russula vesca"
                },
                "zh": {
                      "primary": "萎缩红菇",
                      "local": "露齿红菇 / 火腿红菇",
                      "alt": "Russula vesca"
                },
                "fi": {
                      "primary": "Palterohapero",
                      "local": "Palterohapero",
                      "alt": "Russula vesca"
                }
          },
          "habitatName": {
                "en": "Coniferous and mixed forests, birch-pine heaths & oak woods",
                "zh": "针叶林与混交林、白桦-赤松林地及向阳栎林",
                "fi": "Kangas- ja sekametsät, koivikot ja männiköt"
          },
          "morphology": {
                "en": {
                      "cap": "6–11 cm, ham-pink to brownish-flesh-colored; cuticle shrinks back from cap margin exposing a narrow white line of gill teeth",
                      "underCap": "White, crowded, brittle gills, often with rusty spotting",
                      "stem": "Firm, tapered at base, pure white",
                      "odor": "Sweet, nutty flavor like fresh hazelnuts; mild pleasant aroma"
                },
                "zh": {
                      "cap": "6–11厘米，熟火腿粉红至肉褐色；表皮边缘常微微萎缩后退1-2毫米，露出里面如细白牙齿般的菌褶边缘（独门露齿绝技！）",
                      "underCap": "白色细密脆硬菌褶，老熟时微见细小铁锈色斑点",
                      "stem": "坚实，基部略渐尖，纯白色",
                      "odor": "甜润纯正的生榛子果仁香，生嚼甘脆无辛辣"
                },
                "fi": {
                      "cap": "6–11 cm, lihan- tai kinkunpunainen; pintakelmu vetäytyy lakin reunasta paljastaen valkoiset heltanterät",
                      "underCap": "Valkoiset tiheät heltat, usein ruostetäpläiset",
                      "stem": "Tukeva, tyveä kohti kapeneva, valkoinen",
                      "odor": "Mieto, miellyttävä; pähkinäinen maku"
                }
          },
          "culinaryTip": {
                "en": "Beloved gourmet species nicknamed the 'Ham Mushroom'. Crisp, sweet, and nutty. Direct pan-frying in butter.",
                "zh": "因其火腿色泽与绝妙风味被欧洲人昵称为“火腿蘑菇”。肉质清甜松脆如坚果，直接黄油香煎无需焯水。",
                "fi": "Kinkunpunainen huippuherkku. Rapea ja makean pähkinäinen. Paista suoraan pannulla."
          },
          "lookalikeAlert": {
                "en": "Look for the retracted cap margin exposing the white teeth of the gills—this feature is diagnostic.",
                "zh": "细察菌盖外缘那一圈仿佛“嘴唇后缩露出一排细白牙齿”的菌褶露白特征，是其铁证鉴别标记。",
                "fi": "Lakin reunan paljaat valkoiset 'hampaat' ovat lajin varma tuntomerkki."
          },
          "whereWhen": {
                "en": "July through October in sunny mixed forests across Helsinki Central Park and Espoo.",
                "zh": "7月至10月在赫尔辛基中央公园及埃斯波阳光斑驳的针阔混交林普遍生长。",
                "fi": "Heinä-lokakuussa yleinen koko Uudellamaalla."
          },
          "searchTactics": {
                "en": "Scan forest floor clearings for ham-pink caps, then lift and inspect the margin for the bare white tooth line.",
                "zh": "在林间开阔平地搜寻火腿粉色的小圆盖，采下后立即在明光下细看菌盖边缘是否微露白齿。",
                "fi": "Etsi kinkunpunaisia lakkeja ja tarkista lakin reunan paljaat heltat."
          },
          "lookalikes": {
                "en": "Other pinkish russulas do not have the retracted cuticle exposing gill teeth.",
                "zh": "其他粉红系红菇的表皮均完全包裹至菌盖最外缘，绝不露出白齿。",
                "fi": "Muilla punaisilla haperoilla kelmu peittää lakin reunan kokonaan."
          },
          "cookingGuide": {
                "en": "Pan-sear in hot butter with sea salt until crisp. Outstanding atop toasted brioche or in risotto.",
                "zh": "热黄油大火香煎至边缘微焦酥脆，撒海盐铺在烤黄油面包片上，香气直沁心脾。",
                "fi": "Paista rapeaksi voissa ja tarjoile paahdetun leivän kera."
          },
          "image": "./images/russula_vesca.jpg",
          "gallery": [
          {
                "file": "./images/russula_vesca.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Federico Calledda, some rights reserved (CC BY-NC), uploaded by Federico Calledda"
          },
          {
                "file": "./images/russula_vesca_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) latobriger, all rights reserved"
          },
          {
                "file": "./images/russula_vesca_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Bernd Tobler, all rights reserved"
          }
]
    },
{
          "id": "russula_xerampelina",
          "chapters": ["06","08"],
          "latinName": "Russula xerampelina",
          "family": "russulaceae",
          "rating": "**",
          "edibility": "good",
          "level": "intermediate",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Crab Brittlegill",
                      "local": "Sillihapero",
                      "alt": "Russula xerampelina"
                },
                "zh": {
                      "primary": "枯焦红菇",
                      "local": "鲱鱼红菇 / 蟹味红菇",
                      "alt": "Russula xerampelina"
                },
                "fi": {
                      "primary": "Sillihapero",
                      "local": "Sillihapero",
                      "alt": "Russula xerampelina"
                }
          },
          "habitatName": {
                "en": "Coniferous pine and spruce heaths, mossy bedrock forests",
                "zh": "针叶松树与云杉林、长满深厚苔藓的花岗岩基岩林地",
                "fi": "Mäntykankaat, havumetsät ja kalliomänniköt"
          },
          "morphology": {
                "en": {
                      "cap": "6–13 cm, dark wine-red, purple to brownish-carmine, velvety, dry",
                      "underCap": "Cream to deep ochre-yellow gills, bruising brownish with age",
                      "stem": "Stout, pure white or flushed with pinkish-red, bruising distinct rusty-brown when handled",
                      "odor": "Unmistakable aroma of boiled crab, lobster or salted herring when fresh and cooking"
                },
                "zh": {
                      "cap": "6–13厘米，深沉醇厚的葡萄酒红至紫红暗褐色，表面微带天鹅绒感",
                      "underCap": "乳白至深黄赭色菌褶，触碰后缓慢氧化转为赭褐色",
                      "stem": "粗壮，白色或略染淡玫瑰红晕，手揉捏后逐渐变铁锈褐色",
                      "odor": "极为独特的清蒸大闸蟹、水煮龙虾或熟鲱鱼般的浓郁海鲜鲜甜气息"
                },
                "fi": {
                      "cap": "6–13 cm, tumman viininpunainen tai purppuranruskea, samettinen",
                      "underCap": "Kellanokkrat mureat heltat, ruskettuvat kosketuksesta",
                      "stem": "Tukeva, valkoinen tai punertava, ruskettuu kosketuksesta",
                      "odor": "Voimakas, erehtymätön keitetyn ravun tai sillin tuoksu"
                }
          },
          "culinaryTip": {
                "en": "Firm and meaty. The crab-like seafood aroma cooks down into a rich, savory seafood bisque depth. Pan-fry directly in butter.",
                "zh": "肉质紧实耐煮。其类似海鲜甲壳的芳香在下锅翻炒后转化为极其深厚的浓汤鲜味，直接入黄油香煎即可。",
                "fi": "Kiinteä ja hyvä ruokasieni. Rapumainen tuoksu antaa upean aromin paistettaessa."
          },
          "lookalikeAlert": {
                "en": "Distinct seafood smell, yellow ochre gills, and iron-sulfate reaction (turns olive-green) are diagnostic.",
                "zh": "独一无二的海鲜煮蟹气味加上深黄色菌褶及受损泛褐的特征，使其绝无误食风险。",
                "fi": "Sillintuoksu ja lihan ruskettuminen estävät sekaannukset."
          },
          "whereWhen": {
                "en": "August through October across pine heaths in Nuuksio, Luukki, and Porkkala.",
                "zh": "8月至10月在Nuuksio与Porkkala等地的松针苔藓林中普遍生长。",
                "fi": "Elo-lokakuussa mäntymetsissä koko rannikkoalueella."
          },
          "searchTactics": {
                "en": "Search beneath pines; confirm identity by checking the distinctive seafood/crab aroma at the gills.",
                "zh": "在赤松下搜寻深酒红色的菌盖，采下后嗅闻菌褶部位，立时能闻到鲜明的蒸蟹海鲜清香。",
                "fi": "Etsi mäntyjen alta sammalikosta ja haista heltoista rapumaista tuoksua."
          },
          "lookalikes": {
                "en": "The Sickener (R. emetica) has pure white gills, burns the tongue, and has no seafood smell.",
                "zh": "毒红菇菌褶纯白，舌尖尝极辛辣，且毫无海鲜香气。",
                "fi": "Tulihapero on polttavan tulinen ja sillä on valkoiset heltat ilman sillin tuoksua."
          },
          "cookingGuide": {
                "en": "Sauté in butter with leeks and cream to create an authentic forest seafood-style sauce.",
                "zh": "与大葱碎在黄油中翻炒，淋入少许白葡萄酒与鲜奶油，制成芳香浓郁的仿海鲜野菌白汁。",
                "fi": "Paista voissa purjon ja kerman kera."
          },
          "image": "./images/russula_xerampelina.jpg",
          "gallery": [
          {
                "file": "./images/russula_xerampelina.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Uwe Winkler, some rights reserved (CC BY-NC), uploaded by Uwe Winkler"
          },
          {
                "file": "./images/russula_xerampelina_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Sam B., all rights reserved"
          },
          {
                "file": "./images/russula_xerampelina_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Veera Luukkainen, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "russula_vinosa",
          "chapters": ["02","06","08"],
          "latinName": "Russula vinosa",
          "family": "russulaceae",
          "rating": "***",
          "edibility": "choice",
          "level": "intermediate",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Dark-Veined Brittlegill",
                      "local": "Viinihapero",
                      "alt": "Russula vinosa"
                },
                "zh": {
                      "primary": "暗紫红菇",
                      "local": "酒红红菇 / 变灰红菇",
                      "alt": "Russula vinosa"
                },
                "fi": {
                      "primary": "Viinihapero",
                      "local": "Viinihapero",
                      "alt": "Russula vinosa"
                }
          },
          "habitatName": {
                "en": "Moist old-growth Norway spruce heaths & damp blueberry depressions",
                "zh": "湿润的老龄挪威云杉林及阴湿蓝莓矮丛苔藓洼地",
                "fi": "Tuoreet ja kosteat kuusikot, mustikkatyypin kankaat"
          },
          "morphology": {
                "en": {
                      "cap": "6–12 cm, dark wine-purple to purplish-brown, dry, smooth",
                      "underCap": "Cream-white brittle gills, turning ash-grey with age or injury",
                      "stem": "White, turning distinctly ash-grey to slate-grey when cut or handled",
                      "odor": "Mild pleasant aroma; completely mild, sweet nutty taste"
                },
                "zh": {
                      "cap": "6–12厘米，深沉华丽的葡萄酒紫至深紫褐色，干燥平滑",
                      "underCap": "乳白至米黄脆菌褶，切开或受压后缓慢转为显著的灰黑石板灰色",
                      "stem": "粗实，白色底色在采摘挤压或剖开数分钟后显著氧化变灰",
                      "odor": "清淡悦人，生尝完全温和甘美"
                },
                "fi": {
                      "cap": "6–12 cm, tumman viininpunainen tai purppuranruskea, himmeä",
                      "underCap": "Kermanvaaleat heltat, harmaantuvat vanhana ja rikkoutuessaan",
                      "stem": "Tukeva, valkoinen, harmaantuu leikattaessa ja kosketettaessa",
                      "odor": "Mieto ja miellyttävä; maku täysin mieto"
                }
          },
          "culinaryTip": {
                "en": "Choice edible mushroom with firm crunchy flesh. Turns grey upon cooking—completely normal and delicious in butter.",
                "zh": "肉质坚实爽脆的高级食用红菇。受热翻炒后肉质变深灰属天然现象，口感脆甜绝佳。",
                "fi": "Erinomainen murea ruokasieni. Harmaantuu kypsennettäessä."
          },
          "lookalikeAlert": {
                "en": "Dark wine-purple cap combined with mild taste and strong greying flesh distinguishes it from all toxic lookalikes.",
                "zh": "暗酒红色的菌盖、温和无辣的口感以及切开后强烈的灰变反应，是其绝无差错的辨识身份证。",
                "fi": "Tumma viininpunainen väri ja malton harmaantuminen tekevät lajista turvallisen."
          },
          "whereWhen": {
                "en": "August to October in shaded, mossy spruce slopes across Sipoonkorpi, Nuuksio, and Keskuspuisto.",
                "zh": "8月至10月在西波国家公园、Nuuksio及中央公园北段的阴凉云杉苔藓坡常见。",
                "fi": "Elo-lokakuussa kosteissa kuusikoissa."
          },
          "searchTactics": {
                "en": "Look in deep feathermoss under mature spruces; verify the greying stem reaction by making a quick fingernail nick.",
                "zh": "在老云杉下的深厚羽苔中搜寻深酒紫圆盖；用指甲轻掐菌柄基部观察是否泛灰即可确诊。",
                "fi": "Etsi paksusta seinäsammalikosta kuusten alta."
          },
          "lookalikes": {
                "en": "Russula emetica is bright fire-red, burns like pepper, and does NOT turn grey.",
                "zh": "毒红菇呈艳亮火红色，极辛辣且肉质永不变灰。",
                "fi": "Tulihapero on tulisen makuinen eikä harmaannu."
          },
          "cookingGuide": {
                "en": "Pan-sear in hot butter with sea salt, shallots, and fresh parsley for 5 minutes.",
                "zh": "下热黄油锅加红葱碎与海盐大火翻煎5分钟，脆香扑鼻。",
                "fi": "Paista voissa sipulin ja persiljan kanssa."
          },
          "image": "./images/russula_vinosa.jpg",
          "gallery": [
          {
                "file": "./images/russula_vinosa.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Marco Floriani, some rights reserved (CC BY-NC), uploaded by Marco Floriani"
          },
          {
                "file": "./images/russula_vinosa_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Sergey Tempus, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/russula_vinosa_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Sergey Tempus, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "russula_integra",
          "chapters": ["06","08"],
          "latinName": "Russula integra",
          "family": "russulaceae",
          "rating": "**",
          "edibility": "good",
          "level": "beginner",
          "months": [
                7,
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Entire Brittlegill",
                      "local": "Mantelihapero",
                      "alt": "Russula integra"
                },
                "zh": {
                      "primary": "变色红菇群",
                      "local": "杏仁红菇 / 变色红菇",
                      "alt": "Russula integra"
                },
                "fi": {
                      "primary": "Mantelihapero",
                      "local": "Mantelihapero",
                      "alt": "Russula integra"
                }
          },
          "habitatName": {
                "en": "Mature spruce forests, coniferous moss heaths & mountain woodlands",
                "zh": "成熟云杉老林、针叶苔藓林地及高坡林带",
                "fi": "Vanhat kuusikot ja sammaleiset havumetsät"
          },
          "morphology": {
                "en": {
                      "cap": "6–13 cm, variable mahogany-red, olive-brown, copper-purple or liver-brown, thick and fleshy",
                      "underCap": "Broad, deep ochre to egg-yolk yellow brittle gills",
                      "stem": "Thick, snow-white, solid, brittle as chalk",
                      "odor": "Mild pleasant aroma with sweet nutty or almond taste"
                },
                "zh": {
                      "cap": "6–13厘米，颜色多变，呈红褐、铜紫、橄榄褐或肝褐色，肉质极厚硬肥硕",
                      "underCap": "宽厚深黄至蛋黄色的脆菌褶",
                      "stem": "粗壮坚实，纯白色，粉笔般易脆断",
                      "odor": "清香，生尝有独特的甜杏仁与坚果清香，完全无辛辣"
                },
                "fi": {
                      "cap": "6–13 cm, väriltään vaihteleva, suklaanruskea, oliivinsävyinen tai kuparinpunainen, paksualtoinen",
                      "underCap": "Pillistö/heltat voimakkaan keltaiset",
                      "stem": "Paksu, puhtaanvalkea, liitumainen",
                      "odor": "Mieto, miellyttävä; pähkinäinen tai mantelinen maku"
                }
          },
          "culinaryTip": {
                "en": "Firm and substantial. The deep yellow gills reflect high carotenoid content. Delicious pan-fried.",
                "zh": "肉质肥厚扎实。深黄色的成熟菌褶富含天然类胡萝卜素，风味甘甜，黄油快炒极佳。",
                "fi": "Kiinteä ja hyvä ruokasieni. Paista voissa pannulla."
          },
          "lookalikeAlert": {
                "en": "Always apply the Russula taste test: any brittlegill that tastes mild and nutty is edible and safe!",
                "zh": "务必运用芬兰红菇舌尖尝试法则（Haperosääntö）：凡一折即断且生尝清甜不辣者皆为安全食用菌！",
                "fi": "Haperosääntö pätee: jos sieni maistuu miedolta, se on syötävä."
          },
          "whereWhen": {
                "en": "Late July through October in mossy spruce tracts throughout Uusimaa.",
                "zh": "7月下旬至10月在乌西玛大区成熟云杉苔藓林中普遍出菇。",
                "fi": "Heinä-lokakuussa kuusikoissa."
          },
          "searchTactics": {
                "en": "Look for heavy, solid caps in deep spruce feathermoss. Confirm deep yellow gills and mild almond taste.",
                "zh": "在云杉厚厚苔藓上搜寻沉甸甸的厚肉圆盖，翻转确认其金黄深褶与温和杏仁香。",
                "fi": "Etsi paksun sammalen seasta kuusten alta."
          },
          "lookalikes": {
                "en": "Peppery toxic russulas taste instantly fiery; this species is completely mild.",
                "zh": "有毒红菇舌尖一碰即火辣难忍；该种生尝甘甜带杏仁清香。",
                "fi": "Myrkylliset haperot polttavat heti kielellä."
          },
          "cookingGuide": {
                "en": "Sauté in butter with diced onions and black pepper. Perfect in mixed mushroom pans.",
                "zh": "入热黄油锅加洋葱碎与黑胡椒慢煎，肉质久炒不塌，在混合野菌煲中口感拔群。",
                "fi": "Paista voissa ja sipulissa pannulla."
          },
          "image": "./images/russula_integra.jpg",
          "gallery": [
          {
                "file": "./images/russula_integra.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Christian Schwarz, some rights reserved (CC BY-NC), uploaded by Christian Schwarz"
          },
          {
                "file": "./images/russula_integra_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) lara_privat, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/russula_integra_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Borja Gomez Alvarez, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "tricholoma_matsutake",
          "chapters": ["02","06","08","zh"],
          "latinName": "Tricholoma matsutake",
          "family": "agaric_others",
          "rating": "***",
          "edibility": "choice",
          "level": "intermediate",
          "months": [
                7,
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Pine Matsutake",
                      "local": "Tuoksuvalmuska / Matsutake",
                      "alt": "Tricholoma matsutake"
                },
                "zh": {
                      "primary": "松茸 (松口蘑)",
                      "local": "芬兰野生松茸 / 香口蘑 (Tuoksuvalmuska)",
                      "alt": "Tricholoma matsutake"
                },
                "fi": {
                      "primary": "Tuoksuvalmuska (Matsutake)",
                      "local": "Männyntuoksuvalmuska",
                      "alt": "Tricholoma matsutake"
                }
          },
          "habitatName": {
                "en": "Dry sandy Scots pine heaths (Kuiva kangas) with reindeer lichens & thin humus, occasionally with spruce. Widespread across Finland, especially abundant in Lapland, Kainuu, and North Ostrobothnia.",
                "zh": "干燥、沙质、地衣密布且腐殖质薄的疏林欧洲赤松林（Kuiva kangas），偶尔伴生云杉。芬兰全国皆产，北部拉普兰、凯努及北博滕产量尤丰。",
                "fi": "Karuilla hiekkapohjaisilla ja jäkälärikkailla mäntykankailla (Kuiva kangas) ohuella humuksella, toisinaan kuusikoissa. Koko maassa, erityisen runsas Lapissa, Kainuussa ja Pohjois-Pohjanmaalla."
          },
          "morphology": {
                "en": {
                      "cap": "6–20 cm, pale buff to reddish-brown covered with fibrous brown scales, dry, thick and extraordinarily dense, firm flesh",
                      "underCap": "White to pale cream crowded gills, slowly developing reddish-brown spots when mature",
                      "stem": "Very stout, solid, tapering at base, with a persistent fibrous white cottony ring; densely brown-scaly below ring",
                      "odor": "The defining hallmark: an intensely aromatic, unmistakable sweet-spicy perfume of cinnamon, cedarwood, fresh pine resin, and crisp autumn earth"
                },
                "zh": {
                      "cap": "6–20厘米，淡茶褐色至黄褐色覆有粗糙的红褐至深褐色纤维状鳞片，干燥，肉质极其肥厚致密坚实",
                      "underCap": "乳白至浅乳黄色细密菌褶，成熟老化后边缘常带细小锈褐色斑点",
                      "stem": "极其粗实粗壮如棒槌，基部渐收尖，具持久棉毛状白色菌环，环下密布深色鳞片，内部致密实心",
                      "odor": "最重要的决定性辨识铁证：极度浓郁独特的复合甜香，将肉桂香、松脂香与雪松木质香及清冽泥土香融为一体，无可替代！"
                },
                "fi": {
                      "cap": "6–20 cm, vaaleanruskea, ruskeiden kuitusuomujen peittämä, erittäin kiinteä- ja paksulamaltoinen",
                      "underCap": "Valkoiset tai kermanvaaleat tiheät heltat, vanhana ruskeatäpläiset",
                      "stem": "Erittäin tukeva, kiinteä, tyveä kohti suippeneva, selvä vanumainen valkoinen rengas, renkaan alta ruskeasuomuinen",
                      "odor": "Tärkein tuntomerkki: huumaavan voimakas, ainutlaatuinen makean mausteinen tuoksu, jossa yhdistyvät kaneli, havupuu, pihka ja syksyinen metsämaa"
                }
          },
          "culinaryTip": {
                "en": "WORLD-FAMOUS GOURMET TREASURE. Do not overcook or drown in heavy sauces! Gently charcoal-grill, pan-sear briefly in clarified butter, or prepare Matsutake rice (Matsutake gohan) to fully unleash its intoxicating spicy perfume.",
                "zh": "享誉全球的殿堂级野生菌珍馐！严禁重油重酱或过火久煮！极宜炭火炭烤、刺身厚切蘸生抽芥末、或以极简黄油微火香煎，亦可煲制松茸饭（Matsutake Gohan）与松茸清汤，尽显天赐松茸香。",
                "fi": "Maailmankuulu gourmet-aarre! Älä peitä voimakkailla mausteilla tai kypsennä liikaa. Paahda kevyesti hiilloksella tai paista pikaisesti voissa pannulla."
          },
          "lookalikeAlert": {
                "en": "BEWARE LOOKALIKES: Booted Knight (Tricholoma focale / ruskovalmuska) has an orange-reddish cap and a mealy/flour-like or bland smell lacking the cinnamon perfume. Also strictly avoid Deadly Webcap (Cortinarius rubellus), which has a pointed copper umbo, rusty spores, and causes fatal kidney destruction.",
                "zh": "【辨识与注意】：外形上极易与红褐色口蘑/颈圈口蘑（Tricholoma focale / 芬兰语 ruskovalmuska）混淆，后者菌盖偏红且气味是生面粉味或无明显甜香。同时严禁混淆致命丝膜菌（C. rubellus）！初学者务必通过浓郁甜香肉桂松脂气味确证！",
                "fi": "VARO EREHDYKSIÄ: Ruskovalmuska (Tricholoma focale) on punertavalakkinen ja sen tuoksu on jauhomainen tai mieto, ilman kanelia. Varo myös hengenvaarallista suippumyrkkyseitikkiä (terävä lakki, ruosteitiöt). Varmista laji aina huumaavan tuoksun avulla!"
          },
          "whereWhen": {
                "en": "Late July to early October, peaking in August–September. Distributed throughout Finland, but far more common and bountiful in the north (Lapland, Kainuu, North Ostrobothnia). Mycorrhizal primarily with Scots pine on dry, sandy, lichen-heavy heaths with thin humus; occasionally with spruce. Annual yields fluctuate wildly: bumper years produce piles of mushrooms (e.g. Lapland's legendary 2007 mega-flush where guides harvested ~1 ton), whereas off-years yield almost none. In Southern Finland, check dry lichen-clad pine knolls and rocky ridges (e.g. Sipoonkorpi granite crests and Salmi moraine plateaus). Permitted under Everyman's Right (Jokamiehenoikeus) across both public and private lands, and foraging income is 100% tax-free!",
                "zh": "出菇期自7月底延续至10月初，盛产期在8–9月。全国均有分布，北部（拉普兰、凯努、北博滕）更常见、产量更大。主要与欧洲赤松共生，长在干燥、沙质、地衣多、腐殖质薄的疏林松林里，有时也与云杉一起出现。产量年际波动极大：有的年份能采到成堆，有的年份几乎不见（2007年拉普兰是著名大年，有向导声称一季采到约1吨）。芬兰南部亦见于西波高地岩丘、Porkkala海角及Salmi冰碛脊松林。受“每个人的权利”（Jokamiehenoikeus）保护，所有人均可在公共及私人林地免费自由采摘，且采售野生菌收入全免税！",
                "fi": "Satoaika heinäkuun lopusta lokakuun alkuun, runsaimmillaan elo-syyskuussa. Esiintyy koko maassa, mutta selvästi yleisempi ja satoisampi Pohjois-Suomessa (Lappi, Kainuu, Pohjois-Pohjanmaa). Kasvaa männyn juurisienenä kuivilla, karuilla, hiekkaisilla ja jäkälärikkailla kankailla, joissa on ohut humuskerros; toisinaan kuusikoissa. Vuosisadot vaihtelevat valtavasti: huippuvuosina satoa on runsaasti (kuten Lapissa 2007 jolloin opas poimi jopa tonnin), huonoina vuosina tuskin lainkaan. Etelä-Suomessa kalliomänniköissä ja harjuilla. Jokaisenoikeudella vapaasti ja verovapaasti poimittavissa!"
          },
          "searchTactics": {
                "en": "Search dry, lichen-carpeted Scots pine ridges for telltale hummocks and cracked reindeer lichen mats where fruiting bodies push up through thin sand and needles. Matsutake often fruit deeply embedded in the soil, showing only a small brown cap sliver. Kneel and smell the ground: the intense sweet cinnamon-pine resin aroma frequently gives away buried buttons before your eyes do.",
                "zh": "在干燥、地衣铺垫的赤松岩脊沙地上寻找微隆的土包与被顶开龟裂的地衣毯，松茸常深埋于沙质薄腐殖质中仅露一抹茶褐菌盖圆弧。初学者可俯身贴近地面嗅闻：那股极其浓烈的清甜肉桂松脂香气往往比眼睛更早发现深埋未出的珍馐！",
                "fi": "Kävele hitaasti karuilla mäntykankailla ja etsi halkeilleita jäkälämattoja ja neulaskerroksen kohoumia mäntyjen alta. Sieni kasvaa usein syvällä hiekassa vain lakin huippu näkyvillä. Haista maata: voimakas kanelimainen maustetuoksu paljastaa piiloutuneet itiöemät."
          },
          "lookalikes": {
                "en": "Beware lookalikes: Booted Knight (Tricholoma focale / ruskovalmuska) shares similar pine heath habitat and features a ring on the stem, but has a brighter orange-reddish cap and smells merely of raw flour or is bland, lacking Matsutake's intoxicating sweet cinnamon perfume. Also watch out for Deadly Webcap (Cortinarius rubellus), which has a pointed copper cap, rusty spores, and causes fatal kidney destruction. Foragers must ALWAYS verify by the unmistakable sweet cinnamon-resin fragrance!",
                "zh": "【辨识与注意】：外形上容易和一些毒或不可食的口蘑混淆，最典型的是红褐色口蘑/颈圈口蘑（Tricholoma focale / 芬兰语 ruskovalmuska），后者菌柄亦有菌环，但菌盖偏红且气味是生面粉味或无明显甜香。辨识松茸最重要的特征是其极其浓郁独特的甜香、肉桂香与松脂香混合香气。建议初学者务必在熟悉气味和形态后再采食，或向当地专业向导请教。同时严防致命丝膜菌（C. rubellus）。",
                "fi": "TÄRKEÄ ERONTEKO: Ruskovalmuska (Tricholoma focale) kasvaa samanlaisilla mäntykankailla ja silläkin on rengas jalassa, mutta sen lakki on selvästi oranssinpunertava ja tuoksu on jauhomainen tai mieto – siitä puuttuu täysin tuoksuvalmuskan makean mausteinen kanelintuoksu. Varo myös hengenvaarallista suippumyrkkyseitikkiä (terävä lakki, ruosteitiöt). Varmista laji aina voimakkaan tuoksun perusteella!"
          },
          "culturalNotes": {
                "en": "### 1. Nordic Matsutake & Japan Connection\nFinland is one of Northern Europe's prime Matsutake habitats. Scientific research and molecular DNA sequencing confirmed that the Nordic pine matsutake is genetically identical to the famed Japanese Matsutake (**Tricholoma matsutake**, previously called *T. nauseosum* in Europe). Because Finnish specimens match Japanese matsutake in aroma, morphology, and DNA, they became a prized export to Japan. In 2007, Evira (Finnish Food Authority) officially added Matsutake to Finland's statutory commercial edible mushroom list (*kauppasieni*), legally enabling commercial gathering, purchasing stations, and culinary wholesale.\n\n### 2. Nordic Foraging Traditions & Evolution\nHistorically, Finns were indifferent to matsutake; traditional foraging culture focused almost exclusively on chanterelles, porcini, brittlegills, and salting milkcaps, often avoiding unfamiliar brown agarics. In recent years, driven by international culinary recognition, Finnish media, and Japanese gourmet appreciation, Northern Finland has developed specialized guided foraging tours and commercial collection centers. Yields fluctuate dramatically year-to-year: 2007 was a legendary bumper year in Lapland, where single professional guides reported harvesting up to a ton of prime matsutake.\n\n### 3. Everyman's Right (Jokamiehenoikeus) & Tax-Free Status\nUnder Finland's ancient Everyman's Right (*Jokamiehenoikeus*), all persons—including international travelers and tourists—have the legal right to roam freely and harvest wild mushrooms in any public or private forest without a permit or fee. Furthermore, income earned from picking and selling wild edible mushrooms is 100% tax-free under Finnish law! The only restrictions are to maintain respectful distance from private residential yards and homes, and to refrain from picking in strict nature reserves (*luonnonpuisto*).\n\n### 4. Identification Safeguards\nThe defining identification rule is Matsutake's unmistakable, intoxicating sweet-spicy perfume of cinnamon and pine resin. Novices should never forage solely by cap color; confirm with scent, and consult local guides or mycological societies when in doubt.",
                "zh": "### 1. 芬兰松茸的真实身份与中日渊源\n芬兰不仅有松茸，而且是北欧最重要的产地之一！芬兰松茸的学名就是与日本松茸完全同一物种的 **Tricholoma matsutake**（芬兰语叫 tuoksuvalmuska，直译“香口蘑”）。过去欧洲植物学界曾将其定名为 *Tricholoma nauseosum*，后来分子生物学与 DNA 测序最终确认其与东亚松茸在遗传学上属于同一物种。北欧产松茸在外形、香味和质地上极为接近日本货，DNA 高度一致，因此一度被作为对日出口的重要替代货源。2007 年芬兰官方将其正式列入法定可商业交易食用菌名单（kauppasieni），不仅可以自采自食，还可以合法进行商业收购、餐厅直供与销售。\n\n### 2. 采摘习俗、产量大年与商业采收\n芬兰人传统上对松茸并不热情，本地人采蘑菇偏爱金黄鸡油菌、美味牛肝菌、大红菇以及腌渍乳菇等，老一辈往往对“褐色伞菌”避而远之。近些年来，随着国际美食界推崇、媒体报道以及日本市场知名度提升，北芬兰（拉普兰、凯努、北博滕）逐渐兴起了松茸商业收购与专业向导带团采收。松茸产量年际波动极大：有的年份漫山成堆，有的年份几乎不见。2007 年拉普兰是著名的大年，有当地向导声称一季采到约 1 吨高等级松茸！\n\n### 3. “每个人的权利”（Jokamiehenoikeus）与免税法案\n芬兰实行“每个人的权利”（Jokamiehenoikeus）：包括外国游客在内的所有人，均可以在公共和私人森林里自由采摘野生蘑菇，无需许可证。更为优厚的是，依据芬兰税法，个人采摘野生食用菌自食或直接出售所获得的收入**百分之百免税**！采摘者只需遵守文明规范：不在私人住宅庭院和国家严格自然保护区（luonnonpuisto）采摘即可。\n\n### 4. 辨识铁律：唯香气不可替代\n松茸有极其浓郁独特的复合香气（甜香、肉桂香与新鲜松脂香混合），这是最关键的辨识特征。外形上容易和一些毒或不可食的口蘑（如红褐色口蘑 Tricholoma focale / 芬兰语 ruskovalmuska）混淆，后者菌盖偏红且气味是生面粉味或无明显甜香。建议初学者务必在熟悉气味和形态后再采食，或向当地专业向导请教。",
                "fi": "### 1. Tuoksuvalmuska ja suhde Japanin matsutakeen\nSuomi on tuoksuvalmuskan (Tricholoma matsutake) tärkeimpiä esiintymisalueita Pohjois-Euroopassa. Sieni tunnettiin aiemmin Euroopassa nimellä *T. nauseosum*, mutta DNA-tutkimukset vahvistivat sen olevan täysin sama laji kuin Japanissa arvostettu keisarillinen matsutake. Tuoksunsa, ulkonäkönsä ja perimänsä vuoksi Suomen matsutakea on viety Japaniin herkkusuille. Vuonna 2007 Evira lisäsi tuoksuvalmuskan virallisten kauppasienten luetteloon, joten sitä saa kerätä, ostaa ja myydä laillisesti.\n\n### 2. Keruuperinne ja satovaihtelut\nSuomessa tuoksuvalmuskaa ei perinteisesti hyödynnetty, sillä suomalaiset ovat suosineet kantarelleja, herkkutatteja, rouskuja ja haperoita välttäen ruskeita helttasieniä. Viime vuosikymmeninä lajin arvostus on kasvanut huimasti, ja Pohjois-Suomessa järjestetään jopa opastettuja matsutake-retkiä. Vuosisadot vaihtelevat valtavasti: huippuvuotena 2007 Lapista kerättiin arviolta tonneittain huippusieniä, kun taas huonoina vuosina sato jää vähäiseksi.\n\n### 3. Jokaisenoikeudet ja verovapaus\nSuomen jokaisenoikeuksien nojalla kuka tahansa – myös ulkomaalaiset matkailijat – saa vapaasti poimia sieniä sekä valtion että yksityisten mailla ilman lupaa. Lisäksi luonnonvaraisten sienten keräämisestä ja myymisestä saatu tulo on Suomessa täysin verovapaata! Muista ainoastaan kunnioittaa kotirauhaa pihapiireissä äläkä kerää luonnonpuistoissa.\n\n### 4. Tunnistaminen: Huumaava tuoksu on valtti\nTuoksuvalmuskan paras ja luotettavin tuntomerkki on sen voimakas, makean mausteinen kanelin ja havupuiden tuoksu. Älä sekoita jauhonhajuiseen ruskovalmuskaan (T. focale) tai suippumyrkkyseitikkiin!"
          },
          "cookingGuide": {
                "en": "Slice into 5–8 mm thick pieces. Sear in foaming unsalted butter for 2 minutes on each side over medium-high heat, or grill gently over charcoal. Season simply with sea salt flakes and a drop of fresh lemon juice or light soy sauce. Do not overpower with heavy herbs or garlic.",
                "zh": "纵切成 5–8 毫米厚片，入无盐黄油锅以中大火每面轻煎 2 分钟，或置于炭火上温和炙烤。出锅只需撒少许现磨海盐、挤数滴柠檬汁或蘸优质淡口生抽即可。切忌加入大蒜、洋葱或浓烈香料掩盖天赐香气。",
                "fi": "Viipaloi 5–8 mm paksuisiksi paloiksi ja paista nopeasti vaahtoavassa voissa pannulla (2 min per puoli) tai paahda hiilloksella. Mausta vain sormisuolalla ja tilkalla sitruunamehua tai soijaa."
          },
          "image": "./images/tricholoma_matsutake.jpg",
          "gallery": [
          {
                "file": "./images/tricholoma_matsutake.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Federico Calledda, some rights reserved (CC BY-NC), uploaded by Federico Calledda"
          },
          {
                "file": "./images/tricholoma_matsutake_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Наталья Коротких, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/tricholoma_matsutake_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Markku Vihava, some rights reserved (CC BY-NC-ND)"
          }
]
    },
{
          "id": "tricholoma_portentosum",
          "chapters": ["03","06","08"],
          "latinName": "Tricholoma portentosum",
          "family": "agaric_others",
          "rating": "***",
          "edibility": "choice",
          "level": "intermediate",
          "months": [
                9,
                10,
                11
          ],
          "names": {
                "en": {
                      "primary": "Charbonnier / Striped Tricholoma",
                      "local": "Harmaavalmuska",
                      "alt": "Tricholoma portentosum"
                },
                "zh": {
                      "primary": "灰白口蘑",
                      "local": "晚秋灰口蘑 / 肥厚口蘑",
                      "alt": "Tricholoma portentosum"
                },
                "fi": {
                      "primary": "Harmaavalmuska",
                      "local": "Harmaavalmuska",
                      "alt": "Tricholoma portentosum"
                }
          },
          "habitatName": {
                "en": "Sandy Scots pine heaths, mossy pine hollows & lichen bedrock",
                "zh": "沙质欧洲赤松林、阴湿松针苔藓洼地及地衣基岩边缘",
                "fi": "Hiekkapohjaiset kangasmetsät ja kalliomänniköt"
          },
          "morphology": {
                "en": {
                      "cap": "5–12 cm, slate-grey to charcoal with radiating darker streaks and faint yellow-green sheen, tacky when moist",
                      "underCap": "Broad white gills with distinct pale sulphur-yellow reflections",
                      "stem": "Solid, white with delicate pale yellow flush; NO ring",
                      "odor": "Pleasant, distinctive fresh mealy/flour-like fragrance"
                },
                "zh": {
                      "cap": "5–12厘米，石板灰至黑炭灰色，带有优美的深色放射状纵条纹，湿润时微黏并泛淡黄绿色光泽",
                      "underCap": "宽大纯白菌褶，在光照下透出极其清晰迷人的淡硫黄绿光彩",
                      "stem": "坚实白嫩，表面常泛一层微弱淡黄晕彩；【无菌环】",
                      "odor": "极其清新怡人的生面粉与新鲜青草甘甜香气"
                },
                "fi": {
                      "cap": "5–12 cm, tuhkanharmaa, säteittäisviiruinen, kosteana tahmea ja heikosti kellanvihreäkiiltoinen",
                      "underCap": "Valkoiset heltat, joissa selvä keltainen sävy",
                      "stem": "Tukeva, valkoinen, usein keltaisen sävyttämä; renkaaton",
                      "odor": "Miellyttävä, raikkaan jauhomainen tuoksu"
                }
          },
          "culinaryTip": {
                "en": "Premier late autumn delicacy! Resists frosts and snow flurries. Exceptional sweet, firm flesh that holds its bite.",
                "zh": "芬兰晚秋至初冬的顶级珍馐！极耐霜冻，甚至落雪后依然傲然挺立。肉质甘脆肥厚，口感久煮不烂。",
                "fi": "Loppusyksyn huippusieni! Kestää pakkasia. Erittäin kiinteä ja maukas ruokasieni."
          },
          "lookalikeAlert": {
                "en": "Beware toxic grey Tricholoma species (e.g. T. virgatum - has pointed cone cap and bitter peppery taste). Striped cap and yellow sheen are key.",
                "zh": "注意区分灰口蘑属的有毒近缘种（如尖顶口蘑 T. virgatum，菌盖有锐尖圆锥顶且味辛辣极苦）。放射条纹与淡黄晕是核心鉴别点！",
                "fi": "Varo myrkyllistä suippuvalmuskaa (T. virgatum), joka on karvaan tulinen ja terävähuippuinen."
          },
          "whereWhen": {
                "en": "September to late November. Fruits after the first light frosts when most other mushrooms have finished.",
                "zh": "9月中旬一直出菇至11月下旬。在首轮初霜甚至小雪降下后迎来采摘黄金期。",
                "fi": "Syyskuusta marraskuun lopulle; parhaimmillaan yöpakkasten alettua."
          },
          "searchTactics": {
                "en": "Search beneath pine needle cushions on sandy ridges late in the season when funnel chanterelles peak.",
                "zh": "深秋晚季在沙质赤松林脊的厚松针毯下搜寻顶出松针的深灰色肥厚菌顶。",
                "fi": "Etsi hiekkakankailta syksyn myöhäisimpinä viikkoina."
          },
          "lookalikes": {
                "en": "Tricholoma virgatum is intensely acrid/bitter; T. portentosum is completely mild and sweet.",
                "zh": "尖顶口蘑入口苦辣刺喉；灰白口蘑甘甜如生面粉。",
                "fi": "Suippuvalmuskan maku on kitkerä ja polttava."
          },
          "cookingGuide": {
                "en": "Sauté in butter with onions or simmer into late autumn game soups and stews. Outstanding firm texture.",
                "zh": "下热黄油锅与洋葱慢煸，或加入深秋野味牛羊肉汤中炖煮，肉质极其弹脆肥美。",
                "fi": "Paista voissa tai valmista kermainen sienikeitto."
          },
          "image": "./images/tricholoma_portentosum.jpg",
          "gallery": [
          {
                "file": "./images/tricholoma_portentosum.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Federico Calledda, some rights reserved (CC BY-NC), uploaded by Federico Calledda"
          },
          {
                "file": "./images/tricholoma_portentosum_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Adam Gordon, some rights reserved (CC BY-NC-ND)"
          },
          {
                "file": "./images/tricholoma_portentosum_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Sabby, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "macrolepiota_procera",
          "chapters": ["08","zh"],
          "latinName": "Macrolepiota procera",
          "family": "agaric_others",
          "rating": "***",
          "edibility": "choice",
          "level": "intermediate",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Parasol Mushroom",
                      "local": "Ukonsieni",
                      "alt": "Macrolepiota procera"
                },
                "zh": {
                      "primary": "高大环柄菇",
                      "local": "巨伞菇 / 欧洲大阳伞菇",
                      "alt": "Macrolepiota procera"
                },
                "fi": {
                      "primary": "Ukonsieni",
                      "local": "Ukonsieni",
                      "alt": "Macrolepiota procera"
                }
          },
          "habitatName": {
                "en": "Sunny forest glades, warm grassy clearings, pastures & edge of deciduous groves",
                "zh": "阳光充沛的林间空地、温暖向阳的草坡草场及阔叶林边缘",
                "fi": "Valoisat metsänaukeat, laitumet, lehdot ja lehtimetsien reunat"
          },
          "morphology": {
                "en": {
                      "cap": "15–30 cm across, gigantic umbrella-like, pale cream covered in large shaggy brown scales with dark center bump",
                      "underCap": "Broad, crowded, white to pale cream gills free from stem",
                      "stem": "Very tall (20–40 cm), slender, bulbous base, with brown zigzag snakeskin pattern and thick sliding ring",
                      "odor": "Delicious sweet, nutty aroma of toasted hazelnuts"
                },
                "zh": {
                      "cap": "15–30厘米，如巨大阳伞般巍峨壮观，浅米色底上密布粗大反卷褐色鳞片，中央具深色凸起",
                      "underCap": "宽厚密集的雪白至象牙白色菌褶，离生于菌柄",
                      "stem": "高大修长（20–40厘米），中空木质，表面布满精美如蛇皮般的深褐色之字形花纹，具可上下滑动的厚双层菌环",
                      "odor": "极其香浓诱人的炒熟榛果坚果芳香"
                },
                "fi": {
                      "cap": "15–30 cm, jättimäinen, vaalea, pinnalla suuria ruskeita suomuja",
                      "underCap": "Valkoiset, tiheät, jalasta irti olevat heltat",
                      "stem": "Hyvin pitkä (20–40 cm), marmoroitu käärmeennahkamaisella kuviolla, suuri liikkuva rengas",
                      "odor": "Pähkinäinen, erittäin miellyttävä"
                }
          },
          "culinaryTip": {
                "en": "THE SCHNITZEL MUSHROOM! Bread the massive flattened cap with egg and breadcrumbs, pan-fry in butter. Stem is tough and fibrous (discard or dry for powder).",
                "zh": "天然的巨无霸“森林炸猪排”！取完整巨大菌盖裹鸡蛋液与面包屑，入黄油平底锅整片煎炸至两面金黄酥脆！菌柄木质化较硬，宜丢弃或打粉做香料。",
                "fi": "Sienimaailman wieninleike! Leivitä koko valtava lakki korppujauhoissa ja paista voissa leikkeenä."
          },
          "lookalikeAlert": {
                "en": "Must have snakeskin-patterned stem and loose sliding ring. Chlorophyllum rhacodes bruises saffron-orange/red when sliced.",
                "zh": "核心鉴别特征为菌柄上的蛇皮纹路与可上下自由滑动的厚菌环。近缘的糙皮环柄菇切开后菌肉会转藏红橙红色。",
                "fi": "Käärmeennahkakuvio jalassa ja vapaasti liikkuva rengas varmistavat lajin."
          },
          "whereWhen": {
                "en": "Late August through October in warm, sunny clearings across Southern Finland.",
                "zh": "8月下旬至10月在芬兰南部温暖向阳的林间大草甸中现身，远望宛如一把把立于草中的遮阳伞。",
                "fi": "Elo-lokakuussa valoisilla paikoilla Etelä-Suomessa."
          },
          "searchTactics": {
                "en": "Scan sunny pastures and grassy woodland borders from afar—their gigantic height (up to 40 cm) stands out distinctly.",
                "zh": "在开阔向阳草坡远眺，其高达30-40厘米的巨大伞形身姿在草丛中极易一眼望见。",
                "fi": "Tarkkaile valoisia aukkoja; sienen valtava koko näkyy kauas."
          },
          "lookalikes": {
                "en": "Chlorophyllum rhacodes (Shaggy Parasol) bruises distinct orange-red when cut and lacks snakeskin pattern on stem.",
                "zh": "糙皮大环柄菇菌柄平滑无蛇皮纹，且刀割后菌肉会迅速变为胡萝卜红褐色。",
                "fi": "Akansieni muuttuu leikattaessa oranssinpunaiseksi ja sen jalka on sileämpi."
          },
          "cookingGuide": {
                "en": "Remove stem. Dip whole cap in flour, beaten egg, then seasoned breadcrumbs. Fry in butter over medium heat for 4 minutes per side.",
                "zh": "去柄，将完整菌盖依次蘸面粉、蛋液与面包屑，放黄油平底锅两面各煎4分钟，撒柠檬汁与海盐，口感外酥里嫩胜似顶级猪排！",
                "fi": "Poista jalka, leivitä lakki kananmunalla ja korppujauholla ja paista voissa molemmin puolin."
          },
          "image": "./images/macrolepiota_procera.jpg",
          "gallery": [
          {
                "file": "./images/macrolepiota_procera.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Lucian Clanet, some rights reserved (CC BY), uploaded by Lucian Clanet"
          },
          {
                "file": "./images/macrolepiota_procera_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Sheelagh Halsey, some rights reserved (CC BY)"
          },
          {
                "file": "./images/macrolepiota_procera_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Chris Malumphy, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "agaricus_arvensis",
          "chapters": ["08"],
          "latinName": "Agaricus arvensis",
          "family": "agaric_others",
          "rating": "***",
          "edibility": "choice",
          "level": "intermediate",
          "months": [
                7,
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Horse Mushroom",
                      "local": "Peltoherkkusieni",
                      "alt": "Agaricus arvensis"
                },
                "zh": {
                      "primary": "白林地蘑菇",
                      "local": "野生白双孢蘑菇 / 大田头菇",
                      "alt": "Agaricus arvensis"
                },
                "fi": {
                      "primary": "Peltoherkkusieni",
                      "local": "Peltoherkkusieni",
                      "alt": "Agaricus arvensis"
                }
          },
          "habitatName": {
                "en": "Grassy meadows, pastures, sunny forest edges & rich soil paths",
                "zh": "长草草甸、草场牧地、阳光充足的林缘及腐殖土小径边",
                "fi": "Laitumet, niityt, puistot ja valoisat metsänreunat"
          },
          "morphology": {
                "en": {
                      "cap": "8–20 cm, silky white to cream, bruising slowly pale yellow, smooth to finely scaly",
                      "underCap": "Gills white when young, becoming pink, then rich chocolate-brown at maturity; free from stem",
                      "stem": "Stout, white with large cogwheel-patterned double ring on underside; bulbous base with NO volva",
                      "odor": "Delicious, sweet aroma of aniseed and bitter almonds"
                },
                "zh": {
                      "cap": "8–20厘米，丝绢纯白色至象牙乳白，轻擦后微染淡黄，平滑微带细鳞",
                      "underCap": "菌褶幼时浅灰白，迅速转为娇嫩粉红，老熟后变为深巧克力深褐色，离生于菌柄",
                      "stem": "粗壮坚挺，纯白，具如齿轮状精美花纹的双层厚下垂菌环；【绝对无袋状菌托】",
                      "odor": "极其浓郁清冽的八角茴香与苦杏仁甜香"
                },
                "fi": {
                      "cap": "8–20 cm, silkkisen valkoinen, vanhana hieman kellertyvä",
                      "underCap": "Heltat aluksi vaaleanharmaat, pian vaaleanpunaiset ja vanhana suklaanruskeat",
                      "stem": "Tukeva, valkoinen, renkaan alapinnalla hammasratasmainen kuvio; EI tuppea",
                      "odor": "Voimakas, miellyttävä aniksen ja mantelin tuoksu"
                }
          },
          "culinaryTip": {
                "en": "Premier wild button mushroom! Far richer, meatier, and more aromatic than store-bought white champignons.",
                "zh": "野生蘑菇中的贵族！香气与肉质醇厚度百倍胜过超市所售的人工双孢白蘑菇，极其鲜美多汁。",
                "fi": "Huippuluokan herkkusieni! Paljon viljeltyä herkkusientä maukkaampi ja tuoksuvampi."
          },
          "lookalikeAlert": {
                "en": "DEADLY DESTROYING ANGEL (Amanita virosa) has PURE WHITE GILLS at all ages, sack-like VOLVA cup at stem base, and NO anise aroma! Never harvest all-white mushrooms without checking gills and stem base.",
                "zh": "【生死警戒红线】：致命剧毒毁灭天使（Amanita virosa 白毒伞）的菌褶终生为【纯雪白色】，基部有深埋土中的【袋状菌托】，且【绝无茴香香气】！采摘纯白真菌必须彻查菌褶颜色与菌根！",
                "fi": "HENGENVAARA: Valkokärpässienellä on aina PUHTAANVALKOISET heltat, tyvituppi eikä aniksen tuoksua!"
          },
          "whereWhen": {
                "en": "July through October in rich open pastures and sunny forest edges across Helsinki and Espoo.",
                "zh": "7月至10月在肥沃向阳的牧草地、公园边缘及林间开阔草甸大量成圈出菇。",
                "fi": "Heinä-lokakuussa runsasravinteisilla ruohomailla."
          },
          "searchTactics": {
                "en": "Spot large white domes in open grassy clearings; check underside to confirm pink-to-brown gills and sniff for sweet anise fragrance.",
                "zh": "在开阔草地搜寻大白馒头般的圆球菌盖；翻转确认菌褶为粉红或巧克力褐色，并凑近嗅闻茴香甜香。",
                "fi": "Etsi valkoisia palloja ruohikosta ja tarkista helttojen väri sekä aniksen tuoksu."
          },
          "lookalikes": {
                "en": "Agaricus xanthodermus (Yellow Stainer) turns bright chrome-yellow at base instantly and smells foul of carbolic/ink.",
                "zh": "黄斑蘑菇（有毒）基部切开会立刻泛鲜亮铬黄色，且散发刺鼻墨水石炭酸臭味。",
                "fi": "Myrkyllinen pyökkipökkösieni kellertyy tyvestä voimakkaasti ja haisee karboolille."
          },
          "cookingGuide": {
                "en": "Sauté in butter with fresh garlic and parsley, or slice into a rich wild mushroom cream soup.",
                "zh": "以大块黄油配蒜蓉欧芹大火香煎，或切厚片入高汤慢煨成极品白蘑菇浓汤。",
                "fi": "Paista voissa valkosipulin kanssa tai tee kermainen herkkusienikeitto."
          },
          "image": "./images/agaricus_arvensis.jpg",
          "gallery": [
          {
                "file": "./images/agaricus_arvensis.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Felipe Hidalgo, some rights reserved (CC BY-NC), uploaded by Felipe Hidalgo"
          },
          {
                "file": "./images/agaricus_arvensis_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Александр, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/agaricus_arvensis_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Rene Weigelt, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "agaricus_silvaticus",
          "chapters": ["08"],
          "latinName": "Agaricus silvaticus",
          "family": "agaric_others",
          "rating": "***",
          "edibility": "choice",
          "level": "intermediate",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Blushing Wood Mushroom",
                      "local": "Tapionherkkusieni",
                      "alt": "Agaricus silvaticus"
                },
                "zh": {
                      "primary": "森林蘑菇",
                      "local": "红汁林地蘑菇 / 褐鳞双孢蘑",
                      "alt": "Agaricus silvaticus"
                },
                "fi": {
                      "primary": "Tapionherkkusieni",
                      "local": "Tapionherkkusieni",
                      "alt": "Agaricus silvaticus"
                }
          },
          "habitatName": {
                "en": "Old-growth Norway spruce heaths, thick needle litter & shaded spruce hollows",
                "zh": "成熟老龄挪威云杉林、厚松针层及背阴云杉洼地",
                "fi": "Vanhat kuusikot, paksut kuusenneulaskerrokset"
          },
          "morphology": {
                "en": {
                      "cap": "6–12 cm, pale buff densely covered in reddish-brown fibrous scales",
                      "underCap": "Free gills, pale pink turning deep chocolate-brown",
                      "stem": "Slender, white, with a fragile hanging ring; FLESH STAINS BLOOD-RED INSTANTLY when sliced",
                      "odor": "Mild pleasant mushroom aroma"
                },
                "zh": {
                      "cap": "6–12厘米，淡米黄色底上密密麻麻覆满红褐色细纤维小鳞片",
                      "underCap": "离生细密菌褶，幼时浅粉色，后转为深沉巧克力棕褐色",
                      "stem": "修长纯白，具脆弱下垂菌环；【切开后菌肉瞬间转为鲜血红色！】",
                      "odor": "清新宜人"
                },
                "fi": {
                      "cap": "6–12 cm, vaalealla pohjalla runsaasti ruskeita kuitusuomuja",
                      "underCap": "Vapaat heltat, vaaleanpunaiset, vanhana suklaanruskeat",
                      "stem": "Hoikka, valkeahko, hento rengas; MALTO MUUTTUU HETI VERENPUNAISEKSI leikattaessa",
                      "odor": "Miellyttävä"
                }
          },
          "culinaryTip": {
                "en": "Superb culinary mushroom with dense meatiness and rich woodsy flavor. Blood-red bruising disappears upon cooking.",
                "zh": "肉质致密肥嫩的高级食用菌，比普通草地蘑菇更有深沉的森林木质清香。切口血红变色在受热烹煮后会自然消退。",
                "fi": "Huippumakuinen kuusikon ruokasieni. Punainen väri katoaa kypsennettäessä."
          },
          "lookalikeAlert": {
                "en": "Immediate blood-red flesh reaction combined with brown scaly cap in spruce litter is diagnostic.",
                "zh": "切开后肉质瞬息万变的血红色反应、加上长在云杉松针中的红褐鳞片，让其极其容易与有毒菌区分。",
                "fi": "Leikkauspinnan välitön punastuminen on lajin paras tuntomerkki."
          },
          "whereWhen": {
                "en": "August to October in dense Norway spruce forests across Sipoonkorpi and Nuuksio.",
                "zh": "8月至10月在Sipoonkorpi与Nuuksio幽深阴凉的老云杉林地中成群出菇。",
                "fi": "Elo-lokakuussa vanhoissa kuusikoissa."
          },
          "searchTactics": {
                "en": "Scan thick needle litter beneath tall spruces. Make a small cut in the stem to witness the instant blood-red flush.",
                "zh": "在挺拔的云杉林下厚松针层搜寻棕褐色小鳞盖，小刀划开菌柄数秒内见血红即可确信。",
                "fi": "Etsi kuusien alta neulasmatolta ja tee viilto jalkaan punastumisen toteamiseksi."
          },
          "lookalikes": {
                "en": "Destroying Angel has pure white cap, white gills, and never bruises red.",
                "zh": "白毒伞纯白菌盖与白菌褶，切开永不变红，且底具菌托。",
                "fi": "Valkokärpässieni ei koskaan punastu eikä sillä ole suomuja."
          },
          "cookingGuide": {
                "en": "Slice and sauté in butter with shallots and a splash of heavy cream. Magnificent served on warm toast.",
                "zh": "切片在黄油中慢炒，加洋葱碎与少许奶油，收汁后浇在刚烤热的面包片上鲜香扑鼻。",
                "fi": "Paista voissa sipulin kera ja lisää kermaa."
          },
          "image": "./images/agaricus_silvaticus.jpg",
          "gallery": [
          {
                "file": "./images/agaricus_silvaticus.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Felipe Hidalgo, some rights reserved (CC BY-NC), uploaded by Felipe Hidalgo"
          },
          {
                "file": "./images/agaricus_silvaticus_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) agrital, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/agaricus_silvaticus_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) GuTa, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "coprinus_comatus",
          "chapters": ["08","zh"],
          "latinName": "Coprinus comatus",
          "family": "agaric_others",
          "rating": "***",
          "edibility": "choice",
          "level": "beginner",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Shaggy Mane / Lawyer's Wig",
                      "local": "Suomumustesieni",
                      "alt": "Coprinus comatus"
                },
                "zh": {
                      "primary": "毛头鬼伞",
                      "local": "鸡腿菇 / 墨汁鬼伞幼菌",
                      "alt": "Coprinus comatus"
                },
                "fi": {
                      "primary": "Suomumustesieni",
                      "local": "Suomumustesieni",
                      "alt": "Coprinus comatus"
                }
          },
          "habitatName": {
                "en": "Rich lawns, roadside verges, parks, compost areas & disturbed ground",
                "zh": "肥沃草坪、城市路旁绿化带、公园草地、堆肥区及泥土翻耕地",
                "fi": "Nurmikoilla, pientareilla, puistoissa ja kompostimailla"
          },
          "morphology": {
                "en": {
                      "cap": "5–15 cm tall, cylindrical to bell-shaped, pure white covered with shaggy woolly scales",
                      "underCap": "Crowded white gills, rapidly turning pink, then deliquescing into jet-black liquid ink",
                      "stem": "Tall, hollow, smooth, white with a loose moveable ring",
                      "odor": "Mild, delicate and pleasant"
                },
                "zh": {
                      "cap": "5–15厘米高，高圆柱形至钟形，纯白色，表面布满蓬松如羽毛般的羊毛状卷曲小鳞片",
                      "underCap": "细密纯白菌褶，成熟时自菌盖边缘迅速变粉红，随后自溶化为墨黑色的墨水液体",
                      "stem": "高大修长，中空，纯白，具脆弱易脱落的活动菌环",
                      "odor": "清新温和甘美"
                },
                "fi": {
                      "cap": "5–15 cm korkea, sylinterimäinen, puhtaanvalkoinen ja villasuomuinen",
                      "underCap": "Valkoiset tiheät heltat, muuttuvat vaaleanpunaisiksi ja sulavat lopulta mustaksi musteeksi",
                      "stem": "Hoikka, valkoinen, ontto, pieni liikkuva rengas",
                      "odor": "Mieto, miellyttävä"
                }
          },
          "culinaryTip": {
                "en": "TIMING IS CRITICAL! Must be picked when pure white throughout and cooked within 2–3 hours. Once gills turn black and melt into ink, it is inedible.",
                "zh": "时间就是生命！必须采摘通体纯白如雪、菌盖紧闭的幼菌，并在采回2-3小时内尽快下锅烹制！一旦菌褶开始转黑自溶化水便不可食用。",
                "fi": "VALMISTA NOPEASTI! Poimi vain puhtaanvalkoisia nuoria yksilöitä ja valmista 2–3 tunnin sisällä ennen kuin heltat sulavat musteeksi."
          },
          "lookalikeAlert": {
                "en": "Coprinopsis atramentaria (Common Ink Cap) is smooth grey and causes severe poisoning when mixed with alcohol. Shaggy mane is pure white and shaggy.",
                "zh": "注意区别光头墨汁鬼伞（C. atramentaria），后者呈光滑灰褐色，含鬼伞素，与酒精同服会引发剧烈乙醛中毒！毛头鬼伞纯白多鳞，无酒精毒性。",
                "fi": "Älä sekoita harmaamustesieneen, joka aiheuttaa alkoholin kanssa myrkytyksen. Suomumustesieni on valkoinen ja pörröinen."
          },
          "whereWhen": {
                "en": "Late August through October on lawns and park borders throughout Helsinki and Espoo.",
                "zh": "8月下旬至10月在赫尔辛基与埃斯波市内肥沃草坪、社区花园绿化带成群破土而出。",
                "fi": "Elo-lokakuussa hyvin yleinen taajamien nurmikoilla ja puistoissa."
          },
          "searchTactics": {
                "en": "Look for gleaming white cylindrical towers popping up in city lawns overnight after soaking rain.",
                "zh": "秋雨过后次日清晨，在开阔草坪上巡视如雨后春笋般整齐立起的一尊尊白玉小火箭。",
                "fi": "Etsi puhtaanvalkoisia 'tötteröitä' nurmikoilta sateen jälkeen."
          },
          "lookalikes": {
                "en": "Coprinopsis atramentaria lacks the shaggy white woolly scales.",
                "zh": "墨汁鬼伞菌盖呈光秃灰色，无毛茸茸白色鳞片。",
                "fi": "Harmaamustesieni on sileä ja harmaa."
          },
          "cookingGuide": {
                "en": "Cut in halves lengthwise, pan-fry gently in butter for 3 minutes. Incredibly tender, velvety texture with sweet creaminess.",
                "zh": "洗净对剖两半，入热黄油平底锅小火慢煎3分钟，口感极其滑爽嫩弹、汁水丰盈如顶级鸡腿肉。",
                "fi": "Halkaise pituussuunnassa ja paista nopeasti voissa. Upean pehmeä ja mehevä maku."
          },
          "image": "./images/coprinus_comatus.jpg",
          "gallery": [
          {
                "file": "./images/coprinus_comatus.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Tom Norton, some rights reserved (CC BY), uploaded by Tom Norton"
          },
          {
                "file": "./images/coprinus_comatus_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) orim1, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/coprinus_comatus_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Bernhard Dickoré, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "infundibulicybe_geotropa",
          "chapters": ["08"],
          "latinName": "Infundibulicybe geotropa",
          "family": "agaric_others",
          "rating": "**",
          "edibility": "good",
          "level": "intermediate",
          "months": [
                9,
                10,
                11
          ],
          "names": {
                "en": {
                      "primary": "Trooping Funnel",
                      "local": "Jättimalikka",
                      "alt": "Clitocybe geotropa"
                },
                "zh": {
                      "primary": "地生杯伞",
                      "local": "大杯伞 / 巨型漏斗菇",
                      "alt": "Infundibulicybe geotropa"
                },
                "fi": {
                      "primary": "Jättimalikka",
                      "local": "Jättimalikka",
                      "alt": "Infundibulicybe geotropa"
                }
          },
          "habitatName": {
                "en": "Nutrient-rich deciduous woods, hazel groves, grassy clearings & lime-rich spruce slopes",
                "zh": "富营养阔叶林、欧榛树林、草地林间空地及微碱性云杉林坡",
                "fi": "Lehdot, pähkinämetsät, rehevät kuusikot ja ruohikkoiset aukeat"
          },
          "morphology": {
                "en": {
                      "cap": "10–25 cm, giant funnel-shaped, pale buff-cream to apricot-fawn with a distinct central bump (umbo)",
                      "underCap": "Deeply decurrent cream-white crowded gills running far down stem",
                      "stem": "Massive, tall, club-shaped base, firm and solid",
                      "odor": "Exquisite sweet perfume of bitter almonds, marzipan and lavender"
                },
                "zh": {
                      "cap": "10–25厘米，硕大如号角的深漏斗状，浅米黄至杏仁淡褐色，漏斗中心具明显尖脐突起",
                      "underCap": "深延生、密集的乳白色菌褶，沿菌柄向下延伸很深",
                      "stem": "粗壮修长，基部膨大，肉质极坚实",
                      "odor": "极其香浓优雅的苦杏仁、杏仁糖霜（Marzipan）与薰衣草花果芬芳"
                },
                "fi": {
                      "cap": "10–25 cm, suuri ja suppilomainen, vaalean nahankeltainen, keskellä terävä nypy",
                      "underCap": "Syvään johteiset tiheät vaaleat heltat",
                      "stem": "Erittäin paksu, tyvestä nuijamainen, kova ja kiinteä",
                      "odor": "Voimakas, makean mantelimainen tai marsipaania muistuttava tuoksu"
                }
          },
          "culinaryTip": {
                "en": "Heavy, substantial mushroom. The thick fleshy cap retains its bite and delicate almond perfume when cooked.",
                "zh": "体型厚硕的硬质食用菌。菌盖肥厚耐煮，熟后仍散发独特的淡雅杏仁清香，适合炖菜与焗烤。",
                "fi": "Suurikokoinen ja kiinteä ruokasieni. Säilyttää hienon mantelin tuoksunsa kypsennettäessä."
          },
          "lookalikeAlert": {
                "en": "Clouded Agaric (C. nebularis) has smoky-grey cap and unpleasant sour odor; Giant funnel has pale buff cap with central nipple.",
                "zh": "灰假杯伞（C. nebularis）菌盖呈烟灰色且气味酸冲；地生杯伞为浅暖米黄且中央具尖突。",
                "fi": "Härmämalikalla on harmaa lakki ilman nypyä ja tunkkainen tuoksu."
          },
          "whereWhen": {
                "en": "Late September through November in warm deciduous and mixed groves across Uusimaa.",
                "zh": "9月下旬至11月中旬晚秋在乌西玛大区富营养阔叶及混交林地常排成长串或仙女圈出菇。",
                "fi": "Syys-marraskuussa kalkkipitoisissa rehevissä metsissä."
          },
          "searchTactics": {
                "en": "Look for large troops or massive fairy rings of pale funnels advancing across forest clearings.",
                "zh": "在林间平缓草坡搜寻成大弧线排开或围成巨大“仙女圈”的浅米色漏斗大菇。",
                "fi": "Etsi suuria noidankehiä tai rivejä metsäaukeilta."
          },
          "lookalikes": {
                "en": "Smaller white Clitocybe species can be poisonous; this gigantic species (>10 cm) with central umbo is safe.",
                "zh": "小型白色杯伞有毒，但此类体型超10-20厘米、中央带尖脐的巨型种十分安全。",
                "fi": "Pienet valkoiset malikat ovat myrkyllisiä; jättimalikka on kookas ja turvallinen."
          },
          "cookingGuide": {
                "en": "Chop the thick cap into strips, braise slowly in olive oil and white wine, or roast with root vegetables.",
                "zh": "切粗条与根茎类蔬菜同烤，或入橄榄油白葡萄酒中慢火焖烧，香气四溢。",
                "fi": "Paloittele lakki ja hauduta hitaasti pataruoissa."
          },
          "image": "./images/infundibulicybe_geotropa.jpg",
          "gallery": [
          {
                "file": "./images/infundibulicybe_geotropa.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Federico Calledda, some rights reserved (CC BY-NC), uploaded by Federico Calledda"
          },
          {
                "file": "./images/infundibulicybe_geotropa_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Tatyana Zarubo, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/infundibulicybe_geotropa_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Sergey Alexeev, all rights reserved"
          }
]
    },
{
          "id": "clitocybe_nebularis",
          "chapters": ["06","08"],
          "latinName": "Clitocybe nebularis",
          "family": "agaric_others",
          "rating": "!*",
          "edibility": "parboil",
          "level": "advanced",
          "months": [
                9,
                10,
                11
          ],
          "names": {
                "en": {
                      "primary": "Clouded Agaric",
                      "local": "Härmämalikka",
                      "alt": "Clitocybe nebularis"
                },
                "zh": {
                      "primary": "灰假杯伞",
                      "local": "雾霭杯伞 / 烟云杯伞",
                      "alt": "Clitocybe nebularis"
                },
                "fi": {
                      "primary": "Härmämalikka",
                      "local": "Härmämalikka",
                      "alt": "Clitocybe nebularis"
                }
          },
          "habitatName": {
                "en": "Coniferous and mixed forests, deep spruce needle litter, leaf piles & parks",
                "zh": "针叶林与混交林、深厚云杉落针层、落叶堆及城市公园",
                "fi": "Havumetsät, kuusikot, lehtikasat ja puistot"
          },
          "morphology": {
                "en": {
                      "cap": "7–20 cm, cloudy ash-grey to smoky-brown, covered with delicate frosty white bloom when young",
                      "underCap": "Cream-yellow crowded decurrent gills",
                      "stem": "Stout, club-shaped base, pale greyish-white",
                      "odor": "Strong, pungent, sweet-sour spicy odor"
                },
                "zh": {
                      "cap": "7–20厘米，烟灰至暗云雾灰色，幼时表面覆有一层精致如白霜般的薄雾粉层",
                      "underCap": "乳黄白色细密下延菌褶",
                      "stem": "粗壮，基部膨大如球棒，灰白相间",
                      "odor": "强烈浓重、酸甜兼具的特殊香料气味"
                },
                "fi": {
                      "cap": "7–20 cm, tuhkanharmaa tai savunruskea, nuorena vaalean härmän peitossa",
                      "underCap": "Vaaleankellertävät johteiset heltat",
                      "stem": "Tukeva, tyvestä paksuntunut, harmaanvalkoinen",
                      "odor": "Voimakas, imelähkön pistävä tuoksu"
                }
          },
          "culinaryTip": {
                "en": "MUST BE PARBOILED FOR 10 MINUTES in boiling water to eliminate nebularine compound. Some individuals remain sensitive.",
                "zh": "因含雾霭杯伞素，必须在滚沸大水中沸煮10分钟，彻底沥干弃水后方可烹制。极少数过敏体质人群慎用。",
                "fi": "VAATII 10 MINUUTIN RYÖPPÄYKSEN. Saattaa aiheuttaa herkimmille vatsavaivoja."
          },
          "lookalikeAlert": {
                "en": "Can be confused with Entoloma sinuatum (poisonous - pink gills when mature). Verify cream-yellow gills and needle habitat.",
                "zh": "警惕粉褶菌属毒菌（成熟后菌褶转粉红）。灰假杯伞菌褶成熟后为乳黄色，且散发特异酸甜香气。",
                "fi": "Varo isorusokasta, jonka heltat muuttuvat vanhana vaaleanpunaisiksi."
          },
          "whereWhen": {
                "en": "Abundant late autumn (September through November) forming huge fairy rings across Greater Helsinki.",
                "zh": "9月中旬至11月在赫尔辛基森林深处常结成数十朵连绵的巨大仙女圈爆发。",
                "fi": "Hyvin yleinen syys-marraskuussa noidankehinä."
          },
          "searchTactics": {
                "en": "Look in dark spruce woods where deep needle piles are decomposing.",
                "zh": "在阴暗幽深的云杉老林松针厚积腐烂处成排搜寻。",
                "fi": "Etsi paksusta neulaskarikkeesta kuusten alta."
          },
          "lookalikes": {
                "en": "Entoloma species have pink spore print; C. nebularis has white/cream spores.",
                "zh": "有毒粉褶菌孢子印为粉红色；灰假杯伞孢子印为淡乳白至微黄色。",
                "fi": "Rusokkailla on punainen itiöpöly."
          },
          "cookingGuide": {
                "en": "Parboil 10 min, drain and discard water. Sauté with onions and spices or pickle in vinegar brine.",
                "zh": "焯水10分钟后捞起洗净，挤干水分，加黑胡椒与洋葱炒食，或制成酸甜醋渍菇。",
                "fi": "Ryöppää 10 min, kaada vesi pois ja valmista etikkasäilyke tai paista sipulin kera."
          },
          "image": "./images/clitocybe_nebularis.jpg",
          "gallery": [
          {
                "file": "./images/clitocybe_nebularis.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Susana C. Gonçalves, some rights reserved (CC BY-NC), uploaded by Susana C. Gonçalves"
          },
          {
                "file": "./images/clitocybe_nebularis_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) IVNSTN, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/clitocybe_nebularis_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Cassandra Nyerges, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "marasmius_oreades",
          "chapters": ["08","zh"],
          "latinName": "Marasmius oreades",
          "family": "agaric_others",
          "rating": "***",
          "edibility": "choice",
          "level": "intermediate",
          "months": [
                6,
                7,
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Fairy Ring Champignon",
                      "local": "Nurminahikas",
                      "alt": "Marasmius oreades"
                },
                "zh": {
                      "primary": "硬柄小皮伞",
                      "local": "仙女圈小皮伞 / 草地小皮伞",
                      "alt": "Marasmius oreades"
                },
                "fi": {
                      "primary": "Nurminahikas",
                      "local": "Nurminahikas",
                      "alt": "Marasmius oreades"
                }
          },
          "habitatName": {
                "en": "Grassy lawns, pastures, roadsides & sunny meadow trails",
                "zh": "向阳短草草坪、草场牧地、林道旁草带及野花草甸",
                "fi": "Nurmikoilla, laitumilla, teiden pientareilla ja puistoissa"
          },
          "morphology": {
                "en": {
                      "cap": "2–5 cm, buff-tan to pale leather-brown, bell-shaped then flattening with a prominent broad central bump; hygrophanous",
                      "underCap": "Widely spaced, free, pale cream to buff thick gills",
                      "stem": "Very tough, wiry, fibrous, flexible—twists 360 degrees without snapping; NO ring",
                      "odor": "Delicious intense aroma of cyanic almonds, marzipan, and freshly baked sweet bread"
                },
                "zh": {
                      "cap": "2–5厘米，淡黄褐至皮黄色，平展后中央具一凸起大脐突，潮湿时吸水透光",
                      "underCap": "极其稀疏宽大、互不黏连的乳白色粗菌褶，与菌柄离生",
                      "stem": "极其坚韧如铁丝，韧皮纤维丰富，用手指扭转360度依然韧而不折；【无菌环】",
                      "odor": "极其浓烈迷人的天然苦杏仁糖（Marzipan）与新鲜烘烤甜面包甘香"
                },
                "fi": {
                      "cap": "2–5 cm, vaaleanruskea tai nahankeltainen, keskellä laakea nypy",
                      "underCap": "Hyvin harvassa olevat, paksut kermanvalkeat heltat",
                      "stem": "Erittäin sitkeä, kiertämistä kestävä, vaalea, renkaaton",
                      "odor": "Voimakas, mantelinen ja hedelmäinen tuoksu"
                }
          },
          "culinaryTip": {
                "en": "A legendary gourmet mushroom prized across Europe. USE CAPS ONLY (stems are tough as wire). Remarkable dried.",
                "zh": "享誉全欧的传奇野生菌！【仅取菌盖下锅】（菌柄韧如铁丝需剪除）。风干脱水后香味浓缩数十倍，是炖肉做汤的绝品。",
                "fi": "Euroopassa suuresti arvostettu herkkusieni. KÄYTÄ VAIN LAKIT (jalka on liian sitkeä). Kuivattuna erinomainen."
          },
          "lookalikeAlert": {
                "en": "Tough flexible stem that can be twisted like rope without breaking and widely spaced gills distinguish it from poisonous lawn mushrooms.",
                "zh": "可如麻绳般扭转不断裂的超坚韧细柄、以及极其稀疏的菌褶，是杜绝草地有毒小伞菌的铁证。",
                "fi": "Jalan poikkeuksellinen sitkeys ja harvat heltat erottavat sen myrkyllisistä nurmikkosienistä."
          },
          "whereWhen": {
                "en": "June through October forming classic expanding green 'fairy rings' in grassy lawns across Helsinki.",
                "zh": "6月至10月夏秋之季，在赫尔辛基各大草坪上围绕深绿色的草圈成环成圈密集生长。",
                "fi": "Kesä-lokakuussa nurmikoilla ja niityillä noidankehinä."
          },
          "searchTactics": {
                "en": "Look for dark green lush grass circles in lawns; test the stem by twisting it around your finger.",
                "zh": "先寻找草坪上明显比周围深绿茂密的一圈圆形深草带，在圈上寻觅小菇并用手指扭转菌柄验真。",
                "fi": "Etsi nurmikon tummanvihreitä rengaskasvustoja ja kokeile jalan sitkeyttä kiertämällä."
          },
          "lookalikes": {
                "en": "Poisonous lawn toadstools have fragile brittle stems that snap immediately under tension.",
                "zh": "有毒的小型草地伞菌菌柄脆弱，轻轻一碰立即折断。",
                "fi": "Myrkyllisten pienten lajien jalat murtuvat heti taitettaessa."
          },
          "cookingGuide": {
                "en": "Snip caps off with scissors. Sauté in butter for 3 minutes, or dry whole to drop into winter soups for rich aroma.",
                "zh": "用小剪刀剪下菌盖入热黄油锅微煸3分钟，或整朵晒干密封，冬日煨鸡汤随手撒入一把，香飘满屋。",
                "fi": "Leikkaa lakit irti ja paista voissa tai kuivaa talven keittoihin."
          },
          "image": "./images/marasmius_oreades.jpg",
          "gallery": [
          {
                "file": "./images/marasmius_oreades.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Giorgio Bardelli, some rights reserved (CC BY-NC), uploaded by Giorgio Bardelli"
          },
          {
                "file": "./images/marasmius_oreades_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Beth King, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/marasmius_oreades_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Petra Neumanova, all rights reserved"
          }
]
    },
{
          "id": "armillaria_mellea",
          "chapters": ["06","08","zh"],
          "latinName": "Armillaria mellea",
          "family": "agaric_others",
          "rating": "!*",
          "edibility": "parboil",
          "level": "intermediate",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Honey Mushroom",
                      "local": "Mesisieni",
                      "alt": "Armillaria mellea sensu lato"
                },
                "zh": {
                      "primary": "假蜜环菌",
                      "local": "榛蘑 / 东北小黄蘑",
                      "alt": "Armillaria mellea"
                },
                "fi": {
                      "primary": "Mesisieni",
                      "local": "Pohjanmesisieni",
                      "alt": "Armillaria mellea"
                }
          },
          "habitatName": {
                "en": "Decaying wood, birch and spruce stumps, buried tree roots",
                "zh": "白桦及云杉倒木、腐朽老树桩及地下枯树根基部",
                "fi": "Lahot kannot, puiden tyvet ja juuristot"
          },
          "morphology": {
                "en": {
                      "cap": "4–12 cm, honey-yellow to ochre-brown, covered with tiny dark fibrous hair-like scales, growing in dense clusters",
                      "underCap": "Cream-yellow crowded gills, becoming spotted with rust-brown",
                      "stem": "Fibrous, tough, pale above a distinct cottony white-yellow ring; darker brown below",
                      "odor": "Pleasant, rich mushroomy aroma"
                },
                "zh": {
                      "cap": "4–12厘米，蜜糖黄至浅黄褐色，中央密生微小暗褐色纤毛状鳞片，通常整丛数十朵簇拥在一起生长",
                      "underCap": "乳白至淡黄色细密菌褶，老熟时微带锈色斑",
                      "stem": "纤维质坚实，具明显的棉毛状白色至黄色菌环；菌环下方转深褐色",
                      "odor": "浓郁鲜爽的典型野生菌香"
                },
                "fi": {
                      "cap": "4–12 cm, hunajankeltainen tai ruskeankellertävä, keskeltä pienten tummien suomujen peitossa, kasvaa tiheinä tuppaina",
                      "underCap": "Vaaleankellertävät heltat",
                      "stem": "Sitkeä, tyvestä tummuva, selvä kellertävänvalkoinen rengas",
                      "odor": "Miellyttävä, vahva sienen tuoksu"
                }
          },
          "culinaryTip": {
                "en": "FAMOUS CHINESE GOURMET DELICACY (榛蘑). MUST BE PARBOILED FOR 10 MINUTES in boiling water to neutralize stomach-irritating resinous compounds.",
                "zh": "中国东北名菜【小鸡炖蘑菇】不可替代的灵魂原料——野生榛蘑！生食易引起肠胃不适，必须在沸水中大火焯煮10分钟，洗净沥干后红烧或煨炖。",
                "fi": "Kuuluisa kiinalainen herkkusieni! VAATII 10 MINUUTIN RYÖPPÄYKSEN vatsavaivojen välttämiseksi."
          },
          "lookalikeAlert": {
                "en": "DEADLY FUNERAL BELL (Galerina marginata) also grows on wood but has NO hairy scales on cap, has silvery fibrils on stem, and has brown spores! Always check white spore print.",
                "zh": "【生死红线戒律】：剧毒丧钟菇（Galerina marginata）同生于木桩上，但其盖面绝对光秃无毛鳞、孢子为深锈棕色（蜜环菌为纯白孢子）！",
                "fi": "HENGENVAARA: Myrkkynääpikkä kasvaa myös kannoilla, mutta sillä ei ole karvasuomuja ja sen itiöpöly on ruosteenruskeaa!"
          },
          "whereWhen": {
                "en": "Late August through October. Bursts out in massive clusters on decaying stumps throughout Helsinki forests.",
                "zh": "8月下旬至10月，一场秋雨后常在赫尔辛基各大森林公园的腐朽树桩上爆发式成丛成簇涌现。",
                "fi": "Elo-lokakuussa kymmenien sienten tiheinä ryhminä kannoilla."
          },
          "searchTactics": {
                "en": "Check birch and spruce stumps along old logging tracks. Confirm white spore print and hairy scales in center of cap.",
                "zh": "沿林道巡查枯死的桦树与云杉树桩，确认菌盖中心有暗色毛须且菌柄具下垂菌环。",
                "fi": "Etsi kantoja ja varmista lakin nukkasuomut sekä valkoinen itiöpöly."
          },
          "lookalikes": {
                "en": "Galerina marginata is deadly, solitary to small groups, smooth cap, brown spores.",
                "zh": "纹缘盔孢伞（丧钟菇）体型小单生或小丛生，盖面光滑无毛，孢子印为深褐色。",
                "fi": "Myrkkynääpikkä on tappavan myrkyllinen, ruskeaitiöinen ja sileälakkinen."
          },
          "cookingGuide": {
                "en": "Boil for 10 min, rinse in cold water. Braise with bone-in chicken thighs, ginger, star anise, and soy sauce (classic northeastern chicken-mushroom stew).",
                "zh": "大火沸煮10分钟捞起冲凉。热锅下鸡腿块煸出鸡油，入葱姜八角冰糖生抽爆炒，下榛蘑与红薯粉条慢煲40分钟，汤汁鲜浓入骨！",
                "fi": "Ryöppää 10 min. Hauduta kananpojan, inkiväärin ja soijan kanssa kiinalaiseksi kanapadaksi."
          },
          "image": "./images/armillaria_mellea.jpg",
          "gallery": [
          {
                "file": "./images/armillaria_mellea.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Nathan Wilson, some rights reserved (CC BY-SA)"
          },
          {
                "file": "./images/armillaria_mellea_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) rudyardpickling, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/armillaria_mellea_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) jonas_barzdenas, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "kuehneromyces_mutabilis",
          "chapters": ["04","06","08"],
          "latinName": "Kuehneromyces mutabilis",
          "family": "agaric_others",
          "rating": "***",
          "edibility": "choice",
          "level": "advanced",
          "months": [
                6,
                7,
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Sheathed Woodtuft",
                      "local": "Koivunkantosieni",
                      "alt": "Kuehneromyces mutabilis"
                },
                "zh": {
                      "primary": "变色库氏菇",
                      "local": "毛柄库恩菇 / 桦树平菇",
                      "alt": "Kuehneromyces mutabilis"
                },
                "fi": {
                      "primary": "Koivunkantosieni",
                      "local": "Koivunkantosieni",
                      "alt": "Kuehneromyces mutabilis"
                }
          },
          "habitatName": {
                "en": "Stumps and dead logs of Silver Birch (Betula pendula)",
                "zh": "白桦树（Betula pendula）的树桩、倒木及腐朽木段上",
                "fi": "Lehtipuiden, erityisesti koivujen kannoilla ja maapuilla"
          },
          "morphology": {
                "en": {
                      "cap": "3–7 cm, two-toned watery cinnamon-brown when wet, drying to pale ochre-yellow from center outward",
                      "underCap": "Crowded pale cinnamon-brown gills",
                      "stem": "Slender, hollow, with membranous ring; CRITICAL: densely covered in dark bristly reflexed scales BELOW the ring",
                      "odor": "Pleasant, spicy, woodsy aroma"
                },
                "zh": {
                      "cap": "3–7厘米，强水浸吸水性，湿润时呈深肉桂色，干燥时自中央向外退成双色淡黄色斑",
                      "underCap": "细密肉桂浅褐色菌褶",
                      "stem": "纤细中空，具膜质小菌环；【命脉鉴别点：菌环下方密布粗糙反卷的黑褐色刺状硬鳞片！】",
                      "odor": "清香微带辛甜木香"
                },
                "fi": {
                      "cap": "3–7 cm, kosteana kaksivärinen, kanelinruskea, kuivuu keskeltä kellertäväksi",
                      "underCap": "Tiheät, vaalean kanelinruskeat heltat",
                      "stem": "Hoikka, ontto, renkaallinen; RENKAAN ALAPUOLELLA KARKEITA TUMMANRUSKEITA TÖRRÖTTÄVIÄ SUOMUJA",
                      "odor": "Miellyttävä, mausteinen"
                }
          },
          "culinaryTip": {
                "en": "Delicious tender cap. ADVANCED FORAGERS ONLY. Novices must never forage wood-dwelling brown mushrooms to avoid fatal poisoning.",
                "zh": "菌盖极其滑嫩鲜甜。但【仅限资深专家采摘】！初学者若无法绝对分清菌柄倒生硬刺鳞，严禁采摘木桩上的褐色小菇！",
                "fi": "Erittäin maukas keittosieni. VAIN KOKENEILLE SIENESTÄJILLE hengenvaarallisen myrkkysekaannuksen takia."
          },
          "lookalikeAlert": {
                "en": "LETHALLY CONFUSED with Funeral Bell (Galerina marginata). Galerina stem is silky-smooth or silver-fibrillose below ring; Kuehneromyces MUST have coarse dark bristly backward-pointing scales.",
                "zh": "【致命混淆生死抉择】：极易与致死量仅数朵的丧钟菇（Galerina marginata）混淆！丧钟菇菌环下方呈银白丝绢光滑状；变色库氏菇菌环下方【必须】有粗糙如倒刺的黑褐色鳞片！",
                "fi": "HENGENVAARALLINEN SEKAANNUS: Tappavan myrkyllinen myrkkynääpikkä (Galerina marginata) on jalaltaan vaalean silkkisäikeinen, koivunkantosieni karheasuomuinen!"
          },
          "whereWhen": {
                "en": "June through October in dense clusters on dead birch stumps across Uusimaa.",
                "zh": "6月至10月在乌西玛大区倒毙的白桦树桩上紧密簇拥生长。",
                "fi": "Kesä-lokakuussa tiheinä tuppaina koivukannoilla."
          },
          "searchTactics": {
                "en": "Inspect birch stumps in shady moist woods; examine the lower stem with a 10x hand lens for coarse bristly scales.",
                "zh": "在阴湿林中检查桦木树桩，必须用强光仔细检视每朵菇菌环下方的深色反卷鳞片，有一朵存疑全窝弃用！",
                "fi": "Tarkasta jokaisen sienen jalka suurennuslasilla renkaan alapuolelta."
          },
          "lookalikes": {
                "en": "Funeral Bell (Galerina marginata) is deadly toxic, has smooth silvery-fibrillose stem below ring.",
                "zh": "丧钟菇菌环下平滑泛银白丝绢反光，剧毒足以摧毁肝肾。",
                "fi": "Myrkkynääpikällä ei koskaan ole törröttäviä tummia suomuja."
          },
          "cookingGuide": {
                "en": "Snip caps from tough stems. Sauté in butter or add directly to summer vegetable soups.",
                "zh": "剪取娇嫩菌盖，入热黄油中翻炒，或加入芬兰传统夏日鲜蔬汤中清甜可口。",
                "fi": "Käytä vain lakit. Paista voissa tai valmista kesäinen keitto."
          },
          "image": "./images/kuehneromyces_mutabilis.jpg",
          "gallery": [
          {
                "file": "./images/kuehneromyces_mutabilis.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Dr. Hans-Günter Wagner, some rights reserved (CC BY-SA)"
          },
          {
                "file": "./images/kuehneromyces_mutabilis_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Николай Фещенко, all rights reserved"
          },
          {
                "file": "./images/kuehneromyces_mutabilis_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Egor_Skiba, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "calvatia_gigantea",
          "chapters": ["08","zh"],
          "latinName": "Calvatia gigantea",
          "family": "agaric_others",
          "rating": "**",
          "edibility": "good",
          "level": "beginner",
          "months": [
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Giant Puffball",
                      "local": "Jättituhkelo",
                      "alt": "Langermannia gigantea"
                },
                "zh": {
                      "primary": "大马勃",
                      "local": "巨型马勃 / 森林白皮球",
                      "alt": "Calvatia gigantea"
                },
                "fi": {
                      "primary": "Jättituhkelo",
                      "local": "Jättituhkelo",
                      "alt": "Calvatia gigantea"
                }
          },
          "habitatName": {
                "en": "Nutrient-rich meadows, pastures, sunny woodland edges & grassy park clearings",
                "zh": "富营养草甸、草场牧地、阳光充足的林缘及城市公园开阔草坪",
                "fi": "Rehevät laitumet, niityt, pihat ja lehtimetsien reunat"
          },
          "morphology": {
                "en": {
                      "cap": "20–60 cm wide, giant spherical to irregular white ball, smooth like soft white leather; NO stem, NO gills",
                      "underCap": "No underside; enclosed interior (gleba) must be 100% pure solid snow-white throughout like cream cheese",
                      "stem": "Attached to soil by thin mycelial cord",
                      "odor": "Mild, pleasant, fresh mushroom aroma"
                },
                "zh": {
                      "cap": "直径20–60厘米，巨大球体宛如白色足球或大皮革抱枕，表面平滑白嫩如婴儿肌肤；无菌柄、无菌褶",
                      "underCap": "无腹面；切开后内部肉质（产孢体）必须【100%纯洁如雪、如奶油奶酪般紧致实心】",
                      "stem": "仅靠底部细小菌丝索与泥土相连",
                      "odor": "清新温和甘美"
                },
                "fi": {
                      "cap": "20–60 cm leveä, jättimäinen valkoinen pallo, nahkamainen pinta; EI jalkaa, EI helttoja",
                      "underCap": "Sisus (gleba) leikattaessa oltava 100 % puhtaan lumivalkoinen ja tasainen",
                      "stem": "Kiinnittyy maahan ohuella rihmastojänteellä",
                      "odor": "Mieto, raikas"
                }
          },
          "culinaryTip": {
                "en": "Slice like bread into 2cm slabs, dip in beaten egg and breadcrumbs, and fry like French toast! NEVER EAT IF INTERIOR SHOWS ANY YELLOW OR GREEN TINT.",
                "zh": "像切大面包一样切成2厘米厚片，裹蛋液与面包糠，用黄油煎成法式吐司金黄色！如切开内部有丝毫黄绿褐变，切勿食用！",
                "fi": "Leikkaa paksuiksi 'leipäviipaleiksi', leivitä kananmunassa ja paista runsaassa voissa. ÄLÄ SYÖ JOS SISUS ON KELLERTÄVÄ."
          },
          "lookalikeAlert": {
                "en": "Must be cut completely in half before cooking: verify pure solid white interior with zero outline of hidden gills or cap.",
                "zh": "烹调前必须将其从中一剖为二：确认内部100%致密纯白如实心豆腐，绝无隐藏的幼伞菌褶轮廓！",
                "fi": "Halkaise aina kahtia: sisuksen oltava tasaisen valkoinen ilman helttojen aihioita."
          },
          "whereWhen": {
                "en": "August through October on rich nitrogen-rich soils across Greater Helsinki.",
                "zh": "8月至10月在富含氮质的草地、公园边缘及牧场草坡上破土耸立。",
                "fi": "Elo-lokakuussa rehevillä mailla."
          },
          "searchTactics": {
                "en": "Look for what appears to be a lost white soccer ball or sheep sitting in a sunny pasture.",
                "zh": "远望如同草地上遗落的一颗白色足球或打盹的小绵羊，体型极为硕大醒目。",
                "fi": "Näkyy kauas nurmikoilta kuin unohdettu jalkapallo."
          },
          "lookalikes": {
                "en": "Immature deadly Amanitas inside egg-stage will reveal miniature cap and gills when sliced in half.",
                "zh": "未成熟的剧毒鹅膏菌在“蛋期”对剖会清晰显示出内部微型的菌柄与菌盖菌褶雏形；马勃内部完全实心均一。",
                "fi": "Kärpässienen munavaiheessa näkyy halkaistaessa lakin ja jalan aihio."
          },
          "cookingGuide": {
                "en": "Cut into thick steaks. Dip in egg, dredge in seasoned breadcrumbs, and pan-fry in butter until golden brown and crispy.",
                "zh": "切成大块素牛排厚度，裹鸡蛋液撒椒盐，热黄油煎至两面金黄外酥里嫩，奶香四溢。",
                "fi": "Viipaloi 'pihveiksi', leivitä ja paista voissa kullankeltaiseksi."
          },
          "image": "./images/calvatia_gigantea.jpg",
          "gallery": [
          {
                "file": "./images/calvatia_gigantea.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Krystelle Denis, some rights reserved (CC BY-NC), uploaded by Krystelle Denis"
          },
          {
                "file": "./images/calvatia_gigantea_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) Joren van Schie, some rights reserved (CC BY-NC)"
          },
          {
                "file": "./images/calvatia_gigantea_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) the-creature, some rights reserved (CC BY-NC)"
          }
]
    },
{
          "id": "lycoperdon_perlatum",
          "chapters": ["08"],
          "latinName": "Lycoperdon perlatum",
          "family": "agaric_others",
          "rating": "**",
          "edibility": "good",
          "level": "beginner",
          "months": [
                7,
                8,
                9,
                10
          ],
          "names": {
                "en": {
                      "primary": "Common Puffball",
                      "local": "Nuijakuukunen",
                      "alt": "Lycoperdon perlatum"
                },
                "zh": {
                      "primary": "网纹马勃",
                      "local": "珍珠马勃 / 小马勃",
                      "alt": "Lycoperdon perlatum"
                },
                "fi": {
                      "primary": "Nuijakuukunen",
                      "local": "Nuijakuukunen",
                      "alt": "Lycoperdon perlatum"
                }
          },
          "habitatName": {
                "en": "Spruce and pine heaths, mossy woodland paths & decaying needle humus",
                "zh": "云杉与松树针叶林、长满青苔的林间小道及针叶腐殖土",
                "fi": "Havumetsät, polunvarret ja sammaleiset metsämaat"
          },
          "morphology": {
                "en": {
                      "cap": "3–7 cm tall, inverted pear-shaped to club-shaped, pure white covered with tiny conical warts that rub off easily leaving a net pattern",
                      "underCap": "Enclosed interior must be pure snowy-white throughout; NO gills",
                      "stem": "Sterile tapering base beneath the round fertile head",
                      "odor": "Mild, pleasant mushroom aroma"
                },
                "zh": {
                      "cap": "3–7厘米高，倒梨形至圆球棒槌形，纯白色，表面密布如珍珠般细小的小圆锥刺瘤，轻轻揉搓即脱落并留下网状印痕",
                      "underCap": "无菌褶；对半切开内部必须呈均一致密的纯雪白色如豆腐脑",
                      "stem": "下部为不育的渐细柄基",
                      "odor": "清新柔和"
                },
                "fi": {
                      "cap": "3–7 cm korkea, nuijamainen tai päärynämäinen, valkoinen, pinnalla helposti irtoavia kartiomaisia piikkejä",
                      "underCap": "Sisus oltava nuorena täysin tasaisen lumivalkoinen; EI helttoja",
                      "stem": "Tyveä kohti kapeneva steriili jalkaosa",
                      "odor": "Mieto, miellyttävä"
                }
          },
          "culinaryTip": {
                "en": "Pick only young specimens that are solid snowy-white inside. Slice in half before cooking; once yellow or brown, discard.",
                "zh": "必须采摘切开内部完全纯白如雪的鲜嫩幼菌。烹调前逐个对剖确认无误；一旦内部泛黄或变褐即变质不可食用。",
                "fi": "Kerää vain valkoisia yksilöitä, joiden sisus on täysin lumivalkoinen. Halkaise aina ennen käyttöä."
          },
          "lookalikeAlert": {
                "en": "Always cut every puffball lengthwise to verify that NO hidden gills of deadly Amanita 'eggs' exist inside!",
                "zh": "采摘所有小型马勃的绝对铁律：下锅前必须逐一纵向剖开，确认内部100%实心，绝无鹅膏菌蛋的菌褶雏形！",
                "fi": "Tarkista aina halkaisemalla, ettei sisällä ole kärpässienen aihioita."
          },
          "whereWhen": {
                "en": "Abundant from July through October along mossy trails in Keskuspuisto, Nuuksio, and Sipoonkorpi.",
                "zh": "7月至10月在中央公园、Nuuksio及Sipoonkorpi的苔藓小径两旁极其常见。",
                "fi": "Hyvin yleinen polkujen varsilla havumetsissä koko Uudellamaalla."
          },
          "searchTactics": {
                "en": "Look for clusters of small white clubs standing out against dark spruce moss along trails.",
                "zh": "在林道两旁深绿苔藓中搜寻成簇破土的小白球棒，手指抚摸可见珍珠状刺点脱落。",
                "fi": "Etsi valkoisia nuijamaisia ryhmiä sammalikosta."
          },
          "lookalikes": {
                "en": "Poisonous Earthballs (Scleroderma) have tough yellowish-brown skin and dark purple-black interior right from youth.",
                "zh": "有毒硬皮地星马勃（Scleroderma）外皮粗糙坚韧泛黄褐，且从幼时起内部即为深紫黑色。",
                "fi": "Myrkyllinen mukulakuukunen on kova, nahkainen ja sisältä jo nuorena musta."
          },
          "cookingGuide": {
                "en": "Slice in halves, sauté in butter with chopped chives and salt. Tender, delicate, pillowy texture.",
                "zh": "对半剖开，入热黄油中加香葱末香煎3分钟，口感如棉花糖般轻盈柔滑。",
                "fi": "Halkaise ja paista voissa ruohosipulin kera."
          },
          "image": "./images/lycoperdon_perlatum.jpg",
          "gallery": [
          {
                "file": "./images/lycoperdon_perlatum.jpg",
                "caption": {
                          "en": "General habit and natural habitat",
                          "zh": "野外自然生长整体形态与生境",
                          "fi": "Kasvupaikka ja yleiskuva"
                },
                "attribution": "(c) Stephan Pflume, some rights reserved (CC BY-NC), uploaded by Stephan Pflume"
          },
          {
                "file": "./images/lycoperdon_perlatum_1.jpg",
                "caption": {
                          "en": "Under-cap details (pores / gills / spines / ridges)",
                          "zh": "菌盖下方细节（菌孔/菌褶/菌齿/假褶）",
                          "fi": "Lakin alapinnan rakenne (pillit / heltat / poimut / piikit)"
                },
                "attribution": "(c) irvinditz, all rights reserved"
          },
          {
                "file": "./images/lycoperdon_perlatum_2.jpg",
                "caption": {
                          "en": "Cap surface, stem & specimen cluster",
                          "zh": "菌盖表皮、菌柄与标本群落",
                          "fi": "Lakin pinta, jalka ja kasvuryhmä"
                },
                "attribution": "(c) Николай Фещенко, all rights reserved"
          }
]
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
    },
    fieldTips: {
      title: {
        en: "🌲 Forager's Pro-Tip: The Chanterelle Dilemma & Host Trees",
        zh: "🌲 寻菇秘笈：为何9月满地漏斗菇却难寻鸡油菌？（树种生态与隐秘点）",
        fi: "🌲 Sienestäjän Pro-Vinkki: Kantarelli vs. Suppilovahvero & Isäntäpuut"
      },
      desc: {
        en: "Finding heaps of Funnel Chanterelles (Suppilovahvero) but zero Golden Chanterelles (Kantarelli) in September? It's not because someone picked them earlier today—it is driven by seasonality, forest room (spruce vs birch/pine), and tree mycorrhiza!",
        zh: "秋天进林子发现满地都是漏斗鸡油菌（Suppilovahvero），却一颗鲜黄鸡油菌（Kantarelli）都找不到？绝非因为下午去被人摘光，而是季节节律、生境错位与树种共生差异！",
        fi: "Löydätkö syyskuussa kasoittain suppilovahveroita mutta et lainkaan kantarelleja? Kyse ei ole kellonajasta, vaan sesongista, elinympäristöstä ja puiden mykorritsasta!"
      },
      image: "images/birch_pine_spruce.jpg",
      imageCaption: {
        en: "Silver Birch (Koivu) • Scots Pine (Mänty) • Norway Spruce (Kuusi)",
        zh: "垂枝白桦 (Koivu) • 欧洲赤松 (Mänty) • 欧洲云杉 (Kuusi) 三大树种实地对比",
        fi: "Rauduskoivu (Koivu) • Mänty • Kuusi maastovertailu"
      },
      items: [
        {
          en: "Season Shift: Golden chanterelles peak in July–August and taper off by mid-September. Funnel chanterelles peak September–November in damp, chilly weather.",
          zh: "季节错位：黄鸡油菌盛产于7-8月盛夏，9月中旬已入尾声；而漏斗鸡油菌喜阴冷湿润，正值9-11月爆发高峰期。",
          fi: "Kausiero: Kantarellin pääsato on heinä-elokuussa; suppilovahvero puhkeaa syys-marraskuussa."
        },
        {
          en: "Forest Habitat: Funnel chanterelles love dark, damp spruce forests (Kuusikko) in deep feathermoss. Golden chanterelles demand sunlight, mossy granite rocks, and Birch (Koivu) or Pine (Mänty) edges.",
          zh: "树种与生境：漏斗菇专爱深邃潮湿、覆满厚苔藓的成熟云杉林（Kuusikko）；黄鸡油菌则需要充足光照，专依附于白桦（Koivu）或松树（Mänty）林缘与长苔藓的岩台。",
          fi: "Elinympäristö: Suppilovahvero viihtyy varjoisissa kuusikoissa sammalikossa; kantarelli vaatii valoa ja kasvaa koivujen ja mäntyjen juurella sekä kalliomättäillä."
        },
        {
          en: "Hidden Low-Pressure Spots: Avoid picked-out tourist trails at Nuuksio Haukkalampi or Kuusijärvi. Try Meiko Nature Reserve (Kirkkonummi), Tremanskärr (North Espoo), Byabäcken (North Sipoonkorpi), or Salmi (North Nuuksio plateau) for pristine unpicked foraging.",
          zh: "清净小众采摘点：避开游人如织的 Nuuksio Haukkalampi 或 Kuusijärvi。前往 Meiko 自然保护区（Kirkkonummi）、Tremanskärr（北埃斯波）、Byabäcken（北锡博）或 Salmi（北努克西奥高地），享受无人争抢的原始林区。",
          fi: "Rauhalliset hotspotit: Vältä ruuhkaisia Nuuksion ja Kuusijärven pääreittejä. Kokeile Meikon luonnonsuojelualuetta, Tremanskärriä, Pohjois-Sipoonkorpea (Byabäcken) tai Salmea."
        }
      ]
    }
  },

  // Field Handbook & In-Depth Guides (9 Chapters)
  handbookChapters: [
    {
      id: "01",
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
      desc: {
        en: "Master Everyman's Right (Jokamiehenoikeus), commercial vs personal limits, strict rules in nature reserves, and protective protocols against ticks (punkit) and deer keds (hirvikärpäset). Includes 112 Suomi app setup.",
        zh: "详尽解析芬兰人人享有的自然公共权（Jokamiehenoikeus）、采摘限额、自然保护区禁区界限，以及防范森林蜱虫（punkit）与鹿蝇（hirvikärpäset）的实地生存指南与112急救配置。",
        fi: "Kattava opas jokamiehenoikeuksiin, rauhoitettuihin suojelualueisiin ja maastoturvallisuuteen punkkeja sekä hirvikärpäsiä vastaan."
      },
      url: "docs/01_legal_and_ethics.html"
    },
    {
      id: "02",
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
      desc: {
        en: "Step-by-step public transit routes, trailheads, and Google Maps links for Keskuspuisto, Sipoonkorpi, Nuuksio, Luukki, plus 5 low-pressure hidden gems: Meiko (Kirkkonummi), Tremanskärr, Northern Sipoonkorpi, Salmi, and Vestra.",
        zh: "详尽整理可搭乘HSL公交/火车直达的经典森林采摘点（中央公园、西波国家公园、努克西奥、Luukki），并特别收录5大小众少人采摘的森林秘境（Meiko、Tremanskärr、北西波等），附起点导航与行车时刻。",
        fi: "Tarkat julkisen liikenteen reitit, lähtöpisteet ja Google Maps -linkit Keskuspuistoon, Sipoonkorpeen, Nuuksioon, Luukkiin sekä 5 rauhalliseen erämaakohteeseen."
      },
      url: "docs/02_helsinki_transit_spots_guide.html"
    },
    {
      id: "03",
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
      desc: {
        en: "Month-by-month fruiting timelines (May to November), Finnish forest types (kuusikko, männikkö, lehto), and an in-depth breakdown of why golden chanterelles seem absent while funnel chanterelles abound in autumn, featuring 3-tree field diagnostics (Birch vs Pine vs Spruce).",
        zh: "5月至11月出菇时令表、芬兰四大林型生态学、深度破解“为何9月满地漏斗菇却难寻鸡油菌”的季节与林型生境错位之谜，并附垂枝白桦、欧洲赤松、欧洲云杉三大树种外生菌根现场鉴别要点与图解。",
        fi: "Kuukausikohtainen satokalenteri, metsätyypit sekä syvällinen katsaus kantarellin ja suppilovahveron esiintymiseroihin syksyllä, mukana rauduskoivun, männyn ja kuusen vertailukuva."
      },
      url: "docs/03_seasonal_calendar_and_habitats.html"
    },
    {
      id: "04",
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
      desc: {
        en: "Absolute zero-tolerance safety manual: Destroying Angel (Amanita virosa), Deadly Webcap (Cortinarius rubellus), Funeral Bell (Galerina marginata), and False Morel (Gyromitra esculenta). Toxins, latent incubation periods, lethal dosages, and emergency protocols.",
        zh: "零容忍安全防线：白毒伞（毁灭天使）、致命丝膜菌、纹缘盔孢伞（丧钟菇）及鹿花菌的形态特征、毒素机理（Amatoxin、Orellanine、Gyromitrin）、潜伏期与急救求生协议。",
        fi: "Ehdottoman tärkeä opas Suomen vaarallisimpiin myrkkysieniin: valkokärpässieni, suippumyrkkyseitikki, myrkkynääpikkä ja korvasieni. Oireet, toksiinit ja ensiaputoimet."
      },
      url: "docs/04_deadly_and_toxic_species.html"
    },
    {
      id: "05",
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
      desc: {
        en: "The 5 foolproof species with distinct physical traits that cannot be mistaken for deadly toxins: Golden Chanterelle, Funnel Chanterelle, Hedgehog Mushroom, Black Trumpet, and King Bolete (Porcini). Field identification, habitat markers, and lookalike filters.",
        zh: "形态极其鲜明、绝无致命混淆种的芬兰森林新手必学五菌：金黄鸡油菌、漏斗鸡油菌、美味齿菌（白刺儿菜）、灰黑喇叭菌以及美味牛肝菌（大红菇牛肝）。",
        fi: "Viisi selkeää ja herkullista ruokasientä, joilla ei ole tappavia näköislajeja: kantarelli, suppilovahvero, vaalea orakas, mustatorvisieni ja herkkutatti."
      },
      url: "docs/05_beginner_safe_species.html"
    },
    {
      id: "06",
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
      desc: {
        en: "Expand your basket with parboil-required milkcaps (Lactarius torminosus, L. rufus), crisp brittlegills (Russula decolorans), orange birch boletes (Leccinum versipelle), gypsy mushrooms (Cortinarius caperatus), and sheep polypore.",
        zh: "突破五大基础菌：需要科学水煮脱苦去毒的白乳菇、北欧红菇辨别法（折断无菌丝韧性）、桦树红头牛肝菌与进阶美味菌。系统掌握排毒工艺与风味挖掘。",
        fi: "Laajenna sieniosaamistasi: ryöpättävät rouskut (karvarousku, kangasrousku), haurasmalikat, lehmäntatit, kangastatit ja kehnäsieni."
      },
      url: "docs/06_intermediate_and_advanced.html"
    },
    {
      id: "07",
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
      desc: {
        en: "Dehydration, salt-curing milkcaps (suolasienet), sauté-freezing, and authentic Finnish dishes: Chanterelle pie (kantarellipiirakka), mushroom salad (sienisalaatti), and creamy wild mushroom soup.",
        zh: "系统化储藏全指南：风干脱水法、经典芬兰传统盐渍乳菇法（Suolasienet）、黄油热煸冷冻法；附正统芬兰鸡油菌奶油咸派、芬兰圣诞传统红菇色拉及野生牛肝菌浓汤食谱。",
        fi: "Kuivaaminen, rouskujen suolaus, pakastus sekä parhaat perinteiset reseptit: kantarellipiirakka, suolasienisalaatti ja kermainen tattikeitto."
      },
      url: "docs/07_preservation_and_recipes.html"
    },
    {
      id: "08",
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
      desc: {
        en: "The complete Finnish mycological index cataloging 54 wild edible species across 8 families (Boletaceae, Cantharellaceae, Hydnaceae, Russulaceae, Agaricaceae, Tricholomataceae, Polyporaceae, and Ascomycota) with edibility ratings and host trees.",
        zh: "收录芬兰真菌志记载的全部54种野生食用真菌，跨越牛肝菌科、鸡油菌科、齿菌科、红菇科、蘑菇科、口蘑科、多孔菌科及子囊菌门，包含三级美味评级、菌根树种与实地辨识特征。",
        fi: "Täydellinen 54 luonnonvaraisen ruokasienen mestariluettelo ryhmiteltynä 8 heimoon, sisältäen ruoka-arvot, isäntäpuut ja keskeiset maastotuntomerkit."
      },
      url: "docs/08_expanded_edible_species_index.html"
    },
    {
      id: "zh",
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
      desc: {
        en: "Specialist culinary guide bridging Finnish wild harvest with Chinese culinary techniques: high-temperature wok searing, chicken-fat braising, umami soups, and cross-cultural gourmet dishes.",
        zh: "专为华人采摘老饕撰写的深度料理指南：鸡油菌干煸云腿、野生牛肝菌瓦煲焖鸡、喇叭菌竹荪清润老火汤、以及极品野生菌酱熬制心法，将北欧极纯森林珍馐融入中华镬气之中。",
        fi: "Erityisopas pohjoismaisten metsäsienien valmistamiseen perinteisen kiinalaisen keittiön tekniikoilla: wokkaukseen, haudutukseen ja aromaattisiin liemiin."
      },
      url: "docs/cooking_and_recipes_zh.html"
    }
  ],

  // Sister Species Culinary Mapping (covers all 55 edible species)
  sisterSpeciesCookingMap: {
  "craterellus_lutescens": "craterellus_tubaeformis",
  "cantharellus_amethysteus": "cantharellus_cibarius",
  "boletus_reticulatus": "boletus_edulis",
  "suillus_luteus": "boletus_edulis",
  "suillus_variegatus": "boletus_edulis",
  "suillus_bovinus": "boletus_edulis",
  "suillus_grevillei": "boletus_edulis",
  "leccinum_vulpinum": "leccinum_versipelle",
  "leccinum_aurantiacum": "leccinum_versipelle",
  "leccinum_scabrum": "leccinum_versipelle",
  "leccinum_variicolor": "leccinum_versipelle",
  "hydnum_rufescens": "hydnum_repandum",
  "lactarius_trivialis": "lactarius_torminosus",
  "lactarius_utilis": "lactarius_torminosus",
  "lactarius_necator": "lactarius_rufus",
  "lactarius_mammosus": "lactarius_rufus",
  "lactarius_deterrimus": "lactarius_deliciosus",
  "lactarius_volemus": "lactarius_deliciosus",
  "russula_paludosa": "russula_decolorans",
  "russula_claroflava": "russula_decolorans",
  "russula_aeruginea": "russula_decolorans",
  "russula_cyanoxantha": "russula_decolorans",
  "russula_vesca": "russula_decolorans",
  "russula_xerampelina": "russula_decolorans",
  "russula_vinosa": "russula_decolorans",
  "russula_integra": "russula_decolorans",
  "albatrellus_confluens": "albatrellus_ovinus",
  "laetiporus_sulphureus": "albatrellus_ovinus",
  "tricholoma_matsutake": "boletus_edulis",
  "tricholoma_portentosum": "cortinarius_caperatus",
  "macrolepiota_procera": "albatrellus_ovinus",
  "agaricus_arvensis": "cantharellus_cibarius",
  "agaricus_silvaticus": "cantharellus_cibarius",
  "coprinus_comatus": "cantharellus_cibarius",
  "infundibulicybe_geotropa": "cortinarius_caperatus",
  "clitocybe_nebularis": "lactarius_rufus",
  "marasmius_oreades": "craterellus_tubaeformis",
  "armillaria_mellea": "leccinum_versipelle",
  "kuehneromyces_mutabilis": "craterellus_tubaeformis",
  "calvatia_gigantea": "albatrellus_ovinus",
  "lycoperdon_perlatum": "cantharellus_cibarius"
},

  // Canonical Video Masterclasses & Tutorials Catalog (28 curated videos)
  culinaryVideoCatalog: [
  {
    "id": "haudutus_omassa_liemessa",
    "url": "https://www.youtube.com/watch?v=RQd0Mli8SZc",
    "videoId": "RQd0Mli8SZc",
    "tradition": "fi",
    "categories": [
      "finnish",
      "chanterelle",
      "bolete"
    ],
    "speciesId": "cantharellus_cibarius",
    "creator": "Martat / Nordic Kitchen",
    "duration": "3:15",
    "title": {
      "en": "Sautéing Wild Mushrooms in Natural Juices (Haudutus omassa liemessä)",
      "zh": "芬兰传统自身汁液慢焖出水法（无油干锅慢煸锁鲜）",
      "fi": "Sienien haudutus omassa liemessään ilman rasvaa (Martat)"
    },
    "desc": {
      "en": "The foundational Nordic technique for Chanterelles, Hedgehog mushrooms, and Boletes before frying or freezing.",
      "zh": "芬兰料理鸡油菌、齿菌与牛肝菌的黄金准则：干锅受热析出鲜美原汤，收汁或连汤冷冻。",
      "fi": "Perinteinen suomalainen esikäsittelytapa ennen paistamista tai pakastamista."
    }
  },
  {
    "id": "ryoppays_parboiling",
    "url": "https://www.youtube.com/watch?v=6F67wBKOv0c",
    "videoId": "6F67wBKOv0c",
    "tradition": "fi",
    "categories": [
      "finnish",
      "milkcap"
    ],
    "speciesId": "lactarius_torminosus",
    "creator": "Martat",
    "duration": "4:12",
    "title": {
      "en": "The Science of Parboiling Acrid Milkcaps (Ryöppäys)",
      "zh": "白汁乳菇科学沸水焯水脱毒去辣标准流程（Martat官方教学）",
      "fi": "Kirpeiden rouskujen oikeaoppinen ryöppäys (Martat)"
    },
    "desc": {
      "en": "How to extract bitter sesquiterpene resins from Woolly Milkcaps in boiling water.",
      "zh": "大锅沸水滚煮10-15分钟去除白绒乳菇辛辣树脂毒素，彻底冲凉冲洗排毒。",
      "fi": "Poista polttavan kirpeät makuaineet ja valmista rouskut turvallisesti ruuaksi."
    }
  },
  {
    "id": "kantarellikastike_cream_sauce",
    "url": "https://www.youtube.com/watch?v=0TysiLgHhd4",
    "videoId": "0TysiLgHhd4",
    "tradition": "fi",
    "categories": [
      "finnish",
      "chanterelle"
    ],
    "speciesId": "cantharellus_cibarius",
    "creator": "Finnish Forest Cuisine",
    "duration": "5:20",
    "title": {
      "en": "Classic Finnish Chanterelle Cream Sauce (Kermainen kantarellikastike)",
      "zh": "经典北欧奶油鸡油菌浓汁制作配新土豆",
      "fi": "Kermainen kantarellikastike uusien perunoiden kera"
    },
    "desc": {
      "en": "Golden chanterelles sautéed in butter with shallots, heavy cream (kuohukerma), and fresh dill.",
      "zh": "黄油煸透金黄鸡油菌，倒入高脂鲜奶油慢煨挂勺，撒新鲜莳萝碎浇在新土豆上。",
      "fi": "Perinteinen kermainen kastike voissa paistetuista keltavahveroista ja tillistä."
    }
  },
  {
    "id": "kantarellikastike_traditional",
    "url": "https://www.youtube.com/watch?v=JBj7XznS8fU",
    "videoId": "JBj7XznS8fU",
    "tradition": "fi",
    "categories": [
      "finnish",
      "chanterelle"
    ],
    "speciesId": "cantharellus_cibarius",
    "creator": "Nordic Chef",
    "duration": "3:48",
    "title": {
      "en": "Traditional Finnish Chanterelle Cream Sauce (Kantarellikastike)",
      "zh": "经典芬兰传统奶油鸡油菌浓汁制作教程",
      "fi": "Perinteisen kermaisen kantarellikastikkeen valmistus"
    },
    "desc": {
      "en": "Pan-crisped chanterelles folded into reduced cream sauce with sea salt and white pepper.",
      "zh": "干炒收汁后加黄油慢炒至金黄微焦，加入浓奶油调味出锅。",
      "fi": "Kullanruskeaksi paistetut kantarellit pehmeässä kermakastikkeessa."
    }
  },
  {
    "id": "perinteinen_sienisalaatti",
    "url": "https://www.youtube.com/watch?v=RQR7FLnapZo",
    "videoId": "RQR7FLnapZo",
    "tradition": "fi",
    "categories": [
      "finnish",
      "milkcap"
    ],
    "speciesId": "lactarius_torminosus",
    "creator": "Martat / Suomalainen Perinne",
    "duration": "4:05",
    "title": {
      "en": "Traditional Finnish Salted Milkcap Salad (Perinteinen sienisalaatti)",
      "zh": "传统芬兰酸奶油腌乳菇沙拉（圣诞经典冷盘冷调法）",
      "fi": "Perinteinen suomalainen sienisalaatti suolasienistä"
    },
    "desc": {
      "en": "Desalted parboiled milkcaps folded with red onions, 42% fat smetana, and white pepper.",
      "zh": "焯水盐渍乳菇切3毫米碎丁，与紫洋葱碎拌入打滑的芬兰高脂Smetana酸奶油，抹黑麦面包食用。",
      "fi": "Hienonnettua suolasientä, punasipulia ja aitoa smetanaa ruisleivän päälle."
    }
  },
  {
    "id": "martat_salting_milkcaps",
    "url": "https://www.youtube.com/watch?v=tL8_h3I0bC4",
    "videoId": "tL8_h3I0bC4",
    "tradition": "fi",
    "categories": [
      "finnish",
      "milkcap"
    ],
    "speciesId": "lactarius_rufus",
    "creator": "Martat",
    "duration": "6:15",
    "title": {
      "en": "Official Finnish Guide: Parboiling & Salting Forest Milkcaps (Martat)",
      "zh": "芬兰Martat权威教学：森林红乳菇焯水脱苦与传统盐渍法（Suolasienet）",
      "fi": "Rouskujen ryöppäys ja suolaus talven varalle (Martat)"
    },
    "desc": {
      "en": "The complete winter preservation guide: layering boiled milkcaps with coarse sea salt in jars.",
      "zh": "芬兰家庭传统冬储全流程：大锅滚煮10分钟过凉挤干，按比例分层铺粗海盐入罐压实冷藏。",
      "fi": "Kattava opas rouskujen esikäsittelyyn ja suolasienien valmistukseen lasipurkkiin."
    }
  },
  {
    "id": "suppilovahverokeitto_soup",
    "url": "https://www.youtube.com/watch?v=-fyPqfJxX5s",
    "videoId": "-fyPqfJxX5s",
    "tradition": "fi",
    "categories": [
      "finnish",
      "soup",
      "chanterelle"
    ],
    "speciesId": "craterellus_tubaeformis",
    "creator": "Sipoo Forest Kitchen",
    "duration": "5:45",
    "title": {
      "en": "Sipoonkorpi Funnel Chanterelle Soup with Smoked Cheese (Suppilovahverokeitto)",
      "zh": "西波森林漏斗鸡油菌烟熏奶酪浓汤（干鲜皆宜秋冬暖胃极品）",
      "fi": "Samettinen suppilovahverokeitto Koskenlaskija-savujuustolla"
    },
    "desc": {
      "en": "Velvety forest soup with funnel chanterelles, broth, cream, and melting Finnish Koskenlaskija smoked cheese.",
      "zh": "黄油炒香漏斗鸡油菌与百里香，注入高汤与鲜奶油，融化芬兰传统烟熏奶酪，配酸面包绝配。",
      "fi": "Klassikkokeitto tuoreista tai kuivatuista suppilovahveroista ja savusulatejuustosta."
    }
  },
  {
    "id": "black_trumpet_soup_drying",
    "url": "https://www.youtube.com/watch?v=hepze8cMwVo",
    "videoId": "hepze8cMwVo",
    "tradition": "fi",
    "categories": [
      "finnish",
      "soup",
      "chanterelle"
    ],
    "speciesId": "craterellus_cornucopioides",
    "creator": "Nordic Forager Kitchen",
    "duration": "4:32",
    "title": {
      "en": "Black Trumpet Mushroom Soup & Dehydration Cooking (Mustatorvisieni)",
      "zh": "黑号角菇（黑喇叭菌）浓汤烹制与风干脱水食用技巧",
      "fi": "Mustatorvisienikeitto ja kuivatun torvisienen käyttö"
    },
    "desc": {
      "en": "How to properly dry black trumpets and rehydrate them into the ultimate truffle-like mushroom velouté.",
      "zh": "北欧森林黑松露之称：45度低温烘干长期储存，温水泡发后菌汤极浓郁，做高汤或浓汤极鲜。",
      "fi": "Metsän mustan kullan kuivaaminen ja hyödyntäminen aromaattisissa keitoissa."
    }
  },
  {
    "id": "hedgehog_pan_fry",
    "url": "https://www.youtube.com/watch?v=BqxMFHyYvOQ",
    "videoId": "BqxMFHyYvOQ",
    "tradition": "fi",
    "categories": [
      "finnish",
      "chanterelle"
    ],
    "speciesId": "hydnum_repandum",
    "creator": "Nordic Outdoor Cooking",
    "duration": "4:18",
    "title": {
      "en": "Cleaning & Pan-Frying Hedgehog Mushrooms (Vaaleaorakas)",
      "zh": "卷缘齿菌（白刺儿菜）清洁与黄油香煎脆菇热三明治 (Vaaleaorakas)",
      "fi": "Vaaleaorakkaan puhdistus ja paistaminen rapeaksi pannulla"
    },
    "desc": {
      "en": "How to brush off fragile spines, sweat in dry pan, and crisp up in salted butter for open-face sandwiches.",
      "zh": "刷理脆弱菌刺技巧，干锅慢煸出清汤收干，加黄油大火煎脆，肉质紧密爽脆。",
      "fi": "Murean ja kiinteän orakkaan esikäsittely ja paistaminen voissa leivän päälle."
    }
  },
  {
    "id": "bolete_garlic_butter_pan_sear",
    "url": "https://www.youtube.com/watch?v=XWB5C1ludQc",
    "videoId": "XWB5C1ludQc",
    "tradition": "fi",
    "categories": [
      "finnish",
      "bolete"
    ],
    "speciesId": "boletus_edulis",
    "creator": "Nordic / Asian Forest Cooking",
    "duration": "4:40",
    "title": {
      "en": "How to Clean & Pan-Sear Fresh Porcini in Garlic Butter (Herkkutatti)",
      "zh": "鲜采牛肝菌（美味牛肝菌）处理与大蒜黄油香煎法 / 中式炒肉丝",
      "fi": "Tuoreen herkkutatin paistaminen valkosipulivoissa pannulla"
    },
    "desc": {
      "en": "Thick porcini slices seared in brown butter and garlic until nutty and caramelized.",
      "zh": "美味牛肝菌切厚片，热黄油大蒜大火快煎出坚果香气，边缘微焦肉质厚实如牛排。",
      "fi": "Pähkinäisen aromikas herkkutatti paistettuna rapeaksi voissa."
    }
  },
  {
    "id": "pine_bolete_cream_sauce",
    "url": "https://www.youtube.com/watch?v=IGxtCj8ZuFE",
    "videoId": "IGxtCj8ZuFE",
    "tradition": "fi",
    "categories": [
      "finnish",
      "bolete"
    ],
    "speciesId": "boletus_pinophilus",
    "creator": "Suomalainen Eräkokki",
    "duration": "3:50",
    "title": {
      "en": "Cooking Wild Boletes in Butter & Cream (Tattikastike)",
      "zh": "北欧松生牛肝菌黄油奶油浓汁烹饪教学（Tattikastike）",
      "fi": "Herkullinen tattikastike männynherkkutatista ja kermasta"
    },
    "desc": {
      "en": "Rich Finnish sauce made from firm pine boletes simmered in country cream.",
      "zh": "松林红头牛肝菌肉质致密坚实，加黄油慢煸倒入奶油与海盐，浇配烤肉或土豆。",
      "fi": "Männynherkkutatin tiivis malto pääsee oikeuksiinsa kermaisessa tattikastikkeessa."
    }
  },
  {
    "id": "orange_birch_bolete_thorough_cooking",
    "url": "https://www.youtube.com/watch?v=o3XPSC6HKDc",
    "videoId": "o3XPSC6HKDc",
    "tradition": "fi",
    "categories": [
      "finnish",
      "bolete"
    ],
    "speciesId": "leccinum_versipelle",
    "creator": "Suomen Luonto & Martat",
    "duration": "5:10",
    "title": {
      "en": "Thorough Pan-Cooking for Orange Birch Boletes (20-Minute Safety Rule)",
      "zh": "白桦疣柄牛肝菌（红头牛肝菌）识别与必须彻底加热20分钟烹饪演示",
      "fi": "Punikkitattien turvallinen ja perusteellinen kypsennys pannulla"
    },
    "desc": {
      "en": "Mandatory 20-minute cooking technique to eliminate stomach toxins; normal blackening of flesh explained.",
      "zh": "疣柄牛肝菌属含有微毒刺激素，必须切片中火炒透至少20分钟，加热变墨黑为正常酶促反应。",
      "fi": "Punikkitatit vaativat vähintään 15-20 minuutin kypsennyksen vatsakipujen välttämiseksi."
    }
  },
  {
    "id": "saffron_milkcaps_pan_fried",
    "url": "https://www.youtube.com/watch?v=DtfIopmfpic",
    "videoId": "DtfIopmfpic",
    "tradition": "fi",
    "categories": [
      "finnish",
      "milkcap"
    ],
    "speciesId": "lactarius_deliciosus",
    "creator": "Mediterranean & Nordic Wild Kitchen",
    "duration": "3:30",
    "title": {
      "en": "Traditional Pan-Fried Saffron Milkcaps (No Boiling Required)",
      "zh": "经典大蒜欧芹香煎松乳菇做法（严禁焯水！直接下锅香煎脆嫩）",
      "fi": "Männynleppärouskun paistaminen pannulla (ei saa ryöpätä!)"
    },
    "desc": {
      "en": "Orange-milking rousku that should NEVER be parboiled; seared quickly in olive oil or butter with garlic.",
      "zh": "橙乳乳菇是顶级美味菌，绝不可用水焯煮！直接用热黄油加大蒜与洋葱煎透，脆嫩爆汁。",
      "fi": "Herkullinen leppärousku paistetaan suoraan pannulla valkosipulin ja yrttien kera."
    }
  },
  {
    "id": "pan_frying_mild_russula",
    "url": "https://www.youtube.com/watch?v=PvEH3kYOTDQ",
    "videoId": "PvEH3kYOTDQ",
    "tradition": "fi",
    "categories": [
      "finnish"
    ],
    "speciesId": "russula_decolorans",
    "creator": "Metsän Maut",
    "duration": "3:40",
    "title": {
      "en": "Pan-Frying Wild Russula Brittlegills with Onions & Black Pepper",
      "zh": "野采红菇洋葱黑胡椒出汁香煎做法（无需焯水，脆爽清甜）",
      "fi": "Mietoina poimittujen haperoiden paistaminen sipulin kera"
    },
    "desc": {
      "en": "Tasting the sweet crunch of mild brittlegills; cooked gently with diced onions and butter.",
      "zh": "温和红菇（如变黑红菇、美味红菇）肉质脆爽，直接加黄油洋葱碎慢煎，受热变灰黑为天然本色。",
      "fi": "Miedot haperot paistuvat pannulla rapeiksi ilman ryöppäystä."
    }
  },
  {
    "id": "pan_braising_gypsy_mushroom",
    "url": "https://www.youtube.com/watch?v=xZybP1obYFQ",
    "videoId": "xZybP1obYFQ",
    "tradition": "fi",
    "categories": [
      "finnish"
    ],
    "speciesId": "cortinarius_caperatus",
    "creator": "Nordic Gourmet Forager",
    "duration": "4:02",
    "title": {
      "en": "Pan-Braising Fresh Gypsy Mushrooms (Cortinarius caperatus)",
      "zh": "鲜采皱盖罗鳞伞（隐花丝膜菌）慢火焖煎做法（肉质细嫩极品）",
      "fi": "Tuoreen kehnäsienen kypsennys ja paistaminen miedolla lämmöllä"
    },
    "desc": {
      "en": "Gently cooking the tender gypsy mushroom caps in butter, perfect for morning omelettes.",
      "zh": "五星级美味皱盖罗鳞伞，肉质极细嫩芳香，加少许黄油微火香煎，拌入煎蛋或做奶油炖肉极佳。",
      "fi": "Kehnäsieni on viiden tähden ruokasieni, joka paistetaan hellävaraisesti voissa."
    }
  },
  {
    "id": "sheep_polypore_creamy_soup",
    "url": "https://www.youtube.com/watch?v=5oeFlbj43_c",
    "videoId": "5oeFlbj43_c",
    "tradition": "fi",
    "categories": [
      "finnish",
      "soup"
    ],
    "speciesId": "albatrellus_ovinus",
    "creator": "Kokkaa Metsässä",
    "duration": "4:50",
    "title": {
      "en": "Restaurant-Quality Creamy Sheep Polypore Soup & Schnitzel (Lampaankääpä)",
      "zh": "地花孔菌（羊孔菌）经典奶油浓汤与森林素猪排餐厅级烹饪教学",
      "fi": "Ravintolatason kermainen lampaankääpäkeitto ja metsäleikkeet"
    },
    "desc": {
      "en": "How sheep polypore turns canary yellow upon cooking; breaded forest schnitzels and velvety soup.",
      "zh": "肉质致密坚实如肉排，受热变为明亮亮黄色！裹面包屑油炸成香酥“森林素猪排”或慢熬奶油汤。",
      "fi": "Lampaankääpä muuttuu keltaiseksi paistettaessa; leivitetty leike tai samettinen keitto."
    }
  },
  {
    "id": "false_morel_parboiling_detox",
    "url": "https://www.youtube.com/watch?v=kyf3FQOgyKQ",
    "videoId": "kyf3FQOgyKQ",
    "tradition": "fi",
    "categories": [
      "finnish"
    ],
    "speciesId": "gyromitra_esculenta",
    "creator": "Suomen Virallinen Ohjeistus",
    "duration": "6:40",
    "title": {
      "en": "Official Finnish False Morel Double-Parboiling Detoxification & Omelette",
      "zh": "芬兰官方鹿花菌二次沸水焯水脱毒流程与春季滑蛋做法（极度严格）",
      "fi": "Korvasienen virallinen keittäminen kahdesti ja korvasienimuhennos"
    },
    "desc": {
      "en": "Evaporating gyromitrin via twice 5-minute rolling boil in abundant water under ventilation.",
      "zh": "含致命鹿花菌素，必须在通风良好处经两次5分钟大锅沸水滚煮脱毒，彻底冲凉冲洗方可入馔。",
      "fi": "Korvasieni vaatii ehdottoman keittämisen kahdesti runsaassa vedessä hyvällä tuuletuksella."
    }
  },
  {
    "id": "yunnan_chanterelle_stir_fry",
    "url": "https://www.youtube.com/watch?v=9NEKn4yqJvY",
    "videoId": "9NEKn4yqJvY",
    "tradition": "zh",
    "categories": [
      "chinese",
      "chanterelle"
    ],
    "speciesId": "cantharellus_cibarius",
    "creator": "云南妹子啦嘀嗒",
    "duration": "4:29",
    "title": {
      "en": "Yunnan Wild Chanterelle Stir-Fry with Fresh Peppers (Crispy & Tender)",
      "zh": "云南野生鸡油菌青红椒大火爆炒（甜嫩脆滑极下饭）",
      "fi": "Yunnanilainen villien vahveroiden pikapaisto tuoreella chilillä"
    },
    "desc": {
      "en": "High-heat wok searing with wrinkly green chilis and garlic, retaining the natural crunch and sweetness.",
      "zh": "云南地道农家做法：猪油大蒜爆锅，投入撕成条的鸡油菌大火翻炒断生，加青红椒圈激出镬气。",
      "fi": "Korkean lämmön wokki tuoreilla chileillä, valkosipulilla ja rapeilla metsävahveroilla."
    }
  },
  {
    "id": "shangri_la_chanterelle_secrets",
    "url": "https://www.youtube.com/watch?v=oQflKhysm2A",
    "videoId": "oQflKhysm2A",
    "tradition": "zh",
    "categories": [
      "chinese",
      "chanterelle"
    ],
    "speciesId": "cantharellus_cibarius",
    "creator": "美食台 FoodVideo",
    "duration": "2:02",
    "title": {
      "en": "Shangri-La Secrets to Sautéing Wild Forest Chanterelles",
      "zh": "美食台：香格里拉大厨炒新鲜野生林地菌子的独门绝招",
      "fi": "Shangri-Lan mestarin niksit metsävahveroiden paistamiseen"
    },
    "desc": {
      "en": "Masterchef tips from the Tibetan plateau: controlling moisture, pork lard sear, and aromatic garlic.",
      "zh": "香格里拉大厨传授：下锅前控干水分，用自炼猪油锁住菌香，快火猛炒保持脆嫩鲜甜。",
      "fi": "Mestarikokin salaisuudet: kosteuden hallinta ja pikainen paisto."
    }
  },
  {
    "id": "chanterelle_scallop_wok_sear",
    "url": "https://www.youtube.com/watch?v=KYb4HSSahEk",
    "videoId": "KYb4HSSahEk",
    "tradition": "zh",
    "categories": [
      "chinese",
      "chanterelle"
    ],
    "speciesId": "cantharellus_cibarius",
    "creator": "Jenny's Kitchen",
    "duration": "2:24",
    "title": {
      "en": "Wok-Seared Wild Chanterelles with Fresh Sea Scallops & Garlic",
      "zh": "鲜果木香鸡油菌蒜蓉爆炒鲜带子/扇贝（高档粤式海鲜搭配）",
      "fi": "Vahveroiden ja kampasimpukoiden pikapaisto valkosipulilla"
    },
    "desc": {
      "en": "Cantonese seafood pairing: buttery wild chanterelles meeting sweet, seared sea scallops.",
      "zh": "粤菜山海双鲜组合：大火滑炒带子至刚熟，与大蒜爆香的鸡油菌迅速合炒，果香与海鲜甜味完美交融。",
      "fi": "Ylellinen yhdistelmä metsäsieniä ja makeita kampasimpukoita."
    }
  },
  {
    "id": "cantonese_chanterelle_chicken",
    "url": "https://www.youtube.com/watch?v=5VXiFDkb9dk",
    "videoId": "5VXiFDkb9dk",
    "tradition": "zh",
    "categories": [
      "chinese",
      "chanterelle"
    ],
    "speciesId": "cantharellus_cibarius",
    "creator": "飲食男女 大師姐食譜",
    "duration": "2:16",
    "title": {
      "en": "Masterchef Cantonese Wok-Fried Chanterelles with Chicken Fillet",
      "zh": "香港饮食男女大师姐食谱：镬气十足野生鸡油菌炒滑鸡球",
      "fi": "Perinteinen kantonilainen vahvero-kanawokki"
    },
    "desc": {
      "en": "Classic Hong Kong wok dish: velvet chicken fillet combined with aromatic forest chanterelles.",
      "zh": "香港大师姐经典配方：嫩滑鸡球提前腌渍过油，大火热锅爆香姜蒜与鸡油菌，镬气扑鼻鲜嫩下饭。",
      "fi": "Kantonilainen mestariresepti mehevällä kanalla ja metsäsienillä."
    }
  },
  {
    "id": "chanterelle_chicken_broth",
    "url": "https://www.youtube.com/watch?v=OIByq7YxNdg",
    "videoId": "OIByq7YxNdg",
    "tradition": "zh",
    "categories": [
      "chinese",
      "soup",
      "chanterelle"
    ],
    "speciesId": "cantharellus_cibarius",
    "creator": "品味食間 Taste Food time",
    "duration": "4:16",
    "title": {
      "en": "Nourishing Slow-Simmered Chicken Broth with Forest Chanterelles",
      "zh": "古法慢火清炖野生鸡油菇土鸡汤（果香清甜、暖胃滋补）",
      "fi": "Mieto ja aromaattinen villivahvera-kanaliemi"
    },
    "desc": {
      "en": "Gentle double-boiled soup extracting deep golden umami from wild chanterelles and free-range chicken.",
      "zh": "将鸡块焯水后与姜片慢炖出清汤，出锅前20分钟投入鲜鸡油菌，汤色金黄清澈，果香清甜滋润。",
      "fi": "Pitkään haudutettu kirkas kanaliemi villivahveroilla."
    }
  },
  {
    "id": "nordic_chanterelle_soup_chinese_touch",
    "url": "https://www.youtube.com/watch?v=BQxezCwNZ98",
    "videoId": "BQxezCwNZ98",
    "tradition": "zh",
    "categories": [
      "chinese",
      "soup",
      "chanterelle"
    ],
    "speciesId": "craterellus_tubaeformis",
    "creator": "優視 • 美食頻道",
    "duration": "6:31",
    "title": {
      "en": "Nordic Wild Chanterelle Velouté Soup with Chinese Culinary Touch",
      "zh": "北欧秋季经典野采鸡油菌/漏斗菌浓汤制作（全中文讲解家庭版）",
      "fi": "Pohjoismainen vahverokeitto kiinalaisella otteella"
    },
    "desc": {
      "en": "A bilingual cooking walkthrough explaining how to master Finnish wild mushroom soup in a Chinese kitchen.",
      "zh": "华人家庭在芬兰实拍：从林间采回漏斗鸡油菌，用中式灶具做出餐厅级丝滑鲜美菌菇浓汤。",
      "fi": "Kotikokin kattava suomenkielinen/kiinankielinen opastus vahverokeiton tekoon."
    }
  },
  {
    "id": "bolete_garlic_chili_stir_fry",
    "url": "https://www.youtube.com/watch?v=zBrJFnXTMcQ",
    "videoId": "zBrJFnXTMcQ",
    "tradition": "zh",
    "categories": [
      "chinese",
      "bolete"
    ],
    "speciesId": "boletus_edulis",
    "creator": "Lily's Meals",
    "duration": "3:29",
    "title": {
      "en": "Classic Stir-Fried Boletes with Garlic & Chili (Forest Aroma)",
      "zh": "经典蒜片青椒干椒爆炒牛肝菌（原汁原味释放山野鲜香）",
      "fi": "Herkkutattien pikapaisto valkosipulilla ja chilillä"
    },
    "desc": {
      "en": "The definitive Yunnan technique for fresh porcini: abundant garlic slices, mild chilis, and searing heat.",
      "zh": "爆炒牛肝菌灵魂搭配：大蒜必须切厚片下重手，加干辣椒爆香，大火将牛肝菌炒熟透，滑嫩腴美无比。",
      "fi": "Runsaasti valkosipulia ja mietoa chiliä – tattien paras aasialainen valmistustapa."
    }
  },
  {
    "id": "bolete_spiced_oil_confit",
    "url": "https://www.youtube.com/watch?v=-H_7xTFu8Ls",
    "videoId": "-H_7xTFu8Ls",
    "tradition": "zh",
    "categories": [
      "chinese",
      "bolete"
    ],
    "speciesId": "boletus_edulis",
    "creator": "兑兑 Duidui in Finland",
    "duration": "5:31",
    "title": {
      "en": "Finnish Forest Foraging: Chinese Spiced Oil-Preserved Boletes",
      "zh": "芬兰森林采摘野味：中式香料油浸野生牛肝菌与保存法（极品拌面菌油）",
      "fi": "Suomalaisten tattien säilöntä mausteöljyssä (kiinalainen öljykonfitti)"
    },
    "desc": {
      "en": "Foraged porcini cooked gently in aromatics and vegetable oil to create an umami mushroom oil that keeps for months.",
      "zh": "赫尔辛基林间鲜采牛肝菌切丁，配八角、花椒、红葱头慢火熬制出金黄菌油，拌面拌饭香绝全家。",
      "fi": "Miedolla lämmöllä öljyssä kypsennetyt herkkutatit ja aromikas sieniöljy säilyvät kuukausia."
    }
  },
  {
    "id": "bolete_clear_chicken_soup",
    "url": "https://www.youtube.com/watch?v=BSvep9GRHlg",
    "videoId": "BSvep9GRHlg",
    "tradition": "zh",
    "categories": [
      "chinese",
      "soup",
      "bolete"
    ],
    "speciesId": "boletus_edulis",
    "creator": "Shirley的快乐厨房",
    "duration": "4:16",
    "title": {
      "en": "Nourishing Clear Chicken Broth with Wild Boletes (Porcini Soup)",
      "zh": "原汁原味牛肝菌清炖土鸡汤（汤色清亮醇厚、鲜香甘润）",
      "fi": "Kirkas herkkutatti-kanaliemi (terveellinen keitto)"
    },
    "desc": {
      "en": "Pure, comforting broth pairing whole wild boletes with simmering chicken, red dates, and ginger.",
      "zh": "无需复杂香料，优质牛肝菌配母鸡慢火炖出琥珀色高汤，汤鲜味醇，菇体吸饱肉汁软糯甘甜。",
      "fi": "Herkkutattien täyteläinen umami korostuu haudutetussa kanaliemessä."
    }
  },
  {
    "id": "yunnan_ham_bolete_claypot_rice",
    "url": "https://www.youtube.com/watch?v=PmO9194VTnw",
    "videoId": "PmO9194VTnw",
    "tradition": "zh",
    "categories": [
      "chinese",
      "bolete"
    ],
    "speciesId": "boletus_edulis",
    "creator": "三妹妹厨房",
    "duration": "3:59",
    "title": {
      "en": "Yunnan Cured Ham & Wild Bolete Braised Fragrant Rice",
      "zh": "云南经典火腿鸡肉牛肝菌焖饭（米粒吸饱山珍浓郁鲜味）",
      "fi": "Kinkku-tattipataruoka riisillä (perinteinen saviruoka)"
    },
    "desc": {
      "en": "Rice cooked directly with seared porcini, cured ham cubes, and chicken fat in a clay pot for crispy crust.",
      "zh": "牛肝菌丁与咸香云腿先在锅中煸出油脂，倒入大米中火焖煮，锅底结出焦脆金黄饭焦，满屋生香。",
      "fi": "Riisipata, jossa herkkutatit ja suolainen kinkku maustavat riisin rapeaksi."
    }
  },
  {
    "id": "five_master_secrets_stir_frying_boletes",
    "url": "https://www.youtube.com/watch?v=c_KosrETlbs",
    "videoId": "c_KosrETlbs",
    "tradition": "zh",
    "categories": [
      "chinese",
      "bolete"
    ],
    "speciesId": "boletus_edulis",
    "creator": "美食台 FoodVideo",
    "duration": "2:54",
    "title": {
      "en": "5 Master Secrets to Stir-Frying Wild Boletes (FoodVideo)",
      "zh": "美食台：特级大厨秘传炒出完美野生牛肝菌的5大诀窍",
      "fi": "Viisi keittiömestarin salaisuutta tattien paistamiseen"
    },
    "desc": {
      "en": "Crucial professional rules: heat control, slicing thickness, cooking thoroughly, and umami pairing.",
      "zh": "资深主厨传授：为什么大火热锅是关键、蒜片为何必不可少、彻底熟透的黄金翻炒时间节点。",
      "fi": "Ammattikokin vinkit: lämmönsäätö, viipalointipaksuus ja kypsyysaika."
    }
  }
]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { I18N };
}
