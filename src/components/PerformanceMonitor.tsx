import React, { useEffect, useState } from 'react';
import { usePerformanceMonitor } from '@/lib/performance/usePerformanceMonitor';
import { usePerformance } from '@/lib/performance/PerformanceMonitor';

const QUALITY_OPTIONS = [
  { value: 'auto', label: 'Auto' },
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

export const PerformanceMonitor: React.FC = () => {
  const metrics = usePerformanceMonitor();
  const { isReducedMotion } = usePerformance();
  const [quality, setQuality] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('thebridger-quality') || 'auto';
    }
    return 'auto';
  });
  const [liteMode, setLiteMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('thebridger-lite-mode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('thebridger-quality', quality);
      localStorage.setItem('thebridger-lite-mode', liteMode ? 'true' : 'false');
    }
  }, [quality, liteMode]);

  return (
    <div className="fixed bottom-2 left-2 z-50 bg-black/70 text-white text-xs p-2 rounded font-mono flex flex-col gap-2 min-w-[220px]">
      <div>FPS: {metrics.fps} (Avg: {metrics.averageFps})</div>
      <div>Device: {metrics.deviceTier}</div>
      <div>Quality: {quality}
        <select
          className="ml-2 bg-black/80 text-white border border-white/20 rounded px-1 py-0.5 text-xs"
          value={quality}
          onChange={e => setQuality(e.target.value)}
        >
          {QUALITY_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="inline-flex items-center gap-1 cursor-pointer">
          <input
            type="checkbox"
            checked={liteMode}
            onChange={e => setLiteMode(e.target.checked)}
            className="accent-accent"
          />
          Lite Mode
        </label>
      </div>
      <div>Reduced Motion: {isReducedMotion() ? 'Yes' : 'No'}</div>
    </div>
  );
}; 