// Central portfolio project metadata
// Single source of truth for portfolio project basic info
// Used by both navigation and case study pages

export interface PortfolioProjectMeta {
  slug: string;
  title: string;
  route: string;
  description: string;
  subtitle: string;
  order: number;
}

// Base metadata shared between navigation and case studies
export const portfolioMetadata = {
  eventRegistration: {
    subtitle: "Subsplash",
    title: "Event Registration",
    description: "I designed an event registration system with support for payments, balances, customizable forms, ticket types, and more.",
    slug: "event-registration",
  },
  checkIn: {
    subtitle: "Event Technology",
    title: "Subsplash Event Check-In",
    description: "A streamlined mobile-first check-in solution that enables fast, contactless event entry with real-time attendance tracking and seamless integration with event management systems.",
    slug: "check-in",
  },
  signup: {
    subtitle: "Subsplash",
    title: "Signup & onboarding",
    description: "I designed the first time experience for every customer that signs up for Subsplash.",
    slug: "signup",
  },
  workflows: {
    subtitle: "Subsplash",
    title: "Workflows",
    description: "An intuitive workflow automation system that empowers teams to build custom business processes without code, increasing efficiency and reducing manual tasks.",
    slug: "workflows",
  },
  subsplashSignup: {
    subtitle: "Subsplash",
    title: "Subsplash Signup and Onboarding",
    description: "A redesigned first-time experience for new customers signing up for Subsplash.",
    slug: "subsplash-signup",
  }
} as const;

// Portfolio projects for navigation (ordered list)
export const portfolioProjects: PortfolioProjectMeta[] = [
  {
    ...portfolioMetadata.eventRegistration,
    route: '/portfolio/event-registration',
    order: 1
  },
  {
    ...portfolioMetadata.checkIn,
    route: '/portfolio/check-in',
    order: 2
  },
  {
    ...portfolioMetadata.signup,
    route: '/portfolio/signup',
    order: 3
  },
  {
    ...portfolioMetadata.workflows,
    route: '/portfolio/workflows',
    order: 4
  },
  {
    ...portfolioMetadata.subsplashSignup,
    route: '/portfolio/subsplash-signup',
    order: 5
  }
];
