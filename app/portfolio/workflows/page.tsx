import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'
import { CogIcon, BoltIcon, ChartBarIcon } from '@heroicons/react/20/solid'

const workflowsData: CaseStudyProps = {
  subtitle: "Process Automation",
  title: "Subsplash Workflows Platform", 
  description: "An intuitive workflow automation system that empowers teams to build custom business processes without code, increasing efficiency and reducing manual tasks.",
  
  image: {
    src: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png",
    alt: "Subsplash Workflows Interface",
    width: 500,
    height: 500
  },
  
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
  ],
  
  content: {
    mainContent: "The Workflows platform revolutionized how teams at Subsplash handle repetitive tasks and complex business processes. By providing a no-code solution, we enabled non-technical users to create sophisticated automations that previously required developer intervention.",
    secondaryTitle: "Impact & Results",
    secondaryContent: "Since launch, the platform has automated over 50,000 workflows, saving an estimated 2,000 hours of manual work per month and reducing process errors by 85%. The visual interface has made workflow creation accessible to all team members."
  }
}

export default function WorkflowsCaseStudy() {
  return <CaseStudy {...workflowsData} />
}
