# Blog Navigation Component

This component provides previous/next post navigation for your blog posts, displaying post titles, dates, and excerpts.

## Components Created

### 1. `BlogNavigation.tsx`
The main UI component that renders the navigation cards.

### 2. `BlogNavigationServer.tsx`  
Server component that fetches all blog posts and determines previous/next posts based on the current post.

### 3. `BlogNav.tsx`
Simple wrapper component for easy importing in MDX files.

## Features

- **Previous/Next Navigation**: Shows links to chronologically adjacent posts
- **Post Previews**: Displays title, date, and excerpt for each linked post
- **Responsive Design**: Works on mobile and desktop
- **Dark Mode Support**: Automatically adapts to your theme
- **Hover Effects**: Smooth transitions and visual feedback
- **Date Sorting**: Posts are automatically sorted by date (newest first)

## Usage

### In MDX Files

Add this to the bottom of any blog post:

```mdx
import BlogNav from '../../components/BlogNav';

<BlogNav currentSlug="your-post-slug" />
```

### Examples

```mdx
<!-- For post in /app/blog/my-awesome-post/page.mdx -->
<BlogNav currentSlug="my-awesome-post" />

<!-- For post in /app/blog/10-ways-to-use-AI-in-your-business/page.mdx -->
<BlogNav currentSlug="10-ways-to-use-AI-in-your-business" />
```

## Post Requirements

For best results, ensure your blog posts have these frontmatter fields:

```mdx
---
title: "Your Post Title"
date: "2024-01-19"
excerpt: "A brief description of your post content."
tags:
  - tag1
  - tag2
---
```

## Styling

The component uses Tailwind CSS classes and follows your existing design system:

- Uses your site's gray color palette
- Supports dark mode with `dark:` variants
- Responsive design with `sm:` breakpoints
- Hover effects with smooth transitions

## Navigation Logic

- Posts are sorted by date (newest first)
- **Previous**: Older post (later in the chronological list)
- **Next**: Newer post (earlier in the chronological list)
- If there's no previous/next post, that side won't be displayed
- Component handles edge cases (first/last posts) gracefully

## File Structure

```
app/
  components/
    BlogNavigation.tsx      # Main UI component
    BlogNavigationServer.tsx # Server logic
    BlogNav.tsx            # Simple wrapper for MDX imports
  blog/
    your-post/
      page.mdx             # Your blog post with navigation
```

## Implementation Details

- Uses Nextra's `getPageMap` and `normalizePages` functions
- Server-side rendering for SEO benefits
- Automatic date parsing and formatting
- Graceful error handling
- TypeScript support with proper interfaces

## Customization

You can customize the appearance by modifying the Tailwind classes in `BlogNavigation.tsx`:

- Card styling: `bg-gray-50 dark:bg-gray-800/50`
- Hover effects: `hover:bg-gray-100 dark:hover:bg-gray-800`
- Text colors: `text-gray-900 dark:text-gray-100`
- Border styling: `border border-gray-200 dark:border-gray-700`
