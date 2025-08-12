import { getPageMap } from 'nextra/page-map';
import { normalizePages } from 'nextra/normalize-pages';
import { BlogPost } from '../types/blog';
import BlogNavigation from './BlogNavigation';

interface BlogNavigationServerProps {
  currentSlug: string;
}

export default async function BlogNavigationServer({ currentSlug }: BlogNavigationServerProps) {
  try {
    // Fetch and normalize the page map for '/blog'
    const { directories } = normalizePages({
      list: await getPageMap('/blog'),
      route: '/blog'
    });

    // Filter out 'index' and sort posts by date descending (newest first)
    const allPosts: BlogPost[] = directories
      .filter(post => post.name !== 'index')
      .sort((a, b) => {
        const dateA = new Date(a.frontMatter.date);
        const dateB = new Date(b.frontMatter.date);
        return dateB.getTime() - dateA.getTime();
      })
      .map(post => ({
        name: post.name,
        title: post.frontMatter.title || post.name,
        route: `/blog/${post.name}`,
        date: post.frontMatter.date,
        excerpt: post.frontMatter.excerpt || 'No excerpt available.',
        tags: post.frontMatter.tags || []
      }));

    // Find the current post index
    const currentPostIndex = allPosts.findIndex(post => post.name === currentSlug);
    
    if (currentPostIndex === -1) {
      return null; // Current post not found
    }

    // Get previous and next posts
    // Since posts are sorted newest first, previous is actually next in array (older)
    // and next is previous in array (newer)
    const previousPost = currentPostIndex < allPosts.length - 1 ? allPosts[currentPostIndex + 1] : undefined;
    const nextPost = currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : undefined;

    return (
      <BlogNavigation 
        previousPost={previousPost}
        nextPost={nextPost}
      />
    );
  } catch (error) {
    console.error('Error loading blog navigation:', error);
    return null;
  }
}
