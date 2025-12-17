# Portfolio Website

## Overview

- Built with Next.js 15 and styled with Tailwind CSS.
- Uses a consistent layout: a responsive header, main content area, and a shared footer.
- The homepage (app/page.tsx) displays your projects and welcome message.
- The footer (app/components/footer.tsx) provides navigation links and copyright info.
- Blog posts and other content reside in the /app/blog folder.
- Portfolio case studies are in /app/portfolio with automatic navigation between projects.

## File Structure & How It Works

- **/app**: Contains your application source code.
  - *page.tsx*: Defines the homepage layout and project listings.
  - **/components**: Shared UI components like the Footer, Navbar, CaseStudy, and navigation components.
  - **/blog**: Contains blog post pages (often written in MDX).
  - **/portfolio**: Contains portfolio case study pages with automatic prev/next navigation.
    - *portfolioData.ts*: Single source of truth for project metadata (title, description, slug, etc.)
- **/.next**: Auto-generated build artifacts by Next.js; you don't modify these directly.
- **/public**: Contains static assets like images.

## Working with Portfolio Case Studies

### Adding a New Case Study

1. **Add metadata to `app/portfolio/portfolioData.ts`:**
   ```typescript
   export const portfolioMetadata = {
     // ... existing projects
     yourNewProject: {
       subtitle: "Company Name",
       title: "Your Project Title",
       description: "A brief description of your project.",
       slug: "your-project-slug",
     }
   }
   
   // Add to portfolioProjects array in the order you want it to appear
   export const portfolioProjects: PortfolioProjectMeta[] = [
     // ... existing projects
     {
       ...portfolioMetadata.yourNewProject,
       route: '/portfolio/your-project-slug',
       order: 5 // next order number
     }
   ]
   ```

2. **Create the case study page at `app/portfolio/your-project-slug/page.tsx`:**
   ```typescript
   import Breadcrumb from '@/app/components/Breadcrumb'
   import CaseStudy, { CaseStudyProps } from '../../components/CaseStudy'
   import { portfolioMetadata } from '../portfolioData'

   const yourProjectData: CaseStudyProps = {
     ...portfolioMetadata.yourNewProject, // Spreads: subtitle, title, description, slug
     
     metadata: {
       role: "Your Role",
       teamSize: "Team composition",
       dateRange: "Date range",
       tools: ["Tool1", "Tool2"]
     },
     
     images: [
       {
         src: "/images/your-image.png",
         alt: "Alt text",
         width: 1200,
         height: 675
       }
     ],
     
     sections: {
       problemStatement: {
         content: "Describe the problem..."
       },
       researchAndFeedback: {
         content: "Describe your research..."
       },
       solution: {
         content: "Describe your solution...",
         features: [
           {
             icon: "check-circle",
             title: "Feature name",
             description: "Feature description"
           }
         ]
       },
       impactAndResults: {
         content: "Describe the impact...",
         features: [
           {
             icon: "check-circle",
             title: "Result metric",
             description: "Result details"
           }
         ]
       }
     }
   }

   export default function YourProjectCaseStudy() {
     return (
       <main className="flex flex-col mx-6 xl:mx-auto w-full lg:max-w-7xl">
         <Breadcrumb pages={[
           { name: "Portfolio", href: "/portfolio", current: false },
           { name: "Your Project Title", href: "/your-project-slug", current: true }
         ]} />
         <CaseStudy {...yourProjectData} />
       </main>
     )
   }
   ```

### Updating an Existing Case Study

- **To update title, description, or slug:** Edit `app/portfolio/portfolioData.ts` - this updates both the case study page and navigation
- **To update detailed content, images, or sections:** Edit the specific case study page in `app/portfolio/[project]/page.tsx`

### Case Study Navigation

Navigation between case studies is automatic! The `CaseStudy` component includes prev/next navigation based on the order defined in `portfolioData.ts`. The navigation pulls the actual title and description from the metadata, so everything stays in sync.

## Making Changes

- To update the layout, text, or styling, edit files under the /app folder and its subdirectories.
- Changes to shared components (e.g. footer) are reflected site-wide.
- After making changes, the dev server will hot-reload automatically.
- For production, run `npm run build` to create an optimized build.

## Adding Blog Posts

Blog posts are MDX files in `app/blog/[slug]/page.mdx` format. Each post requires frontmatter with `title`, `author`, `date`, `excerpt`, and `tags`. The blog listing and navigation are automatically generated from these files.
