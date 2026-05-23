import Link from 'next/link';

interface PortfolioNavigationProps {
  previousProject?: {
    title: string;
    route: string;
    description: string;
  };
  nextProject?: {
    title: string;
    route: string;
    description: string;
  };
  variant?: 'cards' | 'simple';
}

export default function PortfolioNavigation({ previousProject, nextProject, variant = 'cards' }: PortfolioNavigationProps) {
  if (!previousProject && !nextProject) {
    return null;
  }

  const simpleLinkClassName = 'inline-flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-md font-medium text-slate-700 transition transform duration-300 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hover:-rotate-2 lg:hover:scale-[1.02]';

  if (variant === 'simple') {
    return (
      <nav
        aria-label="Project navigation"
        className="mb-8 flex w-full flex-wrap items-center gap-x-6 gap-y-2 border-b border-slate-200 pb-4 text-sm leading-6 dark:border-slate-700"
      >
        {previousProject && (
          <Link
            href={previousProject.route}
            className={simpleLinkClassName}
          >
            &larr; Previous: {previousProject.title}
          </Link>
        )}
        {nextProject && (
          <Link
            href={nextProject.route}
            className={`${previousProject ? 'ml-auto ' : ''}${simpleLinkClassName}`}
          >
            Next: {nextProject.title} &rarr;
          </Link>
        )}
      </nav>
    );
  }

  return (
    <nav className="w-full mt-4">
        <hr className="my-6 border-slate-200 dark:border-slate-700" />
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Explore more projects</h3>
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Previous Project */}
        {previousProject && (
          <div className="flex-1">
            <Link 
              href={previousProject.route}
              className="group block p-6 rounded-lg bg-[#F4F6FD] hover:bg-slate-200 dark:bg-slate-800 transition-colors duration-200"
            >
              <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-2">
                ← Previous Project
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 hover:underline transition-colors">
                {previousProject.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 overflow-hidden" style={{ 
                display: '-webkit-box', 
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical' 
              }}>
                {previousProject.description}
              </p>
            </Link>
          </div>
        )}

        {/* Next Project */}
        {nextProject && (
          <div className="flex-1">
            <Link 
              href={nextProject.route}
              className="group block p-6 rounded-lg bg-[#F4F6FD] hover:bg-slate-200 dark:bg-slate-800 transition-colors duration-200"
            >
              <div className="flex items-center justify-end text-xs text-slate-500 dark:text-slate-400 mb-2">
                Next Project →
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 hover:underline transition-colors text-right">
                {nextProject.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 text-right overflow-hidden" style={{ 
                display: '-webkit-box', 
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical' 
              }}>
                {nextProject.description}
              </p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
