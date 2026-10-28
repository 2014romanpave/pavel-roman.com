import type { Lang } from './i18n';
type X = {
  expTitle: string; expFacts: { v: string; l: string }[]; expApproachL: string; expApproach: string[];
  fpTitle: string; fpSub: string; fpMore: string; fpTypes: Record<'post' | 'reels' | 'case' | 'behance', string>;
  courseL: string; courseText: string; courseCta: string;
  quickL: string; orForm: string; fMsgShort: string;
};
export const EXTRA: Record<Lang, X> = {
  ua: {
    expTitle: 'Досвід',
    expFacts: [
      { v: 'з 2013', l: 'у дизайні — реклама, брендинг, UX/UI, сайти' },
      { v: 'Binopt → AdBakers', l: 'досвід роботи в рекламних агенціях' },
      { v: 'Сайти + Google Ads', l: 'для автосервісів і локального бізнесу в Польщі' },
      { v: 'Познань', l: 'працюю з бізнесом по всій Польщі' },
    ],
    expApproachL: 'Підхід',
    expApproach: ['Спершу бізнес-задача, потім дизайн', 'Сайт і реклама — одна система, без посередників', 'Чесні терміни й фіксована ціна пакета', 'Після запуску — звіти та підтримка'],
    fpTitle: 'Цифровий слід', fpSub: 'Пости, рілси й нові роботи', fpMore: 'Більше', fpTypes: { post: 'Пост', reels: 'Reels', case: 'Портфоліо', behance: 'Behance' },
    courseL: 'Незабаром', courseText: 'Навчання: сайти та реклама для локального бізнесу. Напишіть у Telegram — повідомлю про старт першим.', courseCta: 'Повідомити мене',
    quickL: 'В один дотик', orForm: 'або залиште контакт — я напишу сам', fMsgShort: 'Коротко про задачу (необовʼязково)',
  },
  ru: {
    expTitle: 'Опыт',
    expFacts: [
      { v: 'с 2013', l: 'в дизайне — реклама, брендинг, UX/UI, сайты' },
      { v: 'Binopt → AdBakers', l: 'опыт работы в рекламных агентствах' },
      { v: 'Сайты + Google Ads', l: 'для автосервисов и локального бизнеса в Польше' },
      { v: 'Poznań', l: 'работаю с бизнесом по всей Польше' },
    ],
    expApproachL: 'Подход',
    expApproach: ['Сначала бизнес-задача, потом дизайн', 'Сайт и реклама — одна система, без посредников', 'Честные сроки и фиксированная цена пакета', 'После запуска — отчёты и поддержка'],
    fpTitle: 'Цифровой след', fpSub: 'Посты, рилсы и новые работы', fpMore: 'Больше', fpTypes: { post: 'Пост', reels: 'Reels', case: 'Портфолио', behance: 'Behance' },
    courseL: 'Скоро', courseText: 'Обучение: сайты и реклама для локального бизнеса. Напишите в Telegram — сообщу о старте первым.', courseCta: 'Сообщить мне',
    quickL: 'В одно касание', orForm: 'или оставьте контакт — я напишу сам', fMsgShort: 'Коротко о задаче (необязательно)',
  },
  pl: {
    expTitle: 'Doświadczenie',
    expFacts: [
      { v: 'od 2013', l: 'w designie — reklama, branding, UX/UI, strony' },
      { v: 'Binopt → AdBakers', l: 'doświadczenie w agencjach reklamowych' },
      { v: 'Strony + Google Ads', l: 'dla warsztatów i lokalnych firm w Polsce' },
      { v: 'Poznań', l: 'pracuję z firmami w całej Polsce' },
    ],
    expApproachL: 'Podejście',
    expApproach: ['Najpierw cel biznesowy, potem design', 'Strona i reklama jako jeden system, bez pośredników', 'Uczciwe terminy i stała cena pakietu', 'Po starcie — raporty i wsparcie'],
    fpTitle: 'Cyfrowy ślad', fpSub: 'Posty, rolki i nowe prace', fpMore: 'Więcej', fpTypes: { post: 'Post', reels: 'Reels', case: 'Portfolio', behance: 'Behance' },
    courseL: 'Wkrótce', courseText: 'Szkolenie: strony i reklama dla lokalnego biznesu. Napisz na Telegramie — dam znać pierwszy.', courseCta: 'Powiadom mnie',
    quickL: 'Jednym kliknięciem', orForm: 'lub zostaw kontakt — odezwę się', fMsgShort: 'Krótko o zadaniu (opcjonalnie)',
  },
  en: {
    expTitle: 'Expertise',
    expFacts: [
      { v: 'since 2013', l: 'in design — advertising, branding, UX/UI, websites' },
      { v: 'Binopt → AdBakers', l: 'advertising agency experience' },
      { v: 'Websites + Google Ads', l: 'for car services and local businesses in Poland' },
      { v: 'Poznań', l: 'working with businesses across Poland' },
    ],
    expApproachL: 'Approach',
    expApproach: ['Business goal first, design second', 'Website and ads as one system, no middlemen', 'Honest timelines and fixed package price', 'Reports and support after launch'],
    fpTitle: 'Digital footprint', fpSub: 'Posts, reels and new work', fpMore: 'More', fpTypes: { post: 'Post', reels: 'Reels', case: 'Portfolio', behance: 'Behance' },
    courseL: 'Coming soon', courseText: 'Learning: websites and ads for local businesses. Message me on Telegram to hear first when it starts.', courseCta: 'Notify me',
    quickL: 'One tap', orForm: 'or leave your contact — I will reach out', fMsgShort: 'Your task in one line (optional)',
  },
};
/** Toggle the "coming soon: courses" teaser. */
export const SHOW_COURSES_TEASER = true;
