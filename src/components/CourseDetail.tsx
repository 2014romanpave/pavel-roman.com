import { motion, AnimatePresence } from 'motion/react';
import { translations, type Language } from '../translations';
import { type Course } from '../data/courses';
import { sendTelegramMessage } from '../services/telegram';
import { useState } from 'react';

export default function CourseDetail({ 
  course, 
  lang, 
  onBack 
}: { 
  course: Course; 
  lang: Language; 
  onBack: () => void 
}) {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');

  const t = (key: string): string => {
    const dict = translations[lang] as any;
    return dict[key] || key;
  };

  const ct = course.translations[lang];

  const handleBuy = async () => {
    if (!showForm) {
      setShowForm(true);
      return;
    }

    if (!contact.trim()) {
      setError('Required');
      return;
    }

    setError('');
    setIsSending(true);
    
    const message = `🔥 Новая заявка на курс: ${ct.title}\n👤 Контакт клиента: ${contact}\nОжидает реквизиты для оплаты.`;
    
    const success = await sendTelegramMessage(message);
    setIsSending(false);
    if (success) {
      setIsSuccess(true);
      setShowForm(false);
      setContact('');
      setTimeout(() => setIsSuccess(false), 6000);
    } else {
      alert('Error sending request. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 md:py-20">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors mb-12"
      >
        <span>← {t('back')}</span>
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        {/* Left: Image & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900">
            <img 
              src={course.image} 
              alt={ct.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] space-y-6">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase">Price</span>
              <span className="text-4xl font-light tracking-tighter">{course.price}</span>
            </div>
            
            <div className="space-y-4">
              <AnimatePresence>
                {showForm && (
                  <motion.div
                    key="course-purchase-form"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 space-y-2">
                      <input 
                        type="text"
                        value={contact}
                        onChange={(e) => {
                          setContact(e.target.value);
                          if (e.target.value.trim()) setError('');
                        }}
                        placeholder={t('purchase_contact_placeholder')}
                        className={`w-full bg-white/5 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors`}
                      />
                      {error && <p className="text-[10px] text-red-500 uppercase tracking-widest font-bold px-1">Required</p>}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button 
                onClick={handleBuy}
                disabled={isSending}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-6 bg-white text-black rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
              >
                {isSending ? '...' : (showForm ? t('purchase_send') : t('buy_telegram'))}
              </motion.button>
            </div>

            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  key="course-purchase-success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[10000] bg-emerald-500 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-4 min-w-[320px] max-w-[90vw]"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed">
                    {t('purchase_success_new')}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              {ct.title}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed tracking-wide">
              {ct.description}
            </p>
          </div>

          <div className="space-y-12">
            {/* What you get */}
            <div className="space-y-8">
              <h3 className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase border-b border-white/10 pb-4">
                {t('course_get_title')}
              </h3>
              <ul className="space-y-6">
                {ct.whatYouGet.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start group">
                    <span className="text-zinc-700 font-mono text-xs mt-1 group-hover:text-white transition-colors">0{i + 1}</span>
                    <span className="text-lg text-zinc-300 font-light tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modules */}
            <div className="space-y-8">
              <h3 className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase border-b border-white/10 pb-4">
                {t('course_modules_title')}
              </h3>
              <div className="space-y-4">
                {ct.modules.map((module, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                    <div className="flex gap-4 items-center">
                      <span className="text-[10px] font-mono text-zinc-600">M{i + 1}</span>
                      <span className="text-sm font-medium tracking-widest uppercase text-zinc-200">{module}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
