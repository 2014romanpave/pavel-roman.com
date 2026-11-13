import { DICT, type Lang } from './i18n';
export type WorkKey = 'mintblister' | 'awto' | 'tesla' | 'glow' | 'reserba' | 'garcinia';
export type CaseBlock = { t: string; d: string };
export type PremiumCase = {
  hook: string; lead: string; role: string;
  problemL: string; problem: string; solutionL: string; solution: string;
  featuresL: string; features: CaseBlock[];
  designL: string; decisions: CaseBlock[]; note?: string;
  resultL: string; stack: string; close: string;
  ctaT: string; ctaC: string;
};
export type CaseText = { title: string; tag: string; task: string; did: string[]; result: string[]; premium?: PremiumCase };
type Gallery = { label: Record<Lang, string>; imgs: string[] };
export type Work = {
  key: WorkKey; slug: string; url?: string; host?: string; behance?: string; proto?: string;
  thumb: string; mob?: string; full?: string; shots: string[]; mobs: string[]; gallery?: Gallery;
};
const C = '/img/cases/';
const range = (p: string, a: number, b: number) => Array.from({ length: b - a + 1 }, (_, i) => `${C}${p}-${a + i}.webp`);

export const WORKS: Work[] = [
  { key: 'mintblister', slug: 'mintblister', url: 'https://mintblister.vercel.app', host: 'mintblister.vercel.app', thumb: C + 'mintblister-desktop.webp', mob: C + 'mintblister-m3.webp', full: C + 'mintblister-full.webp', shots: [], mobs: [C + 'mintblister-owned.webp', C + 'mintblister-m3.webp', C + 'mintblister-th.webp', C + 'mintblister-mobile.webp', C + 'mintblister-m2.webp', C + 'mintblister-m4.webp', C + 'mintblister-m5.webp', C + 'mintblister-public.webp', C + 'mintblister-m7.webp'] },
  { key: 'awto', slug: 'awtonapraw', url: 'https://awtonapraw.pl/', host: 'awtonapraw.pl', thumb: C + 'awtonapraw-desktop.webp', mob: C + 'awtonapraw-mobile.webp', full: C + 'awtonapraw-full.webp', shots: [C + 'awtonapraw-s1.webp', C + 'awtonapraw-s2.webp', C + 'awtonapraw-s3.webp'], mobs: [C + 'awtonapraw-mobile.webp', C + 'awtonapraw-m2.webp', C + 'awtonapraw-m3.webp'] },
  { key: 'tesla', slug: 'teslahub', url: 'https://www.teslahubservice.com/', host: 'teslahubservice.com', behance: 'https://www.behance.net/gallery/213695989/Tesla-HUB-service', thumb: C + 'teslahub-desktop.webp', mob: C + 'teslahub-mobile.webp', full: C + 'teslahub-full.webp', shots: [C + 'teslahub-s1.webp', C + 'teslahub-s2.webp', C + 'teslahub-s3.webp'], mobs: [C + 'teslahub-mobile.webp', C + 'teslahub-m2.webp', C + 'teslahub-m3.webp'],
    gallery: { label: { ua: 'Бренд під ключ: айдентика, соцмережі, друк', ru: 'Бренд под ключ: айдентика, соцсети, печать', pl: 'Marka pod klucz: identyfikacja, social media, druk', en: 'Turnkey brand: identity, social, print' }, imgs: range('teslahub-brand', 1, 7) } },
  { key: 'glow', slug: 'glow', url: 'https://glowpoznan.com/', host: 'glowpoznan.com', behance: 'https://www.behance.net/gallery/229628319/GLOW-Beauty-Salon', thumb: C + 'glow-desktop.webp', mob: C + 'glow-mobile.webp', full: C + 'glow-full.webp', shots: [], mobs: [C + 'glow-mobile.webp', C + 'glow-m2.webp', C + 'glow-m3.webp'],
    gallery: { label: { ua: 'Майстри і курси', ru: 'Мастера и курсы', pl: 'Mistrzynie i kursy', en: 'Masters and courses' }, imgs: [C + 'glow-masters.webp', C + 'glow-course-hair.webp', C + 'glow-course-makeup.webp'] } },
  { key: 'reserba', slug: 'reserba', proto: 'https://www.figma.com/proto/y4a57ujScmp3J1qO9tCpbR/Reserba?node-id=1083-14349&scaling=scale-down&content-scaling=fixed&page-id=334%3A377&starting-point-node-id=1083%3A14362', thumb: C + 'reserba-2.webp', shots: [], mobs: [],
    gallery: { label: { ua: 'Дослідження, user flow та дизайн', ru: 'Исследование, user flow и дизайн', pl: 'Badania, user flow i design', en: 'Research, user flow and design' }, imgs: range('reserba', 1, 9) } },
  { key: 'garcinia', slug: 'garcinia', behance: 'https://www.behance.net/gallery/74894321/Carcinia-Landing-page', thumb: C + 'garcinia-2.webp', shots: [], mobs: [],
    gallery: { label: { ua: 'Лендинг і мобільна версія', ru: 'Лендинг и мобильная версия', pl: 'Landing i wersja mobilna', en: 'Landing page and mobile' }, imgs: range('garcinia', 1, 3) } },
];
export const workBySlug = (s: string) => WORKS.find((w) => w.slug === s);

const NEW: Record<'mintblister' | 'glow' | 'reserba' | 'garcinia', Record<Lang, CaseText>> = {
  mintblister: {
    ua: {
      title: 'MintBlister', tag: 'Telegram Mini App · Hot Wheels / Matchbox',
      task: 'Скан блистера. Модель у гаражі. Telegram Mini App для колекціонерів Hot Wheels і Matchbox.',
      did: ['Скан блистера', 'Каталог на 1 583 моделі', 'TH / STH', 'Досягнення', 'Публічна колекція'],
      result: ['Живий продукт у Telegram і в браузері', 'Публічна колекція, яку можна надіслати', 'Від назви до запуску'],
      premium: {
        hook: 'Скан блистера. Модель у гаражі.',
        lead: 'Telegram Mini App для Hot Wheels і Matchbox.',
        role: 'Ідея, назва, інтерфейс, запуск. Збірка з допомогою ШІ.',
        problemL: 'Безлад',
        problem: 'Біля полиці не видно, чи машина вже є, чи вона рідкісна і яких моделей у серії бракує.',
        solutionL: 'Продукт',
        solution: 'Скан блистера відповідає на всі три питання і кладе нову модель у колекцію.',
        featuresL: 'Що всередині',
        features: [
          { t: 'Скан', d: 'Фото блистера. Модель розпізнається і додається. Якщо зчитування не впізнало картку, її додають вручну.' },
          { t: 'Каталог', d: '1 583 моделі. Пошук, зібрані серії, фільтри TH і STH у нижній панелі.' },
          { t: 'TH / STH', d: 'Treasure Hunt стоїть на картці разом із прогресом серії. Super Treasure Hunt є у фільтрах і в полюванні.' },
          { t: 'Досягнення', d: 'Намальовані значки. Значок STH — блистер із золотим полум’ям. Запрошення іншим колекціонерам.' },
          { t: 'Синхронізація', d: 'Supabase. Вхід на сайті через Telegram: код або QR. Колекція в Mini App і в браузері.' },
          { t: 'Публічна сторінка', d: 'Вітрина, статистика, усі машини з обкладинками, фільтри TH/STH, перемикач приватності.' },
        ],
        designL: 'Рішення',
        decisions: [
          { t: 'Скан біля полиці', d: 'Скан стоїть у центрі панелі: один дотик, і блистер можна сфотографувати або перевірити за назвою.' },
          { t: 'Без другої такої самої', d: 'Перевірка одразу показує, чи ця машина вже є в колекції.' },
          { t: 'Рідкісну не пропустити', d: 'Treasure Hunt позначено на картці, поруч прогрес серії. Super Treasure Hunt є у фільтрах і в полюванні на головній.' },
          { t: 'Видно, чого бракує', d: 'У кожної серії на головній написано, скільки зібрано і яких моделей немає.' },
          { t: 'Завжди з собою', d: 'Відкривається в Telegram, окремий застосунок ставити не потрібно. Вхід через Telegram синхронізує колекцію, публічну сторінку можна надіслати.' },
        ],
        note: 'Чорне, біле і один синій.',
        resultL: 'Запуск',
        stack: 'React · Telegram Mini App · Supabase · Vercel · Vercel AI Gateway',
        close: 'Продукт уже відкритий.',
        ctaT: 'Спробувати в Telegram',
        ctaC: 'Потрібен такий застосунок? Напишіть мені',
      },
    },
    ru: {
      title: 'MintBlister', tag: 'Telegram Mini App · Hot Wheels / Matchbox',
      task: 'Скан блистера. Модель в гараже. Telegram Mini App для коллекционеров Hot Wheels и Matchbox.',
      did: ['Скан блистера', 'Каталог на 1 583 модели', 'TH / STH', 'Достижения', 'Публичная коллекция'],
      result: ['Живой продукт в Telegram и в браузере', 'Публичная коллекция, которую можно отправить', 'От названия до запуска'],
      premium: {
        hook: 'Скан блистера. Модель в гараже.',
        lead: 'Telegram Mini App для Hot Wheels и Matchbox.',
        role: 'Идея, название, интерфейс, запуск. Сборка с помощью ИИ.',
        problemL: 'Бардак',
        problem: 'У полки не видно, есть ли уже эта машина, редкая ли она и каких моделей в серии не хватает.',
        solutionL: 'Продукт',
        solution: 'Скан блистера отвечает на все три вопроса и кладёт новую модель в коллекцию.',
        featuresL: 'Что внутри',
        features: [
          { t: 'Скан', d: 'Фото блистера. Модель распознаётся и добавляется. Если считывание не узнало карточку, её добавляют вручную.' },
          { t: 'Каталог', d: '1 583 модели. Поиск, собранные серии, фильтры TH и STH в нижней панели.' },
          { t: 'TH / STH', d: 'Treasure Hunt стоит на карточке вместе с прогрессом серии. Super Treasure Hunt есть в фильтрах и в охоте.' },
          { t: 'Достижения', d: 'Нарисованные значки. Значок STH — блистер с золотым пламенем. Приглашения другим коллекционерам.' },
          { t: 'Синхронизация', d: 'Supabase. Вход на сайте через Telegram: код или QR. Коллекция в Mini App и в браузере.' },
          { t: 'Публичная страница', d: 'Витрина, статистика, все машины с обложками, фильтры TH/STH, переключатель приватности.' },
        ],
        designL: 'Решения',
        decisions: [
          { t: 'Скан у полки', d: 'Скан стоит в центре панели: одно касание, и блистер можно сфотографировать или проверить по имени.' },
          { t: 'Без второй такой же', d: 'Проверка сразу показывает, есть ли эта машина уже в коллекции.' },
          { t: 'Редкую не пропустить', d: 'Treasure Hunt отмечен на карточке, рядом прогресс серии. Super Treasure Hunt есть в фильтрах и в охоте на главной.' },
          { t: 'Видно, чего не хватает', d: 'У каждой серии на главной написано, сколько собрано и каких моделей нет.' },
          { t: 'Всегда с собой', d: 'Открывается в Telegram, отдельное приложение ставить не нужно. Вход через Telegram синхронизирует коллекцию, публичную страницу можно отправить.' },
        ],
        note: 'Чёрное, белое и один синий.',
        resultL: 'Запуск',
        stack: 'React · Telegram Mini App · Supabase · Vercel · Vercel AI Gateway',
        close: 'Продукт уже открыт.',
        ctaT: 'Попробовать в Telegram',
        ctaC: 'Нужно такое приложение? Напишите мне',
      },
    },
    pl: {
      title: 'MintBlister', tag: 'Telegram Mini App · Hot Wheels / Matchbox',
      task: 'Skan blistra. Model w garażu. Telegram Mini App dla kolekcjonerów Hot Wheels i Matchbox.',
      did: ['Skan blistra', 'Katalog 1 583 modeli', 'TH / STH', 'Osiągnięcia', 'Publiczna kolekcja'],
      result: ['Żywy produkt w Telegramie i w przeglądarce', 'Publiczna kolekcja, którą da się wysłać', 'Od nazwy do uruchomienia'],
      premium: {
        hook: 'Skan blistra. Model w garażu.',
        lead: 'Telegram Mini App dla Hot Wheels i Matchbox.',
        role: 'Pomysł, nazwa, interfejs, start. Zbudowane z pomocą AI.',
        problemL: 'Bałagan',
        problem: 'Przy półce nie widać, czy auto już jest, czy jest rzadkie i których modeli w serii brakuje.',
        solutionL: 'Produkt',
        solution: 'Skan blistra odpowiada na te trzy pytania i dokłada nowy model do kolekcji.',
        featuresL: 'Co jest w środku',
        features: [
          { t: 'Skan', d: 'Zdjęcie blistra. Model jest rozpoznawany i dodawany. Gdy odczyt nie trafi, auto dodaje się ręcznie.' },
          { t: 'Katalog', d: '1 583 modele. Wyszukiwanie, zebrane serie, filtry TH i STH w dolnym panelu.' },
          { t: 'TH / STH', d: 'Treasure Hunt jest na karcie razem z postępem serii. Super Treasure Hunt jest w filtrach i w polowaniu.' },
          { t: 'Osiągnięcia', d: 'Rysowane odznaki. Odznaka STH to blister ze złotym płomieniem. Zaproszenia dla innych kolekcjonerów.' },
          { t: 'Synchronizacja', d: 'Supabase. Logowanie w sieci przez Telegram: kod albo QR. Kolekcja w Mini App i w przeglądarce.' },
          { t: 'Strona publiczna', d: 'Witryna, statystyki, każde auto z okładką, filtry TH/STH, przełącznik prywatności.' },
        ],
        designL: 'Decyzje',
        decisions: [
          { t: 'Skan przy półce', d: 'Skan jest na środku paska: jedno stuknięcie, i blister da się sfotografować albo sprawdzić po nazwie.' },
          { t: 'Bez drugiego takiego', d: 'Sprawdzenie od razu pokazuje, czy auto jest już w kolekcji.' },
          { t: 'Nie przegapić rzadkiego', d: 'Treasure Hunt jest oznaczony na karcie, obok postęp serii. Super Treasure Hunt jest w filtrach i w polowaniu na stronie głównej.' },
          { t: 'Widać braki', d: 'Przy każdej serii na stronie głównej widać, ile zebrano i których modeli brakuje.' },
          { t: 'Zawsze przy sobie', d: 'Działa w Telegramie, bez osobnej instalacji. Logowanie przez Telegram synchronizuje kolekcję, a publiczną stronę da się wysłać.' },
        ],
        note: 'Czerń, biel i jeden niebieski.',
        resultL: 'Start',
        stack: 'React · Telegram Mini App · Supabase · Vercel · Vercel AI Gateway',
        close: 'Produkt już działa.',
        ctaT: 'Wypróbuj w Telegramie',
        ctaC: 'Potrzebujesz takiej aplikacji? Napisz do mnie',
      },
    },
    en: {
      title: 'MintBlister', tag: 'Telegram Mini App · Hot Wheels / Matchbox',
      task: 'Scan the blister. Keep the garage. A Telegram Mini App for Hot Wheels and Matchbox collectors.',
      did: ['Blister scan', 'Catalog of 1,583 models', 'TH / STH', 'Achievements', 'Public collection'],
      result: ['Live in Telegram and in the browser', 'A public collection, ready to send', 'From the name to a launch'],
      premium: {
        hook: 'Scan the blister. Keep the garage.',
        lead: 'A Telegram Mini App for Hot Wheels and Matchbox.',
        role: 'Idea, name, interface, launch. AI-assisted build.',
        problemL: 'The mess',
        problem: 'At the shelf it is unclear whether the car is already owned, whether it is rare, and which models in the series are still missing.',
        solutionL: 'The product',
        solution: 'A blister scan answers all three and files a new model in the collection.',
        featuresL: 'Inside',
        features: [
          { t: 'Scan', d: 'Photograph the blister. The model is recognized and added. If the read misses, add the car by hand.' },
          { t: 'Catalog', d: '1,583 models. Search, series collected, and TH / STH filters in a bottom sheet.' },
          { t: 'TH / STH', d: 'Treasure Hunt is marked on the card, with series progress beside it. Super Treasure Hunt is in the filters and in the hunt.' },
          { t: 'Achievements', d: 'Illustrated badges. The STH badge is a blister with a gold flame. Invites bring other collectors in.' },
          { t: 'Sync', d: 'Supabase. Sign in on the web with Telegram, by code or QR. The collection is in the Mini App and in the browser.' },
          { t: 'Public page', d: 'Showcase, stats, every car with its cover, TH/STH filters, and a privacy toggle.' },
        ],
        designL: 'Decisions',
        decisions: [
          { t: 'Scan at the shelf', d: 'Scan sits in the center of the tab bar: one tap, then photograph the blister or check it by name.' },
          { t: 'No second copy', d: 'The check says at once whether the car is already in the collection.' },
          { t: 'Don\'t miss the rare one', d: 'A Treasure Hunt is marked on the card, with series progress beside it. Super Treasure Hunt is in the filters and in the hunt on home.' },
          { t: 'See what\'s missing', d: 'Each series on home shows how many are collected and which models are still out.' },
          { t: 'Always with you', d: 'It opens in Telegram, with nothing else to install. Signing in with Telegram syncs the collection, and the public page can be sent.' },
        ],
        note: 'Black, white, and one blue.',
        resultL: 'Shipped',
        stack: 'React · Telegram Mini App · Supabase · Vercel · Vercel AI Gateway',
        close: 'The product is open.',
        ctaT: 'Try in Telegram',
        ctaC: 'Need an app like this? Contact me',
      },
    },
  },
  glow: {
    ua: { title: 'Glow Beauty Salon', tag: 'Сайт · Салон краси, Познань', task: 'Салону потрібен був не просто сайт-вітрина, а сайт, який приводить клієнтів з пошуку, продає курси й дає легко записатися до конкретного майстра.', did: ['Новий дизайн і багатосторінковий сайт польською та українською', 'Послуги, галерея робіт і блок «Наші майстрині»: Оля та Вікторія, запис у Booksy до кожної', 'Блог із SEO-статтями — зокрема про весільний макіяж у Познані — виходить регулярно', 'Сторінка курсів /kursy: стрижки Олі (боб і боб-каре) та макіяж Вікторії, у кожного курсу своє відео', 'Лист очікування надсилає заявку в Telegram-бот майстрині', 'SEO: sitemap на 26 сторінок у Google Search Console, сторінки в індексі; Vercel Web Analytics і Speed Insights', 'Vite, React і Tailwind із пререндером, зібрано з допомогою ШІ; хостинг на Vercel, домен glowpoznan.com'], result: ['Сильніша присутність салону онлайн', 'Органічний трафік через блог і SEO', 'Заявки на курси одразу потрапляють майстриням', 'Простіше записатися до конкретного майстра'] },
    ru: { title: 'Glow Beauty Salon', tag: 'Сайт · Салон красоты, Познань', task: 'Салону нужен был не просто сайт-витрина, а сайт, который приводит клиентов из поиска, продаёт курсы и позволяет легко записаться к конкретному мастеру.', did: ['Новый дизайн и многостраничный сайт на польском и украинском', 'Услуги, галерея работ и блок «Наши мастера»: Оля и Виктория, запись в Booksy к каждой', 'Блог с SEO-статьями — в том числе о свадебном макияже в Познани — выходит регулярно', 'Страница курсов /kursy: стрижки Оли (боб и боб-каре) и макияж Виктории, у каждого курса своё видео', 'Лист ожидания отправляет заявку в Telegram-бот мастера', 'SEO: sitemap на 26 страниц в Google Search Console, страницы в индексе; Vercel Web Analytics и Speed Insights', 'Vite, React и Tailwind с пререндером, собрано с помощью ИИ; хостинг на Vercel, домен glowpoznan.com'], result: ['Более сильное присутствие салона онлайн', 'Органический трафик через блог и SEO', 'Заявки на курсы сразу приходят мастерам', 'Проще записаться к конкретному мастеру'] },
    pl: { title: 'Glow Beauty Salon', tag: 'Strona · Salon piękności, Poznań', task: 'Salon potrzebował nie tylko strony-wizytówki, ale witryny, która przyciąga klientki z wyszukiwarki, sprzedaje kursy i ułatwia zapis do konkretnej mistrzyni.', did: ['Nowy projekt i wielostronicowa witryna po polsku i ukraińsku', 'Usługi, galeria prac i blok «Nasze mistrzynie»: Ola i Wiktoria, rezerwacja w Booksy u każdej', 'Blog z artykułami SEO — m.in. o makijażu ślubnym w Poznaniu — publikowany regularnie', 'Strona kursów /kursy: strzyżenie Oli (karé i bob-karé) oraz makijaż Wiktorii, przy każdym kursie wideo', 'Lista oczekujących wysyła zgłoszenie do bota Telegram mistrzyni', 'SEO: sitemap z 26 stronami w Google Search Console, strony w indeksie; Vercel Web Analytics i Speed Insights', 'Vite, React i Tailwind z prerenderingiem, zbudowane z pomocą AI; hosting na Vercel, domena glowpoznan.com'], result: ['Mocniejsza obecność salonu online', 'Ruch organiczny z bloga i SEO', 'Zgłoszenia na kursy od razu trafiają do mistrzyń', 'Łatwiejszy zapis do konkretnej mistrzyni'] },
    en: { title: 'Glow Beauty Salon', tag: 'Website · Beauty salon, Poznań', task: 'The salon needed more than a showcase: a site that brings clients in from search, sells courses, and makes it easy to book a specific master.', did: ['New design and a multi-page site in Polish and Ukrainian', 'Services, a gallery of work, and an Our masters block: Olya and Viktoria, with Booksy booking for each', 'A blog of SEO articles, including wedding makeup in Poznań, published regularly', 'Courses page /kursy: Olya’s haircut courses (bob and bob-carre) and Viktoria’s makeup courses, each with a video', 'Waitlist form sends the application to that master’s Telegram bot', 'SEO: a 26-page sitemap in Google Search Console, pages indexed; Vercel Web Analytics and Speed Insights', 'Vite, React and Tailwind with prerendering, built with AI assistance; hosted on Vercel at glowpoznan.com'], result: ['A stronger online presence', 'Organic traffic through the blog and SEO', 'Course applications go straight to the masters', 'Easier booking with a specific master'] },
  },
  reserba: {
    ua: { title: 'Reserba', tag: 'UX/UI · Мобільний застосунок і веб-сервіс бронювання', task: 'Зручний прототип для пошуку та бронювання локальних спеціалістів (салони краси, няні, садівники тощо): аналіз потреб, конкурентів, інтерфейс і ключові функції.', did: ['Дослідження та аналіз цільової аудиторії', 'Аналіз конкурентів', 'User flow та етапи роботи', 'Дизайн-система та інтерфейс', 'Пошук і фільтри, бронювання, відгуки, чат', 'Клікабельний прототип у Figma'], result: ['Час підтвердження бронювання −40%', 'Висока залученість і простота використання', 'Більше довіри завдяки системі відгуків'] },
    ru: { title: 'Reserba', tag: 'UX/UI · Мобильное приложение и веб-сервис бронирования', task: 'Удобный прототип для поиска и бронирования локальных специалистов (салоны красоты, няни, садовники и т. д.): анализ потребностей, конкурентов, интерфейс и ключевые функции.', did: ['Исследование и анализ целевой аудитории', 'Анализ конкурентов', 'User flow и этапы работы', 'Дизайн-система и интерфейс', 'Поиск и фильтры, бронирование, отзывы, чат', 'Кликабельный прототип в Figma'], result: ['Время подтверждения бронирования −40%', 'Высокая вовлечённость и простота использования', 'Больше доверия благодаря системе отзывов'] },
    pl: { title: 'Reserba', tag: 'UX/UI · Aplikacja mobilna i serwis rezerwacji', task: 'Wygodny prototyp do wyszukiwania i rezerwowania lokalnych specjalistów (salony, opieka nad dziećmi, ogrodnictwo itd.): analiza potrzeb, konkurencji, interfejs i kluczowe funkcje.', did: ['Badania i analiza grupy docelowej', 'Analiza konkurencji', 'User flow i etapy pracy', 'Design system i interfejs', 'Wyszukiwanie i filtry, rezerwacja, opinie, czat', 'Klikalny prototyp w Figma'], result: ['Czas potwierdzenia rezerwacji −40%', 'Wysokie zaangażowanie i łatwość użycia', 'Większe zaufanie dzięki opiniom'] },
    en: { title: 'Reserba', tag: 'UX/UI · Booking mobile app and web service', task: 'A user-friendly prototype for finding and booking local specialists (beauty salons, childcare, gardening, etc.): user needs, competitor analysis, interface and key features.', did: ['Research and target audience analysis', 'Competitor analysis', 'User flow and work stages', 'Design system and UI', 'Search & filters, booking, reviews, chat', 'Clickable Figma prototype'], result: ['Booking confirmation time −40%', 'High engagement and ease of use', 'More trust through the review system'] },
  },
  garcinia: {
    ua: { title: 'Garcinia', tag: 'Лендинг · Інтернет-магазин добавок', task: 'Лендинг, що приводить користувачів в інтернет-магазин, покращує SEO та збільшує кількість заявок; оптимізація мобільної версії та блог для органічного трафіку.', did: ['Дослідження аудиторії та конкурентів', 'Зрозумілий макет з ефективними CTA', 'Блог з SEO-статтями', 'Адаптація під мобільні'], result: ['Трафік на основний сайт +30%', 'Заявки +25%', 'Органічний трафік через блог +15%'] },
    ru: { title: 'Garcinia', tag: 'Лендинг · Интернет-магазин добавок', task: 'Лендинг, который приводит пользователей в интернет-магазин, улучшает SEO и увеличивает число заявок; оптимизация мобильной версии и блог для органического трафика.', did: ['Исследование аудитории и конкурентов', 'Понятный макет с эффективными CTA', 'Блог с SEO-статьями', 'Адаптация под мобильные'], result: ['Трафик на основной сайт +30%', 'Заявки +25%', 'Органический трафик через блог +15%'] },
    pl: { title: 'Garcinia', tag: 'Landing · Sklep z suplementami', task: 'Landing, który kieruje użytkowników do sklepu, wspiera SEO i zwiększa liczbę leadów; optymalizacja mobilna i blog dla ruchu organicznego.', did: ['Badanie odbiorców i konkurencji', 'Prosty układ ze skutecznymi CTA', 'Blog z artykułami SEO', 'Wersja mobilna'], result: ['Ruch na głównej stronie +30%', 'Leady +25%', 'Ruch organiczny z bloga +15%'] },
    en: { title: 'Garcinia', tag: 'Landing page · Supplements e-shop', task: 'A landing page that drives users to the online store, boosts SEO and increases leads; optimized mobile experience and a blog for organic growth.', did: ['Audience and competitor research', 'Clear layout with effective CTAs', 'SEO-optimized blog', 'Mobile adaptation'], result: ['Traffic to the main site +30%', 'Leads +25%', 'Organic traffic via blog +15%'] },
  },
};
export const caseText = (lang: Lang, key: WorkKey): CaseText =>
  key === 'awto' || key === 'tesla' ? DICT[lang].cases[key] : NEW[key][lang];

export const WORK_UI: Record<Lang, { all: string; next: string; open: string; scroll: string; mobile: string; sections: string; label: string; proto: string }> = {
  ua: { all: 'Усі роботи', next: 'Наступний проєкт', open: 'Детальніше', scroll: 'Прокрутіть сторінку у вікні', mobile: 'Мобільна версія', sections: 'Фрагменти', label: 'Портфоліо', proto: 'Прототип у Figma' },
  ru: { all: 'Все работы', next: 'Следующий проект', open: 'Подробнее', scroll: 'Прокрутите страницу в окне', mobile: 'Мобильная версия', sections: 'Фрагменты', label: 'Портфолио', proto: 'Прототип в Figma' },
  pl: { all: 'Wszystkie prace', next: 'Następny projekt', open: 'Szczegóły', scroll: 'Przewiń stronę w oknie', mobile: 'Wersja mobilna', sections: 'Fragmenty', label: 'Portfolio', proto: 'Prototyp w Figma' },
  en: { all: 'All works', next: 'Next project', open: 'View case', scroll: 'Scroll the page inside the window', mobile: 'Mobile version', sections: 'Fragments', label: 'Portfolio', proto: 'Figma prototype' },
};
