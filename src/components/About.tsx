"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Globe, Users, Lightbulb, Sparkles, Zap, Target } from "lucide-react";
import { useRef } from "react";
import data from "../../data.json";

const features = data.about.features;
const mission = data.about.mission;

// Enhanced icon mapping
const iconMap: { [key: string]: React.ReactNode } = {
  "Global Reach": <Globe className="w-8 h-8 text-blue-500" />,
  Community: <Users className="w-8 h-8 text-green-500" />,
  Innovation: <Lightbulb className="w-8 h-8 text-yellow-500" />,
};

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 80,
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
      rotate: [0, -5, 5, -5, 0],
      scale: 1.2,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative perspective-1000"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Card className="relative p-8 h-full glass-effect border-2 border-gray-200/20 dark:border-gray-700/20 overflow-hidden group preserve-3d">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,69,244,0.05))`,
          }}
        />

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center h-full">
          {/* Icon with enhanced effects */}
          <motion.div
            className="mb-6 p-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 group-hover:shadow-lg transition-shadow"
            variants={iconVariants}
            whileHover="hover"
          >
            <div className="relative">
              {iconMap[feature.title] || (
                <Target className="w-8 h-8 text-purple-500" />
              )}
              {/* Floating sparkles */}
              <motion.div
                className="absolute -top-1 -right-1 text-yellow-400"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                <Sparkles className="w-3 h-3" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h3
            className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {feature.title}
          </motion.h3>

          <motion.p
            className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {feature.description}
          </motion.p>

          {/* Progress indicator */}
          <motion.div
            className="mt-6 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1.5, delay: index * 0.3 }}
            />
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={containerRef}
      className="py-24 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Enhanced background with image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg"
          alt="AI Technology Background"
          className="w-full h-full object-cover opacity-10 dark:opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-blue-50/95 dark:from-gray-900/95 dark:to-blue-900/95" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-32 h-32 border-2 border-blue-300/30 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-24 h-24 bg-purple-400/20 rounded-lg rotate-45"
          animate={{
            rotate: [45, 405],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title section */}
        <motion.div
          className="text-center mb-20"
          style={{ y }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            About The Bridger
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {mission}
          </motion.p>

          {/* Decorative elements */}
          <motion.div
            className="flex justify-center items-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
            <Zap className="w-6 h-6 text-blue-500" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-500"></div>
          </motion.div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: "500+", label: "AI Solutions Deployed" },
            { number: "100+", label: "Industries Served" },
            { number: "99.9%", label: "System Reliability" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + 1, duration: 0.6 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
