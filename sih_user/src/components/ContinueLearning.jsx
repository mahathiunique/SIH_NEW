import React from "react";
import { Link } from "react-router-dom";

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

export default function ContinueLearning() {
  const courses = [
    { id: 1, name: "Plumbing Basics", progress: "50%", image: plumbingImg },
    { id: 2, name: "Basic Electrical Wiring", progress: "70%", image: electricalImg },
    { id: 3, name: "Carpentry & Woodwork", progress: "30%", image: carpentryImg },
    { id: 4, name: "Automobile Servicing", progress: "10%", image: automobileImg },
    { id: 5, name: "Tailoring & Garment Making", progress: "20%", image: tailoringImg },
    { id: 6, name: "Masonry & Construction", progress: "40%", image: masonryImg },
    { id: 7, name: "Computer Hardware & Networking", progress: "15%", image: computerImg },
    { id: 8, name: "Hospitality & Food Service", progress: "25%", image: hospitalityImg },
    { id: 9, name: "Welding & Fabrication", progress: "35%", image: weldingImg },
    { id: 10, name: "Agriculture & Farming Basics", progress: "60%", image: agricultureImg },
  ];

  return (
    <section className="my-6">
      <h2 className="text-xl font-bold text-white mb-4">Continue Learning</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link
            to={`/course/${course.id}`}
            key={course.id}
            className="bg-white text-black shadow rounded-lg hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <p className="font-semibold">{course.name}</p>
              <p className="text-sm text-gray-600">{course.progress}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
