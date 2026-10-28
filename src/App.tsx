import { CONTACTS, DICT, LANGS, LANG_LABEL, type Lang } from './i18n';
import { ContactForm } from './components/ContactForm';
import { Glitch, RotatingQuote, CornerContacts, Dock } from './components/Fx';

const TAGS: [string, string][] = [['WEB', 'APP'], ['ADS', 'TARGET'], ['BRAND', 'SMM'], ['VIDEO', 'BANNERS']];

const CASES = [
  { key: 'awto' as const, url: 'https://awtonapraw.pl/', img: '/img/cases/awtonapraw-desktop.webp', mob: '/img/cases/awtonapraw-mobile.webp' },
  { key: 'tesla' as const, url: 'https://www.teslahubservice.com/', img: '/img/cases/teslahub-desktop.webp', mob: '/img/cases/teslahub-mobile.webp' },
];
const NAME: Record<Lang, string> = { ua: 'Роман Павел', ru: 'Роман Павел', pl: 'Roman Pavel', en: 'Roman Pavel' };

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500">{children}</p>
);
const Section = ({ id, title, sub, children }: { id?: string; title: string; sub?: string; children: React.ReactNode }) => (
  <section id={id} className="px-6 md:px-16 py-28 md:py-40 scroll-mt-10">
    <div className="grid md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-stone-100">{title}</h2>
        {sub && <p className="mt-4 text-sm text-stone-500 max-w-xs leading-relaxed">{sub}</p>}
      </div>
      <div className="md:col-span-8">{children}</div>
    </div>
  </section>
);

export default function App({ lang }: { lang: Lang }) {
  const t = DICT[lang];
  return (
    <div className="grain page-bg min-h-screen text-stone-300 font-sans font-light selection:bg-white selection:text-black">
      <main>
        {/* HERO: split screen */}
        <section className="grid md:grid-cols-2 min-h-[100svh]">
          <div className="relative h-[60svh] md:h-auto overflow-hidden bg-[#1a1714]">
            {/* TODO: replace with real photo — public/img/portrait-placeholder.webp */}
            <img src="/img/portrait-placeholder.webp" alt={NAME[lang]} width={1200} height={1600} className="absolute inset-0 w-full h-full object-cover slow-zoom" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
          </div>
          <div className="relative flex flex-col justify-between px-6 md:px-16 py-8 md:py-12 min-h-[70svh] md:min-h-0">
            <header className="flex items-center justify-between fade-up">
              <a href={`/${lang}/`} className="text-sm text-white">{NAME[lang]}</a>
              <nav className="flex gap-4 text-[11px] tracking-widest">
                {LANGS.map((l) => (
                  <a key={l} href={`/${l}/`} hrefLang={l === 'ua' ? 'uk' : l} className={l === lang ? 'text-white' : 'text-stone-600 hover:text-stone-300 transition-colors'}>{LANG_LABEL[l]}</a>
                ))}
              </nav>
            </header>
            <nav className="hidden md:flex flex-col gap-2 text-sm text-stone-500 fade-up" style={{ animationDelay: '.3s' }}>
              <a href="#cases" className="self-start hover:text-white transition-colors">{t.nav.cases}</a>
              <a href="#services" className="self-start hover:text-white transition-colors">{t.nav.services}</a>
              <a href="#process" className="self-start hover:text-white transition-colors">{t.nav.process}</a>
              <a href="#contact" className="self-start hover:text-white transition-colors">{t.nav.contact}</a>
            </nav>
            <div className="grid sm:grid-cols-2 gap-10 mt-16 md:mt-0 fade-up" style={{ animationDelay: '.5s' }}>
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500 mb-4">{t.heroEyebrow}</p>
                <h1 className="text-[15px] leading-relaxed text-white font-normal max-w-xs">{t.heroTitle}</h1>
              </div>
              <div>
                <p className="text-[15px] leading-relaxed text-stone-400 max-w-xs">{t.heroSub}</p>
                <a href={CONTACTS.telegram} target="_blank" rel="noopener" className="inline-flex items-center gap-2 mt-6 text-sm text-white link-line pb-1">{t.ctaTelegram} <span aria-hidden>→</span></a>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="px-6 md:px-16 py-20 md:py-28">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
            {t.trust.map((x) => (
              <div key={x.l}><dt className="text-xl md:text-2xl text-white font-normal">{x.v}</dt><dd className="text-xs text-stone-500 mt-2">{x.l}</dd></div>
            ))}
          </dl>
        </section>

        {/* CASES */}
        <section id="cases" className="px-6 md:px-16 py-28 md:py-40 scroll-mt-10">
          <div className="mb-20 md:mb-28 max-w-md">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-stone-100">{t.casesTitle}</h2>
            <p className="mt-4 text-sm text-stone-500 leading-relaxed">{t.casesSub}</p>
          </div>
          <div className="flex flex-col gap-36 md:gap-56">
            {CASES.map((c, i) => {
              const d = t.cases[c.key];
              const host = c.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
              return (
                <article key={c.key} className="group">
                  <div className="flex items-baseline justify-between gap-6 border-t border-white/[0.07] pt-6 text-xs text-stone-500">
                    <span className="font-mono text-stone-600">0{i + 1} / 0{CASES.length}</span>
                    <span className="hidden sm:block">{d.tag}</span>
                    <span className="font-mono">{host}</span>
                  </div>
                  <a href={c.url} target="_blank" rel="noopener" aria-label={d.title} className="relative block mt-8 md:mt-10 rounded-[18px] bg-gradient-to-b from-[#211e1a] to-[#171512] ring-1 ring-white/[0.05] px-5 pt-8 pb-0 md:px-20 md:pt-20 overflow-hidden">
                    <div className="case-frame relative mx-auto max-w-[1100px] rounded-t-[10px] overflow-hidden ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,.85)] bg-[#0f0e0d]">
                      <div className="flex items-center gap-1.5 px-4 h-8 bg-[#262320] border-b border-white/[0.05]">
                        <i className="w-2 h-2 rounded-full bg-white/15" /><i className="w-2 h-2 rounded-full bg-white/15" /><i className="w-2 h-2 rounded-full bg-white/15" />
                        <span className="mx-auto text-[10px] text-stone-500 font-mono">{host}</span>
                      </div>
                      <img src={c.img} alt={d.title} width={1440} height={900} loading="lazy" className="block w-full aspect-[16/10] object-cover object-top" />
                    </div>
                    <div className="case-mob absolute hidden md:block right-8 lg:right-14 bottom-10 w-[150px] lg:w-[190px] rounded-[26px] p-[5px] bg-[#0c0b0a] ring-1 ring-white/10 shadow-[0_30px_60px_-10px_rgba(0,0,0,.9)]">
                      <img src={c.mob} alt="" width={390} height={844} loading="lazy" className="block w-full rounded-[21px] aspect-[390/844] object-cover object-top" />
                    </div>
                  </a>
                  <div className="grid md:grid-cols-12 gap-10 mt-10 md:mt-14">
                    <div className="md:col-span-4">
                      <h3 className="text-lg text-white font-normal">{d.title}</h3>
                      <p className="mt-1 text-sm text-stone-500 sm:hidden">{d.tag}</p>
                      <a href={c.url} target="_blank" rel="noopener" className="inline-flex items-center gap-2 mt-5 text-sm text-stone-200 link-line pb-1">{t.visit} <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span></a>
                    </div>
                    <div className="md:col-span-4 text-sm leading-relaxed">
                      <Label>{t.taskL}</Label>
                      <p className="mt-3 text-stone-300">{d.task}</p>
                      <div className="mt-8"><Label>{t.didL}</Label></div>
                      <p className="mt-3 text-stone-400">{d.did.join(' · ')}</p>
                    </div>
                    <div className="md:col-span-4 text-sm leading-relaxed">
                      <Label>{t.resultL}</Label>
                      <ul className="mt-3 space-y-2 text-stone-300">{d.result.map((x) => <li key={x} className="flex gap-3"><span className="text-stone-600">—</span>{x}</li>)}</ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <Section id="services" title={t.servicesTitle} sub={t.servicesSub}>
          <div className="divide-y divide-white/[0.05]">
            {t.packs.map((p, pi) => (
              <div key={p.name} className="group grid md:grid-cols-8 gap-4 py-10 first:pt-0">
                <div className="md:col-span-3">
                  <h3 className="text-lg text-white font-normal">{p.name}</h3>
                  <Glitch a={TAGS[pi % TAGS.length][0]} b={TAGS[pi % TAGS.length][1]} swap className="mt-2 font-mono text-[9px] tracking-[0.2em] text-stone-600" />
                  <p className="mt-2 text-sm text-stone-500">{t.from} {p.price} · {p.term}</p>
                </div>
                <p className="md:col-span-5 text-sm text-stone-400 leading-relaxed">{p.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="process" title={t.processTitle}>
          <ol className="grid sm:grid-cols-2 gap-x-12 gap-y-14">
            {t.steps.map((s, i) => (
              <li key={s.t}>
                <span className="text-xs text-stone-600">0{i + 1}</span>
                <h3 className="mt-2 text-white font-normal">{s.t}</h3>
                <p className="mt-2 text-sm text-stone-500 leading-relaxed max-w-xs">{s.d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section title={t.aboutTitle}>
          <p className="text-lg md:text-xl leading-relaxed text-stone-300 max-w-2xl">{t.aboutText}</p>
          <a href={CONTACTS.behance} target="_blank" rel="noopener" className="inline-block mt-8 text-sm text-stone-300 link-line pb-1">Behance ↗</a>
        </Section>

        <Section title={t.faqTitle}>
          <div className="max-w-2xl">
            {t.faq.map((f) => (
              <details key={f.q} className="group py-6 border-b border-white/[0.06] first:pt-0">
                <summary className="cursor-pointer list-none flex justify-between gap-6 text-stone-200 hover:text-white transition-colors">{f.q}<span className="text-stone-600 transition-transform duration-300 group-open:rotate-45">+</span></summary>
                <p className="mt-4 text-sm text-stone-500 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <section id="contact" className="grid md:grid-cols-2 scroll-mt-10">
          <div className="px-6 md:px-16 py-28 md:py-40 bg-[#181614]">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-stone-100">{t.contactTitle}</h2>
            <p className="mt-4 text-sm text-stone-500 max-w-xs leading-relaxed">{t.contactSub}</p>
            <ul className="mt-12 space-y-3 text-sm">
              <li><a href={CONTACTS.telegram} target="_blank" rel="noopener" className="link-line pb-1 text-white">Telegram {CONTACTS.telegramHandle}</a></li>
              <li><a href={CONTACTS.whatsapp} target="_blank" rel="noopener" className="link-line pb-1 text-stone-400 hover:text-white">WhatsApp {CONTACTS.phone}</a></li>
              <li><a href={`mailto:${CONTACTS.email}`} className="link-line pb-1 text-stone-400 hover:text-white">{CONTACTS.email}</a></li>
            </ul>
          </div>
          <div className="px-6 md:px-16 py-20 md:py-40"><ContactForm t={t} lang={lang} /></div>
        </section>
      </main>

      <footer className="px-6 md:px-16 pt-10 pb-28 text-xs text-stone-600 flex flex-col md:flex-row justify-between gap-2">
        <span><Glitch a="© MMXXVI" b="© 2026" className="font-mono" /> {t.footer}</span>
        <span>Web & Brand Design · Google Ads</span>
      </footer>
      <RotatingQuote lang={lang} />
      <CornerContacts />
      <Dock nav={t.nav} cta={t.nav.contact} lang={lang} />
    </div>
  );
}
