
# Aditya Kankarwal — Portfolio (Vite + React + Tailwind)

This is a ready-to-deploy portfolio site for **Aditya Kankarwal**. It is configured to deploy easily on **Vercel** or **GitHub Pages** (Vercel recommended).

## Quick start (locally)
1. Install Node.js (v18+ recommended)
2. Run:
   ```bash
   npm install
   npm run dev
   ```
3. Edit content in `src/App.jsx` (personal info is at top). The resume PDF is in `public/AdityaKankarwal_DS-5.pdf`.

## Deploy to Vercel
1. Create a GitHub repo and push this project.
2. Go to https://vercel.com -> New Project -> Import GitHub repo.
3. Vercel auto-detects the project. Use default build settings (`npm run build`) and output directory `dist`.
4. Deploy — site will be live in minutes.

## Changes in this fixed version
- Correct `framer-motion` version: `^11.0.0` (previous version didn't exist on npm).
- Added `@vitejs/plugin-react` to `devDependencies`.
- Updated `vite.config.js` to use `react()` plugin.
- Removed `vercel.json` so Vercel uses dashboard settings without warnings.
