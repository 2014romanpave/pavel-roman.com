import { useState, type FormEvent } from 'react';
import type { Dict } from '../i18n';

export function ContactForm({ t, lang }: { t: Dict; lang: string }) {
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState('sending');
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(fd.entries()), lang }),
      });
      setState(r.ok ? 'ok' : 'err');
      if (r.ok) (e.target as HTMLFormElement).reset();
    } catch { setState('err'); }
  }
  const field = 'w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-base placeholder:text-zinc-500 transition-colors';
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <input name="name" required maxLength={100} placeholder={t.fName} className={field} />
      <input name="contact" required maxLength={150} placeholder={t.fContact} className={field} />
      <textarea name="message" rows={3} maxLength={2000} placeholder={t.fMsg} className={field + ' resize-none'} />
      {/* honeypot */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-px h-px opacity-0" />
      <button disabled={state === 'sending'} className="self-start rounded-full bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-zinc-300 transition disabled:opacity-50">
        {state === 'sending' ? t.fSending : t.fSend}
      </button>
      {state === 'ok' && <p className="text-emerald-400 text-sm">{t.fOk}</p>}
      {state === 'err' && <p className="text-rose-400 text-sm">{t.fErr}</p>}
    </form>
  );
}
