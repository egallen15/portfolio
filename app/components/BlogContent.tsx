'use client';
import BlogPostListItem from './BlogPostListItem';
import { BlogContentProps } from '../types/blog';

const BlogContentClient = ({ 
  posts,
  showTitle = true,
  title = "All Posts" 
}: BlogContentProps) => {
  return (
    <div className="flex w-full max-w-7xl mx-auto">
      <main className='w-full mx-6 xl:mx-0'>
        {showTitle && <h1 className="text-3xl md:text-5xl font-bold mb-6">{title}</h1>}
        {posts.length > 0 ? (
          <div className="flex flex-col space-y-2">
            {posts.map(post => (
              <BlogPostListItem
                key={post.name}
                date={post.date}
                title={post.title}
                excerpt={post.excerpt}
                url={post.route}
                tags={post.tags}
              />
            ))}
          </div>
        ) : (
          <p className="font-bold mx-4 mt-4 mb-4">No blog posts found.</p>
        )}
      </main>
    </div>
  );
};

export default BlogContentClient;
