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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,0 C12.8284271,0 13.5,0.671572875 13.5,1.5 L13.5,3 C13.5,3.82842712 12.8284271,4.5 12,4.5 C11.1715729,4.5 10.5,3.82842712 10.5,3 L10.5,1.5 C10.5,0.671572875 11.1715729,0 12,0 Z M12,6 C15.3137085,6 18,8.6862915 18,12 C18,15.3137085 15.3137085,18 12,18 C8.6862915,18 6,15.3137085 6,12 C6,8.6862915 8.6862915,6 12,6 Z M12,8 C9.790861,8 8,9.790861 8,12 C8,14.209139 9.790861,16 12,16 C14.209139,16 16,14.209139 16,12 C16,9.790861 14.209139,8 12,8 Z M17.304,19.425 L18.3645,20.4855 C18.9530683,21.0539583 19.8886272,21.0458286 20.4672279,20.4672279 C21.0458286,19.8886272 21.0539583,18.9530683 20.4855,18.3645 L19.425,17.304 C18.8364317,16.7355417 17.9008728,16.7436714 17.3222721,17.3222721 C16.7436714,17.9008728 16.7355417,18.8364317 17.304,19.425 Z M20.484,3.5145 C21.0695729,4.10024978 21.0695729,5.04975022 20.484,5.6355 L19.425,6.696 C19.0483883,7.08593488 18.4906832,7.2423189 17.966239,7.10504573 C17.4417949,6.96777257 17.0322274,6.55820513 16.8949543,6.03376099 C16.7576811,5.50931684 16.9140651,4.95161171 17.304,4.575 L18.3645,3.5145 C18.9502498,2.92892709 19.8997502,2.92892709 20.4855,3.5145 L20.484,3.5145 Z M22.5,13.5 C23.3284271,13.5 24,12.8284271 24,12 C24,11.1715729 23.3284271,10.5 22.5,10.5 L21,10.5 C20.1715729,10.5 19.5,11.1715729 19.5,12 C19.5,12.8284271 20.1715729,13.5 21,13.5 L22.5,13.5 Z M12,19.5 C12.8284271,19.5 13.5,20.1715729 13.5,21 L13.5,22.5 C13.5,23.3284271 12.8284271,24 12,24 C11.1715729,24 10.5,23.3284271 10.5,22.5 L10.5,21 C10.5,20.1715729 11.1715729,19.5 12,19.5 Z M4.575,6.696 C4.95388015,7.07514813 5.50625298,7.22336529 6.02404496,7.0848195 C6.54183694,6.94627371 6.94638317,6.54201339 7.08529498,6.02431948 C7.22420679,5.50662557 7.07638018,4.9541481 6.6975,4.575 L5.6355,3.5145 C5.04693167,2.94604169 4.11137283,2.95417144 3.53277214,3.53277214 C2.95417144,4.11137283 2.94604169,5.04693167 3.5145,5.6355 L4.575,6.696 L4.575,6.696 Z M6.696,19.425 L5.6355,20.4855 C5.04693167,21.0539583 4.11137283,21.0458286 3.53277214,20.4672279 C2.95417144,19.8886272 2.94604169,18.9530683 3.5145,18.3645 L4.575,17.304 C5.16356833,16.7355417 6.09912717,16.7436714 6.67772786,17.3222721 C7.25632856,17.9008728 7.26445831,18.8364317 6.696,19.425 L6.696,19.425 Z M3,13.5 C3.82842712,13.5 4.5,12.8284271 4.5,12 C4.5,11.1715729 3.82842712,10.5 3,10.5 L1.5,10.5 C0.671572875,10.5 0,11.1715729 0,12 C0,12.8284271 0.671572875,13.5 1.5,13.5 L3,13.5 Z" id="Shape"></path>
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

  // // Get current theme display name
  // const getCurrentThemeName = () => {
  //   return themeOptions.find(option => option.id === currentTheme)?.name || "System";
  // };

  // Theme dropdown component (reusable for both desktop and mobile)
  const ThemeDropdown = ({ 
    isOpen, 
    variants, 
    className = "" 
  }: { 
    isOpen: boolean, 
    variants: {
      closed: { opacity: number; y?: number; scale?: number; transition: { duration: number; ease: string; }; };
      open: { opacity: number; y?: number; scale?: number; transition: { duration: number; ease: string; }; };
    },
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
                <span className="font-bold">Eric Allen</span>
                <span className="text-sm text-gray-500">UX Designer</span>
              </div>
            </Link>
          </div>

          {/* Main navigation area with reordered items */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Theme dropdown (desktop) */}
            <div ref={themeDropdownRef} className="relative hidden md:block">
                <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className={`p-2 rounded-md text-md font-medium transition border border-transparent flex items-center space-x-1
                      ${currentTheme === 'light' ? 'hover:bg-gray-200' : ''}
                      ${currentTheme === 'dark' ? 'hover:bg-gray-700' : ''}
                      ${currentTheme === 'green' ? 'hover:bg-green-700' : ''}
                      ${currentTheme === 'blue' ? 'hover:bg-blue-700' : ''}
                      ${currentTheme === 'system' ? 'hover:bg-gray-800' : ''}`}
                title="Change theme"
                >
                {getThemeIcon(currentTheme)}
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
                  className={`p-2 rounded-md text-md font-medium transition border border-transparent flex items-center space-x-1
                    ${currentTheme === 'light' ? 'hover:bg-gray-200' : ''}
                    ${currentTheme === 'dark' ? 'hover:bg-gray-700' : ''}
                    ${currentTheme === 'green' ? 'hover:bg-green-700' : ''}
                    ${currentTheme === 'blue' ? 'hover:bg-blue-700' : ''}
                    ${currentTheme === 'system' ? 'hover:bg-gray-800' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Theme Dropdown (Always visible) */}
            <div ref={mobileThemeDropdownRef} className="relative md:hidden">
              <button
                onClick={() => setMobileThemeDropdownOpen(!mobileThemeDropdownOpen)}
                className="p-2 rounded-md text-sm font-medium transition border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center"
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
