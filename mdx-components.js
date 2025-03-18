import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components'
import { TOC } from './app/components/toc'
import BlogPostHeader from './app/components/BlogPostHeader'
import Link from 'next/link'
 
const defaultComponents = getNextraComponents({
  wrapper({ children, toc }) {
    // Extract frontMatter from children.props
    const frontMatter = children?.props?.frontMatter || {};
    return (
      <div className='container flex flex-col justify-center max-w-7xl mx-auto'>
          <Link href="/blog" className='self-start ml-4'>
            <button className="font-bold py-2 px-4 rounded-full items-stretch hover:bg-gray-100 dark:hover:bg-gray-800">
              Back to All Posts
            </button>
          </Link>
        <BlogPostHeader frontMatter={frontMatter} />
        <div className="container flex justify-center mx-auto">
          <article className="container prose dark:prose-invert mb-6 mx-auto lg:mx-6 prose-img:rounded-xl p-6">
            {children}
          </article>
          <TOC toc={toc} />
        </div>
      </div>
    )
  },
  // Add custom components for specific markdown elements with auto-generated IDs
  h1: ({ children, id }) => <h1 id={id} className="text-5xl font-bold pt-6 mb-8">{children}</h1>,
  h2: ({ children, id }) => <h2 id={id} className="text-4xl font-semibold pt-8 mb-6">{children}</h2>,
  h3: ({ children, id }) => <h3 id={id} className="text-2xl font-semibold pt-6 mb-6">{children}</h3>,
  h4: ({ children, id }) => <h4 id={id} className="text-xl font-medium pt-4 mb-2">{children}</h4>,
  h5: ({ children, id }) => <h5 id={id} className="text-lg font-semibold pt-3 mb-2">{children}</h5>,
  h6: ({ children, id }) => <h6 id={id} className="text-md font-medium pt-2 mb-1">{children}</h6>,
  // p: ({ children }) => <p className="mb-4">{children}</p>,
  // a: ({ children, href }) => (
  //   <a href={href} className="text-blue-600 hover:underline">
  //     {children}
  //   </a>
  // ),
  // ul: ({ children }) => <ul className="list-disc list-inside ml-6 mb-4">{children}</ul>,
  // ol: ({ children }) => <ol className="list-decimal list-inside ml-6 mb-4">{children}</ol>,
  // li: ({ children }) => <li className="mb-1">{children}</li>,
  // blockquote: ({ children }) => (
  //   <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
  // ),
  // hr: () => <hr className="my-6 border-t" />,
  // code: ({ children }) => (
  //   <code className="rounded bg-gray-600 px-2 py-1">
  //     {children}
  //   </code>
  // ),
  // // Explicitly define pre component with the styling you want
  pre: ({ children }) => {
    return (
      <pre className="p-4 rounded-lg my-4 overflow-x-auto">
      {children}
      </pre>
    );
  },
})

export const useMDXComponents = components => ({
  ...defaultComponents,
  ...components
})