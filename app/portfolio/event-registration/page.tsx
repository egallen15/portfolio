import Breadcrumb from '@/app/components/Breadcrumb'
import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'
import { CalendarIcon, UsersIcon, CheckCircleIcon } from '@heroicons/react/20/solid'

const eventRegistrationData: CaseStudyProps = {
  subtitle: "Product Development",
  title: "Subsplash Event Registration System",
  description: "A comprehensive event registration platform that streamlines the entire process from sign-up to check-in, built with React and modern web technologies.",
  
  image: {
    src: "https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png",
    alt: "Subsplash Event Registration Interface",
    width: 912,
    height: 684
  },
  
  features: [
    {
      icon: CalendarIcon,
      title: "Event Management",
      description: "Comprehensive event creation and management tools that allow organizers to set up complex registration forms with custom fields and validation."
    },
    {
      icon: UsersIcon,
      title: "Attendee Experience",
      description: "Streamlined registration process with real-time availability checking, group registrations, and automated confirmation emails."
    },
    {
      icon: CheckCircleIcon,
      title: "Analytics & Reporting",
      description: "Detailed registration analytics, attendee tracking, and customizable reports to help organizers make data-driven decisions."
    }
  ],
  
  content: {
    mainContent: "The Subsplash Event Registration system was designed to solve the complex challenges of managing large-scale events. From handling thousands of concurrent registrations to providing seamless check-in experiences, this platform has processed over 100,000 registrations across various event types.",
    secondaryTitle: "Technical Implementation",
    secondaryContent: "Built using React with TypeScript for type safety, integrated with a robust backend API for real-time data synchronization, and implemented advanced caching strategies to handle high-traffic registration periods without performance degradation."
  }
}

export default function EventRegistrationCaseStudy() {
  return (
    <main className="flex flex-col mx-6 xl:mx-auto w-auto lg:max-w-7xl">
        <Breadcrumb pages={[
          { name: "Portfolio", href: "/portfolio", current: false },
          { name: "Event Registration", href: "/event-registration", current: true }
        ]} />
      <CaseStudy {...eventRegistrationData} />
    </main>
  )
}
