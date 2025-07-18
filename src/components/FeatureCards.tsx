"use client";

import {
  GraduationCap,
  HeartPulse,
  Leaf,
  Bus,
  Brain,
  Sparkles,
  Zap,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import data from "../../data.json";

const features = data.features;

// Enhanced icon mapping with more dynamic icons
const iconMap: { [key: string]: React.ReactNode } = {
  Education: <GraduationCap className="w-12 h-12" />,
  Healthcare: <HeartPulse className="w-12 h-12" />,
  Agriculture: <Leaf className="w-12 h-12" />,
  Transportation: <Bus className="w-12 h-12" />,
};

// Image mapping for features
const imageMap: { [key: string]: string } = {
  Education: '/images/Untitled design.jpg',
  Healthcare: '/images/ai-generated-abstract-background-with-connecting-dots-and-lines-network-concept-3d-rendering-abstract-technology-background-big-data-visualization-graphic-concept-for-your-design-ai-generated-.jpg',
  Agriculture: '/images/cash-macanaya-ykO7Nb5pQt8-unsplash.jpg',
  Transportation: '/images/ai-generated-abstract-blue-background-with-connecting-dots-and-lines-network-concept-3d-rendering-futuristic-technology-wallpaper-with-digital-glowing-waves-and-a-network-system-.jpg',
};

// 3D Card Component
const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      y: -10,
      rotateX: 5,
      rotateY: 5,
      scale: 1.05,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      scale: 1.2,
      transition: {
        duration: 0.5,
      },
    },
  };

  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      },
    },
  };

  return (
    <motion.div
      className="relative perspective-1000"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Floating particles around card */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${20 + i * 12}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            variants={particleVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
          />
        ))}
      </div>

      <div className="relative group glass-effect rounded-2xl p-8 h-full flex flex-col items-center text-center shadow-2xl overflow-hidden preserve-3d">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, var(--color-dark-green), var(--color-accent))`,
          }}
          animate={
            isHovered
              ? {
                  background: [
                    "linear-gradient(135deg, var(--color-dark-green), var(--color-accent))",
                    "linear-gradient(135deg, var(--color-accent), var(--color-dark-green))",
                    "linear-gradient(135deg, var(--color-dark-green), var(--color-accent))",
                  ],
                }
              : {}
          }
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Shimmer effect */}
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Removed feature image */}

        {/* Icon container with glow effect */}
        <motion.div
          className="relative mb-6 p-4 rounded-full bg-gradient-to-br from-[var(--color-dark-green)] to-[var(--color-accent)] text-white shadow-lg"
          variants={iconVariants}
          whileHover="hover"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-dark-green)] to-[var(--color-accent)] animate-glow opacity-75 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            {iconMap[feature.title] || <Brain className="w-12 h-12" />}
          </div>
        </motion.div>
        {/* Content */}
        <motion.h3
          className="text-2xl font-bold mb-4 text-[var(--color-white)] group-hover:text-[var(--color-accent)] transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          {feature.title}
        </motion.h3>
        <motion.p
          className="text-[var(--color-white)]/80 leading-relaxed flex-grow"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {feature.description}
        </motion.p>
        {/* Interactive button */}
        <motion.button
          className="mt-6 px-6 py-3 bg-gradient-to-r from-[var(--color-dark-green)] to-[var(--color-accent)] text-[var(--color-white)] rounded-full font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(1,68,33,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Explore {feature.title}
        </motion.button>
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--color-accent)]/20 to-transparent rounded-bl-full" />
      </div>
    </motion.div>
  );
};

export default function FeatureCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
    <section className="py-24 relative overflow-hidden">
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
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            AI for Every Sector
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transforming industries with cutting-edge artificial intelligence
            solutions
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59,130,246,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              Discover All Solutions
              <Sparkles className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
