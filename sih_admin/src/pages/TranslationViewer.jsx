import React, { useMemo, useState } from 'react';
import { MOCK_GLOSSARY } from '../data/mockData.js';

const HoverMenu = ({ onAddOriginal, onFlag }) => (
  <div className="absolute z-20 bg-white dark:bg-slate-800 p-2 rounded shadow" style={{ minWidth: 180 }}>
    <button onClick={onAddOriginal} className="block w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-slate-700">Add as original word</button>
    <button onClick={onFlag} className="block w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-slate-700">Flag issue</button>
  </div>
);

const TranslationViewer = ({ project, targetLanguage = 'hi', onNavigate }) => {
  // simple mocked translated text from assets or generated
  const sampleText = project?.assets?.find(a => a.type === 'text')?.name
    ? `Sample translated content for ${project.name} in ${targetLanguage}`
    : `Translated (${targetLanguage}): ${project?.name} - example transcript showing technical terms like Valve and Pipefitting.`;

  const glossaryMap = useMemo(() => {
    const map = {};
    MOCK_GLOSSARY.forEach(item => {
      const t = item.translation?.[targetLanguage];
      if (t) map[item.term.toLowerCase()] = { term: item.term, translation: t };
    });
    return map;
  }, [targetLanguage]);

  // Split words and mark glossary matches (case-insensitive simple match)
  const tokens = useMemo(() => {
    const words = sampleText.split(/(\s+|[^\w\u00C0-\u024F]+)/);
    return words.map((w) => {
      const key = w.replace(/[^\w]/g, '').toLowerCase();
      if (glossaryMap[key]) return { text: w, glossary: glossaryMap[key] };
      return { text: w };
    });
  }, [sampleText, glossaryMap]);

  const [hoverIndex, setHoverIndex] = useState(null);

  const handleAddOriginal = (term) => {
    // simple flow: navigate to glossary page with search param via onNavigate
    if (onNavigate) onNavigate('glossary');
    // In a real app we'd pre-fill a modal for adding original word
    console.log('Add original for', term);
  };

  const handleFlag = (term) => {
    // flagging could create an activity log entry - we'll navigate to activity log
    if (onNavigate) onNavigate('project-details');
    console.log('Flag issue for', term);
  };

  return (
    <div className="p-8">
      <button onClick={() => onNavigate && onNavigate('project-details')} className="mb-4 text-sm underline" style={{ color: 'var(--text-secondary)' }}>&larr; Back</button>
      <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--card-background)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{project?.name} — {targetLanguage.toUpperCase()}</h2>

        <div className="prose max-w-none" style={{ color: 'var(--text-secondary)' }}>
          {tokens.map((t, idx) => (
            <span key={idx} className="relative inline-block">
              {t.glossary ? (
                <span
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className="px-0.5 rounded cursor-pointer"
                  style={{ backgroundColor: 'rgba(250, 204, 21, 0.08)', color: 'var(--text-primary)' }}
                >
                  {t.text}
                </span>
              ) : (
                <span>{t.text}</span>
              )}

              {hoverIndex === idx && t.glossary && (
                <div className="absolute top-full left-0 mt-2">
                  <HoverMenu onAddOriginal={() => handleAddOriginal(t.glossary)} onFlag={() => handleFlag(t.glossary)} />
                </div>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TranslationViewer;
