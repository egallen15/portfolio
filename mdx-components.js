import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components'
import BlogPostHeader from './app/components/BlogPostHeader'
import AuthorBio from './app/components/AuthorBio'
import BlogNavigationServer from './app/components/BlogNavigationServer'
import Image from 'next/image'
 
const defaultComponents = getNextraComponents({
  wrapper({ children, ...allProps }) {
    // Nextra provides frontMatter as 'metadata' in App Router
    const frontMatter = allProps.metadata || {};
    
    // Clean development logging (remove this entirely when you're confident)
    if (process.env.NODE_ENV === 'development') {
      console.log('📝 Blog post loaded:', frontMatter.title);
    }
    
    return (
      <div className='container flex flex-col justify-center mb-6 lg:mb-0 mx-auto'>
        <div className="container flex flex-col lg:flex-row justify-center">
          <div className="w-auto max-w-[48rem]">
            <BlogPostHeader frontMatter={frontMatter} />
            <article className="w-auto prose leading-relaxed dark:prose-invert mb-6 mx-6 lg:mx-0 prose-img:rounded-xl marker:text-sky-600 dark:marker:text-sky-400">
              {children}
            </article>
            {/* Blog navigation - always show for blog posts */}
            {frontMatter.slug && (
              <div className="mx-6 lg:mx-auto">
                <BlogNavigationServer currentSlug={frontMatter.slug} />
              </div>
            )}
            <AuthorBio />
          </div>
        </div>
      </div>
    )
  },
  // Add custom components for specific markdown elements with auto-generated IDs
  h1: ({ children, id }) => <h1 id={id} className="text-3xl text-foreground md:text-4xl font-bold pt-6 mb-8">{children}</h1>,
  h2: ({ children, id }) => <h2 id={id} className="text-2xl text-foreground md:text-3xl font-semibold mb-6">{children}</h2>,
  h3: ({ children, id }) => <h3 id={id} className="text-xl text-foreground md:text-2xl font-semibold mb-6">{children}</h3>,
  h4: ({ children, id }) => <h4 id={id} className="text-lg text-foreground md:text-xl font-medium mb-2">{children}</h4>,
  h5: ({ children, id }) => <h5 id={id} className="font-semibold text-foreground mb-2">{children}</h5>,
  h6: ({ children, id }) => <h6 id={id} className="text-md text-foreground font-medium mb-1">{children}</h6>,
  // p: ({ children }) => <p className="mb-4">{children}</p>,
  a: ({ children, href }) => (
    <a href={href} className="text-sky-600 underline">
      {children}
    </a>
  ),
  img: ({ src, alt, title, ...props }) => (
    <Image 
      src={src} 
      alt={alt} 
      title={title}
      width={768} // Default width, adjust as needed
      height={300} // Default height, adjust as needed
      className="rounded-xl my-4"
      {...props}
    />
  ),
  // ul: ({ children }) => <ul className="list-disc list-inside ml-6 mb-4">{children}</ul>,
  // ol: ({ children }) => <ol className="list-decimal list-inside ml-6 mb-4">{children}</ol>,
  // li: ({ children }) => <li className="mb-1">{children}</li>,
  // blockquote: ({ children }) => (
  //   <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
  // ),
  hr: () => <hr className="my-9 border-t" />,
  code: ({ children }) => (
    <code className="rounded bg-slate-200 text-slate-900 dark:text-slate-100 dark:bg-slate-800 py-1 text-sm font-mono before:content-[''] after:content-[''] [pre_&]:bg-slate-900 dark:[pre_&]:bg-slate-900 [pre_&]:px-0 [pre_&]:text-slate-100 [pre_&]:py-0 [pre_&]:rounded-none">
      {children}
    </code>
  ),
  // // Explicitly define pre component with the styling you want
  pre: ({ children }) => {
    return (
      <pre className="p-4 rounded-lg my-8 overflow-x-auto w-full min-w-0 max-w-[calc(100vw-3rem)] sm:max-w-full whitespace-pre bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700">
        <code className="text-slate-100 ">
          {children}
        </code>
      </pre>
    );
  },
})

export const useMDXComponents = components => ({
  ...defaultComponents,
  ...components
})