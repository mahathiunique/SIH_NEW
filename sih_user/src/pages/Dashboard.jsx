import React from "react";
import { CheckCircle, BookOpen, Award, Clock } from "lucide-react";
import useTranslate from "../hooks/useTranslate"; // Translation hook

const courses = [
  { id: 1, title: "Automotive Repair", progress: 60, color: "bg-[#2A5199]" },
  { id: 2, title: "Computer & IT Skills", progress: 35, color: "bg-[#2A5199]" },
  { id: 3, title: "Tailoring & Fashion Design", progress: 80, color: "bg-[#2A5199]" },
  { id: 4, title: "Hospitality & Tourism", progress: 50, color: "bg-[#2A5199]" },
];

const stats = [
  { id: 1, title: "Completed Courses", value: 5, color: "from-[#2A5199] to-[#2A5199]" },
  { id: 2, title: "Certificates Earned", value: 3, color: "from-[#2A5199] to-[#2A5199]" },
  { id: 3, title: "Ongoing Courses", value: 4, color: "from-[#2A5199] to-[#2A5199]" },
];

const activities = [
  {
    id: 1,
    icon: <BookOpen className="text-[#2A5199] w-6 h-6" />,
    title: "You enrolled in 'Diploma in Automotive Repair'",
    time: "2 days ago",
    color: "border-[#2A5199]",
  },
  {
    id: 2,
    icon: <CheckCircle className="text-[#2A5199] w-6 h-6" />,
    title: "You completed Module 2 of 'Computer & IT Skills'",
    time: "3 days ago",
    color: "border-[#2A5199]",
  },
  {
    id: 3,
    icon: <Award className="text-[#2A5199] w-6 h-6" />,
    title: "Your certificate for 'Tailoring & Fashion Design' is ready",
    time: "5 days ago",
    color: "border-[#2A5199]",
  },
  {
    id: 4,
    icon: <Clock className="text-[#2A5199] w-6 h-6" />,
    title: "New course 'Hospitality Management' added to your recommendations",
    time: "1 week ago",
    color: "border-[#2A5199]",
  },
];

export default function Dashboard() {
  const welcome = useTranslate("Welcome!");
  const subtitle = useTranslate("Here’s your personalized learning dashboard.");
  const yourCourses = useTranslate("Your Courses");
  const recentActivity = useTranslate("Recent Activity");

  return (
    <div className="min-h-screen p-6 font-sans" style={{ background: "var(--page-bg)" }}>
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{welcome}</h1>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`p-6 rounded-xl shadow-lg bg-gradient-to-r ${stat.color} text-white transform hover:scale-105 transition-transform`}
          >
            <h2 className="text-3xl font-bold">{stat.value}</h2>
            <p className="mt-2">{useTranslate(stat.title)}</p>
          </div>
        ))}
      </div>

      {/* Course Progress */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{yourCourses}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {useTranslate(course.title)}
              </h3>

              {/* Proper Progress Bar */}
              <div className="w-full bg-gray-200 h-4 rounded-full mb-2 overflow-hidden">
                <div
                  className={`${course.color} h-4 transition-all duration-700 ease-out`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <p className="text-gray-700">
  {course.progress}% {useTranslate("completed")}
</p>

            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{recentActivity}</h2>
        <div className="relative border-l-4 border-[#2A5199] pl-6 space-y-6">
          {activities.map((activity) => (
            <div
  key={activity.id}
  className="relative bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all"
>
              <div className="absolute -left-9 top-4 bg-white border-2 border-gray-300 rounded-full p-2">
                {activity.icon}
              </div>
              <p className="text-gray-800 font-medium">{useTranslate(activity.title)}</p>
              <p className="text-sm text-gray-500 mt-1">{useTranslate(activity.time)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}