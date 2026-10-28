# pavelroman.com

Vite + React 19 + Tailwind 4. Static prerendered pages: `/ua/`, `/ru/`, `/pl/`, `/en/` (`/` → `/ua/`).

- Texts (4 languages): `src/i18n.ts`
- Page: `src/App.tsx`, form: `src/components/ContactForm.tsx`
- Contact form backend: Vercel function `api/contact.ts` (env `TG_BOT_TOKEN`, `TG_CHAT_ID`)
- Build: `npm run build` (client build → SSR build → `scripts/prerender.mjs` writes per-language HTML, sitemap.xml, robots.txt)
- Dev: `npm run dev` (form needs `vercel dev` to work locally)

See `TODO.md`.
