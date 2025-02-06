# Portfolio Website

## Overview

- Built with Next.js 13 and styled with Tailwind CSS.
- Uses a consistent layout: a responsive header, main content area, and a shared footer.
- The homepage (app/page.tsx) displays your projects and welcome message.
- The footer (app/components/footer.tsx) provides navigation links and copyright info.
- Blog posts and other content reside in the /app/blog folder.

## File Structure & How It Works

- **/app**: Contains your application source code.
  - *page.tsx*: Defines the homepage layout and project listings.
  - **/components**: Shared UI components like the Footer, Navbar, and Sidebar.
  - **/blog**: Contains blog post pages (often written in MDX).
- **/.next**: Auto-generated build artifacts by Next.js; you don't modify these directly.
- **/public**: (If present) contains static assets.

## Making Changes

- To update the layout, text, or styling, edit files under the /app folder and its subdirectories.
- Changes to shared components (e.g. footer) are reflected site-wide.
- After making changes, rebuild the site to update the auto-generated files.
- Remember to update this document with any significant modifications to your structure or design.
