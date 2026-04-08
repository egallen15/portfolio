import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./components/SocialLinks";
import * as motion from "motion/react-client";
import BlogContentServer from "./components/BlogContentServer";
import BentoGrid from "./components/BentoGrid";
import HeroDoodleBackground from "./components/HeroDoodleBackground";
import HighlightedHeading from "./components/HighlightedHeading";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";
import ProjectGrid from "./components/ProjectGrid";

export const metadata = {
  title: "Eric Allen | UX Designer",
  description: "Austin-based UX Designer. Learner, Writer, Dad.",
};

export default function Home() {
  // This is the main page of the portfolio
  // It contains the hero section, latest posts, case studies, and other sections
  
  // Projects for the homepage
  const personalProjects = [
    {
      id: "peak",
      href: "https://peakapp.work",
      title: "Peak",
      description: "Visualize your personal todo progress with interactive charts and AI analysis.",
      logo: "",
    },
    {
      id: "binstackr",
      href: "https://bin-stack.com",
      title: "Binstackr",
      description: "Make a maximized multi-dimensional decision with the Binstack method from Jason Cohen.",
      logo: "/images/binstackr-logo.svg",
    },
    {
      id: "uxflow",
      href: "https://uxflow.net",
      title: "uxflow",
      description: "A simple design tool for creating beautiful user flow diagrams and user journey maps.",
      logo: "",
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col mx-auto w-full max-w-7xl">
      <div className="w-full flex-grow">
        <div className="sm:flex sm:items-center sm:justify-between"></div>
        <main className="mx-6 xl:mx-0">
          {/* SVG clipPath definition for front blob mask */}
          <svg width="0" height="0" aria-hidden="true">
            <defs>
              <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
                <path
                  d="M0.871 0.109
               C0.950 0.187 0.972 0.310 0.987 0.431
               C1.000 0.549 1.010 0.664 0.965 0.751
               C0.919 0.836 0.805 0.895 0.679 0.956
               C0.553 1.017 0.364 1.005 0.247 0.978
               C0.131 0.949 0.089 0.907 0.042 0.788
               C-0.001 0.667 0.000 0.547 0.012 0.425
               C0.029 0.303 0.066 0.180 0.156 0.105
               C0.244 0.028 0.381 0.000 0.518 0.000
               C0.657 0.000 0.793 0.033 0.871 0.109Z"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="flex flex-col">
            <div className="relative isolate lg:mt-6">
              <HeroDoodleBackground className="-inset-x-12 -inset-y-10 md:-inset-x-16 md:-inset-y-12" />
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="relative z-10 flex-1">
                  <div className="relative z-10 py-4 md:py-6">
                    <div className="relative mb-6 inline-flex max-w-3xl flex-col px-2 py-2 md:px-3 md:py-2.5">
                      <div className="absolute inset-0 -z-10 rounded-[2rem] backdrop-blur-2xl [mask-image:radial-gradient(ellipse_at_center,black_46%,rgba(0,0,0,0.6)_70%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_46%,rgba(0,0,0,0.6)_70%,transparent_100%)]" />
                      <div className="absolute inset-x-1 inset-y-1 -z-10 rounded-[1.5rem] backdrop-blur-lg [mask-image:radial-gradient(ellipse_at_center,black_56%,transparent_96%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_56%,transparent_96%)]" />
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="text-3xl pr-2 md:text-5xl max-w-fit font-bold"
                      >
                        Hi! I&#39;m{" "}
                        <Link href="/about" className="hover:neon">
                          Eric Allen
                        </Link>{" "}
                        👋
                      </motion.h1>
                      <p className="text-md max-w-3xl pt-2.5 md:pt-3">
                        I&#39;m a UX designer based in <strong>Austin, Texas</strong>.
                        For the past <span>7 years</span>, I&#39;ve worked at{" "}
                        <a
                          href="https://subsplash.com"
                          className="underline hover:text-gray-400 dark:hover:text-slate-400"
                        >
                          Subsplash
                        </a>
                        , where I help design a SaaS platform for churches,
                        ministries, and non‑profits.
                      </p>
                    </div>
                  <SocialLinks />
                  </div>
                </div>

                {/* Container for blobs + image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="relative order-first mt-6 width-full md:mt-0 mb-6 md:mb-0 mr-14"
                >
                  {/* 1) Background blob with gradient */}
                  <span className="absolute md:-top-0 -right-8 h-auto w-72 -z-10">
                    <svg
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 76.7850978 81.6760039"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          x1="4.93651266e-14%"
                          y1="100%"
                          x2="100%"
                          y2="0%"
                          id="linearGradient-5p8i0s5bj8-1"
                        >
                          <stop stopColor="#F87537" offset="0%"></stop>
                          <stop stopColor="#FBA81F" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <g
                        id="Workflow-activity-on-Profile"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Workflows-Frame-in-Profile---idea-for-just-the-workflow-Card"
                          transform="translate(-420, -543)"
                          fill="url(#linearGradient-5p8i0s5bj8-1)"
                          fillRule="nonzero"
                        >
                          <g id="Group" transform="translate(420, 543)">
                            <path
                              d="M64.9850039,11.4025664 C69.8850039,18.8025664 70.0850039,28.4025664 72.2850039,38.1025664 C74.5850039,47.8025664 78.7850039,57.6025664 75.6850039,63.4025664 C72.5850039,69.2025664 62.1850039,71.0025664 52.5850039,74.4025664 C42.8850039,77.9025664 33.8850039,82.9025664 25.9850039,81.4025664 C18.0850039,80.0025664 11.2850039,72.2025664 6.38500389,63.4025664 C1.48500389,54.6025664 -1.61499611,44.9025664 0.885003892,37.0025664 C3.28500389,29.1025664 11.1850039,23.0025664 18.7850039,16.1025664 C26.3850039,9.20256644 33.7850039,1.50256644 42.1850039,0.202566444 C50.5850039,-1.09743356 60.0850039,4.00256644 64.9850039,11.4025664 Z"
                              id="Path"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>

                  {/* 2) Front blob mask on the Next/Image */}
                  <Image
                    src="/images/eric-allen-profile-pic-2023.png"
                    alt="Eric Allen Profile Picture"
                    width={300}
                    height={300}
                    className="shadow-xl w-72 h-auto dark:neon"
                    style={{ clipPath: "url(#blobClip)" }}
                    priority
                  />
                </motion.div>
              </div>
            </div>
            {/* Latest posts */}
          <div className="flex flex-row items-baseline justify-between">
            <HighlightedHeading
              highlightColor="cyan"
              highlightStyle="underline"
              skewAngle="medium"
              as="h3"
              className="mt-12"
              href="/blog"
            >
              Posts
            </HighlightedHeading>
            <Link
              href="/blog"
              className="text-sm underline hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              View all
            </Link>
          </div>
          <motion.section className="mt-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <BlogContentServer maxPosts={4} showTitle={false} showTagFilter={false} layout="row" columns={1} />
            </motion.div>
          </motion.section>
            <section className="mt-4">
              {/* Portfolio */}
              <div className="flex flex-row items-baseline justify-between pt-6 mb-6 lg:pt-12">
                <HighlightedHeading
                  highlightColor="yellow"
                  highlightStyle="underline"
                  skewAngle="medium"
                  as="h3"
                  href="/portfolio"
                >
                  Portfolio
                </HighlightedHeading>
                <Link
                  href="/portfolio"
                  className="text-sm underline hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                >
                  View all
                </Link>
              </div>
              <BentoGrid maxItems={4} />
            </section>
          </div>
          {/* Experience and Skills Container - side by side on large screens */}
          <div className="flex flex-col lg:flex-row lg:gap-6 mt-12">
            {/* Experience */}
            <motion.section className="w-full lg:w-1/2 lg:mr-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <HighlightedHeading
                  highlightColor="yellow"
                  highlightStyle="underline"
                  skewAngle="heavy"
                  as="h3"
                  className="mb-6"
                  href="/experience"
                >
                  CV/Experience
                </HighlightedHeading>
                <WorkExperience />
              </motion.div>
            </motion.section>
            
            {/* Skills */}
            <Skills />
          </div>
          
          
          {/* Projects */}
          <HighlightedHeading
            highlightColor="green"
            highlightStyle="underline"
            skewAngle="light"
            as="h3"
            className="mt-12 mb-6"
            href="/projects"
          >
            Projects
          </HighlightedHeading>
          <motion.section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <ProjectGrid items={personalProjects} columns={3} />
            </motion.div>
          </motion.section>
          {/* My stack */}
          <HighlightedHeading
            highlightColor="cyan"
            highlightStyle="underline"
            skewAngle="heavy"
            as="h3"
            className="mt-12"
            href="/my-stack"
          >
            My stack
          </HighlightedHeading>
          <motion.section className="mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Add my tech stack here */}
            </motion.div>
          </motion.section>
          {/* FAQ */}
          <HighlightedHeading
            highlightColor="pink"
            highlightStyle="underline"
            skewAngle="medium"
            as="h3"
            className="mt-12"
          >
            FAQ
          </HighlightedHeading>
          <motion.section className="mt-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Add FAQ content here */}
              <Faq />
            </motion.div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
