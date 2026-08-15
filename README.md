# Felipe Maffezzolli

Personal site for [felipemaffezzolli.com](https://felipemaffezzolli.com).

Portuguese UI with home, about, projects, contact, and a ⌘K command palette. Built with Next.js for Vercel — no environment variables.

## Deploy on Vercel

1. Import this repository in [Vercel](https://vercel.com/new).
2. Framework preset: **Next.js** (auto-detected). Leave build settings as default:
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`
3. No environment variables are required.
4. Deploy.
5. In the project **Settings → Domains**, attach:
   - `felipemaffezzolli.com`
   - `www.felipemaffezzolli.com`
6. Point DNS at Vercel (A/CNAME as shown in the Domains UI). Prefer apex + `www`, with one redirecting to the other.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm test` | Unit tests (Vitest) |
| `npm run test:e2e` | End-to-end tests (Playwright; run `npm run build` first) |
| `npm run lint` | ESLint |

## Stack

- Next.js (App Router) + TypeScript
- Google fonts via `next/font` (Archivo + IBM Plex Sans)
- Vitest + Playwright
- Zero secrets / zero env vars

## Routes

| Path | Content |
| --- | --- |
| `/` | Home |
| `/sobre` | Bio + career timeline |
| `/projetos` | Companies and products |
| `/contato` | Verified social links |
