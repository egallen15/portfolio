'use client';
import { useEffect } from 'react';
import { useLoading } from './LoadingProvider';
import BlogPostListItem from './BlogPostListItem';
import LoadingUI from '../blog/loading';

export default function BlogContent({ posts }) {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    console.log("BlogContent posts:", posts); // Debug: verify posts include tags
    setIsLoading(false);
  }, [posts, setIsLoading]);

  if (isLoading) {
    return <LoadingUI />;
  }

  return (
    <div className="flex w-full max-w-7xl mx-auto">
      <div className='w-full mx-6 xl:mx-0'>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">All Posts</h1>
        {posts.length > 0 ? (
          <div className="flex flex-col -mx-4 space-y-4">
            {posts.map(post => (
              <BlogPostListItem
                key={post.name}
                date={post.date}
                title={post.title}
                excerpt={post.excerpt}
                url={post.route}
                tags={post.tags} // Pass the tags here
              />
            ))}
          </div>
        ) : (
          <p className="font-bold mx-4 mt-4 mb-4">No blog posts found.</p>
        )}
      </div>
    </div>
  );
}
