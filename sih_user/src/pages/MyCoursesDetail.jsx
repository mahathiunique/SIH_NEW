import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PlayCircle } from "lucide-react";

// Import combinedCourses
import { combinedCourses } from "./Catalog";

// Use Google Drive streaming URLs
const engVideo = "https://drive.google.com/file/d/1R5CFIpY1YoeWJl-Q5H3bcAM29n6fljfp/preview";
const hindiVideo = "https://drive.google.com/file/d/1Vzek5Zlw6Vg6k1XDkRmNAelW7AsSLypF/preview";
const kanadaVideo = "https://drive.google.com/file/d/1mK_DfOrSMR4oiGMg0Q_m_fekTv41a5ie/preview";

// Import hooks and components
import useTranslate from "../hooks/useTranslate";
import Translate from "../components/Translate";
import LanguageContext from "../context/LanguageContext";

export default function CourseDetail() {
  const { id } = useParams();
  const { selectedLang } = useContext(LanguageContext);
  const course = combinedCourses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="p-6 text-center text-gray-600">
        <Translate text="Course not found." />
      </div>
    );
  }

  const getVideoSource = (lang) => {
    const videoMap = {
      en: engVideo,
      hi: hindiVideo,
      ka: kanadaVideo,
    };
    return videoMap[lang] || videoMap.en;
  };

  const videoSource = getVideoSource(selectedLang);

  const modules = [
    { id: 1, title: "Introduction to Sustainable Agriculture", duration: "8 mins" },
    { id: 2, title: "Soil Health and Fertility", duration: "12 mins" },
    { id: 3, title: "Water Management Techniques", duration: "10 mins" },
    { id: 4, title: "Crop Rotation and Diversity", duration: "14 mins" },
    { id: 5, title: "Sustainable Practices Summary", duration: "6 mins" },
  ];

  const progress = course.progress || 0;

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
          <h1 className="text-4xl font-bold text-white">
            <Translate text={course.title} />
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto p-6">
        {/* Progress Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            <Translate text="Your Progress" />
          </h2>
          <div className="w-full bg-gray-300 h-4 rounded-full">
            <div
              className="bg-green-500 h-4 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {progress}% <Translate text="completed" />
          </p>
        </div>

        {/* Course Description */}
        <div className="bg-white p-5 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-bold mb-3">
            <Translate text="About this course" />
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            <Translate text="Go beyond traditional farming and discover a more resilient, profitable, and environmentally responsible way to grow. This course provides a comprehensive introduction to the principles and practices of Sustainable Agriculture. We will move from theory to application, exploring how to build healthy ecosystems from the ground up. You'll learn how to create farming systems that work with nature, not against it, by focusing on long-term soil health, intelligent water management, and the power of biodiversity." />
          </p>

          <h3 className="text-xl font-semibold mb-2">
            <Translate text="In this course, you will:" />
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>
              <strong><Translate text="Understand the Core Principles:" /></strong>{" "}
              <Translate text="Grasp the foundations of agroecology, permaculture, and regenerative farming to build a solid theoretical base." />
            </li>
            <li>
              <strong><Translate text="Master Soil & Water Conservation:" /></strong>{" "}
              <Translate text="Learn practical techniques like composting, cover cropping, no-till farming, and rainwater harvesting to build resilience." />
            </li>
            <li>
              <strong><Translate text="Harness Biodiversity:" /></strong>{" "}
              <Translate text="Design effective crop rotation, companion planting, and polyculture systems to boost productivity and reduce pests naturally." />
            </li>
            <li>
              <strong><Translate text="Apply Eco-Friendly Practices:" /></strong>{" "}
              <Translate text="Develop strategies for Integrated Pest Management (IPM) to create a balanced, thriving farm ecosystem without synthetic chemicals." />
            </li>
          </ul>
        </div>

        {/* Video Section */}
        <div className="bg-white p-5 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-bold mb-3">
            <Translate text="Lesson Preview" />
          </h2>
          <div className="relative w-full rounded-lg overflow-hidden bg-black">
            {/* ✅ Use iframe for Google Drive streaming */}
            <iframe
              key={videoSource}
              src={videoSource}
              allow="autoplay"
              allowFullScreen
              className="w-full h-64"
              title="Course Video"
            ></iframe>
            <div className="absolute bottom-3 right-3 bg-gray-800 bg-opacity-75 px-3 py-1 rounded text-sm text-white">
              {selectedLang.toUpperCase()}
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Video language: {selectedLang === 'en' ? 'English' : selectedLang === 'hi' ? 'Hindi' : 'Kannada'}
          </p>
        </div>

        {/* Modules Section */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            <Translate text="Course Modules" />
          </h2>
          <div className="space-y-3">
            {modules.map((module) => (
              <div
                key={module.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <PlayCircle size={20} className="text-green-600" />
                  <span className="font-medium">
                    <Translate text={module.title} />
                  </span>
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
