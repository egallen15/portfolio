'use client';
import { useState, Suspense } from 'react';
import BlogPostListItem from './BlogPostListItem';
import BlogTagFilter from './BlogTagFilter';
import { BlogContentProps } from '../types/blog';
import type { BlogPost } from '../types/blog';
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const BlogContentClient = ({ 
  posts,
  showTitle = true,
  title = "All Posts",
  rssButton,
  showTagFilter = true
}: BlogContentProps) => {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);

  return (
    <div className="flex w-full max-w-7xl mx-auto">
      <div className='w-full'>
        {showTitle && (
          <div className="flex items-center justify-between mb-6">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-3xl md:text-5xl font-bold"
            >
              {title}
            </motion.h1>
            {rssButton && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                {rssButton}
              </motion.div>
            )}
          </div>
        )}
        
        {showTagFilter && (
          <Suspense fallback={<div className="mb-4 h-10 animate-pulse bg-gray-200 dark:bg-gray-800 rounded" />}>
            <BlogTagFilter posts={posts} onFilterChange={setFilteredPosts} />
          </Suspense>
        )}
        
        {filteredPosts.length > 0 ? (
          <div className="flex flex-col space-y-2">
            <AnimatePresence mode="sync">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.name}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <BlogPostListItem
                    date={post.date}
                    title={post.title}
                    excerpt={post.excerpt}
                    url={post.route}
                    tags={post.tags}
                    imageUrl={post.image}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <p className="font-bold mx-4 mt-4 mb-4">No blog posts found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogContentClient;
