'use client'

import Image from 'next/image'
import { useState } from 'react'

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
  
  // Get the currently selected image
  const currentImage = images[selectedImageIndex] || images[0]
  
  // Navigation functions
  const goToPrevious = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }
  
  const goToNext = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }
  
  if (!currentImage) {
    return null
  }

  return (
    <div className="lg:-ml-12 lg:sticky lg:top-32 lg:col-start-2 lg:row-span-2 lg:row-start-1">
      {/* Main Featured Image with Fixed Height Container */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-xl ring-1 ring-slate-200 dark:ring-slate-600 bg-slate-50 dark:bg-slate-800 group">
        <Image
          alt={currentImage.alt}
          src={currentImage.src}
          width={currentImage.width}
          height={currentImage.height}
          className="h-full w-full object-cover bg-transparent rounded-xl"
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmOGZhZmMiLz48L3N2Zz4="
        />
        
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
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-black/60 dark:bg-white/20 backdrop-blur-sm text-white dark:text-slate-200 text-sm px-3 py-1 rounded-full">
                {selectedImageIndex + 1} / {images.length}
              </div>
            </div>
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
    </div>
  )
}