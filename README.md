# Nitansh Deep — Equity Research Portfolio

Professional equity research portfolio website showcasing financial models, valuations, and investment theses on Indian listed companies.

## 🚀 One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO_NAME)

> Replace `YOUR_USERNAME/YOUR_REPO_NAME` with your actual GitHub repository URL after pushing.

## 📋 Quick Setup

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Vite — just click **Deploy**
5. Your site will be live in ~60 seconds!

### 3. Custom Domain (Optional)

In Vercel Dashboard → Settings → Domains → Add your custom domain.

## 🛠️ Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## ✏️ Editing Content

**All content is in `portfolio-content.json`** — see [HOW-TO-EDIT.md](./HOW-TO-EDIT.md) for a step-by-step guide.

## 📁 Project Structure

```
├── src/                          # React source code
│   ├── components/               # UI components
│   ├── pages/                    # Page components
│   ├── App.jsx                   # Router & layout
│   └── index.css                 # Design system
├── public/
│   ├── Nitansh_Deep_Resume.pdf   # Resume PDF
│   └── images/                   # Excel preview images
├── portfolio-content.json        # ← Edit this to update content
├── HOW-TO-EDIT.md                # Plain English editing guide
├── vercel.json                   # SPA routing config
└── package.json
```

## ⚠️ Important Notes

- **Never** place `.xlsx` files in the `public/` folder
- All financial data is from preview images only (blurred)
- The site is fully static — no backend needed
- Vercel auto-deploys on every GitHub push

## 🎨 Design

- Dark navy theme with gold accents
- Playfair Display (headings) + Inter (body) typography
- Glassmorphism card effects
- CSS-only animations (no heavy libraries)
- Mobile responsive

---

Built with React + Vite + Tailwind CSS
