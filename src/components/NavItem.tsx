import { motion } from 'motion/react';

interface NavItemProps {
  label: string;
  description?: string;
  i18nKey: string;
  target: string;
  onHover: () => void;
  onLeave: () => void;
  onClick?: () => void;
  hoveredMenu: string | null;
}

export function NavItem({
  label,
  description,
  i18nKey,
  target,
  onHover,
  onLeave,
  onClick,
  hoveredMenu
}: NavItemProps) {
  return (
    <li
      className="group cursor-pointer flex flex-col items-center"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div className="relative">
        <h1
          className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight uppercase transition-all duration-500 group-hover:scale-105 tracking-tighter"
          data-i18n={i18nKey}
          data-target={target}
        >
          {label}
        </h1>
        <span className="absolute -bottom-1 left-0 w-full h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-white to-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"></span>
      </div>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={hoveredMenu === target ? { opacity: 0.5, y: 0 } : { opacity: 0, y: -5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase mt-2 pointer-events-none"
        >
          {description}
        </motion.p>
      )}
    </li>
  );
}
