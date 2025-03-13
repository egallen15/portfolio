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
        <div className="flex flex-col w-full mx-auto bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <NextraTheme>{children}</NextraTheme>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
