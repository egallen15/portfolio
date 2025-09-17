import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function BentoGrid() {
  return (
    <div className="">
      <div className="xl:mx-auto max-w-2xl lg:max-w-7xl">
      
        <motion.div 
          className="grid gap-6 lg:grid-cols-3 lg:grid-rows-4"
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
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative lg:row-span-2"
          >
            <Link href="/portfolio/event-registration" className="group cursor-pointer block h-full">
            <div className="absolute inset-px rounded-lg bg-gray-50 lg:rounded-tl-[2rem] dark:bg-slate-800 transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-slate-700" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tl-[calc(2rem+1px)] transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-950 max-lg:text-center dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Subsplash Event Registration
                </p>
                <div className="mt-2 flex flex-col max-lg:items-center gap-1">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 w-fit">
                    Lead UX Designer
                  </span>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    January, 2022
                  </p>
                </div>
                <p className="mt-2 max-w-lg text-sm/6 text-slate-600 max-lg:text-center dark:text-slate-400">
                  UX & PM lead for Event Registration, a tool for churches to manage events and attendees.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-slate-700 bg-slate-900 shadow-2xl dark:shadow-none dark:outline dark:outline-1 dark:outline-white/20 transition-all duration-300 group-hover:shadow-3xl group-hover:border-slate-600">
                  <Image
                    alt=""
                    width={500}
                    height={500}
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg lg:rounded-tl-[2rem]" />
          </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-lg:row-start-1"
          >
            <Link href="/portfolio/workflows" className="group cursor-pointer block h-full">
            <div className="absolute inset-px rounded-lg bg-gray-50 max-lg:rounded-t-[2rem] dark:bg-slate-800 transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-slate-700" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-950 max-lg:text-center dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Subsplash Workflows
                </p>
                <div className="mt-2 flex flex-col max-lg:items-center gap-1">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 w-fit">
                    Lead UX Designer
                  </span>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    March, 2021
                  </p>
                </div>
                <p className="mt-2 max-w-lg text-sm/6 text-slate-600 max-lg:text-center dark:text-slate-400">
                  UX lead for Kanban style board managing church processes in the Subsplash Dashboard.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  className="w-full max-lg:max-w-xs dark:hidden transition-transform duration-300 group-hover:scale-102"
                  width={500}
                  height={500}
                />
                <Image
                  alt=""

                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                  className="hidden w-full max-lg:max-w-xs dark:block transition-transform duration-300 group-hover:scale-102"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg max-lg:rounded-t-[2rem]" />
          </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
          >
            <Link href="/portfolio/signup" className="group cursor-pointer block h-full">
            <div className="absolute inset-px rounded-lg bg-gray-50 dark:bg-slate-800 transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-slate-700" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-950 max-lg:text-center dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Subsplash signup & onboarding
                </p>
                <div className="mt-2 flex flex-col max-lg:items-center gap-1">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 w-fit">
                    Lead UX Designer
                  </span>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    September, 2020
                  </p>
                </div>
                <p className="mt-2 max-w-lg text-sm/6 text-slate-600 max-lg:text-center dark:text-slate-400">
                  UX lead for a simplified signup and onboarding process, integrating with Stripe, Salesforce, and Netsuite.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover dark:hidden transition-transform duration-300 group-hover:scale-102"
                  width={500}
                  height={500}
                />
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                  className="hidden h-[min(152px,40cqw)] object-cover dark:block transition-transform duration-300 group-hover:scale-102"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg" />
          </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative lg:row-span-2"
          >
            <Link href="/portfolio/check-in" className="group cursor-pointer block h-full">
            <div className="absolute inset-px rounded-lg bg-gray-50 lg:rounded-tr-[2rem] dark:bg-slate-800 transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-slate-700" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)] transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-950 max-lg:text-center dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Subsplash Check-in
                </p>
                <div className="mt-2 flex flex-col max-lg:items-center gap-1">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 w-fit">
                    Lead UX Designer
                  </span>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    June, 2021
                  </p>
                </div>
                <p className="mt-2 max-w-lg text-sm/6 text-slate-600 max-lg:text-center dark:text-slate-400">
                  iPad app for quick and easy check-in at events, fully integrated with the Subsplash platform.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-slate-900 shadow-2xl outline outline-1 outline-white/10 dark:bg-slate-900/60 dark:shadow-none transition-all duration-300 group-hover:shadow-3xl group-hover:bg-slate-800">
                  <div className="flex bg-slate-900 outline outline-1 outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-slate-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-gray-50/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-slate-600/10 px-4 py-2">
                        App.jsx
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6 transition-transform duration-300 group-hover:scale-102">
                    {/* Your code example */}asdfasdfadf
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg lg:rounded-tr-[2rem]" />
          </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative lg:col-span-2 lg:row-start-3"
          >
            <Link href="/portfolio/new-project-1" className="group cursor-pointer block h-full">
            <div className="absolute inset-px rounded-lg bg-gray-50 dark:bg-slate-800 transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-slate-700" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-950 max-lg:text-center dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Payment forms
                </p>
                <div className="mt-2 flex flex-col max-lg:items-center gap-1">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 w-fit">
                    Lead UX Designer
                  </span>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    February, 2019
                  </p>
                </div>
                <p className="mt-2 max-w-lg text-sm/6 text-slate-600 max-lg:text-center dark:text-slate-400">
                  UX design lead for a simple payment processing tool. $100M+ processed in first 4 years.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  className="w-full max-lg:max-w-xs dark:hidden transition-transform duration-300 group-hover:scale-102"
                  width={500}
                  height={500}
                />
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                  className="hidden w-full max-lg:max-w-xs dark:block transition-transform duration-300 group-hover:scale-102"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg" />
          </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative lg:col-start-3 lg:row-start-3"
          >
            <Link href="/portfolio/new-project-2" className="group cursor-pointer block h-full">
            <div className="absolute inset-px rounded-lg bg-gray-50 dark:bg-slate-800 transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-slate-700" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-950 max-lg:text-center dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Church Management
                </p>
                <div className="mt-2 flex flex-col max-lg:items-center gap-1">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 w-fit">
                    Lead UX Designer
                  </span>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    August, 2020
                  </p>
                </div>
                <p className="mt-2 max-w-lg text-sm/6 text-slate-600 max-lg:text-center dark:text-slate-400">
                  Integrated a church management tool into the Subsplash Dashboard over time via a complex acquisition.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover dark:hidden transition-transform duration-300 group-hover:scale-102"
                  width={500}
                  height={500}
                />
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                  className="hidden h-[min(152px,40cqw)] object-cover dark:block transition-transform duration-300 group-hover:scale-102"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg" />
          </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative lg:col-start-1 lg:row-start-4"
          >
            <Link href="/portfolio/new-project-3" className="group cursor-pointer block h-full">
            <div className="absolute inset-px rounded-lg bg-gray-50 lg:rounded-bl-[2rem] dark:bg-slate-800 transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-slate-700" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-bl-[calc(2rem+1px)] lg:rounded-bl-[calc(2rem+1px)] transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-950 max-lg:text-center dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Waves Design System
                </p>
                <div className="mt-2 flex flex-col max-lg:items-center gap-1">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 w-fit">
                    Lead UX Designer
                  </span>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    November, 2021
                  </p>
                </div>
                <p className="mt-2 max-w-lg text-sm/6 text-slate-600 max-lg:text-center dark:text-slate-400">
                  Documented and iterated on the Subsplash design system, including UI components, principles, and guidelines.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover dark:hidden transition-transform duration-300 group-hover:scale-102"
                  width={500}
                  height={500}
                />
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                  className="hidden h-[min(152px,40cqw)] object-cover dark:block transition-transform duration-300 group-hover:scale-102"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg lg:rounded-bl-[2rem]" />
          </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative lg:col-span-2 lg:col-start-2 lg:row-start-4"
          >
            <Link href="/portfolio/new-project-4" className="group cursor-pointer block h-full">
            <div className="absolute inset-px rounded-lg bg-gray-50 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] dark:bg-slate-800 transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-slate-700" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)] transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-950 max-lg:text-center dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Events improvements
                </p>
                <div className="mt-2 flex flex-col max-lg:items-center gap-1">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 w-fit">
                    Lead UX Designer
                  </span>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Ongoing
                  </p>
                </div>
                <p className="mt-2 max-w-lg text-sm/6 text-slate-600 max-lg:text-center dark:text-slate-400">
                  Improvements to the Events product made over time, based on customer feedback.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  className="w-full max-lg:max-w-xs dark:hidden transition-transform duration-300 group-hover:scale-102"
                  width={500}
                  height={500}
                />
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                  className="hidden w-full max-lg:max-w-xs dark:block transition-transform duration-300 group-hover:scale-102"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
