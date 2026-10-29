import { CONTACTS, type Lang } from '../i18n';
import { EXTRA, SHOW_COURSES_TEASER } from '../extra';
import { FOOTPRINT, INSTAGRAM_URL } from '../data/footprint';

const Label = ({ children }: { children: React.ReactNode }) => <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500">{children}</p>;
const TOOLS = ['Figma', 'Photoshop', 'Illustrator', 'Adobe XD', 'Webflow', 'HTML/CSS', 'After Effects', 'Midjourney'];
const SKILLS = ['UX research', 'CustDev', 'CJM', 'JTBD', 'User flows', 'Wireframing', 'Prototyping', 'Design systems / UI kits', 'Responsive design', 'UX writing'];
const SK_L: Record<Lang, [string, string]> = { ua: ['Інструменти', 'Експертиза'], ru: ['Инструменты', 'Экспертиза'], pl: ['Narzędzia', 'Kompetencje'], en: ['Tools', 'Expertise'] };
const SOON: Record<Lang, string> = { ua: 'Скоро в Instagram', ru: 'Скоро в Instagram', pl: 'Wkrótce na Instagramie', en: 'Soon on Instagram' };

export function Expertise({ lang }: { lang: Lang }) {
  const x = EXTRA[lang];
  return (
    <section id="expertise" className="sec-live relative px-6 md:px-16 py-24 md:py-32 scroll-mt-10 overflow-hidden"><div className="live-bg" aria-hidden><i /><i /><i /></div>
      <div className="relative grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4"><h2 className="text-2xl md:text-3xl font-normal tracking-tight text-stone-100">{x.expTitle}</h2></div>
        <div className="md:col-span-8">
          <dl className="grid sm:grid-cols-2 border-t border-white/[0.06]">
            {x.expFacts.map((f) => (
              <div key={f.v} className="py-6 border-b border-white/[0.06] sm:odd:pr-8">
                <dt className="text-white">{f.v}</dt><dd className="mt-1 text-sm text-stone-500">{f.l}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12"><Label>{x.expApproachL}</Label></div>
          <ol className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-stone-300">
            {x.expApproach.map((a, i) => <li key={a} className="flex gap-3"><span className="font-mono text-xs text-stone-600 pt-0.5">0{i + 1}</span>{a}</li>)}
          </ol>
          <div className="mt-12 grid sm:grid-cols-2 gap-8">
            {([[SK_L[lang][0], TOOLS], [SK_L[lang][1], SKILLS]] as [string, string[]][]).map(([l, list]) => (
              <div key={l}>
                <Label>{l}</Label>
                <ul className="mt-4 flex flex-wrap gap-2">{list.map((k) => <li key={k} className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-stone-400">{k}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footprint({ lang }: { lang: Lang }) {
  const x = EXTRA[lang];
  return (
    <section id="footprint" className="relative px-6 md:px-10 py-24 md:py-32 glow-rose">
      <div className="text-left mb-14 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-stone-100">{x.fpTitle}</h2>
        <p className="mt-3 text-sm text-stone-500">{x.fpSub}</p>
      </div>
      <div className="fp-grid grid grid-cols-2 lg:grid-cols-8 gap-x-3 md:gap-x-4 gap-y-10 lg:gap-y-16 items-start">
        {FOOTPRINT.map((f, i) => {
          const href = f.href.replace('{lang}', lang);
          const ext = href.startsWith('http');
          return (
            <a key={i} href={href} {...(ext ? { target: '_blank', rel: 'noopener' } : {})}
              style={{ ['--c' as string]: f.col, ['--r' as string]: f.row }}
              className={`fp-item group block ${i % 2 ? 'mt-10 lg:mt-0' : ''}`}>
              <div className={`relative overflow-hidden rounded-[6px] bg-[#1d1b18] ring-1 ring-white/[0.05] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:-translate-y-1 group-hover:scale-[1.02] ${f.tall ? 'aspect-[4/5]' : 'aspect-[16/10]'}`}>
                {f.img ? (
                  <img src={f.img} alt={f.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top" />
                ) : (
                  <div className={`absolute inset-0 fp-ph fp-ph-${i % 3} flex items-end p-3`}>
                    <span className="text-[13px] leading-tight text-stone-200">{SOON[lang]}<br /><span className="text-stone-400">{CONTACTS.instagramHandle}</span></span>
                  </div>
                )}
              </div>
              <p className="mt-2.5 text-[9px] uppercase tracking-[0.2em] text-stone-500">{x.fpTypes[f.type]}</p>
              <p className="mt-1 text-xs text-stone-300 leading-snug">{f.placeholder ? 'Instagram' : f.title}</p>
            </a>
          );
        })}
      </div>
      <div className="mt-14 text-center">
        <a href={INSTAGRAM_URL ?? CONTACTS.behance} target="_blank" rel="noopener" className="text-sm text-stone-300 link-line pb-1">{x.fpMore} ↗</a>
      </div>
    </section>
  );
}

export function CoursesTeaser({ lang }: { lang: Lang }) {
  if (!SHOW_COURSES_TEASER) return null;
  const x = EXTRA[lang];
  return (
    <section className="px-6 md:px-16 py-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-[14px] border border-white/[0.07] px-6 py-6 md:px-10">
        <div className="flex items-start gap-4">
          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#d9a48c] animate-pulse shrink-0" aria-hidden />
          <div><Label>{x.courseL}</Label><p className="mt-2 text-sm text-stone-300 max-w-xl leading-relaxed">{x.courseText}</p></div>
        </div>
        <a href={CONTACTS.telegram} target="_blank" rel="noopener" className="self-start md:self-auto shrink-0 text-sm text-white link-line pb-1">{x.courseCta} →</a>
      </div>
    </section>
  );
}
