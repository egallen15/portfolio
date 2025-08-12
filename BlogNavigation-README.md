# Blog Navigation Component

This component provides automatic previous/next post navigation for your blog posts, displaying post titles, dates, and excerpts. The navigation appears automatically on all blog posts without requiring manual imports.

## Components

### 1. `BlogNavigation.tsx`

The main UI component that renders the navigation cards with previous/next post information.

### 2. `BlogNavigationServer.tsx`  

Server component that fetches all blog posts and determines previous/next posts based on the current post's slug.

## Features

- **Automatic Integration**: Appears automatically on all blog posts with a `slug` in frontmatter
- **Previous/Next Navigation**: Shows links to chronologically adjacent posts
- **Post Previews**: Displays title, date, and excerpt for each linked post
- **Responsive Design**: Works on mobile and desktop
- **Dark Mode Support**: Automatically adapts to your theme
- **Hover Effects**: Smooth transitions and visual feedback
- **Date Sorting**: Posts are automatically sorted by date (newest first)
- **Server-Side Rendering**: SEO-friendly with no client-side JavaScript required

## Automatic Usage

The navigation automatically appears at the bottom of all blog posts that have a `slug` field in their frontmatter. No manual imports or components needed!

### Blog Post Setup

Simply ensure your blog posts have a `slug` in their frontmatter:

```mdx
---
title: "Your Post Title"
date: "2024-01-19"
excerpt: "A brief description of your post content."
slug: "your-post-slug"
tags:
  - tag1
  - tag2
---

# Your Blog Content

Your blog content goes here...

<!-- Navigation automatically appears here after AuthorBio -->
```

### How It Works

The navigation is automatically injected through `mdx-components.js`, which wraps all MDX content and adds the navigation component after the `AuthorBio` component when a `slug` is present in the frontmatter.

## Post Requirements

Ensure your blog posts have these frontmatter fields:

```mdx
---
title: "Your Post Title"
date: "2024-01-19"
excerpt: "A brief description of your post content."
slug: "your-post-slug"  # Required for navigation to appear
tags:
  - tag1
  - tag2
---
```

**Required Field:**

- `slug`: Must match your post's directory name for navigation to appear

**Recommended Fields:**

- `title`: Displayed in navigation cards
- `date`: Used for chronological sorting
- `excerpt`: Shows preview text in navigation cards

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

```text
app/
  components/
    BlogNavigation.tsx       # Main UI component
    BlogNavigationServer.tsx # Server logic and data fetching
  blog/
    your-post/
      page.mdx              # Your blog post (navigation appears automatically)
  mdx-components.js         # Automatic integration logic
```

## Implementation Details

- **Automatic Integration**: Uses `mdx-components.js` to wrap all MDX content
- **Server Components**: Uses Nextra's `getPageMap` and `normalizePages` functions
- **No Client JavaScript**: Pure server-side rendering for optimal performance
- **Frontmatter-Based**: Detects blog posts using `slug` field in frontmatter
- **SEO Friendly**: Server-side rendering with proper meta information
- **Graceful Fallbacks**: Handles missing data and edge cases elegantly
- **TypeScript Support**: Fully typed with proper interfaces
- **Clean Architecture**: Only two components needed for full functionality

## How The Automatic Integration Works

1. **MDX Wrapper**: `mdx-components.js` wraps all MDX content
2. **Slug Detection**: Checks for `frontMatter.slug` in each post
3. **Conditional Rendering**: Shows navigation only on posts with slugs
4. **Placement**: Appears automatically after `AuthorBio` component
5. **Server Rendering**: All data fetching happens server-side for performance

## Customization

You can customize the appearance by modifying the Tailwind classes in `BlogNavigation.tsx`:

- Card styling: `bg-gray-50 dark:bg-gray-800/50`
- Hover effects: `hover:bg-gray-100 dark:hover:bg-gray-800`
- Text colors: `text-gray-900 dark:text-gray-100`
- Border styling: `border border-gray-200 dark:border-gray-700`
