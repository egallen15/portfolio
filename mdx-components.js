import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components'
import { TOC } from './app/components/toc'
 
const defaultComponents = getNextraComponents({
  wrapper({ children, toc }) {
    return (
      <>
        <article className="mx-8 prose prose-slate dark:prose-invert mb-6 max-w-none prose-pre:bg-gray-800 prose-pre:p-4 prose-img:rounded-xl">
          {children}
        </article>
        <TOC toc={toc} />
      </>
    )
  },
  // Add custom components for specific markdown elements
  h1: ({ children }) => <h1 className="text-4xl font-bold pt-6 mb-8">{children}</h1>,
  h2: ({ children }) => <h2 className="text-3xl font-semibold pt-8 mb-4">{children}</h2>,
  a: ({ children, href }) => (
    <a href={href} className="text-blue-600 hover:text-blue-800 hover:underline">
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5">
      {children}
    </code>
  ),
})

export const useMDXComponents = components => ({
  ...defaultComponents,
  ...components
})