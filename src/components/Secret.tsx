import { useEffect, useState } from 'react';
import type { Lang } from '../i18n';

const L: Record<Lang, { hint: string; built: string; langs: string; by: string; close: string }> = {
  ua: { hint: 'Ви знайшли секрет ✦', built: 'збірка', langs: '4 мови', by: 'designed & coded by Роман Павел з ШІ', close: 'Закрити' },
  ru: { hint: 'Вы нашли секрет ✦', built: 'сборка', langs: '4 языка', by: 'designed & coded by Роман Павел с ИИ', close: 'Закрыть' },
  pl: { hint: 'Znalazłeś sekret ✦', built: 'build', langs: '4 języki', by: 'designed & coded by Roman Pavel z AI', close: 'Zamknij' },
  en: { hint: 'You found the secret ✦', built: 'build', langs: '4 languages', by: 'designed & coded by Roman Pavel with AI', close: 'Close' },
};
export const openSecret = () => window.dispatchEvent(new Event('pr-secret'));
let taps: number[] = [];
/** 5 quick taps on © opens the panel. */
export const tapSecret = () => { const n = Date.now(); taps = [...taps.filter((t) => n - t < 2000), n]; if (taps.length >= 5) { taps = []; openSecret(); } };

export function Secret({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let buf = '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return setOpen(false);
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.key.length !== 1) return;
      buf = (buf + e.key.toLowerCase()).slice(-5);
      if (buf === 'roman') setOpen(true);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey); window.addEventListener('pr-secret', onOpen);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('pr-secret', onOpen); };
  }, []);
  if (!open) return null;
  const x = L[lang];
  const rows: [string, string][] = [['version', 'v1.0'], [x.built, __BUILD_DATE__], ['commit', __COMMIT__], ['stack', 'Vite + React + Tailwind · Vercel'], ['i18n', x.langs]];
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label="secret">
      <div onClick={(e) => e.stopPropagation()} className="secret-panel relative w-full max-w-sm rounded-[14px] border border-white/10 bg-[#141210] p-6 font-mono text-xs text-stone-400 shadow-2xl">
        <button onClick={() => setOpen(false)} aria-label={x.close} className="absolute right-4 top-3 text-stone-500 hover:text-white">×</button>
        <p className="secret-title text-sm text-white" data-text="// pavel-roman.sys">// pavel-roman.sys</p>
        <dl className="mt-5 space-y-2">{rows.map(([k, v]) => <div key={k} className="flex justify-between gap-4"><dt className="text-stone-600">{k}</dt><dd className="text-stone-200 text-right">{v}</dd></div>)}</dl>
        <p className="mt-5 text-stone-400">{x.by}</p>
        <p className="mt-3 text-[#d9a48c]">{x.hint}</p>
      </div>
    </div>
  );
}
