import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function RotatingContact() {
  const [index, setIndex] = useState(0);
  const contacts = [
    { label: '2014romanpavel@gmail.com', href: 'mailto:2014romanpavel@gmail.com' },
    { label: 'TELEGRAM', href: 'https://t.me/PavelRomanWeb' },
    { label: 'WHATSAPP', href: 'https://wa.me/0663525760' },
    { label: 'INSTAGRAM', href: 'https://www.instagram.com/pavelroman.web/' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % contacts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [contacts.length]);

  return (
    <div className="h-4 overflow-hidden min-w-[120px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <a 
            href={contacts[index].href} 
            target={contacts[index].href.startsWith('http') ? "_blank" : undefined}
            rel={contacts[index].href.startsWith('http') ? "noopener noreferrer" : undefined}
            className="block !text-zinc-400 md:!text-zinc-500 hover:!text-white transition-colors tracking-widest uppercase truncate"
          >
            {contacts[index].label}
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
