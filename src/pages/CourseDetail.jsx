// src/pages/CourseDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "./Catalog"; // import course data

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find course based on ID
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) return <p className="text-white p-6">Course not found.</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
      >
        Back
      </button>

      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <img src={course.img} alt={course.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
          <p className="text-gray-300 mb-4">{course.desc}</p>
          <div className="flex gap-6 mb-4">
            <p><strong>Level:</strong> {course.level}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Course Hours:</strong> {course.hours}</p>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Modules:</h3>
          <ul className="list-disc list-inside">
            {course.modules.map((mod, index) => (
              <li key={index}>{mod}</li>
            ))}
          </ul>

          <div className="mt-6">
            <button className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Start Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
