"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import ImageLightbox from "./ImageLightbox";

interface BentoGridProps {
  maxItems?: number;
}

interface LightboxImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

type BentoGridItem = {
  id: string;
  title: string;
  date?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  darkImage?: string;
  content?: string;
  gridClasses: string;
  roundedClasses: string;
  contentType: "mobile-screen" | "image" | "image-small" | "code";
} & (
  | {
      action: "case-study";
      href: string;
    }
  | {
      action: "lightbox";
      lightboxImage?: LightboxImageData;
    }
);

export default function BentoGrid({ maxItems }: BentoGridProps) {
  const [activeLightboxImage, setActiveLightboxImage] = useState<LightboxImageData | null>(null);

  const allProjects: BentoGridItem[] = [
    {
      id: "event-registration",
      action: "case-study",
      href: "/portfolio/event-registration",
      title: "Subsplash Event Registration",
      date: "January 2022 – Present",
      description: "A registration product used to collect payments and details about guests for church events.",
      image: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png",
      imageAlt: "Mobile screen mockup for Subsplash Event Registration",
      gridClasses: "relative lg:row-span-2 lg:col-start-1 lg:row-start-1 max-lg:h-96 lg:max-h-[48rem]",
      roundedClasses: "lg:rounded-tl-[2rem]",
      contentType: "mobile-screen"
    },
    {
      id: "workflows",
      action: "case-study",
      href: "/portfolio/workflows", 
      title: "Subsplash Workflows",
      date: "September 2024 – Present",
      description: "A Trello-style kanban tool for managing church processes in the Subsplash Dashboard.",
      image: "/images/workflows.png",
      imageAlt: "Subsplash Workflows board interface",
      darkImage: "/images/workflows.png",
      gridClasses: "relative max-lg:row-start-1 lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-1 max-lg:h-80 lg:max-h-[54rem]",
      roundedClasses: "max-lg:rounded-t-[2rem]",
      contentType: "image"
    },
    {
      id: "subsplash-signup",
      action: "case-study",
      href: "/portfolio/subsplash-signup",
      title: "Subsplash Signup and Onboarding", 
      date: "September 2020",
      description: "A redesigned first-time experience for new customers signing up for Subsplash.",
      image: "https://placehold.co/1200x675?text=Subsplash+Signup",
      imageAlt: "Placeholder preview for Subsplash Signup and Onboarding",
      gridClasses: "relative max-lg:row-start-3 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-3 max-lg:h-64 lg:max-h-[54rem]",
      roundedClasses: "",
      contentType: "image"
    },
    {
      id: "check-in",
      action: "case-study",
      href: "/portfolio/check-in",
      title: "Subsplash Check-in",
      date: "January 2023 – Present", 
      description: "A child check-in iPad app + attendance reporting for events.",
      content: "asdfasdfadf",
      gridClasses: "relative lg:row-span-2 lg:col-start-3 lg:row-start-3 max-lg:h-96 lg:max-h-[48rem]",
      roundedClasses: "lg:rounded-tr-[2rem]",
      contentType: "code"
    },
    {
      id: "payment-forms",
      action: "lightbox",
      title: "Subsplash Payment Forms",
      date: "January – June 2025",
      description: "Non-charitable payments for churches; $100M+ processed in first 4 years.",
      image: "/images/payment-forms.png",
      imageAlt: "Subsplash Payment Forms interface",
      imageWidth: 3042,
      imageHeight: 3141,
      lightboxImage: {
        src: "/images/payment-forms.png",
        alt: "Subsplash Payment Forms interface",
        width: 3042,
        height: 3141,
      },
      gridClasses: "relative lg:row-span-1 lg:col-start-1 lg:row-start-5 h-40 sm:h-48 lg:h-full",
      roundedClasses: "",
      contentType: "image"
    },
    {
      id: "church-management", 
      action: "lightbox",
      title: "Subsplash Church Management",
      date: "August 2020 – 2021",
      description: "Absorbed a church management platform into the Subsplash ecosystem after an acquisition.",
      image: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png",
      imageAlt: "Security-style preview for Subsplash Church Management",
      darkImage: "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png",
      gridClasses: "relative lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:row-start-5 h-40 sm:h-48 lg:h-full",
      roundedClasses: "",
      contentType: "image-small"
    },
    {
      id: "design-system",
      action: "lightbox",
      title: "Waves Design System",
      date: "2018 – Present",
      description: "Documented and iterated on the Subsplash design system, including UI components, principles, and guidelines.",
      image: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png",
      imageAlt: "Preview for Waves Design System",
      darkImage: "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png",
      gridClasses: "relative lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-6 h-40 sm:h-48 lg:h-full",
      roundedClasses: "",
      contentType: "image-small"
    },
    {
      id: "events-improvements",
      action: "lightbox",
      title: "Subsplash Events improvements", 
      date: "2018 – Present",
      description: "Improvements to Subsplash Events made based on customer feedback.",
      image: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png",
      imageAlt: "Performance-style preview for Subsplash Events improvements",
      darkImage: "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png",
      gridClasses: "relative lg:row-span-1 lg:col-start-3 lg:row-start-6 h-40 sm:h-48 lg:h-full",
      roundedClasses: "",
      contentType: "image"
    },
    {
      id: "lightbox-wide-example",
      action: "lightbox",
      title: "Wide Screenshot Example",
      date: "3.2:1 aspect ratio",
      description: "A wide product frame that opens in the same fullscreen lightbox as blog post images.",
      image: "/images/Check-in frame.png",
      imageAlt: "Wide Check-in product frame screenshot",
      imageWidth: 2112,
      imageHeight: 669,
      lightboxImage: {
        src: "/images/Check-in frame.png",
        alt: "Wide Check-in product frame screenshot",
        width: 2112,
        height: 669,
      },
      gridClasses: "relative lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-7 h-40 sm:h-48 lg:h-full",
      roundedClasses: "",
      contentType: "image"
    },
    {
      id: "lightbox-landscape-example",
      action: "lightbox",
      title: "Landscape Walkthrough Example",
      date: "1.5:1 aspect ratio",
      description: "A more standard landscape case-study image for checking crop and scale in the grid.",
      image: "/images/Payment Forms 2.0 Walkthrough Image.png",
      imageAlt: "Payment Forms walkthrough screenshot",
      imageWidth: 1619,
      imageHeight: 1048,
      lightboxImage: {
        src: "/images/Payment Forms 2.0 Walkthrough Image.png",
        alt: "Payment Forms walkthrough screenshot",
        width: 1619,
        height: 1048,
      },
      gridClasses: "relative lg:row-span-1 lg:col-start-3 lg:row-start-7 h-40 sm:h-48 lg:h-full",
      roundedClasses: "",
      contentType: "image"
    },
    {
      id: "lightbox-square-example",
      action: "lightbox",
      title: "Square Image Example",
      date: "1:1 aspect ratio",
      description: "A square image tile so you can compare compact imagery against wider product screenshots.",
      image: "/images/general-assembly.png",
      imageAlt: "General Assembly square image example",
      imageWidth: 390,
      imageHeight: 390,
      lightboxImage: {
        src: "/images/general-assembly.png",
        alt: "General Assembly square image example",
        width: 390,
        height: 390,
      },
      gridClasses: "relative lg:col-span-3 lg:row-span-1 lg:col-start-1 lg:row-start-8 h-40 sm:h-48 lg:h-full",
      roundedClasses: "max-lg:rounded-b-[2rem] lg:rounded-b-[2rem]",
      contentType: "image-small"
    }
  ];

  // Filter projects based on maxItems prop
  const displayedProjects = maxItems ? allProjects.slice(0, maxItems) : allProjects;
  
  // Adjust grid layout for fewer items
  const gridClasses = maxItems === 4 
    ? "grid gap-6 lg:grid-cols-2 lg:grid-rows-2"
    : "bento-portfolio-grid grid gap-6 lg:grid-cols-3";

  const getLightboxImage = (project: BentoGridItem): LightboxImageData | null => {
    if (project.action !== "lightbox") {
      return null;
    }

    if (project.lightboxImage) {
      return project.lightboxImage;
    }

    if (!project.image) {
      return null;
    }

    return {
      src: project.image,
      alt: project.imageAlt ?? project.title,
      width: project.imageWidth ?? 1200,
      height: project.imageHeight ?? 675,
    };
  };

  return (
    <div className="">
      <div className="md:mx-auto max-w-2xl lg:max-w-7xl">
        <motion.div 
          className={gridClasses}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {displayedProjects.map((project) => {
            const primaryImageClassName = `${project.contentType === "image" ? "w-full max-lg:max-w-xs" : "h-[min(152px,40cqw)]"} ${project.darkImage ? "dark:hidden" : ""} transition-transform duration-300 object-cover`;
            const lightboxImage = getLightboxImage(project);
            const lightboxTileContent = project.action === "lightbox" && lightboxImage ? (
              <>
                <Image
                  alt={project.imageAlt ?? project.title}
                  src={project.image!}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                {project.darkImage && (
                  <Image
                    alt={project.imageAlt ?? project.title}
                    src={project.darkImage}
                    fill
                    className="hidden object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105 dark:block"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:p-6">
                  <p className="text-base font-medium tracking-tight">
                    {project.title}
                  </p>
                  {project.date && (
                    <p className="mt-1 text-xs text-white/75">
                      {project.date}
                    </p>
                  )}
                  <p className="mt-2 max-w-xl text-sm/5 text-white/85">
                    {project.description}
                  </p>
                </div>
              </>
            ) : null;

            const cardContent = (
              <>
                <div className={`absolute inset-px rounded-lg bg-slate-50 dark:bg-slate-800 stacked-shadow transition-all duration-300 group-hover:bg-slate-100 dark:group-hover:bg-slate-700 ${maxItems !== 4 ? project.roundedClasses : ''}`} />
                <div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] transition-transform duration-300 ${maxItems !== 4 && project.roundedClasses ? project.roundedClasses.replace('rounded-', 'rounded-[calc(') + '+1px)]' : ''}`}>
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-slate-950 max-lg:text-center dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {project.title}
                    </p>
                    {project.date && (
                      <div className="mt-2 flex flex-col max-lg:items-center gap-1">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {project.date}
                        </p>
                      </div>
                    )}
                    <p className="mt-2 max-w-lg text-sm/6 text-slate-600 max-lg:text-center dark:text-slate-400">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Content area - different layouts for different projects */}
                  {project.contentType === "mobile-screen" && (
                    <div className="relative min-h-[30rem] max-h-[25rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm max-lg:min-h-[12rem] max-lg:max-h-[12rem] overflow-hidden">
                      <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-slate-700 bg-slate-900 shadow-2xl dark:shadow-none dark:outline dark:outline-1 dark:outline-white/20 transition-all duration-300 group-hover:shadow-3xl group-hover:border-slate-600">
                        <Image
                          alt={project.imageAlt ?? ""}
                          width={1500}
                          height={500}
                          src={project.image!}
                          className="size-full object-cover object-top transition-transform duration-300"
                        />
                      </div>
                    </div>
                  )}
                  
                  {project.contentType === "image" && (
                    <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2 overflow-hidden max-lg:max-h-[8rem] lg:max-h-[40rem]">
                      <Image
                        alt={project.imageAlt ?? ""}
                        src={project.image!}
                        className={primaryImageClassName}
                        width={project.imageWidth ?? 500}
                        height={project.imageHeight ?? 500}
                      />
                      {project.darkImage && (
                        <Image
                          alt={project.imageAlt ?? ""}
                          src={project.darkImage}
                          className="hidden w-full max-lg:max-w-xs dark:block transition-transform duration-300 object-cover"
                          width={project.imageWidth ?? 500}
                          height={project.imageHeight ?? 500}
                        />
                      )}
                    </div>
                  )}
                  
                  {project.contentType === "image-small" && (
                    <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2 overflow-hidden max-lg:max-h-[6rem] lg:max-h-[18rem]">
                      <Image
                        alt={project.imageAlt ?? ""}
                        src={project.image!}
                        className={primaryImageClassName}
                        width={project.imageWidth ?? 500}
                        height={project.imageHeight ?? 500}
                      />
                      {project.darkImage && (
                        <Image
                          alt={project.imageAlt ?? ""}
                          src={project.darkImage}
                          className="hidden h-[min(152px,40cqw)] object-cover dark:block transition-transform duration-300"
                          width={project.imageWidth ?? 500}
                          height={project.imageHeight ?? 500}
                        />
                      )}
                    </div>
                  )}
                  
                  {project.contentType === "code" && (
                    <div className="relative min-h-[30rem] max-h-[25rem] w-full grow overflow-hidden max-lg:min-h-[12rem] max-lg:max-h-[12rem]">
                      <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-slate-900 shadow-2xl outline outline-1 outline-white/10 dark:bg-slate-900/60 dark:shadow-none transition-all duration-300 group-hover:shadow-3xl group-hover:bg-slate-800">
                        <div className="flex bg-slate-900 outline outline-1 outline-white/5">
                          <div className="-mb-px flex text-sm/6 font-medium text-slate-400">
                            <div className="border-b border-r border-b-white/20 border-r-white/10 bg-slate-50/5 px-4 py-2 text-white">
                              NotificationSetting.jsx
                            </div>
                            <div className="border-r border-slate-600/10 px-4 py-2">
                              App.jsx
                            </div>
                          </div>
                        </div>
                        <div className="px-6 pb-14 pt-6 transition-transform duration-300">
                          {project.content}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className={`pointer-events-none absolute inset-px rounded-lg ${maxItems !== 4 ? project.roundedClasses : ''}`} />
              </>
            );

            return (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={maxItems === 4 ? "relative h-80 lg:h-96" : project.gridClasses}
              >
                {project.action === "case-study" ? (
                  <Link href={project.href} className="group cursor-pointer block h-full">
                    {cardContent}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveLightboxImage(lightboxImage)}
                    className={`group relative block h-full w-full cursor-pointer appearance-none overflow-hidden rounded-lg border-0 bg-slate-100 p-0 text-left stacked-shadow transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:bg-slate-800 ${maxItems !== 4 ? project.roundedClasses : ''}`}
                    aria-label={`Open ${project.title} image`}
                  >
                    {lightboxTileContent}
                  </button>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      {activeLightboxImage && (
        <ImageLightbox
          images={[activeLightboxImage]}
          currentIndex={0}
          isOpen={Boolean(activeLightboxImage)}
          onClose={() => setActiveLightboxImage(null)}
        />
      )}
    </div>
  );
}

