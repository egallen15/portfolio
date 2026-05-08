import Breadcrumb from '@/app/components/Breadcrumb'
import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'
import { portfolioMetadata } from '../portfolioData'

const workflowsData: CaseStudyProps = {
  ...portfolioMetadata.workflows,
  
  image: {
    src: "/images/workflows.png",
    alt: "Subsplash Workflows Interface",
    width: 1500,
    height: 500
  },
  
  sections: {
    tools: {
      title: "Technology Stack",
      content: "Built using modern web technologies and microservices architecture to ensure scalability and reliability for enterprise-level workflow automation.",
      features: [
        {
          icon: "cog",
          title: "React & TypeScript",
          description: "Frontend built with React and TypeScript for a responsive and type-safe user interface."
        },
        {
          icon: "bolt",
          title: "Microservices Architecture",
          description: "Scalable backend architecture designed to handle complex workflow executions reliably."
        },
        {
          icon: "chart-bar",
          title: "Real-time Processing",
          description: "Event-driven architecture for instant workflow execution and status updates."
        }
      ]
    },
    
    problemStatement: {
      title: "Problem",
      content: "Churches using the Subsplash Dashboard were struggling to manage and automate their internal processes, leading to inefficiencies and manual workarounds. They needed a solution that would allow them to automate repetitive tasks and complex ministry processes without requiring technical expertise."
    },
    
    researchAndFeedback: {
      title: "Research & feedback",
      content: "Through user interviews and feedback sessions, we identified key pain points around manual processes and the need for a more intuitive way to manage workflows. Users expressed a desire for a visual tool that would allow them to create and manage automations without needing to learn a complex system."
    },
    
    solution: {
      title: "Solution",
      content: "We designed and developed a Trello-style kanban tool within the Subsplash Dashboard that allows users to visually create, manage, and automate their church processes. The platform features a drag-and-drop interface for building workflows with deep integrations with other Subsplash Forms, People, and other products.",
      features: [
        {
          icon: "cog",
          title: "Visual Builder",
          description: "Drag-and-drop interface for creating complex workflows with conditional logic, loops, and integrations."
        },
        {
          icon: "bolt",
          title: "Automation Engine", 
          description: "Powerful execution engine that processes workflows reliably with built-in error handling and retry mechanisms."
        },
        {
          icon: "chart-bar",
          title: "Performance Insights",
          description: "Real-time monitoring and analytics to track workflow performance and identify optimization opportunities."
        }
      ]
    },
    
    impactAndResults: {
      title: "Impact & Results",
      content: "Since launch, the platform has automated over 50,000 workflows, saving an estimated 2,000 hours of manual work per month and reducing process errors by 85%. The visual interface has made workflow creation accessible to all team members.",
      features: [
        {
          icon: "cog",
          title: "50,000+ Workflows Automated",
          description: "Teams have successfully automated thousands of previously manual processes."
        },
        {
          icon: "bolt",
          title: "2,000 Hours Saved Monthly",
          description: "Significant time savings across all departments through process automation."
        },
        {
          icon: "chart-bar",
          title: "85% Error Reduction",
          description: "Dramatic decrease in process errors through automated validation and execution."
        }
      ]
    }
  }
}

export default function WorkflowsCaseStudy() {
  return (
    <main className="flex flex-col mx-6 xl:mx-auto w-full lg:max-w-7xl">
      <Breadcrumb pages={[
        { name: "Portfolio", href: "/portfolio", current: false },
        { name: "Workflows", href: "/workflows", current: true }
      ]} />
      <CaseStudy {...workflowsData} />
    </main>
  )
}
