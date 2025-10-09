import React, { useState } from "react";
import autoBanner from "../assets/automobile.jpg"; // Banner image

export default function MyCourses() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [completedModules, setCompletedModules] = useState(0); // Track completed modules

  // Module data (no videos for GitHub size limit)
  const modules = [
    {
      id: 1,
      title: "Module 1: Introduction to Automotive Systems",
      description:
        "Overview of vehicle electrical, electronic, and mechanical systems.",
    },
    {
      id: 2,
      title: "Module 2: Electrical Systems & Diagnostics",
      description:
        "Learn to troubleshoot and repair vehicle electrical circuits and components.",
    },
    {
      id: 3,
      title: "Module 3: Air Conditioning Systems",
      description:
        "Hands-on training in vehicle AC systems and maintenance procedures.",
    },
    {
      id: 4,
      title: "Module 4: Practical Workshops & Assessment",
      description: "Real-world repair tasks and NCVET assessment preparation.",
    },
  ];

  const totalModules = modules.length;
  const progressPercent = Math.round((completedModules / totalModules) * 100);

  // Handle module click: open popup + mark as completed
  const handleModuleClick = (moduleIndex) => {
    setSelectedModule(modules[moduleIndex]);
    if (moduleIndex + 1 > completedModules) {
      setCompletedModules(moduleIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* Banner */}
      <div
        className="relative h-64 md:h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${autoBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2">
            Diploma in Automotive Repair
          </h1>
          <p className="text-md md:text-lg">
            Learn automotive electrical, electronic, and air conditioning systems with hands-on practical training.
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-6xl mx-auto p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Progress</h2>
        <div className="w-full bg-gray-300 rounded-full h-5 mb-1">
          <div
            className="bg-green-500 h-5 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-gray-700">{progressPercent}% completed</p>
      </div>

      {/* Modules */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Course Modules</h2>
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className={`border-l-4 p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition
                  ${index < completedModules ? "border-green-600 bg-green-50" : "border-blue-600 bg-gray-50"}`}
                onClick={() => handleModuleClick(index)}
              >
                <h3 className="font-semibold text-gray-800">{module.title}</h3>
                <p className="text-gray-600">{module.description}</p>
              </div>
            ))}
          </div>
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
                <h3 className="font-bold text-gray-800">{selectedModule.title}</h3>
                <p className="text-gray-600">{selectedModule.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
