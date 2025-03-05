'use client'

import type { Heading } from 'nextra'
import type { FC } from 'react'

export const TOC: FC<{ toc: Heading[] }> = ({ toc }) => {
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
    <aside className="hidden md:block p-4 pt-12 dark:bg-gray-800 rounded">
      <div className='sticky top-20'>
        <h2 className="font-bold pb-2 text-lg">In this post</h2>
        <ul>
          {toc.map(heading => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className="hover:underline"
                onClick={(e) => handleHeadingClick(e, heading.id)}
              >
                {heading.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}