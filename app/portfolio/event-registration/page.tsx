import Breadcrumb from "@/app/components/Breadcrumb";
import CaseStudy, { CaseStudyProps } from "../../components/CaseStudy";
import { portfolioMetadata } from "../portfolioData";

const eventRegistrationData: CaseStudyProps = {
  ...portfolioMetadata.eventRegistration,

  metadata: {
    role: "Senior UX Designer & Interim PM",
    teamSize: "5 Engineers • 1 Scrum Master • 1 PM • 1 UX (me)",
    dateRange: "March 2021 – Present",
    tools: ["Sketch", "Zeplin", "Procreate"],
  },

  images: [
    {
      src: "/images/Payment Forms 2.0 Walkthrough Image.png",
      alt: "Payment Forms Walkthrough",
      width: 1200,
      height: 675,
    },
    {
      src: "/images/payment-forms-v3.png",
      alt: "Payment Forms Interface",
      width: 1200,
      height: 675,
    },
  ],

  sections: {
    tools: {
      title: "Design",
      content:
        "Using prototypes, user flows, and high-fidelity mockups, I designed a simple event registration experience that delighted our customers and exceeded business goals in multiple areas.",
      features: [
        {
          icon: "procreate",
          title: "Procreate",
          description:
            "Created initial sketches and wireframes to explore design ideas.",
        },
        {
          icon: "sketch",
          title: "Sketch",
          description:
            "Designed high-fidelity mockups and interactive prototypes.",
        },
        {
          icon: "zeplin",
          title: "Zeplin",
          description:
            "Handed off detailed design specs and assets to the engineering team.",
        },
      ],
    },

    problemStatement: {
      title: "Problem",
      content:
      "Church leaders typically rely on free tools like Google Forms and Eventbrite for event registration, but these solutions don't integrate with their Subsplash people database, payment systems, or bookkeeping tools. \n\n We set out to give our customers a new Subsplash-native registration product to build out a new revenue stream and drive Subsplash Event adoption.",
    },

    researchAndFeedback: {
      title: "Research",
      content:
        "I ran user interviews with church event organizers, analyzed competitor platforms, and gathered feedback from our support and customer success teams to identify key requirements. \n\nWe identified pain points in competing products like: \n\n  - complex administrative setup \n\n  - lack of customization options for questions, tickets, and payments \n\n  - ugly, outdated mobile UX",
    },

    solution: {
      title: "Solution",
      content:
        "We built an MVP of event registration that began with basic support for free event registration. After our first release, we continually iterated to add more powerful features:",
      features: [
        {
          icon: "calendar",
          title: "Registration modes",
          description:
            "Added a 'simple headcount' mode, and an 'everyone registers' mode for varying levels of complexity based on the event.",
        },
        {
          icon: "credit-card",
          title: "Paid events",
          description:
            "Added a payment checkout flow to collect payments during event registration.",
        },
        {
          icon: "ticket",
          title: "Discounts & Ticket Types",
          description:
            "Added flexible pricing, discount codes, ticket types, and partial payments to give guests more ways to pay.",
        },
        {
          icon: "chart-bar",
          title: "Analytics & Communication",
          description:
            "Added admin tools for viewing and managing event data, seeing who's paid, and who still owes.",
        },
      ],
    },

    impactAndResults: {
      title: "Impact & Results",
      content:
        "From the new Event Registration product, Subsplash has been able to create a robust and consistent new revenue stream.",
      features: [
        {
          icon: "check-circle",
          title: "$100M+ processed in first 4 years",
          description:
            "Significant revenue growth from event registration fees.",
        },
        {
          icon: "check-circle",
          title: "35+ NPS score for Subsplash Events",
          description:
            "Users were extremely satisfied with the event registration system, leading to positive word-of-mouth and happy customers.",
        },
        {
          icon: "check-circle",
          title: "300% Growth in Event Volume",
          description:
            "Intuitive UX led to a boom in Events product adoption and usage.",
        },
      ],
    },
  },
};

export default function EventRegistrationCaseStudy() {
  return (
    <main className="flex flex-col mx-6 xl:mx-auto w-full lg:max-w-7xl">
      <Breadcrumb
        pages={[
          { name: "Portfolio", href: "/portfolio", current: false },
          {
            name: "Event Registration",
            href: "/event-registration",
            current: true,
          },
        ]}
      />
      <CaseStudy {...eventRegistrationData} />
    </main>
  );
}
