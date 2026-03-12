import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';

export const GlitchCopyright: React.FC = () => {
  const controls = useAnimation();
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const triggerGlitch = async () => {
      setIsGlitching(true);
      
      // Стиль Терминатора: резкий сбой -> ЗАВИСАНИЕ -> резкий возврат
      await controls.start({
        x: [0, -4, 5, -2, 0, 0, 2, -1, 0],
        y: [0, 1, -1, 0, 0, 0, -1, 1, 0],
        opacity: [1, 0.3, 1, 0.8, 1, 1, 0.4, 0.9, 1],
        // Увеличили длительность до 1.2 секунд. 
        // Массив times определяет, в какой момент происходит каждое движение.
        // Зависание происходит между 0.2 (20%) и 0.85 (85%) времени анимации.
        transition: { 
            duration: 1.2, 
            times: [0, 0.05, 0.1, 0.15, 0.2, 0.85, 0.9, 0.95, 1], 
            ease: "linear" 
        }
      });

      setIsGlitching(false);

      // Рандомная задержка (от 4 до 9 секунд), чтобы это было неожиданно
      const nextDelay = Math.random() * 5000 + 4000;
      setTimeout(triggerGlitch, nextDelay);
    };

    const initialTimeout = setTimeout(triggerGlitch, 3000);
    return () => clearTimeout(initialTimeout);
  }, [controls]);

  const currentText = isGlitching ? "© 2026" : "© MMXXVI";

  return (
    // Немного увеличили ширину (w-24), чтобы текст точно помещался
    <div className="relative inline-block w-24 text-right select-none group overflow-visible">
      <motion.div
        animate={controls}
        className="relative font-mono text-[10px] tracking-[0.2em] !text-zinc-400 md:!text-zinc-500/70 uppercase"
        style={{ textShadow: isGlitching ? '2px 0 #ff0000, -2px 0 #0000ff' : 'none' }}
      >
        <span className="relative z-10">{currentText}</span>

        {/* Слои глитча, которые тоже "висят" вместе с текстом */}
        {isGlitching && (
          <>
            <motion.span
              className="absolute top-0 right-0 text-red-500/80 mix-blend-screen pointer-events-none z-0"
              animate={{
                x: [-4, 4, -2, 0, 0, 3, -1],
                opacity: [0.8, 0.2, 0.9, 0.5, 0.5, 0.8, 0]
              }}
              transition={{ duration: 1.2, times: [0, 0.1, 0.2, 0.3, 0.85, 0.95, 1] }}
            >
              {currentText}
            </motion.span>
            <motion.span
              className="absolute top-0 right-0 text-blue-500/80 mix-blend-screen pointer-events-none z-0"
              animate={{
                x: [4, -4, 2, 0, 0, -3, 1],
                opacity: [0.8, 0.2, 0.9, 0.5, 0.5, 0.8, 0]
              }}
              transition={{ duration: 1.2, times: [0, 0.1, 0.2, 0.3, 0.85, 0.95, 1] }}
            >
              {currentText}
            </motion.span>
            
            {/* Полосы цифрового шума */}
            <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
              <motion.div 
                className="absolute top-[30%] left-0 w-full h-[1px] bg-white/60"
                animate={{ opacity: [0, 1, 0, 0, 1, 0], y: [0, 2, -1, 0, 3, 0] }}
                transition={{ duration: 1.2, times: [0, 0.1, 0.2, 0.85, 0.9, 1] }}
              />
              <motion.div 
                className="absolute top-[70%] left-0 w-full h-[2px] bg-white/30"
                animate={{ opacity: [0, 1, 0], x: [-5, 5, 0] }}
                transition={{ duration: 1.2, times: [0, 0.15, 1] }}
              />
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};