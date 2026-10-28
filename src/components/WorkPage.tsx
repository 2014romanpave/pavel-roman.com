import { DICT, type Lang } from '../i18n';
import { WORKS, WORK_UI, type WorkKey } from '../work';

const Label = ({ children }: { children: React.ReactNode }) => <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500">{children}</p>;

export function Browser({ host, children, className = '' }: { host: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[10px] overflow-hidden ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,.85)] bg-[#0f0e0d] ${className}`}>
      <div className="flex items-center gap-1.5 px-4 h-8 bg-[#262320] border-b border-white/[0.05]">
        <i className="w-2 h-2 rounded-full bg-white/15" /><i className="w-2 h-2 rounded-full bg-white/15" /><i className="w-2 h-2 rounded-full bg-white/15" />
        <span className="mx-auto text-[10px] text-stone-500 font-mono">{host}</span>
      </div>
      {children}
    </div>
  );
}
const Phone = ({ src }: { src: string }) => (
  <div className="rounded-[26px] p-[5px] bg-[#0c0b0a] ring-1 ring-white/10 shadow-[0_30px_60px_-10px_rgba(0,0,0,.9)]">
    <img src={src} alt="" width={390} height={844} loading="lazy" className="block w-full rounded-[21px] aspect-[390/844] object-cover object-top" />
  </div>
);

export function WorkPage({ lang, work }: { lang: Lang; work: WorkKey }) {
  const t = DICT[lang]; const ui = WORK_UI[lang];
  const i = WORKS.findIndex((w) => w.key === work); const w = WORKS[i]; const d = t.cases[work];
  const next = WORKS[(i + 1) % WORKS.length]; const nd = t.cases[next.key];
  const [cat, place] = d.tag.split(' · ');
  return (
    <main className="px-6 md:px-16 pt-8 md:pt-12">
      <header className="flex items-center justify-between text-sm">
        <a href={`/${lang}/#works`} className="text-stone-400 hover:text-white transition-colors">← {ui.all}</a>
        <a href={`/${lang}/`} className="text-white">{lang === 'pl' || lang === 'en' ? 'Roman Pavel' : 'Роман Павел'}</a>
      </header>

      <section className="mt-24 md:mt-36 grid md:grid-cols-12 gap-10 fade-up">
        <div className="md:col-span-5">
          <p className="font-mono text-xs text-stone-600">0{i + 1} / 0{WORKS.length}</p>
          <h1 className="mt-4 text-2xl md:text-3xl font-normal tracking-tight text-stone-100">{d.title}</h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {[cat, place].filter(Boolean).map((x) => <span key={x} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-stone-400">{x}</span>)}
          </div>
          <a href={w.url} target="_blank" rel="noopener" className="inline-flex gap-2 mt-8 text-sm text-stone-200 link-line pb-1">{t.visit} ↗</a>
        </div>
        <div className="md:col-span-7 md:pt-8 text-sm leading-relaxed grid sm:grid-cols-2 gap-10">
          <div><Label>{t.taskL}</Label><p className="mt-3 text-stone-300">{d.task}</p></div>
          <div><Label>{t.resultL}</Label><ul className="mt-3 space-y-2 text-stone-300">{d.result.map((x) => <li key={x} className="flex gap-3"><span className="text-stone-600">—</span>{x}</li>)}</ul></div>
          <div className="sm:col-span-2"><Label>{t.didL}</Label><p className="mt-3 text-stone-400">{d.did.join(' · ')}</p></div>
        </div>
      </section>

      <section className="mt-20 md:mt-28 rounded-[18px] bg-gradient-to-b from-[#211e1a] to-[#171512] ring-1 ring-white/[0.05] p-4 md:p-16">
        <Browser host={w.host} className="mx-auto max-w-[1180px]">
          <div className="h-[56vw] max-h-[760px] overflow-y-auto custom-scrollbar">
            <img src={w.full} alt={d.title} width={1440} loading="lazy" className="block w-full" />
          </div>
        </Browser>
        <p className="mt-4 text-center text-[11px] text-stone-600">{ui.scroll}</p>
      </section>

      <section className="mt-24 md:mt-36">
        <Label>{ui.mobile}</Label>
        <div className="mt-8 grid grid-cols-3 gap-3 md:gap-10 max-w-4xl">
          {w.mobs.map((m) => <Phone key={m} src={m} />)}
        </div>
      </section>

      <section className="mt-24 md:mt-36">
        <Label>{ui.sections}</Label>
        <div className="mt-8 grid md:grid-cols-2 gap-6 md:gap-10">
          {w.shots.map((s, k) => (
            <Browser key={s} host={w.host} className={k === 0 ? 'md:col-span-2' : ''}>
              <img src={s} alt="" width={1440} height={900} loading="lazy" className="block w-full" />
            </Browser>
          ))}
        </div>
      </section>

      <a href={`/${lang}/work/${next.slug}/`} className="group mt-28 md:mt-40 mb-10 flex items-center justify-between gap-6 border-t border-white/[0.07] pt-8">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500">{ui.next}</p>
          <p className="mt-3 text-lg text-white">{nd.title} <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span></p>
        </div>
        <img src={next.thumb} alt="" width={1440} height={900} loading="lazy" className="w-40 md:w-64 rounded-md ring-1 ring-white/10 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
      </a>
    </main>
  );
}
