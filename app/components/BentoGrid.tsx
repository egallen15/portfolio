import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

interface BentoGridProps {
  maxItems?: number;
}

export default function BentoGrid({ maxItems }: BentoGridProps) {
  // Define all your projects in an array for easier management
  const allProjects = [
    {
      id: "event-registration",
      href: "/portfolio/event-registration",
      title: "Subsplash Event Registration",
      date: "January 2022 – Present",
      description: "A registration product used to collect payments and details about guests for church events.",
      image: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png",
      gridClasses: "relative lg:row-span-2 lg:col-start-1 lg:row-start-1 max-lg:h-96 lg:max-h-[48rem]",
      roundedClasses: "lg:rounded-tl-[2rem]",
      contentType: "mobile-screen"
    },
    {
      id: "workflows",
      href: "/portfolio/workflows", 
      title: "Subsplash Workflows",
      date: "September 2024 – Present",
      description: "A Trello-style kanban tool for managing church processes in the Subsplash Dashboard.",
      image: "/images/workflows.png",
      darkImage: "/images/workflows.png",
      gridClasses: "relative max-lg:row-start-1 lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-1 max-lg:h-80 lg:max-h-[54rem]",
      roundedClasses: "max-lg:rounded-t-[2rem]",
      contentType: "image"
    },
    {
      id: "subsplash-signup",
      href: "/portfolio/subsplash-signup",
      title: "Subsplash Signup and Onboarding", 
      date: "September 2020",
      description: "A redesigned first-time experience for new customers signing up for Subsplash.",
      image: "https://placehold.co/1200x675?text=Subsplash+Signup",
      gridClasses: "relative max-lg:row-start-3 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-3 max-lg:h-64 lg:max-h-[54rem]",
      roundedClasses: "",
      contentType: "image"
    },
    {
      id: "check-in",
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
      href: "/portfolio/new-project-1",
      title: "Subsplash Payment Forms",
      date: "January – June 2025",
      description: "Non-charitable payments for churches; $100M+ processed in first 4 years.",
      image: "/images/payment-forms.png",
      darkImage: "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png",
      gridClasses: "relative lg:row-span-2 lg:col-start-1 lg:row-start-5 max-lg:h-80 lg:max-h-[48rem]",
      roundedClasses: "",
      contentType: "image"
    },
    {
      id: "church-management", 
      href: "/portfolio/new-project-2",
      title: "Subsplash Church Management",
      date: "August 2020 – 2021",
      description: "Absorbed a church management platform into the Subsplash ecosystem after an acquisition.",
      image: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png",
      darkImage: "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png",
      gridClasses: "relative lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-5 max-lg:h-64 lg:max-h-[54rem]",
      roundedClasses: "",
      contentType: "image-small"
    },
    {
      id: "design-system",
      href: "/portfolio/new-project-3", 
      title: "Waves Design System",
      date: "2018 – Present",
      description: "Documented and iterated on the Subsplash design system, including UI components, principles, and guidelines.",
      image: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png",
      darkImage: "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png",
      gridClasses: "relative lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-7 max-lg:h-64 lg:max-h-[54rem]",
      roundedClasses: "lg:rounded-bl-[2rem]",
      contentType: "image-small"
    },
    {
      id: "events-improvements",
      href: "/portfolio/new-project-4",
      title: "Subsplash Events improvements", 
      date: "2018 – Present",
      description: "Improvements to Subsplash Events made based on customer feedback.",
      image: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png",
      darkImage: "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png",
      gridClasses: "relative lg:row-span-2 lg:col-start-3 lg:row-start-7 max-lg:h-80 lg:max-h-[48rem]",
      roundedClasses: "max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]",
      contentType: "image"
    }
  ];

  // Filter projects based on maxItems prop
  const displayedProjects = maxItems ? allProjects.slice(0, maxItems) : allProjects;
  
  // Adjust grid layout for fewer items
  const gridClasses = maxItems === 4 
    ? "grid gap-6 lg:grid-cols-2 lg:grid-rows-2"
    : "grid gap-6 lg:grid-cols-3 lg:grid-rows-8";
  return (
    <div className="">
      <div className="xl:mx-auto max-w-2xl lg:max-w-7xl">
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
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={maxItems === 4 ? "relative h-80 lg:h-96" : project.gridClasses}
            >
              <Link href={project.href} className="group cursor-pointer block h-full">
                <div className={`absolute inset-px rounded-lg bg-slate-50 dark:bg-slate-800 transition-all duration-300 group-hover:bg-slate-100 dark:group-hover:bg-slate-700 ${maxItems !== 4 ? project.roundedClasses : ''}`} />
                <div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] transition-transform duration-300 group-hover:scale-[1.02] ${maxItems !== 4 && project.roundedClasses ? project.roundedClasses.replace('rounded-', 'rounded-[calc(') + '+1px)]' : ''}`}>
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
                          alt=""
                          width={1500}
                          height={500}
                          src={project.image!}
                          className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                        />
                      </div>
                    </div>
                  )}
                  
                  {project.contentType === "image" && (
                    <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2 overflow-hidden max-lg:max-h-[8rem] lg:max-h-[40rem]">
                      <Image
                        alt=""
                        src={project.image!}
                        className="w-full max-lg:max-w-xs dark:hidden transition-transform duration-300 group-hover:scale-102 object-cover"
                        width={500}
                        height={500}
                      />
                      {project.darkImage && (
                        <Image
                          alt=""
                          src={project.darkImage}
                          className="hidden w-full max-lg:max-w-xs dark:block transition-transform duration-300 group-hover:scale-102 object-cover"
                          width={500}
                          height={500}
                        />
                      )}
                    </div>
                  )}
                  
                  {project.contentType === "image-small" && (
                    <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2 overflow-hidden max-lg:max-h-[6rem] lg:max-h-[18rem]">
                      <Image
                        alt=""
                        src={project.image!}
                        className="h-[min(152px,40cqw)] object-cover dark:hidden transition-transform duration-300 group-hover:scale-102"
                        width={500}
                        height={500}
                      />
                      {project.darkImage && (
                        <Image
                          alt=""
                          src={project.darkImage}
                          className="hidden h-[min(152px,40cqw)] object-cover dark:block transition-transform duration-300 group-hover:scale-102"
                          width={500}
                          height={500}
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
                        <div className="px-6 pb-14 pt-6 transition-transform duration-300 group-hover:scale-102">
                          {project.content}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className={`pointer-events-none absolute inset-px rounded-lg ${maxItems !== 4 ? project.roundedClasses : ''}`} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

