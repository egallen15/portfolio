import BlogContentServer from '../components/BlogContentServer';

export const metadata = {
  title: 'Blog Index',
  description: 'The latest blog posts from our site.',
};

export default function Blog() {
  return <BlogContentServer />;
}
