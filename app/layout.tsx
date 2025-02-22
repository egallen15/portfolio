// app/layout.jsx
import type { FC, ReactNode } from "react";
import type { Metadata } from "next";
import NextraTheme from "./components/nextra-theme";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";
import { Banner } from "nextra/components";

export const metadata: Metadata = {
  title: {
    absolute: "",
    template: "%s | Eric Allen",
  },
};

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const pageMap = await getPageMap();
  return (
    <html lang="en" dir="ltr">
      <body>
        <div className="flex flex-col mx-auto">
          {" "}
          <NextraTheme pageMap={pageMap}>{children}</NextraTheme>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
