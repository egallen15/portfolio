import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPostListItemProps {
  title: string;
  excerpt: string;
  url: string;
  imageUrl?: string;
}

const BlogPostListItem: FC<BlogPostListItemProps> = ({
  title,
  excerpt,
  url,
  imageUrl = "https://placehold.co/150",
}) => {
  return (
    <Link href={url} className="block">
      <div className="flex items-start w-full max-w-7xl p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
        <div className="flex-shrink-0">
          <Image src={imageUrl} alt="Post Image" width={150} height={150} className="object-cover" />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostListItem;
