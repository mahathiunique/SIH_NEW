// src/pages/Catalog.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Book, Clock, UserPlus, Sliders } from "lucide-react";
import FiltersPopup from "../components/FiltersPopup";
import useTranslate from "../hooks/useTranslate";
import Translate from "../components/Translate";

// Import images
import agricultureImg from "../assets/agriculture.jpg";
import automobileImg from "../assets/automobile.jpg";
import carpentryImg from "../assets/carpentry.jpg";
import computerImg from "../assets/computer.jpg";
import electricalImg from "../assets/electrical.jpg";
import hospitalityImg from "../assets/hospitality.jpg";
import masonryImg from "../assets/masonry.jpg";
import plumbingImg from "../assets/plumbing.jpg";
import tailoringImg from "../assets/tailoring.jpg";
import weldingImg from "../assets/welding.jpg";

// 🧠 Course progress data
export const courseProgress = {
  1: 45,  // Sustainable Agriculture
  2: 70,  // Automobile Servicing
  3: 30,  // Carpentry & Woodwork
  4: 55,  // Computer & IT Skills
};

// 🧩 Course catalog data
export const courses = [
  {
    id: 1,
    title: "Sustainable Agriculture",
    desc: "Learn modern farming and sustainable practices.",
    img: agricultureImg,
    level: "Beginner",
    category: "Agriculture",
    duration: "3 Months",
    hours: "120",
    modules: [
      "Introduction to Agriculture",
      "Soil Management",
      "Crop Planning",
      "Sustainable Practices",
    ],
  },
  {
    id: 2,
    title: "Automobile Servicing",
    desc: "Vehicle maintenance, diagnostics, and repair techniques.",
    img: automobileImg,
    level: "Intermediate",
    category: "Automotive",
    duration: "4 Months",
    hours: "150",
    modules: [
      "Automotive Systems Overview",
      "Electrical Systems & Diagnostics",
      "Air Conditioning Systems",
      "Practical Workshops & Assessment",
    ],
  },
  {
    id: 3,
    title: "Carpentry & Woodwork",
    desc: "Master furniture making and woodcraft skills.",
    img: carpentryImg,
    level: "Beginner",
    category: "Trades & Crafts",
    duration: "3 Months",
    hours: "100",
    modules: [
      "Tools and Materials",
      "Basic Joinery",
      "Furniture Making",
      "Project Workshop",
    ],
  },
  {
    id: 4,
    title: "Computer & IT Skills",
    desc: "Basic to advanced computer and networking courses.",
    img: computerImg,
    level: "Intermediate",
    category: "IT & Digital Skills",
    duration: "4 Months",
    hours: "130",
    modules: [
      "Computer Basics",
      "Networking Fundamentals",
      "Software & Tools",
      "Hands-on Projects",
    ],
  },
  {
    id: 5,
    title: "Electrical Work",
    desc: "Learn electrical wiring, circuits, and safety.",
    img: electricalImg,
    level: "Advanced",
    category: "Trades & Crafts",
    duration: "6 Months",
    hours: "160",
    modules: [
      "Electrical Theory",
      "Wiring & Circuits",
      "Troubleshooting",
      "Practical Lab",
    ],
  },
  {
    id: 6,
    title: "Hospitality & Tourism",
    desc: "Front desk, hotel management, and customer service skills.",
    img: hospitalityImg,
    level: "Beginner",
    category: "Hospitality",
    duration: "3 Months",
    hours: "120",
    modules: [
      "Hospitality Basics",
      "Customer Service",
      "Hotel Operations",
      "Practical Training",
    ],
  },
  {
    id: 7,
    title: "Masonry",
    desc: "Bricklaying, concrete work, and construction basics.",
    img: masonryImg,
    level: "Intermediate",
    category: "Trades & Crafts",
    duration: "4 Months",
    hours: "140",
    modules: [
      "Tools & Materials",
      "Bricklaying Techniques",
      "Concrete Work",
      "Site Practice",
    ],
  },
  {
    id: 8,
    title: "Plumbing & Pipefitting",
    desc: "Residential and commercial plumbing techniques.",
    img: plumbingImg,
    level: "Beginner",
    category: "Trades & Crafts",
    duration: "3 Months",
    hours: "120",
    modules: [
      "Tools & Materials",
      "Pipe Installation",
      "Leak Troubleshooting",
      "Hands-on Workshop",
    ],
  },
  {
    id: 9,
    title: "Tailoring & Fashion Design",
    desc: "Stitching, design, and garment making skills.",
    img: tailoringImg,
    level: "Intermediate",
    category: "Trades & Crafts",
    duration: "4 Months",
    hours: "130",
    modules: [
      "Fabric & Tools",
      "Basic Stitching",
      "Fashion Design",
      "Project Workshop",
    ],
  },
  {
    id: 10,
    title: "Welding & Fabrication",
    desc: "Metalwork, welding techniques, and safety procedures.",
    img: weldingImg,
    level: "Advanced",
    category: "Trades & Crafts",
    duration: "6 Months",
    hours: "150",
    modules: [
      "Welding Basics",
      "Metal Fabrication",
      "Safety & Techniques",
      "Practical Welding",
    ],
  },
];

// ✅ Merge logic — attach progress (0% if not enrolled)
export const combinedCourses = courses.map(course => ({
  ...course,
  progress: courseProgress[course.id] ?? 0,
}));


export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Translations
  const header = useTranslate("MicroSparks Course Catalog");
  const subtitle = useTranslate(
    "Browse skill-based vocational training programs and start your journey today."
  );
  const filtersLabel = useTranslate("Filters");
  const searchPlaceholder = useTranslate("Search courses by name or level...");
  const enrollNow = useTranslate("Enroll Now");
  const noCourses = useTranslate("No courses found.");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [appliedCategory, setAppliedCategory] = useState("");
  const [appliedLevel, setAppliedLevel] = useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.level.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = appliedCategory
      ? course.category === appliedCategory
      : true;

    const matchesLevel = appliedLevel ? course.level === appliedLevel : true;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{header}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <button
          className="flex items-center mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => setIsFilterOpen(true)}
        >
          <Sliders size={18} className="mr-2" /> {useTranslate("Filters")}

        </button>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-500 shadow-sm"
        />
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1 flex items-center gap-2">
                  <Book size={20} /> <Translate text={course.title} />
                </h3>
                <p className="text-gray-600 mb-3"><Translate text={course.desc} /></p>
                <div className="flex justify-between items-center mb-3">
                  <span className="inline-flex items-center gap-1 bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full">
                    <UserPlus size={14} /> <Translate text={course.level} />

                  </span>
                  <span className="inline-flex items-center gap-1 text-gray-500 text-sm">
                    <Clock size={14} /> <Translate text={course.duration} />

                  </span>
                </div>
                <div className="text-center">
                  <Link
                    to={`/courses/${course.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                  >
                    <UserPlus size={16} /> {enrollNow}
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">{noCourses}</p>
        )}
      </div>

      {/* Filters Popup */}
      <FiltersPopup
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        tempCategory={selectedCategory}
        setTempCategory={setSelectedCategory}
        tempLevel={selectedLevel}
        setTempLevel={setSelectedLevel}
        onApply={() => {
          setAppliedCategory(selectedCategory);
          setAppliedLevel(selectedLevel);
          setIsFilterOpen(false);
        }}
      />
    </div>
  );
}
