// src/components/CourseDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Import images
import plumbingImg from "../assets/plumbing.jpg";
import electricalImg from "../assets/electrical.jpg";
import carpentryImg from "../assets/carpentry.jpg";
import automobileImg from "../assets/automobile.jpg";
import tailoringImg from "../assets/tailoring.jpg";
import masonryImg from "../assets/masonry.jpg";
import computerImg from "../assets/computer.jpg";
import hospitalityImg from "../assets/hospitality.jpg";
import weldingImg from "../assets/welding.jpg";
import agricultureImg from "../assets/agriculture.jpg";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Centralized course data
  const courses = {
    1: {
      title: "Plumbing Basics",
      description: "Learn the fundamentals of plumbing, pipe fitting, and maintenance.",
      duration: "6 weeks",
      progress: "50%",
      level: "Beginner",
      mode: "Self-Paced",
      labs: 4,
      hours: 25,
      image: plumbingImg,
    },
    2: {
      title: "Basic Electrical Wiring",
      description: "Principles of electrical circuits, residential wiring, and safety practices.",
      duration: "8 weeks",
      progress: "70%",
      level: "Beginner",
      mode: "Self-Paced",
      labs: 5,
      hours: 40,
      image: electricalImg,
    },
    3: {
      title: "Carpentry & Woodwork",
      description: "Introduction to woodworking, tools, and construction basics.",
      duration: "7 weeks",
      progress: "30%",
      level: "Intermediate",
      mode: "Instructor-Led",
      labs: 6,
      hours: 35,
      image: carpentryImg,
    },
    4: {
      title: "Automobile Servicing",
      description: "Hands-on course for vehicle repair, servicing, and maintenance.",
      duration: "10 weeks",
      progress: "10%",
      level: "Intermediate",
      mode: "Self-Paced",
      labs: 8,
      hours: 50,
      image: automobileImg,
    },
    5: {
      title: "Tailoring & Garment Making",
      description: "Learn fabric cutting, stitching, and modern garment making.",
      duration: "5 weeks",
      progress: "20%",
      level: "Beginner",
      mode: "Self-Paced",
      labs: 3,
      hours: 20,
      image: tailoringImg,
    },
    6: {
      title: "Masonry & Construction",
      description: "Bricklaying, concrete mixing, and essential construction practices.",
      duration: "9 weeks",
      progress: "40%",
      level: "Intermediate",
      mode: "Instructor-Led",
      labs: 7,
      hours: 45,
      image: masonryImg,
    },
    7: {
      title: "Computer Hardware & Networking",
      description: "PC assembly, troubleshooting, and basic networking setup.",
      duration: "6 weeks",
      progress: "15%",
      level: "Beginner",
      mode: "Self-Paced",
      labs: 4,
      hours: 30,
      image: computerImg,
    },
    8: {
      title: "Hospitality & Food Service",
      description: "Introduction to hospitality management, food handling, and customer service.",
      duration: "8 weeks",
      progress: "25%",
      level: "Beginner",
      mode: "Instructor-Led",
      labs: 5,
      hours: 35,
      image: hospitalityImg,
    },
    9: {
      title: "Welding & Fabrication",
      description: "Techniques of welding, cutting, and metal fabrication.",
      duration: "7 weeks",
      progress: "35%",
      level: "Intermediate",
      mode: "Self-Paced",
      labs: 6,
      hours: 40,
      image: weldingImg,
    },
    10: {
      title: "Agriculture & Farming Basics",
      description: "Sustainable farming practices, soil preparation, and crop care.",
      duration: "12 weeks",
      progress: "60%",
      level: "Beginner",
      mode: "Instructor-Led",
      labs: 8,
      hours: 60,
      image: agricultureImg,
    },
  };

  const course = courses[id];

  if (!course) {
    return (
      <div className="p-10 text-center text-red-600">
        Course not found. <button onClick={() => navigate("/")} className="underline">Go Back</button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left - Image */}
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 md:h-full object-cover"
          />

          {/* Right - Info */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-semibold">
                Free Course
              </span>
              <h1 className="text-3xl font-bold mt-3 text-gray-800">
                {course.title}
              </h1>
              <p className="text-gray-600 mt-2">{course.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                <div>⏳ {course.duration}</div>
                <div>📊 Progress: {course.progress}</div>
                <div>🎯 {course.level}</div>
                <div>🧪 {course.labs} Labs</div>
                <div>⏱ {course.hours} Hours</div>
                <div>💻 {course.mode}</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => navigate("/")}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              >
                ← Back
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium">
                🚀 Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto mt-10">
        <div className="border-b flex gap-6 text-gray-600 font-medium">
          <button className="pb-3 border-b-2 border-blue-600 text-blue-600">Overview</button>
          <button className="pb-3 hover:text-blue-600">Curriculum</button>
          <button className="pb-3 hover:text-blue-600">Resources</button>
        </div>

        {/* Overview */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">About this course</h2>
          <p className="text-gray-700">
            You’ll gain a solid foundation in {course.title}, with hands-on labs and practical training
            designed for real-world applications.
          </p>
        </div>
      </div>
    </div>
  );
}