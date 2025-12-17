import Breadcrumb from '@/app/components/Breadcrumb'
import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'
import { portfolioMetadata } from '../portfolioData'

const checkInData: CaseStudyProps = {
  ...portfolioMetadata.checkIn,
  
  image: {
    src: "/images/Check-in frame.png",
    alt: "Subsplash Check-In Interface",
    width: 800,
    height: 600
  },
  
  sections: {
    tools: {
      title: "Technology Stack",
      content: "Built with offline-first architecture using React Native and progressive web app technologies, the system can handle high-volume check-ins during peak times and automatically syncs data when connectivity is restored.",
      features: [
        {
          icon: "qr-code",
          title: "React Native",
          description: "Cross-platform mobile development for consistent performance across iOS and Android devices."
        },
        {
          icon: "user-group",
          title: "Progressive Web App",
          description: "Offline-capable web technology that works seamlessly even with poor network connectivity."
        },
        {
          icon: "check-circle",
          title: "Real-time Sync",
          description: "Automatic data synchronization when connectivity is restored, ensuring no check-ins are lost."
        }
      ]
    },
    
    problemStatement: {
      title: "Problem",
      content: "Event organizers needed a faster, more reliable check-in solution to reduce long lines and improve the attendee experience. Traditional paper-based or slow digital check-in systems created bottlenecks that frustrated both organizers and attendees."
    },
    
    researchAndFeedback: {
      title: "Research & User Feedback",
      content: "Through interviews with event organizers and attendee observations, we found that 85% of events experienced significant delays during check-in, with average wait times of 2-3 minutes per person. Users demanded a contactless solution that would work reliably even with poor internet connectivity."
    },
    
    solution: {
      title: "Solution",
      content: "The Check-In system transformed the event entry experience for thousands of events, reducing average check-in time from 2-3 minutes to under 30 seconds. The mobile-optimized interface ensures smooth operation even in challenging network conditions.",
      features: [
        {
          icon: "qr-code",
          title: "QR Code Integration",
          description: "Fast, contactless check-in using QR codes sent via email or generated on-demand, eliminating physical tickets and reducing wait times."
        },
        {
          icon: "user-group",
          title: "Attendee Management",
          description: "Real-time attendee tracking with instant updates, group check-ins, and support for walk-in registrations with duplicate detection."
        },
        {
          icon: "check-circle",
          title: "Analytics Dashboard",
          description: "Live attendance analytics with check-in patterns, capacity monitoring, and detailed reporting for post-event analysis."
        }
      ]
    },
    
    impactAndResults: {
      title: "Impact & Results",
      content: "The system has been deployed across thousands of events, dramatically improving the check-in experience and providing valuable insights to event organizers.",
      features: [
        {
          icon: "qr-code",
          title: "90% Faster Check-ins",
          description: "Reduced average check-in time from 2-3 minutes to under 30 seconds per attendee."
        },
        {
          icon: "user-group",
          title: "99.9% Uptime",
          description: "Reliable performance even during high-traffic events with thousands of simultaneous check-ins."
        },
        {
          icon: "check-circle",
          title: "Real-time Insights",
          description: "Event organizers now have instant access to attendance data and can make informed decisions during events."
        }
      ]
    }
  }
}

export default function CheckInCaseStudy() {
  return (
    <main className="flex flex-col mx-6 xl:mx-auto w-auto lg:max-w-7xl">
      <Breadcrumb pages={[
        { name: "Portfolio", href: "/portfolio", current: false },
        { name: "Subsplash Check-In", href: "/check-in", current: true }
      ]} />
      <CaseStudy {...checkInData} />
    </main>
  )
}
