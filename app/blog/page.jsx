import BlogContentServer from '../components/BlogContentServer';

export const metadata = {
  title: 'All posts',
  description: 'The latest blog posts from Eric Allen.',
};

export default function Blog() {
  return (
    <main className="w-full mx-6 xl:mx-0">
      <BlogContentServer />;
    </main>
  );
}
