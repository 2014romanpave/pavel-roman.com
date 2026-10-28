import { useState, type FormEvent } from 'react';
import { CONTACTS, type Dict, type Lang } from '../i18n';
import { EXTRA } from '../extra';

export function ContactForm({ t, lang }: { t: Dict; lang: Lang }) {
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
  const x = EXTRA[lang];
  return (
    <div className="max-w-md">
      <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500">{x.quickL}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a href={CONTACTS.telegram} target="_blank" rel="noopener" className="rounded-full bg-[#ece6dc] text-[#14120f] px-5 py-2.5 text-sm hover:bg-white transition-colors">Telegram →</a>
        <a href={CONTACTS.whatsapp} target="_blank" rel="noopener" className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-stone-200 hover:border-white/50 transition-colors">WhatsApp →</a>
      </div>
      <p className="mt-12 text-sm text-stone-500">{x.orForm}</p>
    <form onSubmit={onSubmit} className="relative mt-4 flex flex-col gap-6">
      <input name="name" required maxLength={100} placeholder={t.fName} className={field} />
      <input name="contact" required maxLength={150} placeholder={t.fContact} className={field} />
      <input name="message" maxLength={300} placeholder={x.fMsgShort} className={field} />
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-px h-px opacity-0" />
      <button disabled={state === 'sending'} className="self-start text-sm text-white link-line pb-1 disabled:opacity-50">
        {state === 'sending' ? t.fSending : t.fSend} →
      </button>
      {state === 'ok' && <p className="text-emerald-400/80 text-sm">{t.fOk}</p>}
      {state === 'err' && <p className="text-rose-400/80 text-sm">{t.fErr}</p>}
    </form>
    </div>
  );
}
