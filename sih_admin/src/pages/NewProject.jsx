// src/pages/NewProject.jsx
import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { MOCK_LANGUAGES } from '../data/mockData.js';

const NewProject = ({ onNavigate, onStartLocalization }) => {
  const [file, setFile] = useState(null);
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLangs, setTargetLangs] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleStart = () => {
    if (file && sourceLang && targetLangs.length > 0) {
      onStartLocalization({
        name: file.name,
        sourceLanguage: sourceLang,
        targetLanguages: targetLangs,
        type: file.name.split('.').pop(),
      });
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Start a New Localization Project</h2>
      <div className="rounded-xl shadow-xl p-8" style={{ backgroundColor: 'var(--card-background)' }}>
        <div className="space-y-6">
          <div className="p-6 border-2 border-dashed rounded-xl text-center" style={{ borderColor: 'var(--border-color)' }}>
            <Upload size={48} style={{ color: 'var(--accent-color)' }} className="mx-auto mb-4" />
            <label htmlFor="file-upload" className="block text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
              <span className="font-semibold cursor-pointer" style={{ color: 'var(--accent-color)' }}>
                Click to upload
              </span> or drag and drop your file.
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            {file && (
              <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                Selected file: <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{file.name}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Source Language</label>
            <select
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
              className="mt-1 block w-full rounded-md shadow-sm p-2 focus:ring-2 focus:border-transparent"
              style={{
                borderColor: 'var(--border-color)',
                backgroundColor: 'var(--input-background)',
                color: 'var(--text-primary)',
                '--tw-ring-color': 'var(--accent-color)',
              }}
            >
              {MOCK_LANGUAGES.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Target Languages</label>
            <div className="mt-1 grid grid-cols-2 md:grid-cols-4 gap-2">
              {MOCK_LANGUAGES.filter(lang => lang.code !== sourceLang).map(lang => (
                <div key={lang.code} className="flex items-center">
                  <input
                    id={`lang-${lang.code}`}
                    type="checkbox"
                    checked={targetLangs.includes(lang.code)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setTargetLangs([...targetLangs, lang.code]);
                      } else {
                        setTargetLangs(targetLangs.filter(l => l !== lang.code));
                      }
                    }}
                    className="h-4 w-4 rounded focus:ring-2"
                    style={{ borderColor: 'var(--border-color)', color: 'var(--accent-color)', '--tw-ring-color': 'var(--accent-color)' }}
                  />
                  <label htmlFor={`lang-${lang.code}`} className="ml-2 block text-sm" style={{ color: 'var(--text-primary)' }}>
                    {lang.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Domain/Topic</label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="mt-1 block w-full rounded-md shadow-sm p-2 focus:ring-2 focus:border-transparent"
              style={{
                borderColor: 'var(--border-color)',
                backgroundColor: 'var(--input-background)',
                color: 'var(--text-primary)',
                '--tw-ring-color': 'var(--accent-color)',
              }}
            >
              <option value="">Select a topic (for terminology)</option>
              <option value="automotive">Automotive</option>
              <option value="healthcare">Healthcare</option>
              <option value="retail">Retail</option>
              <option value="electronics">Electronics</option>
            </select>
            <p className="mt-2 text-xs" style={{ color: 'var(--text-tertiary)' }}>
              This helps the AI use the correct domain-specific vocabulary.
            </p>
          </div>
        </div>
        <button
          onClick={handleStart}
          disabled={!file || targetLangs.length === 0}
          className="mt-8 w-full px-6 py-3 rounded-lg font-semibold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          style={{ backgroundColor: 'var(--accent-color)', color: 'var(--button-text-light)', '--tw-bg-hover': 'var(--accent-color-hover)' }}
        >
          Start Localization
        </button>
      </div>
    </div>
  );
};

export default NewProject;