'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const images = [
  '/images/xu-haiwei-fv1EFjgIb94-unsplash.jpg',
  '/images/Untitled design.png',
  '/images/Untitled design.jpg',
  '/images/Untitled design (1).png',
];

const ideas = [
  {
    title: 'Education AI',
    description: 'Personalized learning experiences using AI tutors',
    image: images[0],
    details: 'AI-powered educational platform that adapts to individual learning styles, providing personalized curriculum and real-time feedback in both Arabic and French.'
  },
  {
    title: 'Agriculture AI',
    description: 'Smart farming solutions for better yields',
    image: images[1],
    details: 'Precision agriculture system using AI to optimize irrigation, predict crop diseases, and provide actionable insights for farmers in different regions of Morocco.'
  },
  {
    title: 'Healthcare AI',
    description: 'Improving healthcare accessibility',
    image: images[2],
    details: 'AI-driven healthcare assistant that helps with preliminary diagnoses, appointment scheduling, and medical record management, making healthcare more accessible in rural areas.'
  },
  {
    title: 'Transport AI',
    description: 'Smart transportation management',
    image: images[3],
    details: 'Intelligent transportation system that optimizes traffic flow, predicts maintenance needs, and improves public transport efficiency in Moroccan cities.'
  }
];

function IdeaCard({ idea, index }: { idea: typeof ideas[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-[#0a0a0a] backdrop-blur-lg border-2 border-[#1a5c1a] hover:border-[#2ecc71] preserve-3d perspective-1000 hover:rotate-y-[-5deg] group">
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-[#2ecc71]/5 group-hover:bg-[#2ecc71]/10 transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black"></div>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        </div>
        <CardHeader className="relative z-10">
          <div className="relative w-32 h-24 rounded-lg overflow-hidden border-2 border-[#1a5c1a]/50 group-hover:border-[#2ecc71]/50 transition-colors duration-300">
            <img
              src={idea.image}
              alt={idea.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          </div>
          <div className="mt-4">
            <CardTitle className="text-xl text-white group-hover:text-[#2ecc71] transition-colors duration-300">{idea.title}</CardTitle>
            <CardDescription className="text-white/70 group-hover:text-[#2ecc71]/80 transition-colors duration-300">{idea.description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full bg-[#1a5c1a]/10 hover:bg-[#2ecc71]/20 text-[#2ecc71] border-2 border-[#2ecc71] hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(46,204,113,0.5)]"
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-[#2ecc71] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] backdrop-blur-lg bg-[#0a0a0a] border-2 border-[#1a5c1a]">
              <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
              <DialogHeader className="relative z-10">
                <DialogTitle className="flex items-center gap-3 text-[#2ecc71]">
                  <div className="w-16 h-12 rounded-lg overflow-hidden border border-[#1a5c1a]">
                    <img src={idea.image} alt={idea.title} className="w-full h-full object-cover" />
                  </div>
                  {idea.title}
                </DialogTitle>
              </DialogHeader>
              <motion.div
                className="py-4 relative z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white/80 leading-relaxed">{idea.details}</p>
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2ecc71] to-transparent opacity-50"></div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Ideas() {
  return (
    <section id="ideas" className="py-20 relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#2ecc71]"
            style={{
              width: Math.random() * 5 + 1,
              height: Math.random() * 5 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Glowing accent elements */}
      <motion.div
        className="absolute right-12 top-16 w-24 h-24 rounded-full bg-[#2ecc71]/30 blur-3xl z-0"
        animate={{ y: [0, 30, 0], opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-20 bottom-1/4 w-32 h-32 rounded-full bg-[#2ecc71]/20 blur-3xl z-0"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <span className="relative inline-block">
              <span className="relative z-10">AI Ideas Showcase</span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#2ecc71] opacity-70 z-0"></span>
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover how we&apos;re using AI to transform different sectors in Morocco
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ideas.map((idea, index) => (
            <motion.div
              key={index}
              className="perspective-1000"
              initial={{ opacity: 0, y: 40, rotateX: 16 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ scale: 1.06, rotateY: 8, boxShadow: '0 8px 32px 0 rgba(46,204,113,0.15)' }}
              transition={{ type: 'spring', stiffness: 120, damping: 12, delay: index * 0.1 }}
              style={{ willChange: 'transform, box-shadow' }}
            >
              <IdeaCard idea={idea} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}