'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import data from '../../data.json';
import Image from 'next/image';

const ideaImages = [
  '/images/Untitled design (1).png',
  '/images/Untitled design.jpg',
  '/images/Untitled design.png',
  '/images/xu-haiwei-fv1EFjgIb94-unsplash.jpg',
];
const ideas = data.ideas.map((idea, idx) => ({
  ...idea,
  image: ideaImages[idx] || '',
}));

const iconMap: { [key: string]: React.ReactNode } = {
  'Education AI': <span role="img" aria-label="Education">🎓</span>,
  'Agriculture AI': <span role="img" aria-label="Agriculture">🌱</span>,
  'Healthcare AI': <span role="img" aria-label="Healthcare">💊</span>,
  'Transport AI': <span role="img" aria-label="Transport">🚚</span>,
};

function IdeaCard({ idea }: { idea: typeof ideas[0] }) {
  return (
    <div className="rounded-2xl border border-[var(--color-dark-green)] shadow-lg p-8 flex flex-col items-center text-center min-h-[340px] max-w-xs mx-auto relative">
      <div className="absolute top-4 right-4 text-[var(--color-dark-green)] text-3xl opacity-30">
        {iconMap[idea.title]}
      </div>
      <div className="font-bold text-lg text-[var(--color-white)] mb-4" style={{fontFamily: 'monospace'}}>
        {idea.title}
      </div>
      <div className="text-[var(--color-white)]/90 font-medium mb-6" style={{fontFamily: 'monospace'}}>
        {idea.description}
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto">
          <Image src={idea.image} alt={idea.title} fill style={{objectFit: 'contain'}} sizes="(max-width: 640px) 6rem, (max-width: 768px) 8rem, (max-width: 1024px) 9rem, 10rem" />
        </div>
      </div>
    </div>
  );
}

export default function Ideas() {
  const [page, setPage] = useState(0);
  const cardsPerPage = 2;
  const totalPages = Math.ceil(ideas.length / cardsPerPage);
  const pagedIdeas = ideas.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseRef = useRef(false);

  // Auto-advance logic
  useEffect(() => {
    if (pauseRef.current) return;
    timerRef.current = setTimeout(() => {
      setPage(p => (p + 1) % totalPages);
    }, 3000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [page, totalPages]);

  // Pause auto-advance on user interaction
  const handleNav = (newPage: number) => {
    setPage(newPage);
    pauseRef.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
    setTimeout(() => {
      pauseRef.current = false;
    }, 5000);
  };

  return (
    <section id="ideas" className="py-20 section-transparent min-h-[80vh] flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <div className="flex w-full justify-between items-center mb-10">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[var(--color-white)] tracking-tight mb-2 sm:mb-0" style={{fontFamily: 'monospace'}}>
            OBJECTIVES FOR A <br className="md:hidden" /> SUSTAINABLE FUTURE
          </h2>
          <div className="flex gap-2">
            <button
              className="w-10 h-10 rounded-full border border-[var(--color-dark-green)] bg-black text-[var(--color-dark-green)] flex items-center justify-center text-xl hover:bg-[var(--color-dark-green)] hover:text-white transition"
              onClick={() => handleNav(Math.max(0, page - 1))}
              aria-label="Previous"
              disabled={page === 0}
            >
              <ChevronLeft />
            </button>
            <button
              className="w-10 h-10 rounded-full border border-[var(--color-dark-green)] bg-black text-[var(--color-dark-green)] flex items-center justify-center text-xl hover:bg-[var(--color-dark-green)] hover:text-white transition"
              onClick={() => handleNav(Math.min(totalPages - 1, page + 1))}
              aria-label="Next"
              disabled={page === totalPages - 1}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full justify-center">
          {pagedIdeas.map((idea) => (
            <IdeaCard key={idea.title} idea={idea} />
          ))}
        </div>
      </div>
      {/* Scroll indicator for next section */}
      <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 animate-bounce text-[var(--color-accent)]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6v20M16 26l-7-7M16 26l7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="sr-only">Scroll for more</span>
        </div>
      </div>
    </section>
  );
}