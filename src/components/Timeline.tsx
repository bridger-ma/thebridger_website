'use client'
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2022',
    title: 'Project Inception',
    description: 'The Bridger project is conceptualized to accelerate Morocco’s digital transformation with AI.'
  },
  {
    year: '2023',
    title: 'First Prototype',
    description: 'Launched the first working prototype, demonstrating AI-powered solutions for education and agriculture.'
  },
  {
    year: '2024',
    title: 'Public Launch',
    description: 'Released the platform to the public, expanding to healthcare and transport sectors.'
  },
  {
    year: '2025',
    title: 'AI Governance & Trust',
    description: 'Introduced responsible AI features, focusing on transparency, privacy, and explainability.'
  },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-background/90">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Journey</h2>
        <div className="relative border-l-2 border-accent/30 ml-4">
          {milestones.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-12 ml-6 relative"
            >
              <div className="absolute -left-5 top-1 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold shadow-lg">
                {item.year}
              </div>
              <div className="bg-white/80 dark:bg-background/80 rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-2 text-accent">{item.title}</h3>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 