import { getPageMap } from 'nextra/page-map';
import { normalizePages } from 'nextra/normalize-pages';
import BlogPostListItem from '../components/BlogPostListItem'; // updated import

export const metadata = {
    title: 'Blog Index',
    description: 'Welcome to my Next.js 13 portfolio!',
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
      <div className="flex max-w-[1024px] mx-auto p-4">
        <div>
          <h1 className="text-3xl font-bold mx-4 mt-4 mb-4">Blog Posts</h1>
          {posts.length > 0 ? (
            // Render posts as full width clickable cards
            <div className="flex flex-col space-y-4">
              {posts.map(post => (
                <BlogPostListItem
                  key={post.name}
                  title={post.title}
                  excerpt={post.excerpt}
                  url={post.route}
                />
              ))}
            </div>
          ) : (
            <p className="font-bold mx-4 mt-4 mb-4">No blog posts found.</p>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return <div>Error loading blog posts</div>;
  }
}
