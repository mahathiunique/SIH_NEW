// src/pages/CourseDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { PlayCircle } from "lucide-react";
import { courses } from "./Catalog";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <div className="p-6 text-center text-gray-600">Course not found.</div>;
  }

  // Dummy modules — you can fetch from backend later
  const modules = [
    { id: 1, title: "Introduction to Sustainable Agriculture", duration: "8 mins" },
    { id: 2, title: "Soil Health and Fertility", duration: "12 mins" },
    { id: 3, title: "Water Management Techniques", duration: "10 mins" },
    { id: 4, title: "Crop Rotation and Diversity", duration: "14 mins" },
    { id: 5, title: "Sustainable Practices Summary", duration: "6 mins" },
  ];

  const progress = 0; // dummy, later you can calculate based on completed modules

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Banner */}
      <div className="relative">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{course.title}</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto p-6">
        {/* Progress Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Your Progress</h2>
          <div className="w-full bg-gray-300 h-4 rounded-full">
            <div
              className="bg-green-500 h-4 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-1">{progress}% completed</p>
        </div>

        {/* Course Description */}
        <div className="bg-white p-5 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-bold mb-3">About this course</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            This course introduces the fundamentals of <strong>Sustainable Agriculture</strong>, 
            exploring eco-friendly methods of farming that maintain soil fertility, conserve water, 
            and ensure long-term agricultural productivity. You’ll learn practical techniques and 
            strategies to apply sustainable practices in real-world farming.
          </p>

          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Understand the principles of sustainable farming</li>
            <li>Learn soil and water conservation techniques</li>
            <li>Explore crop diversity and rotation methods</li>
            <li>Apply eco-friendly practices in agriculture</li>
          </ul>
        </div>

        {/* Video Section */}
        <div className="bg-white p-5 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-bold mb-3">Lesson Preview</h2>
          <div className="relative w-full h-64 bg-black rounded-lg flex items-center justify-center text-white">
            <PlayCircle size={64} className="opacity-70 hover:opacity-100 cursor-pointer" />
            <span className="absolute bottom-3 right-3 bg-gray-800 px-3 py-1 rounded text-sm">
              08:00
            </span>
          </div>
        </div>

        {/* Modules Section */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Course Modules</h2>
          <div className="space-y-3">
            {modules.map((module) => (
              <div
                key={module.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <PlayCircle size={20} className="text-green-600" />
                  <span className="font-medium">{module.title}</span>
                </div>
                <span className="text-sm text-gray-600">{module.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
