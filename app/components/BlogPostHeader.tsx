import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import Breadcrumb from "./Breadcrumb";

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
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString; // fallback to original string if parsing fails
    }
  };

  // Determine what to show in breadcrumb - use first tag if available, otherwise use title
  const breadcrumbName = tags.length > 0 ? tags[0] : title;

  return (
    <header className="w-auto mx-6 mb-6 md:mb-9 md:mx-0 md:w-[48rem] flex flex-col lg:px-0 rounded-lg">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      ></motion.div>
        <Breadcrumb 
          pages={[
            { name: "All posts", href: "/blog", current: false },
            { name: breadcrumbName, href: "", current: true }
          ]}
        />
      
      
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>

      {excerpt && (
        <p className="text-md text-slate-500 dark:text-slate-400 mt-3">
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
            className="rounded-lg shadow-md w-auto max-h-96 object-cover my-6"
            priority // This loads the image faster since it's above the fold
          />
        </motion.div>
      )}
      {/* Display author, date, and tags in a more structured way */}
      <div className="flex items-baseline gap-2 mt-3">
        <span className="font-sm dark:text-slate-400 text-slate-500">
          {author}
        </span>
        <span className="font-sm text-slate-500">•</span>
      <div className="flex items-baseline gap-2">
        <time
          dateTime={date}
          className="font-sm dark:text-slate-400 text-slate-500"
        >
          {formatDate(date)}
        </time>
      </div>
      </div>

      
    </header>
  );
};

export default BlogPostHeader;
