# TODO

## Security (urgent)
- [ ] Revoke the old Telegram bot token in @BotFather (`/revoke`) — it was hard-coded in `src/services/telegram.ts` and is still in git history.
- [ ] Set new `TG_BOT_TOKEN` and `TG_CHAT_ID` in Vercel → Settings → Environment Variables (Production + Preview), redeploy.

## Content placeholders (no invented numbers on the site)
- [ ] awtonapraw.pl: Google Ads metrics — [CLICKS], [CTR], [CPC], [LEADS/month], [COST PER LEAD], period [FROM–TO]
- [ ] awtonapraw.pl: analytics — [VISITS/month], [CALLS from site]
- [ ] teslahubservice.com: [LEADS/month], [VISITS/month] if analytics exist
- [ ] Year per work (not shown until confirmed) — add to `src/work.ts`
- [ ] Client quote / testimonial for each case (with permission)
- [ ] Number of completed projects [N] — add to trust bar only when confirmed
- [ ] Real portrait photo: hero left currently shows the animated 'lamp' gradient. To switch to a photo, add e.g. `public/img/portrait.webp` (vertical ~1200x1600, moody, at work) and set `HERO_PHOTO = '/img/portrait.webp'` in `src/App.tsx`
- [ ] Fix on client sites: awtonapraw.pl uses "від" instead of "od" in PL prices; teslahubservice.com — remove leftover AI text in "O firmie", unify brand name (Tesla HUB vs EV Spot Service), fix identical car specs

## Infra
- [ ] Buy pavelroman.com; Vercel → Domains: add `pavelroman.com` + `www.pavelroman.com`; DNS: A `@` → 76.76.21.21, CNAME `www` → cname.vercel-dns.com; redirect www → apex
- [ ] Google Search Console: verify domain, submit `/sitemap.xml`
- [ ] Analytics (GA4 or Vercel Analytics) + events on Telegram click / form submit
- [ ] Update Behance website link to https://pavelroman.com

## Digital footprint (src/data/footprint.ts)
- [ ] Set `INSTAGRAM_URL` once the handle is known; replace tiles with `placeholder: true` by real posts.
- Manual: export post images to `public/img/footprint/*.webp`, add `{ type: 'post'|'reels', href: <post URL>, img, title }`.
- Automatic: Instagram Graph API (Business/Creator account linked to a FB Page) → `GET /{ig-user-id}/media?fields=media_type,media_url,thumbnail_url,permalink,caption,timestamp` with a long-lived token stored in Vercel env (`IG_TOKEN`, never in code); fetch at build time in `scripts/prerender.mjs` (or a Vercel Cron rebuild daily) and write the list into the footprint data.

## Courses teaser
- [ ] `SHOW_COURSES_TEASER` in `src/extra.ts` hides/shows the "coming soon" block. Add real course pages only when program/price are defined.
