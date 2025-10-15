// src/pages/SIH.jsx
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../context/ThemeContext.jsx'; // Import the theme hook
import {
  Upload,
  FileText,
  Layers,
  Video,
  CheckCircle,
} from 'lucide-react';

// Import all the refactored pages and components
import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Modal from '../components/Modal.jsx';
import LandingPage from '../pages/LandingPage.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import NewProject from '../pages/NewProject.jsx';
import ProjectDetails from '../pages/ProjectDetails.jsx';
import GlossaryPage from '../pages/GlossaryPage.jsx';
import SettingsPage from '../pages/SettingsPage.jsx';
import TranslationViewer from '../pages/TranslationViewer.jsx';
import DiffViewPage from '../pages/DiffViewPage.jsx';

// Import mock data to be managed by the main component
import { MOCK_PROJECTS, MOCK_LANGUAGES, MOCK_GLOSSARY } from '../data/mockData.js';


const Sih = () => {
  const { theme, toggleTheme } = useTheme();
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [projects, setProjects] = useState(MOCK_PROJECTS);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isLocalizationModalOpen, setIsLocalizationModalOpen] = useState(false);
  const [currentLocalizationStep, setCurrentLocalizationStep] = useState(0);
  const [searchFilter, setSearchFilter] = useState('');
  // NEW STATE: Control the open/close state of the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  const [translationLanguage, setTranslationLanguage] = useState('hi');

  const localizationSteps = [
    { title: 'Ingesting Content', icon: <Upload size={24} /> },
    { title: 'Translating Text', icon: <FileText size={24} /> },
    { title: 'Adapting Culturally', icon: <Layers size={24} /> },
    { title: 'Generating Audio/Video', icon: <Video size={24} /> },
    { title: 'Running Quality Checks', icon: <CheckCircle size={24} /> },
  ];
  
  const handleStartLocalization = (newProjectData) => {
    // ... (existing logic for localization remains the same) ...
    setIsLocalizationModalOpen(true);
    setCurrentLocalizationStep(0);

    const project = {
      id: `proj_${projects.length + 1}`,
      ...newProjectData,
      status: 'in-progress',
      uploadedAt: new Date().toISOString().slice(0, 10),
      assets: [],
      progress: 0,
      analytics: null,
      activityLog: [{ timestamp: new Date().toISOString(), message: 'Project created.' }],
    };
    setProjects(prev => [project, ...prev]);
    setSelectedProjectId(project.id);
    setCurrentPage('project-details');

    const interval = setInterval(() => {
      setCurrentLocalizationStep(prev => {
        if (prev < localizationSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setProjects(prevProjects =>
            prevProjects.map(p =>
              p.id === project.id ? { ...p, status: 'completed', progress: 100,
                assets: [{ type: 'scorm', name: `SCORM_bundle_hi.zip` }, { type: 'scorm', name: `SCORM_bundle_ta.zip` }],
                analytics: { completionRateLift: 30, costReduction: 65, turnaroundTime: '3 hours', confusionHotspots: [{ language: 'hi', topic: 'Topic A', score: 75 }] },
                activityLog: [...p.activityLog, { timestamp: new Date().toISOString(), message: 'Localization complete. Assets generated.' }],
              } : p
            )
          );
          setTimeout(() => {
            setIsLocalizationModalOpen(false);
          }, 1000);
          return prev;
        }
      });
    }, 1500);
  };

  const handlePageChange = (page) => {
    // allow object navigation: { page: 'translation-viewer', projectId, language }
    if (typeof page === 'object') {
      if (page.page === 'translation-viewer') {
        setSelectedProjectId(page.projectId || null);
        setCurrentPage('translation-viewer');
        // stash language in state
        setTranslationLanguage(page.language || 'hi');
        return;
      }
      if (page.page === 'diff-view') {
        setSelectedProjectId(page.projectId || null);
        setCurrentPage('diff-view');
        return;
      }
    }
    setCurrentPage(page);
    setSelectedProjectId(null);
  };

  const handleSelectProject = (id) => {
    setSelectedProjectId(id);
    setCurrentPage('project-details');
  };

  // NEW FUNCTION: Toggle sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const renderPage = () => {
    if (currentPage === 'landing') {
      return <LandingPage onEnterSih={() => setCurrentPage('dashboard')} />;
    }

    const mainContent = () => {
      switch (currentPage) {
        case 'dashboard':
          return (
            <Dashboard
              onNavigate={handlePageChange}
              onSelectProject={handleSelectProject}
              projects={projects}
              searchFilter={searchFilter}
            />
          );
        case 'new-project':
          return <NewProject onNavigate={handlePageChange} onStartLocalization={handleStartLocalization} />;
        case 'project-details':
          const selectedProject = projects.find(p => p.id === selectedProjectId);
          return <ProjectDetails project={selectedProject} onNavigate={handlePageChange} />;
        case 'glossary':
          return <GlossaryPage />;
        case 'translation-viewer':
          const proj = projects.find(p => p.id === selectedProjectId);
          return <TranslationViewer project={proj} targetLanguage={translationLanguage} onNavigate={handlePageChange} />;
        case 'diff-view':
          // show the diff/compare view and pass the glossary data
          const diffProject = projects.find(p => p.id === selectedProjectId) || null;
          return <DiffViewPage project={diffProject} glossary={MOCK_GLOSSARY} onNavigate={handlePageChange} />;
        case 'settings':
          return <SettingsPage />;
        default:
          return <div className="p-8">Page Not Found</div>;
      }
    };

    return (
      // Main container is a flex column (Header on top, content below)
      <div className="flex flex-col min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
        
        {/* 1. Header (Always full width) */}
        <Header 
          onThemeToggle={toggleTheme} 
          isDarkMode={theme === 'dark'} 
          onSearch={setSearchFilter} 
          onSidebarToggle={toggleSidebar} // Pass the new toggle function
          projects={projects}
          onSelectProject={handleSelectProject}
          onNavigate={handlePageChange}
        />
        
        {/* 2. Content Area (Sidebar + Main Content, flex row) */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Sidebar Component */}
          <Sidebar 
            onNavigate={handlePageChange} 
            currentPage={currentPage}
            isCollapsed={!isSidebarOpen} // Pass the collapsed state
          />
          
          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto">
            {mainContent()}
          </main>
        </div>
        
        <Modal isOpen={isLocalizationModalOpen} onClose={() => setIsLocalizationModalOpen(false)}>
          <div className="text-center p-4">
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Localizing Your Content...
            </h3>
            <div className="space-y-4">
              {localizationSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full`} style={{ backgroundColor: index <= currentLocalizationStep ? 'var(--accent-color)' : 'var(--input-background)', color: index <= currentLocalizationStep ? 'var(--button-text-light)' : 'var(--text-secondary)' }}>
                    {step.icon}
                  </div>
                  <span className={`text-lg font-medium`} style={{ color: index <= currentLocalizationStep ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm animate-pulse" style={{ color: 'var(--text-secondary)' }}>
              This process may take a few minutes.
            </p>
          </div>
        </Modal>
      </div>
    );
  };

  return (
    <>
      {renderPage()}
    </>
  );
};

export default Sih;