import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RotatingContactProps {
  onClick: () => void;
  t: (key: string) => string;
}

export function RotatingContact({ onClick, t }: RotatingContactProps) {
  const [index, setIndex] = useState(0);
  const keys = ['cta_audit', 'cta_discuss_project', 'cta_boost'] as const;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keys.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="relative cursor-pointer inline-block text-sm sm:text-base font-light text-white border border-white/25 rounded-[50px] px-7 py-2.5 hover:border-white hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all duration-500 ease tracking-[1px] uppercase overflow-hidden min-w-[240px] bg-transparent"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="block"
        >
          {t(keys[index])}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
