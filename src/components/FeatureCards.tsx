import { GraduationCap, HeartPulse, Leaf, Bus } from 'lucide-react';

const features = [
  {
    icon: <GraduationCap className="h-10 w-10 text-accent mb-4" />,
    title: 'Education',
    description: 'Personalized learning and adaptive AI tutors for students and teachers.'
  },
  {
    icon: <Leaf className="h-10 w-10 text-accent mb-4" />,
    title: 'Agriculture',
    description: 'Smart farming, crop disease prediction, and resource optimization.'
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-accent mb-4" />,
    title: 'Healthcare',
    description: 'AI-driven diagnostics, appointment scheduling, and health record management.'
  },
  {
    icon: <Bus className="h-10 w-10 text-accent mb-4" />,
    title: 'Transport',
    description: 'Intelligent traffic management and predictive maintenance for public transport.'
  },
];

export default function FeatureCards() {
  return (
    <section className="py-20 bg-background/95">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">AI for Every Sector</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group bg-white/80 dark:bg-background/80 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/60 transform hover:scale-105 focus:scale-105"
              tabIndex={0}
              aria-label={feature.title + ' sector card'}
              role="region"
            >
              <span className="transition-transform duration-300 group-hover:scale-125 group-focus:scale-125">
                {feature.icon}
              </span>
              <h3 className="text-xl font-semibold mb-2 text-accent">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 