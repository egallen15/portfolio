"use client";

import type { FC } from "react";
import { useState, useEffect } from "react";

const mowedFrames = [
  "`\\.=.wwwWWwwWWwwwWWwWWWWwwwwwwWwwW",
  "_`\\.=.wwWWwwWWwwwWWwWWWWwwwwwwWwwW",
  "__`\\.=.wWWwwWWwwwWWwWWWWwwwwwwWwwW",
  "___`\\.=.WWwwWWwwwWWwWWWWwwwwwwWwwW",
  "____`\\.=.WwwWWwwwWWwWWWWwwwwwwWwwW",
  "_____`\\.=.wwWWwwwWWwWWWWwwwwwwWwwW",
  "______`\\.=.wWWwwwWWwWWWWwwwwwwWwwW",
  "_______`\\.=.WWwwwWWwWWWWwwwwwwWwwW",
  "_`\\.=.wwWWwwWWwwwWWwWWWWwwwwwwWwwW",
  "_`\\.=.wwWWwwWWwwwWWwWWWWwwwwwwWwwW",
  "_`\\.=.wwWWwwWWwwwWWwWWWWwwwwwwWwwW",
  "_`\\.=.wwWWwwWWwwwWWwWWWWwwwwwwWwwW",
  "_`\\.=.wwWWwwWWwwwWWwWWWWwwwwwwWwwW",
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
      <button>
          {Array.from(mowedFrames[frameIndex]).map((char, index) => (
            <span key={index} style={{ transitionDelay: `${index * 25}ms`, color: 'green' }}>
              {char}
            </span>
          ))}
        </button>
        <hr className="mb-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="https://ericallenux.com" className="hover:underline">
            Eric Allen UX
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
