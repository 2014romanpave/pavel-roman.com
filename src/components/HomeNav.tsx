import React from 'react';
import { motion } from 'motion/react';
import { NavItem } from './NavItem';
import { RotatingContact } from './RotatingContact';
import { GlitchCopyright } from './GlitchCopyright';
import { useNavigate } from 'react-router-dom';

interface HomeNavProps {
  t: (key: string) => string;
  setHoveredMenu: (menu: string | null) => void;
  hoveredMenu: string | null;
}

export const HomeNav: React.FC<HomeNavProps> = ({ t, setHoveredMenu, hoveredMenu }) => {
  const navigate = useNavigate();

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full z-10 pointer-events-none">
      <nav className="flex flex-col items-center justify-center pointer-events-auto">
        <ul className="flex flex-col items-center gap-2 md:gap-4">
          <NavItem 
            label={t('menu_1')} 
            description={t('menu_1_desc')}
            i18nKey="menu_1"
            target="bg-creative"
            to="/creative"
            onHover={() => setHoveredMenu('bg-creative')} 
            onLeave={() => setHoveredMenu(null)} 
            hoveredMenu={hoveredMenu}
          />
          <NavItem 
            label={t('menu_2')} 
            description={t('menu_2_desc')}
            i18nKey="menu_2"
            target="bg-ux"
            to="/ux"
            onHover={() => setHoveredMenu('bg-ux')} 
            onLeave={() => setHoveredMenu(null)} 
            hoveredMenu={hoveredMenu}
          />
          <NavItem 
            label={t('menu_3')} 
            description={t('menu_3_desc')}
            i18nKey="menu_3"
            target="bg-about"
            to="/about"
            onHover={() => setHoveredMenu('bg-about')} 
            onLeave={() => setHoveredMenu(null)} 
            hoveredMenu={hoveredMenu}
          />
          <li 
            className="mt-8 md:mt-14 flex flex-col items-center"
            onMouseEnter={() => setHoveredMenu('cta')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <RotatingContact 
              t={t}
              onClick={() => navigate('/audit')}
            />
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
              <a href="mailto:2014romanpavel@gmail.com" className="hover:text-white transition-colors">2014romanpavel@gmail.com</a>
            </div>
            <div className="mt-1">
              <GlitchCopyright />
            </div>
          </li>
        </ul>
      </nav>
    </main>
  );
};
