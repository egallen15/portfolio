import type { FC } from "react";
//
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

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
  imageUrl = "https://placehold.co/1920x1080",
  tags = ["test1", "test2", "test3"],
}) => {
  // Convert the input date string to a Date object.
  const parsedDate = new Date(date);

  // Use date-fns to generate a relative time string.
  const relativeDate = formatDistanceToNow(parsedDate, { addSuffix: true });

  return (
    <Link
      href={url}
      className="block rounded-lg -mx-4 p-4 hover:bg-gradient-to-tr hover:from-slate-200/30 hover:to-sky-100 dark:hover:bg-gradient-to-tr dark:hover:from-slate-400/30 dark:hover:to-sky-700/30"
    >
      <div className="flex flex-col md:flex-row items-start w-full max-w-7xl rounded-lg">
        <div className="flex flex-shrink-0">
          <Image src={imageUrl} alt="Post Image" width={200} height={200} className="object-cover aspect-video rounded-lg mr-4 mb-4 lg:mb-0" />
        </div>
        <div className="w-fit">
          <div className="flex items-end">
            <h2 className="text-lg font-bold mr-2">{title}</h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-sky-400 to-sky-300 rounded-full my-2" />
          <p className="text-md text-slate-700 dark:text-slate-300">{excerpt}</p>
          <div className="mt-3 flex flex-row items-center">
            <p className="text-slate-500 text-sm font-light dark:text-slate-400 mr-3">
              {relativeDate}
            </p>
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-700 dark:bg-sky-700 dark:text-sky-200 mr-2"
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
