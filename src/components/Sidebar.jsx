import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Book, Folder, User } from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", route: "/", icon: <Home size={18} /> },
    { name: "My Courses", route: "/mycourses", icon: <Book size={18} /> },
    { name: "Catalog", route: "/catalog", icon: <Folder size={18} /> },
    { name: "Profile", route: "/profile", icon: <User size={18} /> },
  ];

  return (
    <div className="flex flex-col p-4 bg-gradient-to-b from-blue-900 to-blue-500 h-screen sticky top-0 shadow-lg">
      {menuItems.map((item) => (
        <button
          key={item.name}
          onClick={() => {
            setActive(item.name);
            navigate(item.route);
          }}
          className={`flex items-center gap-2 p-2 mb-2 rounded font-semibold w-full text-white transition ${
            active === item.name ? "bg-blue-700" : "bg-white/10"
          }`}
        >
          {item.icon}
          {item.name}
        </button>
      ))}
    </div>
  );
}
