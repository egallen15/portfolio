import React from 'react';
import Image from 'next/image';
import * as motion from "motion/react-client";
import Link from 'next/link';

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
    title   = 'Untitled Post',
    author  = 'Eric Allen',
    date    = new Date().toISOString().split('T')[0],
    image   = 'https://placehold.co/1792x770',
    tags    = [],
    excerpt
  } = frontMatter ?? {};

  // Format the date nicely for display
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString; // fallback to original string if parsing fails
    }
  };

  return (
    <header className='w-auto mx-6 mb-6 md:mb-9 md:mx-auto flex flex-col lg:items-center lg:px-0 rounded-lg'>
     <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Link href="/blog" className='w-fit font-semibold underline lg:ml-0 rounded-full items-stretch hover:text-sky-800 dark:text-bg-sky-800'>
              ⬅️ Back to All Posts
            </Link>
           </motion.div> 
      <h1 className='text-3xl md:text-4xl font-bold mt-8 mb-3'>
        {title}
      </h1>
      
      {excerpt && (
        <p className='text-md xl:text-center text-gray-600 dark:text-gray-300 max-w-2xl mb-2 md:mb-4'>
          {excerpt}
        </p>
      )}
      
      <div className='flex flex-wrap items-center gap-4 mt-2 mb-6'>
        <div className='flex items-baseline gap-2'>
          <span className='text-sm text-gray-500'>By</span>
          <span className='font-medium'>{author}</span>
        </div>
        
        <div className='flex items-baseline gap-2'>
          <span className='text-sm text-gray-500'>Published</span>
          <time dateTime={date} className='font-medium'>
            {formatDate(date)}
          </time>
        </div>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-sky-100 dark:bg-sky-800 text-sky-700 dark:text-sky-200 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
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
          className='rounded-lg shadow-md w-auto max-h-96 object-cover'
          priority // This loads the image faster since it's above the fold
        />
      </motion.div>
    </header>
  );
};

export default BlogPostHeader;