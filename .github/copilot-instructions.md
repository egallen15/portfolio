# Copilot Instructions for Eric Allen's Portfolio

## Project Overview
This is a Next.js 15 portfolio site with blog functionality, built with:
- **App Router** architecture (`app/` directory)
- **Nextra** for MDX blog post handling
- **Tailwind CSS** with custom design system
- **TypeScript** for type safety
- **Motion** for animations

## Architecture Patterns

### Blog System
- Blog posts are **MDX files** in `app/blog/[slug]/page.mdx` format
- Each post requires frontmatter: `title`, `author`, `date`, `excerpt`, `tags`
- Blog listing powered by Nextra's `getPageMap()` and `normalizePages()`
- Server component (`BlogContentServer.tsx`) fetches posts, client component handles UI
- Custom MDX components defined in `mdx-components.js` with layout wrapper

### Component Structure
- **Server/Client split**: Many components have `ComponentNameServer.tsx` + `ComponentName.tsx` pairs
- **Shared layout**: `nextra-theme.tsx` provides consistent navbar/footer wrapper
- **Theme system**: Uses `next-themes` with custom Tailwind variables and CSS custom properties
- **Typography**: Custom font loading with `Noto_Sans` in layout

### Key Files to Reference
- `app/layout.tsx` - Root layout with metadata, theme provider, font loading
- `mdx-components.js` - Blog post layout and custom MDX components
- `app/types/blog.ts` - Blog post type definitions
- `tailwind.config.ts` - Custom design system with animations and color palette

## Development Workflows

### Running the Project
```bash
npm run dev --turbopack  # Development with Turbopack
npm run build           # Production build
npm run lint           # ESLint checking
```

### Adding Blog Posts
1. Create `app/blog/[slug]/page.mdx`
2. Include required frontmatter (see existing posts for format)
3. Posts auto-appear in blog listing via Nextra page map

### Component Conventions
- Use TypeScript interfaces from `app/types/`
- Server components for data fetching, client for interactivity
- Tailwind with custom color variables (`background`, `foreground`, `primary`)
- Animation classes available: `fadeInRight`, `gradient`, `lawnMower`

### Image Handling
- Remote images configured for `placehold.co`, `tailwindcss.com`, `images.unsplash.com`
- SVGs allowed via `dangerouslyAllowSVG: true`
- Ideal image size is 1200x675 for blog/social sharing and correct aspect ratio

## Project-Specific Patterns

### Theme Implementation
- Dark/light mode via `next-themes` with `class` strategy
- Dynamic theme color meta tag via `ThemeColor.tsx` component
- Custom CSS properties in `globals.css` for theme-aware colors

### Content Organization
- Homepage (`app/page.tsx`) with sections: hero, projects, testimonials, FAQ
- Portfolio case studies in `app/portfolio/[project]/page.tsx`
- Static pages: about, contact, my-stack

### Navigation & SEO
- Breadcrumb component for page hierarchy
- OpenGraph images and Twitter cards configured
- Template-based page titles: "%s | Eric Allen"

When working on this codebase, prioritize the server/client component pattern, respect the Nextra blog architecture, and maintain the existing design system consistency.