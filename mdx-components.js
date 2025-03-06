import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components'
import { TOC } from './app/components/toc'
 
const defaultComponents = getNextraComponents({
  wrapper({ children, toc }) {
    return (
      <>
        <article className="px-12 max-w-none prose prose-pre:bg-rose-700 dark:prose-invert mb-6 mx-6 prose-img:rounded-xl p-8">
          {children}
        </article>
        <TOC toc={toc} />
      </>
    )
  },
  // Add custom components for specific markdown elements with auto-generated IDs
  h1: ({ children, id }) => <h1 id={id} className="text-5xl font-bold pt-6 mb-8">{children}</h1>,
  h2: ({ children, id }) => <h2 id={id} className="text-4xl font-semibold pt-8 mb-6">{children}</h2>,
  h3: ({ children, id }) => <h3 id={id} className="text-3xl font-semibold pt-6 mb-6">{children}</h3>,
  h4: ({ children, id }) => <h4 id={id} className="text-2xl font-medium pt-4 mb-2">{children}</h4>,
  h5: ({ children, id }) => <h5 id={id} className="text-xl font-semibold pt-3 mb-2">{children}</h5>,
  h6: ({ children, id }) => <h6 id={id} className="text-lg font-medium pt-2 mb-1">{children}</h6>,
  p: ({ children }) => <p className="mb-4">{children}</p>,
  a: ({ children, href }) => (
    <a href={href} className="text-blue-600 hover:underline">
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="list-disc list-inside ml-6 mb-4">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside ml-6 mb-4">{children}</ol>,
  li: ({ children }) => <li className="mb-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
  ),
  hr: () => <hr className="my-6 border-t" />,
  code: ({ children }) => (
    <code className="bg-green-500 text-blue-400 dark:bg-gray-800 rounded px-1 py-0.5">
      {children}
    </code>
  ),
  // Explicitly define pre component with the styling you want
  pre: ({ children }) => {
    return (
      <pre className="p-4 rounded-lg my-4 text-white">
        {children}
      </pre>
    );
  },
})

export const useMDXComponents = components => ({
  ...defaultComponents,
  ...components
})