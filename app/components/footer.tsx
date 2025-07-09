"use client";

import type { FC } from "react";
import AuthorBio from "./AuthorBio";
import NewsletterSubscription from "./NewsletterSubscription";

export const Footer: FC = () => {

  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto mb-6 px-6 xl:px-0 md:py-8">
        <hr className="mb-6 border-slate-200 dark:border-slate-700 sm:mx-auto lg:my-8" />
        
        {/* Author Bio and Newsletter - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Author Bio - Takes 2/3 on large screens */}
          <div className="lg:col-span-2">
            <AuthorBio />
          </div>
          
          {/* Newsletter Subscription - Takes 1/3 on large screens */}
          <div className="lg:col-span-1 rounded-lg">
            <NewsletterSubscription />
          </div>
        </div>
        
        <div className="relative group w-full mt-6">
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
        </div>

      </div>
    </footer>
  );
};
