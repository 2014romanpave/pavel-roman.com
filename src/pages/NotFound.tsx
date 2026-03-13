import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-8xl md:text-[12rem] font-black tracking-tighter mb-4"
      >
        404
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-zinc-500 tracking-[0.5em] uppercase text-xs md:text-sm mb-12"
      >
        Page Not Found
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link 
          to="/" 
          className="px-8 py-4 border border-white/20 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black hover:scale-105 transition-all duration-500"
        >
          Return to Portfolio
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
