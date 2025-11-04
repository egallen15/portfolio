"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LightModeIcon from "./LightModeIcon";
import DarkModeIcon from "./DarkModeIcon";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      className={`${className} p-2 rounded-md text-md font-medium transition-colors duration-300 ease-in-out border border-transparent hover:bg-gray-100 dark:hover:bg-slate-800`}
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      {!mounted ? (
        // Show a neutral state during hydration to prevent flash
        <div className="h-5 w-5" />
      ) : (
        theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />
      )}
    </button>
  );
}