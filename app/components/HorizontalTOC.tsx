'use client'

import type { Heading } from 'nextra'
import type { FC } from 'react'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export const HorizontalTOC: FC<{ toc: Heading[] }> = ({ toc }) => {
  const [activeHeading, setActiveHeading] = useState<string | null>(null)
  const [showPopover, setShowPopover] = useState(false)
  const [hoveredHeading, setHoveredHeading] = useState<string | null>(null)
  const [showTooltip, setShowTooltip] = useState(false)
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 })
  const observer = useRef<IntersectionObserver | null>(null)
  const popoverRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Set the first heading as active by default
    if (toc.length > 0 && !activeHeading) {
      setActiveHeading(toc[0].id)
    }

    const headings = toc.map(heading => document.getElementById(heading.id)).filter(Boolean) as HTMLElement[]
    if (headings.length === 0) return

    const updateActiveHeading = () => {
      const scrollY = window.scrollY
      const NAV_OFFSET = 120
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Check if we're at the very top
      if (scrollY <= NAV_OFFSET) {
        setActiveHeading(toc[0].id)
        return
      }
      
      // Check if we're at the very bottom
      if (scrollY + windowHeight >= documentHeight - 50) {
        setActiveHeading(toc[toc.length - 1].id)
        return
      }
      
      // Find the heading that should be active based on scroll position
      let newActiveHeading = toc[0].id // Default to first
      
      // Go through headings from bottom to top to find the last one that's above the offset
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i]
        if (heading) {
          const rect = heading.getBoundingClientRect()
          const headingTop = rect.top
          
          // If this heading is above the navigation offset, it should be active
          if (headingTop <= NAV_OFFSET + 10) { // Small buffer for precision
            newActiveHeading = heading.id
            break
          }
        }
      }
      
      // Only update if the active heading actually changed
      setActiveHeading(prev => prev !== newActiveHeading ? newActiveHeading : prev)
    }

    // Use intersection observer primarily for performance, but simpler logic
    const handleIntersection = () => {
      // Only update on intersection changes to trigger recalculation
      updateActiveHeading()
    }

    observer.current = new IntersectionObserver(handleIntersection, {
      rootMargin: '-10% 0px -10% 0px',
      threshold: [0]
    })

    headings.forEach(heading => {
      if (heading) {
        observer.current?.observe(heading)
      }
    })

    // Throttle scroll events for performance but ensure responsiveness
    let scrollTimeout: NodeJS.Timeout | null = null
    const throttledScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
      scrollTimeout = setTimeout(() => {
        updateActiveHeading()
        scrollTimeout = null
      }, 16) // ~60fps for smooth updates
    }

    // Initial calculation
    updateActiveHeading()

    window.addEventListener('scroll', throttledScroll, { passive: true })

    return () => {
      headings.forEach(heading => {
        if (heading) {
          observer.current?.unobserve(heading)
        }
      })
      observer.current?.disconnect()
      window.removeEventListener('scroll', throttledScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
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

    // Don't close popover when clicking on headings - let it stay open
  }

  const handleBarClick = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    
    // Calculate position for portal-based popover
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setPopoverPosition({
        top: rect.top + rect.height / 2,
        left: rect.right + 8 // 8px gap (ml-2)
      })
    }
    
    // Toggle popover when clicking any bar
    setShowPopover(!showPopover)
  }

  const getBarWidth = (heading: Heading) => {
    // Different widths based on heading depth for visual hierarchy
    switch (heading.depth) {
      case 2: return 'w-5'
      case 3: return 'w-4'
      case 4: return 'w-3'
      case 5: return 'w-2'
      case 6: return 'w-1'
      default: return 'w-8'
    }
  }

  const getBarOpacity = (headingId: string) => {
    if (activeHeading === headingId) {
      return 'opacity-100 bg-slate-500 dark:bg-slate-400'
    }
    if (hoveredHeading === headingId) {
      return 'opacity-75 bg-slate-400 dark:bg-slate-500'
    }
    return 'opacity-40 bg-slate-300 dark:bg-slate-600'
  }

  if (!toc || toc.length === 0) return null

  const popoverContent = showPopover && typeof window !== 'undefined' && (
    <div
      ref={popoverRef}
      className="fixed bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl p-4 min-w-64 max-w-80 max-h-[80vh] flex flex-col z-[100]"
      style={{
        top: `${popoverPosition.top}px`,
        left: `${popoverPosition.left}px`,
        transform: 'translateY(-50%)'
      }}
    >
      <div className="flex items-center justify-between mb-3 flex-shrink-0">
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
      
      <ul className="space-y-1 overflow-y-auto overflow-x-hidden pr-1 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
        {toc.map(heading => (
          <li key={heading.id} className="relative">
            <button
              onClick={(e) => handleHeadingClick(e, heading.id)}
              className={`text-left w-full px-2 py-1.5 rounded text-sm transition-colors duration-150 ${
                activeHeading === heading.id 
                  ? 'bg-slate-50 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300 font-medium' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
              style={{ paddingLeft: `${(heading.depth - 1) * 12 + 4}px` }}
            >
              {heading.value}
            </button>
            {activeHeading === heading.id && (
              <div className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-slate-500 dark:bg-slate-400 rounded-full"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical bars representing headings */}
      <div 
        className="flex flex-col gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer relative group w-fit"
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
            className={`h-1 rounded-full ${getBarWidth(heading)} ${getBarOpacity(heading.id)} pointer-events-none transition-all duration-200`}
            onMouseEnter={() => setHoveredHeading(heading.id)}
            onMouseLeave={() => setHoveredHeading(null)}
            title={typeof heading.value === 'string' ? `${heading.value}` : ''}
          />
        ))}
      </div>

      {/* Render popover via portal */}
      {popoverContent && createPortal(popoverContent, document.body)}
    </div>
  )
}