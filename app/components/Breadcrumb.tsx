import type { ReactNode } from 'react'
import { HomeIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

interface BreadcrumbPage {
  name: string
  href: string
  current: boolean
}

interface BreadcrumbProps {
  pages: BreadcrumbPage[]
  homeHref?: string
  pageTitle?: string
  actions?: ReactNode
}

export default function Breadcrumb({ pages, homeHref = "/", pageTitle, actions }: BreadcrumbProps) {
  const hasActions = Boolean(actions)

  return (
    <div className={hasActions ? 'mb-4 pb-2 lg:mb-8 lg:pb-4' : 'mb-8'}>
      <div className={hasActions ? 'flex flex-col gap-2 lg:relative' : undefined}>
        <nav aria-label="Breadcrumb" className="flex min-w-0">
          <ol role="list" className="flex items-center space-x-2">
            <li>
              <div>
                <Link href={homeHref} className="text-slate-400 hover:text-slate-500 dark:text-slate-400 dark:hover:text-slate-300">
                  <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
                  <span className="sr-only">Home</span>
                </Link>
              </div>
            </li>
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="size-5 shrink-0 text-slate-300 dark:text-slate-600"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <Link
                    href={page.href}
                    aria-current={page.current ? 'page' : undefined}
                    className="ml-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:underline"
                  >
                    {page.name}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </nav>
        {actions && <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">{actions}</div>}
      </div>
      {pageTitle && (
        <h2 className="text-2xl/7 font-bold text-slate-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white mt-4">
          {pageTitle}
        </h2>
      )}
    </div>
  )
}
