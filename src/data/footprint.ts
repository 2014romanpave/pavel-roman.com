// «Отпечаток» feed (maxshirko.me-style scattered grid). Instagram tiles are placeholders until posts are exported
// (see TODO.md → "Digital footprint"). col/row = desktop placement in an 8-column grid; tall = vertical (reels/post) card.
import { CONTACTS } from '../i18n';
export type FpItem = {
  type: 'post' | 'reels' | 'case' | 'behance'; href: string; img?: string; title: string;
  placeholder?: boolean; col: number; row: number; tall?: boolean;
};
export const INSTAGRAM_URL: string | null = CONTACTS.instagram;
const C = '/img/cases/';
export const FOOTPRINT: FpItem[] = [
  { type: 'case', href: '/{lang}/work/awtonapraw/', img: C + 'awtonapraw-desktop.webp', title: 'Awtonapraw.pl / Web + Google Ads', col: 1, row: 1 },
  { type: 'case', href: '/{lang}/work/teslahub/', img: C + 'teslahub-brand-6.webp', title: 'Tesla HUB / Branding / Print', col: 3, row: 1 },
  { type: 'reels', href: CONTACTS.instagram, title: 'Instagram', placeholder: true, col: 4, row: 1, tall: true },
  { type: 'case', href: '/{lang}/work/glow/', img: C + 'glow-desktop.webp', title: 'Glow Beauty Salon / Web', col: 5, row: 1 },
  { type: 'post', href: CONTACTS.instagram, title: 'Instagram', placeholder: true, col: 8, row: 1 },
  { type: 'case', href: '/{lang}/work/reserba/', img: C + 'reserba-2.webp', title: 'Reserba / UX/UI / App', col: 2, row: 2 },
  { type: 'case', href: '/{lang}/work/teslahub/', img: C + 'teslahub-desktop.webp', title: 'Tesla HUB / Web / Webflow', col: 3, row: 2 },
  { type: 'case', href: '/{lang}/work/garcinia/', img: C + 'garcinia-2.webp', title: 'Garcinia / Landing page', col: 5, row: 2 },
  { type: 'post', href: CONTACTS.instagram, title: 'Instagram', placeholder: true, col: 6, row: 2, tall: true },
  { type: 'case', href: '/{lang}/work/teslahub/', img: C + 'teslahub-brand-5.webp', title: 'Tesla HUB / Social media', col: 7, row: 2 },
];
