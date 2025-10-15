// src/pages/project-details/AnalyticsSubPage.jsx
import React from 'react';
import { Info } from 'lucide-react';

const AnalyticsSubPage = ({ analytics, onNavigate, project }) => {
  if (!analytics) {
    return (
      <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--input-background)' }}>
        <Info className="mx-auto mb-4" size={40} style={{ color: 'var(--text-tertiary)' }} />
        <p style={{ color: 'var(--text-secondary)' }}>Analytics are not yet available for this project.</p>
      </div>
    );
  }

  const { parameters = {}, insights = [], domain } = analytics;

  // Helper: try to get a numeric value from a parameter for simple bars
  const parseNumeric = (v) => {
    if (typeof v === 'number') return v;
    if (typeof v === 'string') {
      const pct = v.match(/([0-9]+(\.[0-9]+)?)%/);
      if (pct) return parseFloat(pct[1]);
      const num = parseFloat(v.replace(/[^0-9.]/g, ''));
      if (!Number.isNaN(num)) return num;
    }
    return null;
  };

  const numericParams = Object.entries(parameters)
    .map(([k, v]) => ({ key: k, raw: v, value: parseNumeric(v) }))
    .filter((p) => p.value !== null);

  const maxValue = numericParams.reduce((m, p) => Math.max(m, p.value), 0) || 1;

  return (
    <div className="space-y-8">
      <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: 'var(--input-background)' }}>
        <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{domain || 'Project Analytics'}</h3>
        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>{analytics.summary || ''}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(parameters).map(([key, val]) => (
          <div key={key} className="p-4 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--input-background)' }}>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{key.replace(/([A-Z])/g, ' $1')}</p>
            <h4 className="text-2xl font-bold mt-1" style={{ color: 'var(--text-primary)' }}>{val}</h4>
          </div>
        ))}
      </div>

      {numericParams.length > 0 && (
        <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: 'var(--input-background)' }}>
          <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Key Metrics</h4>
          <div className="space-y-4">
            {numericParams.map((p) => (
              <div key={p.key}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{p.key}</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{p.raw}</span>
                </div>
                <div className="h-4 w-full bg-gray-200 rounded overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                  <div className="h-full rounded" style={{ width: `${(p.value / maxValue) * 100}%`, backgroundColor: 'var(--accent-color)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: 'var(--input-background)' }}>
        <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Insights</h4>
        {insights && insights.length > 0 ? (
          <ul className="list-disc pl-5 space-y-2" style={{ color: 'var(--text-secondary)' }}>
            {insights.map((ins, idx) => (
              <li key={idx}>{ins}</li>
            ))}
          </ul>
        ) : (
          <p style={{ color: 'var(--text-secondary)' }}>No insights available.</p>
        )}
      </div>

      <div className="mt-8 p-8 rounded-xl shadow-xl" style={{ backgroundColor: 'var(--card-background)' }}>
        <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Next Steps</h3>
        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
          Use these analytics to prioritize reviews or content updates.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={() => onNavigate && onNavigate({ page: 'diff-view', projectId: project?.id })}
            className="flex-1 px-6 py-3 border rounded-lg font-semibold transition-colors duration-300"
            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
          >
            Edit Original Content
          </button>
          <button onClick={() => onNavigate && onNavigate('glossary')} className="flex-1 px-6 py-3 border rounded-lg font-semibold transition-colors duration-300"
            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
            Update Glossary
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSubPage;