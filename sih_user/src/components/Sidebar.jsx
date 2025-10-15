import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Book, Folder, User } from "lucide-react";
import Translate from "../components/Translate"; // ✅ import Translate

export default function Sidebar({ isSidebarOpen }) {
  const navigate = useNavigate();
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", route: "/", icon: <Home size={18} /> },
    { name: "My Courses", route: "/mycourses", icon: <Book size={18} /> },
    { name: "Catalog", route: "/catalog", icon: <Folder size={18} /> },
    { name: "Profile", route: "/profile", icon: <User size={18} /> },
  ];

  return (
    <div
      className="flex flex-col p-4 h-full sticky top-0 shadow-lg"
      style={{
        background: "var(--card-bg)",
        borderRight: "1px solid var(--card-border)",
      }}
    >
      {menuItems.map((item) => (
        <button
          key={item.name}
          onClick={() => {
            setActive(item.name);
            navigate(item.route);
          }}
          className={`flex items-center gap-3 p-3 mb-2 rounded font-semibold w-full transition-all ${
            isSidebarOpen ? "justify-start" : "justify-center"
          }`}
          style={{
            color: active === item.name ? "white" : "var(--text-dark)",
            background: active === item.name ? "var(--primary)" : "transparent",
          }}
        >
          {item.icon}
          <span
            className={`transition-opacity duration-200 ${
              isSidebarOpen ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            <Translate text={item.name} /> {/* ✅ translate here */}
          </span>
        </button>
      ))}
    </div>
  );
}
