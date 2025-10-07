// src/pages/Profile.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dummy data for progress chart
const progressData = [
  { day: "Mon", progress: 20 },
  { day: "Tue", progress: 40 },
  { day: "Wed", progress: 50 },
  { day: "Thu", progress: 60 },
  { day: "Fri", progress: 80 },
  { day: "Sat", progress: 90 },
  { day: "Sun", progress: 100 },
];

// Dummy data for daily study heatmap
const dailyStudyHeat = [
  { day: "Mon", hours: 1 },
  { day: "Tue", hours: 3 },
  { day: "Wed", hours: 2 },
  { day: "Thu", hours: 4 },
  { day: "Fri", hours: 0 },
  { day: "Sat", hours: 5 },
  { day: "Sun", hours: 2 },
];

// Topics that need focus
const focusTopics = [
  "Grammar",
  "Vocabulary",
  "Listening Practice",
  "Reading Comprehension",
  "Speaking Exercises",
];

export default function Profile() {
  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      {/* Progress Section */}
      <div className="mb-8 bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-3">Progress</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={progressData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
            <XAxis dataKey="day" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="progress"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Daily Study Heatmap */}
      <div className="mb-8 bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-3">Daily Study Heat Map</h2>
        <div className="grid grid-cols-7 gap-2">
          {dailyStudyHeat.map((item) => {
            let color = "bg-gray-700";
            if (item.hours >= 1 && item.hours <= 2) color = "bg-yellow-500";
            if (item.hours >= 3 && item.hours <= 4) color = "bg-orange-500";
            if (item.hours >= 5) color = "bg-red-500";

            return (
              <div
                key={item.day}
                className={`w-12 h-12 ${color} flex items-center justify-center text-sm font-bold rounded`}
              >
                {item.hours}h
              </div>
            );
          })}
        </div>
      </div>

      {/* Topics to Focus */}
      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-3">Need to Focus On</h2>
        <ul className="list-disc pl-5 space-y-1">
          {focusTopics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
