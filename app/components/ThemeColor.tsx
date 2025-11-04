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

function updateThemeColorMeta(color: string) {
  // Remove all existing theme-color meta tags (iOS Safari can be finicky)
  const existingTags = document.querySelectorAll('meta[name="theme-color"]');
  existingTags.forEach(tag => tag.remove());
  
  // Create fresh meta tag - iOS Safari respects this better than updates
  const newTag = document.createElement("meta");
  newTag.name = "theme-color";
  newTag.content = color;
  
  // Insert at the beginning of head for higher priority
  const firstMeta = document.head.querySelector('meta');
  if (firstMeta) {
    document.head.insertBefore(newTag, firstMeta);
  } else {
    document.head.appendChild(newTag);
  }
  
  // Debug log for iOS testing
  console.log('Theme color updated to:', color);
}

export default function ThemeColor() {
  const { theme } = useTheme();

  useEffect(() => {
    if (!theme) return;
    
    const color = THEME_HEADER[theme] || FALLBACK;
    
    // Update immediately
    updateThemeColorMeta(color);
    
    // iOS Safari sometimes needs a double-update after a small delay
    const timeoutId = setTimeout(() => {
      updateThemeColorMeta(color);
    }, 10);
    
    return () => clearTimeout(timeoutId);
  }, [theme]);

  // Also set it on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const color = THEME_HEADER[savedTheme] || FALLBACK;
    updateThemeColorMeta(color);
  }, []);

  return null;
}
