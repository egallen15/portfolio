'use client'

import { usePathname } from 'next/navigation'
import type { PageMapItem } from 'nextra'
import { Anchor } from 'nextra/components'
import { normalizePages } from 'nextra/normalize-pages'
import type { FC } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
    // Full width sticky background container with semi-transparent dark glass effect and backdrop blur
    <div className="w-full sticky top-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-[720px] mx-auto">
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: 24,
            gap: 16,
            margin: 0,
            color: 'white',
            fontWeight: 'regular',
            fontSize: '1.24rem'
          }}
        >
          <li>
            <Link href="/">
              <span className="cursor-pointer">
                <Image src="/images/logo.png" alt="Logo" width={48} height={48} className="object-contain" />
              </span>
            </Link>
          </li>
          {pageMap.length === 0 ? (
            <li>No navigation items available</li>
          ) : (
            pageMap.map((item: PageMapItem, index: number) => {
              // Ensure route is a string type
              const route: string = typeof item === 'object' && 'route' in item 
                ? String(item.route) 
                : `nav-item-${index}`;
                
              return (
                <li key={route}>
                  <Anchor href={route}>
                    {typeof item === 'object' && 'name' in item 
                      ? String(item.name) 
                      : 'Untitled'}
                  </Anchor>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  )
}
