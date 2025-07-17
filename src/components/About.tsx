'use client';

import { motion, useViewportScroll, useTransform, useAnimation, useMotionValue } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Globe, Users, Lightbulb } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: <Globe className="h-8 w-8 text-green-600" />,
    title: 'Local Impact',
    description: 'Tailored AI solutions addressing specific needs of Moroccan communities.'
  },
  {
    icon: <Users className="h-8 w-8 text-green-600" />,
    title: 'Community Driven',
    description: 'Built by and for the Moroccan community, ensuring cultural relevance.'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-green-600" />,
    title: 'Innovation Focus',
    description: 'Leveraging cutting-edge AI technology to solve local challenges.'
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => controls.start({ scale: 1.1 })}
      onHoverEnd={() => controls.start({ scale: 1 })}
    >
      <Card 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
        className="p-6 h-full backdrop-blur-lg bg-background/30 hover:bg-accent/10 transition-all duration-300 transform hover:shadow-xl relative overflow-hidden group border border-accent/20 hover:border-accent/40"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="flex flex-col items-center text-center relative z-10">
          <motion.div
            className="mb-4 transform-gpu"
            animate={controls}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {feature.icon}
          </motion.div>
          <motion.h3
            className="text-xl font-semibold mb-2 text-foreground"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {feature.title}
          </motion.h3>
          <p className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
            {feature.description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default function About() {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.04]);
  const blur = useTransform(scrollY, [0, 400], ['blur(0px)', 'blur(6px)']);

  return (
    <motion.section
      className="py-20 bg-background relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Simple static background instead of 3D */}
      <motion.div className="background-3d" style={{ scale, filter: blur }} />
      {/* Floating accent orb */}
      <motion.div
        className="absolute left-1/4 top-12 w-24 h-24 rounded-full bg-accent/30 blur-3xl z-0"
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Removed 3D Section Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          style={{ y }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary mb-8 text-center"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 10 }}
          >
            About The Bridger
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We are on a mission to accelerate Morocco&apos;s digital transformation through
            innovative AI solutions that address real community needs.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="perspective-1000"
              initial={{ opacity: 0, y: 40, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ scale: 1.07, rotateY: 6, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)' }}
              transition={{ type: 'spring', stiffness: 120, damping: 12, delay: index * 0.1 }}
              style={{ willChange: 'transform, box-shadow', y }}
            >
              <FeatureCard feature={feature} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}