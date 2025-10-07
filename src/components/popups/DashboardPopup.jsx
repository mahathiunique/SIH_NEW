import React from "react";
import courses from "../../data/courses";
import { Link } from "react-router-dom";


const DashboardPopup = ({ onClose }) => {
  const enrolled = courses.slice(0, 3); // sample enrolled items

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-2/3 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">📊 Your Dashboard</h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-gray-50 rounded">
            <div className="text-sm text-gray-500">Available Courses</div>
            <div className="text-2xl font-semibold">{courses.length}</div>
          </div>

          <div className="p-4 bg-gray-50 rounded">
            <div className="text-sm text-gray-500">Enrolled</div>
            <div className="text-2xl font-semibold">{enrolled.length}</div>
          </div>

          <div className="p-4 bg-gray-50 rounded">
            <div className="text-sm text-gray-500">Recommended</div>
            <div className="text-2xl font-semibold">3</div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2">Continue learning</h3>
        <div className="grid grid-cols-3 gap-4">
          {enrolled.map((c) => (
            <Link
              key={c.id}
              to={`/course/${c.id}`}
              onClick={onClose}
              className="flex flex-col bg-gray-50 rounded overflow-hidden shadow-sm hover:shadow-md"
            >
              <img src={c.image} alt={c.title} className="h-28 w-full object-cover" />
              <div className="p-3">
                <div className="font-semibold">{c.title}</div>
                <div className="text-sm text-gray-500">Resume</div>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-gray-600">
          Quick insights and reminders help you pick up where you left off. Click a course to continue.
        </p>
      </div>
    </div>
  );
};

export default DashboardPopup;
