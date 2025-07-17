import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./blog/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.js",
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
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translate3d(-60%,0,0)' },
          '30%': { opacity: '0', transform: 'translate3d(-30%,0,0)' },
          '100%': { opacity: '1', transform: 'translateZ(0)' },
        },
        lawnMower: {
          '0%': { transform: 'translate(0)' },
          '10%': { transform: 'translate(-1px, -1px)' },
          '20%': { transform: 'translate(1px, -1px)' },
          '30%': { transform: 'translate(-1px, 1px)' },
          '40%': { transform: 'translate(1px, 1px)' },
          '50%': { transform: 'translate(-1px, -1px)' },
          '60%': { transform: 'translate(1px, -1px)' },
          '70%': { transform: 'translate(-1px, 1px)' },
          '80%': { transform: 'translate(-1px, -1px)' },
          '90%': { transform: 'translate(1px, -1px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
        fadeInRight: 'fadeInRight .6s ease-out forwards',
        lawnmower: 'lawnMower 1s ease 0s infinite normal forwards',
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            maxWidth: '80ch',
            lineHeight: '1.6',
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
