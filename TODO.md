# TODO

## Security (urgent)
- [ ] Revoke the old Telegram bot token in @BotFather (`/revoke`) — it was hard-coded in `src/services/telegram.ts` and is still in git history.
- [ ] Set new `TG_BOT_TOKEN` and `TG_CHAT_ID` in Vercel → Settings → Environment Variables (Production + Preview), redeploy.

## Content placeholders (no invented numbers on the site)
- [ ] awtonapraw.pl: Google Ads metrics — [CLICKS], [CTR], [CPC], [LEADS/month], [COST PER LEAD], period [FROM–TO]
- [ ] awtonapraw.pl: analytics — [VISITS/month], [CALLS from site]
- [ ] teslahubservice.com: [LEADS/month], [VISITS/month] if analytics exist
- [ ] Client quote / testimonial for each case (with permission)
- [ ] Number of completed projects [N] — add to trust bar only when confirmed
- [ ] Photo of Roman for About section
- [ ] Fix on client sites: awtonapraw.pl uses "від" instead of "od" in PL prices; teslahubservice.com — remove leftover AI text in "O firmie", unify brand name (Tesla HUB vs EV Spot Service), fix identical car specs

## Infra
- [ ] Buy pavelroman.com; Vercel → Domains: add `pavelroman.com` + `www.pavelroman.com`; DNS: A `@` → 76.76.21.21, CNAME `www` → cname.vercel-dns.com; redirect www → apex
- [ ] Google Search Console: verify domain, submit `/sitemap.xml`
- [ ] Analytics (GA4 or Vercel Analytics) + events on Telegram click / form submit
- [ ] Update Behance website link to https://pavelroman.com
