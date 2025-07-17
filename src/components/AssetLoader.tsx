"use client"
import React, { useEffect, useState } from 'react';
import { assetRegistry } from '../lib/assets/assetRegistry';

export const AssetLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

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
        setProgress(Math.round((loaded / total) * 100));
        if (loaded === total) setLoading(false);
      }, 200 + Math.random() * 400);
    });
  }, []);

  if (!loading) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-accent/20 z-50">
      <div
        className="h-full bg-accent transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}; 