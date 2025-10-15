// src/context/LanguageContext.js
import { createContext } from "react";

const LanguageContext = createContext({
  selectedLang: "en", // language code (not full name)
  setSelectedLang: () => {},
});

export default LanguageContext;
