import React from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { User, UserPlus, Menu } from "lucide-react"; // Import Menu icon

// Accept toggleSidebar function as a prop
export default function Header({ toggleSidebar }) {
  return (
    <header className="flex justify-between items-center px-6 py-4 h-[72px] shadow-md bg-white sticky top-0 z-10">
      <div className="flex items-center gap-4">
        {/* Toggle Button */}
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-100">
          <Menu size={24} className="text-gray-600" />
        </button>
        <h1 className="text-xl font-bold text-[var(--primary)]">MicroSparks</h1>
      </div>

      <div className="flex items-center gap-4">
        <LanguageSelector />

        <Link
          to="/login"
          className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-100"
          style={{ background: "white", color: "var(--primary)" }}
        >
          <User size={18} /> Login
        </Link>

        <Link
          to="/signup"
          className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-100"
          style={{ background: "white", color: "var(--primary)" }}
        >
          <UserPlus size={18} /> Sign Up
        </Link>
      </div>
    </header>
  );
}