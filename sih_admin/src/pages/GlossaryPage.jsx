// src/pages/GlossaryPage.jsx
import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Plus } from 'lucide-react'; // Import Plus icon
import { MOCK_GLOSSARY } from '../data/mockData.js';

const GlossaryPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('term');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredGlossary = MOCK_GLOSSARY.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sector.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="p-8">
      {/* NEW: Header with Action Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>Domain Glossary</h2>
        <button
          className="px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center shadow-lg"
          style={{ backgroundColor: 'var(--accent-color)', color: 'var(--button-text-light)', '--tw-bg-hover': 'var(--accent-color-hover)' }}
        >
          <Plus size={20} className="mr-2" /> Add New Term
        </button>
      </div>

      <div className="rounded-xl shadow-xl p-6" style={{ backgroundColor: 'var(--card-background)' }}>
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-tertiary)' }} size={20} />
            <input
              type="text"
              placeholder="Search terms or sectors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
              style={{
                backgroundColor: 'var(--input-background)',
                color: 'var(--text-primary)',
                '--tw-ring-color': 'var(--accent-color)',
              }}
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1 rounded-md text-sm focus:ring-2 focus:border-transparent"
              style={{ backgroundColor: 'var(--input-background)', color: 'var(--text-secondary)', '--tw-ring-color': 'var(--accent-color)' }}
            >
              <option value="term">Term</option>
              <option value="sector">Sector</option>
              <option value="status">Status</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="p-1 rounded-md transition-colors duration-200"
              style={{ color: 'var(--text-secondary)', '--tw-bg-hover': 'var(--input-background)' }}
            >
              <ChevronDown size={16} className={`transform transition-transform ${sortOrder === 'asc' ? '' : 'rotate-180'}`} />
            </button>
          </div>
        </div>
        {isLoading ? (
          <div className="animate-pulse space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 rounded-lg" style={{ backgroundColor: 'var(--input-background)' }}></div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto" style={{ color: 'var(--text-primary)' }}>
              <thead className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Term</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Translation (Hindi)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Sector</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Status</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
                {filteredGlossary.map((item, index) => (
                  <tr 
                    key={index} 
                    className="transition-colors duration-200 cursor-pointer hover:shadow-md" 
                    // Enhanced hover style for a clearer admin-row look
                    style={{ backgroundColor: 'var(--card-background)', '--tw-bg-hover': 'var(--card-background-hover)' }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item.term}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: 'var(--text-secondary)' }}>{item.translation.hi}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: 'var(--text-secondary)' }}>{item.sector}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}
                        style={{ backgroundColor: `var(--status-${item.status === 'Approved' ? 'completed' : 'in-progress'}-bg)`, color: `var(--status-${item.status === 'Approved' ? 'completed' : 'in-progress'}-text)` }}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlossaryPage;