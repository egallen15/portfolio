import React from 'react'

export default function CaseStudySkeleton() {
  return (
    <div className="relative isolate lg:overflow-visible lg:px-0 min-h-screen animate-pulse">
      <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:pr-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              {/* Subtitle skeleton */}
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-24 mb-2"></div>
              
              {/* Title skeleton */}
              <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
              <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-6"></div>
              
              {/* Description skeleton */}
              <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
              <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-5/6 mb-6"></div>
              
              {/* Metadata skeleton */}
              <div className="flex flex-wrap items-center gap-4 mt-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-5 w-5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-20"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Image skeleton */}
        <div className="lg:-ml-12 lg:sticky lg:top-32 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div className="relative aspect-video w-full max-w-[48rem] sm:max-w-[57rem] rounded-xl bg-slate-200 dark:bg-slate-700"></div>
          
          {/* Thumbnail gallery skeleton */}
          <div className="mt-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Content sections skeleton */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:pr-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-slate-600 lg:max-w-lg dark:text-slate-400 min-h-[600px]">
              <div className="space-y-12">
                {/* Section skeleton */}
                {Array.from({ length: 4 }).map((_, sectionIndex) => (
                  <div key={sectionIndex}>
                    <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-48 mb-4"></div>
                    <div className="space-y-4 mb-6">
                      {Array.from({ length: 3 }).map((_, lineIndex) => (
                        <div
                          key={lineIndex}
                          className={`h-4 bg-slate-200 dark:bg-slate-700 rounded ${
                            lineIndex === 2 ? 'w-3/4' : 'w-full'
                          }`}
                        ></div>
                      ))}
                    </div>
                    {/* Features list skeleton */}
                    <div className="space-y-4">
                      {Array.from({ length: 3 }).map((_, featureIndex) => (
                        <div key={featureIndex} className="flex gap-x-3">
                          <div className="mt-1 h-5 w-5 bg-slate-200 dark:bg-slate-700 rounded flex-none"></div>
                          <div className="flex-1">
                            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-32 mb-2"></div>
                            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}