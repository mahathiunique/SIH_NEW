// src/components/Sidebar.jsx
import React from 'react';
import { Home, Plus, Book, Settings, Layers, Award } from 'lucide-react';

const Sidebar = ({ onNavigate, currentPage, isCollapsed }) => {
  const navItems = [
    { name: 'Dashboard', icon: <Home />, page: 'dashboard' },
    { name: 'Glossary', icon: <Book />, page: 'glossary' },
    { name: 'Settings', icon: <Settings />, page: 'settings' },
  ];

  return (
    <nav className={`hidden md:flex flex-col h-auto border-r transition-all duration-300 ${isCollapsed ? 'w-20 items-center px-2' : 'w-64 p-4'}`}
         style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--header-bg)' }}>
            
      <ul className={`space-y-2 mt-6 w-full`}>
        {navItems.map((item) => (
          <li key={item.name} className={isCollapsed ? 'w-full' : ''}>
            <button
              onClick={() => onNavigate(item.page)}
              // Adjust button classes for collapsed state (just icons) vs open state (icon + text)
              className={`flex items-center w-full rounded-lg text-left font-medium transition-colors duration-200 hover:bg-opacity-80 ${currentPage === item.page ? 'shadow-md' : ''} ${isCollapsed ? 'justify-center p-3' : 'px-4 py-3'}`}
              style={{
                backgroundColor: currentPage === item.page ? 'var(--accent-color)' : 'transparent',
                color: currentPage === item.page ? 'var(--button-text-light)' : 'var(--text-secondary)',
                '--tw-bg-hover': currentPage === item.page ? 'var(--accent-color-hover)' : 'var(--input-background)',
                '--tw-text-hover': currentPage === item.page ? 'var(--button-text-light)' : 'var(--text-primary)',
              }}
            >
              {item.icon}
              {!isCollapsed && <span className="ml-3 whitespace-nowrap">{item.name}</span>}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;