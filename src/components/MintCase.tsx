import type { Lang } from '../i18n';
import { WORK_UI, type CaseText, type Work } from '../work';

const BLUE = '#3ad7ff';
const Phone = ({ src }: { src: string }) => (
  <div className="rounded-[28px] p-[6px] bg-[#0c0b0a] ring-1 ring-white/10 shadow-[0_40px_80px_-24px_rgba(0,0,0,.9)]">
    <img src={src} alt="" width={390} height={844} className="block w-full rounded-[22px] aspect-[390/844] object-cover object-top" />
  </div>
);

export function MintCase({ lang, index, total, text, work, nextHref, nextTitle, nextThumb }: {
  lang: Lang; index: number; total: number; text: CaseText; work: Work;
  nextHref: string; nextTitle: string; nextThumb: string;
}) {
  const p = text.premium!;
  const ui = WORK_UI[lang];
  const [heroL, heroC, heroR, ...rest] = work.mobs;
  const name = lang === 'pl' || lang === 'en' ? 'Roman Pavel' : 'Роман Павел';
  return (
    <main className="px-6 md:px-16 pt-8 md:pt-12">
      <header className="flex items-center justify-between text-sm">
        <a href={`/${lang}/#works`} className="text-stone-400 hover:text-white transition-colors">← {ui.all}</a>
        <a href={`/${lang}/`} className="text-white">{name}</a>
      </header>

      <section className="mt-24 md:mt-36 max-w-3xl">
        <p className="font-mono text-[11px] tracking-[0.28em] uppercase" style={{ color: BLUE }}>MintBlister · 0{index} / 0{total}</p>
        <h1 className="mt-6 text-[2.6rem] leading-[1.02] md:text-7xl md:leading-[0.96] font-normal tracking-[-0.035em] text-white">{p.hook}</h1>
        <p className="mt-8 text-lg md:text-xl text-stone-300 max-w-xl leading-snug">{p.lead}</p>
        <p className="mt-4 text-sm text-stone-500 max-w-md leading-relaxed">{p.role}</p>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <a href="https://t.me/mintblister_bot" target="_blank" rel="noopener" className="inline-flex rounded-full bg-[#ece6dc] text-[#14120f] px-5 py-2.5 text-sm hover:bg-white transition-colors">{p.ctaT} ↗</a>
          <a href={`/${lang}/#contact`} className="text-sm text-stone-200 link-line pb-1 w-fit">{p.ctaC}</a>
        </div>
      </section>

      <div className="mt-20 md:mt-28 flex items-end justify-center gap-2 md:gap-10 lg:gap-14">
        <div className="w-[26%] max-w-[250px]"><Phone src={heroL} /></div>
        <div className="w-[40%] max-w-[360px] md:mb-8"><Phone src={heroC} /></div>
        <div className="w-[26%] max-w-[250px]"><Phone src={heroR} /></div>
      </div>

      <section className="mt-32 md:mt-48 grid md:grid-cols-2 gap-16 md:gap-24 max-w-5xl">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em]" style={{ color: BLUE }}>{p.problemL}</p>
          <p className="mt-5 text-2xl md:text-3xl font-normal tracking-tight text-white leading-snug">{p.problem}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em]" style={{ color: BLUE }}>{p.solutionL}</p>
          <p className="mt-5 text-2xl md:text-3xl font-normal tracking-tight text-white leading-snug">{p.solution}</p>
        </div>
      </section>

      <section className="mt-32 md:mt-48">
        <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500">{p.featuresL}</p>
        <div className="mt-8 grid md:grid-cols-3 gap-px bg-white/[0.08] rounded-[18px] overflow-hidden ring-1 ring-white/[0.08]">
          {p.features.map((f, i) => (
            <div key={f.t} className="bg-[#12110f] px-7 py-9 md:px-9 md:py-12">
              <p className="font-mono text-[11px] tracking-[0.22em]" style={{ color: BLUE }}>0{i + 1}</p>
              <h2 className="mt-6 text-xl text-white font-normal tracking-tight">{f.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">{f.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-[11px] tracking-[0.14em] text-stone-600">{p.stack}</p>
      </section>

      <section className="mt-32 md:mt-48 grid md:grid-cols-12 gap-10">
        <h2 className="md:col-span-4 text-2xl md:text-3xl font-normal tracking-tight text-white">{p.designL}</h2>
        <ol className="md:col-span-8 divide-y divide-white/[0.07]">
          {p.decisions.map((line, i) => (
            <li key={line} className="py-5 flex gap-6 text-stone-200">
              <span className="font-mono text-[11px] tracking-[0.18em] pt-1" style={{ color: BLUE }}>0{i + 1}</span>
              <span className="text-lg md:text-xl font-normal tracking-tight">{line}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-28 md:mt-40">
        <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500">{ui.mobile}</p>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {rest.map((src) => <Phone key={src} src={src} />)}
        </div>
      </section>

      {work.full && <section className="mt-28 md:mt-40 rounded-[18px] bg-[#12110f] ring-1 ring-white/[0.06] p-4 md:p-16">
        <div className="rounded-[10px] overflow-hidden ring-1 ring-white/10 bg-[#0a0a0a] mx-auto max-w-[520px]">
          <div className="flex items-center gap-1.5 px-4 h-8 bg-[#141414] border-b border-white/[0.05]">
            <i className="w-2 h-2 rounded-full bg-white/15" /><i className="w-2 h-2 rounded-full bg-white/15" /><i className="w-2 h-2 rounded-full bg-white/15" />
            <span className="mx-auto text-[10px] text-stone-500 font-mono">{work.host}</span>
          </div>
          <div className="h-[70vh] max-h-[760px] overflow-y-auto custom-scrollbar">
            <img src={work.full} alt={text.title} width={430} className="block w-full" />
          </div>
        </div>
        <p className="mt-4 text-center text-[11px] text-stone-600">{ui.scroll}</p>
      </section>}

      <section className="mt-32 md:mt-48 max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.25em]" style={{ color: BLUE }}>{p.resultL}</p>
        <ul className="mt-8 space-y-5">
          {text.result.map((line) => <li key={line} className="text-2xl md:text-4xl font-normal tracking-tight text-white leading-tight">{line}</li>)}
        </ul>
      </section>

      <section className="mt-28 md:mt-40 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-12">
        <h2 className="text-3xl md:text-5xl font-normal tracking-[-0.03em] text-white max-w-lg">{p.close}</h2>
        <div className="flex flex-col items-start gap-4">
          <a href="https://t.me/mintblister_bot" target="_blank" rel="noopener" className="inline-flex rounded-full bg-[#ece6dc] text-[#14120f] px-5 py-2.5 text-sm hover:bg-white transition-colors">{p.ctaT} ↗</a>
          <a href={`/${lang}/#contact`} className="text-sm text-stone-300 link-line pb-1">{p.ctaC}</a>
          <a href={work.url} target="_blank" rel="noopener" className="text-sm text-stone-500 link-line pb-1">{work.host} ↗</a>
        </div>
      </section>

      <a href={nextHref} className="group mt-28 md:mt-40 mb-10 flex items-center justify-between gap-6 border-t border-white/[0.07] pt-8">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500">{ui.next}</p>
          <p className="mt-3 text-lg text-white">{nextTitle} <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span></p>
        </div>
        <img src={nextThumb} alt="" width={1440} height={900} loading="lazy" className="w-40 md:w-64 rounded-md ring-1 ring-white/10 opacity-70 aspect-[16/10] object-cover object-top group-hover:opacity-100 transition-opacity duration-700" />
      </a>
    </main>
  );
}
