import BlogContentServer from '../components/BlogContentServer';
import Breadcrumb from '../components/Breadcrumb';

export const metadata = {
  title: 'All posts',
  description: 'The latest blog posts from Eric Allen.',
};

export default function Blog() {
  return (
    <main className="w-full mx-6 mb-6 xl:mx-0">
      <Breadcrumb pages={[{ name: "All posts", href: "/blog", current: true }]} />
      <BlogContentServer />
    </main>
  );
}
