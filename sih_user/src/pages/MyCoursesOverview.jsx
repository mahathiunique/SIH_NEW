// src/pages/MyCoursesOverview.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Book } from "lucide-react";
import { combinedCourses } from "./Catalog";
import useTranslate from "../hooks/useTranslate";
import Translate from "../components/Translate";

// Limit to only 4 courses
const enrolledCourses = combinedCourses.slice(0, 4);

export default function MyCoursesOverview() {
  const title = useTranslate("My Enrolled Courses");
  const notEnrolled = useTranslate("You are not enrolled in any courses yet.");

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      {enrolledCourses.length === 0 ? (
        <p className="text-gray-600">{notEnrolled}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {enrolledCourses.map((course) => {
            const progress = course.progress;
            return (
              <Link
                key={course.id}
                to={`/mycourse/${course.id}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Book size={20} /> <Translate text={course.title} />
                  </h3>

                  {/* Small progress bar */}
                  <div className="w-full bg-gray-300 h-3 rounded-full">
                    <div
                      className="bg-green-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{progress}% {useTranslate("completed")}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
