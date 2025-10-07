import React from "react";
import { X } from "lucide-react";

export default function FiltersPopup({ isOpen, onClose }) {
  if (!isOpen) return null; // Don't render if closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-6 w-80 shadow-lg relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Filter Courses</h2>
        <div className="space-y-3">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Category</label>
            <select className="w-full border border-gray-300 rounded-lg p-2 text-gray-800">
              <option>Automotive</option>
              <option>IT & Digital Skills</option>
              <option>Hospitality</option>
              <option>Trades & Crafts</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Level</label>
            <select className="w-full border border-gray-300 rounded-lg p-2 text-gray-800">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
