import React, { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export default function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Hello! How can I help you today?", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot icon button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg flex items-center justify-center z-50"
        style={{ background: 'var(--primary)', color: 'white' }}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 max-h-[500px] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="p-4 flex justify-between items-center" style={{ background: 'var(--primary)', color: 'white' }}>
            <h2 className="font-bold text-lg">Chatbot</h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-gray-100">
            {messages.length === 0 && (
              <p className="text-gray-400 text-sm text-center">
                Say hi to the assistant 👋
              </p>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg text-sm max-w-[80%] ${msg.sender === "user" ? 'ml-auto' : ''}`}
                style={
                  msg.sender === "user"
                    ? { background: 'var(--primary)', color: 'white' }
                    : { background: '#f3f4f6', color: 'var(--text-dark)' }
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 flex gap-2 border-t border-gray-300">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 rounded-lg"
              style={{ background: 'var(--primary)', color: 'white' }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
