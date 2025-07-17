"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Particle component for floating animation
const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-white/30 rounded-full"
    initial={{
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 10,
      opacity: 0,
    }}
    animate={{
      x: Math.random() * window.innerWidth,
      y: -10,
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: Math.random() * 8 + 12,
      delay: delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

// Floating AI icon component
const FloatingIcon = ({
  children,
  duration,
  delay,
}: {
  children: React.ReactNode;
  duration: number;
  delay: number;
}) => (
  <motion.div
    className="absolute text-white/20 text-2xl"
    initial={{
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotate: 0,
    }}
    animate={{
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotate: 360,
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  const [greeting, setGreeting] = useState("Welcome");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");

    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(console.log);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://videos.pexels.com/video-files/18333010/18333010-sd_960_540_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          background:
            "linear-gradient(45deg, rgba(59,130,246,0.3), rgba(139,69,244,0.3), rgba(236,72,153,0.3), rgba(59,130,246,0.3))",
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Particle Effects */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <Particle key={i} delay={i * 0.2} />
        ))}
      </div>

      {/* Floating AI Icons */}
      <div className="absolute inset-0 z-25 pointer-events-none overflow-hidden">
        <FloatingIcon duration={20} delay={0}>
          🤖
        </FloatingIcon>
        <FloatingIcon duration={25} delay={5}>
          🧠
        </FloatingIcon>
        <FloatingIcon duration={30} delay={10}>
          ⚡
        </FloatingIcon>
        <FloatingIcon duration={22} delay={15}>
          🔬
        </FloatingIcon>
        <FloatingIcon duration={28} delay={8}>
          💡
        </FloatingIcon>
        <FloatingIcon duration={35} delay={12}>
          🚀
        </FloatingIcon>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-40 text-center text-white max-w-6xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.span
            className="inline-block text-lg md:text-xl font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.15)",
            }}
          >
            ✨ {greeting}
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
        >
          <motion.span
            className="block"
            animate={{
              textShadow: [
                "0 0 20px rgba(59,130,246,0.5)",
                "0 0 30px rgba(139,69,244,0.5)",
                "0 0 20px rgba(59,130,246,0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Accelerate Innovation
          </motion.span>
          <motion.span
            className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            with AI
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
        >
          Discover how our platform brings the power of artificial intelligence
          to real-world challenges,
          <motion.span
            className="text-blue-400 font-semibold"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {" "}
            inspired by the legacy of IBM Watson
          </motion.span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl overflow-hidden"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                🚀
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/20 hover:border-white/40 shadow-xl"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="flex items-center gap-2">
              Learn More
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Scrolling indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* 3D Floating Orbs */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(${Math.random() * 255},${Math.random() * 255},255,0.1) 0%, transparent 70%)`,
              filter: "blur(2px)",
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
