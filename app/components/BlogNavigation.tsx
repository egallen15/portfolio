import Link from 'next/link';

interface BlogNavigationProps {
  previousPost?: {
    title: string;
    route: string;
    date: string;
    excerpt: string;
  };
  nextPost?: {
    title: string;
    route: string;
    date: string;
    excerpt: string;
  };
}

export default function BlogNavigation({ previousPost, nextPost }: BlogNavigationProps) {
  if (!previousPost && !nextPost) {
    return null;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <nav className="max-w-3xl my-6 xl:mx-auto">
        <hr className="my-8 border-slate-200 dark:border-slate-700" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Read more</h3>
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Previous Post */}
        {previousPost && (
          <div className="flex-1">
            <Link 
              href={previousPost.route}
              className="group block p-6 rounded-lg bg-[#F4F6FD] hover:bg-slate-200 dark:bg-gray-800 transition-colors duration-200"
            >
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
                <span className="mr-1">←</span>
                {formatDate(previousPost.date)}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:underline transition-colors">
                {previousPost.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 overflow-hidden" style={{ 
                display: '-webkit-box', 
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical' 
              }}>
                {previousPost.excerpt}
              </p>
            </Link>
          </div>
        )}

        {/* Next Post */}
        {nextPost && (
          <div className="flex-1">
            <Link 
              href={nextPost.route}
              className="group block p-6 rounded-lg bg-[#F4F6FD] hover:bg-slate-200 dark:bg-gray-800 transition-colors duration-200"
            >
              <div className="flex items-center justify-end text-sm text-slate-500 dark:text-slate-400 mb-2">
                {formatDate(nextPost.date)}
                <span className="ml-1">→</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:underline transition-colors text-right">
                {nextPost.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-right overflow-hidden" style={{ 
                display: '-webkit-box', 
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical' 
              }}>
                {nextPost.excerpt}
              </p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
