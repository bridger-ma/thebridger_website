'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ideas = [
  {
    title: 'Education AI',
    description: 'Personalized learning experiences using AI tutors',
    image: '/images/6bb1ff2f-657c-4b51-bbcb-4f3bdc636ec3_large.webp',
    details: 'AI-powered educational platform that adapts to individual learning styles, providing personalized curriculum and real-time feedback in both Arabic and French.'
  },
  {
    title: 'Agriculture AI',
    description: 'Smart farming solutions for better yields',
    image: '/images/Untitled design.png',
    details: 'Precision agriculture system using AI to optimize irrigation, predict crop diseases, and provide actionable insights for farmers in different regions of Morocco.'
  },
  {
    title: 'Healthcare AI',
    description: 'Improving healthcare accessibility',
    image: '/images/ai-generated-abstract-background-with-connecting-dots-and-lines-network-concept-3d-rendering-abstract-technology-wallpaper-with-digital-glowing-waves-and-a-network-system-.jpg',
    details: 'AI-driven healthcare assistant that helps with preliminary diagnoses, appointment scheduling, and medical record management, making healthcare more accessible in rural areas.'
  },
  {
    title: 'Transport AI',
    description: 'Smart transportation management',
    image: '/images/ai-generated-abstract-blue-background-with-connecting-dots-and-lines-network-concept-3d-rendering-futuristic-technology-wallpaper-with-digital-glowing-waves-and-a-network-system-.jpg',
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
      <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-background/30 backdrop-blur-lg border border-accent/20 hover:border-accent/40 preserve-3d perspective-1000 hover:rotate-y-[-5deg]">
        <CardHeader>
          <img
            src={idea.image}
            alt={idea.title}
            style={{ width: 128, height: 96, objectFit: 'cover', borderRadius: 8 }}
          />
          <div>
            <CardTitle className="text-xl text-foreground">{idea.title}</CardTitle>
            <CardDescription className="text-foreground/60">{idea.description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full bg-accent/10 hover:bg-accent/20 transition-colors duration-300"
              >
                Learn More
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] backdrop-blur-lg bg-background/95">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <div className="w-16 h-12 rounded-lg overflow-hidden">
                    <img src={idea.image} alt={idea.title} className="w-full h-full object-cover" />
                  </div>
                  {idea.title}
                </DialogTitle>
              </DialogHeader>
              <motion.div
                className="py-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-foreground/80 leading-relaxed">{idea.details}</p>
              </motion.div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Ideas() {
  // Removed broken useTransform usage
  return (
    <section id="ideas" className="py-20 relative overflow-hidden bg-background/80 backdrop-blur-lg">
      {/* Simple static background instead of 3D */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-accent/10 to-background" />
      {/* Glowing accent orb */}
      <motion.div
        className="absolute right-12 top-16 w-24 h-24 rounded-full bg-accent/30 blur-3xl z-0"
        animate={{ y: [0, 30, 0], opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            AI Ideas Showcase
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/80 max-w-3xl mx-auto"
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
              whileHover={{ scale: 1.06, rotateY: 8, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)' }}
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