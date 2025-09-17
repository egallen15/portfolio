import Breadcrumb from '@/app/components/Breadcrumb'
import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'
import { CalendarIcon, UsersIcon, CheckCircleIcon, ChartBarIcon } from '@heroicons/react/20/solid'

const eventRegistrationData: CaseStudyProps = {
  subtitle: "Subsplash",
  title: "Event Registration",
  description: "I led the design of an event registration system designed to handle complex event management needs, from ticketing to attendee tracking.",
  
  image: {
    src: "https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png",
    alt: "Subsplash Event Registration Interface",
    width: 912,
    height: 684
  },
  
  sections: {
    tools: {
      title: "Design tools",
      content: "Built using modern web technologies to ensure scalability, performance, and maintainability across the entire event management workflow.",
      features: [
        {
          icon: ChartBarIcon,
          title: "React & TypeScript",
          description: "Frontend built with React and TypeScript for type safety and component reusability, ensuring maintainable and scalable code."
        },
        {
          icon: ChartBarIcon,
          title: "Backend API Integration",
          description: "Robust REST API integration for real-time data synchronization and secure payment processing."
        },
        {
          icon: ChartBarIcon,
          title: "Advanced Caching",
          description: "Implemented caching strategies to handle high-traffic registration periods without performance degradation."
        }
      ]
    },
    
    problemStatement: {
      title: "Problem",
      content: "Churches and organizations needed a robust event registration system that could handle both free and paid events, manage complex registration forms, and provide detailed analytics on attendee behavior. \n\n Organizations struggled with fragmented tools that didn't integrate well, making event management cumbersome and data insights difficult to obtain."
    },
    
    researchAndFeedback: {
      title: "Research",
      content: "Through user interviews with church administrators and event organizers, we identified key pain points: 78% of users abandoned registration forms that were too long or complex, 65% needed better integration with existing church management systems, and 82% wanted real-time analytics to track registration progress.\n\nUser testing revealed that organizers needed more granular control over registration settings while maintaining simplicity for attendees. Feedback consistently emphasized the need for mobile-optimized registration flows and automated communication features."
    },
    
    solution: {
      title: "Solution",
      content: "The solution featured a user-friendly interface for both organizers and attendees, with comprehensive event management capabilities and advanced analytics tools.",
      features: [
        {
          icon: CalendarIcon,
          title: "Free & Paid Events",
          description: "Comprehensive event creation and management tools that allow organizers to set up complex registration forms with custom fields and validation."
        },
        {
          icon: UsersIcon,
          title: "Custom Registration Forms",
          description: "Streamlined registration process with real-time availability checking, group registrations, and automated confirmation emails."
        },
        {
          icon: CheckCircleIcon,
          title: "Discount Codes & Ticket Types",
          description: "Flexible pricing options with discount codes, multiple ticket types, and partial payment capabilities for better accessibility."
        },
        {
          icon: ChartBarIcon,
          title: "Analytics & Communication",
          description: "Detailed registration analytics, attendee tracking, automated email campaigns, and customizable reports for data-driven decisions."
        }
      ]
    },

    impactAndResults: {
      title: "Impact & Results",
      content: "The new event registration system significantly improved the event management experience for both organizers and attendees, resulting in measurable business outcomes and enhanced user satisfaction.",
      features: [
        {
          icon: ChartBarIcon,
          title: "40% Increase in Registration Completion",
          description: "Streamlined registration flow and mobile optimization reduced abandonment rates from 78% to 38%, significantly improving conversion."
        },
        {
          icon: UsersIcon,
          title: "60% Reduction in Support Tickets",
          description: "Intuitive interface and automated features reduced event-related support requests, freeing up customer success team resources."
        },
        {
          icon: CheckCircleIcon,
          title: "25% Faster Event Setup",
          description: "Simplified event creation process and reusable templates enabled organizers to set up events 25% faster than previous system."
        },
        {
          icon: CalendarIcon,
          title: "300% Growth in Event Volume",
          description: "Improved scalability and performance allowed the platform to handle 3x more concurrent events without performance degradation."
        }
      ]
    }

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
