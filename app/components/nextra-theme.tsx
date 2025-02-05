import type { PageMapItem } from "nextra";
import { version } from "nextra/package.json";
import type { FC, ReactNode } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

const NextraTheme: FC<{
  children: ReactNode;
  pageMap: PageMapItem[];
}> = ({ children, pageMap }) => {
  return (
    <>
      <h1 className="m-0 p-5 bg-slate-400 font-normal">
        Custom theme demo for <strong>Nextra {version}</strong>
      </h1>
      <Navbar pageMap={pageMap} />
      <div className="flex">
        <Sidebar pageMap={pageMap} />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default NextraTheme;
