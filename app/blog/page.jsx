import BlogContentServer from '../components/BlogContentServer';

export const metadata = {
  title: 'All posts',
  description: 'The latest blog posts from Eric Allen.',
};

export default function Blog() {
  return <BlogContentServer />;
}
