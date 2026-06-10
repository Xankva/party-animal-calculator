# 🎣 Party Animal — Fishing Calculator & Journal

A premium, interactive single-page app for *Party Animals* players to track daily fishing sessions, calculate treat earnings toward the 900-treat daily cap, log caught species, and get optimized gear recommendations — all with zero installs and full offline support.

---

## Features

### 📊 Stats Dashboard
- Circular SVG progress ring showing your current treat total against the 900-treat daily cap.
- At-a-glance stat boxes for round count, last gain, and fish caught broken down by rarity.
- Full session history list with per-entry rollback and delete support.

### 🧺 Bucket Calculator
- Click fish species directly to add them to your active bucket.
- Auto-calculates treat values per rarity tier: Common (2), Uncommon (5), Rare (12), Epic (25), Legendary (50).
- Manual Mode fallback for entering Before/After Sale totals by hand.

### 📔 Fish Journal
- Interactive database of all 48 fish species across Autumn, Winter, and Spring Cabins.
- Live filters by name, description, rarity, spot, weather, and season.
- Persistent checklist to track which species you've caught, saved to `localStorage`.

### 🛠️ Gear Guide
- Set your active environment: Season, Weather, Spot, and Time of Day.
- Instantly recommends the correct Rod Class (Light vs. Heavy), Hook, and Bait.
- Displays the full pool of catchable species under your current conditions.

### 🔄 Persistence
- All progress — checklist state, session history, treat totals, and calculator mode — is automatically saved to `localStorage` with no account required.

---

## Technical Details

| | |
|---|---|
| **Framework** | Vue 3 (production CDN build) |
| **Styling** | Vanilla CSS3 with custom design tokens, glassmorphic cards, ambient glow blobs, responsive layout, custom scrollbars, and animations |
| **Dependencies** | None — pure HTML/CSS/JS, no build step required |
| **Deployment** | Any static host (GitHub Pages, Netlify, Cloudflare Pages, etc.) |

---

## 🚀 Hosting on GitHub Pages

Since this is a fully static project, GitHub Pages hosts it for free with no build configuration needed.

### Option 1: Direct Branch Deployment (Simplest)

1. **Initialize and push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initialize Party Animal Fishing Calculator"
   git remote add origin https://github.com/<your-username>/party-animal-calculator.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub.
   - Open **Settings → Pages** (under *Code and automation*).
   - Set **Source** to `Deploy from a branch`.
   - Set **Branch** to `main` and folder to `/ (root)`.
   - Click **Save**.

Your app will be live at `https://<your-username>.github.io/party-animal-calculator/` within a minute or two.

---

### Option 2: GitHub Actions (Recommended for ongoing updates)

A pre-configured workflow file is included at `.github/workflows/deploy.yml`. Every push to `main` automatically deploys to the `gh-pages` branch.

1. Make sure `.github/workflows/deploy.yml` is present in your repository.
2. Go to **Settings → Pages**.
3. Set **Source** to `GitHub Actions`.

That's it — future pushes deploy automatically.

---

## 📄 License

This project is released under the [MIT License](LICENSE). You're free to use, modify, and distribute it for personal or non-commercial purposes.

---

## 🙏 Credits

- **Game:** [Party Animals](https://www.party-animals.net/) by Recreate Games — all fish species, treat values, and game mechanics belong to their respective owners.
- **Vue 3:** [vuejs.org](https://vuejs.org/) — used via CDN under the MIT License.
- Built with 💙 for the Party Animals community.