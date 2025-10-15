import React from "react";
import useTranslate from "../hooks/useTranslate";

export default function Translate({ text }) {
  const translated = useTranslate(text);
  return <>{translated}</>;
}
