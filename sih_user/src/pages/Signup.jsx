import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import useTranslate from "../hooks/useTranslate";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  // Translations
  const createAccount = useTranslate("Create Account");
  const joinText = useTranslate("Join the NCVET Learning Platform");
  const fullNamePlaceholder = useTranslate("Full Name");
  const emailPlaceholder = useTranslate("Email Address");
  const passwordPlaceholder = useTranslate("Password");
  const signUpBtn = useTranslate("Sign Up");
  const alreadyHave = useTranslate("Already have an account?");
  const loginLabel = useTranslate("Login");

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--page-bg)' }}>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-md" style={{ border: '1px solid var(--card-border)' }}>
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2" style={{ color: 'var(--primary-strong)' }}>
            <UserPlus size={28} /> {createAccount}
          </h1>
          <p className="text-gray-600">{joinText}</p>
        </div>

        <form className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <User className="absolute left-3 top-3" size={20} style={{ color: 'var(--primary)' }} />
            <input
              type="text"
              placeholder={fullNamePlaceholder}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
            />
          </div>

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

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold transition-colors"
            style={{ background: 'var(--primary)', color: 'white' }}
          >
            {signUpBtn}
          </button>

          {/* Already have an account */}
          <div className="text-center text-sm text-gray-600 mt-4">
            {alreadyHave} {" "}
            <Link to="/login" className="hover:underline" style={{ color: 'var(--primary)' }}>
              {loginLabel}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
