import { useEffect, useState } from 'react';
import type { Lang } from '../i18n';

const RING: Record<Lang, string> = {
  ua: 'РОМАН ПАВЕЛ · ДИЗАЙН · САЙТИ · РЕКЛАМА · З 2013 · ',
  ru: 'РОМАН ПАВЕЛ · ДИЗАЙН · САЙТЫ · РЕКЛАМА · С 2013 · ',
  pl: 'ROMAN PAVEL · DESIGN · STRONY · REKLAMA · OD 2013 · ',
  en: 'ROMAN PAVEL · DESIGN · WEBSITES · ADS · SINCE 2013 · ',
};

/** Two B/W squircle photos (swap on hover / tap / slow auto-swap on touch) + rotating circular text badge. */
export function AboutPhoto({ lang, alt }: { lang: Lang; alt: string }) {
  const [alt2, setAlt2] = useState(false);
  useEffect(() => {
    if (matchMedia('(hover: hover)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setAlt2((v) => !v), 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="about-photo group relative w-56 sm:w-64 md:w-72 shrink-0 select-none" onClick={() => setAlt2((v) => !v)}
      onMouseEnter={() => setAlt2(true)} onMouseLeave={() => setAlt2(false)}>
      <div className="relative aspect-square">
        <img src="/img/about/roman-1.webp" alt={alt} width={500} height={500} loading="lazy" className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${alt2 ? 'opacity-0' : 'opacity-100'}`} />
        <img src="/img/about/roman-2.webp" alt="" width={500} height={500} loading="lazy" className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${alt2 ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      <div className="ring-badge absolute -right-8 -bottom-8 md:-right-12 md:-bottom-10 w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#12110f] ring-1 ring-white/10 flex items-center justify-center" aria-hidden>
        <svg viewBox="0 0 120 120" className="ring-text absolute inset-0 w-full h-full">
          <defs><path id="aboutRing" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
          <text fontSize="9.2" letterSpacing="1.6" fill="#d6d0c6"><textPath href="#aboutRing" textLength="286">{RING[lang]}</textPath></text>
        </svg>
        <span className="text-[#d9a48c] text-2xl md:text-3xl leading-none">✦</span>
      </div>
    </div>
  );
}
