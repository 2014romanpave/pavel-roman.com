import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { LANGS, type Lang } from './i18n';
import { workBySlug } from './work';
import './index.css';

const seg = location.pathname.split('/')[1] as Lang;
const lang: Lang = (LANGS as readonly string[]).includes(seg) ? seg : 'ua';
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
const parts = location.pathname.split('/');
const work = parts[2] === 'work' ? workBySlug(parts[3] ?? '')?.key : undefined;
const el = document.getElementById('root')!;
const app = <StrictMode><App lang={lang} work={work} /></StrictMode>;
if (el.dataset.ssr === '1') hydrateRoot(el, app); else createRoot(el).render(app);
