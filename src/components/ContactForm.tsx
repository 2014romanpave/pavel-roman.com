import { useState, type FormEvent } from 'react';
import type { Dict } from '../i18n';

export function ContactForm({ t, lang }: { t: Dict; lang: string }) {
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState('sending');
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form).entries()), lang }),
      });
      setState(r.ok ? 'ok' : 'err');
      if (r.ok) form.reset();
    } catch { setState('err'); }
  }
  const field = 'w-full bg-transparent border-b border-white/10 focus:border-white/60 outline-none py-3 text-sm text-white placeholder:text-stone-600 transition-colors duration-500';
  return (
    <form onSubmit={onSubmit} className="relative flex flex-col gap-8 max-w-md">
      <input name="name" required maxLength={100} placeholder={t.fName} className={field} />
      <input name="contact" required maxLength={150} placeholder={t.fContact} className={field} />
      <textarea name="message" rows={3} maxLength={2000} placeholder={t.fMsg} className={field + ' resize-none'} />
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-px h-px opacity-0" />
      <button disabled={state === 'sending'} className="self-start text-sm text-white link-line pb-1 disabled:opacity-50">
        {state === 'sending' ? t.fSending : t.fSend} →
      </button>
      {state === 'ok' && <p className="text-emerald-400/80 text-sm">{t.fOk}</p>}
      {state === 'err' && <p className="text-rose-400/80 text-sm">{t.fErr}</p>}
    </form>
  );
}
