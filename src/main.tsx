import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { LANGS, type Lang } from './i18n';
import { workBySlug } from './work';
import './index.css';

const seg = location.pathname.split('/')[1] as Lang;
const lang: Lang = (LANGS as readonly string[]).includes(seg) ? seg : 'ua';
// Telegram/in-app webviews may restore or jump scroll on open: always start at top unless a hash is targeted
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
const toTop = () => { if (!location.hash) window.scrollTo(0, 0); };
toTop(); window.addEventListener('load', () => { toTop(); setTimeout(toTop, 300); }, { once: true });
const parts = location.pathname.split('/');
const work = parts[2] === 'work' ? workBySlug(parts[3] ?? '')?.key : undefined;
const el = document.getElementById('root')!;
const app = <StrictMode><App lang={lang} work={work} /></StrictMode>;
if (el.dataset.ssr === '1') hydrateRoot(el, app); else createRoot(el).render(app);
