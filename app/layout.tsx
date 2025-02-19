// app/layout.jsx
import type { FC, ReactNode } from 'react'
import type { Metadata } from 'next'
import NextraTheme from './components/nextra-theme'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import './globals.css'

export const metadata: Metadata = {
  title: {
    absolute: '',
    template: '%s | Eric Allen',
  }
}
 
const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr">
      <Head faviconGlyph="✦" />
      <body style={{ margin: 0 }}>
        <div className="min-h-screen flex flex-col container mx-auto px-4">
          <NextraTheme pageMap={pageMap}>
            {children}
          </NextraTheme>
        </div>
      </body>
    </html>
  )
}
 
export default RootLayout