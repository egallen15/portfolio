import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LightModeIcon from "./LightModeIcon";
import DarkModeIcon from "./DarkModeIcon";

// Define available themes (only "light" and "dark" are used after toggle)
type Theme = "system" | "light" | "dark";

export default function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Initialize theme state. The function ensures it only runs on the client.
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      return savedTheme || "system";
    }
    return "system";
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  // Initialize theme from localStorage or system preference on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Apply the theme after the component has mounted on the client
      if (currentTheme === "system") {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(systemPrefersDark ? "dark" : "light");
      } else {
        applyTheme(currentTheme);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme]);

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
      return <LightModeIcon />;
    } else {
      return <DarkModeIcon />;
    }
  };

  // Navigation items
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
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
    <nav ref={navRef} className="w-full sticky top-0 z-50 bg-white dark:bg-gradient-to-br from-slate-900 via-slate-950 via-80% to-slate-900 dark:bg-fixed">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        <div className="flex items-center border-b border-b-gray-200 dark:border-b-slate-700 justify-between h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center transition transform duration-200 lg:hover:neon lg:hover:-rotate-2 lg:hover:scale-[1.02]"
            >
              <div>
                <span className="cursor-pointer">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-contain rounded-md transition transform duration-200 lg:hover:-rotate-6 lg:hover:scale-[1.02]"
                  />
                </span>
              </div>
              <div className="flex flex-col justify-center px-3">
                <span className="text-lg font-semibold lg:hover:neon">Eric Allen</span>
                <span className="text-sm text-gray-500">UX Designer</span>
              </div>
            </Link>
          </div>

          {/* Main navigation area */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Desktop Theme Toggle Button */}
            <div className="hidden md:block">
              {isClient && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-md text-md font-medium transition-colors duration-300 ease-in-out border border-transparent hover:bg-gray-100 dark:hover:bg-slate-800"
                  title="Toggle theme"
                >
                  {getThemeIcon()}
                </button>
              )}
            </div>
            
            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="p-2 rounded-md text-md font-medium transition border border-transparent hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Theme Toggle Button */}
            <div className="md:hidden">
              {isClient && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out border border-transparent hover:bg-gray-100 dark:hover:bg-slate-800"
                  title="Toggle theme"
                >
                  {getThemeIcon()}
                </button>
              )}
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="p-2 rounded-md text-foreground hover:bg-gray-100 dark:hover:bg-slate-800"
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
                  className="block px-3 py-2 rounded-md text-base font-medium transition border border-transparent dark:hover:bg-slate-700 hover:bg-gray-100"
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
