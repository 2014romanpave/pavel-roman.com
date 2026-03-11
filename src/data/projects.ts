import { TranslationKey } from '../translations';

export interface Project {
  id: string;
  category: 'creative' | 'ux';
  titleKey: TranslationKey | string;
  descKey: TranslationKey | string;
  videoUrl?: string;
  client?: string;
  year?: string;
  tags?: string[];
  role?: string;
  task?: string;
  solution?: string[];
  outcome?: string;
  links?: {
    website?: string;
    behance?: string;
    figma?: string;
  };
  images?: string[];
  image: string;
}

export const PROJECTS: Project[] = [
  { 
    id: '1', 
    category: 'ux',
    titleKey: 'work_1_title', 
    descKey: 'work_1_desc', 
    image: '/img/vogue-main.webp',
    client: 'Vogue Magazine',
    year: '2024',
    tags: ['Visual Identity', 'Social Assets', 'Art Direction'],
    role: 'Lead Designer',
    task: 'Create a cohesive visual identity for the upcoming summer campaign that resonates with a younger, digital-native audience while maintaining brand prestige.',
    solution: [
      'Developed a vibrant color palette inspired by Mediterranean landscapes.',
      'Designed over 50 social media assets including motion graphics and static posts.',
      'Created a custom typography system for campaign headlines.'
    ],
    outcome: 'The campaign saw a 45% increase in engagement compared to the previous year and was featured in several design publications.',
    links: {
      website: 'https://vogue.com',
      behance: 'https://behance.net/gallery/vogue-summer'
    },
    images: [
      '/img/vogue-main.webp',
      '/img/vogue-1.webp',
      '/img/vogue-2.webp'
    ]
  },
  { 
    id: '2', 
    category: 'ux',
    titleKey: 'work_2_title', 
    descKey: 'work_2_desc', 
    image: '/img/techflow-main.webp',
    client: 'TechFlow Solutions',
    year: '2023',
    tags: ['Product Design', 'Design System', 'SaaS'],
    role: 'Senior Product Designer',
    task: 'Streamline the complex workflow of a B2B SaaS platform to reduce user friction and improve task completion rates.',
    solution: [
      'Conducted extensive user research and usability testing.',
      'Built a comprehensive design system from scratch.',
      'Redesigned the core dashboard and navigation architecture.'
    ],
    outcome: 'Task completion time was reduced by 30%, and user satisfaction scores improved by 40%.',
    links: {
      figma: 'https://figma.com/file/techflow-system'
    },
    images: [
      '/img/techflow-main.webp',
      '/img/techflow-2.webp'
    ]
  },
  { 
    id: '3', 
    category: 'ux',
    titleKey: 'work_3_title', 
    descKey: 'work_3_desc', 
    image: '/img/cryptodash-main.webp',
    client: 'CryptoDash',
    year: '2024',
    tags: ['UX/UI', 'Fintech', 'Data Viz'],
    role: 'UX/UI Designer',
    task: 'Design a high-performance cryptocurrency dashboard that provides real-time data visualization for professional traders.',
    solution: [
      'Implemented a dark-mode first interface for reduced eye strain.',
      'Developed custom charting components using D3.js principles.',
      'Optimized the mobile experience for on-the-go trading.'
    ],
    outcome: 'The platform successfully handled over $100M in daily trading volume within the first month of launch.',
    links: {
      website: 'https://cryptodash.io'
    },
    images: [
      '/img/cryptodash-main.webp',
      '/img/cryptodash-1.webp'
    ]
  },
  { id: '4', category: 'creative', titleKey: 'work_4_title', descKey: 'work_4_desc', image: '/img/luxe-interiors.webp', client: 'Luxe Interiors', year: '2024' },
  { 
    id: '5', 
    category: 'creative', 
    titleKey: 'work_5_title', 
    descKey: 'work_5_desc', 
    image: '/img/minimal-ecom.webp',
    videoUrl: '/img/creative-video.mp4',
    client: 'Minimal E-com',
    year: '2023'
  },
  { id: '6', category: 'creative', titleKey: 'work_6_title', descKey: 'work_6_desc', image: '/img/art-gallery.webp', client: 'Art Gallery', year: '2024' },
];
