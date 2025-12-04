// app/layout.jsx
import type { FC, ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { getPageMap } from "nextra/page-map";
import { ThemeProvider } from "next-themes";
import NextraTheme from "./components/nextra-theme";
import ThemeColor from "./components/ThemeColor";
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
  alternates: {
    types: {
      'application/rss+xml': [
        { url: '/feed.xml', title: "Eric Allen's Blog" }
      ],
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // themeColor is handled dynamically via JavaScript to support manual theme switching
};

const pageMap = await getPageMap() 

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  return (
    <html lang="en" dir="ltr" className={`${noto.className}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var key = 'theme';
    var t = localStorage.getItem(key) || 'light';
    var map = { light:'#FDFDFF', dark:'#020617' };
    var color = map[t] || '#FDFDFF';
    document.documentElement.classList.add(t);
    document.documentElement.style.colorScheme = t;
    // Set a global var so we can use it in the meta tag
    window.__THEME_COLOR__ = color;
  } catch (e) {
    window.__THEME_COLOR__ = '#FDFDFF';
  }
})();
            `,
          }}
        />
        <meta name="theme-color" content="#FDFDFF" id="theme-color-meta" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="flex flex-col w-full mx-auto dark:bg-slate-950 overflow-x-clip">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="theme">
          <ThemeColor />
          <NextraTheme pageMap={pageMap}>{children}</NextraTheme>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
