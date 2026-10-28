import { CONTACTS, DICT, LANGS, LANG_LABEL, type Lang } from './i18n';
import { ContactForm } from './components/ContactForm';

const CASES = [
  { key: 'awto' as const, url: 'https://awtonapraw.pl/', img: '/img/cases/awtonapraw-desktop.webp', mob: '/img/cases/awtonapraw-mobile.webp' },
  { key: 'tesla' as const, url: 'https://www.teslahubservice.com/', img: '/img/cases/teslahub-desktop.webp', mob: '/img/cases/teslahub-mobile.webp' },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-4">{children}</h2>
);

export default function App({ lang }: { lang: Lang }) {
  const t = DICT[lang];
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <header className="fixed top-0 inset-x-0 z-50 h-16 md:h-20 bg-black/75 backdrop-blur-lg border-b border-white/5 flex items-center justify-between px-4 md:px-8">
        <a href={`/${lang}/`} className="uppercase tracking-widest text-sm font-bold">Pavel Roman</a>
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] text-zinc-400">
          <a href="#cases" className="hover:text-white">{t.nav.cases}</a>
          <a href="#services" className="hover:text-white">{t.nav.services}</a>
          <a href="#process" className="hover:text-white">{t.nav.process}</a>
          <a href="#contact" className="hover:text-white">{t.nav.contact}</a>
        </nav>
        <div className="flex gap-1 text-xs font-bold">
          {LANGS.map((l) => (
            <a key={l} href={`/${l}/`} hrefLang={l === 'ua' ? 'uk' : l} className={`px-2 py-1 rounded ${l === lang ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}>{LANG_LABEL[l]}</a>
          ))}
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative min-h-[92vh] flex flex-col justify-center px-4 md:px-8 pt-28 pb-16 max-w-7xl mx-auto">
          <div className="absolute -z-0 top-1/4 right-0 w-[40vw] h-[40vw] rounded-full bg-rose-700/20 blur-[120px] pointer-events-none" />
          <p className="relative text-xs md:text-sm uppercase tracking-[0.3em] text-zinc-400 mb-6">{t.heroEyebrow}</p>
          <h1 className="relative text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] max-w-5xl">{t.heroTitle}</h1>
          <p className="relative mt-8 text-lg md:text-xl text-zinc-300 max-w-2xl">{t.heroSub}</p>
          <div className="relative mt-10 flex flex-wrap gap-4">
            <a href={CONTACTS.telegram} target="_blank" rel="noopener" className="rounded-full bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-zinc-300 transition">{t.ctaTelegram}</a>
            <a href="#contact" className="rounded-full border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-white transition">{t.ctaAudit}</a>
          </div>
          <dl className="relative mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
            {t.trust.map((x) => (
              <div key={x.l}><dt className="text-2xl md:text-4xl font-black">{x.v}</dt><dd className="text-xs uppercase tracking-widest text-zinc-500 mt-1">{x.l}</dd></div>
            ))}
          </dl>
        </section>

        {/* CASES */}
        <section id="cases" className="px-4 md:px-8 py-24 max-w-7xl mx-auto scroll-mt-20">
          <H2>{t.casesTitle}</H2>
          <p className="text-zinc-400 mb-14">{t.casesSub}</p>
          <div className="flex flex-col gap-24">
            {CASES.map((c, i) => {
              const d = t.cases[c.key];
              return (
                <article key={c.key} className="grid md:grid-cols-2 gap-10 items-start">
                  <a href={c.url} target="_blank" rel="noopener" className={`relative block ${i % 2 ? 'md:order-2' : ''}`}>
                    <img src={c.img} alt={d.title} width={1200} height={750} loading="lazy" className="w-full rounded-2xl border border-white/10" />
                    <img src={c.mob} alt="" width={390} height={844} loading="lazy" className="absolute -bottom-8 -right-2 md:-right-6 w-[26%] rounded-xl border border-white/20 shadow-2xl" />
                  </a>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-rose-400 mb-3">{d.tag}</p>
                    <h3 className="text-2xl md:text-4xl font-black mb-6">{d.title}</h3>
                    <p className="text-sm uppercase tracking-widest text-zinc-500">{t.taskL}</p>
                    <p className="text-zinc-200 mt-2 mb-6">{d.task}</p>
                    <p className="text-sm uppercase tracking-widest text-zinc-500">{t.didL}</p>
                    <ul className="mt-2 mb-6 space-y-1 text-zinc-300">{d.did.map((x) => <li key={x}>— {x}</li>)}</ul>
                    <p className="text-sm uppercase tracking-widest text-zinc-500">{t.resultL}</p>
                    <ul className="mt-2 mb-8 space-y-1 text-zinc-100">{d.result.map((x) => <li key={x}>✓ {x}</li>)}</ul>
                    <a href={c.url} target="_blank" rel="noopener" className="text-sm font-bold uppercase tracking-widest underline underline-offset-8 hover:text-zinc-300">{t.visit} ↗</a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="px-4 md:px-8 py-24 max-w-7xl mx-auto scroll-mt-20">
          <H2>{t.servicesTitle}</H2>
          <p className="text-zinc-400 mb-14">{t.servicesSub}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.packs.map((p, i) => (
              <div key={p.name} className={`rounded-2xl p-8 border flex flex-col ${i === 0 ? 'border-white bg-white/5' : 'border-white/10'}`}>
                {i === 0 && <span className="self-start text-[10px] uppercase tracking-widest bg-white text-black rounded-full px-3 py-1 mb-4 font-bold">{t.popular}</span>}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-4 text-3xl font-black">{t.from} {p.price}</p>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">{p.term}</p>
                <ul className="mt-6 space-y-2 text-zinc-300 text-sm flex-1">{p.items.map((x) => <li key={x}>— {x}</li>)}</ul>
                <a href="#contact" className="mt-8 text-center rounded-full border border-white/30 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition">{t.nav.contact}</a>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="px-4 md:px-8 py-24 max-w-7xl mx-auto scroll-mt-20">
          <H2>{t.processTitle}</H2>
          <ol className="grid md:grid-cols-4 gap-8 mt-12">
            {t.steps.map((s, i) => (
              <li key={s.t} className="border-t border-white/20 pt-6">
                <span className="text-5xl font-black text-zinc-700">0{i + 1}</span>
                <h3 className="text-lg font-bold mt-3">{s.t}</h3>
                <p className="text-zinc-400 mt-2 text-sm">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ABOUT + FAQ */}
        <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <H2>{t.aboutTitle}</H2>
            <p className="text-zinc-300 text-lg mt-6">{t.aboutText}</p>
            <a href={CONTACTS.behance} target="_blank" rel="noopener" className="inline-block mt-6 text-sm font-bold uppercase tracking-widest underline underline-offset-8">Behance ↗</a>
          </div>
          <div>
            <H2>{t.faqTitle}</H2>
            <div className="mt-6 divide-y divide-white/10">
              {t.faq.map((f) => (
                <details key={f.q} className="py-4 group">
                  <summary className="cursor-pointer font-bold list-none flex justify-between">{f.q}<span className="group-open:rotate-45 transition">+</span></summary>
                  <p className="text-zinc-400 mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-4 md:px-8 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 scroll-mt-20">
          <div>
            <H2>{t.contactTitle}</H2>
            <p className="text-zinc-400 mt-4 mb-10">{t.contactSub}</p>
            <ul className="space-y-4 text-lg">
              <li><a href={CONTACTS.telegram} target="_blank" rel="noopener" className="hover:text-zinc-300">Telegram · {CONTACTS.telegramHandle}</a></li>
              <li><a href={CONTACTS.whatsapp} target="_blank" rel="noopener" className="hover:text-zinc-300">WhatsApp · {CONTACTS.phone}</a></li>
              <li><a href={`mailto:${CONTACTS.email}`} className="hover:text-zinc-300">{CONTACTS.email}</a></li>
            </ul>
          </div>
          <ContactForm t={t} lang={lang} />
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 md:px-8 py-10 text-xs uppercase tracking-widest text-zinc-500 flex flex-col md:flex-row justify-between gap-4 pb-28 md:pb-10">
        <span>© 2026 {t.footer}</span>
        <span>Web & Brand Design · Google Ads</span>
      </footer>

      {/* mobile sticky CTA */}
      <a href={CONTACTS.telegram} target="_blank" rel="noopener" className="md:hidden fixed bottom-4 inset-x-4 z-50 rounded-full bg-white text-black text-center py-4 text-sm font-bold uppercase tracking-widest shadow-2xl">{t.ctaTelegram}</a>
    </div>
  );
}
