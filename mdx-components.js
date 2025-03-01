import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components'
import { TOC } from './app/components/toc'
import React from 'react'

// Helper function to generate id from heading children
const slugify = (children) => {
  const text = React.Children.toArray(children).reduce((acc, child) =>
    typeof child === 'string' ? acc + child : acc, '')
  return text.toLowerCase().replace(/\s+/g, '-')
}

const defaultComponents = getNextraComponents({
  wrapper({ children, toc }) {
    return (
      <>
        <article className="mx-auto px-12 sm:max-w-xs md:max-w-md lg:max-w-7xl xl:max-w-7xl prose prose-slate dark:prose-invert mb-6 prose-pre:bg-lime-800 prose-pre:p-4 prose-img:rounded-xl p-8">
          {children}
        </article>
        <TOC toc={toc} />
      </>
    )
  },
  // Updated heading components with id attribute
  h1: ({ children }) => <h1 id={slugify(children)} className="text-4xl font-bold pt-6 mb-8">{children}</h1>,
  h2: ({ children }) => <h2 id={slugify(children)} className="text-3xl font-semibold pt-8 mb-4">{children}</h2>,
  h3: ({ children }) => <h3 id={slugify(children)} className="text-2xl font-semibold pt-6 mb-3">{children}</h3>,
  h4: ({ children }) => <h4 id={slugify(children)} className="text-xl font-medium pt-4 mb-2">{children}</h4>,
  h5: ({ children }) => <h5 id={slugify(children)} className="text-lg font-semibold pt-3 mb-2">{children}</h5>,
  h6: ({ children }) => <h6 id={slugify(children)} className="text-base font-medium pt-2 mb-1">{children}</h6>,
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
    <code className="bg-gray-100 dark:bg-lime-900 rounded px-1 py-0.5">
      {children}
    </code>
  ),
})

export const useMDXComponents = components => ({
  ...defaultComponents,
  ...components
})