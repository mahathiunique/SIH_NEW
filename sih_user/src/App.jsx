import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import VoiceAssistant from "./components/VoiceAssistant";
import ChatbotPopup from "./components/ChatbotPopup";

// Pages
import Dashboard from "./pages/Dashboard";
import MyCoursesOverview from "./pages/MyCoursesOverview";
import MyCoursesDetail from "./pages/MyCoursesDetail";import Catalog from "./pages/Catalog";
import CourseDetail from "./pages/CourseDetail";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Context
import LanguageContext from "./context/LanguageContext";

export default function App() {
  const [selectedLang, setSelectedLang] = useState("English");
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <LanguageContext.Provider value={{ selectedLang, setSelectedLang }}>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              isSidebarOpen ? "w-64" : "w-20"
            }`}
          >
            <Sidebar isSidebarOpen={isSidebarOpen} />
          </div>

          {/* Main Page Content */}
          <div
            className="flex-1 overflow-y-auto p-6"
            style={{ background: "var(--page-bg)", color: "var(--text-dark)" }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/mycourses" element={<MyCoursesOverview />} />
              <Route path="/mycourse/:id" element={<MyCoursesDetail />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>

        {/* Floating Components */}
        <VoiceAssistant />
        <ChatbotPopup />
      </div>
    </LanguageContext.Provider>
  );
}
