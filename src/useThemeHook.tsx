import { useState } from "react";

export default function useThemeHook() {
  const [theme, setTheme] = useState({
    accent1: "orange-400",
    accent2: "sky-300",
    background: "slate-800",
    text1: "black",
    text2: "white",
  });

  const setNewColour = function (type: string, colour: string) {
    setTheme((prev) => {
      return { ...prev, [type]: colour };
    });
  };

  return { theme, setNewColour };
}
