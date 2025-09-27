import Breadcrumb from '@/app/components/Breadcrumb'
import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'
import { CogIcon, BoltIcon, ChartBarIcon } from '@heroicons/react/20/solid'

const workflowsData: CaseStudyProps = {
  subtitle: "Process Automation",
  title: "Subsplash Workflows", 
  description: "An intuitive workflow automation system that empowers teams to build custom business processes without code, increasing efficiency and reducing manual tasks.",
  
  image: {
    src: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png",
    alt: "Subsplash Workflows Interface",
    width: 500,
    height: 500
  },
  
  sections: {
    tools: {
      title: "Technology Stack",
      content: "Built using modern web technologies and microservices architecture to ensure scalability and reliability for enterprise-level workflow automation.",
      features: [
        {
          icon: CogIcon,
          title: "React & TypeScript",
          description: "Frontend built with React and TypeScript for a responsive and type-safe user interface."
        },
        {
          icon: BoltIcon,
          title: "Microservices Architecture",
          description: "Scalable backend architecture designed to handle complex workflow executions reliably."
        },
        {
          icon: ChartBarIcon,
          title: "Real-time Processing",
          description: "Event-driven architecture for instant workflow execution and status updates."
        }
      ]
    },
    
    problemStatement: {
      title: "Problem",
      content: "Teams at Subsplash were spending countless hours on repetitive tasks and manual processes. Complex business workflows required developer intervention, creating bottlenecks and preventing non-technical users from automating their work."
    },
    
    researchAndFeedback: {
      title: "Research & User Feedback",
      content: "User interviews revealed that 75% of team members had workflows they wanted to automate but lacked the technical skills to implement. Teams were losing an average of 15 hours per week on manual tasks that could be automated."
    },
    
    solution: {
      title: "Solution",
      content: "The Workflows platform revolutionized how teams at Subsplash handle repetitive tasks and complex business processes. By providing a no-code solution, we enabled non-technical users to create sophisticated automations that previously required developer intervention.",
      features: [
        {
          icon: CogIcon,
          title: "Visual Builder",
          description: "Drag-and-drop interface for creating complex workflows with conditional logic, loops, and integrations."
        },
        {
          icon: BoltIcon,
          title: "Automation Engine", 
          description: "Powerful execution engine that processes workflows reliably with built-in error handling and retry mechanisms."
        },
        {
          icon: ChartBarIcon,
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
          icon: CogIcon,
          title: "50,000+ Workflows Automated",
          description: "Teams have successfully automated thousands of previously manual processes."
        },
        {
          icon: BoltIcon,
          title: "2,000 Hours Saved Monthly",
          description: "Significant time savings across all departments through process automation."
        },
        {
          icon: ChartBarIcon,
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
