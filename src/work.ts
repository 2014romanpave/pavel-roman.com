import type { Lang } from './i18n';
export type WorkKey = 'awto' | 'tesla';
const C = '/img/cases/';
export const WORKS: { key: WorkKey; slug: string; url: string; host: string; thumb: string; mob: string; full: string; shots: string[]; mobs: string[] }[] = [
  { key: 'awto', slug: 'awtonapraw', url: 'https://awtonapraw.pl/', host: 'awtonapraw.pl', thumb: C + 'awtonapraw-desktop.webp', mob: C + 'awtonapraw-mobile.webp', full: C + 'awtonapraw-full.webp', shots: [C + 'awtonapraw-s1.webp', C + 'awtonapraw-s2.webp', C + 'awtonapraw-s3.webp'], mobs: [C + 'awtonapraw-mobile.webp', C + 'awtonapraw-m2.webp', C + 'awtonapraw-m3.webp'] },
  { key: 'tesla', slug: 'teslahub', url: 'https://www.teslahubservice.com/', host: 'teslahubservice.com', thumb: C + 'teslahub-desktop.webp', mob: C + 'teslahub-mobile.webp', full: C + 'teslahub-full.webp', shots: [C + 'teslahub-s1.webp', C + 'teslahub-s2.webp', C + 'teslahub-s3.webp'], mobs: [C + 'teslahub-mobile.webp', C + 'teslahub-m2.webp', C + 'teslahub-m3.webp'] },
];
export const workBySlug = (s: string) => WORKS.find((w) => w.slug === s);
export const WORK_UI: Record<Lang, { all: string; next: string; open: string; scroll: string; mobile: string; sections: string; label: string }> = {
  ua: { all: 'Усі роботи', next: 'Наступний проєкт', open: 'Детальніше', scroll: 'Прокрутіть сторінку у вікні', mobile: 'Мобільна версія', sections: 'Фрагменти', label: 'Портфоліо' },
  ru: { all: 'Все работы', next: 'Следующий проект', open: 'Подробнее', scroll: 'Прокрутите страницу в окне', mobile: 'Мобильная версия', sections: 'Фрагменты', label: 'Портфолио' },
  pl: { all: 'Wszystkie prace', next: 'Następny projekt', open: 'Szczegóły', scroll: 'Przewiń stronę w oknie', mobile: 'Wersja mobilna', sections: 'Fragmenty', label: 'Portfolio' },
  en: { all: 'All works', next: 'Next project', open: 'View case', scroll: 'Scroll the page inside the window', mobile: 'Mobile version', sections: 'Fragments', label: 'Portfolio' },
};
