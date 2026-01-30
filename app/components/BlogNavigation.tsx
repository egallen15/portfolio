import BlogPostListItem from './BlogPostListItem';

interface BlogNavigationProps {
  posts?: {
    title: string;
    route: string;
    date: string;
    excerpt: string;
    image?: string;
    tags?: string[];
  }[];
}

export default function BlogNavigation({ posts }: BlogNavigationProps) {
  if (!posts?.length) {
    return null;
  }

  return (
    <nav className="w-full max-w-3xl">
      <hr className="mb-6 border-slate-200 dark:border-slate-700" />
      <h3 className="text-lg mb-6 font-bold text-slate-900 dark:text-slate-100">
        Discover more
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {posts.map(post => (
          <BlogPostListItem
            key={post.route}
            title={post.title}
            excerpt={post.excerpt}
            url={post.route}
            date={post.date}
            imageUrl={post.image}
            tags={post.tags}
            layout="card"
          />
        ))}
      </div>
    </nav>
  );
}
