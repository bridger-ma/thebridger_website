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

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <motion.section {...sectionAnim}>
        <FeatureCards />
      </motion.section>
      <motion.section {...sectionAnim}>
        <Ideas />
      </motion.section>
      <motion.section {...sectionAnim}>
        <About />
      </motion.section>
      <motion.section {...sectionAnim}>
        <Timeline />
      </motion.section>
      <motion.section {...sectionAnim}>
        <GovernanceSection />
      </motion.section>
      <motion.section {...sectionAnim}>
        <AIQuiz />
      </motion.section>
      <motion.section {...sectionAnim}>
        <TestimonialsSection />
      </motion.section>
      <motion.section {...sectionAnim}>
        <CTASection />
      </motion.section>
      <Footer />
    </main>
  );
}
