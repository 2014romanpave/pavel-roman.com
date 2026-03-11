import React, { useState, useEffect, type FormEvent } from 'react';
import { sendTelegramMessage } from '../services/telegram';
import { type Language } from '../translations';

interface ContactFormProps {
  lang: Language;
  t: (key: string) => string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ lang, t }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Check localStorage on mount
  useEffect(() => {
    const storedTime = localStorage.getItem('lastSubmitTime');
    if (storedTime) {
      const elapsed = Math.floor((Date.now() - parseInt(storedTime)) / 1000);
      if (elapsed < 60) {
        setCountdown(60 - elapsed);
      } else {
        localStorage.removeItem('lastSubmitTime');
      }
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            localStorage.removeItem('lastSubmitTime');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [countdown]);

  const handleTelegramSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Honeypot check
    const honeypot = formData.get('company_website') as string;
    if (honeypot) {
      console.log('Spam detected');
      return;
    }

    const name = formData.get('name') as string;
    const contact = formData.get('contact') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File;

    const text = `🔥 НОВАЯ ЗАЯВКА С САЙТА 🔥\n\n👤 Имя: ${name}\n📞 Контакт: ${contact}\n🔗 Детали: ${message}`;

    try {
      const success = await sendTelegramMessage(text, file);

      if (success) {
        setIsSuccess(true);
        setCountdown(60);
        localStorage.setItem('lastSubmitTime', Date.now().toString());
        form.reset(); 
        setFileName(null);
      } else {
        alert(lang === 'en' ? 'Error sending request.' : 'Помилка при відправці запиту.');
      }
    } catch (error) {
      console.error('Telegram Error:', error);
      alert(lang === 'en' ? 'Network error. Please try again later.' : 'Помилка мережі. Спробуйте пізніше.');
    }
  };

  return (
    <div className="max-w-3xl space-y-12">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none uppercase tracking-tighter">
        {t('discuss')}
      </h2>
      
      <form className="space-y-8" onSubmit={handleTelegramSubmit}>
        {/* Honeypot Field */}
        <input 
          type="text" 
          name="company_website" 
          tabIndex={-1} 
          autoComplete="off"
          className="opacity-0 absolute -z-10 w-0 h-0"
        />

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">{t('form_name')}</label>
          <input 
            name="name"
            type="text" 
            required
            className="bg-transparent border-b border-zinc-800 py-4 text-xl md:text-2xl outline-none focus:border-white transition-colors w-full"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">{t('form_contact')}</label>
          <input 
            name="contact"
            type="text" 
            required
            className="bg-transparent border-b border-zinc-800 py-4 text-xl md:text-2xl outline-none focus:border-white transition-colors w-full"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">{t('form_message')}</label>
          <textarea 
            name="message"
            required
            rows={3}
            className="bg-transparent border-b border-zinc-800 py-4 text-xl md:text-2xl outline-none focus:border-white transition-colors resize-none w-full"
          />
        </div>
        
        <div className="relative w-full border-b border-white/20 pb-4 mb-8">
          <input 
            type="file" 
            name="file" 
            id="file-upload" 
            className="hidden" 
            accept=".pdf,.doc,.docx,.txt,.png,.jpg,.webp" 
            onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
          />
          <label htmlFor="file-upload" className="cursor-pointer flex items-center gap-3 text-xs text-gray-400 uppercase tracking-widest hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
            <span>{fileName ? fileName : (lang === 'en' ? 'Attach a file (PDF, DOC, TXT)' : 'Додати файл (PDF, DOC, TXT)')}</span>
          </label>
        </div>

        <div className="space-y-6">
          {isSuccess && (
            <div className="text-emerald-500 text-sm font-bold uppercase tracking-widest animate-pulse">
              {lang === 'en' ? 'Thank you! Your request has been sent.' : 'Дякую! Вашу заявку відправлено.'}
            </div>
          )}

          <button 
            type="submit"
            disabled={countdown > 0}
            className={`px-8 py-4 bg-white text-black text-xs font-bold tracking-widest transition-all uppercase rounded-full ${
              countdown > 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:scale-105 active:scale-95 cursor-pointer'
            }`}
          >
            {countdown > 0 
              ? (lang === 'en' ? `Send again in ${countdown}s` : `Відправити знову через ${countdown}с`)
              : (lang === 'en' ? 'SEND' : 'ВІДПРАВИТИ')
            }
          </button>
        </div>
      </form>
    </div>
  );
};
