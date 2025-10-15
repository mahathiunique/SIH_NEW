import React, { useState } from "react";
import Chatbot from "./ChatbotPopup";
import { MessageCircle } from "lucide-react"; // ✅ Lucide icon

export default function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Open Chatbot"
        style={{ background: 'var(--primary)', color: 'white' }}
      >
        <MessageCircle size={24} /> {/* ✅ Lucide icon */}
      </button>

      {/* Chatbot Popup */}
      {isOpen && <Chatbot onClose={() => setIsOpen(false)} />}
    </>
  );
}
