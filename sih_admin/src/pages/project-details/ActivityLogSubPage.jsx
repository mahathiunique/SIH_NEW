// src/pages/project-details/ActivityLogSubPage.jsx
import React, { useState, useEffect } from 'react';
import { List } from 'lucide-react';

const ActivityLogSubPage = ({ activityLog }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [activityLog]);

  if (isLoading) {
    return (
      <div className="space-y-4 animate-pulse">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="p-4 rounded-lg h-12 w-full" style={{ backgroundColor: 'var(--input-background)' }}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {activityLog.map((log, index) => (
        <div key={index} className="flex items-start p-4 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--input-background)' }}>
          <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--status-review-bg)' }}>
            <List size={16} style={{ color: 'var(--status-review-text)' }} />
          </div>
          <div className="ml-4 flex-1">
            <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{log.message}</p>
            <p className="mt-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
              {new Date(log.timestamp).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityLogSubPage;