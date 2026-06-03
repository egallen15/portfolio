import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

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
  variant?: 'cards' | 'simple' | 'simple-inline';
}

export default function PortfolioNavigation({ previousProject, nextProject, variant = 'cards' }: PortfolioNavigationProps) {
  if (!previousProject && !nextProject) {
    return null;
  }

  const simpleLinkClassName = 'inline-flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-md font-medium text-slate-700 transition transform duration-300 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hover:-rotate-2 lg:hover:scale-[1.02]';
  const simpleEdgeAlignedLinkClassName = `${simpleLinkClassName} -ml-3 lg:ml-0`;
  const simpleRightEdgeAlignedLinkClassName = `ml-auto ${simpleLinkClassName} -mr-3 lg:mr-0`;

  if (variant === 'simple-inline') {
    return (
      <nav aria-label="Project navigation" className="flex items-center justify-end gap-2 text-sm leading-6">
        {previousProject && (
          <Link
            href={previousProject.route}
            className={simpleLinkClassName}
          >
            <ChevronLeftIcon aria-hidden="true" className="size-4 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Previous project</span>
          </Link>
        )}
        {nextProject && (
          <Link
            href={nextProject.route}
            className={simpleLinkClassName}
          >
            <span className="text-slate-700 dark:text-slate-300">Next project</span>
            <ChevronRightIcon aria-hidden="true" className="size-4 shrink-0" />
          </Link>
        )}
      </nav>
    );
  }

  if (variant === 'simple') {
    return (
      <nav
        aria-label="Project navigation"
        className="mb-6 flex w-full flex-wrap items-center gap-x-6 gap-y-2 border-b border-slate-200 pb-3 text-sm leading-6 dark:border-slate-700 lg:mb-8 lg:pb-4"
      >
        {previousProject && (
          <Link
            href={previousProject.route}
            className={simpleEdgeAlignedLinkClassName}
          >
            <ChevronLeftIcon aria-hidden="true" className="size-4 shrink-0" />
            <span>Previous project</span>
          </Link>
        )}
        {nextProject && (
          <Link
            href={nextProject.route}
            className={previousProject ? simpleRightEdgeAlignedLinkClassName : simpleEdgeAlignedLinkClassName}
          >
            <span>Next project</span>
            <ChevronRightIcon aria-hidden="true" className="size-4 shrink-0" />
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
                <ChevronLeftIcon aria-hidden="true" className="mr-1 size-4 shrink-0" />
                <span>Previous Project</span>
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
                <span>Next Project</span>
                <ChevronRightIcon aria-hidden="true" className="ml-1 size-4 shrink-0" />
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
