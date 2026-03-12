import React, { useState, useEffect, useRef, type FormEvent } from 'react';
import { motion, AnimatePresence, useAnimation } from 'motion/react';
import { translations, type Language, type TranslationKey } from './translations';
import { sendTelegramMessage } from './services/telegram';
import { PROJECTS, type Project } from './data/projects';
import Works from './components/Works';
import Store from './components/Store';
import CourseDetail from './components/CourseDetail';
import { ComingSoon } from './components/ComingSoon';
import MyWayFeed from './components/MyWayFeed';
import { COURSES } from './data/courses';
import { NavItem } from './components/NavItem';
import { MultilingualQuote } from './components/MultilingualQuote';
import { RotatingContact } from './components/RotatingContact';
import { ContactForm } from './components/ContactForm';
import { GlitchCopyright } from './components/GlitchCopyright';

const GLOW_COLORS = {
  creative: 'rgba(190, 18, 60, 0.4)', // Глубокая малина
  ux: 'rgba(7, 89, 133, 0.4)',       // Ночной лед
  store: 'rgba(139, 92, 246, 0.4)',   // Благородный фиолетовый
  about: 'rgba(20, 83, 45, 0.4)',     // Темная мята
};

type ModalType = 'none' | 'creative' | 'ux' | 'store' | 'store_detail' | 'about' | 'audit' | 'myway';

export default function App() {

  useEffect(() => {
    const asciiArt = `
███╗   ███╗██╗   ██╗    ████████╗██████╗  █████╗  ██████╗███████╗
████╗ ████║╚██╗ ██╔╝    ╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██╔════╝
██╔████╔██║ ╚████╔╝        ██║   ██████╔╝███████║██║     █████╗  
██║╚██╔╝██║  ╚██╔╝         ██║   ██╔══██╗██╔══██║██║     ██╔══╝  
██║ ╚═╝ ██║   ██║          ██║   ██║  ██║██║  ██║╚██████╗███████╗
╚═╝     ╚═╝   ╚═╝          ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚══════╝
    `;
    const logoStyle = "color: #ffffff; font-weight: bold; background: #000000; padding: 10px; display: block;";
    const textStyle = "color: #a1a1aa; font-size: 14px; font-family: monospace; line-height: 1.5;";
    
    console.log(`%c${asciiArt}`, logoStyle);
    console.log(
      `%c\nDesigned & crafted with passion by Pavel Roman. © MMXXVI\n\nLooking for a top-tier designer or developer?\nLet's discuss your project:\n✉️ 2014romanpavel@gmail.com\n🚀 Telegram: t.me/PavelRomanWeb\n\n`, 
      textStyle
    );
  }, []);
  
  // --- ГЛИТЧ-ТЕГ ДЛЯ КАРТОЧЕК ---
const GlitchTag: React.FC<{ wordA: string, wordB: string }> = ({ wordA, wordB }) => {
  const controls = useAnimation();
  const [isGlitching, setIsGlitching] = useState(false);
  const [isWordB, setIsWordB] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let timeoutId: any;

    const triggerGlitch = async () => {
      if (!isMounted) return;
      setIsGlitching(true);
      
      try {
        await controls.start({
          x: [0, -4, 5, -2, 0, 0, 2, -1, 0],
          y: [0, 1, -1, 0, 0, 0, -1, 1, 0],
          opacity: [1, 0.3, 1, 0.8, 1, 1, 0.4, 0.9, 1],
          transition: { duration: 1.2, times: [0, 0.05, 0.1, 0.15, 0.2, 0.85, 0.9, 0.95, 1], ease: "linear" }
        });
      } catch (error) {
        // Animation interrupted or component unmounted
      }

      if (!isMounted) return;
      setIsGlitching(false);
      setIsWordB(prev => !prev);
      
      const nextDelay = Math.random() * 5000 + 4000;
      timeoutId = setTimeout(triggerGlitch, nextDelay);
    };

    timeoutId = setTimeout(triggerGlitch, Math.random() * 3000 + 2000);
    
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      controls.stop();
    };
  }, [controls]);

  const currentText = isGlitching ? (isWordB ? wordA : wordB) : (isWordB ? wordB : wordA);

  return (
    <div className="relative inline-block w-20 text-right select-none group overflow-visible">
      <motion.div
        animate={controls}
        className="relative font-mono text-[9px] tracking-widest text-zinc-600 uppercase"
        style={{ textShadow: isGlitching ? '2px 0 #ff0000, -2px 0 #0000ff' : 'none' }}
      >
        <span className="relative z-10">{currentText}</span>
        {isGlitching && (
          <>
            <motion.span
              className="absolute top-0 right-0 text-red-500/80 mix-blend-screen pointer-events-none z-0"
              animate={{ x: [-4, 4, -2, 0, 0, 3, -1], opacity: [0.8, 0.2, 0.9, 0.5, 0.5, 0.8, 0] }}
              transition={{ duration: 1.2, times: [0, 0.1, 0.2, 0.3, 0.85, 0.95, 1] }}
            >
              {currentText}
            </motion.span>
            <motion.span
              className="absolute top-0 right-0 text-blue-500/80 mix-blend-screen pointer-events-none z-0"
              animate={{ x: [4, -4, 2, 0, 0, -3, 1], opacity: [0.8, 0.2, 0.9, 0.5, 0.5, 0.8, 0] }}
              transition={{ duration: 1.2, times: [0, 0.1, 0.2, 0.3, 0.85, 0.95, 1] }}
            >
              {currentText}
            </motion.span>
            <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
              <motion.div className="absolute top-[30%] left-0 w-full h-[1px] bg-white/60" animate={{ opacity: [0, 1, 0, 0, 1, 0], y: [0, 2, -1, 0, 3, 0] }} transition={{ duration: 1.2, times: [0, 0.1, 0.2, 0.85, 0.9, 1] }} />
              <motion.div className="absolute top-[70%] left-0 w-full h-[2px] bg-white/30" animate={{ opacity: [0, 1, 0], x: [-5, 5, 0] }} transition={{ duration: 1.2, times: [0, 0.15, 1] }} />
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};
// --- КОНЕЦ ГЛИТЧ-ТЕГА ---

  const [lang, setLang] = useState<Language>('en');
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>('none');
  const [previousModal, setPreviousModal] = useState<ModalType | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const IS_STORE_MAINTENANCE = true; // true = stub, false = store open

  const t = (key: string): string => {
    const dict = translations[lang] as any;
    return dict[key] || key;
  };

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const ctaPhrases = [
    t('cta.audit'),
    t('cta.discuss_project'),
    t('cta.boost')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % ctaPhrases.length);
        setIsFading(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [ctaPhrases.length]);

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-black font-sans selection:bg-white selection:text-black">
      {/* Global Header */}
      <header className="fixed top-0 left-0 w-full h-20 md:h-24 z-[9999] bg-black/75 backdrop-blur-lg border-b border-white/5 flex items-center justify-between px-4 md:px-8">
        <div 
          onClick={() => {
            setActiveModal('none');
            setSelectedProject(null);
          }}
          className="uppercase tracking-widest text-sm cursor-pointer hover:opacity-70 transition font-bold"
        >
          {t('role')}
        </div>

        {/* Project Title (Desktop/Tablet) */}
        {selectedProject && (
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none">
            <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-zinc-400 md:text-zinc-500 uppercase block text-center mb-0.5">Project</span>
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase block text-center truncate max-w-[120px] md:max-w-none">
              {t(selectedProject.titleKey)}
            </span>
          </div>
        )}

        <div className="flex items-center gap-4 md:gap-8">
          {/* Global Language Switcher */}
          <div className="text-sm flex gap-2 pointer-events-auto font-bold uppercase tracking-widest">
            <button 
              onClick={() => setLang('en')}
              className={`transition-colors cursor-pointer ${lang === 'en' ? '!text-white' : '!text-white/50 md:!text-zinc-500 hover:!text-zinc-300'}`}
            >
              EN
            </button>
            <span className="text-white/20">/</span>
            <button 
              onClick={() => setLang('ua')}
              className={`transition-colors cursor-pointer ${lang === 'ua' ? '!text-white' : '!text-white/50 md:!text-zinc-500 hover:!text-zinc-300'}`}
            >
              UA
            </button>
          </div>

          {/* Close Button (Integrated into Header) */}
          {activeModal !== 'none' && (
            <div 
              onClick={(e) => {
                e.stopPropagation();
                if (selectedProject) {
                  setSelectedProject(null);
                } else {
                  setActiveModal(previousModal ? previousModal : 'none');
                  setPreviousModal(null);
                }
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-lg border border-white/30 cursor-pointer hover:scale-110 transition group !z-[9999] !text-white"
            >
              <div className="relative w-4 h-4 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-0.5 !bg-white rotate-45 transition-transform group-hover:rotate-135"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 !bg-white -rotate-45 transition-transform group-hover:-rotate-135"></div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Global Contact Info (Bottom Right) */}
      <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end text-right text-[10px] text-zinc-400 md:text-zinc-500 hidden md:flex pointer-events-auto font-medium tracking-widest uppercase">
        <RotatingContact />
        <div className="mt-1">
          <GlitchCopyright />
        </div>
      </div>

      {/* Multilingual Rotating Quote (Bottom Left) */}
      <MultilingualQuote />
      
      {/* Organic Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        <div className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${hoveredMenu ? 'opacity-100' : 'opacity-0'}`}>
          {/* Creative Glow */}
          <div className={`absolute inset-0 transition-opacity duration-[1000ms] ${hoveredMenu === 'bg-creative' ? 'opacity-100' : 'opacity-0'}`}>
             <motion.div
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] blur-[120px]"
               style={{ background: `radial-gradient(ellipse at center, ${GLOW_COLORS.creative}, transparent 70%)` }}
               animate={{ x: [-40, 40], rotate: [0, 10, 0] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             />
          </div>

          {/* UX Glow */}
          <div className={`absolute inset-0 transition-opacity duration-[1000ms] ${hoveredMenu === 'bg-ux' ? 'opacity-100' : 'opacity-0'}`}>
             <motion.div
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] blur-[120px]"
               style={{ background: `radial-gradient(ellipse at center, ${GLOW_COLORS.ux}, transparent 70%)` }}
               animate={{ x: [40, -40], rotate: [0, -10, 0] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
             />
          </div>

          {/* Store Glow */}
          <div className={`absolute inset-0 transition-opacity duration-[1000ms] ${hoveredMenu === 'bg-store' ? 'opacity-100' : 'opacity-0'}`}>
             <motion.div
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] blur-[120px]"
               style={{ background: `radial-gradient(ellipse at center, ${GLOW_COLORS.store}, transparent 70%)` }}
               animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             />
          </div>

          {/* About Glow */}
          <div className={`absolute inset-0 transition-opacity duration-[1000ms] ${hoveredMenu === 'bg-about' ? 'opacity-100' : 'opacity-0'}`}>
             <motion.div
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] blur-[120px]"
               style={{ background: `radial-gradient(ellipse at center, ${GLOW_COLORS.about}, transparent 70%)` }}
               animate={{ y: [-30, 30], scale: [1, 1.1, 1] }}
               transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
             />
          </div>
        </div>
      </div>

      {/* UI Overlay */}
      <main className="relative flex flex-col items-center justify-center min-h-screen w-full z-10 pointer-events-none">
        {/* Center Navigation */}
        <nav className="flex flex-col items-center justify-center pointer-events-auto">
          <ul className="flex flex-col items-center gap-2 md:gap-4">
            <NavItem 
              label={t('menu_1')} 
              description={t('menu_1_desc')}
              i18nKey="menu_1"
              target="bg-creative"
              onClick={() => {
                setActiveModal('creative');
                setSelectedProject(null);
              }}
              onHover={() => setHoveredMenu('bg-creative')} 
              onLeave={() => setHoveredMenu(null)} 
              hoveredMenu={hoveredMenu}
            />
            <NavItem 
              label={t('menu_2')} 
              description={t('menu_2_desc')}
              i18nKey="menu_2"
              target="bg-ux"
              onClick={() => {
                setActiveModal('ux');
                setSelectedProject(null);
              }}
              onHover={() => setHoveredMenu('bg-ux')} 
              onLeave={() => setHoveredMenu(null)} 
              hoveredMenu={hoveredMenu}
            />
            <NavItem 
              label={t('menu_3')} 
              description={t('menu_3_desc')}
              i18nKey="menu_3"
              target="bg-about"
              onClick={() => {
                setActiveModal('about');
                setSelectedProject(null);
              }}
              onHover={() => setHoveredMenu('bg-about')} 
              onLeave={() => setHoveredMenu(null)} 
              hoveredMenu={hoveredMenu}
            />
            <li 
              className="mt-8 md:mt-14 flex flex-col items-center"
              onMouseEnter={() => setHoveredMenu('cta')}
              onMouseLeave={() => setHoveredMenu(null)}
              onClick={() => {
                if (activeModal !== 'audit') setPreviousModal(activeModal);
                setActiveModal('audit');
                setSelectedProject(null);
              }}
            >
              <span 
                id="dynamic-cta"
                className={`relative cursor-pointer inline-block text-sm sm:text-base font-light !text-white border border-white/25 rounded-[50px] px-7 py-2.5 hover:border-white hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all duration-500 ease tracking-[1px] uppercase ${isFading ? 'opacity-0' : 'opacity-100'}`}
              >
                {ctaPhrases[phraseIndex]}
              </span>
              <motion.p 
                initial={{ opacity: 0, y: -5 }}
                animate={hoveredMenu === 'cta' ? { opacity: 0.5, y: 0 } : { opacity: 0, y: -5 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-zinc-400 md:text-zinc-500 uppercase mt-4 pointer-events-none"
              >
                {t('menu_4_desc')}
              </motion.p>
            </li>

            {/* Mobile Contact Block */}
            <li className="mt-10 flex md:hidden flex-col items-center gap-1 pointer-events-auto text-center">
              <div className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 md:text-zinc-500">
                <RotatingContact />
              </div>
              <div className="mt-1">
                <GlitchCopyright />
              </div>
            </li>
          </ul>
        </nav>
      </main>

      {/* Overlays */}
      <AnimatePresence mode="wait">
        {activeModal !== 'none' && (
          <motion.div
            key="main-modal"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-black text-white p-6 md:p-12 pt-12 md:pt-40 flex flex-col overflow-y-auto custom-scrollbar"
          >
            {/* Mobile Close Button for Modal */}
            <div 
              onClick={() => {
                setActiveModal(previousModal ? previousModal : 'none');
                setPreviousModal(null);
              }}
              className="md:hidden fixed top-6 right-6 !z-[9999] w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-lg border border-white/40 cursor-pointer !text-white"
            >
              <div className="relative w-4 h-4">
                <div className="absolute top-1/2 left-0 w-full h-0.5 !bg-white rotate-45"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 !bg-white -rotate-45"></div>
              </div>
            </div>

            <div className="mt-12 md:mt-24 max-w-6xl mx-auto w-full pb-32">
              {activeModal === 'about' ? (
                <>
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
                        <p className="text-xl md:text-3xl font-light leading-tight text-white" data-i18n="about_hello">
                          {t('about_hello')}
                        </p>
                        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed" data-i18n="about_text">
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
                          onClick={() => {
                            setPreviousModal('about');
                            setActiveModal('audit');
                          }}
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
                          onClick={() => {
                            setPreviousModal('about');
                            setActiveModal('audit');
                          }}
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
                          onClick={() => {
                            setPreviousModal('about');
                            setActiveModal('audit');
                          }}
                          className="inline-flex items-center justify-center px-6 py-3 rounded-full !bg-white !text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] hover:scale-105 transition-transform duration-300 w-fit cursor-pointer"
                        >
                          {lang === 'en' ? 'DISCUSS' : 'ОБГОВОРИТИ'}
                        </button>
                        <GlitchTag wordA="SMM" wordB="TARGET" />
                      </div>
                    </div>
                  </div>
                </>
              ) : activeModal === 'audit' ? (
                <ContactForm lang={lang} t={t} />
              ) : (activeModal === 'store' || activeModal === 'store_detail') && IS_STORE_MAINTENANCE ? (
                /* Если магазин на обслуживании — показываем ComingSoon */
                <ComingSoon 
                  t={t} 
                  onBack={() => setActiveModal('none')} 
                />
              ) : activeModal === 'store' ? (
                /* Если выбран магазин — показываем список курсов */
                <Store 
                  lang={lang} 
                  onSelectCourse={(id) => {
                    setSelectedCourseId(id);
                    setActiveModal('store_detail');
                  }}
                />
              ) : activeModal === 'store_detail' ? (
                /* Если выбраны детали — показываем конкретный курс по ID */
                <CourseDetail 
                  lang={lang} 
                  course={COURSES.find(c => c.id === selectedCourseId)!} 
                  onBack={() => setActiveModal('store')}
                />
              ) : activeModal === 'myway' ? (
                <MyWayFeed />
              ) : (
                /* В остальных случаях показываем работы (Works) */
                <Works 
                  lang={lang} 
                  initialFilter={activeModal === 'creative' ? 'creative' : activeModal === 'ux' ? 'ux' : 'all'} 
                  onProjectClick={(id) => {
                    const project = PROJECTS.find(p => p.id === id);
                    if (project) setSelectedProject(project);
                  }}
                />
              )}
            </div>

            {/* Nested Project Detail Modal */}
            <AnimatePresence mode="wait">
              {selectedProject && (
                <motion.div
                  key="project-modal"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  className="fixed inset-0 z-[70] bg-black text-white p-6 md:p-12 pt-12 md:pt-40 overflow-y-auto custom-scrollbar"
                >
                  {/* Mobile Close Button for Project Detail */}
                  <div 
                    onClick={() => setSelectedProject(null)}
                    className="md:hidden fixed top-6 right-6 !z-[9999] w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-lg border border-white/40 cursor-pointer !text-white"
                  >
                    <div className="relative w-4 h-4">
                      <div className="absolute top-1/2 left-0 w-full h-0.5 !bg-white rotate-45"></div>
                      <div className="absolute top-1/2 left-0 w-full h-0.5 !bg-white -rotate-45"></div>
                    </div>
                  </div>

                  <div className="mt-12 md:mt-24 max-w-5xl mx-auto w-full pb-32 space-y-16">
                    {selectedProject.category === 'creative' ? (
                      // Simple View
                      <div className="space-y-12">
                        {/* Media */}
                        <div className="bg-zinc-900 w-full aspect-video overflow-hidden relative rounded-2xl">
                          {selectedProject.videoUrl ? (
                            <video 
                              src={selectedProject.videoUrl} 
                              autoPlay 
                              loop 
                              muted 
                              playsInline 
                              className="w-full h-auto rounded-lg object-cover" 
                            />
                          ) : (
                            <img 
                              src={selectedProject.image} 
                              alt={t(selectedProject.titleKey as string)} 
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-6">
                          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
                            {t(selectedProject.titleKey as string)}
                          </h2>
                          <div className="flex items-center gap-4 text-zinc-400 md:text-zinc-500 text-sm font-medium uppercase tracking-widest">
                            <span>{selectedProject.client || 'Personal Project'}</span>
                            <span className="w-1 h-1 bg-zinc-800 rounded-full" />
                            <span>{selectedProject.year || '2024'}</span>
                          </div>
                          <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed max-w-3xl">
                            {t(selectedProject.descKey as string)}
                          </p>
                        </div>
                      </div>
                    ) : (
                      // Detailed Case Study View (UX)
                      <>
                        {/* Hero Section */}
                        <div className="bg-zinc-900 w-full aspect-video overflow-hidden relative rounded-2xl">
                          <img 
                            src={selectedProject.image} 
                            alt={t(selectedProject.titleKey as string)} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        
                        {/* Header & Tags */}
                        <div className="space-y-8">
                          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="space-y-2">
                              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                                {t(selectedProject.titleKey as string)}
                              </h2>
                              <div className="flex items-center gap-4 text-zinc-400 md:text-zinc-500 text-sm font-medium uppercase tracking-widest">
                                <span>{selectedProject.client || 'Personal Project'}</span>
                                <span className="w-1 h-1 bg-zinc-800 rounded-full" />
                                <span>{selectedProject.year || '2024'}</span>
                              </div>
                            </div>
                            
                            {selectedProject.tags && (
                              <div className="flex flex-wrap gap-2">
                                {selectedProject.tags.map(tag => (
                                  <span key={tag} className="border border-white/10 text-[10px] px-3 py-1 rounded-full uppercase tracking-widest text-zinc-400">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                          {/* Left Column */}
                          <div className="space-y-12">
                            {selectedProject.task && (
                              <div className="space-y-4">
                                <h3 className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 md:text-zinc-500 uppercase">
                                  The Task
                                </h3>
                                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                                  {selectedProject.task}
                                </p>
                              </div>
                            )}
                            
                            {selectedProject.role && (
                              <div className="space-y-4">
                                <h3 className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 md:text-zinc-500 uppercase">
                                  My Role
                                </h3>
                                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                                  {selectedProject.role}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Right Column */}
                          <div className="space-y-12">
                            {selectedProject.solution && (
                              <div className="space-y-4">
                                <h3 className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 md:text-zinc-500 uppercase">
                                  The Solution
                                </h3>
                                <ul className="space-y-4">
                                  {selectedProject.solution.map((item, i) => (
                                    <li key={i} className="text-lg md:text-xl text-zinc-300 leading-relaxed flex gap-4">
                                      <span className="text-zinc-600 font-mono text-sm mt-1">0{i + 1}</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {selectedProject.outcome && (
                              <div className="space-y-4">
                                <h3 className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 md:text-zinc-500 uppercase">
                                  The Outcome
                                </h3>
                                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                                  {selectedProject.outcome}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Links Section */}
                        {selectedProject.links && (
                          <div className="pt-16 border-t border-zinc-900 flex flex-wrap gap-8">
                            {selectedProject.links.website && (
                              <a href={selectedProject.links.website} target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-widest uppercase hover:text-zinc-400 transition-colors flex items-center gap-2">
                                ↗ Live Website
                              </a>
                            )}
                            {selectedProject.links.behance && (
                              <a href={selectedProject.links.behance} target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-widest uppercase hover:text-zinc-400 transition-colors flex items-center gap-2">
                                ↗ Behance Case
                              </a>
                            )}
                            {selectedProject.links.figma && (
                              <a href={selectedProject.links.figma} target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-widest uppercase hover:text-zinc-400 transition-colors flex items-center gap-2">
                                ↗ Figma File
                              </a>
                            )}
                          </div>
                        )}

                        {/* Extended Gallery */}
                        {selectedProject.images && selectedProject.images.length > 1 && (
                          <div className="space-y-8 pt-16">
                            {selectedProject.images.slice(1).map((img, i) => (
                              <div key={i} className="w-full overflow-hidden rounded-2xl">
                                <img 
                                  src={img} 
                                  alt={`${t(selectedProject.titleKey as string)} detail ${i + 1}`} 
                                  className="w-full h-auto object-cover"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Smart Dock */}
      <motion.nav 
        id="smart-dock" 
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { maxWidth: '600px' },
          closed: { maxWidth: '104px' }
        }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="fixed bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-[9999] bg-white/10 backdrop-blur-xl border border-white/30 rounded-full h-14 flex items-center p-1.5 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] w-max overflow-hidden shadow-2xl pointer-events-auto"
      >
        {/* Left: Rotating Logo */}
        <div 
          className="w-11 h-11 !bg-white rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite] shrink-0 overflow-hidden p-0.5 z-20 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
            setActiveModal('none');
            setSelectedProject(null);
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full scale-110">
            <path id="circlePath" d="M 50, 50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" fill="none" />
            <text fontSize="12" fontWeight="900" fill="#000000" letterSpacing="1">
              <textPath href="#circlePath" startOffset="0%">PAVEL ROMAN 2026 • PAVEL ROMAN 2026 • </textPath>
            </text>
          </svg>
        </div>

        {/* Center: Nav Links (Reveal on hover) */}
        <motion.div 
          variants={{
            open: { opacity: 1, pointerEvents: 'auto' },
            closed: { opacity: 0, pointerEvents: 'none' }
          }}
          className="flex items-center gap-2 sm:gap-4 transition-opacity duration-500 delay-100 whitespace-nowrap pl-4 pr-1 sm:pr-2 z-10"
        >
          <button 
            onClick={() => {
              if (activeModal !== 'creative') setPreviousModal(activeModal);
              setActiveModal('creative');
              setSelectedProject(null);
            }} 
            className="text-[10px] sm:text-xs font-bold tracking-widest uppercase hover:!text-white !text-white md:!text-zinc-400 transition-all duration-300 hover:scale-110 active:scale-95"
            data-i18n="dock_works"
          >
            {t('dock_works')}
          </button>
          <button 
            onClick={() => {
              if (activeModal !== 'store') setPreviousModal(activeModal);
              setActiveModal('store');
              setSelectedProject(null);
            }} 
            className="text-[10px] sm:text-xs font-bold tracking-widest uppercase hover:!text-white !text-white md:!text-zinc-400 transition-all duration-300 hover:scale-110 active:scale-95"
            data-i18n="menu_store"
          >
            {t('menu_store')}
          </button>
          <button 
            onClick={() => {
              if (activeModal !== 'about') setPreviousModal(activeModal);
              setActiveModal('about');
              setSelectedProject(null);
            }} 
            className="text-[10px] sm:text-xs font-bold tracking-widest uppercase hover:!text-white !text-white md:!text-zinc-400 transition-all duration-300 hover:scale-110 active:scale-95"
            data-i18n="dock_about"
          >
            {t('dock_about')}
          </button>
          <button 
            onClick={() => {
              if (activeModal !== 'myway') setPreviousModal(activeModal);
              setActiveModal('myway');
              setSelectedProject(null);
            }} 
            className="text-[10px] sm:text-xs font-bold tracking-widest uppercase hover:!text-white !text-white md:!text-zinc-400 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            {t('nav_works')}
          </button>
          <button 
            onClick={() => {
              if (activeModal !== 'audit') setPreviousModal(activeModal);
              setActiveModal('audit');
              setSelectedProject(null);
            }} 
            className="!bg-white !text-black px-3 py-1 sm:px-4 sm:py-1.5 rounded-full hover:bg-black hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] hover:scale-110 active:scale-95 transition-all duration-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest"
            data-i18n="dock_audit"
          >
            {t('dock_audit')}
          </button>
        </motion.div>

        {/* Right: Hamburger Icon (Hidden on hover) */}
        <motion.div 
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 }
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center transition-opacity duration-300 pointer-events-none z-30"
        >
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="1.5" fill="white"/>
            <rect y="6" width="16" height="1.5" fill="white"/>
            <rect y="12" width="22" height="1.5" fill="white"/>
          </svg>
        </motion.div>
      </motion.nav>
    </div>
  );
}


