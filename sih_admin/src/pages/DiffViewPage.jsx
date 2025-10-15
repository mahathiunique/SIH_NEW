import React, { useState, useRef, useMemo } from 'react';
import { Settings, Edit } from 'lucide-react';
import { MOCK_GLOSSARY } from '../data/mockData.js';

export default function PDFDiffViewer({ project, glossary = MOCK_GLOSSARY, onNavigate = () => {} }) {
  const [syncScroll, setSyncScroll] = useState(true);
  const leftPdfRef = useRef(null);
  const rightPdfRef = useRef(null);

  // Build simple highlight lists from glossary: left (source terms), right (translations)
  const highlights = useMemo(() => {
    const left = [];
    const right = [];
    (glossary || []).forEach((g) => {
      if (g.term) left.push(g.term.toLowerCase());
      const trans = g.translation || {};
      // pick any translation values as right highlights
      Object.values(trans).forEach(v => {
        if (typeof v === 'string') right.push(v);
      });
    });
    return { left, right };
  }, [glossary]);

  const handleScroll = (source) => {
    if (!syncScroll) return;
    
    const sourceRef = source === 'left' ? leftPdfRef : rightPdfRef;
    const targetRef = source === 'left' ? rightPdfRef : leftPdfRef;
    
    if (sourceRef.current && targetRef.current) {
      const scrollPercentage = sourceRef.current.scrollTop / 
        (sourceRef.current.scrollHeight - sourceRef.current.clientHeight);
      
      targetRef.current.scrollTop = scrollPercentage * 
        (targetRef.current.scrollHeight - targetRef.current.clientHeight);
    }
  };

  // Helper to highlight phrases in a block of JSX text using glossary arrays
  const highlightText = (text, which = 'left') => {
    if (!text) return null;
    const list = which === 'left' ? highlights.left : highlights.right;
    // simple replace: split by word boundaries and wrap if matches a highlight (case-insensitive)
    const parts = text.split(new RegExp(`(${list.map(s => s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')})`, 'gi'));
    return parts.map((part, idx) => {
      if (list.find(l => l.toLowerCase() === part.toLowerCase())) {
        return <span key={idx} className="bg-yellow-200">{part}</span>;
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    // Note: Header and Sidebar are rendered by the parent (Sih) so here we only render the content area
    <div className="p-8">
      <div className="bg-gray-100 px-6 py-4 flex items-center gap-4 rounded-lg mb-6">
        <button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <Settings className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={() => onNavigate && onNavigate('glossary')}
          className="px-6 py-2 bg-green-100 text-green-800 border border-green-300 rounded-lg hover:bg-green-200 font-medium"
        >
          Add original to Glossary
        </button>
        <button className="px-6 py-2 bg-red-100 text-red-800 border border-red-300 rounded-lg hover:bg-red-200 font-medium">
          Re-Check
        </button>
        <div className="ml-auto">
          <button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Edit className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden" style={{ minHeight: '60vh' }}>
        {/* Left PDF (English) */}
        <div className="flex-1 flex flex-col border-r border-gray-300">
          <div className="bg-white px-4 py-2 border-b border-gray-300">
            <span className="text-sm font-medium text-gray-700">{project?.assets?.find(a=>a.type==='pdf' && a.name?.includes('_En'))?.name || 'Original (EN).pdf'}</span>
          </div>
          <div 
            ref={leftPdfRef}
            onScroll={() => handleScroll('left')}
            className="flex-1 overflow-auto bg-white p-8"
          >
            <div className="max-w-3xl">
              <h2 className="text-lg font-bold mb-4">{project?.name || 'Source Document'}</h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <strong>1. Introduction to Welding: The Art of Joining Metals</strong>
                  <p className="mt-2">
                    {highlightText(`Welding is a critical fabrication process that joins materials, usually metals or thermoplastics, by using high heat to melt the parts together and allowing them to cool, causing fusion. It is more than just a technical skill; it is an art that has shaped our modern world. From the bridges that connect our cities to the towering skyscrapers in our cities and the cars we drive, to the ships that cross our oceans and the pipelines that carry essential resources, welding is fundamental. This course is designed to provide you with the foundational knowledge and practical skills required to embark on a career in this dynamic and rewarding field. You will learn the science behind the processes, the art of executing a perfect weld, and the discipline of maintaining a safe working environment.`,'left')}
                  </p>
                </div>

                <div>
                  <strong>2. Core Welding Processes: Techniques and Applications</strong>
                  <p className="mt-2">
                    {highlightText('Understanding the primary welding methods is key to becoming a versatile welder. Each technique has unique characteristics, suitable for specific materials and applications.','left')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right PDF (Target) */}
        <div className="flex-1 flex flex-col">
          <div className="bg-white px-4 py-2 border-b border-gray-300">
            <span className="text-sm font-medium text-gray-700">{project?.assets?.find(a=>a.type==='pdf' && !a.name?.includes('_En'))?.name || 'Translated (Target).pdf'}</span>
          </div>
          <div 
            ref={rightPdfRef}
            onScroll={() => handleScroll('right')}
            className="flex-1 overflow-auto bg-white p-8"
          >
            <div className="max-w-3xl">
              <h2 className="text-lg font-bold mb-4">{project?.name ? `${project.name} — Translated` : 'Translated Document'}</h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <strong>1. वेल्डिंग का परिचय: धातुओं को जोड़ने की कला</strong>
                  <p className="mt-2">
                    {highlightText(`वेल्डिंग एक महत्वपूर्ण निर्माण प्रक्रिया है जो सामग्री, आमतौर पर धातुओं या थर्मोप्लास्टिक्स को, उच्च गर्मी का उपयोग करके भागों को पिघलाकर और उन्हें ठंडा होने देकर जोड़ती है, जिससे संलयन होता है। यह सिर्फ एक तकनीकी कौशल से अधिक है; यह एक कला है जो हमारे शहरों की आधुनिक दुनिया को आकार देती है।`, 'right')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}