"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Initialize darkMode from localStorage or system preference on mount
  useEffect(() => {
    // First check localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else if (savedTheme === 'light') {
      setDarkMode(false);
    } else {
      // If no localStorage value, use system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemPrefersDark);
    }
  }, []);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only apply system preference if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setDarkMode(e.matches);
      }
    };
    
    // Add event listener
    mediaQuery.addEventListener('change', handleChange);
    
    // Clean up
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Update html class and localStorage when darkMode changes
  useEffect(() => {
    if (darkMode === null) return; // Skip initial null state
    
    const htmlEl = document.documentElement;
    if (darkMode) {
      htmlEl.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      htmlEl.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // Reset to system preference
  const useSystemTheme = () => {
    localStorage.removeItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(systemPrefersDark);
  };

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

  // Mobile menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <nav
      ref={navRef}
      className="w-full z-50 bg-background shadow-lg border-b md:shadow-none md:border-b-0"
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
                <span className="font-bold">Eric Allen</span>
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
              className="p-2 rounded-md text-md font-medium transition border border-transparent hover:bg-gray-800 flex items-center"
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </>
              )}
            </button>
            <button
              onClick={useSystemTheme}
              className="p-2 rounded-md text-sm font-medium text-gray-500 transition border border-transparent hover:bg-gray-800"
              title="Use system theme"
            >
              System
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

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
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
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium transition border border-transparent hover:bg-gray-800 flex items-center"
              >
                {darkMode ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                    Switch to Light Mode
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    Switch to Dark Mode
                  </>
                )}
              </button>
              <button
                onClick={useSystemTheme}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition border border-transparent hover:bg-gray-800"
              >
                Use System Theme
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
