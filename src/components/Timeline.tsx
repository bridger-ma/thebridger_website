'use client'
import data from '../../data.json';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: string;
};

// Icon mapping based on year or title
const iconMap: Record<string, string> = {
  '2022': '🚂',
  '2023': '🔧',
  '2024': '🌐',
  '2025': '🤖',
};

export default function Timeline() {
  const milestones: TimelineItem[] = (data.timeline || []).map((item) => ({
    ...item,
    icon: iconMap[item.year] || '🚂',
  }));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="timeline" className="py-24 min-h-screen relative overflow-hidden section-transparent snap-section">
     
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyOSwxODUsODQsMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
      </motion.div>

      <div ref={ref} className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[#1db954] inline-block"
            >
              AI Express
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block"
            >
              Journey
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.7 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            All aboard the Bridger AI train! Track our milestones as we power through the landscape of innovation.
          </motion.p>
        </motion.div>

        {/* Timeline with enhanced train track animations */}
        <div className="relative">
          {/* Animated train track line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute left-4 h-full w-1 bg-[#1db954]/30 rounded-full origin-top"
          />
          
          {/* Sequentially animated track ties */}
          <div className="absolute left-0 h-full w-8 flex flex-col justify-between py-8">
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, width: 0 }}
                animate={isInView ? { opacity: 1, width: 24 } : {}}
                transition={{ 
                  duration: 0.4,
                  delay: 0.6 + (i * 0.05),
                  ease: "backOut"
                }}
                className="h-px bg-[#1db954]/50"
              />
            ))}
          </div>

          {milestones.map((item, idx) => {
            const itemDelay = 0.8 + (idx * 0.3);
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.8,
                  delay: itemDelay,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="mb-16 pl-12 relative group"
              >
                {/* Train icon with enhanced animation */}
                <motion.div 
                  initial={{ scale: 0, rotate: 45 }}
                  animate={isInView ? { scale: 1, rotate: 12 } : {}}
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  transition={{ 
                    delay: itemDelay + 0.1,
                    duration: 0.6,
                    type: "spring",
                    damping: 10,
                    stiffness: 100
                  }}
                  className="absolute -left-2 top-0 w-12 h-12 rounded-lg bg-[#1a3a2b] flex items-center justify-center text-2xl border-2 border-[#1db954] shadow-lg z-10"
                >
                  {item.icon}
                </motion.div>
                
                {/* Year tag with pop-in effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    delay: itemDelay + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="absolute -left-4 top-14 w-20 py-1 bg-black text-center text-sm font-bold text-[#1db954] border border-[#1a3a2b] rounded-full"
                >
                  {item.year}
                </motion.div>

                {/* Milestone card - train carriage with staggered children */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: itemDelay + 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="bg-black/90 border-l-4 border-[#1db954] rounded-r-xl shadow-2xl p-6 relative overflow-hidden backdrop-blur-sm"
                >
                  {/* Carriage window effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: itemDelay + 0.4 }}
                    className="absolute right-6 top-6 w-12 h-12 rounded-full bg-[#1a3a2b]/30 border-2 border-[#1db954]/30"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: itemDelay + 0.5 }}
                    className="absolute right-8 top-8 w-8 h-8 rounded-full bg-[#1db954]/10 backdrop-blur-sm"
                  />
                  
                  <div className="relative z-10 overflow-hidden">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: itemDelay + 0.3 }}
                      className="text-2xl font-bold mb-3 text-[#1db954]"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: itemDelay + 0.4 }}
                      className="text-white/80"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                  
                  {/* Animated carriage connector */}
                  {idx < milestones.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={isInView ? { height: 24 } : {}}
                      transition={{ delay: itemDelay + 0.6 }}
                      className="absolute -bottom-6 left-0 w-full flex justify-center"
                    >
                      <div className="w-8 h-6 bg-black border-b-2 border-l-2 border-r-2 border-[#1a3a2b] rounded-b-full" />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}

          {/* Enhanced train engine animation at the end */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="pl-12 mt-4 relative"
          >
            <div className="flex items-center gap-2">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 2.4, type: "spring", stiffness: 200 }}
                className="text-2xl"
              >
                🚄
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 2.5 }}
                className="text-[#1db954] text-sm font-mono flex items-center"
              >
                <span className="mr-2">Next station: The Future</span>
                <motion.div 
                  animate={isInView ? { 
                    x: [0, 5, 0],
                    transition: { 
                      repeat: Infinity, 
                      duration: 1.5,
                      delay: 2.7
                    } 
                  } : {}}
                >
                  →
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}