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
    <nav className="pt-8 mt-12">
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Previous Post */}
        {previousPost && (
          <div className="flex-1">
            <Link 
              href={previousPost.route}
              className="group block p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span className="mr-1">←</span>
                {formatDate(previousPost.date)}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
              className="group block p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <div className="flex items-center justify-end text-sm text-gray-500 dark:text-gray-400 mb-2">
                Next
                <span className="ml-1">→</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-right">
                {nextPost.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 text-right">
                {formatDate(nextPost.date)}
              </p>
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
