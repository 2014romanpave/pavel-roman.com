import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { LANGS, type Lang } from './i18n';
import { workBySlug } from './work';
import './index.css';

const seg = location.pathname.split('/')[1] as Lang;
const lang: Lang = (LANGS as readonly string[]).includes(seg) ? seg : 'ua';
// Telegram/in-app webviews may restore or jump scroll on open: start at top unless a hash is targeted,
// and for the first ~2.5s undo any scroll that was not caused by the user (touch/wheel/keys/click).
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (!location.hash) {
  let user = false;
  const mark = () => { user = true; };
  for (const ev of ['touchstart', 'wheel', 'keydown', 'pointerdown', 'mousedown']) addEventListener(ev, mark, { passive: true, capture: true });
  const guard = () => { if (!user && !location.hash && window.scrollY !== 0) window.scrollTo(0, 0); };
  guard();
  addEventListener('scroll', guard, { passive: true });
  addEventListener('load', guard, { once: true });
  setTimeout(() => removeEventListener('scroll', guard), 2500);
}
const parts = location.pathname.split('/');
const work = parts[2] === 'work' ? workBySlug(parts[3] ?? '')?.key : undefined;
const el = document.getElementById('root')!;
const app = <StrictMode><App lang={lang} work={work} /></StrictMode>;
if (el.dataset.ssr === '1') hydrateRoot(el, app); else createRoot(el).render(app);
