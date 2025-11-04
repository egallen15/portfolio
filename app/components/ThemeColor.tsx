"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

// Map your app themes -> Safari header color
const THEME_HEADER: Record<string, string> = {
  light: "#FDFDFF",
  dark: "#020617",
};

// Fallback color if theme key is missing
const FALLBACK = "#FDFDFF";

export default function ThemeColor() {
  const { theme } = useTheme();

  useEffect(() => {
    const color = (theme && THEME_HEADER[theme]) || FALLBACK;
    let tag = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "theme-color";
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", color);
  }, [theme]);

  return null;
}
