import { useState } from "react";

export default function useThemeHook() {
  const [theme, setTheme] = useState({
    accent1: "orange-300",
    accent2: "sky-300",
  });

  const setNewColour = (type: string, colour: string) => {
    setTheme((prev) => {
      return { ...prev, [type]: colour };
    });
  };

  return [theme, setNewColour];
}
