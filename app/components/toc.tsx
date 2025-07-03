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
      rootMargin: '-15% 0px -85% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
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

  const handleHeadingClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault()

    const target = document.getElementById(id)
    if (!target) return

    const NAV_OFFSET = 120 // adjust this to match your sticky nav height
    // 1. get the distance from the element to the top of the viewport
    const elementTop = target.getBoundingClientRect().top
    // 2. add current scroll position, then subtract your nav offset
    const scrollToY = window.pageYOffset + elementTop - NAV_OFFSET

    // 3. perform the smooth scroll
    window.scrollTo({
      top: scrollToY,
      behavior: 'smooth'
    })
  }

  return (
    <aside className="hidden lg:block p-6 pt-[58px] w-[250px] dark:text-slate-300 rounded">
      <div className='sticky top-40'>
        <h2 className="font-bold uppercase pb-4 text-sm text-slate-500 tracking-widest">On this page</h2>
        <ul className=''>
          {toc.map(heading => (
            <li key={heading.id} className="relative">
              <a
                href={`#${heading.id}`}
                className={`hover:underline text-sm pb-2 block ${activeHeading === heading.id ? 'font-bold text-foreground dark:text-foreground dark:text-sky-400' : 'text-slate-500 dark:text-slate-400'}`}
                onClick={(e) => handleHeadingClick(e, heading.id)}
              >
                {heading.value}
              </a>
              {activeHeading === heading.id && (
                <div className="absolute left-[-10px] top-[0px] bottom-[8px] w-[3px] bg-sky-500 dark:bg-sky-400 rounded-full"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}