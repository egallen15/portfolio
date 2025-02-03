'use client'
 
import { usePathname } from 'next/navigation'
import type { PageMapItem } from 'nextra'
import Link from 'next/link'
import { normalizePages } from 'nextra/normalize-pages'
import type { FC } from 'react'
 
export const Navbar: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname()
  const { topLevelNavbarItems } = normalizePages({
    list: pageMap,
    route: pathname
  })
 
  return (
    <ul
      style={{
        display: 'flex',
        listStyleType: 'disc',
        padding: 20,
        gap: 20,
        background: 'green',
        margin: 0,
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.5rem'
      }}
    >Test
      {topLevelNavbarItems.map((item) => {
        const route = item.route || ('href' in item ? item.href! : '')
        return (
          <li key={route}>
            <Link href={route} style={{ textDecoration: 'none' }}>
              {item.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
