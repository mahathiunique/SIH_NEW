// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { User, UserPlus } from "lucide-react"; // ✅ Lucide icons

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-blue-600 text-white px-6 py-4">
      <h1 className="text-xl font-bold">MicroSparks</h1>

      <div className="flex items-center gap-4">
        <LanguageSelector />

        {/* Login Link */}
        <Link
          to="/login"
          className="flex items-center gap-1 bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200"
        >
          <User size={18} /> Login
        </Link>

        {/* Signup Link */}
        <Link
          to="/signup"
          className="flex items-center gap-1 bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200"
        >
          <UserPlus size={18} /> Sign Up
        </Link>
      </div>
    </header>
  );
}
