// src/pages/MyCoursesDashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { combinedCourses } from "./Catalog";
import useTranslate from "../hooks/useTranslate";
import Translate from "../components/Translate";

// Show only first 4 courses
const displayedCourses = combinedCourses.slice(0, 4);

export default function MyCoursesDashboard() {
  const navigate = useNavigate();

  const handleContinue = (courseId) => {
    // Navigate to the course detail page
    navigate(`/mycourse/${courseId}`);
  };

  const title = useTranslate("My Courses");
  const continueLabel = useTranslate("Continue Learning");

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-black">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {displayedCourses.map((course) => {
          const progress = course.progress || 0;

          return (
            <div key={course.id} className="bg-white border rounded-lg p-4 shadow-lg">
              <img
                src={course.img}
                alt={course.title}
                className="mb-4 w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mb-2"><Translate text={course.title} /></h2>
              <p className="text-gray-600 mb-4"><Translate text={course.desc || course.description || ""} /></p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 h-3 rounded-full mb-2">
                <div
                  className="bg-green-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">{progress}% {useTranslate("completed")}</p>

              <button
                onClick={() => handleContinue(course.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
              >
                {continueLabel}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
