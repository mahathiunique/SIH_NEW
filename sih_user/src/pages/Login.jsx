import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import useTranslate from "../hooks/useTranslate";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // Translations
  const welcomeBack = useTranslate("Welcome Back");
  const loginDesc = useTranslate("Login to your NCVET learning account");
  const emailPlaceholder = useTranslate("Email Address");
  const passwordPlaceholder = useTranslate("Password");
  const forgot = useTranslate("Forgot password?");
  const createAccount = useTranslate("Create an account");
  const loginBtn = useTranslate("Login");

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--page-bg)' }}>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-md" style={{ border: '1px solid var(--card-border)' }}>
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2" style={{ color: 'var(--primary-strong)' }}>
            <LogIn size={28} /> {welcomeBack}
          </h1>
          <p className="text-gray-600">{loginDesc}</p>
        </div>

        <form className="space-y-5">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3" size={20} style={{ color: 'var(--primary)' }} />
            <input
              type="email"
              placeholder={emailPlaceholder}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3" size={20} style={{ color: 'var(--primary)' }} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder={passwordPlaceholder}
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
            className="w-full py-3 rounded-lg font-semibold transition-colors"
            style={{ background: 'var(--primary)', color: 'white' }}
          >
            {loginBtn}
          </button>

          {/* Forgot Password + Signup Link */}
          <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
            <a href="#" className="hover:underline" style={{ color: 'var(--muted)' }}>
              {forgot}
            </a>
            <Link to="/signup" className="hover:underline" style={{ color: 'var(--muted)' }}>
              {createAccount}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
