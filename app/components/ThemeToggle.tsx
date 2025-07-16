"use client";
import { useState, useEffect } from "react";
import LightModeIcon from "./LightModeIcon";
import DarkModeIcon from "./DarkModeIcon";

type Theme = "system" | "light" | "dark";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  // initialize from localStorage to avoid a mount effect that sets state
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme) || "system";
  });
  const [resolved, setResolved] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    // Check the class that was already applied by our blocking script
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });

  // apply theme to document and track resolved color
  const applyTheme = (next: Theme) => {
    const nextResolved: "light" | "dark" = next === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      : next;
    // add or remove both dark and light classes for clear manual override
    document.documentElement.classList.toggle("dark", nextResolved === "dark");
    document.documentElement.classList.toggle("light", nextResolved === "light");
    setResolved(nextResolved);
  };

  // apply theme, persist choice, and watch system setting
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (theme === "system") applyTheme("system");
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [theme]);

  // toggle light/dark
  const toggle = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggle}
      className={`${className} p-2 rounded-md text-md font-medium transition-colors duration-300 ease-in-out border border-transparent hover:bg-gray-100 dark:hover:bg-slate-800`}
      title="Toggle theme"
    >
      {resolved === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
}