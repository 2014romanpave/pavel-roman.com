export const LANGS = ['ua', 'ru', 'pl', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const HTML_LANG: Record<Lang, string> = { ua: 'uk', ru: 'ru', pl: 'pl', en: 'en' };
export const LANG_LABEL: Record<Lang, string> = { ua: 'UA', ru: 'RU', pl: 'PL', en: 'EN' };

export const CONTACTS = {
  telegram: 'https://t.me/tgPavelRoman',
  telegramHandle: '@tgPavelRoman',
  whatsapp: 'https://wa.me/48696992756',
  phone: '+48 696 992 756',
  email: '2014romanpavel@gmail.com',
  behance: 'https://www.behance.net/PavelRoman',
  instagram: 'https://www.instagram.com/pavelroman.web/',
  instagramHandle: '@pavelroman.web',
};

export const SITE_URL = 'https://pavelroman.com';

type Case = { title: string; tag: string; task: string; did: string[]; result: string[] };
type Pack = { name: string; price: string; items: string[]; term: string };

export interface Dict {
  metaTitle: string; metaDesc: string;
  nav: { cases: string; services: string; process: string; contact: string };
  heroEyebrow: string; heroTitle: string; heroSub: string; ctaTelegram: string; ctaAudit: string;
  trust: { v: string; l: string }[];
  casesTitle: string; casesSub: string; taskL: string; didL: string; resultL: string; visit: string;
  cases: { awto: Case; tesla: Case };
  servicesTitle: string; servicesSub: string; from: string; packs: Pack[]; popular: string;
  processTitle: string; steps: { t: string; d: string }[];
  aboutTitle: string; aboutText: string;
  faqTitle: string; faq: { q: string; a: string }[];
  contactTitle: string; contactSub: string;
  fName: string; fContact: string; fMsg: string; fSend: string; fSending: string; fOk: string; fErr: string;
  footer: string;
}

const ua: Dict = {
  metaTitle: 'Роман Павел — сайти та Google Ads для автосервісів і бізнесу в Польщі',
  metaDesc: 'Дизайн і розробка сайтів, налаштування Google Ads та айдентика для автосервісів і локального бізнесу в Польщі. Познань. 13+ років у дизайні..',
  nav: { cases: 'Кейси', services: 'Послуги', process: 'Процес', contact: 'Контакт' },
  heroEyebrow: 'Web & Brand Designer · Познань',
  heroTitle: 'Сайти та Google Ads для автосервісів і локального бізнесу в Польщі',
  heroSub: 'Роблю під ключ сайт і рекламу, які приводять заявки: дизайн, розробка, Google Ads і звіти — ви отримуєте клієнтів, а не просто гарну сторінку.',
  ctaTelegram: 'Написати в Telegram', ctaAudit: 'Безкоштовний аудит',
  trust: [
    { v: '13+', l: 'років у дизайні' },
    { v: 'Познань', l: 'працюю в Польщі' },
    { v: 'Авто · EV', l: 'основна ніша' },
    { v: 'Сайт + Ads', l: 'одна команда, один відповідальний' },
  ],
  casesTitle: 'Кейси', casesSub: 'Сайти, брендинг та інтерфейси — живі проєкти й продукти.',
  taskL: 'Задача', didL: 'Що зроблено', resultL: 'Результат', visit: 'Відкрити сайт',
  cases: {
    awto: {
      title: 'Awtonapraw.pl', tag: 'Сайт + Google Ads · Автосервіс, Познань',
      task: 'Автосервісу потрібен був сайт, який приводить клієнтів з Google, а не просто візитка.',
      did: ['Дизайн і розробка сайту з нуля', 'Двомовність PL / UA', 'Послуги з цінами та форма заявки', 'Налаштування рекламної кампанії Google Ads', 'Локальне SEO: Познань, адреса, карта'],
      result: ['Сайт запущено та працює як джерело заявок', 'Клієнт може записатися в 2 кліки: форма або дзвінок', 'Реклама веде на конкретні послуги з цінами'],
    },
    tesla: {
      title: 'EV Spot Service (teslahubservice.com)', tag: 'Дизайн + Webflow · Сервіс електромобілів',
      task: 'Сервісу та продажу електромобілів потрібен преміальний сайт під аудиторію власників Tesla.',
      did: ['Повний дизайн з нуля', 'Верстка на Webflow', 'Каталог авто в наявності', 'Блоки послуг: сервіс, детейлінг, запчастини', 'Анімації та адаптив'],
      result: ['Преміальний образ бренду на рівні аудиторії', 'Зрозуміла структура: послуги, авто, контакти', 'Зручно з телефону: адаптивна версія'],
    },
  },
  servicesTitle: 'Послуги та ціни', servicesSub: 'Фіксований обсяг і зрозуміла ціна. Точна сума — після короткого брифу.',
  from: 'від', popular: 'Найчастіше обирають',
  packs: [
    { name: 'Сайт + Google Ads під ключ', price: '8 000 PLN', term: '3–5 тижнів', items: ['Дизайн і розробка сайту', 'Продаючі тексти', 'Налаштування Google Ads і аналітики', 'Google Business Profile', 'Підтримка першого місяця'] },
    { name: 'Лендинг', price: '3 500 PLN', term: '1–2 тижні', items: ['Односторінковий сайт під послугу або акцію', 'Форма заявки в Telegram / email', 'Адаптив і базове SEO'] },
    { name: 'Айдентика', price: '4 000 PLN', term: '2–3 тижні', items: ['Логотип і фірмові кольори', 'Шрифти та гайд', 'Візитки, вивіска, соцмережі'] },
  ],
  processTitle: 'Як працюємо',
  steps: [
    { t: 'Дзвінок або чат', d: '15 хвилин: розбираємо бізнес, клієнтів і задачу.' },
    { t: 'Пропозиція', d: 'Обсяг, терміни та фіксована ціна.' },
    { t: 'Дизайн і розробка', d: 'Показую етапи, вносимо правки.' },
    { t: 'Запуск і реклама', d: 'Домен, аналітика, Google Ads — і перші заявки.' },
  ],
  aboutTitle: 'Про мене',
  aboutText: 'Я Роман Павел, дизайнер з 2013 року. Працюю з рекламою, брендингом, UX/UI та сайтами. Зараз живу в Познані й допомагаю локальному бізнесу — насамперед автосервісам — отримувати клієнтів з інтернету.',
  faqTitle: 'Питання',
  faq: [
    { q: 'Що я отримаю в результаті?', a: 'Готовий сайт, налаштовану рекламу та аналітику, звіти по заявках і підтримку після запуску.' },
    { q: 'Що потрібно від мене?', a: 'Фото, список послуг і цін, контакти. Решту беру на себе.' },
  ],
  contactTitle: 'Обговоримо проєкт?', contactSub: 'Найшвидше — у Telegram. Або залиште заявку, я відповім протягом дня.',
  fName: "Ім'я", fContact: 'Telegram, телефон або email', fMsg: 'Розкажіть про бізнес і задачу', fSend: 'Надіслати', fSending: 'Надсилаю…', fOk: 'Дякую! Я скоро відповім.', fErr: 'Не вдалося надіслати. Напишіть, будь ласка, у Telegram.',
  footer: 'Роман Павел · Познань, Польща',
};

const ru: Dict = {
  metaTitle: 'Роман Павел — сайты и Google Ads для автосервисов и бизнеса в Польше',
  metaDesc: 'Дизайн и разработка сайтов, настройка Google Ads и айдентика для автосервисов и локального бизнеса в Польше. Познань. 13+ лет в дизайне..',
  nav: { cases: 'Кейсы', services: 'Услуги', process: 'Процесс', contact: 'Контакт' },
  heroEyebrow: 'Web & Brand Designer · Познань',
  heroTitle: 'Сайты и Google Ads для автосервисов и локального бизнеса в Польше',
  heroSub: 'Делаю под ключ сайт и рекламу, которые приводят заявки: дизайн, разработка, Google Ads и отчёты — вы получаете клиентов, а не просто красивую страницу.',
  ctaTelegram: 'Написать в Telegram', ctaAudit: 'Бесплатный аудит',
  trust: [
    { v: '13+', l: 'лет в дизайне' },
    { v: 'Познань', l: 'работаю в Польше' },
    { v: 'Авто · EV', l: 'основная ниша' },
    { v: 'Сайт + Ads', l: 'один подрядчик, одна ответственность' },
  ],
  casesTitle: 'Кейсы', casesSub: 'Сайты, брендинг и интерфейсы — живые проекты и продукты.',
  taskL: 'Задача', didL: 'Что сделано', resultL: 'Результат', visit: 'Открыть сайт',
  cases: {
    awto: {
      title: 'Awtonapraw.pl', tag: 'Сайт + Google Ads · Автосервис, Познань',
      task: 'Автосервису нужен был сайт, который приводит клиентов из Google, а не просто визитка.',
      did: ['Дизайн и разработка сайта с нуля', 'Два языка PL / UA', 'Услуги с ценами и форма заявки', 'Настройка рекламной кампании Google Ads', 'Локальное SEO: Познань, адрес, карта'],
      result: ['Сайт запущен и работает как источник заявок', 'Клиент записывается в 2 клика: форма или звонок', 'Реклама ведёт на конкретные услуги с ценами'],
    },
    tesla: {
      title: 'EV Spot Service (teslahubservice.com)', tag: 'Дизайн + Webflow · Сервис электромобилей',
      task: 'Сервису и продаже электромобилей нужен был премиальный сайт под аудиторию владельцев Tesla.',
      did: ['Полный дизайн с нуля', 'Вёрстка на Webflow', 'Каталог авто в наличии', 'Блоки услуг: сервис, детейлинг, запчасти', 'Анимации и адаптив'],
      result: ['Премиальный образ бренда на уровне аудитории', 'Понятная структура: услуги, авто, контакты', 'Удобно с телефона: адаптивная версия'],
    },
  },
  servicesTitle: 'Услуги и цены', servicesSub: 'Фиксированный объём и понятная цена. Точная сумма — после короткого брифа.',
  from: 'от', popular: 'Чаще всего выбирают',
  packs: [
    { name: 'Сайт + Google Ads под ключ', price: '8 000 PLN', term: '3–5 недель', items: ['Дизайн и разработка сайта', 'Продающие тексты', 'Настройка Google Ads и аналитики', 'Google Business Profile', 'Поддержка первый месяц'] },
    { name: 'Лендинг', price: '3 500 PLN', term: '1–2 недели', items: ['Одностраничный сайт под услугу или акцию', 'Форма заявки в Telegram / email', 'Адаптив и базовое SEO'] },
    { name: 'Айдентика', price: '4 000 PLN', term: '2–3 недели', items: ['Логотип и фирменные цвета', 'Шрифты и гайд', 'Визитки, вывеска, соцсети'] },
  ],
  processTitle: 'Как работаем',
  steps: [
    { t: 'Звонок или чат', d: '15 минут: разбираем бизнес, клиентов и задачу.' },
    { t: 'Предложение', d: 'Объём, сроки и фиксированная цена.' },
    { t: 'Дизайн и разработка', d: 'Показываю этапы, вносим правки.' },
    { t: 'Запуск и реклама', d: 'Домен, аналитика, Google Ads — и первые заявки.' },
  ],
  aboutTitle: 'Обо мне',
  aboutText: 'Я Роман Павел, дизайнер с 2013 года. Работаю с рекламой, брендингом, UX/UI и сайтами. Сейчас живу в Познани и помогаю локальному бизнесу — прежде всего автосервисам — получать клиентов из интернета.',
  faqTitle: 'Вопросы',
  faq: [
    { q: 'Что я получу в итоге?', a: 'Готовый сайт, настроенную рекламу и аналитику, отчёты по заявкам и поддержку после запуска.' },
    { q: 'Что нужно от меня?', a: 'Фото, список услуг и цен, контакты. Остальное беру на себя.' },
  ],
  contactTitle: 'Обсудим проект?', contactSub: 'Быстрее всего — в Telegram. Или оставьте заявку, отвечу в течение дня.',
  fName: 'Имя', fContact: 'Telegram, телефон или email', fMsg: 'Расскажите о бизнесе и задаче', fSend: 'Отправить', fSending: 'Отправляю…', fOk: 'Спасибо! Скоро отвечу.', fErr: 'Не удалось отправить. Напишите, пожалуйста, в Telegram.',
  footer: 'Роман Павел · Познань, Польша',
};

const pl: Dict = {
  metaTitle: 'Roman Pavel — strony WWW i Google Ads dla warsztatów i firm lokalnych',
  metaDesc: 'Projektowanie i tworzenie stron, kampanie Google Ads i identyfikacja wizualna dla warsztatów samochodowych i lokalnych firm w Polsce. Poznań. 13+ lat w designie.',
  nav: { cases: 'Realizacje', services: 'Usługi', process: 'Proces', contact: 'Kontakt' },
  heroEyebrow: 'Web & Brand Designer · Poznań',
  heroTitle: 'Strony WWW i Google Ads dla warsztatów samochodowych i lokalnych firm',
  heroSub: 'Strona i reklama pod klucz, które przynoszą zapytania: projekt, wdrożenie, Google Ads i raporty — dostajesz klientów, a nie tylko ładną stronę.',
  ctaTelegram: 'Napisz na Telegramie', ctaAudit: 'Darmowy audyt',
  trust: [
    { v: '13+', l: 'lat w designie' },
    { v: 'Poznań', l: 'działam w Polsce' },
    { v: 'Auto · EV', l: 'główna branża' },
    { v: 'Strona + Ads', l: 'jeden wykonawca, jedna odpowiedzialność' },
  ],
  casesTitle: 'Realizacje', casesSub: 'Strony, branding i interfejsy — działające projekty i produkty.',
  taskL: 'Zadanie', didL: 'Co zrobiłem', resultL: 'Efekt', visit: 'Zobacz stronę',
  cases: {
    awto: {
      title: 'Awtonapraw.pl', tag: 'Strona + Google Ads · Warsztat, Poznań',
      task: 'Warsztat potrzebował strony, która przyprowadza klientów z Google, a nie tylko wizytówki.',
      did: ['Projekt i wdrożenie strony od zera', 'Wersje PL / UA', 'Usługi z cenami i formularz zgłoszenia', 'Konfiguracja kampanii Google Ads', 'Lokalne SEO: Poznań, adres, mapa'],
      result: ['Strona działa jako źródło zgłoszeń', 'Klient umawia wizytę w 2 kliknięcia', 'Reklamy prowadzą do konkretnych usług z cenami'],
    },
    tesla: {
      title: 'EV Spot Service (teslahubservice.com)', tag: 'Projekt + Webflow · Serwis aut elektrycznych',
      task: 'Serwis i sprzedaż aut elektrycznych potrzebowały strony premium dla właścicieli Tesli.',
      did: ['Pełny projekt od zera', 'Wdrożenie w Webflow', 'Katalog aut dostępnych od ręki', 'Sekcje usług: serwis, detailing, części', 'Animacje i wersja mobilna'],
      result: ['Wizerunek premium dopasowany do klientów', 'Jasna struktura: usługi, auta, kontakt', 'Wygodna na telefonie: pełna wersja mobilna'],
    },
  },
  servicesTitle: 'Usługi i ceny', servicesSub: 'Stały zakres i jasna cena. Dokładna kwota po krótkim briefie.',
  from: 'od', popular: 'Najczęściej wybierane',
  packs: [
    { name: 'Strona + Google Ads pod klucz', price: '8 000 PLN', term: '3–5 tygodni', items: ['Projekt i wdrożenie strony', 'Teksty sprzedażowe', 'Google Ads i analityka', 'Profil Firmy w Google', 'Wsparcie przez pierwszy miesiąc'] },
    { name: 'Landing page', price: '3 500 PLN', term: '1–2 tygodnie', items: ['Strona jednej usługi lub promocji', 'Formularz do Telegrama / e-mail', 'Wersja mobilna i podstawowe SEO'] },
    { name: 'Identyfikacja wizualna', price: '4 000 PLN', term: '2–3 tygodnie', items: ['Logo i kolory marki', 'Fonty i księga znaku', 'Wizytówki, szyld, social media'] },
  ],
  processTitle: 'Jak pracujemy',
  steps: [
    { t: 'Wiadomość', d: 'Opisujesz firmę, klientów i zadanie.' },
    { t: 'Oferta', d: 'Zakres, terminy i stała cena.' },
    { t: 'Projekt i wdrożenie', d: 'Pokazuję etapy, nanosimy poprawki.' },
    { t: 'Start i reklama', d: 'Domena, analityka, Google Ads i pierwsze zgłoszenia.' },
  ],
  aboutTitle: 'O mnie',
  aboutText: 'Jestem Roman Pavel, projektant od 2013 roku: reklama, branding, UX/UI i strony WWW. Mieszkam w Poznaniu i pomagam lokalnym firmom — przede wszystkim warsztatom — zdobywać klientów z internetu.',
  faqTitle: 'Pytania',
  faq: [
    { q: 'Co dostanę na koniec?', a: 'Gotową stronę, skonfigurowaną reklamę i analitykę, raporty z zapytań oraz wsparcie po starcie.' },
    { q: 'Czego potrzebujesz ode mnie?', a: 'Zdjęć, listy usług i cen oraz danych kontaktowych. Resztą zajmę się ja.' },
    { q: 'Ile trwa realizacja?', a: 'Od 1 do 5 tygodni, zależnie od pakietu.' },
  ],
  contactTitle: 'Porozmawiajmy o projekcie', contactSub: 'Najszybciej na Telegramie. Możesz też zostawić zgłoszenie — odpowiem w ciągu dnia.',
  fName: 'Imię', fContact: 'Telegram, telefon lub e-mail', fMsg: 'Opisz firmę i zadanie', fSend: 'Wyślij', fSending: 'Wysyłanie…', fOk: 'Dziękuję! Wkrótce odpowiem.', fErr: 'Nie udało się wysłać. Napisz proszę na Telegramie.',
  footer: 'Roman Pavel · Poznań, Polska',
};

const en: Dict = {
  metaTitle: 'Roman Pavel — websites & Google Ads for car services and local businesses in Poland',
  metaDesc: 'Website design and development, Google Ads setup and brand identity for car services and local businesses in Poland. Based in Poznań. 13+ years in design.',
  nav: { cases: 'Cases', services: 'Services', process: 'Process', contact: 'Contact' },
  heroEyebrow: 'Web & Brand Designer · Poznań',
  heroTitle: 'Websites and Google Ads for car services and local businesses in Poland',
  heroSub: 'Turnkey website and ads that bring in leads: design, development, Google Ads and reports — you get clients, not just a pretty page.',
  ctaTelegram: 'Message on Telegram', ctaAudit: 'Free audit',
  trust: [
    { v: '13+', l: 'years in design' },
    { v: 'Poznań', l: 'based in Poland' },
    { v: 'Auto · EV', l: 'core niche' },
    { v: 'Website + Ads', l: 'one contractor, one point of responsibility' },
  ],
  casesTitle: 'Cases', casesSub: 'Websites, branding and interfaces — live projects and products.',
  taskL: 'Task', didL: 'What I did', resultL: 'Result', visit: 'Visit site',
  cases: {
    awto: {
      title: 'Awtonapraw.pl', tag: 'Website + Google Ads · Car service, Poznań',
      task: 'A car service needed a website that brings customers from Google, not just a business card.',
      did: ['Website designed and built from scratch', 'PL / UA versions', 'Services with prices and a lead form', 'Google Ads campaign setup', 'Local SEO: Poznań, address, map'],
      result: ['Live site working as a lead source', 'Customers book in 2 clicks: form or call', 'Ads lead to specific services with prices'],
    },
    tesla: {
      title: 'EV Spot Service (teslahubservice.com)', tag: 'Design + Webflow · EV service',
      task: 'An EV service and dealership needed a premium website for Tesla owners.',
      did: ['Full design from scratch', 'Built in Webflow', 'In-stock car catalogue', 'Service sections: maintenance, detailing, parts', 'Animations and responsive layout'],
      result: ['Premium brand image matching the audience', 'Clear structure: services, cars, contact', 'Mobile-friendly: fully responsive'],
    },
  },
  servicesTitle: 'Services & pricing', servicesSub: 'Fixed scope, clear price. Final quote after a short brief.',
  from: 'from', popular: 'Most popular',
  packs: [
    { name: 'Website + Google Ads, turnkey', price: '8 000 PLN', term: '3–5 weeks', items: ['Website design and development', 'Conversion copy', 'Google Ads and analytics setup', 'Google Business Profile', 'First month of support'] },
    { name: 'Landing page', price: '3 500 PLN', term: '1–2 weeks', items: ['One-page site for a service or offer', 'Lead form to Telegram / email', 'Responsive, basic SEO'] },
    { name: 'Brand identity', price: '4 000 PLN', term: '2–3 weeks', items: ['Logo and brand colours', 'Typography and guide', 'Business cards, signage, social'] },
  ],
  processTitle: 'How we work',
  steps: [
    { t: 'Message', d: 'Tell me about the business, customers and goal.' },
    { t: 'Proposal', d: 'Scope, timeline and a fixed price.' },
    { t: 'Design & build', d: 'I show progress, we iterate.' },
    { t: 'Launch & ads', d: 'Domain, analytics, Google Ads and first leads.' },
  ],
  aboutTitle: 'About',
  aboutText: "I'm Roman Pavel, a designer since 2013: advertising, branding, UX/UI and websites. Based in Poznań, I help local businesses — car services first — get customers online.",
  faqTitle: 'FAQ',
  faq: [
    { q: 'What do I get in the end?', a: 'A finished website, ads and analytics set up, lead reports and support after launch.' },
    { q: 'What do you need from me?', a: 'Photos, a list of services and prices, contact details. I handle the rest.' },
    { q: 'How long does it take?', a: '1 to 5 weeks depending on the package.' },
  ],
  contactTitle: "Let's discuss your project", contactSub: 'Fastest on Telegram. Or leave a request — I reply within a day.',
  fName: 'Name', fContact: 'Telegram, phone or email', fMsg: 'Tell me about your business and goal', fSend: 'Send', fSending: 'Sending…', fOk: "Thanks! I'll get back to you soon.", fErr: 'Could not send. Please message me on Telegram.',
  footer: 'Roman Pavel · Poznań, Poland',
};

export const DICT: Record<Lang, Dict> = { ua, ru, pl, en };
