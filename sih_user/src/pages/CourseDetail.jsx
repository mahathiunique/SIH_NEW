// src/pages/CourseDetail.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "./Catalog";
import useTranslate from "../hooks/useTranslate";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === parseInt(id));
  const [completedModules, setCompletedModules] = useState(0);
  const [selectedModule, setSelectedModule] = useState(null);

  if (!course) return <p className="text-white p-6">{useTranslate("Course not found.")}</p>;

  const totalModules = course.modules.length;
  const progressPercent = Math.round((completedModules / totalModules) * 100);

  const handleModuleClick = (index) => {
    setSelectedModule(course.modules[index]);
    if (index + 1 > completedModules) {
      setCompletedModules(index + 1);
    }
  };

  // Translations
  const backLabel = useTranslate("Back");
  const progressLabel = useTranslate("Progress:");
  const modulesLabel = useTranslate("Modules");
  const startBtn = useTranslate("Start Course");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 text-white rounded-lg transition-colors"
          style={{ background: 'var(--primary)' }}
      >
        {backLabel}
      </button>

      {/* Course container */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          {/* Title & Description */}
          <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
          <p className="text-gray-700 mb-4">{course.desc}</p>

          {/* Course info */}
          <div className="flex gap-6 mb-4 text-gray-600">
            <p><strong>Level:</strong> {course.level}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Hours:</strong> {course.hours}</p>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">{progressLabel} {progressPercent}%</h3>
            <div className="w-full bg-gray-300 rounded-full h-5 mb-1">
              <div
                className="bg-green-500 h-5 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Modules list */}
            <h3 className="text-2xl font-semibold mb-4">{modulesLabel}</h3>
          <div className="space-y-3">
            {course.modules.map((mod, index) => (
              <div
                key={index}
                onClick={() => handleModuleClick(index)}
                className={`border-l-4 p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition
                  ${index < completedModules ? "border-green-600 bg-green-50" : "border-blue-600 bg-gray-50"}`}
              >
                <h4 className="font-semibold text-gray-800">{mod}</h4>
              </div>
            ))}
          </div>

          {/* Popup for selected module */}
          {selectedModule && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl relative">
                <button
                  className="absolute top-2 right-2 text-gray-700 font-bold text-2xl"
                  onClick={() => setSelectedModule(null)}
                >
                  &times;
                </button>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">{selectedModule}</h3>
                </div>
              </div>
            </div>
          )}

          {/* Start Course Button */}
          <div className="mt-6 text-center">
            <button className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                {startBtn}
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
