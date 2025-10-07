import React, { useState } from "react";
import { Book, Clock, UserPlus, Sliders } from "lucide-react";
<<<<<<< HEAD
import FiltersPopup from "../components/FiltersPopup"; // Import the popup

// Import local images
=======
import { useNavigate } from "react-router-dom";
import FiltersPopup from "../components/FiltersPopup";

// Import images
>>>>>>> cf34b49 (Initial commit after cleanup)
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

<<<<<<< HEAD
// NCVET-style course data
const courses = [
  { id: 1, title: "Sustainable Agriculture", desc: "Learn modern farming and sustainable practices.", img: agricultureImg, level: "Beginner", duration: "3 Months" },
  { id: 2, title: "Automobile Servicing", desc: "Vehicle maintenance, diagnostics, and repair techniques.", img: automobileImg, level: "Intermediate", duration: "4 Months" },
  { id: 3, title: "Carpentry & Woodwork", desc: "Master furniture making and woodcraft skills.", img: carpentryImg, level: "Beginner", duration: "3 Months" },
  { id: 4, title: "Computer & IT Skills", desc: "Basic to advanced computer and networking courses.", img: computerImg, level: "Intermediate", duration: "4 Months" },
  { id: 5, title: "Electrical Work", desc: "Learn electrical wiring, circuits, and safety.", img: electricalImg, level: "Advanced", duration: "6 Months" },
  { id: 6, title: "Hospitality & Tourism", desc: "Front desk, hotel management, and customer service skills.", img: hospitalityImg, level: "Beginner", duration: "3 Months" },
  { id: 7, title: "Masonry", desc: "Bricklaying, concrete work, and construction basics.", img: masonryImg, level: "Intermediate", duration: "4 Months" },
  { id: 8, title: "Plumbing & Pipefitting", desc: "Residential and commercial plumbing techniques.", img: plumbingImg, level: "Beginner", duration: "3 Months" },
  { id: 9, title: "Tailoring & Fashion Design", desc: "Stitching, design, and garment making skills.", img: tailoringImg, level: "Intermediate", duration: "4 Months" },
  { id: 10, title: "Welding & Fabrication", desc: "Metalwork, welding techniques, and safety procedures.", img: weldingImg, level: "Advanced", duration: "6 Months" },
=======
// Course data
export const courses = [
  { id: 1, title: "Sustainable Agriculture", desc: "Learn modern farming and sustainable practices.", img: agricultureImg, level: "Beginner", duration: "3 Months", modules: ["Introduction", "Crop Management"], hours: "120 Hours" },
  { id: 2, title: "Automobile Servicing", desc: "Vehicle maintenance, diagnostics, and repair techniques.", img: automobileImg, level: "Intermediate", duration: "4 Months", modules: ["Module 1: Basics", "Module 2: Electrical Systems", "Module 3: AC Systems"], hours: "160 Hours" },
  { id: 3, title: "Carpentry & Woodwork", desc: "Master furniture making and woodcraft skills.", img: carpentryImg, level: "Beginner", duration: "3 Months", modules: ["Wood Selection", "Basic Tools", "Furniture Making"], hours: "120 Hours" },
  { id: 4, title: "Computer & IT Skills", desc: "Basic to advanced computer and networking courses.", img: computerImg, level: "Intermediate", duration: "4 Months", modules: ["Computer Basics", "Networking", "Office Tools"], hours: "140 Hours" },
  { id: 5, title: "Electrical Work", desc: "Learn electrical wiring, circuits, and safety.", img: electricalImg, level: "Advanced", duration: "6 Months", modules: ["Circuit Theory", "Wiring", "Safety Practices"], hours: "180 Hours" },
  { id: 6, title: "Hospitality & Tourism", desc: "Front desk, hotel management, and customer service skills.", img: hospitalityImg, level: "Beginner", duration: "3 Months", modules: ["Customer Service", "Hotel Management", "Tour Operations"], hours: "120 Hours" },
  { id: 7, title: "Masonry", desc: "Bricklaying, concrete work, and construction basics.", img: masonryImg, level: "Intermediate", duration: "4 Months", modules: ["Bricklaying", "Concrete Work", "Site Management"], hours: "140 Hours" },
  { id: 8, title: "Plumbing & Pipefitting", desc: "Residential and commercial plumbing techniques.", img: plumbingImg, level: "Beginner", duration: "3 Months", modules: ["Pipe Basics", "Fittings", "Water Systems"], hours: "120 Hours" },
  { id: 9, title: "Tailoring & Fashion Design", desc: "Stitching, design, and garment making skills.", img: tailoringImg, level: "Intermediate", duration: "4 Months", modules: ["Basic Stitching", "Pattern Making", "Design Techniques"], hours: "140 Hours" },
  { id: 10, title: "Welding & Fabrication", desc: "Metalwork, welding techniques, and safety procedures.", img: weldingImg, level: "Advanced", duration: "6 Months", modules: ["Welding Basics", "Metal Fabrication", "Safety"], hours: "180 Hours" },
>>>>>>> cf34b49 (Initial commit after cleanup)
];

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
<<<<<<< HEAD
  const [isFilterOpen, setIsFilterOpen] = useState(false); // state to toggle filters
=======
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigate = useNavigate();
>>>>>>> cf34b49 (Initial commit after cleanup)

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.level.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            MicroSparks Course Catalog
          </h2>
          <p className="text-gray-600">
            Browse skill-based vocational training programs and start your journey today.
          </p>
        </div>
        {/* Filters button */}
        <button
          className="flex items-center mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
<<<<<<< HEAD
          onClick={() => setIsFilterOpen(true)} // open the popup
=======
          onClick={() => setIsFilterOpen(true)}
>>>>>>> cf34b49 (Initial commit after cleanup)
        >
          <Sliders size={18} className="mr-2" /> Filters
        </button>
      </div>

      {/* Search bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search courses by name or level..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-500 shadow-sm"
        />
      </div>

      {/* Courses grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
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
                  <Book size={20} /> {course.title}
                </h3>
                <p className="text-gray-600 mb-3">{course.desc}</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="inline-flex items-center gap-1 bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full">
                    <UserPlus size={14} /> {course.level}
                  </span>
                  <span className="inline-flex items-center gap-1 text-gray-500 text-sm">
                    <Clock size={14} /> {course.duration}
                  </span>
                </div>
                <div className="text-center">
<<<<<<< HEAD
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                    <UserPlus size={16} /> Enroll Now
=======
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                    onClick={() => navigate(`/course/${course.id}`)}
                  >
                    <UserPlus size={16} /> View Course
>>>>>>> cf34b49 (Initial commit after cleanup)
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No courses found.
          </p>
        )}
      </div>

      {/* Filters Popup */}
      <FiltersPopup
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}
