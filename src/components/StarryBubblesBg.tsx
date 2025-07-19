"use client";
import { useEffect, useState } from "react";

export default function StarryBubblesBg() {
  const [stars, setStars] = useState<JSX.Element[]>([]);
  const [bubbles, setBubbles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 60 }).map((_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 2;
      return (
        <div
          key={`star-${i}`}
          className="star"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`,
            background: 'rgba(1, 68, 33, 0.25)', // lighter dark green for stars
            borderRadius: '50%',
            width: '2px',
            height: '2px',
            position: 'absolute',
            opacity: 0.7,
          }}
        />
      );
    });
    setStars(newStars);
    const newBubbles = Array.from({ length: 8 }).map((_, i) => {
      const size = 60 + Math.random() * 80;
      const left = Math.random() * 100;
      const bottom = Math.random() * 60;
      const delay = Math.random() * 8;
      return (
        <div
          key={`bubble-${i}`}
          className="bubble orb"
          style={{
            width: size,
            height: size,
            left: `${left}%`,
            bottom: `${bottom}%`,
            animationDelay: `${delay}s`,
            background: 'var(--color-dark-green)',
          }}
        />
      );
    });
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="starry-bubbles-bg bg-transparent" aria-hidden="true">
      {stars}
      {bubbles}
    </div>
  );
} 