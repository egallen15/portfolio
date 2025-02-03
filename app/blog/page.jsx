import { getPageMap } from 'nextra/page-map';

export const metadata = {
    title: 'My blog',
    description: 'Welcome to my Next.js 13 portfolio!',
};

export default async function Blog() {
  const pageMap = (await getPageMap()) || [];
  const blogPage = pageMap.find(page => page.route === '/blog') || {};
  // Ensure posts defaults to an empty array if undefined
  const posts = blogPage.children ?? [];
  
  return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
        {posts.length > 0 ? (
          <ul>
            {posts.map(post => (
              <li key={post.route}>
                <a href={post.route}>
                  {post.meta?.title || post.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>
  );
}
