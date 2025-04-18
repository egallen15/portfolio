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
  // destructure with defaults
  const {
    title   = 'Untitled Post',
    excerpt = 'No excerpt available.',
    author  = 'Anonymous',
    date    = new Date().toISOString().split('T')[0],
    image   = 'https://placehold.co/1200x600',
    tags    = [],
  } = frontMatter ?? {};

  return (
    <header className='flex flex-col items-center justify-center max-w-4xl p-6 rounded-lg shadow-lg'>
      <h1 className='text-6xl font-bold text-center'>{title}</h1>
      <p className='text-orange-300'>{excerpt}</p>
      <div>
        <p>By {author}</p>
        <time dateTime={date}>{date}</time>
      </div>
      <Image
        src={image}
        alt={title}
        width={1200}
        height={600}
        className='rounded-lg shadow-md mt-4 max-w-4xl'
        style={{ width: '100%', height: 'auto' }}
      />
      {tags.length > 0
        ? (
          <div className="flex space-x-2">
            {tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-gray-200 rounded">
                {tag}
              </span>
            ))}
          </div>
        )
        : <p className="text-gray-500">No tags</p>
      }
    </header>
  );
};

export default BlogPostHeader;