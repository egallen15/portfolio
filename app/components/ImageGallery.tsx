'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import ImageLightbox from './ImageLightbox'

interface ImageData {
  src: string
  alt: string
  width: number
  height: number
}

interface ImageGalleryProps {
  images: ImageData[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  
  // Get the currently selected image
  const currentImage = images[selectedImageIndex] || images[0]
  
  // Navigation functions
  const goToPrevious = useCallback(() => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])
  
  const goToNext = useCallback(() => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])
  
  // Lightbox functions
  const openLightbox = () => {
    setIsLightboxOpen(true)
  }
  
  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }
  
  // Handle keyboard navigation (only when lightbox is closed)
  useEffect(() => {
    if (isLightboxOpen || images.length <= 1) return
    
    const handleKeydown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          goToPrevious()
          break
        case 'ArrowRight':
          e.preventDefault()
          goToNext()
          break
      }
    }
    
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [isLightboxOpen, goToPrevious, goToNext, images.length])
  
  if (!currentImage) {
    return null
  }

  return (
    <div className="lg:-ml-12 lg:sticky lg:top-1/2 lg:-translate-y-1/2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
      {/* Main Featured Image with Fixed Height Container */}
      <div className="relative w-full h-[240px] sm:h-[480px] lg:h-[420px] rounded-xl bg-transparent group">
        <Image
          alt={currentImage.alt}
          src={currentImage.src}
          width={currentImage.width}
          height={currentImage.height}
          className="h-full w-full object-cover rounded-xl"
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmOGZhZmMiLz48L3N2Zz4="
        />
        
        {/* Clickable middle area to open lightbox */}
        <button
          onClick={openLightbox}
          className="absolute left-1/3 right-1/3 top-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 cursor-pointer group/lightbox"
          aria-label="Open lightbox"
        >
          {/* <div className="bg-black/60 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover/lightbox:scale-100 transition-transform duration-200">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div> */}
        </button>
        
        {/* Carousel Controls - Only show if there are multiple images */}
        {images.length > 1 && (
          <>
            {/* Left Navigation Area */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-0 bottom-0 w-1/3 flex items-center justify-start pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gradient-to-r hover:from-black/5 hover:to-transparent dark:hover:from-white/5 dark:hover:to-transparent rounded-l-xl group/left"
              aria-label="Previous image"
            >
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 group-hover/left:scale-125">
                <svg
                  className="w-5 h-5 text-slate-700 dark:text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>
            
            {/* Right Navigation Area */}
            <button
              onClick={goToNext}
              className="absolute right-0 top-0 bottom-0 w-1/3 flex items-center justify-end pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gradient-to-l hover:from-black/5 hover:to-transparent dark:hover:from-white/5 dark:hover:to-transparent rounded-r-xl group/right"
              aria-label="Next image"
            >
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 group-hover/right:scale-125">
                <svg
                  className="w-5 h-5 text-slate-700 dark:text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
            
            {/* Fullscreen Button */}
            <button
              onClick={openLightbox}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105"
              aria-label="View fullscreen"
            >
              <div className="bg-black/60 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 hover:bg-black/70">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                View fullscreen
              </div>
            </button>
          </>
        )}
      </div>
      
      {/* Thumbnail Gallery - Only show if there are multiple images */}
      {images.length > 1 && (
        <div className="mt-6 flex justify-center">
          <div className={`grid gap-3 justify-items-center ${
            images.length === 2 ? 'grid-cols-2' :
            images.length === 3 ? 'grid-cols-3' :
            images.length === 4 ? 'grid-cols-4' :
            images.length === 5 ? 'grid-cols-5' :
            'grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6'
          }`}>
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 overflow-hidden rounded-lg transition-all duration-200 hover:scale-105 bg-slate-50 dark:bg-slate-800 ${
                  index === selectedImageIndex
                    ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900'
                    : 'ring-1 ring-slate-200 hover:ring-slate-300 dark:ring-slate-700 dark:hover:ring-slate-600'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={336}
                  height={336}
                  className="h-full w-full object-cover bg-transparent"
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 336px"
                  quality={95}
                  priority={index === selectedImageIndex}
                />
                {index === selectedImageIndex && (
                  <div className="absolute inset-0 bg-indigo-500/10" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Lightbox Component */}
      <ImageLightbox
        images={images}
        currentIndex={selectedImageIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNavigate={setSelectedImageIndex}
      />
    </div>
  )
}