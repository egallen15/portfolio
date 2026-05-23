import Breadcrumb from '@/app/components/Breadcrumb'
import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'
import PortfolioNavigationServer from '../../components/PortfolioNavigationServer'
import { portfolioMetadata } from '../portfolioData'

const subsplashSignupData: CaseStudyProps = {
  ...portfolioMetadata.subsplashSignup,

  metadata: {
    role: "Senior UX Designer",
    tools: ["Sketch", "Zeplin"],
  },
  
  image: {
    src: "https://placehold.co/1200x675?text=Subsplash+Signup",
    alt: "Subsplash Signup and Onboarding Interface",
    width: 1200,
    height: 675
  },
  
  sections: {
    tools: {
      title: 'Design',
      content:
        "Using Sketch, Zeplin, and cross-department collaboration, I designed a modular signup experience to handle complex product packages while still feeling simple for new customers.",
      features: [
        {
          icon: 'sketch',
          title: 'Sketch',
          description: 'Built reusable components for many package and add-on combinations.',
        },
        {
          icon: 'zeplin',
          title: 'Zeplin',
          description: 'Handed off detailed specs for a flow with many pricing and billing states.',
        },
        {
          icon: 'user-group',
          title: 'Internal testing',
          description: 'Validated edge cases with sales, engineering, and stakeholder teams.',
        },
      ],
    },
    
    problemStatement: {
      title: 'Problem',
      content:
        "Subsplash had a legacy signup experience that was disconnected from backend systems and no longer aligned with brand guidelines. The rigid structure could not support the growing number of packages, tiers, add-ons, discounts, and billing scenarios.\n\nSales teams and new customers were left with a confusing first impression that contradicted one of the product's core strengths: simple, beautiful UI.",
    },
    
    researchAndFeedback: {
      title: 'Research',
      content:
        'I validated requirements through iterative collaboration with sales, engineering, and stakeholder teams.\n\nMultiple test rounds surfaced edge cases across AWS, Salesforce, ERP, and billing integrations. Sales teams also rigorously tested the system before launch because signup directly affected quote presentation and revenue.\n\nThe biggest design challenge was making a highly flexible purchasing flow feel calm, understandable, and trustworthy.',
    },
    
    solution: {
      title: 'Solution',
      content:
        'I designed a five-section signup flow that used progressive disclosure to reveal only the information customers needed at each step:',
      features: [
        {
          icon: 'user-plus',
          title: 'Guided package setup',
          description: 'Created reusable sections for package details, pre-populated information, and add-ons.',
        },
        {
          icon: 'credit-card',
          title: 'Payment options',
          description: 'Designed flexible payment states for custom quotes, currencies, taxes, and billing schedules.',
        },
        {
          icon: 'chart-bar',
          title: 'Transparent review',
          description: 'Added clear breakdowns for costs, discounts, taxes, and payment timing before submission.',
        },
        {
          icon: 'check-circle',
          title: 'Delightful onboarding',
          description: 'Created a success screen and onboarding animation to make account setup feel exciting.',
        },
      ],
    },
    
    impactAndResults: {
      title: 'Impact & Results',
      content:
        "The redesign gave Subsplash a scalable signup foundation that could grow with the product family while keeping the customer experience clear and on-brand.",
      features: [
        {
          icon: 'users',
          title: 'Sales team satisfaction',
          description: 'Eliminated sales team complaints and gave teams more confidence presenting quotes.',
        },
        {
          icon: 'check-circle',
          title: 'Scalable product logic',
          description: 'Supported custom quotes, currencies, tax rates, agreements, and package combinations.',
        },
        {
          icon: 'check-circle',
          title: 'Stakeholder approval',
          description: 'Leadership praised the way the flow handled complex requirements without feeling heavy.',
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
      ]} actions={(
        <div className="hidden lg:block">
          <PortfolioNavigationServer currentSlug={portfolioMetadata.subsplashSignup.slug} variant="simple-inline" />
        </div>
      )} />
      <CaseStudy {...subsplashSignupData} />
    </main>
  )
}
