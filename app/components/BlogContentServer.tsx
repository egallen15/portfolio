import { getPageMap } from 'nextra/page-map';
import { normalizePages } from 'nextra/normalize-pages';
import BlogContentClient from './BlogContent';
import { BlogPost, BlogContentServerProps } from '../types/blog';

export default async function BlogContentServer({ 
  maxPosts, 
  showTitle = true,
  title = "All Posts",
  rssButton,
  showTagFilter = true
}: BlogContentServerProps) {
  try {
    // Fetch and normalize the page map for '/blog'
    const { directories } = normalizePages({
      list: await getPageMap('/blog'),
      route: '/blog'
    });

    // Filter out 'index' and sort posts by date descending
    const fetchedPosts: BlogPost[] = directories
      .filter(post => post.name !== 'index')
      .sort((a, b) => {
        const dateA = new Date(b.frontMatter.date);
        const dateB = new Date(a.frontMatter.date);
        return dateA.getTime() - dateB.getTime();
      })
      .map(post => ({
        name: post.name,
        title: post.frontMatter.title || post.name,
        route: `/blog/${post.name}`,
        date: post.frontMatter.date,
        excerpt: post.frontMatter.excerpt || 'No excerpt available.',
        tags: post.frontMatter.tags || [],
        image: post.frontMatter.image,
        slug: post.frontMatter.slug,
        readingTime: post.frontMatter.readingTime
      }));

    // Limit posts if maxPosts is specified
    const posts = maxPosts ? fetchedPosts.slice(0, maxPosts) : fetchedPosts;

    return (
      <div className="flex w-full max-w-7xl mx-auto">
        <div className="w-full xl:mx-0">
          <BlogContentClient 
            posts={posts}
            showTitle={showTitle}
            title={title}
            rssButton={rssButton}
            showTagFilter={showTagFilter}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return (
      <div className="flex w-full max-w-7xl mx-auto">
        <div className='w-full mx-6 xl:mx-0'>
          <p className="font-bold mx-4 mt-4 mb-4 text-red-500">Error loading blog posts</p>
        </div>
      </div>
    );
  }
}
