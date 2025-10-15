import React from "react";

export default function FiltersPanel() {
  return (
    <aside className="bg-white shadow p-4 rounded-lg w-72">
      <h3 className="font-bold mb-4 text-black text-lg">Filters</h3>

      {/* Course Duration */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2 text-black">Course Duration</h4>
        <div className="flex items-center mb-1">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span className="text-black text-sm">1-4 Weeks</span>
        </div>
        <div className="flex items-center mb-1">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span className="text-black text-sm">5-8 Weeks</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span className="text-black text-sm">9+ Weeks</span>
        </div>
      </div>

      {/* Level */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2 text-black">Level</h4>
        <div className="flex items-center mb-1">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span className="text-black text-sm">Beginner</span>
        </div>
        <div className="flex items-center mb-1">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span className="text-black text-sm">Intermediate</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span className="text-black text-sm">Advanced</span>
        </div>
      </div>

      {/* Labs */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2 text-black">Labs</h4>
        <div className="flex items-center mb-1">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span className="text-black text-sm">1-3 Labs</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span className="text-black text-sm">4+ Labs</span>
        </div>
      </div>

      {/* Mode */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2 text-black">Mode</h4>
        <div className="flex items-center mb-1">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span className="text-black text-sm">Self-Paced</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <span className="text-black text-sm">Instructor-Led</span>
        </div>
      </div>

      {/* Apply / Reset Buttons */}
      <div className="flex gap-2 mt-4">
        <button className="flex-1 py-2 rounded" style={{ background: 'var(--primary)', color: 'white' }}>
          Apply
        </button>
        <button className="flex-1 bg-gray-200 text-black py-2 rounded hover:bg-gray-300">
          Reset
        </button>
      </div>
    </aside>
  );
}
