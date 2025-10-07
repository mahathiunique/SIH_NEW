<<<<<<< HEAD
import React from "react";

// Import a sample image for the course banner
import autoBanner from "../assets/automobile.jpg"; // your asset

export default function CoursePage() {
=======
import React, { useState } from "react";

// Import banner and module videos
import autoBanner from "../assets/automobile.jpg";
import module1Video from "../assets/module1.mp4";
import module2Video from "../assets/module2.mp4";
import module3Video from "../assets/module3.mp4";

export default function MyCourses() {
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      id: 1,
      title: "Module 1: Introduction to Automotive Systems",
      description:
        "Overview of vehicle electrical, electronic, and mechanical systems.",
      video: module1Video,
    },
    {
      id: 2,
      title: "Module 2: Electrical Systems & Diagnostics",
      description:
        "Learn to troubleshoot and repair vehicle electrical circuits and components.",
      video: module2Video,
    },
    {
      id: 3,
      title: "Module 3: Air Conditioning Systems",
      description:
        "Hands-on training in vehicle AC systems and maintenance procedures.",
      video: module3Video,
    },
  ];

>>>>>>> cf34b49 (Initial commit after cleanup)
  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* Hero / Banner Section */}
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

      {/* Course Overview */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
          <p className="text-gray-700 mb-4">
            This NCVET-certified course provides comprehensive training on automotive repair, including vehicle electrical systems, diagnostics, and air conditioning. 
            Designed for beginners and intermediate learners, it equips students with practical skills and knowledge required for real-world automotive maintenance and repair.
          </p>
<<<<<<< HEAD

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
              <h3 className="font-semibold text-gray-800">Duration</h3>
              <p className="text-blue-600 font-bold">600 Hours</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
              <h3 className="font-semibold text-gray-800">Level</h3>
              <p className="text-blue-600 font-bold">NSQF Level 3</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
              <h3 className="font-semibold text-gray-800">Prerequisites</h3>
              <p className="text-blue-600 font-bold">8th Grade + Basic Driving Experience</p>
            </div>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Understand automotive electrical and electronic systems</li>
            <li>Diagnose and repair vehicle air conditioning systems</li>
            <li>Apply safety standards in automotive repair</li>
            <li>Perform practical maintenance tasks on real vehicles</li>
            <li>Gain readiness for NCVET certification assessment</li>
          </ul>
=======
>>>>>>> cf34b49 (Initial commit after cleanup)
        </div>

        {/* Course Modules */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Course Modules</h2>
          <div className="space-y-4">
<<<<<<< HEAD
            <div className="border-l-4 border-blue-600 bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800">Module 1: Introduction to Automotive Systems</h3>
              <p className="text-gray-600">Overview of vehicle electrical, electronic, and mechanical systems.</p>
            </div>
            <div className="border-l-4 border-blue-600 bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800">Module 2: Electrical Systems & Diagnostics</h3>
              <p className="text-gray-600">Learn to troubleshoot and repair vehicle electrical circuits and components.</p>
            </div>
            <div className="border-l-4 border-blue-600 bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800">Module 3: Air Conditioning Systems</h3>
              <p className="text-gray-600">Hands-on training in vehicle AC systems and maintenance procedures.</p>
            </div>
            <div className="border-l-4 border-blue-600 bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800">Module 4: Practical Workshops & Assessment</h3>
              <p className="text-gray-600">Real-world repair tasks and NCVET assessment preparation.</p>
            </div>
=======
            {modules.map((module) => (
              <div
                key={module.id}
                className="border-l-4 border-blue-600 bg-gray-50 p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition"
                onClick={() => setSelectedModule(module)}
              >
                <h3 className="font-semibold text-gray-800">{module.title}</h3>
                <p className="text-gray-600">{module.description}</p>
              </div>
            ))}
>>>>>>> cf34b49 (Initial commit after cleanup)
          </div>
        </div>

        {/* Enroll Button */}
        <div className="text-center mb-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
<<<<<<< HEAD
=======

      {/* Video Popup */}
      {selectedModule && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl relative">
            <button
              className="absolute top-2 right-2 text-gray-700 font-bold text-2xl"
              onClick={() => setSelectedModule(null)}
            >
              &times;
            </button>
            <video
              src={selectedModule.video}
              controls
              autoPlay
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="font-bold text-gray-800">{selectedModule.title}</h3>
              <p className="text-gray-600">{selectedModule.description}</p>
            </div>
          </div>
        </div>
      )}
>>>>>>> cf34b49 (Initial commit after cleanup)
    </div>
  );
}
