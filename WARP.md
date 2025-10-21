# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

```bash
# Development with Turbopack for faster builds
npm run dev

# Production build
npm run build

# Start production server
npm start

# ESLint linting
npm run lint
```

## Project Architecture

This is a **Next.js 15** portfolio website using the **App Router** with **Nextra** for MDX blog content, **Tailwind CSS** for styling, and **Motion** for animations.

### Core Architecture

- **Next.js App Router**: Uses `app/` directory structure with TypeScript
- **Nextra Integration**: Custom theme system for handling MDX blog posts with automatic page generation
- **Component-Based Design**: Extensive use of reusable React components for consistent UI
- **Animation System**: Motion (Framer Motion) animations with `whileInView` for scroll-triggered animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

### Key Directories

- `app/`: Next.js App Router structure
  - `components/`: 30+ reusable UI components (BentoGrid, BlogContent, Skills, etc.)
  - `blog/`: MDX blog posts with automatic routing
  - `portfolio/`: Portfolio case studies and project pages
  - `page.tsx`: Homepage with hero section, latest posts, portfolio showcase
  - `layout.tsx`: Root layout with custom Nextra theme integration

- `mdx-components.js`: MDX component customizations with custom styling for headings, code blocks, and blog post wrapper

### Component Architecture

**Layout Components**:

- `nextra-theme.tsx`: Custom Nextra theme wrapper with navbar and footer
- `NewNavbar.tsx` & `footer.tsx`: Site navigation and footer
- `layout.tsx`: Root layout with theme detection script

**Content Components**:

- `BentoGrid.tsx`: Portfolio showcase grid layout
- `BlogContentServer.tsx`: Server-side blog post rendering
- `ProjectGrid.tsx`: Project display grid
- `Skills.tsx`, `WorkExperience.tsx`, `Testimonials.tsx`: Section-specific components

**UI Components**:

- `HighlightedHeading.tsx`: Styled headings with color highlights
- `SocialLinks.tsx`: Social media links component
- `ThemeToggle.tsx`: Dark/light mode switching

### Nextra Integration

The site uses a **custom Nextra theme** rather than the default:

- MDX files in `app/blog/` are automatically processed
- Custom component overrides in `mdx-components.js`
- Blog navigation and author bio automatically added
- Frontmatter metadata drives blog post headers

### Styling System

- **Tailwind CSS 4.0** with custom configuration
- **Dark mode support** with system preference detection
- **Custom CSS** in `globals.css` with neon effects and animations
- **Responsive breakpoints**: Mobile-first design patterns
- **Typography**: Noto Sans font with prose styling for blog content

### Image Handling

- **Next.js Image component** with optimization
- **Remote image patterns** configured for external sources (Unsplash, Tailwind assets)
- **SVG support** with `dangerouslyAllowSVG` enabled
- **Custom blob clipping** on homepage profile image

## Development Notes

- Uses **TypeScript** with strict mode enabled
- **ESLint** configuration extends Next.js defaults  
- **PostCSS** and **Autoprefixer** for CSS processing
- **Turbopack** enabled for faster development builds
- Blog posts support **rehype-slug** for automatic heading IDs
- Animation system uses **viewport-based triggers** for performance

## Blog System

Blog posts are **MDX files** in `app/blog/[slug]/page.mdx` format:

- Automatic slug-based routing
- Frontmatter metadata for titles, dates, descriptions
- Server-side rendering with `BlogContentServer` component
- Navigation between posts with `BlogNavigationServer`
- Custom MDX components for enhanced styling

## Testing & Deployment

The codebase appears to be set up for deployment but does not include specific test frameworks. When adding tests, follow Next.js testing patterns and consider the MDX/Nextra integration requirements.
