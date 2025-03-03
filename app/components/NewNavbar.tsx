"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Update html class on mount and when darkMode changes
  useEffect(() => {
    const htmlEl = document.documentElement;
    if (darkMode) {
      htmlEl.classList.add("dark");
    } else {
      htmlEl.classList.remove("dark");
    }
  }, [darkMode]);

  // Customize your nav items here:
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Portfolio", path: "/portfolio" },
    // Add more items as needed
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <nav
      ref={navRef}
      className="w-full z-50 bg-gray-900 shadow"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6">
        {/* Updated container */}
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center transition transform duration-200 hover:-rotate-2 hover:scale-[1.02]"
            >
              <div>
                <span className="cursor-pointer">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-contain rounded-md transition transform duration-200 hover:-rotate-6 hover:scale-[1.02]"
                  />
                </span>
              </div>
              <div className="flex flex-col justify-center px-3">
                <span className="text-l font-bold">Eric Allen</span>
                <span className="text-sm text-gray-500">UX Designer</span>
              </div>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="px-3 py-2 rounded-md text-md font-medium transition border border-transparent hover:bg-gray-800"
              >
                {item.name}
              </Link>
            ))}
            {/* Dark mode toggle button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-md font-medium transition border border-transparent hover:bg-gray-800"
            >
              {darkMode ? "Light ☀️" : "Dark 🌑"}
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-gray-500 bg-gray-800"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)} // close menu on click
                className="block px-3 py-2 rounded-md text-base font-medium transition border border-transparent hover:bg-gray-800"
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition border border-transparent hover:bg-gray-800"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
