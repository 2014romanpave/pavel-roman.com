import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface FeedItem {
  id: string;
  image: string;
  title: string;
  link: string;
}

const MyWayFeed: React.FC = () => {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/1pVxQteSx2Vr8SJGSooeyPKSjWBNfXmEQzkkDvF-8J4Q/gviz/tq?tqx=out:json');
        const text = await response.text();
        
        // Google Sheets JSON cleanup
        const jsonData = JSON.parse(text.substring(47).slice(0, -2));
        const rows = jsonData.table.rows;

        const parsedItems: FeedItem[] = rows
          .map((row: any, index: number) => ({
            id: row.c[0]?.v || String(index),
            image: row.c[1]?.v,
            title: row.c[2]?.v || '',
            link: row.c[3]?.v || '#',
          }))
          .filter((item: FeedItem) => item.image); // Filter out rows without images

        setItems(parsedItems);
      } catch (error) {
        console.error('Error fetching My Way feed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 md:px-12 lg:px-20">
      {/* Header */}
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4"
        >
          MY TRACE
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 md:text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-3"
        >
          <span>VISUAL ARCHIVE</span><span className="w-1 h-1 bg-zinc-800 rounded-full" /><span>МІЙ СЛІД</span>
        </motion.p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {items.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="break-inside-avoid block relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 group cursor-pointer"
          >
            {/* Media Rendering (Image or Video) */}
            {item.image.toLowerCase().endsWith('.mp4') ? (
              <video 
                src={item.image} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
              />
            ) : (
              <img 
                src={item.image} 
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
              />
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h3 className="text-sm md:text-base font-bold uppercase tracking-tight text-white mb-1">
                {item.title}
              </h3>
              <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                View on Instagram ↗
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default MyWayFeed;
