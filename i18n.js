// Trilingual Internationalization Database (English, 中文, Suomi)
// Helsinki Wild Mushroom Foraging Guide

const I18N = {
  // Current active language (default to 'en')
  currentLang: "en",

  // UI Strings
  ui: {
    en: {
      siteBadge: "🇫🇮 Helsinki & Uusimaa Mycological Companion",
      siteTitle: "Helsinki Wild Mushroom Guide",
      siteSubtitle: "A definitive, safety-first field guide for foraging wild mushrooms across the hemiboreal spruce, pine, and deciduous forests of the Helsinki Metropolitan Area.",
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
      readRecipe: "View Recipe & Steps",
      prepTime: "Prep:",
      cookTime: "Cook:",
      servings: "Servings:",
      footerNote: "Helsinki Mushroom Foraging Companion • Built for local biodiversity and safe foraging in Uusimaa.",
      footerDisclaimer: "Always verify specimens with 100% certainty before consumption. Emergency: 112 • Poison Center: 0800 147 111."
    },
    zh: {
      siteBadge: "🇫🇮 芬兰赫尔辛基与乌西玛大区野生真菌野外手册",
      siteTitle: "赫尔辛基野生蘑菇采摘与鉴别指南",
      siteSubtitle: "专为大赫尔辛基地区针阔混交林生态定制的权威安全野外采摘指南，收录22种常见食用菌与致命毒菇，提供公交路线、防毒鉴别与中西烹饪秘籍。",
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
      odorLabel: "气味气味:",
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
      readRecipe: "查看烹饪步骤",
      prepTime: "准备时间:",
      cookTime: "烹饪时间:",
      servings: "分量:",
      footerNote: "赫尔辛基野外采菇指南 • 旨在促进当地生物多样性认知与安全森林采摘实践。",
      footerDisclaimer: "入口前必须有100%的鉴别把握！若有丝毫疑虑严禁食用。芬兰急救电话：112 • 芬兰中毒中心：0800 147 111。"
    },
    fi: {
      siteBadge: "🇫🇮 Helsingin ja Uudenmaan sienestäjän maasto-opas",
      siteTitle: "Helsingin Paikallinen Sieniopas",
      siteSubtitle: "Kattava, turvallisuuslähtöinen opas villisienestämiseen pääkaupunkiseudun ja Uudenmaan havumetsissä, lehtometsissä ja kankailla.",
      emergencyTitle: "Epäiletkö sienimyrkytystä? Soita Myrkytystietokeskukseen",
      emergencySubtitle: "Maksuton 24/7-neuvonta koko maassa: 0800 147 111 • Yleinen hätänumero: 112",
      callPoison: "📞 Soita 0800 147 111",
      call112: "🚨 Soita 112",
      tabCatalog: "🍄 Lajitunnistus (22 lajia)",
      tabLookalikes: "⚖️ Näköislajivertailu",
      tabCooking: "🍳 Käsittely & Reseptit",
      tabSpots: "🚌 HSL-sienipaikat",
      tabSafety: "🛡️ Turvallisuus & Jokamiehenoikeus",
      searchPlaceholder: "Etsi suomeksi (esim. kantarelli), tieteellisellä nimellä, piirteillä...",
      skillLevelLabel: "Taitotaso:",
      monthFilterLabel: "Satosenssi (kk):",
      allLevels: "Kaikki lajit",
      beginnerLevel: "Helpot ruokasienet",
      intermediateLevel: "Keskitaso",
      advancedLevel: "Vaativat / Ryöpättävät",
      deadlyLevel: "Tappavan myrkylliset",
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
      readRecipe: "Katso valmistusohje",
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

  // Species Data (Trilingual Content)
  species: [
    {
      id: "cantharellus_cibarius",
      latinName: "Cantharellus cibarius",
      image: "./images/cantharellus_cibarius.jpg",
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
      image: "./images/craterellus_tubaeformis.jpg",
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
      image: "./images/hydnum_repandum.jpg",
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
      image: "./images/craterellus_cornucopioides.jpg",
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
      image: "./images/boletus_edulis.jpg",
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
      image: "./images/boletus_pinophilus.jpg",
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
      image: "./images/amanita_virosa.jpg",
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
      image: "./images/cortinarius_rubellus.jpg",
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
      image: "./images/galerina_marginata.jpg",
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
      image: "./images/gyromitra_esculenta.jpg",
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
      image: "./images/paxillus_involutus.jpg",
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
      image: "./images/lactarius_torminosus.jpg",
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
      image: "./images/lactarius_rufus.jpg",
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
      image: "./images/lactarius_deliciosus.jpg",
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
      image: "./images/russula_decolorans.jpg",
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
      image: "./images/russula_emetica.jpg",
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
      image: "./images/cortinarius_caperatus.jpg",
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
      image: "./images/albatrellus_ovinus.jpg",
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
      image: "./images/leccinum_versipelle.jpg",
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
      image: "./images/hygrophoropsis_aurantiaca.jpg",
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
      image: "./images/tylopilus_felleus.jpg",
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
      image: "./images/amanita_muscaria.jpg",
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
          content: "The authentic Finnish prep method for Chanterelles, Hedgehog mushrooms, and Boletes: Slice cleaned mushrooms into a wide dry pan over medium heat with NO fat. As heat activates cellular enzymes, mushrooms weep their fragrant broth. Simmer until the juices reduce by half, then freeze with the broth or add butter to crisp up."
        },
        {
          title: "3. The Science of Parboiling (Ryöppäys)",
          content: "Certain milkcaps (e.g. Woolly Milkcap / Karvarousku, Rufous Milkcap / Kangasrousku) contain acrid sesquiterpene resins that cause severe stomach irritation. Boil them for 10–15 minutes in copious boiling water (3L per 1kg mushrooms). Flush with cold water and discard the boiling water completely."
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
          content: "芬兰处理鸡油菌、牛肝菌、齿菌的黄金准则：净菇切片，干锅不放任何油，中火加热，菇体会自然析出大量鲜美原汤。待原汁收至一半，即可连汤分装冷冻保存1年；若当顿享用，待汁干时下黄油中火煎至边缘微焦。"
        },
        {
          title: "三、科学焯水杀青去辣（Ryöppäys）",
          content: "白绒乳菇（Karvarousku）与红乳菇（Kangasrousku）等含有辛辣树脂毒素，生食会引发剧烈胃绞痛。必须在大锅沸水（1公斤菇配3升水）中滚煮10-15分钟，捞出后用大量冷水冲凉冲洗，焯菇水含有溶出毒素必须倒弃！"
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
          content: "Kantarellien, herkkutattien ja vaaleaorakkaiden paras käsittelytapa: paloittele sienet kuivalle kuumalle pannulle ilman rasvaa. Kuumuus saa sienet luovuttamaan oman aromaattisen liemensä. Hauduta, kunnes neste puolittuu. Pakasta liemineen tai lisää voi ja paista rapeaksi."
        },
        {
          title: "3. Ryöppäyksen merkitys (Keittäminen)",
          content: "Kirpeät rouskut (karvarousku, kangasrousku) sisältävät polttavia hartsiaineita. Ne on keitettävä runsaassa vedessä 10–15 minuuttia. Huuhtele kylmällä vedellä ja heitä keitinvesi aina pois."
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
  ]
};
