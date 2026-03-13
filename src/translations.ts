export type Language = 'en' | 'ua';

export interface ProjectTranslation {
  title: string;
  preview: string;
  content: string;
  role?: string;
  task?: string;
  solutions?: string[];
  outcome?: string;
}

export interface TranslationDict {
  role: string;
  menu_1: string;
  menu_2: string;
  menu_3: string;
  menu_1_desc: string;
  menu_2_desc: string;
  menu_3_desc: string;
  menu_4_desc: string;
  menu_store: string;
  back: string;
  works_header: string;
  nav_works: string;
  about_hello: string;
  about_text: string;
  form_name: string;
  form_contact: string;
  form_message: string;
  discuss: string;
  dock_works: string;
  dock_about: string;
  dock_audit: string;
  works_subtitle: string;
  filter_all: string;
  filter_creatives: string;
  filter_uxui: string;
  cta_discuss: string;
  cta_audit: string;
  cta_discuss_project: string;
  cta_boost: string;
  cta_impressed: string;
  cta_lets_discuss: string;
  cta_order_project: string;
  cta_order_design: string;
  buy_telegram: string;
  course_modules_title: string;
  course_get_title: string;
  purchase_contact_placeholder: string;
  purchase_send: string;
  purchase_success_new: string;
  coming_soon_title: string;
  coming_soon_subtitle: string;
  back_to_home: string;
  projects: Record<string, ProjectTranslation>;
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    role: "PAVEL ROMAN",
    menu_1: "AD CREATIVES",
    menu_2: "UX-UI DESIGN",
    menu_3: "ABOUT ME",
    menu_1_desc: "Premium visuals for your brand.",
    menu_2_desc: "Interfaces that drive conversions.",
    menu_3_desc: "Experience and design philosophy.",
    menu_4_desc: "Turn ideas into digital products.",
    menu_store: "STORE",
    back: "BACK",
    works_header: "SELECTED WORKS",
    nav_works: "MY TRACE",
    works_subtitle: "CURATED CASES",
    about_hello: "Hi. I'm Pavel Roman. I design digital experiences and creatives that drive real business impact. From the first sketch to the final pixel, I create solutions designed to scale companies and engage audiences.",
    about_text: "I develop end-to-end digital products. I design static and video creatives for targeted ads, build modern websites, apps, and brand identity. Beyond design, I help brands grow by crafting social media strategies and setting up effective ad campaigns. My goal is to deliver tools that generate real profit.",
    form_name: "NAME",
    form_contact: "CONTACT / TELEGRAM",
    form_message: "PROJECT LINK / DETAILS",
    discuss: "DISCUSS A PROJECT",
    dock_works: "WORKS",
    dock_about: "ABOUT",
    dock_audit: "ORDER",
    filter_all: "ALL",
    filter_creatives: "AD CREATIVES",
    filter_uxui: "UX-UI DESIGN",
    cta_discuss: "DISCUSS A PROJECT",
    cta_audit: "GET A FREE AUDIT",
    cta_discuss_project: "DISCUSS YOUR PROJECT",
    cta_boost: "BOOST YOUR BUSINESS",
    cta_impressed: "IMPRESSED BY THE RESULT?",
    cta_lets_discuss: "LET'S DISCUSS YOUR PROJECT",
    cta_order_project: "ORDER PROJECT",
    cta_order_design: "ORDER DESIGN",
    buy_telegram: 'BUY VIA TELEGRAM',
    course_modules_title: 'COURSE MODULES',
    course_get_title: 'WHAT YOU GET',
    purchase_contact_placeholder: 'Your Telegram (@username) or phone number',
    purchase_send: 'SEND REQUEST',
    purchase_success_new: 'Request sent! I will write to you in Telegram within a couple of hours.',
    coming_soon_title: 'Products under development',
    coming_soon_subtitle: 'Stay tuned for updates',
    back_to_home: 'Back to Home',
    projects: {
      'vogue-campaign': {
        title: "VOGUE CAMPAIGN",
        preview: "Visual Identity & Social Assets",
        content: "A comprehensive visual overhaul for Vogue Magazine's summer campaign. We focused on creating a digital-first identity that speaks to Gen-Z while preserving the heritage of the brand.\n\nThe project involved art direction, motion design, and a complete social media toolkit.",
        role: "Lead Designer & Art Director",
        task: "Create a cohesive visual identity for the upcoming summer campaign that resonates with a younger, digital-native audience while maintaining brand prestige.",
        solutions: [
          "Developed a vibrant color palette inspired by Mediterranean landscapes.",
          "Designed over 50 social media assets including motion graphics and static posts.",
          "Created a custom typography system for campaign headlines."
        ],
        outcome: "The campaign saw a 45% increase in engagement compared to the previous year and was featured in several design publications."
      },
       'vogue-campaig': {
        title: "VOGUE CAMPAIGN",
        preview: "Visual Identity & Social Assets",
        content: "A comprehensive visual overhaul for Vogue Magazine's summer campaign. We focused on creating a digital-first identity that speaks to Gen-Z while preserving the heritage of the brand.\n\nThe project involved art direction, motion design, and a complete social media toolkit.",
        role: "Lead Designer & Art Director",
        task: "Create a cohesive visual identity for the upcoming summer campaign that resonates with a younger, digital-native audience while maintaining brand prestige.",
        solutions: [
          "Developed a vibrant color palette inspired by Mediterranean landscapes.",
          "Designed over 50 social media assets including motion graphics and static posts.",
          "Created a custom typography system for campaign headlines."
        ],
        outcome: "The campaign saw a 45% increase in engagement compared to the previous year and was featured in several design publications."
      },
      'minimal-ecom': {
        title: "MINIMAL E-COM",
        preview: "Mobile First Experience",
        content: "Minimalist e-commerce interface designed for high-end fashion brands. Focus on speed, clarity, and seamless checkout experience.\n\nEvery interaction was polished to provide a premium feel on mobile devices."
      }
    }
  },
  ua: {
    role: "PAVEL ROMAN",
    menu_1: "РЕКЛАМНІ КРЕАТИВИ",
    menu_2: "UX-UI ДИЗАЙН",
    menu_3: "ПРО МЕНЕ",
    menu_1_desc: "Преміальний візуал для вашого бренду.",
    menu_2_desc: "Інтерфейси, що підвищують конверсію.",
    menu_3_desc: "Досвід та філософія дизайну.",
    menu_4_desc: "Перетворюємо ідеї на цифрові продукти.",
    menu_store: "STORE",
    back: "НАЗАД",
    works_header: "ВИБРАНІ РОБОТИ",
    nav_works: "МІЙ СЛІД",
    works_subtitle: "КУРОВАНІ КЕЙСИ",
    about_hello: "Привіт. Я Павел Роман. Я проєктую цифрові продукти та креативи, які драйвлять бізнес. Від першої ідеї до фінального пікселя — я створюю рішення, що масштабують компанії та захоплюють увагу аудиторії.",
    about_text: "Я розробляю цифрові продукти «під ключ». Створюю статичні та відеокреативи для таргетованої реклами, розробляю сучасні веб-сайти, додатки та айдентику брендів. Окрім дизайну, я допомагаю брендам рости, розробляючи стратегії для соціальних мереж та налаштовуючи ефективні рекламні кампанії. Моя мета — створювати інструменти, які приносять реальний прибуток.",
    form_name: "ІМ'Я",
    form_contact: "КОНТАКТ / TELEGRAM",
    form_message: "ПОСИЛАННЯ НА ПРОЄКТ / ДЕТАЛІ",
    discuss: "ОБГОВОРИТИ ПРОЕКТ",
    dock_works: "РОБОТИ",
    dock_about: "ПРО МЕНЕ",
    dock_audit: "ORDER",
    filter_all: "ВСІ",
    filter_creatives: "КРЕАТИВИ",
    filter_uxui: "UX-UI ДИЗАЙН",
    cta_discuss: "ОБГОВОРИТИ ПРОЄКТ",
    cta_audit: "БЕЗКОШТОВНИЙ АУДИТ",
    cta_discuss_project: "ОБГОВОРИТИ ВАШ ПРОЄКТ",
    cta_boost: "ПРОКАЧАТИ ВАШ БІЗНЕС",
    cta_impressed: "ВРАЖЕНІ РЕЗУЛЬТАТОМ?",
    cta_lets_discuss: "ОБГОВОРИМО ВАШ ПРОЄКТ",
    cta_order_project: "ЗАМОВИТИ ПРОЄКТ",
    cta_order_design: "ЗАМОВИТИ ДИЗАЙН",
    buy_telegram: 'КУПИТИ ЧЕРЕЗ TELEGRAM',
    course_modules_title: 'МОДУЛІ КУРСУ',
    course_get_title: 'ЩО ВИ ОТРИМАЄТЕ',
    purchase_contact_placeholder: 'Ваш Telegram (@username) або номер телефону',
    purchase_send: 'ВІДПРАВИТИ ЗАЯВКУ',
    purchase_success_new: 'Заявка відправлена! Я напишу вам у Telegram протягом пари годин.',
    coming_soon_title: 'Продукти в розробці',
    coming_soon_subtitle: 'Слідкуйте за оновленнями',
    back_to_home: 'Назад на головну',
    projects: {
      'vogue-campaign': {
        title: "VOGUE CAMPAIGN",
        preview: "Візуальна айдентика та активи",
        content: "Комплексне візуальне оновлення літньої кампанії Vogue Magazine. Ми зосередилися на створенні digital-first айдентики, яка звертається до покоління Z, зберігаючи при цьому спадщину бренду.\n\nПроєкт включав арт-дирекшн, моушн-дизайн та повний набір інструментів для соціальних мереж.",
        role: "Провідний дизайнер та арт-директор",
        task: "Створити цілісну візуальну айдентику для майбутньої літньої кампанії, яка резонує з молодою цифровою аудиторією, зберігаючи престиж бренду.",
        solutions: [
          "Розроблено яскраву кольорову палітру, натхненну середземноморськими пейзажами.",
          "Спроектовано понад 50 активів для соціальних мереж, включаючи моушн-графіку та статичні пости.",
          "Створено кастомну типографічну систему для заголовків кампанії."
        ],
        outcome: "Кампанія зафіксувала зростання залученості на 45% порівняно з попереднім роком і була відзначена у кількох дизайнерських виданнях."
      },
      'vogue-campaig': {
        title: "VOGUE CAMPAIGN",
        preview: "Візуальна айдентика та активи",
        content: "Комплексне візуальне оновлення літньої кампанії Vogue Magazine. Ми зосередилися на створенні digital-first айдентики, яка звертається до покоління Z, зберігаючи при цьому спадщину бренду.\n\nПроєкт включав арт-дирекшн, моушн-дизайн та повний набір інструментів для соціальних мереж.",
        role: "Провідний дизайнер та арт-директор",
        task: "Створити цілісну візуальну айдентику для майбутньої літньої кампанії, яка резонує з молодою цифровою аудиторією, зберігаючи престиж бренду.",
        solutions: [
          "Розроблено яскраву кольорову палітру, натхненну середземноморськими пейзажами.",
          "Спроектовано понад 50 активів для соціальних мереж, включаючи моушн-графіку та статичні пости.",
          "Створено кастомну типографічну систему для заголовків кампанії."
        ],
        outcome: "Кампанія зафіксувала зростання залученості на 45% порівняно з попереднім роком і була відзначена у кількох дизайнерських виданнях."
      },
      'minimal-ecom': {
        title: "MINIMAL E-COM",
        preview: "Mobile First досвід",
        content: "Мінімалістичний інтерфейс електронної комерції, розроблений для модних брендів преміум-класу. Фокус на швидкості, чіткості та безшовному досвіді оформлення замовлення.\n\nКожна взаємодія була відшліфована для створення преміального відчуття на мобільних пристроях."
      }
    }
  }
};

export type TranslationKey = keyof TranslationDict;
