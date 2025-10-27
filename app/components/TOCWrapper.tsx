'use client'

import { useState, useEffect } from 'react'
import { HorizontalTOC } from './HorizontalTOC'
import { extractHeadingsFromDOM } from '../../lib/extractHeadings'
import type { Heading } from 'nextra'

export default function TOCWrapper() {
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    // Extract headings after component mounts and DOM is ready
    const extractHeadings = () => {
      const extractedHeadings = extractHeadingsFromDOM()
      setHeadings(extractedHeadings)
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

  if (headings.length === 0) {
    return null
  }

  return <HorizontalTOC toc={headings} />
}