import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { LANGS, type Lang } from './i18n';
import './index.css';

const seg = location.pathname.split('/')[1] as Lang;
const lang: Lang = (LANGS as readonly string[]).includes(seg) ? seg : 'ua';
const el = document.getElementById('root')!;
const app = <StrictMode><App lang={lang} /></StrictMode>;
if (el.dataset.ssr === '1') hydrateRoot(el, app); else createRoot(el).render(app);
