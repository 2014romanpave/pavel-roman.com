import { type Language } from '../translations';

export interface Course {
  id: string;
  image: string;
  price: string;
  translations: Record<Language, {
    title: string;
    description: string;
    whatYouGet: string[];
    modules: string[];
  }>;
}

export const COURSES: Course[] = [
  {
    id: 'ux-ui-mastery',
    image: '/img/course-ux.jpg',
    price: '$299',
    translations: {
      en: {
        title: 'UX/UI Mastery Course',
        description: 'Deep dive into interface design.',
        whatYouGet: [
          'Advanced UI design skills',
          'Professional portfolio projects',
          'User research methodologies',
          'Design system architecture'
        ],
        modules: [
          'Introduction to UX Research',
          'Wireframing & Prototyping',
          'Visual Design Principles',
          'Design Systems in Figma',
          'Final Project & Portfolio'
        ]
      },
      ua: {
        title: 'UX/UI Mastery Course',
        description: 'Глибоке занурення в дизайн інтерфейсів.',
        whatYouGet: [
          'Просунуті навички UI дизайну',
          'Професійні проєкти для портфоліо',
          'Методології UX досліджень',
          'Архітектура дизайн-систем'
        ],
        modules: [
          'Вступ до UX досліджень',
          'Вайрфреймінг та прототипування',
          'Принципи візуального дизайну',
          'Дизайн-системи у Figma',
          'Фінальний проєкт та портфоліо'
        ]
      }
    }
  },
  {
    id: 'graphics-for-websites',
    image: '/img/course-graphics.jpg',
    price: '$199',
    translations: {
      en: {
        title: 'Graphics for Websites',
        description: 'Quickly create premium graphics and assets for websites using AI (Nano Banana).',
        whatYouGet: [
          'Ability to generate high-end content',
          'Mastering AI prompts for design',
          'Workflow optimization with AI tools',
          'Ready-to-use web assets'
        ],
        modules: [
          'Basics of AI Generation',
          'Advanced Prompt Engineering',
          'Integrating AI into Web Design',
          'Post-processing & Refinement',
          'Creating a Graphics Library'
        ]
      },
      ua: {
        title: 'Graphics for Websites',
        description: 'Швидке створення преміальної графіки та ассетів для сайтів за допомогою ШІ (Nano Banana).',
        whatYouGet: [
          'Вміння генерувати преміальний контент',
          'Оволодіння промптами для дизайну',
          'Оптимізація робочого процесу за допомогою ШІ',
          'Готові до використання веб-активи'
        ],
        modules: [
          'Основи генерації ШІ',
          'Просунутий промпт-інжиніринг',
          'Інтеграція ШІ у веб-дизайн',
          'Пост-обробка та вдосконалення',
          'Створення бібліотеки графіки'
        ]
      }
    }
  }
];
