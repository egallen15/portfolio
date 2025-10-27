'use client'

import type { Heading } from 'nextra'
import type { FC } from 'react'
import { useState, useEffect, useRef } from 'react'

export const HorizontalTOC: FC<{ toc: Heading[] }> = ({ toc }) => {
  const [activeHeading, setActiveHeading] = useState<string | null>(null)
  const [showPopover, setShowPopover] = useState(false)
  const [hoveredHeading, setHoveredHeading] = useState<string | null>(null)
  const [showTooltip, setShowTooltip] = useState(false)
  const observer = useRef<IntersectionObserver | null>(null)
  const popoverRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Set the first heading as active by default
    if (toc.length > 0 && !activeHeading) {
      setActiveHeading(toc[0].id)
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveHeading(entry.target.id)
        }
      })
    }

    observer.current = new IntersectionObserver(handleIntersection, {
      rootMargin: '-15% 0px -85% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    })

    const headings = toc.map(heading => document.getElementById(heading.id)).filter(Boolean)

    headings.forEach(heading => {
      observer.current?.observe(heading!)
    })

    return () => {
      headings.forEach(heading => {
        observer.current?.unobserve(heading!)
      })
      observer.current?.disconnect()
    }
  }, [toc, activeHeading])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node) &&
          containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowPopover(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleHeadingClick = (
    event: React.MouseEvent,
    id: string
  ) => {
    event.preventDefault()
    event.stopPropagation()

    const target = document.getElementById(id)
    if (!target) return

    const NAV_OFFSET = 120
    const elementTop = target.getBoundingClientRect().top
    const scrollToY = window.pageYOffset + elementTop - NAV_OFFSET

    window.scrollTo({
      top: scrollToY,
      behavior: 'smooth'
    })

    setShowPopover(false)
  }

  const handleBarClick = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    
    // Toggle popover when clicking any bar
    setShowPopover(!showPopover)
  }

  const getBarWidth = (heading: Heading) => {
    // Different widths based on heading depth for visual hierarchy
    switch (heading.depth) {
      case 2: return 'w-6'
      case 3: return 'w-5'
      case 4: return 'w-4'
      case 5: return 'w-3'
      case 6: return 'w-2'
      default: return 'w-8'
    }
  }

  const getBarOpacity = (headingId: string) => {
    if (activeHeading === headingId) {
      return 'opacity-100 bg-sky-500 dark:bg-sky-400'
    }
    if (hoveredHeading === headingId) {
      return 'opacity-75 bg-slate-400 dark:bg-slate-500'
    }
    return 'opacity-40 bg-slate-300 dark:bg-slate-600'
  }

  if (!toc || toc.length === 0) return null

  return (
    <div ref={containerRef} className="relative">
      {/* Horizontal bars representing headings */}
      <div 
        className="flex flex-col gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer relative group w-fit"
        style={{ minHeight: 'fit-content' }}
        onClick={(e) => handleBarClick(e)}
        title=""
        role="button"
        tabIndex={0}
        aria-label="Show table of contents"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            const mockMouseEvent = e as unknown as React.MouseEvent
            handleBarClick(mockMouseEvent)
          }
        }}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
            Table of contents
          </div>
        )}
        {toc.map((heading) => (
          <div
            key={heading.id}
            className={`h-1.5 rounded-full ${getBarWidth(heading)} ${getBarOpacity(heading.id)} pointer-events-none`}
            onMouseEnter={() => setHoveredHeading(heading.id)}
            onMouseLeave={() => setHoveredHeading(null)}
            title={typeof heading.value === 'string' ? `${heading.value}` : ''}
          />
        ))}
      </div>

      {/* Popover with full table of contents */}
      {showPopover && (
        <div
          ref={popoverRef}
          className="absolute left-full top-0 ml-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl p-4 min-w-64 max-w-80 z-[60]"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm text-slate-700 dark:text-slate-300 uppercase tracking-wide">
              On this page
            </h3>
            <button
              onClick={() => setShowPopover(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <ul className="space-y-1">
            {toc.map(heading => (
              <li key={heading.id} className="relative">
                <button
                  onClick={(e) => handleHeadingClick(e, heading.id)}
                  className={`text-left w-full px-2 py-1.5 rounded text-sm transition-colors duration-150 ${
                    activeHeading === heading.id 
                      ? 'bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 font-medium' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                  style={{ paddingLeft: `${(heading.depth - 1) * 12 + 8}px` }}
                >
                  {heading.value}
                </button>
                {activeHeading === heading.id && (
                  <div className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-sky-500 dark:bg-sky-400 rounded-full"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}