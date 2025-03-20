import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPostListItemProps {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  imageUrl?: string;
  tags?: string[]; // Add tags property
}

const BlogPostListItem: FC<BlogPostListItemProps> = ({
  title,
  excerpt,
  date,
  url,
  imageUrl = "https://placehold.co/150",
  tags = ['test1', 'test2', 'test3'], // Default empty array if no tags provided
}) => {
  return (
    <Link href={url} className="block">
      <div className="flex items-start w-full max-w-7xl p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600">
        <div className="flex-shrink-0">
          <Image src={imageUrl} alt="Post Image" width={150} height={150} className="object-cover" />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-500 dark:text-gray-400">{date}</p>
          <div className="h-1 w-20 bg-gray-200 dark:bg-gray-700 rounded-full my-2" />
          <p className="mt-2 text-gray-700 dark:text-gray-300">{excerpt}</p>
          <div className="mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800 dark:bg-slate-700 dark:text-slate-300 mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostListItem;
