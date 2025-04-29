import Link from "next/link";
import Image from "next/image";
import CaseStudyListItem from "./components/CaseStudyListItem";
import SocialLinks from "./components/SocialLinks";

export const metadata = {
  title: "Eric Allen | UX Designer",
  description: "Austin-based UX Designer. Occasionally writes stuff.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col mx-auto w-full lg:max-w-7xl">
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
            <div className="mb-6 flex flex-col md:flex-row items-start md:items-center">
              <div className="flex-1">
                <h1 className="text-3xl pr-4 pt-6 rounded-lg md:text-5xl max-w-fit font-bold">
                  Hi! I&#39;m{" "}
                  <Link href="/about" className="hover:neon">
                    Eric
                  </Link>{" "}
                  👋
                </h1>
                <p className="text-md max-w-3xl backdrop-blur-lg rounded-lg pt-6 mb-6 md:pt-8">
                  I&#39;m a senior UX designer based in{" "}
                  <strong>Austin, Texas</strong>. For the past{" "}
                  <span>7 years</span>, I&#39;ve worked at{" "}
                  <a
                    href="https://subsplash.com"
                    className="underline hover:text-gray-400 dark:hover:text-slate-400"
                  >
                    Subsplash
                  </a>
                  , where I help design a SaaS platform for churches,
                  ministries, and non‑profits.
                </p>
                <SocialLinks />
              </div>

              {/* Container for blobs + image */}
              <div className="relative order-first md:order-none mt-6 md:mt-0 mb-6 md:mb-0 md:ml-6">
                {/* 1) Background blob with gradient */}
                <span className="absolute md:-top-0 -right-8 md:right-4 lg:right-2 h-auto w-44 md:w-72 lg:w-[320px] -z-10">
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
                  className="shadow-xl w-44 md:w-64 lg:w-72 h-auto"
                  style={{ clipPath: "url(#blobClip)" }}
                  priority
                />
              </div>
            </div>
          </div>
          <h3 className="uppercase tracking-wider text-slate-500 font-semibold pt-8">Latest posts</h3>
          <section className="mt-4">
            {/* Add latest posts here */}
          </section>
          <h3 className="uppercase tracking-wider text-slate-500 font-semibold pt-8">Case Studies</h3>
          <section className="mt-4">
            <CaseStudyListItem
              title="Subsplash Check-in"
              description="A brief description of the case study."
              imageSrc="/images/Check-in frame.png"
              imageAlt="Case Study 1 Image"
              metric1Value="90%"
              metric1Label="Satisfaction"
              metric2Value="2x"
              metric2Label="Conversion"
              linkHref="/case-study-1"
              className="opacity-0 animate-fadeInRight"
            />
            <CaseStudyListItem
              title="Subsplash Event Registration"
              description="Another interesting case study with great results."
              imageSrc="https://placehold.co/600x400"
              imageAlt="Case Study 2 Image"
              metric1Value="40%"
              metric1Label="Efficiency"
              metric2Value="30%"
              metric2Label="Cost Reduction"
              linkHref="/case-study-2"
              className="opacity-0 animate-fadeInRight"
            />
            <CaseStudyListItem
              title="Subsplash Import"
              description="A case study focusing on user engagement."
              imageSrc="https://placehold.co/600x400"
              imageAlt="Case Study 3 Image"
              metric1Value="150k"
              metric1Label="Active Users"
              metric2Value="4.5"
              metric2Label="Avg. Session Time"
              linkHref="/case-study-3"
              className="opacity-0 animate-fadeInRight"
            />
          </section>
          <h3 className="uppercase tracking-wider text-slate-500 font-semibold pt-8">Testimonials</h3>
          <section className="mt-4">
            {/* Add testimonials here */}
          </section>
          <h3 className="uppercase tracking-wider text-slate-500 font-semibold pt-8">Experience</h3>
          <section className="mt-4">
            {/* Add experience here */}
          </section>
        </main>
      </div>
    </div>
  );
}
