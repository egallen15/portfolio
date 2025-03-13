import CaseStudyListItem from "./components/CaseStudyListItem";

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
          <div className="mb-6">
            <h1 className="text-5xl max-w-fit font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Hi! I&#39;m Eric</h1>
            <p className="text-md max-w-3xl pt-6 md:pt-8">
              I&#39;m a senior UX designer based in <strong>Austin, Texas</strong>. For the past <span>7 years</span>, I&#39;ve worked at <a href="https://subsplash.com" className="underline hover:text-gray-400">Subsplash</a>, where I help design a SaaS platform for churches, ministries, and non-profits.
            </p>
          </div>
          <div className="flex gap-4 mb-8">
            <a href="https://instagram.com" className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://x.com" className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://dribbble.com" className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://github.com" className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          {/* Image gallery
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative h-48">
              <Image
                src="https://placehold.co/600x400"
                alt="A plane cockpit"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="relative h-48">
              <Image
                src="https://placehold.co/600x400"
                alt="A large auditorium"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="relative h-48">
              <Image
                src="https://placehold.co/600x400"
                alt="Desk with 'Do More' sign"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="relative h-48">
              <Image
                src="https://placehold.co/600x400"
                alt="Clouds in the sky"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="relative h-48">
              <Image
                src="https://placehold.co/600x400"
                alt="Mountains"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </section> */}
                <section className="mt-10">
                <CaseStudyListItem
                title="Subsplash Check-in"
                description="A brief description of the case study."
                imageSrc="https://placehold.co/600x400"
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
