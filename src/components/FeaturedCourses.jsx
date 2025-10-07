import React from "react";
import { useNavigate } from "react-router-dom";
import plumbingImg from "../assets/Plumbing.jpeg";
import agricultureImg from "../assets/Agriculture.jpeg";

export default function FeaturedCourses() {
  const navigate = useNavigate();

  const courses = [
    { id: "plumbing", title: "Plumbing & Pipefitting", level: "NSQF Level 3", img: plumbingImg },
    { id: "agriculture", title: "Sustainable Agriculture", level: "Beginner", img: agricultureImg }
  ];

  return (
    <section className="my-6">
      <h2 className="text-xl font-bold mb-4">Featured Courses</h2>
      <div className="grid grid-cols-2 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/course/${course.id}`)}
            className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition"
          >
            <img src={course.img} alt={course.title} className="w-full h-32 object-cover" />
            <div className="p-3">
              <h3 className="font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
