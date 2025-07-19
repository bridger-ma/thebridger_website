"use client";

import {
  GraduationCap,
  HeartPulse,
  Leaf,
  Bus,
} from "lucide-react";
import { motion } from "framer-motion";
import data from "../../data.json";

const features = data.features;
const sectionTitle = "AI for Every Sector";
const sectionSubtitle = "Transforming industries with cutting-edge artificial intelligence solutions";
const sectionLineColors = { from: "var(--color-dark-green)", to: "var(--color-accent)" };

// Enhanced icon mapping with gradient accents
const iconMap: { [key: string]: React.ReactNode } = {
  Education: <GraduationCap className="w-12 h-12 text-white" />,
  Healthcare: <HeartPulse className="w-12 h-12 text-white" />,
  Agriculture: <Leaf className="w-12 h-12 text-white" />,
  Transport: <Bus className="w-12 h-12 text-white" />,
};

type Feature = {
  title: string;
  description: string;
};

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="glass p-8 flex flex-col items-center text-center shadow-2xl transition hover:scale-105 hover:shadow-3xl">
      <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-dark-green)] shadow-lg">
        {iconMap[feature.title]}
      </div>
      <h3 className="text-xl font-bold mb-2 gradient-text">{feature.title}</h3>
      <p className="text-white/80 text-base leading-relaxed">{feature.description}</p>
    </div>
  );
}

export default function FeatureCards() {
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden section-transparent">
      {/* Removed global animated background class */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[var(--color-dark-green)] via-[var(--color-accent)] to-[var(--color-black)] bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            {sectionTitle}
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-[var(--color-white)]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {sectionSubtitle}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="w-32 h-1 mx-auto mt-8 rounded-full"
            style={{ background: `linear-gradient(to right, ${sectionLineColors.from}, ${sectionLineColors.to})` }}
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>

        {/* Optionally, add a CTA or leave minimal for elegance */}
      </div>
      {/* Scroll indicator for next section */}
      <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 animate-bounce text-[var(--color-accent)]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6v20M16 26l-7-7M16 26l7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="sr-only">Scroll for more&quot;</span>
        </div>
      </div>
    </section>
  );
}
