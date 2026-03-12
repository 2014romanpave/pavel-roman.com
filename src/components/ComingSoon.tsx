import React from 'react';
import { motion } from 'motion/react';

interface ComingSoonProps {
  t: (key: string) => string;
  onBack: () => void;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ t, onBack }) => {
  return (
    <div className="coming-soon-wrapper relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden text-white font-sans">
      {/* Aurora Effect */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0
        }}
        animate={{
          x: [-100, 100, -50],
          y: [-50, 50, 100],
          scale: [1, 1.2, 0.9],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Header */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
            {t('coming_soon_title')}
          </h1>
          
          <p className="text-lg md:text-2xl text-zinc-500 font-light tracking-widest uppercase">
            {t('coming_soon_subtitle')}
          </p>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-12">
            <a 
              href="https://www.instagram.com/pavelroman.web/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-600 uppercase group-hover:text-zinc-400 transition-colors">Instagram</span>
              <span className="text-sm font-medium tracking-widest uppercase group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">@pavelroman.web</span>
            </a>
            
            <div className="hidden md:block w-px h-12 bg-zinc-900" />

            <a 
              href="https://t.me/PavelRomanWeb" 
              target=" _blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-600 uppercase group-hover:text-zinc-400 transition-colors">Telegram</span>
              <span className="text-sm font-medium tracking-widest uppercase group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">PavelRomanWeb</span>
            </a>
          </div>

          {/* Back Button */}
          <div className="pt-20">
            <button 
              onClick={onBack}
              className="text-[10px] font-bold tracking-[0.4em] !text-zinc-400 md:!text-zinc-500 uppercase hover:!text-white transition-colors border-b border-zinc-800 hover:border-white pb-2"
            >
              {t('back_to_home')}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Journal Elements */}
      <div className="absolute top-12 left-12 hidden lg:block">
        <span className="text-[10px] font-bold tracking-[0.5em] text-zinc-800 uppercase vertical-text">
          EST. 2026 / DIGITAL ARCHIVE
        </span>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <span className="text-[10px] font-bold tracking-[0.5em] text-zinc-800 uppercase">
          © PAVEL ROMAN / ALL RIGHTS RESERVED
        </span>
      </div>
    </div>
  );
};
