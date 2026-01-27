import React from 'react'
import Image from 'next/image'
import ImageGallery from './ImageGallery'
import PortfolioNavigationServer from './PortfolioNavigationServer'
import { 
  UsersIcon, 
  CalendarDaysIcon, 
  WrenchScrewdriverIcon
} from '@heroicons/react/20/solid'
import { icons, type IconName } from '../../lib/icons'

export interface CaseStudyFeature {
  icon: IconName // Changed to IconName
  title: string
  description: string
}

export interface CaseStudyMetadata {
  role?: string
  teamSize?: string
  dateRange?: string
  tools?: string[] // Simplified to just an array of tool names
}

export interface CaseStudyProps {
  // Hero section
  subtitle: string
  title: string
  description: string
  
  // Metadata section
  metadata?: CaseStudyMetadata
  
  // Images - support for single image (legacy) or multiple images (new)
  image?: {
    src: string
    alt: string
    width: number
    height: number
  }
  images?: {
    src: string
    alt: string
    width: number
    height: number
  }[]
  
  // Content sections
  sections: {
    tools?: {
      title?: string
      content: string
      features?: CaseStudyFeature[]
    }
    problemStatement: {
      title?: string
      content: string
    }
    researchAndFeedback: {
      title?: string
      content: string
    }
    solution: {
      title?: string
      content: string
      features?: CaseStudyFeature[]
    }
    impactAndResults: {
      title?: string
      content: string
      features?: CaseStudyFeature[]
    }
  }
  
  // Legacy support for existing props
  features?: CaseStudyFeature[]
  content?: {
    mainContent: string
    secondaryTitle?: string
    secondaryContent?: string
  }
  
  // Slug for navigation
  slug?: string
}

export default function CaseStudy({
  subtitle,
  title,
  description,
  metadata,
  image,
  images,
  sections,
  features, // legacy support
  content,   // legacy support
  slug
}: CaseStudyProps) {
  // Determine which images to use - prioritize new images array, fallback to single image
  const availableImages = images || (image ? [image] : [])
  
  if (availableImages.length === 0) {
    throw new Error('CaseStudy component requires either an image or images prop')
  }

  // Simple icon mapping for features only
  const getFeatureIcon = (iconName: IconName) => {
    return icons[iconName] || icons['chart-bar']
  }
  return (
    <div className="relative isolate lg:overflow-visible lg:px-0 min-h-screen">
      {/* <div className="absolute inset-0 -z-10">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-slate-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:stroke-slate-800"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-slate-50 dark:fill-slate-800/50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div> */}
      <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:pr-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400">{subtitle}</p>
              <h1 className="mt-2 text-pretty text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
                {title}
              </h1>
              <p className="mt-4 text-xl/8 text-slate-600 dark:text-slate-400">
                {description}
              </p>
              
              {/* Metadata Section */}
              {metadata && (
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  {metadata.role && (
                    <div className="flex items-center gap-2 cursor-help relative group">
                      <Image
                        src="/images/eric-allen-profile-pic-2023.png"
                        alt="Eric Allen"
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                      <span className="text-sm dark:text-slate-400 text-slate-600">
                        {metadata.role}
                      </span>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        My role on this project
                      </div>
                    </div>
                  )}
                  {metadata.teamSize && (
                    <div className="flex items-center gap-2 cursor-help relative group">
                      <UsersIcon className="h-5 w-5 text-slate-600 dark:text-slate-400" aria-hidden="true" />
                      <span className="text-sm dark:text-slate-400 text-slate-600">
                        {metadata.teamSize}
                      </span>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        Team composition and size
                      </div>
                    </div>
                  )}
                  {metadata.dateRange && (
                    <div className="flex items-center gap-2 cursor-help relative group">
                      <CalendarDaysIcon className="h-5 w-5 text-slate-600 dark:text-slate-400" aria-hidden="true" />
                      <span className="text-sm dark:text-slate-400 text-slate-600">
                        {metadata.dateRange}
                      </span>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        Project timeline and duration
                      </div>
                    </div>
                  )}
                  {metadata.tools && metadata.tools.length > 0 && (
                    <div className="flex items-center gap-2 cursor-help relative group">
                      <WrenchScrewdriverIcon className="h-5 w-5 text-slate-600 dark:text-slate-400" aria-hidden="true" />
                      <span className="text-sm dark:text-slate-400 text-slate-600">
                        {metadata.tools.join(', ')}
                      </span>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        Design and development tools used
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <ImageGallery images={availableImages} />
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:pr-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-slate-600 lg:max-w-lg dark:text-slate-400 min-h-[600px]">
              {sections ? (
                // New structured sections
                <div className="space-y-12">

                  {/* Problem Statement Section */}
                  <section>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
                      {sections.problemStatement.title || 'Problem'}
                    </h2>
                    <div className="space-y-4">
                      {sections.problemStatement.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </section>

                  {/* Research & Feedback Section */}
                  <section>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
                      {sections.researchAndFeedback.title || 'Research'}
                    </h2>
                    <div className="space-y-4">
                      {sections.researchAndFeedback.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
{/* Tools Section */}
                  {sections.tools && (
                    <section>
                      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
                        {sections.tools.title || 'Tools'}
                      </h2>
                      <div className="space-y-4 mb-6">
                        {sections.tools.content.split('\n\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                      {sections.tools.features && (
                        <ul role="list" className="space-y-5 text-slate-600 dark:text-slate-400">
                          {sections.tools.features.map((feature, index) => {
                            const IconComponent = getFeatureIcon(feature.icon)
                            return (
                              <li key={index} className="flex gap-x-3">
                                <IconComponent
                                  aria-hidden={true}
                                  className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                                />
                                <div>
                                  <div className="font-semibold text-slate-900 dark:text-white">
                                    {feature.title}
                                  </div>
                                  <p className="mt-1 text-md text-slate-600 dark:text-slate-400">
                                    {feature.description}
                                  </p>
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </section>
                  )}
                  {/* Solution Section */}
                  <section>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
                      {sections.solution.title || 'Solution'}
                    </h2>
                    <div className="space-y-4 mb-6">
                      {sections.solution.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    {sections.solution.features && (
                      <ul role="list" className="space-y-5 text-slate-600 dark:text-slate-400">
                        {sections.solution.features.map((feature, index) => {
                          const IconComponent = getFeatureIcon(feature.icon)
                          return (
                            <li key={index} className="flex gap-x-3">
                              <IconComponent
                                aria-hidden={true}
                                className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                              />
                              <div>
                                <div className="font-semibold text-slate-900 dark:text-white">
                                  {feature.title}
                                </div>
                                <p className="mt-1 text-md text-slate-600 dark:text-slate-400">
                                  {feature.description}
                                </p>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </section>

                  {/* Impact and Results Section */}
                  <section>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
                      {sections.impactAndResults.title || 'Impact & Results'}
                    </h2>
                    <div className="space-y-4 mb-6">
                      {sections.impactAndResults.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    {sections.impactAndResults.features && (
                      <ul role="list" className="space-y-5 text-slate-600 dark:text-slate-400">
                        {sections.impactAndResults.features.map((feature, index) => {
                          const IconComponent = getFeatureIcon(feature.icon)
                          return (
                            <li key={index} className="flex gap-x-3">
                              <IconComponent
                                aria-hidden={true}
                                className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                              />
                              <div>
                                <div className="font-semibold text-slate-900 dark:text-white">
                                  {feature.title}
                                </div>
                                <p className="mt-1 text-md text-slate-600 dark:text-slate-400">
                                  {feature.description}
                                </p>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </section>
                </div>
              ) : (
                // Legacy content structure for backward compatibility
                <>
                  <p>
                    {content?.mainContent}
                  </p>
                  {features && (
                    <ul role="list" className="mt-8 space-y-6 text-slate-600 dark:text-slate-400">
                      {features.map((feature, index) => {
                        const IconComponent = getFeatureIcon(feature.icon)
                        return (
                          <li key={index} className="flex gap-x-3">
                            <IconComponent
                              aria-hidden={true}
                              className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                            />
                            <div>
                              <div className="font-semibold text-slate-900 dark:text-white">
                                {feature.title}
                              </div>
                              <p className="mt-1 text-md text-slate-600 dark:text-slate-400">
                                {feature.description}
                              </p>
                            </div>
                          </li>
                        )}
                      )}
                    </ul>
                  )}
                  {content?.secondaryTitle && (
                    <>
                      <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {content.secondaryTitle}
                      </h2>
                      {content.secondaryContent && (
                        <p className="mt-6 text-md text-slate-600 dark:text-slate-400">
                          {content.secondaryContent}
                        </p>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Portfolio Navigation */}
      {slug && (
        <div className="mx-auto lg:mx-0 lg:max-w-7xl mt-12">
          <PortfolioNavigationServer currentSlug={slug} />
        </div>
      )}
    </div>
  )
}