// src/hooks/useTranslate.js
import { useContext, useEffect, useRef, useState } from "react";
import LanguageContext from "../context/LanguageContext";
import { autoTranslate } from "../components/utils/translateText";

const localCache = new Map();

export default function useTranslate(text) {
  const { selectedLang } = useContext(LanguageContext);
  const [translated, setTranslated] = useState(text);
  const tRef = useRef();

  useEffect(() => {
    if (!text) {
      setTranslated(text);
      return;
    }
    if (!selectedLang || selectedLang === "en") {
      setTranslated(text);
      return;
    }

    const key = `${selectedLang}:::${text}`;
    if (localCache.has(key)) {
      setTranslated(localCache.get(key));
      return;
    }

    // debounce (avoid too many calls)
    if (tRef.current) clearTimeout(tRef.current);
    tRef.current = setTimeout(() => {
      autoTranslate(text, selectedLang)
        .then((res) => {
          localCache.set(key, res);
          setTranslated(res);
        })
        .catch(() => {
          setTranslated(text);
        });
    }, 300); // 300ms debounce

    return () => {
      if (tRef.current) clearTimeout(tRef.current);
    };
  }, [text, selectedLang]);

  return translated;
}
