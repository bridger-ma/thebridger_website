"use client";

import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Ideas from "@/components/Ideas";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import FeatureCards from "@/components/FeatureCards";
import GovernanceSection from "@/components/GovernanceSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AIQuiz from "@/components/AIQuiz";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import Loading from "./loading";
import { useEffect, useState } from "react";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 5000);
    return () => clearTimeout(timeout);
  }, []);
  if (showLoader) return <Loading />;
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden snap-scroll">
      <motion.section {...sectionAnim} className="snap-section">
      <Navbar />
      <Hero />
      </motion.section>
      <motion.section {...sectionAnim} className="snap-section">
        <FeatureCards />
      </motion.section>
      <motion.section {...sectionAnim} className="snap-section">
        <Ideas />
      </motion.section>
      <motion.section {...sectionAnim} className="snap-section">
        <About />
      </motion.section>
      <motion.section {...sectionAnim} className="snap-section">
        <Timeline />
      </motion.section>
      <motion.section {...sectionAnim} className="snap-section">
        <GovernanceSection />
      </motion.section>
      <motion.section {...sectionAnim} className="snap-section">
        <AIQuiz />
      </motion.section>
      <motion.section {...sectionAnim} className="snap-section">
        <TestimonialsSection />
      </motion.section>
      <motion.section {...sectionAnim} className="snap-section">
        <CTASection />
      </motion.section>
      <motion.section {...sectionAnim} className="snap-section">
        <Contact />
     
      <Footer />
      </motion.section>
    </main>
  );
}
