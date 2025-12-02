import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import Breadcrumb from "./Breadcrumb";
import CopyLinkButton from "./CopyLinkButton";

interface BlogPostHeaderProps {
  frontMatter?: {
    title?: string;
    date?: string;
    author?: string;
    image?: string;
    excerpt?: string;
    tags?: string[];
  };
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ frontMatter }) => {
  // Destructure with better defaults and validation
  const {
    title = "Untitled Post",
    author = "Eric Allen",
    date = new Date().toISOString().split("T")[0],
    image,
    tags = [],
    excerpt,
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
          { name: "All posts", href: "/blog", current: false },
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
        >
          <Image
            src={image}
            alt={title}
            width={896}
            height={384}
            className="rounded-lg w-auto max-h-96 object-cover mt-6"
            priority // This loads the image faster since it's above the fold
          />
        </motion.div>
      )}

      {/* Display author, date, and tags in a more structured way */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/eric-allen-profile-pic-2023.png"
              alt={author}
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="text-sm dark:text-slate-400 text-slate-500">
              {author}
            </span>
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
        </div>
        <CopyLinkButton />
      </div>
      <hr className="mt-5 md:mt-6 border-slate-200 dark:border-slate-700 border-t" />
    </header>
  );
};

export default BlogPostHeader;
