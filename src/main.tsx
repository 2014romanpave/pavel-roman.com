import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { LANGS, type Lang } from './i18n';
import { workBySlug } from './work';
import './index.css';

const seg = location.pathname.split('/')[1] as Lang;
const lang: Lang = (LANGS as readonly string[]).includes(seg) ? seg : 'ua';
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
// tab-hidden title tease
const AWAY: Record<string, string> = { ua: 'Повертайтеся ✦', ru: 'Возвращайтесь ✦', pl: 'Wróć do nas ✦', en: 'Come back ✦' };
let realTitle = document.title;
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { realTitle = document.title; document.title = AWAY[lang] ?? AWAY.en; } else document.title = realTitle;
});
const parts = location.pathname.split('/');
const work = parts[2] === 'work' ? workBySlug(parts[3] ?? '')?.key : undefined;
const el = document.getElementById('root')!;
const app = <StrictMode><App lang={lang} work={work} /></StrictMode>;
if (el.dataset.ssr === '1') hydrateRoot(el, app); else createRoot(el).render(app);
import { startFavGlitch } from './favGlitch'
startFavGlitch()
// Vercel Web Analytics (client-only, separate root to avoid hydration mismatch)
import { Analytics } from '@vercel/analytics/react';
{ const a = document.createElement('div'); document.body.appendChild(a); createRoot(a).render(<Analytics />); }
