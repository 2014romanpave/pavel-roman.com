import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/projects';
import { translations, type Language } from '../translations';

interface ProjectDetailProps {
  lang: Language;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ lang }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const project = PROJECTS.find((p) => p.slug === slug);

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const t = (key: string): string => {
    const dict = translations[lang] as any;
    return dict[key] || key;
  };

  const getProjectTranslation = (field: string) => {
    if (!project) return '';
    const dict = translations[lang].projects[project.slug] as any;
    return dict ? dict[field] || '' : '';
  };

  const getProjectSolutions = (): string[] => {
    if (!project) return [];
    const dict = translations[lang].projects[project.slug] as any;
    return dict ? dict.solutions || [] : [];
  };

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[70] bg-black text-white p-6 md:p-12 pt-12 md:pt-40 overflow-y-auto custom-scrollbar"
    >
      <div className="mt-12 md:mt-24 max-w-5xl mx-auto w-full pb-32 space-y-16">
        {/* Header */}
        <div className="space-y-8">
          <div className="text-[10px] md:text-xs font-light tracking-[0.2em] text-zinc-500 uppercase mb-6">
            <button onClick={() => navigate('/' + project.category)} className="hover:text-white transition-colors">Selected Works</button> 
            <span className="mx-2 opacity-40">/</span> 
            <span className="text-white">{getProjectTranslation('title')}</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            {getProjectTranslation('title')}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
            {project.client && (
              <div className="flex items-center gap-2">
                <span className="text-zinc-700">CLIENT:</span>
                <span className="text-white">{project.client}</span>
              </div>
            )}
            {project.year && (
              <div className="flex items-center gap-2">
                <span className="text-zinc-700">YEAR:</span>
                <span className="text-white">{project.year}</span>
              </div>
            )}
          </div>

          {/* Cinematic Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full mt-10 mb-16 rounded-2xl overflow-hidden relative max-h-[75vh]"
          >
            <img 
              src={project.image} 
              alt={getProjectTranslation('title') || "Project cover"} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed max-w-3xl whitespace-pre-wrap">
            {getProjectTranslation('content')}
          </p>
        </div>

        {/* Category Specific Content */}
        {project.category === 'creative' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {project.gallery?.map((img, i) => (
              <div key={i} className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-zinc-900">
                <img 
                  src={img} 
                  alt={`${getProjectTranslation('title')} gallery ${i + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-24">
            {/* Meta Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-zinc-900 pt-16">
              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase">Role</h3>
                  <p className="text-lg md:text-xl text-zinc-300">{getProjectTranslation('role')}</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase">The Challenge</h3>
                  <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">{getProjectTranslation('task')}</p>
                </div>
              </div>
              
              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase">The Solution</h3>
                  <ul className="space-y-4">
                    {getProjectSolutions().map((sol, i) => (
                      <li key={i} className="text-lg md:text-xl text-zinc-300 flex gap-4">
                        <span className="text-zinc-700 font-mono text-sm mt-1">0{i + 1}</span>
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase">The Outcome</h3>
                  <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">{getProjectTranslation('outcome')}</p>
                </div>
              </div>
            </div>

            {/* Showcase Images */}
            <div className="flex flex-col gap-8 md:gap-16">
              {project.images?.map((img, i) => (
                <div key={i} className="w-full overflow-hidden rounded-2xl bg-zinc-900">
                  <img 
                    src={img} 
                    alt={`${getProjectTranslation('title')} showcase ${i + 1}`} 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Unified Premium CTA Block */}
        <div className="border-t border-zinc-800 pt-16 mt-16 md:mt-24 pb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 w-full">
          <div className="space-y-2">
            <p className="text-sm font-bold tracking-[0.3em] text-zinc-500 mb-2">{t('cta_impressed')}</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">{t('cta_lets_discuss')}</h2>
          </div>

          <button 
            onClick={() => {
              navigate('/audit');
            }}
            className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:scale-105 transition-transform duration-300"
          >
            {t('cta_order_project')}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
