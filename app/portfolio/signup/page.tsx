import Breadcrumb from '@/app/components/Breadcrumb'
import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'
import { portfolioMetadata } from '../portfolioData'

const signupData: CaseStudyProps = {
  ...portfolioMetadata.signup,
  
  image: {
    src: "/images/subsplash.png",
    alt: "Subsplash Registration Interface",
    width: 800,
    height: 600
  },
  
  sections: {
    tools: {
      title: "Technology Stack",
      content: "Built using modern web technologies to ensure security, performance, and scalability for handling thousands of new user registrations daily.",
      features: [
        {
          icon: "user-plus",
          title: "React & Next.js",
          description: "Frontend framework providing server-side rendering and optimized performance for the registration flow."
        },
        {
          icon: "shield-check",
          title: "OAuth Integration",
          description: "Secure social login integration with Google, Facebook, and other providers for streamlined registration."
        },
        {
          icon: "chart-bar",
          title: "Analytics & Tracking",
          description: "Comprehensive funnel analysis and A/B testing infrastructure to optimize conversion rates."
        }
      ]
    },
    
    problemStatement: {
      title: "Problem",
      content: "Subsplash needed a streamlined registration process to reduce user friction and increase conversion rates. The existing signup flow had high abandonment rates and lacked proper validation mechanisms, resulting in incomplete registrations and frustrated users."
    },
    
    researchAndFeedback: {
      title: "Research & User Feedback",
      content: "Through user testing and analytics review, we identified key pain points in the registration flow including complex form fields, unclear validation messages, and lack of social login options. 60% of users abandoned the form due to complexity, and 35% experienced validation errors that weren't clearly explained."
    },
    
    solution: {
      title: "Solution",
      content: "We implemented a progressive disclosure approach with smart validation, social login integration, and clear error messaging to create a frictionless signup experience. The registration platform handles over 10,000 new user signups monthly with a 94% completion rate.",
      features: [
        {
          icon: "user-plus",
          title: "Streamlined Onboarding",
          description: "Multi-step registration process with progressive disclosure, social login options, and smart field validation to minimize user friction."
        },
        {
          icon: "shield-check",
          title: "Security & Compliance",
          description: "Enterprise-grade security with GDPR compliance, email verification, password strength validation, and fraud detection mechanisms."
        },
        {
          icon: "chart-bar",
          title: "Registration Analytics",
          description: "Comprehensive funnel analysis, conversion tracking, and A/B testing capabilities to optimize registration completion rates."
        }
      ]
    },
    
    impactAndResults: {
      title: "Impact & Results",
      content: "Implementation of smart validation and social login options increased registration completion rates by 40% while reducing support tickets related to account creation by 65%. The system now supports multiple authentication providers and maintains 99.9% uptime.",
      features: [
        {
          icon: "user-plus",
          title: "94% Completion Rate",
          description: "Achieved industry-leading registration completion rates through optimized user experience."
        },
        {
          icon: "shield-check",
          title: "40% Conversion Increase",
          description: "Significant improvement in user conversion from signup initiation to completion."
        },
        {
          icon: "chart-bar",
          title: "65% Fewer Support Tickets",
          description: "Dramatic reduction in account creation related support requests through better UX."
        }
      ]
    }
  }
}

export default function SignupCaseStudy() {
  return (
    <main className="flex flex-col mx-6 xl:mx-auto w-full lg:max-w-7xl">
      <Breadcrumb pages={[
        { name: "Portfolio", href: "/portfolio", current: false },
        { name: "Signup", href: "/signup", current: true }
      ]} />
      <CaseStudy {...signupData} />
    </main>
  )
}
