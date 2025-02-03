import React from 'react'
import Link from 'next/link'

export default function BlogTheme({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with simple navigation */}
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex">
            <Link href="/" className="mx-2">Home</Link>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/blog" className="mx-2">Blog</Link>
          </nav>
        </header>

        {/* Main content area */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        © {new Date().getFullYear()} My Website
      </footer>
    </div>
  )
}
