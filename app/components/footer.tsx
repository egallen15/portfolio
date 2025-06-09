"use client";

import type { FC } from "react";
import AuthorBio from "./AuthorBio";

export const Footer: FC = () => {

  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto mb-6 px-6 xl:px-0 md:py-8">
        <hr className="mb-6 border-slate-200 dark:border-slate-700 sm:mx-auto lg:my-8" />
        <div className="relative group w-full">
          <button
            className="inline-block hover:animate-lawnmower active:animate-lawnmower hover:text-green-500 hover:neon text-slate-500 mr-1 absolute transition-transform duration-1000 z-10"
            style={{ left: 0 }}
          >
            \.=.
          </button>
          <span className="inline-block text-sm ml-7 text-slate-500 sm:text-center">
           © {new Date().getFullYear()}{" "}
          <a href="https://ericallenux.com" className="hover:underline">
            Eric Allen UX
          </a>
          . All Rights Reserved.
        </span>
        <AuthorBio />
        </div>

      </div>
    </footer>
  );
};
