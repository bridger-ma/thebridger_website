'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [greeting, setGreeting] = useState('Welcome');
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none z-0 animate-gradient-move" />
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        {greeting}, Accelerate Innovation with AI
      </h1>
      <p className="text-lg md:text-2xl mb-8 text-center max-w-2xl">
        Discover how our platform brings the power of artificial intelligence to real-world challenges, inspired by the legacy of IBM Watson.
      </p>
      <div className="flex gap-4">
        <button className="btn-ripple bg-accent px-6 py-3 rounded-lg font-semibold shadow hover:bg-accent/80 transition">Get Started</button>
        <button className="btn-ripple bg-white/10 px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition">Learn More</button>
      </div>
    </section>
  );
}