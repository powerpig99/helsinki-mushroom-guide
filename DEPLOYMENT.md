# Free Public Website Deployment Guide
*Deploying the Trilingual Helsinki Wild Mushroom Guide at Zero Cost*

This guide explains how to deploy your interactive trilingual mushroom guide as a public website accessible to anyone in the world for **100% free forever** with SSL/HTTPS.

---

## Method 1: GitHub Pages (Recommended - 2 Minutes)

GitHub Pages provides free static hosting with custom domain support, unlimited visitors, and automatic SSL encryption.

### Step-by-Step Instructions:

1. **Initialize Git & Commit**:
   Open your terminal and navigate to the project directory:
   ```bash
   cd /Users/jingliang/.gemini/antigravity/scratch/helsinki-mushroom-guide
   git init
   git add .
   git commit -m "Initial commit: Trilingual Helsinki Mushroom Foraging Guide"
   ```

2. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new).
   - Name your repository (e.g. `helsinki-mushroom-guide`).
   - Set it to **Public**.
   - Click **Create repository**.

3. **Push your Code**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/helsinki-mushroom-guide.git
   git push -u origin main
   ```

4. **Activate GitHub Pages**:
   - In your GitHub repository, click on **Settings** (top right tab).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment**:
     - **Source**: Select **GitHub Actions** (the included `.github/workflows/deploy.yml` will automatically build and publish).
     - *(Alternative simple method)*: Choose **Deploy from a branch** -> Branch: `main` -> Folder: `/ (root)` -> Click **Save**.

5. **Your Live URL**:
   Within 60 seconds, your site will be live at:
   `https://<YOUR-USERNAME>.github.io/helsinki-mushroom-guide/`

---

## Method 2: Cloudflare Pages (Fastest Worldwide CDN)

Cloudflare Pages provides blazing-fast edge caching, with edge servers located directly in Helsinki for ultra-low latency.

1. Create a free account at [pages.cloudflare.com](https://pages.cloudflare.com/).
2. Click **Create a project** -> **Direct Upload** (or connect your GitHub account).
3. If using Direct Upload:
   - Drag and drop the `helsinki-mushroom-guide` directory directly into Cloudflare Pages.
   - Click **Deploy site**.
4. Your site will instantly go live at `https://<project-name>.pages.dev`.

---

## Method 3: Vercel

1. Create a free account at [vercel.com](https://vercel.com/).
2. Install the Vercel CLI or import your GitHub repository:
   ```bash
   npm i -g vercel
   cd /Users/jingliang/.gemini/antigravity/scratch/helsinki-mushroom-guide
   vercel
   ```
3. Follow the simple prompts (Root directory: `.`, No build command required).
4. Instant live production URL with global CDN.

---

## Custom Domain Setup (Optional)

If you own a custom domain (such as `sieniopas.fi` or `helsinkimushrooms.com`):
1. In your GitHub repository -> **Settings** -> **Pages** -> **Custom domain**:
   - Enter your domain name (e.g. `guide.example.com`).
2. Add a `CNAME` record in your DNS provider pointing to `<YOUR-USERNAME>.github.io`.
3. Check **Enforce HTTPS**.

---

## Local Offline Testing

To test the entire application on your computer or phone prior to publishing:

```bash
cd /Users/jingliang/.gemini/antigravity/scratch/helsinki-mushroom-guide
python3 -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your web browser.
