// src/components/SkeletonLoader.jsx
import React from 'react';

const SkeletonLoader = () => (
  <div className="space-y-4 animate-pulse">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="flex flex-col md:flex-row items-center p-4 rounded-xl space-x-0 md:space-x-4 space-y-4 md:space-y-0 shadow-lg"
        style={{ backgroundColor: 'var(--input-background)' }}>
        <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--text-tertiary)' }}></div>
        <div className="flex-1 w-full space-y-2">
          <div className="h-4 rounded" style={{ backgroundColor: 'var(--text-tertiary)' }}></div>
          <div className="h-3 w-4/5 rounded" style={{ backgroundColor: 'var(--text-tertiary)' }}></div>
        </div>
        <div className="w-24 h-8 rounded-md" style={{ backgroundColor: 'var(--text-tertiary)' }}></div>
        <div className="w-24 h-8 rounded-md" style={{ backgroundColor: 'var(--text-tertiary)' }}></div>
      </div>
    ))}
  </div>
);

export default SkeletonLoader;