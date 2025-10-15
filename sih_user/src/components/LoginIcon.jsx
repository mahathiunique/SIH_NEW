import React from "react";
import { User } from "lucide-react"; // ✅ Import Lucide icon

export default function LoginIcon() {
  return (
    <button
      className="bg-white text-blue-600 px-3 py-1 rounded-full shadow hover:bg-gray-200 flex items-center gap-2"
      aria-label="Login"
    >
      <User size={20} /> {/* ✅ Lucide icon */}
      Login
    </button>
  );
}
