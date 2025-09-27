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
  
  if (!currentImage) {
    return null
  }

  return (
    <div className="lg:-ml-12 lg:sticky lg:top-32 lg:col-start-2 lg:row-span-2 lg:row-start-1">
      {/* Main Featured Image with 16:9 Aspect Ratio */}
      <div className="relative aspect-video w-full max-w-[48rem] sm:max-w-[57rem] rounded-xl ring-2 ring-slate-400/10 dark:ring-white/10 bg-slate-50 dark:bg-slate-800">
        <Image
          alt={currentImage.alt}
          src={currentImage.src}
          width={currentImage.width}
          height={currentImage.height}
          className="h-full w-full object-contain bg-transparent"
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmOGZhZmMiLz48L3N2Zz4="
        />
      </div>
      
      {/* Thumbnail Gallery - Only show if there are multiple images */}
      {images.length > 1 && (
        <div className="mt-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative aspect-square overflow-hidden rounded-lg transition-all duration-200 hover:scale-105 bg-slate-50 dark:bg-slate-800 ${
                  index === selectedImageIndex
                    ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900'
                    : 'ring-1 ring-slate-200 hover:ring-slate-300 dark:ring-slate-700 dark:hover:ring-slate-600'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={150}
                  height={150}
                  className="h-full w-full object-cover bg-transparent"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmOGZhZmMiLz48L3N2Zz4="
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