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
    <section className="py-20 relative overflow-hidden">
      {/* Removed global animated background class */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-white)] drop-shadow-lg">Our Journey</h2>
        <div className="relative border-l-4 border-[var(--color-accent)]/40 ml-4">
          {milestones.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-12 ml-6 relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-7 top-1 w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-dark-green)] flex items-center justify-center text-[var(--color-black)] font-bold shadow-xl border-4 border-[var(--color-black)] group-hover:scale-110 transition-transform duration-300">
                {item.year}
              </div>
              {/* Milestone card */}
              <div className="bg-[var(--color-black)]/80 border-2 border-[var(--color-accent)] rounded-xl shadow-2xl p-6 glass-effect group-hover:shadow-[0_8px_32px_0_rgba(29,185,84,0.18)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-accent)] drop-shadow">{item.title}</h3>
                <p className="text-[var(--color-white)]/80">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 