'use client'

import { useState, useEffect } from 'react'
import { HorizontalTOC } from './HorizontalTOC'
import { extractHeadingsFromDOM } from '../../lib/extractHeadings'
import type { Heading } from 'nextra'

export default function TOCWrapper() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Extract headings after component mounts and DOM is ready
    const extractHeadings = () => {
      const extractedHeadings = extractHeadingsFromDOM()
      setHeadings(extractedHeadings)
      setIsLoading(false)
    }

    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(extractHeadings, 100)

    // Also listen for potential DOM changes (if content is dynamically updated)
    const observer = new MutationObserver(() => {
      extractHeadings()
    })

    const articleElement = document.querySelector('article')
    if (articleElement) {
      observer.observe(articleElement, {
        childList: true,
        subtree: true
      })
    }

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  // Show loading skeleton while extracting headings
  if (isLoading) {
    return (
      <div className="flex flex-col gap-3 p-3 w-fit animate-pulse">
        <div className="h-1.5 w-6 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
        <div className="h-1.5 w-5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
        <div className="h-1.5 w-4 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
        <div className="h-1.5 w-5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
      </div>
    )
  }

  if (headings.length === 0) {
    return null
  }

  return <HorizontalTOC toc={headings} />
}