import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "./Catalog";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === parseInt(id));

  // Temporary progress state (0 to 100)
  const [progress, setProgress] = useState(40); // example: 40% completed

  if (!course) return <p className="text-black p-6">Course not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
      >
        &larr; Back to Catalog
      </button>

      {/* Banner */}
      <div
        className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg mb-6"
        style={{
          backgroundImage: `url(${course.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">{course.title}</h1>
        </div>
      </div>

      {/* Course Info & Progress */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-6">
        <p className="text-gray-700 mb-4">{course.desc}</p>
        <div className="flex flex-wrap gap-6 text-gray-800 mb-4">
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
            Level: {course.level}
          </div>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
            Duration: {course.duration}
          </div>
          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
            Hours: {course.hours}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Progress</label>
          <div className="w-full bg-gray-200 h-4 rounded-full">
            <div
              className="bg-blue-600 h-4 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-right text-gray-600 mt-1 font-medium">{progress}% Completed</p>
        </div>
      </div>

      {/* Modules */}
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Course Modules</h2>
        <div className="space-y-4">
          {course.modules.map((mod, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-4 flex items-center justify-between hover:bg-gray-50 transition"
            >
              <span className="font-medium text-gray-800">{mod}</span>
              <span className="text-sm text-gray-500">Module {idx + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Start Course Button */}
      <div className="max-w-5xl mx-auto text-center">
        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          onClick={() => {
            const nextProgress = Math.min(progress + 10, 100);
            setProgress(nextProgress); // simulate progress increment
          }}
        >
          Start / Continue Course
        </button>
      </div>
    </div>
  );
}
