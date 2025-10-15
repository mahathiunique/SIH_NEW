// src/components/FiltersPopup.jsx
import React from "react";

export default function FiltersPopup({
  isOpen,
  onClose,
  tempCategory,
  setTempCategory,
  tempLevel,
  setTempLevel,
  onApply,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-6 w-80 shadow-lg relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Filter Courses</h2>
        <div className="space-y-3">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Category</label>
            <select
              value={tempCategory}
              onChange={(e) => setTempCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-800"
            >
              <option value="">All Categories</option>
              <option value="Automotive">Automotive</option>
              <option value="IT & Digital Skills">IT & Digital Skills</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Trades & Crafts">Trades & Crafts</option>
              <option value="Agriculture">Agriculture</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Level</label>
            <select
              value={tempLevel}
              onChange={(e) => setTempLevel(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-800"
            >
              <option value="">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <button
            onClick={onApply}
            className="w-full py-2 rounded-lg font-semibold transition-colors"
            style={{ background: 'var(--primary)', color: 'white' }}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
