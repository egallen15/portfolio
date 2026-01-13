'use client'

import Image from 'next/image'
import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

/**
 * ImageLightbox - Reusable full-screen modal component for displaying images
 * 
 * This is a pure presentation component that renders the lightbox UI without managing
 * its own open/close state. It's designed to be a shared component used by:
 * - ImageGallery (for multi-image portfolio galleries)
 * - LightboxImage (for individual blog post images)
 * 
 * Features:
 * - Full-screen overlay with backdrop blur
 * - Keyboard navigation (Esc to close, arrow keys for multi-image navigation)
 * - Thumbnail gallery for multiple images
 * - Responsive navigation controls (desktop side arrows, mobile bottom buttons)
 * - Prevents body scroll when open
 * 
 * This is a controlled component - the parent manages the isOpen state.
 */

interface ImageData {
  src: string
  alt: string
  width: number
  height: number
}

interface ImageLightboxProps {
  images: ImageData[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate?: (index: number) => void
}

export default function ImageLightbox({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose,
  onNavigate 
}: ImageLightboxProps) {
  const currentImage = images[currentIndex] || images[0]
  const hasMultipleImages = images.length > 1
  
  // Navigation functions
  const goToPrevious = useCallback(() => {
    if (!hasMultipleImages || !onNavigate) return
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    onNavigate(newIndex)
  }, [currentIndex, images.length, hasMultipleImages, onNavigate])
  
  const goToNext = useCallback(() => {
    if (!hasMultipleImages || !onNavigate) return
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    onNavigate(newIndex)
  }, [currentIndex, images.length, hasMultipleImages, onNavigate])
  
  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return
    
    const handleKeydown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          if (hasMultipleImages) {
            e.preventDefault()
            goToPrevious()
          }
          break
        case 'ArrowRight':
          if (hasMultipleImages) {
            e.preventDefault()
            goToNext()
          }
          break
      }
    }
    
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [isOpen, hasMultipleImages, goToPrevious, goToNext, onClose])
  
  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])
  
  if (!isOpen || !currentImage || typeof window === 'undefined') {
    return null
  }

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] isolate flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors duration-200"
        aria-label="Close lightbox"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* Lightbox Main Content Container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center p-4 max-w-7xl mx-auto">
        {/* Main Image Container */}
        <div className="relative w-full flex-1 flex items-center justify-center">
          <div 
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              alt={currentImage.alt}
              src={currentImage.src}
              width={1200}
              height={675}
              className="w-fit max-h-full object-contain rounded-xl"
              priority={true}
              style={{ maxHeight: 'calc(100vh - 300px)' }}
            />
          </div>
          
          {/* Desktop Navigation Controls - Only show on larger screens and if there are multiple images */}
          {hasMultipleImages && onNavigate && (
            <>
              {/* Left Navigation - Desktop */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 hidden lg:block"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Right Navigation - Desktop */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 hidden lg:block"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
        
        {/* Combined Navigation and Thumbnail Gallery - Only show if there are multiple images */}
        {hasMultipleImages && onNavigate && (
          <div 
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center overflow-x-auto py-2">
              {/* Left Navigation - Mobile */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 lg:hidden mr-4 flex-shrink-0"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-2 px-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => onNavigate(index)}
                    className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-lg transition-all duration-200 hover:scale-105 ${
                      index === currentIndex
                        ? 'ring-2 ring-white ring-offset-2 ring-offset-black/50'
                        : 'ring-1 ring-white/30 hover:ring-white/50'
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                      sizes="80px"
                    />
                    {index === currentIndex && (
                      <div className="absolute inset-0 bg-white/20" />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Right Navigation - Mobile */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 lg:hidden ml-4 flex-shrink-0"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}
