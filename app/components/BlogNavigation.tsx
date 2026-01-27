import Link from 'next/link';
import Image from 'next/image';

interface BlogNavigationProps {
  previousPost?: {
    title: string;
    route: string;
    date: string;
    excerpt: string;
    image?: string;
  };
  nextPost?: {
    title: string;
    route: string;
    date: string;
    excerpt: string;
    image?: string;
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
    <nav className="w-full max-w-3xl">
        <hr className="mb-6 border-slate-200 dark:border-slate-700" />
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Discover more</h3>
      <div className="flex flex-col gap-6">
        {/* Previous Post */}
        {previousPost && (
          <div className="flex-1">
            <Link 
              href={previousPost.route}
              className="group block p-6 rounded-lg bg-[#F4F6FD] hover:bg-slate-200 dark:bg-slate-800 transition-colors duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {previousPost.image && (
                  <div className="flex-shrink-0">
                    <Image
                      src={previousPost.image}
                      alt={previousPost.title}
                      width={200}
                      height={200}
                      className="object-cover h-auto w-auto sm:w-40 aspect-video rounded-lg"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-2">
                    {formatDate(previousPost.date)}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 hover:underline transition-colors">
                    {previousPost.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 overflow-hidden" style={{ 
                    display: '-webkit-box', 
                    WebkitLineClamp: 2, 
                    WebkitBoxOrient: 'vertical' 
                  }}>
                    {previousPost.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Next Post */}
        {nextPost && (
          <div className="flex-1">
            <Link 
              href={nextPost.route}
              className="group block p-6 rounded-lg bg-[#F4F6FD] hover:bg-slate-200 dark:bg-slate-800 transition-colors duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {nextPost.image && (
                  <div className="flex-shrink-0">
                    <Image
                      src={nextPost.image}
                      alt={nextPost.title}
                      width={200}
                      height={200}
                      className="object-cover h-auto w-auto sm:w-40 aspect-video rounded-lg"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-2">
                    {formatDate(nextPost.date)}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 hover:underline transition-colors">
                    {nextPost.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 overflow-hidden" style={{ 
                    display: '-webkit-box', 
                    WebkitLineClamp: 2, 
                    WebkitBoxOrient: 'vertical' 
                  }}>
                    {nextPost.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
