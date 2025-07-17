'use client';

import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import dynamic from 'next/dynamic';

export default function Contact() {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.04]);
  const blur = useTransform(scrollY, [0, 400], ['blur(0px)', 'blur(6px)']);

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputClasses = (fieldName: string) =>
    `w-full px-4 py-3 rounded-lg border-2 bg-background/50 backdrop-blur-sm
    text-foreground placeholder:text-foreground/50
    focus:outline-none focus:ring-2 focus:ring-green-500/50
    transition-all duration-300
    ${focusedField === fieldName ? 'border-green-500/50 shadow-lg shadow-green-500/20' : 'border-accent/20'}`;

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
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          style={{ y }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have questions or want to collaborate? Reach out to us!
          </motion.p>
        </motion.div>
        {/* ...rest of the contact form... */}
      </div>
    </motion.section>
  );
}