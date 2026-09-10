# The Definitive Guide to Mushroom Foraging in Helsinki & Uusimaa
*赫尔辛基野生蘑菇采摘与鉴别指南 • Helsingin ja Uudenmaan Sieniopas*

A comprehensive, trilingual field companion (**English** | **中文** | **Suomi**) for wild mushroom foraging, identification, HSL public transit spots, and authentic culinary recipes in southern Finland.

---

## 🌐 Trilingual Web Application

The interactive digital field companion is deployable for **free** on GitHub Pages, Cloudflare Pages, or Vercel, and runs with zero dependencies.

- **Web App Entry**: [`index.html`](index.html)
- **Deployment Guide**: [DEPLOYMENT.md](DEPLOYMENT.md) *(2-minute setup for GitHub Pages with automatic SSL)*
- **Language Toggle**: Instant dynamic switching between **English (EN)**, **中文 (ZH)**, and **Suomi (FI)** with persistent memory.

---

## 🚨 Emergency Contacts (Finland)

> [!CAUTION]
> **IF YOU SUSPECT MUSHROOM POISONING:**
> 1. **Call the Finnish Poison Information Centre (*Myrkytystietokeskus*) immediately:**
>    - **0800 147 111** (Toll-free, 24/7 across Finland)
>    - **+358 9 471 977** (Standard call rate)
> 2. **For life-threatening emergencies, call 112.**
> 3. **Always preserve raw mushroom remnants or a whole specimen** in a container in the fridge so toxicologists can identify the species and administer targeted antidotes (e.g., Silibinin for amatoxins).

---

## 📚 Handbook Chapters & Manuals

| Section | Document | Key Topics Covered |
| :--- | :--- | :--- |
| **01** | [**Legal Rights, Nature Protection & Forest Safety**](docs/01_legal_and_ethics.md) | *Jokamiehenoikeus* (Everyman's Right), nature reserves, ticks (*punkit*), deer keds (*hirvikärpäset*), forest navigation. |
| **02** | [**Helsinki Foraging Spots by HSL Public Transit**](docs/02_helsinki_transit_spots_guide.md) | Keskuspuisto, Sipoonkorpi, Nuuksio, Luukki, Vaakkoi, Petikko, Uutela. Exact bus/train routes, trailheads, and forest types. |
| **03** | [**Seasonal Calendar & Forest Ecology**](docs/03_seasonal_calendar_and_habitats.md) | Month-by-month fruiting timelines (May to November), Cajander forest site types (*tuore kangas*, *kuiva kangas*, *lehto*, *korpi*). |
| **04** | [**Deadly & Toxic Species: The Survival Manual**](docs/04_deadly_and_toxic_species.md) | *Amanita virosa*, *Cortinarius rubellus*, *Galerina marginata*, *Gyromitra esculenta*, *Paxillus involutus*. Toxins, delayed latency, emergency protocols. |
| **05** | [**The "Safe Five" Beginner Species**](docs/05_beginner_safe_species.md) | Chanterelle, Funnel Chanterelle, Hedgehog Mushroom, Black Trumpet, King Bolete. Macroscopic checks & false lookalike tables. |
| **06** | [**Intermediate & Advanced Gourmet Species**](docs/06_intermediate_and_advanced.md) | Russula Mildness Test, Milkcaps (*Rouskut*) & parboiling (*ryöppäys*), Gypsy Mushroom (*Kehnäsieni*), Sheep Polypore (*Lampaankääpä*). |
| **07** | [**Preservation & Authentic Finnish Recipes**](docs/07_preservation_and_recipes.md) | Dehydration rules, freezing in natural juices, Finnish salt-curing (*suolasienet*), classic recipes. |
| **ZH** | [**中文野菌烹饪预处理与中西经典食谱**](docs/cooking_and_recipes_zh.md) | 软刷干理、自汁慢焖法、科学焯水去毒（Ryöppäys）、奶油鸡油菌酱、传统酸奶油腌乳菇沙拉、葱姜蒜香野菌炒肉丝。 |
| **App** | [**Interactive Field Companion (SPA)**](index.html) | Trilingual responsive app with search, month filter, side-by-side comparator, HSL transit finder, and cooking guides. |

---

## 🚀 Quick Start Local Testing

Run a local web server to test on your computer or mobile device on the same local network:

```bash
cd /Users/jingliang/.gemini/antigravity/scratch/helsinki-mushroom-guide
python3 -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🧭 Philosophy & Context

This project is a continuous living record and practical application of the first-person philosophy explored in [Not a ToE](https://powerpig99.github.io/not-a-toe/) — embodying the shift from analytical modeling to direct, active agency in everyday life.

