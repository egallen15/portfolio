import type { PageMapItem } from "nextra";
import type { FC, ReactNode } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

const NextraTheme: FC<{
  children: ReactNode;
  pageMap: PageMapItem[];
}> = ({ children, pageMap }) => {
  return (
    <>
      {/* <h1 className="m-0 p-5 bg-slate-400 font-normal">
        Custom theme demo for <strong>Nextra</strong>
      </h1> */}
      <Navbar pageMap={pageMap} />
      <div className="flex justify-center max-w-[1024px] mx-auto">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default NextraTheme;
