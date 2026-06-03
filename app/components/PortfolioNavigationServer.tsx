import PortfolioNavigation from './PortfolioNavigation';
import { portfolioProjects } from '../portfolio/portfolioData';

interface PortfolioNavigationServerProps {
  currentSlug: string;
  variant?: 'cards' | 'simple' | 'simple-inline';
}

export default function PortfolioNavigationServer({ currentSlug, variant = 'cards' }: PortfolioNavigationServerProps) {
  // Find the current project index
  const currentProjectIndex = portfolioProjects.findIndex(project => 
    project.slug === currentSlug
  );
  
  if (currentProjectIndex === -1) {
    return null; // Current project not found
  }

  // Get previous and next projects, wrapping at both ends.
  const hasMultipleProjects = portfolioProjects.length > 1;
  const previousProject = hasMultipleProjects ? portfolioProjects[(currentProjectIndex - 1 + portfolioProjects.length) % portfolioProjects.length] : undefined;
  const nextProject = hasMultipleProjects ? portfolioProjects[(currentProjectIndex + 1) % portfolioProjects.length] : undefined;

  return (
    <PortfolioNavigation 
      previousProject={previousProject}
      nextProject={nextProject}
      variant={variant}
    />
  );
}
