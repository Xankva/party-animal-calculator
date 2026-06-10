# 🎣 Party Animal - Fishing Calculator & Journal

A premium, interactive, single-page application built for *Party Animals* players to track their daily fishing sessions, calculate earnings toward the 900 treats daily cap, checklist caught species, and get optimized gear recommendations.

## Features

1. **📊 Stats Dashboard**:
   - Dynamic circular SVG progress ring tracking your treats total (capped at 900).
   - Stats boxes tracking round history count, last gain, and fish breakdown count by rarities.
   - Comprehensive session history list with rollback/delete capability.
2. **🧺 Bucket Calculator**:
   - Click caught fish species directly to add them to your bucket.
   - Automatically calculates cookie values (Common = 2, Uncommon = 5, Rare = 12, Epic = 25, Legendary = 50) and updates the sale total.
   - Manual Mode fallback: allows traditional entry of "Before Sale" and "After Sale" numbers.
3. **📔 Fish Journal**:
   - Extensive interactive database of 48 fish types from Autumn, Winter, and Spring Cabins.
   - Live filters for name, description, rarity, location spot, weather, and season.
   - Checkbox checklist tracking caught species (stored locally).
4. **🛠️ Gear Guide**:
   - Choose the active seasonal environment factors: Season, Weather, Spot, and Time.
   - Instantly recommends the correct Rod Class (Light vs. Heavy), Hook, and Bait.
   - Lists the pool of active fish species you can catch under those factors.
5. **🔄 Persistence**:
   - Synchronizes checklist, session history, totals, and calculator mode settings to `localStorage`.

---

## Technical Details

- **Framework**: Vue 3 (production-ready CDN package)
- **Styling**: Premium Vanilla CSS3 featuring custom root design system variables, glassmorphic layout card stylings, ambient glow blobs, responsive viewports, custom scrollbars, and animations.
- **Dependency-Free**: Pure HTML/CSS/JS with zero build steps or preprocessors, making it extremely fast to load and simple to deploy.

---

## 🚀 How to Host on GitHub Pages

Since this is a static project, hosting it on **GitHub Pages** is completely free, instant, and requires no build steps. Below are the two main ways to deploy it.

### Option 1: Direct Branch Deployment (Easiest)

1. **Initialize Git and Push to GitHub**:
   Open a terminal in the project directory:
   ```bash
   git init
   git add .
   git commit -m "Initialize Party Animal Fishing Calculator"
   ```
   Create a repository on GitHub (e.g. `party-animal-calculator`), and link it:
   ```bash
   git remote add origin https://github.com/<your-username>/party-animal-calculator.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository page on GitHub.
   - Click **Settings** (top navigation bar).
   - Navigate to **Pages** in the left sidebar menu (under the "Code and automation" section).
   - Under **Build and deployment**, select **Deploy from a branch** as the source.
   - Under **Branch**, select **main** and set the folder path to `/ (root)`.
   - Click **Save**.

Your site will be live at `https://<your-username>.github.io/party-animal-calculator/` within 1–2 minutes!

---

### Option 2: Automated Deployment via GitHub Actions (Recommended)

We have included a pre-configured GitHub Actions workflow file in `.github/workflows/deploy.yml`. When you push to GitHub, the workflow automatically builds, checks, and deploys your code to a dedicated `gh-pages` branch.

To use this method:
1. Make sure the `.github/workflows/deploy.yml` file is in your repository.
2. In your GitHub Repository, go to **Settings** -> **Pages**.
3. Under **Build and deployment**, change the Source dropdown to **GitHub Actions**.
4. GitHub will handle the rest! Every time you commit and push changes, the page will automatically deploy.
