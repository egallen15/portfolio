import Breadcrumb from '@/app/components/Breadcrumb'
import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'

const eventRegistrationData: CaseStudyProps = {
  subtitle: "Subsplash",
  title: "Event Registration",
  description: "I designed an event registration system for Subsplash with support for payments, balances, customizable forms, ticket types, and more.",
  
  metadata: {
    role: "Senior UX Designer & Interim PM",
    teamSize: "5 Engineers • 1 Scrum Master • 1 PM • 1 UX (me)",
    dateRange: "March 2021 – Present",
    tools: ["Sketch", "Zeplin", "Procreate"]
  },
  
  images: [
    {
      src: "/images/Check-in frame.png",
      alt: "Event Check-in Interface",
      width: 800,
      height: 600
    },
    {
      src: "/images/Payment Forms 2.0 Walkthrough Image.png",
      alt: "Payment Forms Walkthrough",
      width: 800,
      height: 600
    },
    {
      src: "/images/payment-forms.png",
      alt: "Payment Forms Interface",
      width: 800,
      height: 600
    },
    {
      src: "/images/subsplash.png",
      alt: "Subsplash Platform Overview",
      width: 800,
      height: 600
    }
  ],
  
  sections: {
    tools: {
      title: "Design tools",
      content: "Using wireframes, prototypes, and user flows, I created a simple event registration experience that met both user needs and business goals.",
      features: [
        {
          icon: "chart-bar",
          title: "Sketch",
          description: "Frontend built with React and TypeScript for type safety and component reusability, ensuring maintainable and scalable code."
        },
        {
          icon: "chart-bar",
          title: "Zeplin",
          description: "Robust REST API integration for real-time data synchronization and secure payment processing."
        },
        {
          icon: "chart-bar",
          title: "Procreate",
          description: "Implemented caching strategies to handle high-traffic registration periods without performance degradation."
        }
      ]
    },
    
    problemStatement: {
      title: "Problem",
      content: "Church event organizers need a simple way to gather payments and details about who is coming to their event. \n\n The problem is that the free tools they use to manage events are often disconnected from their data and systems, handle payments differently than their other tools, and can be difficult to use. \n\n This can make setting up an event registration intimidating and time-consuming for organizers, leading them to fall back to manual processes that are error-prone and inefficient."
    },
    
    researchAndFeedback: {
      title: "Research",
      content: "To build a new event registration system the right way, we needed to understand the list of needs and pain points from these church event organizers. \n\n To learn these pain points, I ran user interviews with church event organizers, analyzed competitor platforms, and gathered feedback from our customer success team to identify key requirements. \n\nWe identified several pain points with existing solutions, including complex setup processes, lack of customization options, and poor mobile experiences.",
    },
    
    solution: {
      title: "Solution",
      content: "The solution featured a user-friendly interface for both organizers and attendees, with comprehensive event management capabilities and advanced analytics tools.",
      features: [
        {
          icon: "calendar",
          title: "Free & Paid Events",
          description: "Comprehensive event creation and management tools that allow organizers to set up complex registration forms with custom fields and validation."
        },
        {
          icon: "users",
          title: "Custom Registration Forms",
          description: "Streamlined registration process with real-time availability checking, group registrations, and automated confirmation emails."
        },
        {
          icon: "check-circle",
          title: "Discount Codes & Ticket Types",
          description: "Flexible pricing options with discount codes, multiple ticket types, and partial payment capabilities for better accessibility."
        },
        {
          icon: "chart-bar",
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
          icon: "chart-bar",
          title: "40% Increase in Registration Completion",
          description: "Streamlined registration flow and mobile optimization reduced abandonment rates from 78% to 38%, significantly improving conversion."
        },
        {
          icon: "users",
          title: "60% Reduction in Support Tickets",
          description: "Intuitive interface and automated features reduced event-related support requests, freeing up customer success team resources."
        },
        {
          icon: "check-circle",
          title: "25% Faster Event Setup",
          description: "Simplified event creation process and reusable templates enabled organizers to set up events 25% faster than previous system."
        },
        {
          icon: "calendar",
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
