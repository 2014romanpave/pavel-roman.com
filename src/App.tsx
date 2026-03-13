import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { translations, type Language } from './translations';
import { PROJECTS } from './data/projects';
import Works from './components/Works';
import Store from './components/Store';
import CourseDetail from './components/CourseDetail';
import { ComingSoon } from './components/ComingSoon';
import MyWayFeed from './components/MyWayFeed';
import { MultilingualQuote } from './components/MultilingualQuote';
import { ContactForm } from './components/ContactForm';
import { GlitchCopyright } from './components/GlitchCopyright';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import { About } from './components/About';
import { HomeNav } from './components/HomeNav';
import { SectionWrapper } from './components/SectionWrapper';
import ScrollToTop from './components/ScrollToTop';
import { motion } from 'motion/react';

const GLOW_COLORS = {
  creative: 'rgba(190, 18, 60, 0.4)', // Глубокая малина
  ux: 'rgba(7, 89, 133, 0.4)',       // Ночной лед
  store: 'rgba(139, 92, 246, 0.4)',   // Благородный фиолетовый
  about: 'rgba(20, 83, 45, 0.4)',     // Темная мята
};

type ModalType = 'none' | 'creative' | 'ux' | 'store' | 'store_detail' | 'about' | 'audit' | 'myway';

const RotatingFooter = () => {
  const contacts = [
    { text: '2014ROMANPAVEL@GMAIL.COM', href: 'mailto:2014romanpavel@gmail.com' },
    { text: 'TELEGRAM', href: 'https://t.me/PavelRomanWeb' },
    { text: 'WHATSAPP', href: 'https://wa.me/0663525760' }
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % contacts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [contacts.length]);

  return (
    <div className="h-4 overflow-hidden relative z-50 pointer-events-auto">
      <AnimatePresence mode="wait">
        <motion.a
          key={index}
          href={contacts[index].href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="block py-2 md:py-0 hover:text-white transition-all duration-500 whitespace-nowrap"
        >
          {contacts[index].text}
        </motion.a>
      </AnimatePresence>
    </div>
  );
};

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
  
  
  const [lang, setLang] = useState<Language>('en');
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  const isProjectPage = location.pathname.startsWith('/work/');
  const projectSlug = isProjectPage ? location.pathname.split('/')[2] : null;
  const currentProject = projectSlug ? PROJECTS.find(p => p.slug === projectSlug) : null;

  const IS_STORE_MAINTENANCE = true; // true = stub, false = store open

  const t = (key: string): string => {
    const dict = translations[lang] as any;
    return dict[key] || key;
  };

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-black font-sans selection:bg-white selection:text-black">
      {/* Global Header */}
      <header className="fixed top-0 left-0 w-full h-20 md:h-24 z-[9999] bg-black/75 backdrop-blur-lg border-b border-white/5 flex items-center justify-between px-4 md:px-8">
        <div 
          onClick={() => {
            navigate('/');
          }}
          className="uppercase tracking-widest text-sm cursor-pointer hover:opacity-70 transition font-bold"
        >
          {t('role')}
        </div>

        {/* Project Title (Desktop/Tablet) */}
        {currentProject && (
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none">
            <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-zinc-400 md:text-zinc-500 uppercase block text-center mb-0.5">Project</span>
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase block text-center truncate max-w-[120px] md:max-w-none">
              {translations[lang].projects[currentProject.slug].title}
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
          {location.pathname !== '/' && (
            <div 
              onClick={(e) => {
                e.stopPropagation();
                if (window.history.length > 2) {
                  navigate(-1);
                } else {
                  navigate('/');
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
        <RotatingFooter />
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

      {/* UI Overlay & Routing */}
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<HomeNav t={t} setHoveredMenu={setHoveredMenu} hoveredMenu={hoveredMenu} />} />
            <Route path="/about" element={<SectionWrapper><About lang={lang} t={t} onDiscuss={() => navigate('/audit')} /></SectionWrapper>} />
            <Route path="/store" element={
              <SectionWrapper>
                {IS_STORE_MAINTENANCE ? <ComingSoon t={t} onBack={() => navigate('/')} /> : <Store lang={lang} />}
              </SectionWrapper>
            } />
            <Route path="/store/:id" element={
              <SectionWrapper>
                {IS_STORE_MAINTENANCE ? <ComingSoon t={t} onBack={() => navigate('/')} /> : <CourseDetail lang={lang} />}
              </SectionWrapper>
            } />
            <Route path="/my-way" element={<SectionWrapper><MyWayFeed /></SectionWrapper>} />
            <Route path="/audit" element={<SectionWrapper><ContactForm lang={lang} t={t} /></SectionWrapper>} />
            <Route path="/creative" element={<SectionWrapper><Works lang={lang} initialFilter="creative" /></SectionWrapper>} />
            <Route path="/ux" element={<SectionWrapper><Works lang={lang} initialFilter="ux" /></SectionWrapper>} />
            <Route path="/work/:slug" element={<ProjectDetail lang={lang} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
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
            navigate('/');
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
              navigate('/creative');
            }} 
            className="text-[10px] sm:text-xs font-bold tracking-widest uppercase hover:!text-white !text-white md:!text-zinc-400 transition-all duration-300 hover:scale-110 active:scale-95"
            data-i18n="dock_works"
          >
            {t('dock_works')}
          </button>
          <button 
            onClick={() => {
              navigate('/store');
            }} 
            className="text-[10px] sm:text-xs font-bold tracking-widest uppercase hover:!text-white !text-white md:!text-zinc-400 transition-all duration-300 hover:scale-110 active:scale-95"
            data-i18n="menu_store"
          >
            {t('menu_store')}
          </button>
          <button 
            onClick={() => {
              navigate('/about');
            }} 
            className="text-[10px] sm:text-xs font-bold tracking-widest uppercase hover:!text-white !text-white md:!text-zinc-400 transition-all duration-300 hover:scale-110 active:scale-95"
            data-i18n="dock_about"
          >
            {t('dock_about')}
          </button>
          <button 
            onClick={() => {
              navigate('/my-way');
            }} 
            className="text-[10px] sm:text-xs font-bold tracking-widest uppercase hover:!text-white !text-white md:!text-zinc-400 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            {t('nav_works')}
          </button>
          <button 
            onClick={() => {
              navigate('/audit');
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


