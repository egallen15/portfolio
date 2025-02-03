import { getPageMap } from 'nextra/page-map';

export const metadata = {
    title: 'My blog',
    description: 'Welcome to my Next.js 13 portfolio!',
};

export default async function Blog() {
  const pageMap = (await getPageMap()) || [];
  const blogPage = pageMap.find(page => page?.route?.startsWith('/blog') && page.route !== '/blog') || {};
  const posts = blogPage.children ?? [];
  
  return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
        {posts.length > 0 ? (
          <ul className="list-disc pl-5">
            {posts.map(post => (
              <li key={post.route} className="py-1">
                <a href={post.route} className="text-blue-600 hover:underline">
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
