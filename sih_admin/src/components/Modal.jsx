// src/components/Modal.jsx
import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
      <div
        className="relative rounded-xl shadow-2xl p-6 w-full max-w-2xl transform transition-transform duration-300 scale-95 md:scale-100"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: 'var(--card-background)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;