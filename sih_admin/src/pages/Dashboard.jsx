// src/pages/Dashboard.jsx
import React, { useState, useEffect, useRef } from 'react';
// Import all necessary icons
import {
    Plus, Search, ChevronDown, CheckCircle, Loader2, Info, AlertCircle, TrendingUp, Package, Zap, Book,
    Settings, BarChart3, Clock, Globe, HeartPulse, User, Database, Aperture, Bell
} from 'lucide-react';
import SkeletonLoader from '../components/SkeletonLoader.jsx';
import { MOCK_LANGUAGES } from '../data/mockData.js';

const mockGenericAlerts = [
    { type: 'warning', message: 'Project "Plumbing 201" halted — missing domain terminology.', action: 'Review Terms', color: 'var(--status-review-text)', icon: AlertCircle },
    { type: 'info', message: '3 files pending human review in the Quality Studio.', action: 'Open Review Studio', color: 'var(--status-in-progress-text)', icon: Info },
];

const Dashboard = ({ onNavigate, onSelectProject, projects, searchFilter }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(searchFilter || '');
    const [sortKey, setSortKey] = useState('uploadedAt');
    const [currentSortOrder, setCurrentSortOrder] = useState('desc');
    const [currentPage, setCurrentPage] = useState(1);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const itemsPerPage = 5;
    const notificationRef = useRef(null);
    const attentionProjects = projects.filter(p => p.status === 'review-needed' || p.status === 'failed');
    const totalAlerts = mockGenericAlerts.length + attentionProjects.length;

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, [projects]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setIsNotificationsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [notificationRef]);

    const handleSort = (key) => {
        if (sortKey === key) {
            setCurrentSortOrder(currentSortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setCurrentSortOrder('asc');
        }
    };

    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProjects = filteredProjects.sort((a, b) => {
        if (!sortKey) return 0;

        const aValue = a?.[sortKey] ?? '';
        const bValue = b?.[sortKey] ?? '';

        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return currentSortOrder === 'asc'
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
        }

        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return currentSortOrder === 'asc'
                ? aValue - bValue
                : bValue - aValue;
        }

        return 0;
    });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProjects = sortedProjects.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);
    const truncateWords = (text, maxWords) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    };

    return (
        <div className="p-8">
            {/* ====== ✨ MODIFIED HEADER SECTION ====== */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>Dashboard</h1>
                    <p className="text-md mt-1" style={{ color: 'var(--text-secondary)' }}>
                        Welcome back, here's a snapshot of your localization ecosystem.
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => onNavigate('new-project')}
                        className="flex items-center justify-center px-5 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2"
                        style={{
                            backgroundColor: 'var(--accent-color)',
                            color: 'var(--button-text-light)',
                            '--tw-ring-color': 'var(--accent-color)',
                            '--tw-ring-offset-color': 'var(--background)'
                        }}
                    >
                        <Plus size={20} className="mr-2" />
                        <span>New Project</span>
                    </button>
                </div>
            </div>
            {/* ===================================== */}

            {/* Main 2-Column Grid */}
            <div className="flex flex-col xl:flex-row gap-6 relative">
                {/* Main Content (Left) */}
                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Active Project Status & Control</h3>
                    <div className="rounded-xl shadow-xl p-6" style={{ backgroundColor: 'var(--card-background)' }}>
                        {/* Search and Sort Section */}
                        <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0">
                            <div className="relative w-full md:w-1/2">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-tertiary)' }} size={20} />
                                <input
                                    type="text"
                                    placeholder="Search by project name..."
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
                                <button
                                    onClick={() => handleSort('uploadedAt')}
                                    className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200`}
                                    style={{
                                        backgroundColor: sortKey === 'uploadedAt' ? 'var(--input-background)' : 'transparent',
                                        color: sortKey === 'uploadedAt' ? 'var(--text-primary)' : 'var(--text-secondary)',
                                    }}
                                >
                                    <span>Date</span>
                                    <ChevronDown size={16} className={`transform transition-transform ${currentSortOrder === 'asc' ? '' : 'rotate-180'}`} />
                                </button>
                                <button
                                    onClick={() => handleSort('status')}
                                    className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200`}
                                    style={{
                                        backgroundColor: sortKey === 'status' ? 'var(--input-background)' : 'transparent',
                                        color: sortKey === 'status' ? 'var(--text-primary)' : 'var(--text-secondary)',
                                    }}
                                >
                                    <span>Status</span>
                                    <ChevronDown size={16} className={`transform transition-transform ${currentSortOrder === 'asc' ? '' : 'rotate-180'}`} />
                                </button>
                            </div>
                        </div>

                        {/* Project List (Table) */}
                        {isLoading ? (
                            <SkeletonLoader />
                        ) : filteredProjects.length === 0 ? (
                            <div className="text-center p-12 rounded-lg" style={{ backgroundColor: 'var(--input-background)' }}>
                                <Info className="mx-auto mb-4" style={{ color: 'var(--text-tertiary)' }} size={48} />
                                <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>No Active Projects Found</h3>
                                <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>
                                    Start a new project or check your search term.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {/* Table Header */}
                                <div className="hidden md:grid grid-cols-[3fr_2fr_120px_120px] gap-4 px-6 py-3 text-xs font-semibold uppercase rounded-t-lg" style={{ color: 'var(--text-tertiary)', backgroundColor: 'var(--input-background)' }}>
                                    <span>Project Name</span>
                                    <span>Target Languages</span>
                                    <span>Last Updated</span>
                                    <span className="text-right">Status</span>
                                </div>

                                {/* Project Rows */}
                                {paginatedProjects.map((project) => (
                                    <button
                                        key={project.id}
                                        onClick={() => onSelectProject(project.id)}
                                        className="w-full text-left p-4 rounded-lg border transition-colors duration-200 block shadow-sm hover:ring-2 hover:ring-offset-2 hover:ring-opacity-50"
                                        style={{
                                            backgroundColor: 'var(--card-background)',
                                            borderColor: 'var(--border-color)',
                                            '--tw-ring-color': 'var(--accent-color)',
                                        }}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr_120px_120px] gap-4 items-center h-full">
                                            {/* Project Name */}
                                            <div className="truncate">
                                                <h3 className="text-base font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
                                                    {truncateWords(project.name, 3)}
                                                </h3>
                                                <p className="text-xs mt-1 truncate" style={{ color: 'var(--text-secondary)' }}>
                                                    Source: {project.sourceLanguage ? project.sourceLanguage.toUpperCase() : 'N/A'}
                                                </p>
                                            </div>

                                            {/* Target Languages */}
                                            <div className="hidden md:block max-w-full truncate">
                                                <p className="text-sm font-medium truncate" style={{ color: 'var(--text-secondary)' }}>
                                                    {Array.isArray(project.targetLanguages) && project.targetLanguages.length > 0
                                                        ? truncateWords(project.targetLanguages.map(lang => typeof lang === 'string' ? lang.toUpperCase() : '').join(', '), 5)
                                                        : <span className="text-gray-400 italic">No target languages</span>
                                                    }
                                                 </p>
                                            </div>

                                            {/* Last Updated */}
                                            <div className="hidden md:block w-32 truncate">
                                                <p className="text-sm truncate" style={{ color: 'var(--text-tertiary)' }}>
                                                    {project.uploadedAt}
                                                </p>
                                            </div>

                                            {/* Status */}
                                            <div className="flex flex-col items-start md:items-end w-32 md:h-full md:justify-center">
                                                {project.status === 'completed' && (
                                                    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: 'var(--status-completed-bg)', color: 'var(--status-completed-text)' }}>
                                                        <CheckCircle size={14} className="mr-1" /> Completed
                                                    </span>
                                                )}
                                                {project.status === 'in-progress' && (
                                                    <div className="flex flex-col items-start md:items-end">
                                                        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full mb-1" style={{ backgroundColor: 'var(--status-in-progress-bg)', color: 'var(--status-in-progress-text)' }}>
                                                            <Loader2 size={14} className="mr-1 animate-spin" /> In Progress
                                                        </span>
                                                        <div className="w-24 rounded-full h-1.5" style={{ backgroundColor: 'var(--border-color)' }}>
                                                            <div className="h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-color)', width: `${project.progress}%` }}></div>
                                                        </div>
                                                        <span className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>{project.progress}%</span>
                                                    </div>
                                                )}
                                                {project.status === 'review-needed' && (
                                                    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: 'var(--status-review-bg)', color: 'var(--status-review-text)' }}>
                                                        <Info size={14} className="mr-1" /> Review Needed
                                                    </span>
                                                )}
                                                {project.status === 'failed' && (
                                                    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: 'var(--status-failed-bg)', color: 'var(--status-failed-text)' }}>
                                                        <AlertCircle size={14} className="mr-1" /> Failed
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                                {/* Pagination */}
                                <div className="flex justify-center items-center mt-6 space-x-2">
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="px-4 py-2 rounded-lg disabled:opacity-50"
                                        style={{ backgroundColor: 'var(--input-background)', color: 'var(--text-secondary)' }}
                                    >
                                        Previous
                                    </button>
                                    <span style={{ color: 'var(--text-secondary)' }}>Page {currentPage} of {totalPages}</span>
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="px-4 py-2 rounded-lg disabled:opacity-50"
                                        style={{ backgroundColor: 'var(--input-background)', color: 'var(--text-secondary)' }}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* Right Sidebar */}

            </div>
        </div>
    );
};

export default Dashboard;