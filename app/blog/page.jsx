import { getPageMap } from 'nextra/page-map';
import { normalizePages } from 'nextra/normalize-pages';
import BlogPostListItem from '../components/BlogPostListItem';
import { LoadingProvider } from '../components/LoadingProvider';
import BlogContent from '../components/BlogContent';

export const metadata = {
  title: 'Blog Index',
  description: 'The latest blog posts from our site.',
};

export default async function Blog() {
  try {
    // Fetch and normalize the page map for '/blog'
    const { directories } = normalizePages({
      list: await getPageMap('/blog'),
      route: '/blog'
    });

    // Filter out 'index' and sort posts by date descending
    const posts = directories
      .filter(post => post.name !== 'index')
      .sort((a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date))
      .map(post => ({
        name: post.name,
        title: post.frontMatter.title || post.name,
        route: `/blog/${post.name}`,
        date: post.frontMatter.date,
        excerpt: post.frontMatter.excerpt || 'No excerpt available.'
      }));

    console.log('Normalized posts:', posts);

    return (
      <LoadingProvider initialLoadingState={false}>
        <BlogContent posts={posts} />
      </LoadingProvider>
    );
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return <div>Error loading blog posts</div>;
  }
}
