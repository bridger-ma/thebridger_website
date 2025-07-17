import { useEffect, useRef, useState } from 'react';

export type DeviceTier = 'low' | 'medium' | 'high';

export interface PerformanceMetrics {
  fps: number;
  lastUpdated: number;
  averageFps: number;
  deviceTier: DeviceTier;
  memoryUsage?: number;
  throttling: boolean;
}

function detectDeviceTier(fps: number): DeviceTier {
  if (fps >= 50) return 'high';
  if (fps >= 30) return 'medium';
  return 'low';
}

export function usePerformanceMonitor(updateInterval = 1000): PerformanceMetrics {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    lastUpdated: Date.now(),
    averageFps: 60,
    deviceTier: 'high',
    throttling: false,
  });
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const fpsHistory = useRef<number[]>([]);

  useEffect(() => {
    let running = true;
    function loop() {
      if (!running) return;
      frameCount.current++;
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    const interval = setInterval(() => {
      const now = performance.now();
      const seconds = (now - lastTime.current) / 1000;
      const fps = frameCount.current / seconds;
      fpsHistory.current.push(fps);
      if (fpsHistory.current.length > 10) fpsHistory.current.shift();
      const averageFps = fpsHistory.current.reduce((a, b) => a + b, 0) / fpsHistory.current.length;
      const deviceTier = detectDeviceTier(averageFps);
      setMetrics({
        fps: Math.round(fps),
        lastUpdated: Date.now(),
        averageFps: Math.round(averageFps),
        deviceTier,
        throttling: averageFps < 20,
        memoryUsage: (window.performance as Performance & { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize,
      });
      frameCount.current = 0;
      lastTime.current = now;
    }, updateInterval);
    return () => {
      running = false;
      clearInterval(interval);
    };
  }, [updateInterval]);
  return metrics;
} 