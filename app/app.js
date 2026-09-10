// Helsinki Mushroom Foraging Field Companion Application Logic

const MUSHROOMS = [
  {
    id: "cantharellus_cibarius",
    finnishName: "Keltavahvero (Kantarelli)",
    latinName: "Cantharellus cibarius",
    englishName: "Golden Chanterelle",
    swedishName: "Kantarell",
    rating: "***",
    edibility: "choice",
    level: "beginner",
    habitat: "spruce",
    habitatName: "Tuore kangas (Spruce-birch moss paths)",
    months: [7, 8, 9, 10],
    image: "../images/cantharellus_cibarius.jpg",
    cap: "3–10 cm, golden egg-yellow, wavy irregular lobed margin",
    underCap: "False gills (poimut): thick, blunt, branching vein-like ridges running down stem",
    stem: "Solid, firm, yellow, tapering toward base",
    flesh: "Meaty, fibrous, pale yellowish-white, never hollow",
    odor: "Distinct fruity fragrance like ripe apricots",
    culinaryTip: "Sauté dry first to release juices, then cook with butter and cream. Never dehydrate!",
    lookalike: "Hygrophoropsis aurantiaca (False Chanterelle) has sharp knife-thin gills and orange tone."
  },
  {
    id: "craterellus_tubaeformis",
    finnishName: "Suppilovahvero",
    latinName: "Craterellus tubaeformis",
    englishName: "Funnel Chanterelle / Yellow Foot",
    swedishName: "Trattkantarell",
    rating: "***",
    edibility: "choice",
    level: "beginner",
    habitat: "spruce",
    habitatName: "Tuore kangas (Deep moist spruce moss)",
    months: [9, 10, 11],
    image: "../images/craterellus_tubaeformis.jpg",
    cap: "2–6 cm, yellow-brown to grey-brown, central hole opening into hollow stem",
    underCap: "Blunt, branched greyish-yellow ridges running down stem",
    stem: "3–8 cm, golden-yellow to orange-yellow, completely HOLLOW like a straw",
    flesh: "Thin, elastic, yellowish",
    odor: "Pleasant, earthy, fruity and slightly peppery",
    culinaryTip: "Superb for dehydrating at 40°C. Thrives through autumn frosts into November.",
    warning: "Check each specimen individually to ensure hollow yellow stem (never solid cinnamon stem of Deadly Webcap)."
  },
  {
    id: "hydnum_repandum",
    finnishName: "Vaaleaorakas",
    latinName: "Hydnum repandum",
    englishName: "Wood Hedgehog",
    swedishName: "Blek taggsvamp",
    rating: "***",
    edibility: "choice",
    level: "beginner",
    habitat: "spruce",
    habitatName: "Tuore kangas (Mossy spruce hollows)",
    months: [8, 9, 10],
    image: "../images/hydnum_repandum.jpg",
    cap: "5–15 cm, ivory to pale cream-biscuit, thick, undulating",
    underCap: "Dense, fragile soft SPINES (orakset) 2–6 mm, easily brushed off",
    stem: "Sturdy, solid, off-white, chalky snap",
    flesh: "Crisp, white, snaps cleanly, bruising slowly yellowish-orange",
    odor: "Fresh, pleasant, slightly peppery in age",
    culinaryTip: "Zero poisonous lookalikes with spines under cap! Almost never maggot-infested.",
    lookalike: "Hydnum rufescens (Rusko-orakas) is smaller and terracotta-red, equally choice edible."
  },
  {
    id: "craterellus_cornucopioides",
    finnishName: "Mustatorvisieni",
    latinName: "Craterellus cornucopioides",
    englishName: "Black Trumpet / Horn of Plenty",
    swedishName: "Svart trumpetsvamp",
    rating: "***",
    edibility: "choice",
    level: "beginner",
    habitat: "deciduous",
    habitatName: "Lehto (Deciduous groves under hazel & oak)",
    months: [8, 9, 10],
    image: "../images/craterellus_cornucopioides.jpg",
    cap: "3–8 cm wide, thin, deeply funnel-shaped trumpet flaring at rim",
    underCap: "Smooth to gently wrinkled, ash-grey; no gills, pores, or spines",
    stem: "Continuous hollow horn merging with cap, soot-black to dark grey",
    flesh: "Thin, pliable, dry, dark grey",
    odor: "Intense, perfumed, floral and truffle-like",
    culinaryTip: "The 'black truffle of the North'. Outstanding when dried and powdered into sauces.",
    lookalike: "Zero poisonous lookalikes. Unmistakable dark horn."
  },
  {
    id: "boletus_edulis",
    finnishName: "Herkkutatti (Kivitatti)",
    latinName: "Boletus edulis",
    englishName: "King Bolete / Porcini / Penny Bun",
    swedishName: "Karljohan / Stensopp",
    rating: "***",
    edibility: "choice",
    level: "beginner",
    habitat: "spruce",
    habitatName: "Tuore kangas (Spruce & mixed woods)",
    months: [8, 9],
    image: "../images/boletus_edulis.jpg",
    cap: "8–25 cm, bun-brown, greasy sheen, smooth convex",
    underCap: "Spongy tubes (pillit): pure white when young, turning yellowish to olive-green",
    stem: "Club-shaped, stout, covered with a fine white raised mesh net on upper half",
    flesh: "Pure white, solid, unchanging when cut (never blues)",
    odor: "Sweet, nutty, fragrant",
    culinaryTip: "Slice and dry for winter risottos or sauté fresh in butter.",
    lookalike: "Tylopilus felleus (Bitter Bolete) has coarse dark net and intensely bitter taste."
  },
  {
    id: "boletus_pinophilus",
    finnishName: "Männynherkkutatti",
    latinName: "Boletus pinophilus",
    englishName: "Pine Bolete",
    swedishName: "Rödbrun stensopp",
    rating: "***",
    edibility: "choice",
    level: "beginner",
    habitat: "pine",
    habitatName: "Kuiva kangas (Sandy pine heaths & lingonberry)",
    months: [7, 8, 9, 10],
    image: "../images/boletus_pinophilus.jpg",
    cap: "8–25 cm, dark mahogany reddish-brown, wrinkled margin",
    underCap: "Pores white then olive-yellow, reddish-brown tint at margin",
    stem: "Massive, bulbous, reddish-brown network pattern",
    flesh: "Solid white, reddish-brown tint directly beneath the cap cuticle",
    odor: "Deep nutty, forest aroma",
    culinaryTip: "Firm, crunchy flesh that holds shape remarkably well in cooking."
  },
  {
    id: "amanita_virosa",
    finnishName: "Valkokärpässieni",
    latinName: "Amanita virosa",
    englishName: "Destroying Angel",
    swedishName: "Vit flugsvamp",
    rating: "☠️☠️☠️",
    edibility: "deadly",
    level: "deadly",
    habitat: "spruce",
    habitatName: "Tuore kangas (Mossy spruce forests)",
    months: [8, 9, 10],
    image: "../images/amanita_virosa.jpg",
    cap: "5–12 cm, pure white, conical-bell shaped expanding with age",
    underCap: "PURE WHITE GILLS, crowded, completely free from stem",
    stem: "Slender white stem with delicate skirt-like ring and shaggy fibers",
    flesh: "White, unchanging",
    odor: "Faint sickly-sweet, unpleasantly cloying or radish-like",
    warning: "DEADLY AMATOXINS. Destroys human liver and kidneys. 6–24h latency before severe symptoms.",
    lookalike: "Do not confuse with Agaricus (edible button mushrooms have brown gills!)."
  },
  {
    id: "cortinarius_rubellus",
    finnishName: "Suippumyrkkyseitikki",
    latinName: "Cortinarius rubellus",
    englishName: "Deadly Webcap",
    swedishName: "Toppig giftspindling",
    rating: "☠️☠️☠️",
    edibility: "deadly",
    level: "deadly",
    habitat: "spruce",
    habitatName: "Tuore kangas / Korpi (Moist spruce moss beside blueberries)",
    months: [8, 9, 10],
    image: "../images/cortinarius_rubellus.jpg",
    cap: "3–8 cm, cinnamon-brown to rusty copper with sharp conical pointed peak",
    underCap: "Broadly spaced rusty-cinnamon gills with cobwebby veil remnants in young caps",
    stem: "Cinnamon-brown with distinctive yellow zigzag bands, solid inside",
    flesh: "Reddish-yellow to pale cinnamon, smell of raw radish",
    odor: "Faint radish or raw turnip",
    warning: "DEADLY ORELLANINE TOXIN. Destroys kidneys permanently. Latency is 2 to 14 days!",
    lookalike: "Grows alongside chanterelles in moss. Always check stems!"
  },
  {
    id: "galerina_marginata",
    finnishName: "Myrkkynääpikkä",
    latinName: "Galerina marginata",
    englishName: "Funeral Bell",
    swedishName: "Gifthätting",
    rating: "☠️☠️☠️",
    edibility: "deadly",
    level: "deadly",
    habitat: "spruce",
    habitatName: "Decaying conifer stumps and fallen logs",
    months: [8, 9, 10, 11],
    image: "../images/galerina_marginata.jpg",
    cap: "1.5–4.5 cm, ochre-brown to watery cinnamon, small bell flattening",
    underCap: "Crowded ochre-brown to rusty gills",
    stem: "Slender, brownish, with small membranous ring and silky silver fibrils below",
    flesh: "Watery brownish, mealy smell",
    odor: "Floury / mealy",
    warning: "DEADLY AMATOXINS (same as Destroying Angel). Grows on rotting conifer wood.",
    lookalike: "Kuehneromyces mutabilis (Koivunkantosieni) has dark shaggy bristles on stem."
  },
  {
    id: "gyromitra_esculenta",
    finnishName: "Korvasieni",
    latinName: "Gyromitra esculenta",
    englishName: "False Morel",
    swedishName: "Stenmurkla",
    rating: "!",
    edibility: "parboil",
    level: "advanced",
    habitat: "pine",
    habitatName: "Disturbed sandy soil, pine clearings",
    months: [5, 6],
    image: "../images/gyromitra_esculenta.jpg",
    cap: "5–12 cm, reddish-brown, convoluted brain-like folds and lobes, hollow chambers",
    underCap: "No true gills/pores; convoluted chambered surface",
    stem: "Short, wrinkled, off-white to purplish-tinted",
    flesh: "Brittle, waxy",
    odor: "Pleasant, rich mushroom fragrance",
    warning: "DEADLY TOXIC RAW (Gyromitrin / MMH). Must be boiled twice in abundant water (5 min each) with open exhaust ventilation.",
    culinaryTip: "Traditional Finnish delicacy, but requires strictly regulated parboiling."
  },
  {
    id: "paxillus_involutus",
    finnishName: "Pulkkosieni",
    latinName: "Paxillus involutus",
    englishName: "Brown Rollrim",
    swedishName: "Pluggskivling",
    rating: "☠️☠️",
    edibility: "deadly",
    level: "deadly",
    habitat: "spruce",
    habitatName: "Parks, birch groves, roadsides, spruce borders",
    months: [7, 8, 9, 10],
    image: "../images/paxillus_involutus.jpg",
    cap: "5–15 cm, ochre-brown to olive-brown with STRONGLY INROLLED velvety margin",
    underCap: "Yellowish-brown gills that bruise dark brown immediately on touch",
    stem: "Thick, brownish, central or off-center",
    flesh: "Pale yellow, browning when cut",
    odor: "Sourish, mushroomy",
    warning: "PAXILLUS SYNDROME. Triggers chronic autoimmune hemolysis destroying red blood cells over time."
  },
  {
    id: "lactarius_torminosus",
    finnishName: "Karvarousku",
    latinName: "Lactarius torminosus",
    englishName: "Woolly Milkcap",
    swedishName: "Skäggriska",
    rating: "!",
    edibility: "parboil",
    level: "intermediate",
    habitat: "spruce",
    habitatName: "Birch stands, forest borders, damp heaths",
    months: [8, 9, 10],
    image: "../images/lactarius_torminosus.jpg",
    cap: "5–12 cm, salmon-pink with concentric darker rings and woolly hairy rolled margin",
    underCap: "Crowded pale pinkish-cream gills exuding white acrid latex",
    stem: "Solid becoming hollow, pale pinkish",
    flesh: "Crisp chalky snap, white latex",
    odor: "Fruity but violently peppery raw",
    culinaryTip: "Must be parboiled for 10-15 minutes. The foundation of Finnish Christmas sienisalaatti!",
    warning: "Do not eat raw; causes severe stomach cramps without parboiling."
  },
  {
    id: "lactarius_rufus",
    finnishName: "Kangasrousku",
    latinName: "Lactarius rufus",
    englishName: "Rufous Milkcap",
    swedishName: "Pepparriska",
    rating: "!",
    edibility: "parboil",
    level: "intermediate",
    habitat: "pine",
    habitatName: "Kuiva kangas (Pine heaths among lingonberry and lichens)",
    months: [8, 9, 10],
    image: "../images/lactarius_rufus.jpg",
    cap: "3–8 cm, terracotta-red to chestnut-brown with sharp central papilla (nypy)",
    underCap: "Pale ochre gills exuding plentiful white milk that burns the throat",
    stem: "Slender, reddish-buff, brittle",
    flesh: "Brittle chalky flesh",
    odor: "Resinous, burning peppery",
    culinaryTip: "Parboil 10 minutes, salt-cure in jars with allspice and sea salt."
  },
  {
    id: "lactarius_deliciosus",
    finnishName: "Männynleppärousku",
    latinName: "Lactarius deliciosus",
    englishName: "Saffron Milkcap",
    swedishName: "Läckerriska",
    rating: "***",
    edibility: "choice",
    level: "intermediate",
    habitat: "pine",
    habitatName: "Young Scots pine stands on gravel/sand",
    months: [8, 9, 10],
    image: "../images/lactarius_deliciosus.jpg",
    cap: "4–12 cm, warm carrot-orange with darker concentric rings, bruising emerald-green",
    underCap: "Vivid orange gills exuding BRIGHT CARROT-ORANGE MILK",
    stem: "Orange with darker pitted depressions, hollow in age",
    flesh: "Orange, slowly greening",
    odor: "Fruity, aromatic",
    culinaryTip: "NO PARBOILING REQUIRED! Pan fry directly in butter with sea salt."
  },
  {
    id: "russula_decolorans",
    finnishName: "Kangashapero",
    latinName: "Russula decolorans",
    englishName: "Copper Brittlegill",
    swedishName: "Tegelkremla",
    rating: "***",
    edibility: "choice",
    level: "intermediate",
    habitat: "pine",
    habitatName: "Kuiva kangas (Pine and spruce heaths with blueberry)",
    months: [8, 9],
    image: "../images/russula_decolorans.jpg",
    cap: "6–12 cm, copper-orange to brick-red, round then flattened",
    underCap: "Creamy-yellow brittle gills, bruising slowly ash-grey when touched",
    stem: "White, turning distinctly grey when bruised or aged",
    flesh: "Brittle chalk-like snap, grey in stem interior",
    odor: "Mild, sweet nutty taste (passes the Russula mildness test)",
    culinaryTip: "Delicious pan-fried with onions; firm texture that holds up well."
  },
  {
    id: "russula_emetica",
    finnishName: "Tulipunahapero",
    latinName: "Russula emetica",
    englishName: "The Sickener",
    swedishName: "Giftkremla",
    rating: "☠️",
    edibility: "inedible",
    level: "intermediate",
    habitat: "spruce",
    habitatName: "Damp moss, sphagnum bogs and spruce borders",
    months: [8, 9, 10],
    image: "../images/russula_emetica.jpg",
    cap: "4–9 cm, brilliant scarlet-red, shiny viscid skin peeling easily",
    underCap: "Pure white brittle gills, never grey or yellow",
    stem: "Pure white, fragile",
    flesh: "White, soft",
    odor: "Fruity scent, but violently peppery on the tongue within 3 seconds",
    warning: "Toxic raw, causes gastrointestinal illness. Fails the Russula taste test."
  },
  {
    id: "cortinarius_caperatus",
    finnishName: "Kehnäsieni",
    latinName: "Cortinarius caperatus",
    englishName: "Gypsy Mushroom",
    swedishName: "Rynkad tofsskivling",
    rating: "***",
    edibility: "choice",
    level: "advanced",
    habitat: "spruce",
    habitatName: "Tuore kangas (Among blueberry bushes in spruce-pine forests)",
    months: [8, 9],
    image: "../images/cortinarius_caperatus.jpg",
    cap: "5–12 cm, straw-yellow with distinct silvery-white frosted coating (kehnä)",
    underCap: "Clay-yellow to cinnamon gills with serrated edges",
    stem: "Stout with distinct membranous yellowish ring on middle stem",
    flesh: "Firm, white to pale yellow",
    odor: "Mild, pleasantly sweet",
    culinaryTip: "Exceptional flavor and texture. Verify silvery frost and membranous ring."
  },
  {
    id: "albatrellus_ovinus",
    finnishName: "Lampaankääpä",
    latinName: "Albatrellus ovinus",
    englishName: "Sheep Polypore",
    swedishName: "Fårticka",
    rating: "***",
    edibility: "choice",
    level: "intermediate",
    habitat: "spruce",
    habitatName: "Mossy spruce heaths, growing terrestrially",
    months: [8, 9, 10],
    image: "../images/albatrellus_ovinus.jpg",
    cap: "6–20 cm, irregular creamy-white, cracking into patches when dry",
    underCap: "Extremely tiny, dense white pore layer running slightly down stem",
    stem: "Short, thick, white",
    flesh: "Solid white; TURNS BRIGHT LEMON-YELLOW WHEN HEATED in a pan!",
    odor: "Pleasant, mild almond-like",
    culinaryTip: "Pan-fry like schnitzel; the lemon-yellow color change confirms identity."
  },
  {
    id: "leccinum_versipelle",
    finnishName: "Koivunpunikkitatti",
    latinName: "Leccinum versipelle",
    englishName: "Orange Birch Bolete",
    swedishName: "Tegelsopp",
    rating: "***",
    edibility: "choice",
    level: "intermediate",
    habitat: "deciduous",
    habitatName: "Birch roots, mixed woodlands, heath edges",
    months: [7, 8, 9, 10],
    image: "../images/leccinum_versipelle.jpg",
    cap: "8–20 cm, vivid brick-orange to apricot, dry suede texture",
    underCap: "Greyish-white pores, bruising brownish-grey",
    stem: "Tall, covered with dense black woolly scales (mustat tupsut)",
    flesh: "Solid white, rapidly staining blue-black when sliced",
    odor: "Mushroomy, pleasant",
    culinaryTip: "MUST BE COOKED THOROUGHLY FOR AT LEAST 15-20 MINUTES to avoid stomach cramps.",
    warning: "Never eat undercooked Leccinum boletes."
  },
  {
    id: "hygrophoropsis_aurantiaca",
    finnishName: "Valekantarelli",
    latinName: "Hygrophoropsis aurantiaca",
    englishName: "False Chanterelle",
    swedishName: "Narrkantarell",
    rating: "*",
    edibility: "inedible",
    level: "beginner",
    habitat: "pine",
    habitatName: "Conifer needle litter, rotting pine bark",
    months: [8, 9, 10, 11],
    image: "../images/hygrophoropsis_aurantiaca.jpg",
    cap: "2–7 cm, bright orange to tawny-orange, soft velvety touch",
    underCap: "THIN, SHARP, CROWDED TRUE GILLS (not blunt ridges like Chanterelle)",
    stem: "Slender, dark orange to brownish-black near base",
    flesh: "Thin, soft, orange, flexible",
    odor: "Indistinct, not fruity",
    culinaryTip: "Not deadly, but bland and leathery; not worth eating."
  },
  {
    id: "tylopilus_felleus",
    finnishName: "Sappitatti",
    latinName: "Tylopilus felleus",
    englishName: "Bitter Bolete",
    swedishName: "Gallsopp",
    rating: "O",
    edibility: "inedible",
    level: "beginner",
    habitat: "spruce",
    habitatName: "Spruce roots, rotting conifer stumps, moss",
    months: [7, 8, 9],
    image: "../images/tylopilus_felleus.jpg",
    cap: "6–15 cm, pale brown, smooth",
    underCap: "White pores that turn DIRTY PINKISH-BROWN in maturity",
    stem: "Prominent, coarse, raised dark brown network pattern",
    flesh: "White, soft, unchanging",
    odor: "Violently bitter on the tongue within 5 seconds",
    culinaryTip: "Inedible. A single bitter bolete will ruin an entire pot of soup."
  },
  {
    id: "amanita_muscaria",
    finnishName: "Punakärpässieni",
    latinName: "Amanita muscaria",
    englishName: "Fly Agaric",
    swedishName: "Röd flugsvamp",
    rating: "☠️",
    edibility: "deadly",
    level: "deadly",
    habitat: "spruce",
    habitatName: "Spruce and birch forests throughout Finland",
    months: [8, 9, 10],
    image: "../images/amanita_muscaria.jpg",
    cap: "8–20 cm, bright scarlet-red with white pyramidal warts",
    underCap: "Pure white gills, crowded, free from stem",
    stem: "Stout white stem with floppy ring and bulbous concentric rings at base",
    flesh: "White, yellowish beneath the red cap skin",
    odor: "Indistinct",
    warning: "POISONOUS. Contains ibotenic acid and muscimol, causing hallucinations, delirium, and severe nausea."
  }
];

const LOOKALIKE_PAIRS = [
  {
    title: "Golden Chanterelle vs. False Chanterelle",
    summary: "The most common confusion for beginners. One is choice gourmet; the other is bland and leathery.",
    edible: {
      name: "Golden Chanterelle (Keltavahvero)",
      sci: "Cantharellus cibarius",
      image: "../images/cantharellus_cibarius.jpg",
      status: "Choice Edible (***)",
      traits: [
        "Underside: Blunt, thick, branching ridges (poimut)",
        "Color: Uniform warm egg-yolk yellow",
        "Flesh: Solid, meaty, dense, pale cream inside",
        "Aroma: Fresh ripe apricots"
      ]
    },
    toxic: {
      name: "False Chanterelle (Valekantarelli)",
      sci: "Hygrophoropsis aurantiaca",
      image: "../images/hygrophoropsis_aurantiaca.jpg",
      status: "Inferior / Inedible (*)",
      traits: [
        "Underside: Thin, knife-sharp, crowded true gills",
        "Color: Vivid fiery orange, darker center",
        "Flesh: Soft, thin, flexible, orange inside",
        "Stem: Slender, often brownish-black at base"
      ]
    }
  },
  {
    title: "Funnel Chanterelle vs. Deadly Webcap",
    summary: "LIFE-SAVING COMPARISON: They share the exact same mossy spruce habitat in Uusimaa.",
    edible: {
      name: "Funnel Chanterelle (Suppilovahvero)",
      sci: "Craterellus tubaeformis",
      image: "../images/craterellus_tubaeformis.jpg",
      status: "Choice Edible (***)",
      traits: [
        "Cap: Trumpet-shaped with deep central hole",
        "Stem: Bright yellow-orange, COMPLETELY HOLLOW tube",
        "Underside: Blunt greyish-yellow ridges",
        "Toxicity: 100% safe, delicious"
      ]
    },
    toxic: {
      name: "Deadly Webcap (Suippumyrkkyseitikki)",
      sci: "Cortinarius rubellus",
      image: "../images/cortinarius_rubellus.jpg",
      status: "DEADLY POISONOUS (☠️☠️☠️)",
      traits: [
        "Cap: Conical with sharp pointed nipple (umbo)",
        "Stem: SOLID cinnamon stem with yellow zigzag bands",
        "Underside: Rusty-brown true gills",
        "Toxicity: ORELLANINE - permanent kidney destruction"
      ]
    }
  },
  {
    title: "King Bolete (Porcini) vs. Bitter Bolete",
    summary: "Bitter bolete is not lethal, but a single piece turns an entire meal unbearably bitter.",
    edible: {
      name: "King Bolete / Porcini (Herkkutatti)",
      sci: "Boletus edulis",
      image: "../images/boletus_edulis.jpg",
      status: "Choice Edible (***)",
      traits: [
        "Pores: White when young, aging to yellow-olive",
        "Stem net: Fine white delicate network on upper stem",
        "Taste: Sweet, nutty, pleasant on tongue",
        "Cut flesh: Solid white, unchanging"
      ]
    },
    toxic: {
      name: "Bitter Bolete (Sappitatti)",
      sci: "Tylopilus felleus",
      image: "../images/tylopilus_felleus.jpg",
      status: "Inedible / Extremely Bitter (O)",
      traits: [
        "Pores: White turning dirty pinkish-brown in age",
        "Stem net: Coarse, prominent, raised dark-brown mesh",
        "Taste: VIOLENTLY BITTER within 5 seconds",
        "Cut flesh: White, occasionally staining faint pink"
      ]
    }
  },
  {
    title: "Copper Brittlegill vs. The Sickener",
    summary: "How to use the Finnish Russula Mildness Test in the field.",
    edible: {
      name: "Copper Brittlegill (Kangashapero)",
      sci: "Russula decolorans",
      image: "../images/russula_decolorans.jpg",
      status: "Choice Edible (***)",
      traits: [
        "Cap: Warm copper-orange to brick red",
        "Stem: White, slowly bruising ash-grey",
        "Flesh: Brittle chalky snap, no milk",
        "Taste test: Mild, sweet, nutty"
      ]
    },
    toxic: {
      name: "The Sickener (Tulipunahapero)",
      sci: "Russula emetica",
      image: "../images/russula_emetica.jpg",
      status: "Toxic Gastrointestinal Irritant (☠️)",
      traits: [
        "Cap: Flaming cherry/scarlet red, shiny skin",
        "Stem: Pure snow white, unchanging",
        "Flesh: Brittle chalky snap, no milk",
        "Taste test: BURNING, intensely peppery within seconds"
      ]
    }
  }
];

const HSL_SPOTS = [
  {
    name: "Keskuspuisto (Paloheinä & Pitkäkoski)",
    municipality: "Helsinki",
    zone: "Zone AB",
    transit: "Bus 66 (Paloheinän maja) or Bus 67 / 560 (Pitkäkoski) from Helsinki Central",
    time: "30–35 min",
    terrain: "Mature spruce, hazelnut groves, river ravines",
    species: ["Funnel Chanterelle", "Porcini", "Black Trumpet", "Chanterelle"],
    tip: "Northernmost sectors (Pitkäkoski nature reserve borders) offer the richest old-growth spruce moss."
  },
  {
    name: "Sipoonkorpi National Park (Kuusijärvi & Bisajärvi)",
    municipality: "Vantaa / Sipoo",
    zone: "Zone B / C",
    transit: "Train K/P to Tikkurila + Bus 736/739 to Kuusijärvi; cross suspension bridge",
    time: "45 min",
    terrain: "Rugged spruce heaths, mossy granite outcrops, bog borders",
    species: ["Funnel Chanterelle (Abundant)", "Porcini", "Hedgehog Mushroom", "Milkcaps"],
    tip: "Prime territory for late-autumn funnel chanterelle carpets around Bisajärvi."
  },
  {
    name: "Nuuksio National Park (Haukkalampi & Kattila)",
    municipality: "Espoo",
    zone: "Zone C",
    transit: "Commuter Train U/E to Espoon keskus + Bus 245/245A to Haukkalammentie / Kattila",
    time: "60 min",
    terrain: "Glacial lakes, steep rocky ravines, spruce-blueberry taiga",
    species: ["Chanterelle", "King Bolete", "Sheep Polypore", "Black Trumpet"],
    tip: "Take Bus 245A to the Kattila terminus for fewer crowds and pristine spruce mires."
  },
  {
    name: "Luukki & Vaakkoi Outdoor Areas",
    municipality: "North Espoo",
    zone: "Zone C",
    transit: "Bus 345 direct from Elielinaukio (Helsinki Central Station)",
    time: "45–55 min",
    terrain: "Deep mossy spruce, forest lakes, undisturbed moss cushions",
    species: ["Hedgehog Mushroom", "Porcini", "Pine Bolete", "Russula"],
    tip: "Often far less crowded than Nuuksio, with enormous beds of Wood Hedgehog mushrooms."
  },
  {
    name: "Petikko & Vestra Woodlands",
    municipality: "Vantaa",
    zone: "Zone B / C",
    transit: "Bus 321 from Elielinaukio or Bus 345 to Askisto edge",
    time: "40 min",
    terrain: "Herb-rich groves (lehto), hazel thickets, moraine slopes",
    species: ["Black Trumpet", "Orange Birch Bolete", "Summer Cep", "Chanterelle"],
    tip: "Look beneath European hazel bushes in August and September for Black Trumpet clusters."
  },
  {
    name: "Uutela Coastal Forest",
    municipality: "East Helsinki",
    zone: "Zone B",
    transit: "Metro to Vuosaari + 15 min scenic walk or Bus 560 to Aurinkolahti",
    time: "35 min",
    terrain: "Maritime Scots pine, rocky bedrock, coastal spruce fringe",
    species: ["Pine Bolete", "Rufous Milkcap", "Chanterelle"],
    tip: "Great quick afternoon excursion easily accessible directly from the metro line."
  }
];

// App State
let currentTab = "catalog";
let currentLevelFilter = "all";
let currentMonthFilter = null;
let searchQuery = "";

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  setupFilters();
  renderCatalog();
  renderLookalikes();
  renderSpots();
});

function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTab = btn.dataset.tab;
      
      document.getElementById("tab-catalog").style.display = currentTab === "catalog" ? "block" : "none";
      document.getElementById("tab-lookalikes").style.display = currentTab === "lookalikes" ? "block" : "none";
      document.getElementById("tab-spots").style.display = currentTab === "spots" ? "block" : "none";
      document.getElementById("tab-safety").style.display = currentTab === "safety" ? "block" : "none";
    });
  });
}

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

function renderCatalog() {
  const container = document.getElementById("mushroom-grid");
  if (!container) return;

  const filtered = MUSHROOMS.filter(m => {
    // Level filter
    if (currentLevelFilter !== "all" && m.level !== currentLevelFilter) {
      return false;
    }
    // Month filter
    if (currentMonthFilter && !m.months.includes(currentMonthFilter)) {
      return false;
    }
    // Search query
    if (searchQuery) {
      const haystack = `${m.finnishName} ${m.latinName} ${m.englishName} ${m.underCap} ${m.cap} ${m.habitatName}`.toLowerCase();
      if (!haystack.includes(searchQuery)) {
        return false;
      }
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: #fff; border-radius: 12px; border: 1px solid #e2e8f0;">
        <p style="font-size: 1.25rem; font-weight: 700; color: #475569;">No matching mushrooms found</p>
        <p style="color: #64748b; margin-top: 0.5rem;">Try clearing your search term or selecting a different month/skill filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(m => {
    let badgeClass = "badge-edible";
    let badgeText = "Edible";
    if (m.edibility === "choice") { badgeClass = "badge-choice"; badgeText = "Choice Edible"; }
    else if (m.edibility === "good") { badgeClass = "badge-good"; badgeText = "Good Edible"; }
    else if (m.edibility === "parboil") { badgeClass = "badge-parboil"; badgeText = "Must Parboil (!)"; }
    else if (m.edibility === "deadly") { badgeClass = "badge-deadly"; badgeText = "DEADLY TOXIC"; }
    else if (m.edibility === "inedible") { badgeClass = "badge-inedible"; badgeText = "Inedible"; }

    const monthNames = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
    const monthTags = m.months.map(num => {
      const idx = num - 5;
      return `<span class="meta-tag">${monthNames[idx] || num}</span>`;
    }).join("");

    return `
      <div class="mushroom-card">
        <div class="card-image-wrap">
          <img src="${m.image}" alt="${m.finnishName} (${m.latinName})" loading="lazy">
          <div class="card-badges">
            <span class="badge ${badgeClass}">${badgeText}</span>
          </div>
          <div class="star-rating">${m.rating}</div>
        </div>
        <div class="card-body">
          <div class="card-title-area">
            <h3 class="card-finnish-name">${m.finnishName}</h3>
            <div class="card-latinName card-latin-name">${m.latinName}</div>
            <div class="card-english-name">${m.englishName} • Sv: ${m.swedishName}</div>
          </div>

          <div class="meta-row">
            <span class="meta-tag" style="background:#e0f2fe; color:#0369a1;">📍 ${m.habitatName}</span>
            <div style="display:flex; gap:0.25rem;">${monthTags}</div>
          </div>

          <div class="card-morphology">
            <div class="morphology-item">
              <span class="morphology-label">Under-Cap:</span>
              <span><strong>${m.underCap}</strong></span>
            </div>
            <div class="morphology-item">
              <span class="morphology-label">Cap:</span>
              <span>${m.cap}</span>
            </div>
            <div class="morphology-item">
              <span class="morphology-label">Stem:</span>
              <span>${m.stem}</span>
            </div>
            <div class="morphology-item">
              <span class="morphology-label">Aroma:</span>
              <span>${m.odor}</span>
            </div>
          </div>

          ${m.warning ? `<div class="card-alert">⚠️ ${m.warning}</div>` : ""}
          ${m.culinaryTip ? `<div class="card-tip">🍳 ${m.culinaryTip}</div>` : ""}

          <div class="card-footer">
            <span>Skill: <strong>${m.level.toUpperCase()}</strong></span>
            <span>Ref ID: ${m.id}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderLookalikes() {
  const container = document.getElementById("lookalike-container");
  if (!container) return;

  container.innerHTML = LOOKALIKE_PAIRS.map(pair => `
    <div class="comparator-card">
      <div class="comparator-header">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e293b;">${pair.title}</h3>
          <p style="font-size: 0.85rem; color: #64748b; margin-top: 0.2rem;">${pair.summary}</p>
        </div>
      </div>
      <div class="comparator-pair-grid">
        <!-- Edible Column -->
        <div class="comparator-item edible">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
            <div>
              <span class="badge badge-choice">Safe / Edible</span>
              <h4 style="font-size: 1.15rem; font-weight: 800; margin-top: 0.4rem; color: #14532d;">${pair.edible.name}</h4>
              <p style="font-style: italic; font-size: 0.85rem; color: #15803d;">${pair.edible.sci}</p>
            </div>
          </div>
          <div style="height: 180px; border-radius: 8px; overflow: hidden; margin-bottom: 1rem;">
            <img src="${pair.edible.image}" alt="${pair.edible.name}" style="width:100%; height:100%; object-fit: cover;">
          </div>
          <ul class="diff-checklist">
            ${pair.edible.traits.map(t => `<li style="color: #166534;">✅ ${t}</li>`).join("")}
          </ul>
        </div>

        <!-- Toxic Column -->
        <div class="comparator-item toxic">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
            <div>
              <span class="badge badge-deadly">Danger / Avoid</span>
              <h4 style="font-size: 1.15rem; font-weight: 800; margin-top: 0.4rem; color: #7f1d1d;">${pair.toxic.name}</h4>
              <p style="font-style: italic; font-size: 0.85rem; color: #991b1b;">${pair.toxic.sci}</p>
            </div>
          </div>
          <div style="height: 180px; border-radius: 8px; overflow: hidden; margin-bottom: 1rem;">
            <img src="${pair.toxic.image}" alt="${pair.toxic.name}" style="width:100%; height:100%; object-fit: cover;">
          </div>
          <ul class="diff-checklist">
            ${pair.toxic.traits.map(t => `<li style="color: #991b1b;">⚠️ ${t}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `).join("");
}

function renderSpots() {
  const container = document.getElementById("spots-container");
  if (!container) return;

  container.innerHTML = HSL_SPOTS.map(s => `
    <div class="spot-card">
      <div class="spot-header">
        <div>
          <h3 class="spot-title">${s.name}</h3>
          <span style="font-size: 0.8rem; color: #64748b;">📍 ${s.municipality}</span>
        </div>
        <span class="spot-zone">${s.zone}</span>
      </div>

      <div class="spot-transit">
        <p><strong>🚌 HSL Connection:</strong> ${s.transit}</p>
        <p style="margin-top: 0.35rem;"><strong>⏱️ Duration:</strong> ~${s.time} from Central Railway Station</p>
      </div>

      <div style="font-size: 0.85rem; color: #334155; margin-bottom: 0.5rem;">
        <strong>Terrain:</strong> ${s.terrain}
      </div>

      <div style="font-size: 0.85rem; color: #166534; background: #f0fdf4; padding: 0.5rem; border-radius: 6px; margin-bottom: 0.75rem;">
        💡 <em>${s.tip}</em>
      </div>

      <div style="font-size: 0.8rem; font-weight: 700; color: #475569; margin-bottom: 0.25rem;">Target Species:</div>
      <div class="spot-species-list">
        ${s.species.map(sp => `<span class="species-tag">${sp}</span>`).join("")}
      </div>
    </div>
  `).join("");
}
