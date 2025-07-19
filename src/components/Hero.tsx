"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  // No video, use animated gradient and SVG
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden animated-gradient bg-transparent">
      {/* Futuristic SVG illustration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="netGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-dark-green)" />
              <stop offset="100%" stopColor="var(--color-black)" />
            </linearGradient>
          </defs>
          <g opacity="0.18">
            <path d="M0 400 Q 360 300 720 400 T 1440 400" stroke="url(#netGrad)" strokeWidth="6" fill="none" />
            <path d="M0 500 Q 360 600 720 500 T 1440 500" stroke="url(#netGrad)" strokeWidth="6" fill="none" />
            <circle cx="360" cy="300" r="18" fill="var(--color-dark-green)" />
            <circle cx="1080" cy="500" r="14" fill="var(--color-dark-green)" />
            <circle cx="720" cy="400" r="22" fill="var(--color-dark-green)" />
          </g>
        </svg>
      </div>
      <div className="relative z-10 max-w-2xl text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 gradient-text" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>The Bridger</h1>
        <p className="text-lg sm:text-2xl text-white/80 mb-8">Bridging Tech & Innovation for a Smarter Future</p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <a href="#features" aria-label="Get Started" className="glass px-4 py-2 font-bold text-sm rounded-full shadow transition bg-[var(--color-dark-green)] text-white border border-[var(--color-dark-green)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]" onClick={e => { e.preventDefault(); document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get Started
          </a>
          <a href="#about" aria-label="Learn More" className="glass px-4 py-2 font-bold text-sm rounded-full transition border border-white/20 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]" onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
