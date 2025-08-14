import Breadcrumb from '@/app/components/Breadcrumb'
import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'
import { UserPlusIcon, ShieldCheckIcon, ChartBarIcon } from '@heroicons/react/20/solid'

const signupData: CaseStudyProps = {
  subtitle: "User Experience",
  title: "Subsplash User Registration Platform",
  description: "A comprehensive user onboarding and registration system that simplifies account creation while maintaining security and compliance standards across multiple platforms.",
  
  image: {
    src: "/images/subsplash.png",
    alt: "Subsplash Registration Interface",
    width: 800,
    height: 600
  },
  
  features: [
    {
      icon: UserPlusIcon,
      title: "Streamlined Onboarding",
      description: "Multi-step registration process with progressive disclosure, social login options, and smart field validation to minimize user friction."
    },
    {
      icon: ShieldCheckIcon,
      title: "Security & Compliance",
      description: "Enterprise-grade security with GDPR compliance, email verification, password strength validation, and fraud detection mechanisms."
    },
    {
      icon: ChartBarIcon,
      title: "Registration Analytics",
      description: "Comprehensive funnel analysis, conversion tracking, and A/B testing capabilities to optimize registration completion rates."
    }
  ],
  
  content: {
    mainContent: "The registration platform handles over 10,000 new user signups monthly with a 94% completion rate. The system's intelligent validation and progressive onboarding approach significantly reduced user drop-off during registration.",
    secondaryTitle: "Performance Impact",
    secondaryContent: "Implementation of smart validation and social login options increased registration completion rates by 40% while reducing support tickets related to account creation by 65%. The system now supports multiple authentication providers and maintains 99.9% uptime."
  }
}

export default function SignupCaseStudy() {
  return (
    <main>
      <Breadcrumb pages={[
        { name: "Portfolio", href: "/portfolio", current: false },
        { name: "Signup", href: "/signup", current: true }
      ]} />
      <CaseStudy {...signupData} />
    </main>
  )
}
