# Felipe Maffezzolli

Personal homepage for [felipemaffezzolli.com](https://felipemaffezzolli.com).

A single dark page: name, one line, a few verified links. Built with Next.js for Vercel.

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
- Google fonts via `next/font` (Instrument Serif + Manrope)
- Vitest + Playwright
- Zero secrets / zero env vars
