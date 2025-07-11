import React from 'react';
import Image from 'next/image';

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
    image   = 'https://placehold.co/960x540',
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
    <header className='w-full mx-auto flex flex-col p-6 lg:px-0 lg:mr-8 mb-8 rounded-lg'>
      <h1 className='text-2xl md:text-4xl font-bold mb-2'>
        {title}
      </h1>
      
      {excerpt && (
        <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-4'>
          {excerpt}
        </p>
      )}
      
      <div className='flex flex-wrap gap-4 mt-4 mb-6'>
        <div className='flex items-center gap-2'>
          <span className='text-sm text-gray-500'>By</span>
          <span className='font-medium'>{author}</span>
        </div>
        
        <div className='flex items-center gap-2'>
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
      
      <Image
        src={image}
        alt={title}
        width={300}
        height={150}
        className='rounded-lg max-w-4xl shadow-lg w-auto h-auto'
        priority // This loads the image faster since it's above the fold
      />
    </header>
  );
};

export default BlogPostHeader;