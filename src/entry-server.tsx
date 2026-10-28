import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import type { Lang } from './i18n';
import type { WorkKey } from './work';
export { WORKS } from './work';
export { DICT, LANGS, HTML_LANG, SITE_URL, CONTACTS } from './i18n';
export function render(lang: Lang, work?: WorkKey) {
  return renderToString(<StrictMode><App lang={lang} work={work} /></StrictMode>);
}
