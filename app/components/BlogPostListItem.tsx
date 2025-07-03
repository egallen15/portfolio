import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

interface BlogPostListItemProps {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  imageUrl?: string;
  tags?: string[];
}

const BlogPostListItem: FC<BlogPostListItemProps> = ({
  title,
  excerpt,
  date,
  url,
  imageUrl = "https://placehold.co/300x150",
  tags = ['test1', 'test2', 'test3'],
}) => {
  // Convert the input date string to a Date object.
  const parsedDate = new Date(date);

  // Use date-fns to generate a relative time string.
  const relativeDate = formatDistanceToNow(parsedDate, { addSuffix: true });
  
  return (
    <Link href={url} className="block rounded-lg hover:bg-gradient-to-tr hover:from-slate-200/30 hover:to-sky-100 dark:hover:bg-gradient-to-tr dark:hover:from-slate-400/30 dark:hover:to-sky-700/30">
      <div className="flex flex-col md:flex-row items-start w-full max-w-7xl p-4 rounded-lg">
        <div className="flex flex-shrink-0">
          <Image src={imageUrl} alt="Post Image" width={300} height={150} className="object-cover aspect-video rounded-lg mb-4 lg:mb-0" />
        </div>
        <div className="lg:ml-4">
            <div className="flex items-end">
            <h2 className="text-xl font-bold mr-2">{title}</h2>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-sky-500 to-sky-300 rounded-full my-2" />
          <p className="mt-2 text-gray-700 dark:text-gray-300">{excerpt}</p>
          <div className="my-2 flex-col justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 mb-2 mr-4">{relativeDate}</p>
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
