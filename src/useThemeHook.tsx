import { useState } from "react";

export default function useThemeHook() {
  const [theme, setTheme] = useState({
    accent1: "orange-300",
    accent2: "sky-300",
    accent3: "slate-50",
    background: "slate-800",
    text1: "",
    text2: "",
  });

  const setNewColour = function (type: string, colour: string) {
    setTheme((prev) => {
      return { ...prev, [type]: colour };
    });
  };

  return { theme, setNewColour };
}
