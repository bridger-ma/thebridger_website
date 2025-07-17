'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const LinkItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-foreground/80 hover:text-foreground flex items-center gap-2 group w-fit"
    whileHover={{ x: 4 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  >
    <span>{children}</span>
    <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
  </motion.a>
);

export default function Footer() {
  return (
    <motion.footer
      className="bg-background/50 backdrop-blur-xl border-t border-accent/20 relative overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-secondary animate-gradient"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      {/* Floating glowing orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent/30 blur-3xl"
          style={{
            width: `${100 + i * 40}px`,
            height: `${100 + i * 40}px`,
            left: `${10 + i * 18}%`,
            top: `${60 + (i % 2) * 18}%`,
            zIndex: 1,
          }}
          animate={{
            y: [0, 18, 0],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 7 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.7,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          <motion.div
            variants={fadeInUpVariant}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <motion.h3
              className="text-xl font-semibold text-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              The Bridger
            </motion.h3>
            <p className="text-foreground/80 leading-relaxed">
              Connecting Morocco with AI-powered solutions for a better tomorrow.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUpVariant}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <LinkItem href="#about">About</LinkItem>
              </li>
              <li>
                <LinkItem href="#ideas">AI Ideas</LinkItem>
              </li>
              <li>
                <LinkItem href="#contact">Contact</LinkItem>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUpVariant}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground">Connect</h3>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="mailto:contact@thebridger.ma"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 group w-fit"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@thebridger.ma</span>
                </motion.a>
              </li>
              <li>
                <motion.div
                  className="text-foreground/80 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <MapPin className="w-4 h-4" />
                  <span>Casablanca, Morocco</span>
                </motion.div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-accent/20 text-center text-foreground/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} The Bridger. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
    </motion.footer>
  );
}