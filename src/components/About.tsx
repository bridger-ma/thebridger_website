"use client";

import { Globe, Users, Lightbulb } from "lucide-react";
import data from "../../data.json";

const features = data.about.features;
const mission = data.about.mission;

// Enhanced icon mapping
const iconMap: { [key: string]: React.ReactNode } = {
  "Local Impact": <Globe className="w-10 h-10 text-transparent bg-gradient-to-br from-white via-[var(--color-accent)] to-white bg-clip-text" />,
  "Community Driven": <Users className="w-10 h-10 text-transparent bg-gradient-to-br from-white via-[var(--color-accent)] to-white bg-clip-text" />,
  "Innovation Focus": <Lightbulb className="w-10 h-10 text-transparent bg-gradient-to-br from-white via-[var(--color-accent)] to-white bg-clip-text" />,
};


function FeatureCard({ feature }: { feature: typeof features[0] }) {
  return (
    <div className="glass p-8 flex flex-col items-center text-center shadow-2xl transition hover:scale-105 hover:shadow-3xl">
      <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-dark-green)] shadow-lg">
        {iconMap[feature.title]}
      </div>
      <h3 className="text-xl font-bold mb-2 gradient-text">{feature.title}</h3>
      <p className="text-white/80 text-base leading-relaxed">{feature.description}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden section-transparent">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">About The Bridger</h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {mission}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
