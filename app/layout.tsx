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
