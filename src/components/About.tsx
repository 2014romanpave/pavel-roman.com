import React from 'react';
import { motion } from 'motion/react';
import { GlitchTag } from './GlitchTag';

interface AboutProps {
  lang: string;
  t: (key: string) => string;
  onDiscuss: () => void;
}

export const About: React.FC<AboutProps> = ({ lang, t, onDiscuss }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">
        {/* Left Column: Visuals */}
        <div className="text-5xl lg:text-[4vw] xl:text-[4.5vw] font-bold uppercase leading-[0.85] text-[#333] break-words tracking-tight">
          <img 
            src="/img/avatar.webp" 
            alt="Pavel Roman" 
            className="float-left w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full mr-6 mb-2 md:mr-8 md:mb-4" 
            style={{ shapeOutside: 'circle()', borderRadius: '50%' }}
            referrerPolicy="no-referrer"
          />
          "DON'T LET YOUR FEARS LIMIT YOUR POSSIBILITIES."
        </div>

        {/* Right Column: Information */}
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <p className="text-xl md:text-3xl font-light leading-tight text-white">
              {t('about_hello')}
            </p>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              {t('about_text')}
            </p>
          </div>

          {/* Social Links at the bottom */}
          <div className="pt-8 flex flex-wrap gap-8 border-t border-zinc-900">
            <a 
              href="https://www.behance.net/PavelRoman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-[0.3em] uppercase hover:text-zinc-400 transition-colors border-b border-transparent hover:border-zinc-400 pb-1"
            >
              BEHANCE
            </a>
            <a 
              href="https://www.instagram.com/pavelroman.web/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-[0.3em] uppercase hover:text-zinc-400 transition-colors border-b border-transparent hover:border-zinc-400 pb-1"
            >
              INSTAGRAM
            </a>
            <a 
              href="https://t.me/PavelRomanWeb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-[0.3em] uppercase hover:text-zinc-400 transition-colors border-b border-transparent hover:border-zinc-400 pb-1"
            >
              TELEGRAM
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Card 1: Creatives */}
        <div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/80 transition-all duration-500 flex flex-col group">
          <h3 className="text-sm md:text-base font-bold uppercase tracking-widest text-white mb-4">
            {lang === 'en' ? 'CREATIVES' : 'КРЕАТИВИ'}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow">
            {lang === 'en' 
              ? 'Creation of static and video creatives for targeted advertising. Design that breaks through banner blindness, grabs attention, and generates targeted leads for your business.'
              : 'Створення статичних та відеокреативів для таргетованої реклами. Дизайн, що пробиває банерну сліпоту, привертає увагу та генерує цільові ліди для вашого бізнесу.'}
          </p>
          <div className="mt-auto flex items-end justify-between w-full">
            <button 
              onClick={onDiscuss}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full !bg-white !text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] hover:scale-105 transition-transform duration-300 w-fit cursor-pointer"
            >
              {lang === 'en' ? 'DISCUSS' : 'ОБГОВОРИТИ'}
            </button>
            <GlitchTag wordA="VIDEO" wordB="BANNERS" />
          </div>
        </div>

        {/* Card 2: Web & App */}
        <div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/80 transition-all duration-500 flex flex-col group">
          <h3 className="text-sm md:text-base font-bold uppercase tracking-widest text-white mb-4">
            {lang === 'en' ? 'WEB & APP DEVELOPMENT' : 'РОЗРОБКА WEB/APP'}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow">
            {lang === 'en'
              ? 'Creation of modern websites, apps, and unique brand identity. Full-cycle turnkey development with a focus on high conversion and a premium visual experience.'
              : 'Створення сучасних веб-сайтів, додатків та унікальної айдентики брендів. Повний цикл розробки «під ключ» з фокусом на високу конверсію та преміальний візуальний досвід.'}
          </p>
          <div className="mt-auto flex items-end justify-between w-full">
            <button 
              onClick={onDiscuss}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full !bg-white !text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] hover:scale-105 transition-transform duration-300 w-fit cursor-pointer"
            >
              {lang === 'en' ? 'DISCUSS' : 'ОБГОВОРИТИ'}
            </button>
            <GlitchTag wordA="WEB" wordB="APP" />
          </div>
        </div>

        {/* Card 3: Strategy */}
        <div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/80 transition-all duration-500 flex flex-col group">
          <h3 className="text-sm md:text-base font-bold uppercase tracking-widest text-white mb-4">
            {lang === 'en' ? 'STRATEGY & SMM' : 'СТРАТЕГІЯ ТА SMM'}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow">
            {lang === 'en'
              ? 'Development of a comprehensive content plan, social media growth strategy, and setup of effective ad campaigns that bring real profit.'
              : 'Розробка комплексного контент-плану, стратегії розвитку в соціальних мережах та налаштування эффективних рекламних кампаній, які приносять реальний прибуток.'}
          </p>
          <div className="mt-auto flex items-end justify-between w-full">
            <button 
              onClick={onDiscuss}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full !bg-white !text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] hover:scale-105 transition-transform duration-300 w-fit cursor-pointer"
            >
              {lang === 'en' ? 'DISCUSS' : 'ОБГОВОРИТИ'}
            </button>
            <GlitchTag wordA="SMM" wordB="TARGET" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
