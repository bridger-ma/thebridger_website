'use client';

import { useEffect, useState } from 'react';

interface AssetManagerProps {
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export const AssetManager: React.FC<AssetManagerProps> = ({ onLoad, onError }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const preloadAssets = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Preload critical assets here
        // Example: await preloadTexture('/textures/important-texture.jpg');
        
        setIsLoading(false);
        onLoad?.();
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to load assets');
        setError(error);
        onError?.(error);
      }
    };

    preloadAssets();
  }, [onLoad, onError]);

  if (error) {
    return <div>Error loading assets: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading assets...</div>;
  }

  return null;
};

export default AssetManager;