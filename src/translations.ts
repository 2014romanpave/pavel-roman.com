export type Language = 'en' | 'ua';

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
  work_1_title: string;
  work_1_desc: string;
  work_2_title: string;
  work_2_desc: string;
  work_3_title: string;
  work_3_desc: string;
  work_4_title: string;
  work_4_desc: string;
  work_5_title: string;
  work_5_desc: string;
  work_6_title: string;
  work_6_desc: string;
  dock_works: string;
  dock_about: string;
  dock_audit: string;
  works_subtitle: string;
  filter_all: string;
  filter_creatives: string;
  filter_uxui: string;
  'cta.audit': string;
  'cta.discuss_project': string;
  'cta.boost': string;
  buy_telegram: string;
  course_modules_title: string;
  course_get_title: string;
  purchase_contact_placeholder: string;
  purchase_send: string;
  purchase_success_new: string;
  coming_soon_title: string;
  coming_soon_subtitle: string;
  back_to_home: string;
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
    work_1_title: "VOGUE CAMPAIGN",
    work_1_desc: "Visual Identity & Social Assets",
    work_2_title: "TECH FLOW",
    work_2_desc: "Product Design & Design System",
    work_3_title: "CRYPTO DASH",
    work_3_desc: "UX/UI & Data Visualization",
    work_4_title: "SELLING PURITY IN A SYNTHETIC WORLD",
    work_4_desc: "Translating the invisible notes of a premium fragrance through raw elemental textures.",
    work_5_title: "MINIMAL E-COM",
    work_5_desc: "Mobile First Experience",
    work_6_title: "ART GALLERY",
    work_6_desc: "Immersive Digital Space",
    dock_works: "WORKS",
    dock_about: "ABOUT",
    dock_audit: "ORDER",
    filter_all: "ALL",
    filter_creatives: "AD CREATIVES",
    filter_uxui: "UX-UI DESIGN",
    'cta.audit': 'GET A FREE VISUAL AUDIT',
    'cta.discuss_project': "LET'S DISCUSS YOUR PROJECT",
    'cta.boost': 'BOOST YOUR SALES WITH DESIGN',
    buy_telegram: 'BUY VIA TELEGRAM',
    course_modules_title: 'COURSE MODULES',
    course_get_title: 'WHAT YOU GET',
    purchase_contact_placeholder: 'Your Telegram (@username) or phone number',
    purchase_send: 'SEND REQUEST',
    purchase_success_new: 'Request sent! I will write to you in Telegram within a couple of hours.',
    coming_soon_title: 'Products under development',
    coming_soon_subtitle: 'Stay tuned for updates',
    back_to_home: 'Back to Home',
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
    work_1_title: "VOGUE CAMPAIGN",
    work_1_desc: "Візуальна айдентика та активи",
    work_2_title: "TECH FLOW",
    work_2_desc: "Продуктовий дизайн та дизайн-система",
    work_3_title: "CRYPTO DASH",
    work_3_desc: "UX/UI та візуалізація даних",
    work_4_title: "LUXE INTERIORS",
    work_4_desc: "Едіторіал веб-дизайн",
    work_5_title: "MINIMAL E-COM",
    work_5_desc: "Mobile First досвід",
    work_6_title: "ART GALLERY",
    work_6_desc: "Імерсивний цифровий простір",
    dock_works: "РОБОТИ",
    dock_about: "ПРО МЕНЕ",
    dock_audit: "ORDER",
    filter_all: "ВСІ",
    filter_creatives: "КРЕАТИВИ",
    filter_uxui: "UX-UI ДИЗАЙН",
    'cta.audit': 'ОТРИМАТИ БЕЗКОШТОВНИЙ АУДИТ',
    'cta.discuss_project': 'ОБГОВОРИМО ВАШ ПРОЄКТ?',
    'cta.boost': 'ПІДВИЩІТЬ ПРОДАЖІ',
    buy_telegram: 'КУПИТИ ЧЕРЕЗ TELEGRAM',
    course_modules_title: 'МОДУЛІ КУРСУ',
    course_get_title: 'ЩО ВИ ОТРИМАЄТЕ',
    purchase_contact_placeholder: 'Ваш Telegram (@username) або номер телефону',
    purchase_send: 'ВІДПРАВИТИ ЗАЯВКУ',
    purchase_success_new: 'Заявка відправлена! Я напишу вам у Telegram протягом пари годин.',
    coming_soon_title: 'Продукти в розробці',
    coming_soon_subtitle: 'Слідкуйте за оновленнями',
    back_to_home: 'Назад на головну',
  }
};

export type TranslationKey = keyof TranslationDict;
