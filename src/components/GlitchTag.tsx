import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';

export const GlitchTag: React.FC<{ wordA: string, wordB: string }> = ({ wordA, wordB }) => {
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
