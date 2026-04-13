# Afridiyan Imperial Textile Mall — Website

A production-ready Astro static site for [Afridiyan Imperial Textile Mall](https://afridiyan-textile-vault.base44.app/), rebuilt with improved design, performance, and code quality.

## 🛠️ Tech Stack

- **Astro** v4 — Static-first, zero JS by default
- **Tailwind CSS** — Utility-first styling
- **TypeScript** — Type-safe components
- **Google Fonts** — Playfair Display + DM Sans

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/afridiyan-textile.git
cd afridiyan-textile
npm install
```

### Development

```bash
npm run dev
# Opens at http://localhost:4321
```

### Build

```bash
npm run build
# Output in /dist
```

### Preview build

```bash
npm run preview
```

---

## 📦 Deployment to GitHub Pages

### 1. Configure `astro.config.mjs`

Edit the `site` and `base` fields:

```js
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/afridiyan-textile',   // or '/' if using a custom domain
  integrations: [tailwind()],
});
```

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/afridiyan-textile.git
git push -u origin main
```

### 3. Enable GitHub Pages

In your repo → **Settings → Pages → Source** → select **GitHub Actions**.

The `.github/workflows/deploy.yml` file handles automatic deployment on every push to `main`.

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro       # Sticky nav with mobile hamburger
│   │   └── Footer.astro       # Links, contact, social
│   └── sections/
│       ├── Hero.astro         # Full-screen hero with CTAs
│       ├── Products.astro     # 4-column product grid
│       ├── About.astro        # Brand story + stats
│       ├── Features.astro     # Why choose us grid
│       └── Contact.astro      # Address, phone, WhatsApp
├── layouts/
│   └── BaseLayout.astro       # HTML shell + scroll-reveal
├── pages/
│   └── index.astro            # Assembles all sections
└── styles/
    └── global.css             # Tailwind + custom utilities
```

---

## 🎨 Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `brand-600` | `#a86a14` | Primary actions, accents |
| `brand-900` | `#5c3716` | Dark sections |
| `brand-950` | `#331b08` | Hero, footer backgrounds |
| `cream` | `#fdf8f0` | Main background |
| `ink` | `#1a1208` | Body text |

### Fonts

- **Playfair Display** — Headings, display text
- **DM Sans** — Body, navigation, labels

---

## ✅ Improvements Over Original

- ✦ Luxury editorial aesthetic vs generic AI output
- ✦ Scroll-reveal animations via IntersectionObserver
- ✦ Fully responsive — mobile-first
- ✦ Semantic HTML throughout
- ✦ Zero runtime JS except hamburger menu + scroll-reveal
- ✦ Proper meta/SEO tags
- ✦ WhatsApp + Facebook links integrated
- ✦ Google Maps Plus Code linked

---

## 📄 License

© 2024 Afridiyan Imperial Textile Mall (Private) Limited. All rights reserved.
