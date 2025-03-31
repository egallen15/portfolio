"use client";

import type { FC } from "react";
import { useState, useEffect } from "react";

const mowedFrames = [
  "`\\.=.wwwWWwwWWwwwWWwWWWWw",
  "_`\\.=.wwWWwwWWwwwWWwWWWWw",
  "__`\\.=.wWWwwWWwwwWWwWWWWw",
  "___`\\.=.WWwwWWwwwWWwWWWWw",
  "____`\\.=.WwwWWwwwWWwWWWWw",
  "_____`\\.=.wwWWwwwWWwWWWWw",
  "______`\\.=.wWWwwwWWwWWWWw",
  "_______`\\.=.WWwwwWWwWWWWw",
];

export const Footer: FC = () => {
  const [frameIndex, setFrameIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % mowedFrames.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto p-6 mb-6 md:py-8">
        <hr className="mb-6 border-gray-200 dark:border-slate-700 sm:mx-auto lg:my-8" />
        <div className="relative group w-full">
          <button
            className="inline-block hover:animate-lawnmower active:animate-lawnmower hover:text-green-500 hover:neon text-gray-500 dark:text-gray-400 mr-1 absolute transition-transform duration-1000 z-10"
            style={{ left: 0 }}
          >
            \.=.
          </button>
          <span className="inline-block text-sm ml-7 text-gray-500 sm:text-center dark:text-gray-400">
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
