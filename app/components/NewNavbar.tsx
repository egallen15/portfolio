"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Define available themes
type Theme = "system" | "light" | "dark" | "green" | "blue";

export default function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [mobileThemeDropdownOpen, setMobileThemeDropdownOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>("system");
  const navRef = useRef<HTMLDivElement>(null);
  const themeDropdownRef = useRef<HTMLDivElement>(null);
  const mobileThemeDropdownRef = useRef<HTMLDivElement>(null);

  // Initialize theme from localStorage or system preference on mount
  useEffect(() => {
    // First check localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      setCurrentTheme("system");
      // Apply system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyThemeClass(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only apply system preference if using system theme
      if (currentTheme === "system") {
        applyThemeClass(e.matches ? "dark" : "light");
      }
    };
    
    // Add event listener
    mediaQuery.addEventListener('change', handleChange);
    
    // Clean up
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [currentTheme]);

  // Close theme dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        themeDropdownOpen &&
        themeDropdownRef.current &&
        !themeDropdownRef.current.contains(event.target as Node)
      ) {
        setThemeDropdownOpen(false);
      }
      
      if (
        mobileThemeDropdownOpen &&
        mobileThemeDropdownRef.current &&
        !mobileThemeDropdownRef.current.contains(event.target as Node)
      ) {
        setMobileThemeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [themeDropdownOpen, mobileThemeDropdownOpen]);
  
  // Function to apply theme
  const applyTheme = (theme: Theme) => {
    if (theme === "system") {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyThemeClass(systemPrefersDark ? "dark" : "light");
      localStorage.removeItem('theme');
    } else {
      applyThemeClass(theme);
      localStorage.setItem('theme', theme);
    }
  };
  
  // Function to apply theme class to HTML element
  const applyThemeClass = (theme: string) => {
    const htmlEl = document.documentElement;
    // Remove all theme classes
    htmlEl.classList.remove("light", "dark", "green", "blue");
    // Add the selected theme class
    if (theme !== "system") {
      htmlEl.classList.add(theme);
    }
  };
  
  // Change theme
  const changeTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    setThemeDropdownOpen(false);
    setMobileThemeDropdownOpen(false);
  };
  
  // Get theme icon
  const getThemeIcon = (theme: Theme) => {
    switch(theme) {
      case "light":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        );
      case "dark":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        );
      case "green":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.3 4.3a1 1 0 011.4 0L10 8.58l4.3-4.3a1 1 0 111.4 1.42L11.42 10l4.3 4.3a1 1 0 01-1.42 1.4L10 11.42l-4.3 4.3a1 1 0 01-1.4-1.42L8.58 10 4.3 5.7a1 1 0 010-1.4z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 100 12 6 6 0 000-12z" clipRule="evenodd" />
          </svg>
        );
      case "blue":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
        );
      case "system":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
          </svg>
        );
    }
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

  // Dropdown menu animation variants
  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  // Theme options
  const themeOptions: {id: Theme, name: string}[] = [
    { id: "light", name: "Light" },
    { id: "dark", name: "Dark" },
    { id: "green", name: "Green" },
    { id: "blue", name: "Blue" },
    { id: "system", name: "System" },
  ];

  // Get current theme display name
  const getCurrentThemeName = () => {
    return themeOptions.find(option => option.id === currentTheme)?.name || "System";
  };

  // Theme dropdown component (reusable for both desktop and mobile)
  const ThemeDropdown = ({ 
    isOpen, 
    variants, 
    className = "" 
  }: { 
    isOpen: boolean, 
    variants: any,
    className?: string
  }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          className={`mt-2 w-48 rounded-md shadow-lg bg-background border z-50 ${className}`}
        >
          <div className="py-1">
            {themeOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => changeTheme(option.id)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center ${
                  currentTheme === option.id ? 'font-semibold bg-gray-100 dark:bg-gray-700' : ''
                } hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                <span className="mr-2">{getThemeIcon(option.id)}</span>
                {option.name}
                {currentTheme === option.id && (
                  <svg className="ml-auto h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <nav
      ref={navRef}
      className="w-full z-50 bg-background md:shadow-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6">
        {/* Updated container */}
        <div className="flex items-center border-b justify-between h-20">
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

          {/* Main navigation area with reordered items */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Theme dropdown (desktop) - Moved before nav items */}
            <div ref={themeDropdownRef} className="relative hidden md:block">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="p-2 rounded-md text-md font-medium transition border border-transparent hover:bg-gray-800 flex items-center space-x-1"
                title="Change theme"
              >
                {getThemeIcon(currentTheme)}
                <span className="ml-1">{getCurrentThemeName()}</span>
                <svg 
                  className={`h-4 w-4 transition-transform ${themeDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Desktop Theme dropdown menu */}
              <ThemeDropdown 
                isOpen={themeDropdownOpen} 
                variants={dropdownVariants} 
                className="absolute right-0"
              />
            </div>
            
            {/* Desktop Navigation Items (after theme dropdown) */}
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
            </div>
            
            {/* Mobile Theme Dropdown (Always visible) */}
            <div ref={mobileThemeDropdownRef} className="relative md:hidden">
              <button
                onClick={() => setMobileThemeDropdownOpen(!mobileThemeDropdownOpen)}
                className="p-2 rounded-md text-sm font-medium transition border border-transparent hover:bg-gray-800 flex items-center"
                title="Change theme"
              >
                {getThemeIcon(currentTheme)}
              </button>
              
              {/* Mobile Theme dropdown */}
              <ThemeDropdown 
                isOpen={mobileThemeDropdownOpen} 
                variants={dropdownVariants} 
                className="absolute right-0"
              />
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="md:hidden">
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
              
              {/* Mobile theme options (kept in mobile menu for consistency) */}
              <div className="px-3 py-2">
                <p className="text-sm font-medium mb-2">Theme</p>
                <div className="space-y-2">
                  {themeOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => changeTheme(option.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${
                        currentTheme === option.id ? 'font-semibold bg-gray-100 dark:bg-gray-700' : ''
                      } hover:bg-gray-100 dark:hover:bg-gray-700`}
                    >
                      <span className="mr-2">{getThemeIcon(option.id)}</span>
                      {option.name}
                      {currentTheme === option.id && (
                        <svg className="ml-auto h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
