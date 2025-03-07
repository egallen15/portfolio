import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1a202c",    // custom primary color
        secondary: "#edf2f7",  // custom secondary color
        accent: "#38b2ac",     // custom accent color
        gray: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#d9d9d9',
          300: '#bfbfbf',
          400: '#a6a6a6',
          500: '#8c8c8c',
          600: '#737373',
          700: '#595959',
          800: '#404040',
          900: '#262626',
        },
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            maxWidth: '650px',
            ul: {
              listStyleType: 'disc',
              marginLeft: theme('spacing.6'),
            },
            ol: {
              listStyleType: 'decimal',
              marginLeft: theme('spacing.6'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
