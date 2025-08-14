import Breadcrumb from '@/app/components/Breadcrumb'
import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'
import { QrCodeIcon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/20/solid'

const checkInData: CaseStudyProps = {
  subtitle: "Event Technology",
  title: "Subsplash Event Check-In System",
  description: "A streamlined mobile-first check-in solution that enables fast, contactless event entry with real-time attendance tracking and seamless integration with event management systems.",
  
  image: {
    src: "/images/Check-in frame.png",
    alt: "Subsplash Check-In Interface",
    width: 800,
    height: 600
  },
  
  features: [
    {
      icon: QrCodeIcon,
      title: "QR Code Integration",
      description: "Fast, contactless check-in using QR codes sent via email or generated on-demand, eliminating physical tickets and reducing wait times."
    },
    {
      icon: UserGroupIcon,
      title: "Attendee Management",
      description: "Real-time attendee tracking with instant updates, group check-ins, and support for walk-in registrations with duplicate detection."
    },
    {
      icon: CheckCircleIcon,
      title: "Analytics Dashboard",
      description: "Live attendance analytics with check-in patterns, capacity monitoring, and detailed reporting for post-event analysis."
    }
  ],
  
  content: {
    mainContent: "The Check-In system transformed the event entry experience for thousands of events, reducing average check-in time from 2-3 minutes to under 30 seconds. The mobile-optimized interface ensures smooth operation even in challenging network conditions.",
    secondaryTitle: "Technical Innovation",
    secondaryContent: "Built with offline-first architecture using React Native and progressive web app technologies, the system can handle high-volume check-ins during peak times and automatically syncs data when connectivity is restored."
  }
}

export default function CheckInCaseStudy() {
  return (
    <main>
      <Breadcrumb pages={[
        { name: "Portfolio", href: "/portfolio", current: false },
        { name: "Check-In System", href: "/check-in", current: true }
      ]} />
      <CaseStudy {...checkInData} />
    </main>
  )
}
