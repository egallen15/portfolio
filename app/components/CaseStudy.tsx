import { ComponentType } from 'react'
import ImageGallery from './ImageGallery'

export interface CaseStudyFeature {
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  title: string
  description: string
}

export interface CaseStudyProps {
  // Hero section
  subtitle: string
  title: string
  description: string
  
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
}

export default function CaseStudy({
  subtitle,
  title,
  description,
  image,
  images,
  sections,
  features, // legacy support
  content   // legacy support
}: CaseStudyProps) {
  // Determine which images to use - prioritize new images array, fallback to single image
  const availableImages = images || (image ? [image] : [])
  
  if (availableImages.length === 0) {
    throw new Error('CaseStudy component requires either an image or images prop')
  }
  return (
    <div className="relative isolate bg-white py-8 lg:overflow-visible lg:px-0 dark:bg-slate-900">
      <div className="absolute inset-0 -z-10">
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
      </div>
      <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:pr-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">{subtitle}</p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                {title}
              </h1>
              <p className="mt-6 text-xl/8 text-slate-800 dark:text-slate-400">
                {description}
              </p>
            </div>
          </div>
        </div>
        <ImageGallery images={availableImages} />
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:pr-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-slate-600 lg:max-w-lg dark:text-slate-400">
              {sections ? (
                // New structured sections
                <div className="space-y-12">

                  {/* Problem Statement Section */}
                  <section>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
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
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
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
                      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                        {sections.tools.title || 'Tools'}
                      </h2>
                      <div className="space-y-4 mb-6">
                        {sections.tools.content.split('\n\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                      {sections.tools.features && (
                        <ul role="list" className="space-y-4 text-slate-500 dark:text-slate-400">
                          {sections.tools.features.map((feature, index) => (
                            <li key={index} className="flex gap-x-3">
                              <feature.icon
                                aria-hidden={true}
                                className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                              />
                              <span>
                                <strong className="font-semibold text-slate-900 dark:text-white">{feature.title}</strong> {feature.description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  )}
                  {/* Solution Section */}
                  <section>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                      {sections.solution.title || 'Solution'}
                    </h2>
                    <div className="space-y-4 mb-6">
                      {sections.solution.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    {sections.solution.features && (
                      <ul role="list" className="space-y-4 text-slate-600 dark:text-slate-400">
                        {sections.solution.features.map((feature, index) => (
                          <li key={index} className="flex gap-x-3">
                            <feature.icon
                              aria-hidden={true}
                              className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                            />
                            <span>
                              <strong className="font-semibold text-slate-900 dark:text-white">{feature.title}</strong> {feature.description}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>

                  {/* Impact and Results Section */}
                  <section>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                      {sections.impactAndResults.title || 'Impact & Results'}
                    </h2>
                    <div className="space-y-4 mb-6">
                      {sections.impactAndResults.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    {sections.impactAndResults.features && (
                      <ul role="list" className="space-y-4 text-slate-600 dark:text-slate-400">
                        {sections.impactAndResults.features.map((feature, index) => (
                          <li key={index} className="flex gap-x-3">
                            <feature.icon
                              aria-hidden={true}
                              className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                            />
                            <span>
                              <strong className="font-semibold text-slate-900 dark:text-white">{feature.title}</strong> {feature.description}
                            </span>
                          </li>
                        ))}
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
                    <ul role="list" className="mt-8 space-y-8 text-slate-600 dark:text-slate-400">
                      {features.map((feature, index) => (
                        <li key={index} className="flex gap-x-3">
                          <feature.icon
                            aria-hidden={true}
                            className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                          />
                          <span>
                            <strong className="font-semibold text-slate-900 dark:text-white">{feature.title}</strong> {feature.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {content?.secondaryTitle && (
                    <>
                      <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {content.secondaryTitle}
                      </h2>
                      {content.secondaryContent && (
                        <p className="mt-6">
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
    </div>
  )
}