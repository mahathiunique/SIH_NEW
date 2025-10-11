// src/components/popups/MyCoursesPopup.jsx
import React from "react";
import courses from "../../data/courses";
import { Link } from "react-router-dom";

const MyCoursesPopup = ({ onClose }) => {
  const myCourses = courses.filter((c) => typeof c.progress === "number" && c.progress > 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-3/4 shadow-lg relative max-h-[80vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl">
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">📚 My Courses</h2>

        {myCourses.length === 0 ? (
          <p className="text-gray-600">You haven’t enrolled in any courses yet.</p>
        ) : (
          <div className="space-y-4">
            {myCourses.map((c) => (
              <div key={c.id} className="flex items-center gap-4 bg-gray-50 p-4 rounded shadow-sm">
                <img src={c.image} alt={c.title} className="w-28 h-20 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold text-lg">{c.title}</div>
                  <div className="text-sm text-gray-600">{c.duration}</div>
                  <div className="w-full bg-gray-200 h-3 rounded mt-2 overflow-hidden">
                    <div className="bg-blue-600 h-3" style={{ width: `${c.progress}%` }} />
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Progress: {c.progress}%</div>
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    to={`/mycourse/${c.id}`}
                    onClick={onClose}
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Resume
                  </Link>
                  <button onClick={() => alert("Download not implemented")} className="text-sm bg-gray-200 px-3 py-1 rounded">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCoursesPopup;
