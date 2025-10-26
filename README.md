# TrueSpend — Vercel Template (Static site + Serverless APIs)

This repo gives you a **ready-to-deploy** Vercel project:
- `public/` → your static website (home, install page, how-it-works).
- `api/` → serverless API routes used by your browser extension:
  - `GET /api/cards` — returns user's **card metadata only** (demo data).
  - `GET /api/coupons?domain=amazon.com` — returns **verified coupons** (demo data).
  - `POST /api/recommend` — given `{ domains: ["costco.com", ...] }`, suggests **new cards** (demo logic).

## Deploy
1. Create a GitHub repo and push this folder.
2. In Vercel, click **New Project → Import Git Repo**.
3. Framework preset: **Other** (no build).
4. Root directory: `/`
5. Build command: *(leave blank)*
6. Output directory: `public` (so your site serves from `public/`)
7. Deploy!

Your APIs will be live at:
- `https://<app>.vercel.app/api/cards`
- `https://<app>.vercel.app/api/coupons?domain=amazon.com`
- `https://<app>.vercel.app/api/recommend`

## Configure your site
- Edit `public/install.html` and replace the **store links** with your real listings.
- Edit `public/index.html` and `how-it-works.html` to match your brand copy.

## CORS
`vercel.json` adds permissive CORS headers for `/api/*` so your extension can call these endpoints from any browser.

## Next steps
- Replace demo API logic with your DB + verification services.
- Add authentication (verify the user's token in the `Authorization` header).
- Add rate limiting if needed.
