import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-900 to-black">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-[90%] max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700 mb-2 flex items-center justify-center gap-2">
            <LogIn size={28} /> Welcome Back
          </h1>
          <p className="text-gray-600">Login to your NCVET learning account</p>
        </div>

        <form className="space-y-5">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-blue-600" size={20} />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-blue-600" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-blue-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Login
          </button>

          {/* Forgot Password + Signup Link */}
          <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
            <a href="#" className="hover:text-blue-800">
              Forgot password?
            </a>
            <Link to="/signup" className="hover:text-blue-800">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
