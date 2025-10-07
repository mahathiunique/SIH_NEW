import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AccessibilityPanel from "./components/AccessibilityPanel";
import VoiceAssistant from "./components/VoiceAssistant";
import ChatbotPopup from "./components/ChatbotPopup";

// Context
import LanguageContext from "./context/LanguageContext";

// Pages
import Dashboard from "./pages/Dashboard";
import MyCourses from "./pages/MyCourses";
import Catalog from "./pages/Catalog";
<<<<<<< HEAD
=======
import CourseDetail from "./pages/CourseDetail"; // ✅ Added new import
>>>>>>> cf34b49 (Initial commit after cleanup)
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  const [selectedLang, setSelectedLang] = useState("English");

  return (
    <LanguageContext.Provider value={{ selectedLang, setSelectedLang }}>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header />

          {/* Body content */}
          <div className="flex flex-1 overflow-hidden">
            {/* Page content */}
            <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-blue-800 via-blue-900 to-black text-white min-h-screen">
              <Routes>
                {/* Protected / Authenticated pages */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/mycourses" element={<MyCourses />} />
                <Route path="/catalog" element={<Catalog />} />
<<<<<<< HEAD
=======
                <Route path="/course/:id" element={<CourseDetail />} /> {/* ✅ Added this */}
>>>>>>> cf34b49 (Initial commit after cleanup)
                <Route path="/profile" element={<Profile />} />

                {/* Public / Authentication pages */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>

            {/* Right panel - hidden on smaller screens */}
            <div className="hidden xl:block w-72 flex-shrink-0 overflow-y-auto p-6 bg-gray-900">
              <AccessibilityPanel />
            </div>
          </div>

          {/* Voice Assistant */}
          <VoiceAssistant />

          {/* Chatbot Popup */}
          <ChatbotPopup />
        </div>
      </div>
    </LanguageContext.Provider>
  );
}
