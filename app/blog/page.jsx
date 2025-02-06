import { getPageMap } from 'nextra/page-map';
import { normalizePages } from 'nextra/normalize-pages';

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
        route: `/blog/${post.name}`
      }));

    console.log('Normalized posts:', posts);

    return (
      <div className="p-4">
        <div>
          <h1 className="text-3xl font-bold mx-4 mt-4 mb-4">Blog Posts</h1>
          {posts.length > 0 ? (
            <ul className="list-disc pl-5">
              {posts.map(post => (
                <li key={post.name} className="py-1">
                  <a href={post.route} className="text-blue-600 hover:underline">
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
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
