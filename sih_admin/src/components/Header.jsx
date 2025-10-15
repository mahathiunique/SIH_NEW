// src/components/Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Moon, Sun, Search, Layers, Menu, CheckCircle, Info, AlertCircle, Bell, Plus } from 'lucide-react'; // Import Menu icon

// Add onSidebarToggle prop
const Header = ({
  onThemeToggle,
  isDarkMode,
  onSearch = () => {},
  onSidebarToggle,
  // notification-related props (optional)
  projects = [],
  onSelectProject = () => {},
  onNavigate = () => {},
  truncateWords = (text, maxWords) => {
    if (!text) return '';
    const words = String(text).split(' ');
    if (words.length > maxWords) return words.slice(0, maxWords).join(' ') + '...';
    return text;
  },
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationRef = useRef(null);
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    try { onSearch(e.target.value); } catch (e) { /* swallow if not provided */ }
  };

  // mock system alerts used by the notifications popover
  const mockGenericAlerts = [
    { type: 'warning', message: 'Project "Plumbing 201" halted — missing domain terminology.', action: 'Review Terms', color: 'var(--status-review-text)', icon: AlertCircle },
    { type: 'info', message: '3 files pending human review in the Quality Studio.', action: 'Open Review Studio', color: 'var(--status-in-progress-text)', icon: Info },
  ];

  // Fallback sample projects so the Header shows the example notifications when no `projects` prop is provided.
  const sampleProjects = [
    {
      id: 'p-001',
      name: 'Retail Point-of-Sale Systems',
      sourceLanguage: 'en',
      uploadedAt: '2025-09-21',
      status: 'review-needed',
    },
    {
      id: 'p-002',
      name: 'Basic Healthcare Assistant Duties',
      sourceLanguage: 'en',
      uploadedAt: '2025-09-18',
      status: 'failed',
    },
  ];

  const effectiveProjects = (projects && projects.length > 0) ? projects : sampleProjects;
  const attentionProjects = effectiveProjects.filter(p => p && (p.status === 'review-needed' || p.status === 'failed'));
  const totalAlerts = (mockGenericAlerts?.length || 0) + (attentionProjects?.length || 0);

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [notificationRef]);

  return (
    <header className="flex items-center justify-between p-4 border" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--header-bg)' }}>
      
      {/* 1. Logo and Menu Button on the Header (Left Side) */}
      <div className="flex items-center space-x-4">
        {/* Sidebar Toggle Button */}
        <button
          onClick={onSidebarToggle}
          className="p-2 rounded-full transition-colors duration-300"
          style={{ color: 'var(--text-secondary)', backgroundColor: 'var(--card-background-hover)' }}
        >
          <Menu size={24} />
        </button>
        {/* Title/Logo */}
        <div className="flex items-center space-x-2">
          <Layers style={{ color: 'var(--accent-color)' }} />
          <a className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>MicroSparks</a>
        </div>
      </div>

      {/* Search Bar remains in the center */}
      <div className="flex-1 max-w-lg mx-auto hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchValue}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2"
            style={{
              backgroundColor: 'var(--input-background)',
              color: 'var(--text-primary)',
              '--tw-ring-color': 'var(--accent-color)',
            }}
          />
        </div>
      </div>

      {/* Right side controls (Theme Toggle & Logout) */}
      <div className="flex items-center space-x-4">
        {/* Notification bell */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="relative p-2 rounded-full transition-colors duration-200"
            style={{ backgroundColor: 'var(--input-background)', color: 'var(--text-secondary)' }}
            aria-label="Toggle notifications"
          >
            <Bell size={22} />
            {totalAlerts > 0 && (
              <span className="absolute top-0 right-0 block h-4 w-4 transform -translate-y-1/2 translate-x-1/2">
                <Info size={16} className="text-white rounded-full" style={{ backgroundColor: 'var(--status-review-text)' }} />
              </span>
            )}
          </button>

          {isNotificationsOpen && (
            <div 
              className="absolute top-full right-0 mt-2 w-96 max-h-[80vh] overflow-y-auto rounded-xl shadow-2xl z-50 p-4 space-y-4"
              style={{ backgroundColor: 'var(--card-background)', border: '1px solid var(--border-color)' }}
            >
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Notifications</h3>
              {/* Projects Requiring Action */}
              {attentionProjects.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase" style={{ color: 'var(--text-tertiary)' }}>Projects Requiring Action</h4>
                  {attentionProjects.map(project => (
                    <button key={project.id} onClick={() => { onSelectProject(project.id); setIsNotificationsOpen(false); }}
                      className="w-full text-left p-3 rounded-lg transition-colors duration-200 hover:bg-opacity-50"
                      style={{ backgroundColor: 'var(--input-background)' }}>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{truncateWords(project.name, 4)}</p>
                          <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                            Source: {project.sourceLanguage?.toUpperCase()} | {project.uploadedAt}
                          </p>
                        </div>
                        {project.status === 'review-needed' && (
                          <span className="flex-shrink-0 ml-2 inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-full" style={{ backgroundColor: 'var(--status-review-bg)', color: 'var(--status-review-text)' }}>
                            Review
                          </span>
                        )}
                        {project.status === 'failed' && (
                          <span className="flex-shrink-0 ml-2 inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-full" style={{ backgroundColor: 'var(--status-failed-bg)', color: 'var(--status-failed-text)' }}>
                            Failed
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* System Alerts */}
              {mockGenericAlerts.length > 0 && (
                <div className="space-y-3 pt-3 border-t" style={{ borderColor: 'var(--border-color)'}}>
                  <h4 className="text-sm font-semibold uppercase" style={{ color: 'var(--text-tertiary)' }}>System Alerts</h4>
                  {mockGenericAlerts.map((alert, index) => (
                    <div key={index} className="p-3 rounded-lg border-l-4" style={{ backgroundColor: 'var(--input-background)', borderColor: alert.color }}>
                      <div className='flex items-start'>
                        <alert.icon size={18} className="mt-0.5 mr-3 flex-shrink-0" style={{ color: alert.color }} />
                        <div className='flex-grow'>
                          <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{alert.message}</p>
                          <button onClick={() => { onNavigate(alert.action); setIsNotificationsOpen(false); }} className="mt-2 text-xs font-bold" style={{ color: alert.color }}>
                            {alert.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {totalAlerts === 0 && (
                <div className="text-center py-8">
                  <CheckCircle size={32} className="mx-auto mb-2" style={{ color: 'var(--status-completed-text)' }}/>
                  <p className='text-sm' style={{ color: 'var(--text-secondary)' }}>All caught up!</p>
                  <p className='text-xs' style={{ color: 'var(--text-tertiary)' }}>No new notifications.</p>
                </div>
              )}
            </div>
          )}
        </div>

        <button
          onClick={onThemeToggle}
          className="p-2 rounded-full transition-colors duration-300"
          style={{ color: 'var(--text-secondary)', backgroundColor: 'var(--card-background-hover)' }}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="px-4 py-2 rounded-lg transition-colors duration-300 font-semibold text-sm"
          style={{ backgroundColor: 'var(--accent-color)', color: 'var(--button-text-light)', '--tw-bg-hover': 'var(--accent-color-hover)' }}>
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Header;