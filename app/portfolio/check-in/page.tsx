import Breadcrumb from '@/app/components/Breadcrumb'
import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'
import PortfolioNavigationServer from '../../components/PortfolioNavigationServer'
import { portfolioMetadata } from '../portfolioData'

const checkInData: CaseStudyProps = {
  ...portfolioMetadata.checkIn,

  metadata: {
    role: "Senior UX Designer",
    tools: ["Sketch", "Zeplin"],
  },
  
  image: {
    src: "/images/Check-in frame.png",
    alt: "Subsplash Check-In Interface",
    width: 800,
    height: 600
  },
  
  sections: {
    tools: {
      title: "Design",
      content: "Using user flows, wireframes, and high-fidelity prototypes, I designed a mobile-first check-in experience that helped event teams move guests through the door quickly and confidently.",
      features: [
        {
          icon: "sketch",
          title: "Sketch",
          description: "Created flows and production-ready interface designs for the check-in experience."
        },
        {
          icon: "zeplin",
          title: "Zeplin",
          description: "Documented design specs and interaction details for engineering handoff."
        },
        {
          icon: "user-group",
          title: "Organizer feedback",
          description: "Validated the experience with event teams who manage busy arrival windows."
        }
      ]
    },
    
    problemStatement: {
      title: "Problem",
      content: "Event organizers needed a faster, more reliable way to check people in without creating long lines at the door. Paper lists and slow digital tools created bottlenecks that frustrated organizers, volunteers, and attendees.\n\nWe set out to create a Subsplash-native check-in experience that worked for high-volume events, supported real-time attendance tracking, and stayed dependable even when venue internet was unreliable."
    },
    
    researchAndFeedback: {
      title: "Research",
      content: "I talked with event organizers and observed how teams managed attendee arrival during busy event windows.\n\nWe found that many teams experienced delays during check-in, with average wait times of 2-3 minutes per person when relying on manual lookup or slow tools.\n\nThe strongest feedback was around reliability: organizers wanted contactless check-in, fast search, and confidence that the system would keep working in crowded spaces with poor connectivity."
    },
    
    solution: {
      title: "Solution",
      content: "We designed a check-in system that made the most common arrival tasks fast, clear, and forgiving for volunteers working under pressure:",
      features: [
        {
          icon: "qr-code",
          title: "QR code check-in",
          description: "Added fast, contactless check-in using QR codes sent to attendees before the event."
        },
        {
          icon: "user-group",
          title: "Attendee lookup",
          description: "Designed quick search and attendee management patterns for walk-ins, group check-ins, and duplicate detection."
        },
        {
          icon: "clock",
          title: "Offline-ready flow",
          description: "Accounted for poor venue connectivity so teams could continue checking people in during peak arrival times."
        },
        {
          icon: "check-circle",
          title: "Attendance visibility",
          description: "Gave organizers live attendance data so they could see who arrived and make decisions during the event."
        }
      ]
    },
    
    impactAndResults: {
      title: "Impact & Results",
      content: "The Check-In system improved the event entry experience for organizers and attendees while giving teams better visibility into attendance.",
      features: [
        {
          icon: "check-circle",
          title: "90% faster check-ins",
          description: "Reduced average check-in time from 2-3 minutes to under 30 seconds per attendee."
        },
        {
          icon: "check-circle",
          title: "Reliable event entry",
          description: "Supported high-traffic check-in moments with a flow designed for speed and resilience."
        },
        {
          icon: "check-circle",
          title: "Real-time insights",
          description: "Gave organizers instant access to attendance data during and after events."
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
      ]} actions={(
        <div className="hidden lg:block">
          <PortfolioNavigationServer currentSlug={portfolioMetadata.checkIn.slug} variant="simple-inline" />
        </div>
      )} />
      <CaseStudy {...checkInData} />
    </main>
  )
}
