'use client';
import type { FC, ReactNode } from "react";
import { Footer } from "./footer";
import NewNavbar from "./NewNavbar";

const NextraTheme: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      {/* <h1 className="m-0 p-5 bg-slate-400 font-normal">
        Custom theme demo for <strong>Nextra</strong>
      </h1> */}
      <NewNavbar />
      <div className="pt-12 md:pt-20 flex justify-center w-full max-w-7xl mx-auto">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default NextraTheme;
