// app/layout.jsx
import type { FC, ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { getPageMap } from "nextra/page-map";
import NextraTheme from "./components/nextra-theme";
import "./globals.css";
import { Noto_Sans } from 'next/font/google'

const noto = Noto_Sans({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  display: 'swap'
})

export const metadata: Metadata = {
  // resolve all relative URLs (OG & twitter images, alternates, etc.)
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: {
    absolute: "",
    template: "%s | Eric Allen",
  },
  openGraph: {
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Eric Allen UX Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FDFDFF' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

const pageMap = await getPageMap() 

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  return (
    <html lang="en" dir="ltr" className={`${noto.className}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  function getThemePreference() {
                    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                      return localStorage.getItem('theme');
                    }
                    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  
                  function updateThemeColor(resolvedTheme) {
                    const color = resolvedTheme === 'dark' ? '#020617' : '#FDFDFF';
                    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
                    if (!metaThemeColor) {
                      metaThemeColor = document.createElement('meta');
                      metaThemeColor.name = 'theme-color';
                      document.head.appendChild(metaThemeColor);
                    }
                    metaThemeColor.setAttribute('content', color);
                  }
                  
                  const theme = getThemePreference();
                  const resolvedTheme = theme === 'system' 
                    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                    : theme;
                  
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(resolvedTheme);
                  document.documentElement.style.colorScheme = resolvedTheme;
                  updateThemeColor(resolvedTheme);
                } catch (e) {
                  // Fallback to light theme if anything fails
                  document.documentElement.classList.add('light');
                  document.documentElement.style.colorScheme = 'light';
                }
              })();
            `,
          }}
        />
      </head>
      <body className="flex flex-col w-full mx-auto dark:bg-slate-950 overflow-x-clip">
        <NextraTheme pageMap={pageMap}>{children}</NextraTheme>
      </body>
    </html>
  );
};

export default RootLayout;
