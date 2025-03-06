"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Define available themes (only "light" and "dark" are used after toggle)
type Theme = "system" | "light" | "dark";

export default function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>("system");
  const navRef = useRef<HTMLDivElement>(null);

  // Initialize theme from localStorage or system preference on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      if (savedTheme) {
        setCurrentTheme(savedTheme);
        applyTheme(savedTheme);
      } else {
        setCurrentTheme("system");
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyThemeClass(systemPrefersDark ? "dark" : "light");
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Listen for system preference changes (only when using system theme)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        if (currentTheme === "system") {
          applyThemeClass(e.matches ? "dark" : "light");
        }
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [currentTheme]);

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

  // Function to apply theme based on selection
  const applyTheme = (theme: Theme) => {
    if (typeof window !== 'undefined') {
      if (theme === "system") {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyThemeClass(systemPrefersDark ? "dark" : "light");
        localStorage.removeItem('theme');
      } else {
        applyThemeClass(theme);
        localStorage.setItem('theme', theme);
      }
    }
  };

  // Function to apply theme class to HTML element
  const applyThemeClass = (theme: string) => {
    if (typeof document !== 'undefined') {
      const htmlEl = document.documentElement;
      htmlEl.classList.remove("light", "dark");
      if (theme !== "system") {
        htmlEl.classList.add(theme);
      }
    }
  };

  // Toggle theme between light and dark.
  const toggleTheme = () => {
    const effectiveTheme: "light" | "dark" =
      currentTheme === "system"
        ? (typeof window !== 'undefined' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : "light")
        : currentTheme === "light" ? "light" : "dark";

    const newTheme: Theme = effectiveTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    applyTheme(newTheme);
  };

  // Simple theme icon function to show only light and dark icons.
  const getThemeIcon = () => {
    // Determine the effective theme if "system" is in use.
    const effectiveTheme: "light" | "dark" =
      currentTheme === "system"
      ? (typeof window !== 'undefined' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light") : "light")
      : currentTheme;
    
    if (effectiveTheme === "light") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,0 C12.8284271,0 13.5,0.671572875 13.5,1.5 L13.5,3 C13.5,3.82842712 12.8284271,4.5 12,4.5 C11.1715729,4.5 10.5,3.82842712 10.5,3 L10.5,1.5 C10.5,0.671572875 11.1715729,0 12,0 Z M12,6 C15.3137085,6 18,8.6862915 18,12 C18,15.3137085 15.3137085,18 12,18 C8.6862915,18 6,15.3137085 6,12 C6,8.6862915 8.6862915,6 12,6 Z M12,8 C9.790861,8 8,9.790861 8,12 C8,14.209139 9.790861,16 12,16 C14.209139,16 16,14.209139 16,12 C16,9.790861 14.209139,8 12,8 Z M17.304,19.425 L18.3645,20.4855 C18.9530683,21.0539583 19.8886272,21.0458286 20.4672279,20.4672279 C21.0458286,19.8886272 21.0539583,18.9530683 20.4855,18.3645 L19.425,17.304 C18.8364317,16.7355417 17.9008728,16.7436714 17.3222721,17.3222721 C16.7436714,17.9008728 16.7355417,18.8364317 17.304,19.425 Z M20.484,3.5145 C21.0695729,4.10024978 21.0695729,5.04975022 20.484,5.6355 L19.425,6.696 C19.0483883,7.08593488 18.4906832,7.2423189 17.966239,7.10504573 C17.4417949,6.96777257 17.0322274,6.55820513 16.8949543,6.03376099 C16.7576811,5.50931684 16.9140651,4.95161171 17.304,4.575 L18.3645,3.5145 C18.9502498,2.92892709 19.8997502,2.92892709 20.4855,3.5145 L20.484,3.5145 Z M22.5,13.5 C23.3284271,13.5 24,12.8284271 24,12 C24,11.1715729 23.3284271,10.5 22.5,10.5 L21,10.5 C20.1715729,10.5 19.5,11.1715729 19.5,12 C19.5,12.8284271 20.1715729,13.5 21,13.5 L22.5,13.5 Z M12,19.5 C12.8284271,19.5 13.5,20.1715729 13.5,21 L13.5,22.5 C13.5,23.3284271 12.8284271,24 12,24 C11.1715729,24 10.5,23.3284271 10.5,22.5 L10.5,21 C10.5,20.1715729 11.1715729,19.5 12,19.5 Z M4.575,6.696 C4.95388015,7.07514813 5.50625298,7.22336529 6.02404496,7.0848195 C6.54183694,6.94627371 6.94638317,6.54201339 7.08529498,6.02431948 C7.22420679,5.50662557 7.07638018,4.9541481 6.6975,4.575 L5.6355,3.5145 C5.04693167,2.94604169 4.11137283,2.95417144 3.53277214,3.53277214 C2.95417144,4.11137283 2.94604169,5.04693167 3.5145,5.6355 L4.575,6.696 L4.575,6.696 Z M6.696,19.425 L5.6355,20.4855 C5.04693167,21.0539583 4.11137283,21.0458286 3.53277214,20.4672279 C2.95417144,19.8886272 2.94604169,18.9530683 3.5145,18.3645 L4.575,17.304 C5.16356833,16.7355417 6.09912717,16.7436714 6.67772786,17.3222721 C7.25632856,17.9008728 7.26445831,18.8364317 6.696,19.425 L6.696,19.425 Z M3,13.5 C3.82842712,13.5 4.5,12.8284271 4.5,12 C4.5,11.1715729 3.82842712,10.5 3,10.5 L1.5,10.5 C0.671572875,10.5 0,11.1715729 0,12 C0,12.8284271 0.671572875,13.5 1.5,13.5 L3,13.5 Z" id="Shape"></path>
        </svg>
      );
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      );
    }
  };

  // Navigation items remain unchanged
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  // Mobile menu animation variants remain unchanged
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
    <nav ref={navRef} className="w-full z-50 bg-background md:shadow-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-6">
        <div className="flex items-center border-b border-b-gray-200 dark:border-b-gray-700 justify-between h-20">
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
                <span className="text-lg font-medium">Eric Allen</span>
              </div>
            </Link>
          </div>

          {/* Main navigation area */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Desktop Theme Toggle Button */}
            <div className="hidden md:block">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-md font-medium transition border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
                title="Toggle theme"
              >
                {getThemeIcon()}
              </button>
            </div>
            
            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="p-2 rounded-md text-md font-medium transition border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Theme Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-sm font-medium transition border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
                title="Toggle theme"
              >
                {getThemeIcon()}
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="p-2 rounded-md text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
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
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium transition border border-transparent hover:bg-gray-800"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
