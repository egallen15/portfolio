import type { FC } from "react";
//
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { CalendarDaysIcon, HashtagIcon } from "@heroicons/react/24/outline";

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
  imageUrl,
  tags = [],
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
      <div className="flex flex-col sm:flex-row sm:items-center w-full max-w-7xl rounded-lg">
        {imageUrl && (
          <div className="flex flex-shrink-0">
            <Image src={imageUrl} alt="Post Image" width={200} height={200} className="object-cover h-auto w-auto sm:w-44 aspect-video rounded-lg mr-4 mb-4 md:mb-0" />
          </div>
        )}
        <div className="w-fit">
          <div className="flex items-end">
            <h3 className="text-md font-medium mr-2">{title}</h3>
          </div>
          {/* <div className="h-[1px] w-full bg-gradient-to-r from-sky-400 to-sky-300 rounded-full my-2" /> */}
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{excerpt}</p>
          <div className="flex items-baseline mt-3 gap-3">
            <div className="flex items-center gap-2">
              <CalendarDaysIcon className="h-4 w-4 text-slate-500 dark:text-slate-400" />
              <time className="text-xs text-slate-500 dark:text-slate-400">
                {relativeDate}
              </time>
            </div>
            {tags.length > 0 && (
              <div className="flex items-center gap-1">
                <HashtagIcon className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {tags.join(", ")}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostListItem;
