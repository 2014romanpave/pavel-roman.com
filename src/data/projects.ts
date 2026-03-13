import { TranslationKey } from '../translations';

export interface Project {
  slug: string;
  category: 'creative' | 'ux';
  image: string;
  year?: string;
  client?: string;
  // Creative Specific
  gallery?: string[];
  // UX Specific
  images?: string[];
}

export const PROJECTS: Project[] = [
  { 
    slug: 'vogue-campaign', 
    category: 'ux',
    image: '/img/vogue-main.webp',
    client: 'Vogue Magazine',
    year: '2024',
    images: [
      '/img/vogue-main.webp',
      '/img/vogue-1.webp',
      '/img/vogue-2.webp'
    ]
  },
   { 
    slug: 'vogue-campaig', 
    category: 'ux',
    image: '/img/vogue-main.webp',
    client: 'Vogue Magazine',
    year: '2026',
    images: [
      '/img/vogue-main.webp',
      '/img/vogue-1.webp',
      '/img/vogue-2.webp'
    ]
  },
  { 
    slug: 'zero-fragrance', 
    category: 'creative', 
    image: '/img/zero_fragrance.webp',
    client: 'ZERO CONCEPT',
    year: '2026',
    gallery: [
      '/img/zero_fragrance.webp',
      '/img/zero_fragrance_2.webp',
      '/img/zero_fragrance_3.webp'
    ]
  },
];
