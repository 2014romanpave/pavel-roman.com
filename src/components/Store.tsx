import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { translations, type Language } from '../translations';
import { COURSES } from '../data/courses';

export default function Store({ lang }: { lang: Language }) {
  const navigate = useNavigate();
  const t = (key: string): string => {
    const dict = translations[lang] as any;
    return dict[key] || key;
  };

  const storeTitle = lang === 'en' ? 'Digital Store' : 'Цифровий Магазин';
  const storeDesc = lang === 'en' 
    ? "Premium courses for designers and entrepreneurs." 
    : "Преміальні курси для дизайнерів та підприємців.";
  const viewDetails = lang === 'en' ? 'View Details' : 'Детальніше';

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-20 text-center"
      >
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
          {storeTitle}
        </h2>
        <p className="text-zinc-400 md:text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
          {storeDesc}
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {COURSES.map((course, index) => {
          const ct = course.translations[lang];
          return (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="group cursor-pointer"
              onClick={() => navigate(`/store/${course.id}`)}
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden rounded-2xl bg-zinc-900 mb-8 relative">
                <motion.img 
                  src={course.image} 
                  alt={ct.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 2, ease: "linear" }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight group-hover:text-zinc-300 transition-colors">
                    {ct.title}
                  </h3>
                  <span className="text-xl font-light tracking-widest text-zinc-400">{course.price}</span>
                </div>
                <p className="text-zinc-400 md:text-zinc-500 text-sm md:text-base leading-relaxed font-light tracking-wide max-w-md">
                  {ct.description}
                </p>
                
                <div className="pt-4">
                  <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] group/btn">
                    <span>{viewDetails}</span>
                    <motion.span 
                      className="inline-block"
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      →
                    </motion.span>
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
