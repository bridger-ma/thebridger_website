'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';

// Define the performance tiers
export type DeviceTier = 'low' | 'medium' | 'high';
export type QualityPreference = 'auto' | 'low' | 'medium' | 'high';

// Define the performance metrics interface
export interface PerformanceMetrics {
  fps: number;
  averageFps: number;
  lastUpdated: number;
  deviceTier: DeviceTier;
  throttling: boolean;
  memoryUsage?: number;
}

// Define the user preferences interface
export interface UserPreferences {
  qualityPreference: QualityPreference;
  motionReduced: boolean;
  hasInteracted: boolean;
}

// Define the context interface
interface PerformanceContextType {
  metrics: PerformanceMetrics;
  preferences: UserPreferences;
  setQualityPreference: (quality: QualityPreference) => void;
  getCurrentQuality: () => DeviceTier;
  shouldRenderHighQuality: () => boolean;
  shouldRenderMediumQuality: () => boolean;
  particleCountForCurrentQuality: () => number;
  getEnabledEffects: () => string[];
  isReducedMotion: () => boolean;
}

// Create the context with default values
const PerformanceContext = createContext<PerformanceContextType>({
  metrics: {
    fps: 60,
    averageFps: 60,
    lastUpdated: Date.now(),
    deviceTier: 'medium',
    throttling: false,
  },
  preferences: {
    qualityPreference: 'auto',
    motionReduced: false,
    hasInteracted: false,
  },
  setQualityPreference: () => {},
  getCurrentQuality: () => 'medium',
  shouldRenderHighQuality: () => true,
  shouldRenderMediumQuality: () => true,
  particleCountForCurrentQuality: () => 5000,
  getEnabledEffects: () => [],
  isReducedMotion: () => false,
});

// Define the quality settings for different tiers
const qualitySettings: Record<DeviceTier, {
  particleCount: number;
  effectsEnabled: string[];
}> = {
  high: {
    particleCount: 10000,
    effectsEnabled: ['bloom', 'dof', 'motion-blur'],
  },
  medium: {
    particleCount: 5000,
    effectsEnabled: ['bloom'],
  },
  low: {
    particleCount: 2000,
    effectsEnabled: [],
  },
};

// Local storage key for user preferences
const STORAGE_KEY = 'thebridger-performance-prefs';

export const PerformanceProvider = ({ children }: { children: ReactNode }) => {
  // State for performance metrics
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    averageFps: 60,
    lastUpdated: Date.now(),
    deviceTier: 'medium',
    throttling: false,
  });

  // State for user preferences
  const [preferences, setPreferences] = useState<UserPreferences>({
    qualityPreference: 'auto',
    motionReduced: false,
    hasInteracted: false,
  });

  // FPS tracking variables

  // Detect device capabilities on mount
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Detect device tier based on various factors
    const detectDeviceTier = (): DeviceTier => {
      // Check if running on mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      // WebGL detection removed
      // Consider device memory if available
      if ('deviceMemory' in navigator) {
        const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
        if (memory && memory <= 2) return 'low';
        if (memory && memory <= 4) return isMobile ? 'low' : 'medium';
        if (memory && memory <= 8) return isMobile ? 'medium' : 'high';
        return 'high';
      }
      // Fallback based on mobile detection
      if (isMobile) {
        return 'low';
      }
      return 'medium';
    };

    // Load saved preferences from localStorage
    const loadSavedPreferences = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            qualityPreference: parsed.qualityPreference || 'auto',
            motionReduced: prefersReducedMotion || parsed.motionReduced || false,
            hasInteracted: parsed.hasInteracted || false,
          };
        }
      } catch (e) {
        console.warn('Error loading saved performance preferences:', e);
      }
      
      return {
        qualityPreference: 'auto',
        motionReduced: prefersReducedMotion,
        hasInteracted: false,
      };
    };

    const deviceTier = detectDeviceTier();
    const savedPreferences = loadSavedPreferences();
    
    setMetrics(prev => ({ ...prev, deviceTier }));
    setPreferences(savedPreferences);
    
  }, []);

  // Save preferences when they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    } catch (e) {
      console.warn('Error saving performance preferences:', e);
    }
  }, [preferences]);

  // FPS monitoring
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    let frames = 0;
    
    const measureFPS = (timestamp: number) => {
      frames++;
      const elapsed = timestamp - lastTime;
      
      if (elapsed >= 1000) {
        const currentFps = Math.round((frames * 1000) / elapsed);
        
        setMetrics(prev => ({
          ...prev,
          fps: currentFps,
          averageFps: currentFps,
          lastUpdated: Date.now(),
          throttling: currentFps < 30,
        }));
        
        frames = 0;
        lastTime = timestamp;
      }
      
      animationFrameId = requestAnimationFrame(measureFPS);
    };
    
    animationFrameId = requestAnimationFrame(measureFPS);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Set quality preference
  const setQualityPreference = useCallback((quality: QualityPreference) => {
    setPreferences(prev => ({
      ...prev,
      qualityPreference: quality,
      hasInteracted: true,
    }));
  }, []);

  // Get current quality based on preferences and metrics
  const getCurrentQuality = useCallback((): DeviceTier => {
    if (preferences.qualityPreference !== 'auto') {
      // Convert user preference to device tier
      return preferences.qualityPreference as DeviceTier;
    }
    
    // In auto mode, use device tier but downgrade if performance is poor
    if (metrics.throttling) {
      return metrics.deviceTier === 'low' ? 'low' : 'medium';
    }
    
    return metrics.deviceTier;
  }, [metrics, preferences]);

  // Helper functions for components to check quality levels
  const shouldRenderHighQuality = useCallback(() => {
    const currentQuality = getCurrentQuality();
    return currentQuality === 'high';
  }, [getCurrentQuality]);

  const shouldRenderMediumQuality = useCallback(() => {
    const currentQuality = getCurrentQuality();
    return currentQuality === 'high' || currentQuality === 'medium';
  }, [getCurrentQuality]);

  // Get particle count based on current quality
  const particleCountForCurrentQuality = useCallback(() => {
    const quality = getCurrentQuality();
    return qualitySettings[quality].particleCount;
  }, [getCurrentQuality]);

  // Get enabled effects based on current quality
  const getEnabledEffects = useCallback(() => {
    const quality = getCurrentQuality();
    return qualitySettings[quality].effectsEnabled;
  }, [getCurrentQuality]);

  // Check if reduced motion is preferred
  const isReducedMotion = useCallback(() => {
    return preferences.motionReduced;
  }, [preferences.motionReduced]);

  // Monitor memory usage if available
  useEffect(() => {
          if ('memory' in performance) {
        const checkMemory = () => {
          const memoryInfo = (performance as Performance & { memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
          if (memoryInfo) {
            const usedHeapSize = memoryInfo.usedJSHeapSize;
            const totalHeapSize = memoryInfo.jsHeapSizeLimit;
            const memoryUsage = Math.round((usedHeapSize / totalHeapSize) * 100);
            
            setMetrics(prev => ({
              ...prev,
              memoryUsage
            }));
          }
        };
      
      const memoryInterval = setInterval(checkMemory, 5000);
      return () => clearInterval(memoryInterval);
    }
  }, []);

  const contextValue = {
    metrics,
    preferences,
    setQualityPreference,
    getCurrentQuality,
    shouldRenderHighQuality,
    shouldRenderMediumQuality,
    particleCountForCurrentQuality,
    getEnabledEffects,
    isReducedMotion
  };

  return (
    <PerformanceContext.Provider value={contextValue}>
      {children}
    </PerformanceContext.Provider>
  );
};

// Custom hook to use the performance context
export const usePerformance = () => useContext(PerformanceContext);

// Component to display performance metrics (for development)
export const PerformanceDebug = () => {
  const { metrics, preferences, getCurrentQuality } = usePerformance();
  
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
  
  return (
    <div className="fixed bottom-2 left-2 z-50 bg-black/70 text-white text-xs p-2 rounded font-mono">
      <div>FPS: {metrics.fps} (Avg: {metrics.averageFps})</div>
      <div>Device: {metrics.deviceTier}</div>
      <div>Quality: {getCurrentQuality()} ({preferences.qualityPreference})</div>
      <div>Reduced Motion: {preferences.motionReduced ? 'Yes' : 'No'}</div>
    </div>
  );
};