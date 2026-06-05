import type { Metadata } from "next";
import Breadcrumb from '@/app/components/Breadcrumb'
import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'
import PortfolioNavigationServer from '../../components/PortfolioNavigationServer'
import { portfolioMetadata } from '../portfolioData'

export const metadata: Metadata = {
  title: portfolioMetadata.workflows.title,
  description: portfolioMetadata.workflows.description,
}

const workflowsData: CaseStudyProps = {
  ...portfolioMetadata.workflows,

  metadata: {
    role: "Senior UX Designer",
    tools: ["Sketch", "Zeplin"],
  },
  
  images: [
    {
      type: "video",
      src: "https://ericallen.info/workflows-demo.mp4",
      alt: "Subsplash Workflows demo video",
      width: 1280,
      height: 720,
      loop: true,
    },
    {
      src: "/images/workflows.png",
      alt: "Subsplash Workflows Interface",
      width: 1500,
      height: 500
    },
  ],
  
  sections: {
    tools: {
      title: "Design",
      content: "Using workflow maps, prototypes, and iterative feedback, I designed a visual automation tool that made complex ministry processes easier to understand and manage.",
      features: [
        {
          icon: "sketch",
          title: "Sketch",
          description: "Designed the kanban-style workflow builder and automation management experience."
        },
        {
          icon: "zeplin",
          title: "Zeplin",
          description: "Prepared specs for drag-and-drop behavior, states, and dashboard interactions."
        },
        {
          icon: "user-group",
          title: "Customer feedback",
          description: "Used interviews and feedback sessions to simplify automation concepts for non-technical users."
        }
      ]
    },
    
    problemStatement: {
      title: "Problem",
      content: "Church teams using the Subsplash Dashboard were relying on manual workarounds to manage internal processes. Repetitive tasks, handoffs, and follow-up steps were easy to miss and difficult to standardize across teams.\n\nWe set out to give churches a visual way to manage automations without requiring technical expertise or a complicated setup process."
    },
    
    researchAndFeedback: {
      title: "Research",
      content: "Through user interviews and feedback sessions, we identified pain points around manual processes, duplicated work, and unclear ownership.\n\nUsers wanted automation, but they did not want to learn a complex builder or think like a developer. They needed something visual, familiar, and easy to scan.\n\nThe kanban pattern emerged as a strong direction because it already matched how many teams think about stages, ownership, and process movement."
    },
    
    solution: {
      title: "Solution",
      content: "We designed a Trello-style kanban tool inside the Subsplash Dashboard that helped users create, manage, and automate church processes visually:",
      features: [
        {
          icon: "cog",
          title: "Visual builder",
          description: "Created a drag-and-drop interface for organizing stages, steps, and process movement."
        },
        {
          icon: "bolt",
          title: "Automation actions", 
          description: "Designed simple patterns for adding automated steps without overwhelming non-technical users."
        },
        {
          icon: "users",
          title: "Subsplash integrations",
          description: "Connected workflows to Forms, People, and other Subsplash products so teams could act on real customer data."
        },
        {
          icon: "chart-bar",
          title: "Performance insights",
          description: "Added visibility into workflow activity so teams could understand what was happening across processes."
        }
      ]
    },
    
    impactAndResults: {
      title: "Impact & Results",
      content: "The Workflows experience made automation more approachable for church teams and reduced the amount of manual coordination required across recurring processes.",
      features: [
        {
          icon: "check-circle",
          title: "50,000+ workflows automated",
          description: "Teams automated thousands of previously manual church processes."
        },
        {
          icon: "check-circle",
          title: "2,000 hours saved monthly",
          description: "Reduced manual coordination through repeatable, automated process steps."
        },
        {
          icon: "check-circle",
          title: "85% error reduction",
          description: "Decreased process errors by replacing inconsistent manual work with guided workflows."
        }
      ]
    }
  }
}

export default function WorkflowsCaseStudy() {
  return (
    <main className="flex flex-col mx-6 xl:mx-auto w-full lg:max-w-7xl">
      <Breadcrumb pages={[
        { name: "portfolio", href: "/portfolio", current: false },
        { name: "Workflows", href: "/workflows", current: true }
      ]} actions={(
        <div className="hidden lg:block">
          <PortfolioNavigationServer currentSlug={portfolioMetadata.workflows.slug} variant="simple-inline" />
        </div>
      )} />
      <CaseStudy {...workflowsData} />
    </main>
  )
}
