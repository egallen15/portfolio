import BlogPostListItem from './BlogPostListItem';
import HighlightedHeading from './HighlightedHeading';

interface BlogNavigationProps {
  previousPosts?: {
    title: string;
    route: string;
    date: string;
    excerpt: string;
    image?: string;
    tags?: string[];
  }[];
  nextPosts?: {
    title: string;
    route: string;
    date: string;
    excerpt: string;
    image?: string;
    tags?: string[];
  }[];
}

export default function BlogNavigation({ previousPosts, nextPosts }: BlogNavigationProps) {
  if (!previousPosts?.length && !nextPosts?.length) {
    return null;
  }

  return (
    <nav className="w-full max-w-3xl">
      <hr className="mb-6 border-slate-200 dark:border-slate-700" />
      <HighlightedHeading
        as="h3"
        highlightStyle="underline"
        skewAngle="light"
        className="text-lg mb-6 font-bold text-slate-900 dark:text-slate-100"
      >
        Discover more
      </HighlightedHeading>
      <div className="flex flex-col gap-6">
        {nextPosts?.length ? (
          <div className="flex flex-col gap-2">
            <HighlightedHeading
              as="h5"
              highlightStyle="skinny"
              highlightColor='green'
              skewAngle="light"
              className="w-fit mb-2 font-medium text-sm uppercase tracking-wide"
            >
              Newer posts
            </HighlightedHeading>
            <div className="flex flex-col gap-4">
              {nextPosts.map(post => (
                <BlogPostListItem
                  key={post.route}
                  title={post.title}
                  excerpt={post.excerpt}
                  url={post.route}
                  date={post.date}
                  imageUrl={post.image}
                  tags={post.tags}
                />
              ))}
            </div>
          </div>
        ) : null}

        {previousPosts?.length ? (
          <div className="flex flex-col gap-2">
            <HighlightedHeading
              as="h5"
              highlightStyle="skinny"
              skewAngle="light"
              highlightColor='pink'
              className="w-fit mb-2 font-medium text-sm uppercase tracking-wide"
            >
              Older posts
            </HighlightedHeading>
            <div className="flex flex-col gap-4">
              {previousPosts.map(post => (
                <BlogPostListItem
                  key={post.route}
                  title={post.title}
                  excerpt={post.excerpt}
                  url={post.route}
                  date={post.date}
                  imageUrl={post.image}
                  tags={post.tags}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
