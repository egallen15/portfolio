'use client';
import BlogPostListItem from './BlogPostListItem';
import { BlogContentProps } from '../types/blog';
import * as motion from "motion/react-client";

const BlogContentClient = ({ 
  posts,
  showTitle = true,
  title = "All Posts" 
}: BlogContentProps) => {
  return (
    <div className="flex w-full max-w-7xl mx-auto">
      <div className='w-full'>
        {showTitle && (
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 flex"
          >
            {title}
          </motion.h1>
        )}
        {posts.length > 0 ? (
          <motion.div 
            className="flex flex-col space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {posts.map((post) => (
              <motion.div
                key={post.name}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <BlogPostListItem
                  date={post.date}
                  title={post.title}
                  excerpt={post.excerpt}
                  url={post.route}
                  tags={post.tags}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="font-bold mx-4 mt-4 mb-4">No blog posts found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogContentClient;
