// src/pages/ProjectDetails.jsx
import React, { useState } from 'react';
import { CheckCircle, Loader2, Info, AlertCircle } from 'lucide-react';
import AssetsSubPage from './project-details/AssetsSubPage.jsx';
import AnalyticsSubPage from './project-details/AnalyticsSubPage.jsx';
import ActivityLogSubPage from './project-details/ActivityLogSubPage.jsx';
import { MOCK_LANGUAGES } from '../data/mockData.js';

const ProjectDetails = ({ project, onNavigate }) => {
  const [subPage, setSubPage] = useState('assets');

  if (!project) {
    return (
      <div className="p-8 text-center" style={{ color: 'var(--text-secondary)' }}>
        <p>Project not found.</p>
      </div>
    );
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} className="mr-1" />;
      case 'in-progress':
        return <Loader2 size={16} className="mr-1 animate-spin" />;
      case 'review-needed':
        return <Info size={16} className="mr-1" />;
      case 'failed':
        return <AlertCircle size={16} className="mr-1" />;
      default:
        return null;
    }
  };

  const renderSubPage = () => {
    switch (subPage) {
      case 'assets':
        return <AssetsSubPage assets={project.assets} />;
      case 'analytics':
        return <AnalyticsSubPage analytics={project.analytics} project={project} onNavigate={onNavigate} />;
      case 'log':
        return <ActivityLogSubPage activityLog={project.activityLog} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <button onClick={() => onNavigate('dashboard')} className="flex items-center mb-4 hover:underline" style={{ color: 'var(--text-secondary)' }}>
        <span className="mr-1">&larr;</span> Back to Projects
      </button>

      <div className="rounded-xl shadow-lg p-6 mb-8" style={{ backgroundColor: 'var(--card-background)', borderLeft: `4px solid var(--accent-color)` }}>
        <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{project.name}</h2>
        <div className="flex flex-wrap items-center space-x-6">
          <span className={`px-3 py-1 text-sm font-semibold rounded-full flex items-center`} 
            style={{ 
              backgroundColor: `var(--status-${project.status === 'completed' ? 'completed' : project.status === 'in-progress' ? 'in-progress' : project.status === 'review-needed' ? 'review' : 'failed'}-bg)`, 
              color: `var(--status-${project.status === 'completed' ? 'completed' : project.status === 'in-progress' ? 'in-progress' : project.status === 'review-needed' ? 'review' : 'failed'}-text)` 
            }}>
            {getStatusIcon(project.status)} {project.status.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
          </span>
          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Source: <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{MOCK_LANGUAGES.find(l => l.code === project.sourceLanguage)?.name}</span>
          </span>
          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Targets: <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{project.targetLanguages.map(code => MOCK_LANGUAGES.find(l => l.code === code)?.name).join(', ')}</span>
          </span>
        </div>
      </div>

      <div className="rounded-xl shadow-xl" style={{ backgroundColor: 'var(--card-background)' }}>
        <div className="flex border-b" style={{ borderColor: 'var(--border-color)' }}>
          
          <button
            onClick={() => setSubPage('assets')}
            className={`flex-1 px-4 py-3 text-center font-semibold transition-colors duration-200 ${
              subPage === 'assets' ? 'border-b-2' : ''
            }`}
            style={{
              color: subPage === 'assets' ? 'var(--accent-color)' : 'var(--text-secondary)',
              borderColor: subPage === 'assets' ? 'var(--accent-color)' : 'transparent',
            }}
          >
            Assets
          </button>

          <button
            onClick={() => setSubPage('analytics')}
            className={`flex-1 px-4 py-3 text-center font-semibold transition-colors duration-200 ${
              subPage === 'analytics' ? 'border-b-2' : ''
            }`}
            style={{
              color: subPage === 'analytics' ? 'var(--accent-color)' : 'var(--text-secondary)',
              borderColor: subPage === 'analytics' ? 'var(--accent-color)' : 'transparent',
            }}
          >
            Analytics
          </button>

          <button
            onClick={() => setSubPage('log')}
            className={`flex-1 px-4 py-3 text-center font-semibold transition-colors duration-200 ${
              subPage === 'log' ? 'border-b-2' : ''
            }`}
            style={{
              color: subPage === 'log' ? 'var(--accent-color)' : 'var(--text-secondary)',
              borderColor: subPage === 'log' ? 'var(--accent-color)' : 'transparent',
            }}
          >
            Activity Log
          </button>

        </div>
        
        <div className="p-8">
          {renderSubPage()}
        </div>

      </div>


    </div>
  );
};

export default ProjectDetails;