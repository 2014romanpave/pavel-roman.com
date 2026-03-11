import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const QUOTES = [
  "DON'T LET YOUR FEARS LIMIT YOUR POSSIBILITIES.",
  "НЕ ДОЗВОЛЯЙ СТРАХАМ ОБМЕЖУВАТИ ТВОЇ МОЖЛИВОСТІ.",
  "NE LAISSEZ PAS VOS PEURS LIMITER VOS POSSIBILITÉS.",
  "恐怖に可能性を制限させてはいけない。",
  "NON LASCIARE CHE LE TUE PAURE LIMITINO LE TUE POSSIBILITÀ."
];

export function MultilingualQuote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="global-quote" className="fixed bottom-6 md:bottom-8 left-4 md:left-8 z-[9000] text-[10px] text-gray-500 uppercase tracking-[0.2em] max-w-[200px] hidden md:block pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          "{QUOTES[index]}"
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
