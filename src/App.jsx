// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AccessibilityPanel from "./components/AccessibilityPanel";
import VoiceAssistant from "./components/VoiceAssistant";
import ChatbotPopup from "./components/ChatbotPopup";

// Pages
import Dashboard from "./pages/Dashboard";
import MyCoursesOverview from "./pages/MyCoursesOverview";
import MyCoursesDetail from "./pages/MyCoursesDetail";
import Catalog from "./pages/Catalog";
import CourseDetail from "./pages/CourseDetail";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Context
import LanguageContext from "./context/LanguageContext";

export default function App() {
  const [selectedLang, setSelectedLang] = useState("English");

  return (
    <LanguageContext.Provider value={{ selectedLang, setSelectedLang }}>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />

          <div className="flex flex-1 overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-blue-800 via-blue-900 to-black text-white min-h-screen">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* MyCourses routes */}
                <Route path="/mycourses" element={<MyCoursesOverview />} />
                <Route path="/mycourse/:id" element={<MyCoursesDetail />} />

                <Route path="/catalog" element={<Catalog />} />
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>

            <div className="hidden xl:block w-72 flex-shrink-0 overflow-y-auto p-6 bg-gray-900">
              <AccessibilityPanel />
            </div>
          </div>

          <VoiceAssistant />
          <ChatbotPopup />
        </div>
      </div>
    </LanguageContext.Provider>
  );
}
