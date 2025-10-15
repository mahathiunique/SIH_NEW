import React, { useState, useEffect } from 'react';
import { FileText, Video, BookAudio, Info, Image, FileArchive } from 'lucide-react';

const fileTypeIcons = {
  pdf: <FileText size={18} />,
  ppt: <FileText size={18} />,
  docx: <FileText size={18} />,
  video: <Video size={18} />,
  bookaudio: <BookAudio size={18} />,
  document: <FileText size={18} />,
  scorm: <FileArchive size={18} />,
  text: <FileText size={18} />,
  image: <Image size={18} />,
};

const AssetsSubPage = ({ assets }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [assets]);

  if (isLoading) {
    return (
      <div className="space-y-4 animate-pulse">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="p-4 rounded-lg h-16 w-full" 
            style={{ backgroundColor: 'var(--input-background)' }}
          />
        ))}
      </div>
    );
  }

  if (!assets || assets.length === 0) {
    return (
      <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--input-background)' }}>
        <Info className="mx-auto mb-4" size={40} style={{ color: 'var(--text-tertiary)' }} />
        <p style={{ color: 'var(--text-secondary)' }}>No localized assets are available yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {assets.map((asset, index) => {
        const lowerType = (asset.type || '').toLowerCase();
        const Icon = fileTypeIcons[lowerType] || fileTypeIcons.text;
        const publicPath = `/download_pdfs/${asset.name}`;

        return (
          <div
            key={index}
            className="flex items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            style={{ backgroundColor: 'var(--input-background)' }}
          >
            {Icon}
            <span className="ml-4 flex-1" style={{ color: 'var(--text-primary)' }}>
              {asset.name}
            </span>
            <a
              href={publicPath}
              download
              className="px-4 py-2 text-sm font-semibold rounded-md transition-colors"
              style={{
                backgroundColor: 'var(--status-review-bg)',
                color: 'var(--status-review-text)',
                textDecoration: 'none',
              }}
            >
              Download
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default AssetsSubPage;
