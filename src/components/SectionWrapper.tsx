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
      <div className="mt-12 md:mt-24 max-w-6xl mx-auto w-full pb-32">
        {children}
      </div>
    </motion.div>
  );
};
