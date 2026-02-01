'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import Breadcrumb from "./Breadcrumb";
import CopyLinkButton from "./CopyLinkButton";
import ImageLightbox from "./ImageLightbox";

interface BlogPostHeaderProps {
  frontMatter?: {
    title?: string;
    date?: string;
    author?: string;
    image?: string;
    excerpt?: string;
    tags?: string[];
    readingTime?: {
      text: string;
      minutes: number;
      time: number;
      words: number;
    };
  };
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ frontMatter }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  // Destructure with better defaults and validation
  const {
    title = "Untitled Post",
    author = "Eric Allen",
    date = new Date().toISOString().split("T")[0],
    image,
    tags = [],
    excerpt,
    readingTime,
  } = frontMatter ?? {};

  // Format the date nicely for display
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString; // fallback to original string if parsing fails
    }
  };

  // Determine what to show in breadcrumb - use first tag if available, otherwise use title
  const breadcrumbName = tags.length > 0 ? tags[0] : title;

  return (
    <header className="w-auto mx-6 mb-6 md:mx-0 md:w-[48rem] flex flex-col lg:px-0 rounded-lg">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      ></motion.div>
      <Breadcrumb
        pages={[
          { name: "blog", href: "/blog", current: false },
          { name: breadcrumbName, href: "", current: true },
        ]}
      />
      {tags.length > 0 && (
          <div className="flex items-center gap-1 mb-3 sm:mb-4 flex-wrap">
            {tags.map((tag, idx) => (
              <span key={tag} className="flex items-center gap-1">
                <Link
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:underline"
                >
                  {tag}
                </Link>
                {idx < tags.length - 1 && (
                  <span className="text-xs text-slate-500 dark:text-slate-400">•</span>
                )}
              </span>
            ))}
          </div>
        )}

      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>

      {excerpt && (
        <p className="text-md text-slate-500 dark:text-slate-400 mt-3 sm:mt-4">
          {excerpt}
        </p>
      )}

      {image && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="relative mt-6 cursor-pointer group"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Image
            src={image}
            alt={title}
            width={896}
            height={384}
            className="rounded-lg w-auto max-h-96 object-cover stacked-shadow"
            priority // This loads the image faster since it's above the fold
          />
          {/* Hover overlay to indicate clickability */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 rounded-lg flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-3">
              <svg
                className="w-6 h-6 text-slate-700 dark:text-slate-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
          </div>
        </motion.div>
      )}

      {/* Display author, date, and tags in a more structured way */}
      <div className="flex items-start xs:items-center justify-between mt-6">
        <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/eric-allen-profile-pic-2023.png"
              alt={author}
              width={20}
              height={20}
              className="rounded-full"
            />
            <Link
              href="/about"
              className="text-sm dark:text-slate-400 text-slate-500 hover:underline"
            >
              {author}
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="h-5 w-5 text-slate-500 dark:text-slate-400" />
            <time
              dateTime={date}
              className="text-sm dark:text-slate-400 text-slate-500"
            >
              {formatDate(date)}
            </time>
          </div>
          {readingTime && (
            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-slate-500 dark:text-slate-400" />
              <span className="text-sm dark:text-slate-400 text-slate-500">
                {readingTime.text}
              </span>
            </div>
          )}
        </div>
        <CopyLinkButton />
      </div>
      <hr className="mt-5 md:mt-6 border-slate-200 dark:border-slate-700 border-t" />
      
      {/* Image Lightbox */}
      {image && (
        <ImageLightbox
          images={[{ src: image, alt: title, width: 1200, height: 675 }]}
          currentIndex={0}
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </header>
  );
};

export default BlogPostHeader;
