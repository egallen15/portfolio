'use client'

import type { Heading } from 'nextra'
import type { FC } from 'react'
import { useState, useEffect, useRef } from 'react'

export const TOC: FC<{ toc: Heading[] }> = ({ toc }) => {
  const [activeHeading, setActiveHeading] = useState<string | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveHeading(entry.target.id)
        }
      })
    }

    // Adjust observer options for a better active heading transition
    observer.current = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px 0px -50% 0px', // Adjusted from '-20% 0% -80% 0%'
      threshold: 0.5                // Changed threshold for finer control
    })

    const headings = toc.map(heading => document.getElementById(heading.id)).filter(Boolean)

    headings.forEach(heading => {
      observer.current?.observe(heading!)
    })

    return () => {
      headings.forEach(heading => {
        observer.current?.unobserve(heading!)
      })
      observer.current?.disconnect()
    }
  }, [toc])

  const handleHeadingClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <aside className="hidden lg:block p-6 pt-20 w-[250px] dark:text-slate-300 rounded">
      <div className='sticky top-20'>
        <h2 className="font-bold uppercase pb-4 text-sm text-foreground dark:text-white tracking-widest">On this page</h2>
        <ul className=''>
          {toc.map(heading => (
            <li key={heading.id} className="relative">
              <a
                href={`#${heading.id}`}
                className={`hover:underline pb-3 block ${activeHeading === heading.id ? 'font-bold dark:text-sky-400' : ''}`}
                onClick={(e) => handleHeadingClick(e, heading.id)}
              >
                {heading.value}
              </a>
              {activeHeading === heading.id && (
                <div className="absolute left-[-10px] top-[0px] bottom-[12px] w-[3px] bg-sky-500 dark:bg-sky-400 rounded-full"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}