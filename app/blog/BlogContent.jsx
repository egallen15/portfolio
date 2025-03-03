'use client';
import { useEffect } from 'react';
import { useLoading } from '../components/LoadingProvider';
import BlogPostListItem from '../components/BlogPostListItem';
import LoadingUI from './loading';

export default function BlogContent({ posts }) {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    // When posts are available, start transitioning away from loading state
    // The provider will ensure minimum loading time
    setIsLoading(false);
  }, [posts, setIsLoading]);

  if (isLoading) {
    return <LoadingUI />;
  }

  return (
    <div className="flex w-full max-w-7xl mx-auto p-4">
      <div className='w-full'>
        <h1 className="text-3xl font-bold mx-4 mt-4 mb-4">All Posts</h1>
        {posts.length > 0 ? (
          <div className="flex flex-col space-y-4">
            {posts.map(post => (
              <BlogPostListItem
                key={post.name}
                title={post.title}
                excerpt={post.excerpt}
                url={post.route}
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
