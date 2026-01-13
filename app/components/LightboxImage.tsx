'use client'

import Image from 'next/image'
import { useState } from 'react'
import ImageLightbox from './ImageLightbox'

/**
 * LightboxImage - Convenience wrapper for individual images with lightbox functionality
 * 
 * This component wraps a single image with click-to-open lightbox behavior and
 * manages its own open/close state. It's primarily used in MDX blog posts where
 * all images are automatically wrapped with lightbox functionality.
 * 
 * Features:
 * - Click to open image in full-screen lightbox
 * - Hover effect showing expand icon
 * - Self-contained state management
 * - Uses ImageLightbox component for the actual modal UI
 * 
 * This is an uncontrolled component - it manages its own isOpen state internally.
 * For multi-image galleries with external state control, use ImageGallery instead.
 */

interface LightboxImageProps {
  src: string
  alt: string
  title?: string
  width?: number
  height?: number
  className?: string
}

export default function LightboxImage({ 
  src, 
  alt, 
  title,
  width = 1200, 
  height = 675,
  className = "rounded-xl my-4"
}: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <div 
        className="cursor-pointer group relative"
        onClick={() => setIsOpen(true)}
      >
        <Image 
          src={src} 
          alt={alt} 
          title={title}
          width={width} 
          height={height}
          className={className}
        />
        {/* Expand icon overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/20 rounded-xl">
          <div className="bg-white/90 dark:bg-black/90 rounded-full p-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div>
        </div>
      </div>
      <ImageLightbox 
        images={[{ src, alt, width, height }]} 
        currentIndex={0}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}
