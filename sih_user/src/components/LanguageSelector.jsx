// src/components/LanguageSelector.jsx
import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

/**
 * Add/remove languages here. value is ISO code (what translator expects).
 * Note: not every backend supports every code — but this approach keeps UI/simple.
 */
const LANGS = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "bn", label: "বাংলা" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ml", label: "മലയാളം" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "mr", label: "मराठी" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
  { code: "ur", label: "اردو" },
  { code: "ne", label: "नेपाली" },
  // add others as needed (use ISO codes)
];

export default function LanguageSelector() {
  const { selectedLang, setSelectedLang } = useContext(LanguageContext);

  return (
    <select
      value={selectedLang}
      onChange={(e) => setSelectedLang(e.target.value)}
      className="px-3 py-1 rounded text-black"
    >
      {LANGS.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}
