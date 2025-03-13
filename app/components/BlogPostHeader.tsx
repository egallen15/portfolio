import React from 'react';
import Image from 'next/image';

interface BlogPostHeaderProps {
  frontMatter: {  // new prop containing all metadata from front matter
    title: string;
    date: string;
    author?: string;
    image?: string;
    excerpt?: string;
    // ...other metadata fields if needed...
  };
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ frontMatter }) => {
  return (
    <header>
      <h1>{frontMatter.title}</h1>
      {frontMatter.excerpt && <p>{frontMatter.excerpt}</p>}
      <div>
        {frontMatter.author && <p>By {frontMatter.author}</p>}
        <time dateTime={frontMatter.date}>{frontMatter.date}</time>
      </div>
      {frontMatter.image && (
        <Image
          src={frontMatter.image}
          alt={frontMatter.title}
          width={1200}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
      )}
    </header>
  );
};

export default BlogPostHeader;