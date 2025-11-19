import { getPageMap } from 'nextra/page-map';
import { normalizePages } from 'nextra/normalize-pages';

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ericallen.me';
  
  try {
    // Fetch and normalize the page map for '/blog'
    const { directories } = normalizePages({
      list: await getPageMap('/blog'),
      route: '/blog'
    });

    // Filter and sort posts by date descending
    const posts = directories
      .filter(post => post.name !== 'index')
      .sort((a, b) => {
        const dateA = new Date(b.frontMatter.date);
        const dateB = new Date(a.frontMatter.date);
        return dateA.getTime() - dateB.getTime();
      });

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Eric Allen's Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Thoughts on design, development, and building great products</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts.map(post => {
      const postUrl = `${siteUrl}/blog/${post.name}`;
      const title = post.frontMatter.title || post.name;
      const description = post.frontMatter.excerpt || 'No description available';
      const pubDate = new Date(post.frontMatter.date).toUTCString();
      const author = post.frontMatter.author || 'Eric Allen';
      
      return `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>${author}</author>
      ${post.frontMatter.tags?.map((tag: string) => `<category>${tag}</category>`).join('\n      ') || ''}
    </item>`;
    }).join('')}
  </channel>
</rss>`;

    return new Response(rss, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new Response('Error generating RSS feed', { status: 500 });
  }
}
