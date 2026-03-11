import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, type Language } from '../translations';
import { PROJECTS } from '../data/projects';

interface WorksProps {
  lang: Language;
  initialFilter?: 'all' | 'creative' | 'ux';
  onProjectClick?: (projectId: string) => void;
}

const Works: React.FC<WorksProps> = ({ lang, initialFilter = 'all', onProjectClick }) => {
  const [filter, setFilter] = useState<'all' | 'creative' | 'ux'>(initialFilter);

  const t = (key: string): string => {
    const dict = translations[lang] as any;
    return dict[key] || key;
  };

  const filteredProjects = PROJECTS.filter((project) => 
    filter === 'all' ? true : project.category === filter
  );

  const filters = [
    { id: 'all', label: t('filter_all') },
    { id: 'creative', label: t('filter_creatives') },
    { id: 'ux', label: t('filter_uxui') },
  ] as const;

  return (
    <section className="w-full min-h-screen bg-black text-white px-6 py-12 md:px-12 lg:px-20">
      {/* Header Block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
        <div className="max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-none uppercase"
          >
            {t('works_header')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mt-4 md:mt-6 block"
          >
            {t('works_subtitle')}
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <nav className="flex gap-8 md:gap-10 border-b border-white/5 pb-4 relative self-start md:self-auto">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`relative pb-4 text-xs md:text-sm font-bold transition-colors duration-500 uppercase tracking-[0.2em] ${
                filter === f.id ? 'text-white' : 'text-zinc-600 hover:text-zinc-300'
              }`}
            >
              {f.label}
              {filter === f.id && (
                <motion.div
                  layoutId="worksTabIndicator"
                  className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  transition={{ type: 'spring', stiffness: 350, damping: 35 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Grid Container - теперь это обычный div, чтобы не конфликтовать с детьми */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ 
                layout: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
                y: { duration: 0.3 }
              }}
              className="group cursor-pointer"
              onClick={() => onProjectClick?.(project.id)}
            >
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 mb-8 relative">
                <motion.img
                  src={project.image}
                  alt={t(project.titleKey)}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                />
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Text Info */}
              <div className="space-y-2 px-1">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase leading-none">
                  {t(project.titleKey)}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-zinc-700 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
                  <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] group-hover:text-zinc-300 transition-colors duration-500">
                    {t(project.descKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Works;