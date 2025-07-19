'use client'
import { motion } from 'framer-motion';
import data from '../../data.json';

export default function TestimonialsSection() {
  const testimonials = data.testimonials;
  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `rgba(29, 185, 84, ${0.2 + Math.random() * 0.3})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Decorative floating elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute -left-40 -top-40 w-80 h-80 rounded-full bg-[#1db954] blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute -right-40 -bottom-40 w-80 h-80 rounded-full bg-[#1db954] blur-[100px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header with animated gradient */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1db954] to-[#1a3a2b]">
              Trusted Voices
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Hear what industry leaders and partners say about our transformative solutions
          </p>
        </motion.div>

        {/* Featured testimonial - floating card effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="flex justify-center mb-20"
        >
          <div className="relative max-w-3xl w-full">
            {/* Decorative elements */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#1db954]/20 to-[#1a3a2b]/20 blur-xl opacity-70" />
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#1db954]/30 to-[#1a3a2b]/30" />
            
            {/* Main card */}
            <div className="relative bg-black/80 backdrop-blur-sm border border-[#1db954]/30 rounded-2xl p-8 sm:p-10 shadow-2xl overflow-hidden">
              {/* Floating quote marks */}
              <div className="absolute -top-4 -left-4 text-[#1db954]/10 text-8xl font-serif select-none">“</div>
              <div className="absolute -bottom-8 -right-4 text-[#1db954]/10 text-8xl font-serif select-none">”</div>
              
              <div className="relative z-10">
                <p className="text-xl sm:text-2xl italic text-white/90 mb-6 leading-relaxed">
                  &quot;{featured.quote}&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#1a3a2b] flex items-center justify-center text-xl mr-4">
                    {featured.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#1db954]">{featured.name}</div>
                    <div className="text-white/60 text-sm">{featured.title}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid of testimonials with staggered animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {rest.map((t, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group relative h-full"
              whileHover={{ y: -8 }}
            >
              {/* Card background glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-[#1db954] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300" />
              
              {/* Main card */}
              <div className="relative h-full bg-black/70 backdrop-blur-sm border border-[#1db954]/20 rounded-xl p-6 shadow-lg overflow-hidden transition-all duration-300 group-hover:border-[#1db954]/40">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#1db954]/10 transform rotate-45 origin-bottom-left" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <p className="text-lg italic text-white/80 mb-6 flex-grow">
                    &quot;{t.quote}&quot;
                  </p>
                  <div>
                    <div className="font-semibold text-[#1db954]">{t.name}</div>
                    <div className="text-white/50 text-sm">{t.title}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-8 h-8 text-[#1db954]"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6v20M16 26l-7-7M16 26l7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <span className="sr-only">Scroll for more</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}