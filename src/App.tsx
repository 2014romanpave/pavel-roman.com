import { CONTACTS, DICT, LANGS, LANG_LABEL, type Lang } from './i18n';
import { ContactForm } from './components/ContactForm';

const CASES = [
  { key: 'awto' as const, url: 'https://awtonapraw.pl/', img: '/img/cases/awtonapraw-desktop.webp', mob: '/img/cases/awtonapraw-mobile.webp' },
  { key: 'tesla' as const, url: 'https://www.teslahubservice.com/', img: '/img/cases/teslahub-desktop.webp', mob: '/img/cases/teslahub-mobile.webp' },
];
const NAME: Record<Lang, string> = { ua: 'Роман Павел', ru: 'Роман Павел', pl: 'Roman Pavel', en: 'Roman Pavel' };

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">{children}</p>
);
const Section = ({ id, title, sub, children }: { id?: string; title: string; sub?: string; children: React.ReactNode }) => (
  <section id={id} className="px-6 md:px-16 py-28 md:py-40 scroll-mt-10">
    <div className="grid md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-zinc-100">{title}</h2>
        {sub && <p className="mt-4 text-sm text-zinc-500 max-w-xs leading-relaxed">{sub}</p>}
      </div>
      <div className="md:col-span-8">{children}</div>
    </div>
  </section>
);

export default function App({ lang }: { lang: Lang }) {
  const t = DICT[lang];
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-zinc-200 font-sans font-light selection:bg-white selection:text-black">
      <main>
        {/* HERO: split screen */}
        <section className="grid md:grid-cols-2 min-h-[100svh]">
          <div className="relative h-[60svh] md:h-auto overflow-hidden bg-[#0b1214]">
            {/* TODO: replace with real photo — public/img/portrait-placeholder.webp */}
            <img src="/img/portrait-placeholder.webp" alt={NAME[lang]} width={1200} height={1600} className="absolute inset-0 w-full h-full object-cover slow-zoom" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
          </div>
          <div className="relative flex flex-col justify-between px-6 md:px-16 py-8 md:py-12 min-h-[70svh] md:min-h-0">
            <header className="flex items-center justify-between fade-up">
              <a href={`/${lang}/`} className="text-sm text-white">{NAME[lang]}</a>
              <nav className="flex gap-4 text-[11px] tracking-widest">
                {LANGS.map((l) => (
                  <a key={l} href={`/${l}/`} hrefLang={l === 'ua' ? 'uk' : l} className={l === lang ? 'text-white' : 'text-zinc-600 hover:text-zinc-300 transition-colors'}>{LANG_LABEL[l]}</a>
                ))}
              </nav>
            </header>
            <nav className="hidden md:flex flex-col gap-2 text-sm text-zinc-500 fade-up" style={{ animationDelay: '.3s' }}>
              <a href="#cases" className="self-start hover:text-white transition-colors">{t.nav.cases}</a>
              <a href="#services" className="self-start hover:text-white transition-colors">{t.nav.services}</a>
              <a href="#process" className="self-start hover:text-white transition-colors">{t.nav.process}</a>
              <a href="#contact" className="self-start hover:text-white transition-colors">{t.nav.contact}</a>
            </nav>
            <div className="grid sm:grid-cols-2 gap-10 mt-16 md:mt-0 fade-up" style={{ animationDelay: '.5s' }}>
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-4">{t.heroEyebrow}</p>
                <h1 className="text-[15px] leading-relaxed text-white font-normal max-w-xs">{t.heroTitle}</h1>
              </div>
              <div>
                <p className="text-[15px] leading-relaxed text-zinc-400 max-w-xs">{t.heroSub}</p>
                <a href={CONTACTS.telegram} target="_blank" rel="noopener" className="inline-flex items-center gap-2 mt-6 text-sm text-white link-line pb-1">{t.ctaTelegram} <span aria-hidden>→</span></a>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="px-6 md:px-16 py-20 md:py-28">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
            {t.trust.map((x) => (
              <div key={x.l}><dt className="text-xl md:text-2xl text-white font-normal">{x.v}</dt><dd className="text-xs text-zinc-500 mt-2">{x.l}</dd></div>
            ))}
          </dl>
        </section>

        {/* CASES */}
        <section id="cases" className="px-6 md:px-16 py-28 md:py-40 scroll-mt-10">
          <div className="mb-20 md:mb-28 max-w-md">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-zinc-100">{t.casesTitle}</h2>
            <p className="mt-4 text-sm text-zinc-500 leading-relaxed">{t.casesSub}</p>
          </div>
          <div className="flex flex-col gap-32 md:gap-48">
            {CASES.map((c, i) => {
              const d = t.cases[c.key];
              return (
                <article key={c.key} className="group">
                  <a href={c.url} target="_blank" rel="noopener" className="relative block overflow-hidden rounded-sm">
                    <img src={c.img} alt={d.title} width={1200} height={750} loading="lazy" className="w-full transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]" />
                  </a>
                  <div className="grid md:grid-cols-12 gap-8 mt-8 md:mt-10">
                    <div className="md:col-span-4">
                      <p className="text-xs text-zinc-500">0{i + 1}</p>
                      <h3 className="mt-2 text-lg text-white font-normal">{d.title}</h3>
                      <p className="mt-1 text-sm text-zinc-500">{d.tag}</p>
                      <a href={c.url} target="_blank" rel="noopener" className="inline-block mt-5 text-sm text-zinc-300 link-line pb-1">{t.visit} ↗</a>
                    </div>
                    <div className="md:col-span-4 text-sm leading-relaxed">
                      <Label>{t.taskL}</Label>
                      <p className="mt-3 text-zinc-300">{d.task}</p>
                      <div className="mt-8"><Label>{t.didL}</Label></div>
                      <p className="mt-3 text-zinc-400">{d.did.join(' · ')}</p>
                    </div>
                    <div className="md:col-span-4 text-sm leading-relaxed">
                      <Label>{t.resultL}</Label>
                      <ul className="mt-3 space-y-2 text-zinc-300">{d.result.map((x) => <li key={x}>{x}</li>)}</ul>
                      <img src={c.mob} alt="" width={390} height={844} loading="lazy" className="hidden md:block mt-8 w-28 rounded-sm opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <Section id="services" title={t.servicesTitle} sub={t.servicesSub}>
          <div className="divide-y divide-white/[0.06]">
            {t.packs.map((p) => (
              <div key={p.name} className="group grid md:grid-cols-8 gap-4 py-10 first:pt-0">
                <div className="md:col-span-3">
                  <h3 className="text-lg text-white font-normal">{p.name}</h3>
                  <p className="mt-2 text-sm text-zinc-500">{t.from} {p.price} · {p.term}</p>
                </div>
                <p className="md:col-span-5 text-sm text-zinc-400 leading-relaxed">{p.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="process" title={t.processTitle}>
          <ol className="grid sm:grid-cols-2 gap-x-12 gap-y-14">
            {t.steps.map((s, i) => (
              <li key={s.t}>
                <span className="text-xs text-zinc-600">0{i + 1}</span>
                <h3 className="mt-2 text-white font-normal">{s.t}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed max-w-xs">{s.d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section title={t.aboutTitle}>
          <p className="text-lg md:text-xl leading-relaxed text-zinc-300 max-w-2xl">{t.aboutText}</p>
          <a href={CONTACTS.behance} target="_blank" rel="noopener" className="inline-block mt-8 text-sm text-zinc-300 link-line pb-1">Behance ↗</a>
        </Section>

        <Section title={t.faqTitle}>
          <div className="max-w-2xl">
            {t.faq.map((f) => (
              <details key={f.q} className="group py-6 border-b border-white/[0.06] first:pt-0">
                <summary className="cursor-pointer list-none flex justify-between gap-6 text-zinc-200 hover:text-white transition-colors">{f.q}<span className="text-zinc-600 transition-transform duration-300 group-open:rotate-45">+</span></summary>
                <p className="mt-4 text-sm text-zinc-500 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <section id="contact" className="grid md:grid-cols-2 scroll-mt-10">
          <div className="px-6 md:px-16 py-28 md:py-40 bg-[#161616]">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-zinc-100">{t.contactTitle}</h2>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs leading-relaxed">{t.contactSub}</p>
            <ul className="mt-12 space-y-3 text-sm">
              <li><a href={CONTACTS.telegram} target="_blank" rel="noopener" className="link-line pb-1 text-white">Telegram {CONTACTS.telegramHandle}</a></li>
              <li><a href={CONTACTS.whatsapp} target="_blank" rel="noopener" className="link-line pb-1 text-zinc-400 hover:text-white">WhatsApp {CONTACTS.phone}</a></li>
              <li><a href={`mailto:${CONTACTS.email}`} className="link-line pb-1 text-zinc-400 hover:text-white">{CONTACTS.email}</a></li>
            </ul>
          </div>
          <div className="px-6 md:px-16 py-20 md:py-40"><ContactForm t={t} lang={lang} /></div>
        </section>
      </main>

      <footer className="px-6 md:px-16 py-10 text-xs text-zinc-600 flex flex-col md:flex-row justify-between gap-2">
        <span>© 2026 {t.footer}</span>
        <span>Web & Brand Design · Google Ads</span>
      </footer>
    </div>
  );
}
