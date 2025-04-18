// app/layout.jsx
import type { FC, ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import NextraTheme from "./components/nextra-theme";
import "./globals.css";

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
  themeColor: "#000000",
};

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  return (
    <html lang="en" dir="ltr">
      <body className="flex flex-col w-full mx-auto dark:bg-gradient-to-br from-slate-900 via-slate-950 via-80% to-slate-900 dark:bg-fixed">
          <NextraTheme>{children}</NextraTheme>
      </body>
    </html>
  );
};

export default RootLayout;
