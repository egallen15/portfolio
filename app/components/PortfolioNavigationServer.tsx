import PortfolioNavigation from './PortfolioNavigation';
import { portfolioProjects } from '../portfolio/portfolioData';

interface PortfolioNavigationServerProps {
  currentSlug: string;
}

export default function PortfolioNavigationServer({ currentSlug }: PortfolioNavigationServerProps) {
  // Find the current project index
  const currentProjectIndex = portfolioProjects.findIndex(project => 
    project.slug === currentSlug
  );
  
  if (currentProjectIndex === -1) {
    return null; // Current project not found
  }

  // Get previous and next projects (in sequential order)
  const previousProject = currentProjectIndex > 0 ? portfolioProjects[currentProjectIndex - 1] : undefined;
  const nextProject = currentProjectIndex < portfolioProjects.length - 1 ? portfolioProjects[currentProjectIndex + 1] : undefined;

  return (
    <PortfolioNavigation 
      previousProject={previousProject}
      nextProject={nextProject}
    />
  );
}
