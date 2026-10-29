import { useEffect, useRef, useState } from 'react';
import type { Lang } from '../i18n';
import { CONTACTS } from '../i18n';
import { tapSecret } from './Secret';

const reduced = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Glitch text (restored from old GlitchCopyright / GlitchTag): every 4–9s an RGB-split jitter for 1.2s, optionally swapping A↔B. */
export function Glitch({ a, b, swap = false, className = '' }: { a: string; b?: string; swap?: boolean; className?: string }) {
  const [on, setOn] = useState(false);
  const [alt, setAlt] = useState(false);
  useEffect(() => {
    if (reduced()) return;
    let t: ReturnType<typeof setTimeout>;
    let alive = true;
    const run = () => {
      if (!alive) return;
      setOn(true);
      t = setTimeout(() => {
        if (!alive) return;
        setOn(false);
        if (swap) setAlt((v) => !v);
        t = setTimeout(run, Math.random() * 5000 + 4000);
      }, 1200);
    };
    t = setTimeout(run, Math.random() * 3000 + 2000);
    return () => { alive = false; clearTimeout(t); };
  }, [swap]);
  // during glitch, show the "other" word (old behaviour: © MMXXVI flashes © 2026)
  const base = swap ? (alt ? b ?? a : a) : a;
  const other = swap ? (alt ? a : b ?? a) : b ?? a;
  const text = on ? other : base;
  return (
    <span className={`glitch ${on ? 'is-on' : ''} ${className}`} data-text={text} aria-label={base}>
      <span aria-hidden>{text}</span>
      {on && <><span className="glitch-l" aria-hidden>{text}</span><span className="glitch-r" aria-hidden>{text}</span><span className="glitch-n" aria-hidden /></>}
    </span>
  );
}

/** Fade-rotating text list. */
function useRotate(len: number, ms: number) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduced() || len < 2) return;
    const id = setInterval(() => setI((p) => (p + 1) % len), ms);
    return () => clearInterval(id);
  }, [len, ms]);
  return i;
}

const Q: Record<string, string> = {
  ua: 'Не дозволяй страхам обмежувати твої можливості.',
  ru: 'Не позволяй страхам ограничивать твои возможности.',
  pl: 'Nie pozwól, by lęki ograniczały twoje możliwości.',
  en: "Don't let your fears limit your possibilities.",
  fr: 'Ne laissez pas vos peurs limiter vos possibilités.',
  ja: '恐怖に可能性を制限させてはいけない。',
  it: 'Non lasciare che le tue paure limitino le tue possibilità.',
};
const ORDER = ['en', 'ua', 'fr', 'ja', 'pl', 'it', 'ru'];

/** Multilingual rotating quote, fixed bottom-left (desktop), starts with the page language. */
export function RotatingQuote({ lang }: { lang: Lang }) {
  const list = [lang, ...ORDER.filter((l) => l !== lang)].map((l) => Q[l]);
  const i = useRotate(list.length, 4000);
  return (
    <div className="fixed bottom-8 left-8 z-40 hidden lg:block max-w-[220px] text-[10px] leading-relaxed tracking-[0.12em] text-stone-500 pointer-events-none">
      <p key={i} className="rot-fade">“{list[i]}”</p>
    </div>
  );
}

const CONTACT_ROT = [
  { text: 'Telegram', href: CONTACTS.telegram },
  { text: 'WhatsApp', href: CONTACTS.whatsapp },
  { text: 'Instagram', href: CONTACTS.instagram },
  { text: 'Email', href: `mailto:${CONTACTS.email}` },
];
/** Bottom-right: rotating contact link + glitch copyright (old "Global Contact Info"). */
export function CornerContacts() {
  const i = useRotate(CONTACT_ROT.length, 3000);
  const c = CONTACT_ROT[i];
  return (
    <div className="fixed bottom-8 right-8 z-40 hidden lg:flex flex-col items-end gap-1 text-[10px] tracking-[0.2em] uppercase text-stone-500">
      <a key={i} href={c.href} target="_blank" rel="noopener" className="rot-slide hover:text-white transition-colors">{c.text}</a>
      <span onClick={tapSecret} className="cursor-default select-none"><Glitch a="© MMXXVI" b="© 2026" className="font-mono text-stone-600" /></span>
    </div>
  );
}

/** Smart dock (old bottom menu): rotating round logo, expands on hover/tap into section links + CTA. */
export function Dock({ nav, cta, lang }: { nav: { cases: string; services: string; process: string; contact: string }; cta: string; lang: Lang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', onDown); document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open]);
  const toggle = () => setOpen((v) => !v);
  // desktop (fine pointer + hover): open on hover, close ~250ms after leaving the pill
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const canHover = () => typeof window !== 'undefined' && matchMedia('(hover: hover) and (pointer: fine)').matches;
  const onEnter = (e: React.PointerEvent) => { if (e.pointerType !== 'mouse' || !canHover()) return; clearTimeout(timer.current); setOpen(true); };
  const onLeave = (e: React.PointerEvent) => { if (e.pointerType !== 'mouse' || !canHover()) return; clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(false), 250); };
  const home = (e: React.MouseEvent) => {
    setOpen(false);
    const path = location.pathname.replace(/\/+$/, '/') ;
    if (path === `/${lang}/`) { e.preventDefault(); window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' }); history.replaceState(null, '', `/${lang}/`); }
  };
  const name = lang === 'ua' || lang === 'ru' ? 'РОМАН ПАВЕЛ' : 'PAVEL ROMAN';
  const links: [string, string][] = [['#works', nav.cases], ['#services', nav.services], ['#process', nav.process]];
  return (
    <nav
      aria-label="menu"
      ref={ref}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      className={`dock fixed bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-50 h-14 flex items-center p-1.5 rounded-full border border-white/15 bg-stone-900/60 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,.8)] overflow-hidden ${open ? 'is-open' : ''}`}
    >
      <a href={`/${lang}/`} onClick={home} aria-label={name} className="w-11 h-11 shrink-0 rounded-full bg-[#ece6dc] text-[#14120f] p-0.5 dock-logo block">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path id="dockCircle" d="M 50, 50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" fill="none" />
          <text fontSize="11.5" fontWeight="600" fill="currentColor" letterSpacing="1.2"><textPath href="#dockCircle">{name} 2026 • {name} 2026 • </textPath></text>
        </svg>
      </a>
      <div id="dock-links" className="dock-links flex items-center gap-3 sm:gap-5 pr-1 whitespace-nowrap">
        {links.map(([h, l]) => <a key={h} href={`/${lang}/${h}`} onClick={() => setOpen(false)} className="text-[10px] sm:text-[11px] tracking-[0.1em] sm:tracking-[0.18em] uppercase text-stone-400 hover:text-white transition-colors">{l}</a>)}
        <a href={`/${lang}/#contact`} onClick={() => setOpen(false)} className="rounded-full bg-[#ece6dc] text-[#14120f] px-3 sm:px-4 py-1.5 text-[10px] sm:text-[11px] tracking-[0.1em] sm:tracking-[0.18em] uppercase hover:bg-white transition-colors">{cta}</a>
      </div>
      <button type="button" onClick={toggle} aria-expanded={open} aria-controls="dock-links" aria-label="menu" className="dock-burger shrink-0 w-11 h-11 flex items-center justify-center"><svg width="20" height="14" viewBox="0 0 22 14" fill="none" aria-hidden className="burger-ico"><rect width="22" height="1.3" fill="#d6d0c6"/><rect y="6" width="15" height="1.3" fill="#d6d0c6"/><rect y="12" width="22" height="1.3" fill="#d6d0c6"/></svg></button>
    </nav>
  );
}
