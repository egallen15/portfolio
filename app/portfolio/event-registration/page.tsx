import Breadcrumb from '@/app/components/Breadcrumb'
import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'

const eventRegistrationData: CaseStudyProps = {
  subtitle: "Subsplash",
  title: "Event Registration",
  description: "I designed an event registration system with support for payments, balances, customizable forms, ticket types, and more.",
  
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
      content: "Church leaders and admins tend to use freemium event products to set up registrations for their events. Free tools like Eventbrite and Google Forms are powerful and easy to adopt, but unfortunately don't integrate well with their people data, preferred payment systems, and bookkeeping tools. \n\n Since Subsplash didn't offer event registration, our customers were basically forced to adopt these tools to run event registration through the Subsplash mobile app. The registration data ended up in different dashboards, and payments were hard to track down and tally up. Less than ideal. \n\n The challenges of juggling multiple tools also made setting up an event registration and intimidating and complicated challenge for newer church employees, requiring training in multiple tools. \n\n This ultimately incentivizes them to fall back to familiar but manual processes that are error-prone and inefficient."
    },
    
    researchAndFeedback: {
      title: "Research",
      content: "To build a new event registration system the right way, we needed to understand the list of needs and pain points from these church event organizers. \n\n To learn these pain points, I ran user interviews with church event organizers, analyzed competitor platforms, and gathered feedback from our customer success team to identify key requirements. \n\nWe identified several pain points with existing solutions, including complex setup processes, lack of customization options, and poor mobile experiences.",
    },
    
    solution: {
      title: "Solution",
      content: "We built an MVP of event registration that first only allowed for only free events, and iterated consistently over time to add features like:",
      features: [
        {
          icon: "calendar",
          title: "Registration types",
          description: "Simple headcount or everyone registers"
        },
        {
          icon: "users",
          title: "Free or paid events",
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
      content: "From these events, Subsplash has been able to create a new consistent revenue stream.",
      features: [
        {
          icon: "chart-bar",
          title: "40M processed in the first 3 years",
          description: "Significant revenue growth from event registration fees, contributing to overall company profitability and sustainability."
        },
        {
          icon: "users",
          title: "10,000+ events with registrations",
          description: "Intuitive interface and automated features reduced event-related support requests, freeing up customer success team resources."
        },
        {
          icon: "check-circle",
          title: "35+ NPS score",
          description: "Users were highly satisfied with the event registration system, leading to increased customer retention and positive word-of-mouth referrals."
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
    <main className="flex flex-col mx-6 xl:mx-auto w-full lg:max-w-7xl">
        <Breadcrumb pages={[
          { name: "Portfolio", href: "/portfolio", current: false },
          { name: "Event Registration", href: "/event-registration", current: true }
        ]} />
      <CaseStudy {...eventRegistrationData} />
    </main>
  )
}
