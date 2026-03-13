import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface SectionWrapperProps {
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 bg-black text-white p-6 md:p-12 pt-12 md:pt-40 flex flex-col overflow-y-auto custom-scrollbar"
    >
      {/* Mobile Close Button */}
      <div 
        onClick={() => navigate('/')}
        className="md:hidden fixed top-6 right-6 z-[9999] w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-lg border border-white/40 cursor-pointer text-white"
      >
        <div className="relative w-4 h-4">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white rotate-45"></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white -rotate-45"></div>
        </div>
      </div>

      <div className="mt-12 md:mt-24 max-w-6xl mx-auto w-full pb-32">
        {children}
      </div>
    </motion.div>
  );
};
