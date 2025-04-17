// app/layout.jsx
import type { FC, ReactNode } from "react";
import type { Metadata } from "next";
import NextraTheme from "./components/nextra-theme";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    absolute: "",
    template: "%s | Eric Allen",
  },
  openGraph: {
    // A default OG image for every page
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
    // Twitter cards use the same image
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
};

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  return (
    <html lang="en" dir="ltr">
      <body>
        <div className="flex flex-col w-full mx-auto dark:bg-gradient-to-br from-slate-900 via-slate-950 via-80% to-slate-900 dark:bg-fixed">
          <NextraTheme>{children}</NextraTheme>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
