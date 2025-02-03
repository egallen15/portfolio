// app/layout.jsx
import React from 'react'
import BlogTheme from './components/BlogTheme'
import { Head } from 'nextra/components'
import './globals.css'

// Optional: define some metadata for your site
export const metadata = {
  title: 'My Website',
  description: 'A site built with a custom Nextra v4 theme'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <BlogTheme>
          {children}
        </BlogTheme>
      </body>
    </html>
  )
}
