import Link from "next/link";
import Image from "next/image";
import CaseStudyListItem from "./components/CaseStudyListItem";
import SocialLinks from './components/SocialLinks'

export const metadata = {
  title: "Eric Allen | UX Designer",
  description: "Austin-based UX Designer. Occasionally writes stuff.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col mx-auto w-full lg:max-w-7xl">
      <div className="w-full flex-grow">
        <div className="sm:flex sm:items-center sm:justify-between"></div>
        <main className="mx-6">
          <div className="flex flex-col">
          <div className="mb-6 flex flex-col md:flex-row items-start md:items-center">
            <div className="flex-1">
              <h1 className="text-3xl backdrop-blur-lg md:text-5xl max-w-fit font-bold">
                Hi! I&#39;m <Link href="/about" className="hover:neon">Eric</Link> 👋
              </h1>
              <p className="text-md max-w-3xl backdrop-blur-lg pt-6 mb-6 md:pt-8">
                I&#39;m a senior UX designer based in <strong>Austin, Texas</strong>. For the past <span>7 years</span>, I&#39;ve worked at <a href="https://subsplash.com" className="underline hover:text-gray-400 dark:hover:text-slate-400">Subsplash</a>, where I help design a SaaS platform for churches, ministries, and non-profits.
              </p>
              <SocialLinks/>
            </div>
            <Image
              src="/images/eric-allen-profile-pic-2023.png"
              alt="Eric Allen Profile Picture"
              width={200}
              height={200}
              className="rounded-full order-first md:order-none mt-6 md:mt-0 mb-6 md:mb-0 md:ml-6"
            />
          </div>
          
          </div>
          <h3 className="text-2xl font-bold pt-16">Case Studies</h3>
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
        </main>
      </div>
    </div>
  );
}
