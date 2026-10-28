// "Digital footprint" feed (like maxshirko.me). TODO: replace placeholder tiles with real Instagram posts
// (see TODO.md → "Digital footprint"). `img` optional; `title` may be per-language or a single string.
import { CONTACTS } from '../i18n';
export type FpItem = { type: 'post' | 'reels' | 'case' | 'behance'; href: string; img?: string; title: string; placeholder?: boolean };
export const INSTAGRAM_URL: string | null = CONTACTS.instagram;
export const FOOTPRINT: FpItem[] = [
  { type: 'case', href: '/{lang}/work/awtonapraw/', img: '/img/cases/awtonapraw-s2.webp', title: 'Awtonapraw.pl / Web + Google Ads' },
  { type: 'post', href: CONTACTS.instagram, title: 'TODO: Instagram post', placeholder: true },
  { type: 'reels', href: CONTACTS.instagram, title: 'TODO: Instagram reels', placeholder: true },
  { type: 'case', href: '/{lang}/work/teslahub/', img: '/img/cases/teslahub-s1.webp', title: 'EV Spot Service / Web design' },
  { type: 'post', href: CONTACTS.instagram, title: 'TODO: Instagram post', placeholder: true },
  { type: 'behance', href: CONTACTS.behance, title: 'Behance — behance.net/PavelRoman' },
];
