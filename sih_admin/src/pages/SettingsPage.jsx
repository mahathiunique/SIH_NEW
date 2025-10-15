// src/pages/SettingsPage.jsx
import React from 'react';

const SettingsPage = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Settings</h2>
    <div className="rounded-xl shadow-xl p-8" style={{ backgroundColor: 'var(--card-background)' }}>
      <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>User Profile</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold" style={{ backgroundColor: 'var(--input-background)', color: 'var(--text-secondary)' }}>
            JM
          </div>
          <div>
            <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>Justin Mason</p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>justin.m@ncvet.gov.in</p>
          </div>
        </div>
        <button className="mt-4 px-6 py-2 border rounded-lg font-semibold transition-colors duration-300"
          style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)', '--tw-bg-hover': 'var(--input-background)' }}>
          Edit Profile
        </button>
      </div>
    </div>
  </div>
);

export default SettingsPage;