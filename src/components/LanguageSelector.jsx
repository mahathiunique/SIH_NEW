import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";


const languages = [
  "English", "हिन्दी", "தமிழ்", "తెలుగు", "বাংলা", "ಕನ್ನಡ", "മലയാളം", "ગુજરાતી", "मराठी", "ਪੰਜਾਬੀ",
  "Assamese", "Odia", "Urdu", "Konkani", "Maithili", "Santhali", "Kashmiri", "Sindhi", "Dogri", "Manipuri",
  "Bodo", "Nepali"
];

export default function LanguageSelector() {
  const { selectedLang, setSelectedLang } = useContext(LanguageContext);

  return (
    <select
      value={selectedLang}
      onChange={(e) => setSelectedLang(e.target.value)}
      className="px-3 py-1 rounded text-black"
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>{lang}</option>
      ))}
    </select>
  );
}
