'use client'

import { usePathname } from 'next/navigation'
import type { PageMapItem } from 'nextra'
import { Anchor } from 'nextra/components'
import { normalizePages } from 'nextra/normalize-pages'
import type { FC } from 'react'
import { useEffect } from 'react'

export const Navbar: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname()
  
  // Log raw pageMap and pathname for debugging
  console.log('Raw pageMap:', pageMap)
  console.log('Current pathname:', pathname)
  
  const { topLevelNavbarItems } = normalizePages({
    list: pageMap,
    route: pathname
  })

  useEffect(() => {
    console.log('Normalized topLevelNavbarItems:', topLevelNavbarItems)
  }, [pathname, pageMap, topLevelNavbarItems])

  return (
    <ul
      style={{
        display: 'flex',
        padding: 20,
        gap: 20,
        background: '#222222',
        margin: 0,
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.24rem'
      }}
    >
      {pageMap.length === 0 ? (
        <li>No navigation items available</li>
      ) : (
        pageMap.map((item) => {
          const route = item.route || ('href' in item ? item.href! : '')
          return (
            <li key={route}>
              <Anchor href={route} style={{ textDecoration: 'none' }}>
                {item.name}
              </Anchor>
            </li>
          )
        })
      )}
    </ul>
  )
}
