'use client';
import type { FC, ReactNode } from "react";
import { Footer } from "./footer";
import NewNavbar from "./NewNavbar";

// PageMap represents the array of items for navigation
type PageMap = unknown[];

const NextraTheme: FC<{ children: ReactNode; pageMap: PageMap }> = ({ children, pageMap }) => {
  // consume pageMap prop to satisfy signature
  void pageMap;

  return (
    <>
      {/* <h1 className="m-0 p-5 bg-slate-400 font-normal">
        Custom theme demo for <strong>Nextra</strong>
      </h1> */}
      <NewNavbar />
      <div className="mt-8 md:mt-12 w-full flex justify-center max-w-7xl mx-auto">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default NextraTheme;
