import type { Heading } from 'nextra'
import type { FC } from 'react'

export const TOC: FC<{ toc: Heading[] }> = ({ toc }) => {
  return (
    <aside className="hidden md:block sticky top-4 ml-auto p-4 bg-white dark:bg-gray-800 shadow-lg rounded">
      <div style={{ background: '#222222', padding: 20 }}>
        <h2>Table of Contents</h2>
        <ul>
          {toc.map(heading => (
            <li key={heading.id}>{heading.value}</li>
          ))}
        </ul>
      </div>
    </aside>
  )
}