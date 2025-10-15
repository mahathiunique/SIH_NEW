// src/utils/translateText.js
export async function autoTranslate(text, targetLang = "en") {
  if (!text || targetLang === "en") return text;

  try {
    // global cache
    globalThis.__TRANSLATE_CACHE = globalThis.__TRANSLATE_CACHE || {};
    const cacheKey = `${targetLang}:::${text}`;
    if (globalThis.__TRANSLATE_CACHE[cacheKey]) {
      return globalThis.__TRANSLATE_CACHE[cacheKey];
    }

    // 1) Try LibreTranslate public instance (works in many setups)
    try {
      const res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: text,
          source: "auto",
          target: targetLang,
          format: "text",
        }),
      });
      if (res.ok) {
        const j = await res.json();
        const translated = j.translatedText ?? j.result ?? text;
        globalThis.__TRANSLATE_CACHE[cacheKey] = translated;
        return translated;
      }
      // fall through to fallback
    } catch (err) {
      // continue to fallback
      // console.warn("LibreTranslate failed:", err);
    }

    // 2) Fallback: unofficial Google translate endpoint (may work, might be CORS-limited)
    try {
      const url =
        "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" +
        encodeURIComponent(targetLang) +
        "&dt=t&q=" +
        encodeURIComponent(text);
      const res2 = await fetch(url);
      if (res2.ok) {
        const data = await res2.json();
        // data[0] contains segments: [[translated, original, ...], ...]
        const translated = (data[0] || []).map((seg) => seg[0]).join("");
        globalThis.__TRANSLATE_CACHE[cacheKey] = translated;
        return translated;
      }
    } catch (err2) {
      // console.warn("Google fallback failed", err2);
    }

    // If all fail, return original text
    return text;
  } catch (err) {
    console.error("Translation unexpected error:", err);
    return text;
  }
}
