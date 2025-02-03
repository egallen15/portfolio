// app/layout.jsx
import React from 'react'
import BlogTheme from './components/BlogTheme'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import './globals.css'

// Optional: define some metadata for your site
export const metadata = {
  title: 'My Website',
  description: 'A site built with a custom Nextra v4 theme'
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()
  return (
    <html lang="en">
      <Head />
      <body>
        <BlogTheme pageMap={pageMap}>
          {children}
        </BlogTheme>
      </body>
    </html>
  )
}
