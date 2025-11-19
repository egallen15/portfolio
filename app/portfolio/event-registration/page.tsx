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
      width: 1200,
      height: 675
    },
    {
      src: "/images/Payment Forms 2.0 Walkthrough Image.png",
      alt: "Payment Forms Walkthrough",
      width: 1200,
      height: 675
    },
    {
      src: "/images/payment-forms-v3.png",
      alt: "Payment Forms Interface",
      width: 1200,
      height: 675
    },
    {
      src: "/images/subsplash.png",
      alt: "Subsplash Platform Overview",
      width: 1200,
      height: 675
    }
  ],
  
  sections: {
    tools: {
      title: "Design tools",
      content: "Using wireframes, prototypes, and user flows, I created a simple event registration experience that met all our business goals and delighted users.",
      features: [
        {
          icon: "check-circle",
          title: "Procreate",
          description: "Created initial sketches and concept art to explore design ideas and iterate on visual elements quickly."
        },
        {
          icon: "check-circle",
          title: "Sketch",
          description: "Designed high-fidelity mockups and interactive prototypes to visualize the user experience and gather feedback from stakeholders."
        },
        {
          icon: "user-plus",
          title: "Zeplin",
          description: "Handed off detailed design specifications and assets to the development team, ensuring accurate implementation of the designs."
        }
      ]
    },
    
    problemStatement: {
      title: "Problem",
      content: "Church leaders are scrappy, cost-conscious leaders who opt for the easiest and most affordable tools for their church. When exploring ways to run event registration, free tools like Google Forms and Eventbrite are very popular. These products are powerful and easy to adopt, and have great UX. \n\n However, after they start to get data in these tools and scale their processes, they run into issues with datat not being in the right spot for their team to reference. Google Forms and Eventbrite don't easily integrate with their people database, preferred payment systems, or bookkeeping tools. \n\n Before this project, Subsplash didn't offer event registration, so our customers had to adopt other tools to run event registration. Their event data ended up scattered across different products, and payments were hard to track down and tally up. We wanted to give our customers something better. \n\n "
    },
    
    researchAndFeedback: {
      title: "Research",
      content: "To build a new event registration system the right way, we needed to understand the list of needs and pain points from these church event organizers. \n\n To learn these pain points, I ran user interviews with church event organizers, analyzed competitor platforms, and gathered feedback from our customer success team to identify key requirements. \n\nWe identified several pain points with existing solutions, including complex setup processes, lack of customization options, and poor mobile experiences.",
    },
    
    solution: {
      title: "Solution",
      content: "We built an MVP of event registration that only supported free events at first, but iterated quickly and consistently to add features like:",
      features: [
        {
          icon: "calendar",
          title: "Registration types",
          description: "Simple headcount or everyone registers"
        },
        {
          icon: "users",
          title: "Free or paid events",
          description: "Add a payment form to collect payments during registration for paid events."
        },
        {
          icon: "check-circle",
          title: "Discount Codes & Ticket Types",
          description: "Flexible pricing options with discount codes, multiple ticket types, and partial payment capabilities to give attendees more ways to pay."
        },
        {
          icon: "check-circle",
          title: "Analytics & Communication",
          description: "Tools for viewing and managing event data, see who's paid, and who still owes."
        }
      ]
    },

    impactAndResults: {
      title: "Impact & Results",
      content: "From these events, Subsplash has been able to create a new consistent revenue stream.",
      features: [
        {
          icon: "check-circle",
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
