// app/layout.jsx
import type { FC, ReactNode } from "react";
import type { Metadata, Viewport } from "next";
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

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  return (
    <html lang="en" dir="ltr" className={`${noto.className}`}>
      <body className="flex flex-col w-full mx-auto dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:via-80% dark:to-slate-900 dark:bg-fixed">
        <NextraTheme>{children}</NextraTheme>
      </body>
    </html>
  );
};

export default RootLayout;
