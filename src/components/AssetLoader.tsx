"use client"
import React, { useEffect, useState } from 'react';
import { assetRegistry } from '../lib/assets/assetRegistry';

export const AssetLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let loaded = 0;
    const total = assetRegistry.assets.length;
    if (total === 0) {
      setLoading(false);
      return;
    }
    assetRegistry.assets.forEach((asset) => {
      // Simulate async loading (replace with real loader for models/textures)
      setTimeout(() => {
        assetRegistry.loaded.push(asset.id);
        loaded++;
        if (loaded === total) setLoading(false);
      }, 200 + Math.random() * 400);
    });
  }, []);

  if (!loading) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
      {/* Animated SVG Loader */}
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow">
        <circle cx="32" cy="32" r="28" stroke="var(--color-dark-green)" strokeWidth="4" opacity="0.2" />
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="var(--color-accent)"
          strokeWidth="4"
          strokeDasharray="44 88"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 32 32"
            to="360 32 32"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="32" cy="32" r="8" fill="var(--color-dark-green)" opacity="0.7" />
        <circle cx="32" cy="16" r="3" fill="var(--color-accent)" />
        <circle cx="48" cy="32" r="2.5" fill="var(--color-accent)" />
        <circle cx="32" cy="48" r="2" fill="var(--color-accent)" />
        <circle cx="16" cy="32" r="2.5" fill="var(--color-accent)" />
      </svg>
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 1.6s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}; 