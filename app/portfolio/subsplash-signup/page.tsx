import Breadcrumb from '@/app/components/Breadcrumb'
import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'
import { portfolioMetadata } from '../portfolioData'

const subsplashSignupData: CaseStudyProps = {
  ...portfolioMetadata.subsplashSignup,
  
  image: {
    src: "https://placehold.co/1200x675?text=Subsplash+Signup",
    alt: "Subsplash Signup and Onboarding Interface",
    width: 1200,
    height: 675
  },
  
  sections: {
    tools: {
      title: 'Design Tools & Approach',
      content:
        "I used Sketch for design and Zeplin for developer handoff, prioritizing a modular component system that could scale with product expansion. The design emphasized progressive disclosure to reduce cognitive load while maintaining brand simplicity.",
      features: [
        {
          icon: 'check-circle',
          title: 'Sketch Design System',
          description: 'Built reusable components for infinite product combinations',
        },
        {
          icon: 'user-plus',
          title: 'Progressive Disclosure',
          description: 'Five-section flow revealing details only when needed',
        },
        {
          icon: 'chart-bar',
          title: 'White Space Strategy',
          description: 'Clean layouts emphasizing simplicity and brand clarity',
        },
      ],
    },
    
    problemStatement: {
      title: 'Problem',
      content:
        "Subsplash had a legacy signup experience disconnected from backend systems and misaligned with brand guidelines. The rigid structure could not accommodate growing combinations of packages, tiers, and add-ons. Sales teams and new customers faced a confusing first impression that contradicted the product's core strength: simple, beautiful UI.",
    },
    
    researchAndFeedback: {
      title: 'Research & User Feedback',
      content:
        'I validated requirements through iterative collaboration with internal teams, including sales, engineering, and stakeholders. Multiple test rounds surfaced edge cases across AWS, Salesforce, ERP, and billing integrations. Sales teams rigorously tested the system before launch since signup directly impacted their revenue.',
    },
    
    solution: {
      title: 'Solution',
      content:
        'I designed a five-section signup flow with progressive disclosure: package details, pre-populated information, payment options, review with transparent pricing breakdown, and a delightful success screen with onboarding animation. Expanding rows and modals revealed feature details without overwhelming users.',
      features: [
        {
          icon: 'check-circle',
          title: 'Modular Layout System',
          description: 'Reusable sections adapting to any package or add-on configuration',
        },
        {
          icon: 'check-circle',
          title: 'Transparent Pricing',
          description: 'Clear breakdown of costs, discounts, taxes, and payment schedules',
        },
        {
          icon: 'user-plus',
          title: 'Delightful Onboarding',
          description: 'Animated success screen building excitement during setup',
        },
      ],
    },
    
    impactAndResults: {
      title: 'Impact & Results',
      content:
        "The redesign eliminated sales team complaints and earned stakeholder praise for its modular flexibility. The system successfully handled custom quotes, multiple currencies, tax rates, and exclusive agreements while maintaining brand simplicity. It became a scalable foundation that grew with Subsplash's evolving product family.",
      features: [
        {
          icon: 'users',
          title: 'Sales Team Satisfaction',
          description: 'Zero complaints after launch; confident quote presentation',
        },
        {
          icon: 'check-circle',
          title: 'Infinite Scalability',
          description: 'Battle-tested system supporting any product combination',
        },
        {
          icon: 'check-circle',
          title: 'Stakeholder Approval',
          description: 'Leadership praised elegant handling of complex requirements',
        },
      ],
    }
  }
}

export default function SubsplashSignupPage() {
  return (
    <main className="flex flex-col mx-6 xl:mx-auto w-full lg:max-w-7xl">
      <Breadcrumb pages={[
        { name: "Portfolio", href: "/portfolio", current: false },
        { name: "Subsplash Signup", href: "/subsplash-signup", current: true }
      ]} />
      <CaseStudy {...subsplashSignupData} />
    </main>
  )
}
