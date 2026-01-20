import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components'
import BlogPostHeader from './app/components/BlogPostHeader'
import AuthorBio from './app/components/AuthorBio'
import BlogNavigationServer from './app/components/BlogNavigationServer'
import TOCWrapper from './app/components/TOCWrapper'
import LightboxImage from './app/components/LightboxImage'
import CodeBlock from './app/components/CodeBlock'
 
const defaultComponents = getNextraComponents({
  wrapper({ children, ...allProps }) {
    // Nextra provides frontMatter as 'metadata' in App Router
    const frontMatter = allProps.metadata || {};
    
    // Clean development logging (remove this entirely when you're confident)
    if (process.env.NODE_ENV === 'development') {
      console.log('📝 Blog post loaded:', frontMatter.title);
    }
    
    return (
      <div className="relative w-full">
        {/* Main content centered on the page */}
        <div className='container flex mb-6 lg:mb-0 mx-auto max-w-[48rem] relative'>
          {/* TOC positioned absolutely within the container, aligned to left edge */}
          <div className="hidden lg:block absolute left-0 top-0 h-full pointer-events-none">
            <div className="sticky top-1/2 -translate-y-1/2 -translate-x-full xl:pr-56 lg:pr-16 pointer-events-auto">
              <TOCWrapper />
            </div>
          </div>
          
          {/* Blog content - centered within container */}
          <div className="flex flex-col justify-center w-full">
            <BlogPostHeader frontMatter={frontMatter} />
            <article className="w-auto prose lg:leading-[1.8] dark:prose-invert mb-6 mx-6 md:mx-0 prose-img:rounded-xl marker:text-sky-600 dark:marker:text-sky-400 font-[family-name:var(--font-noto-serif)]">
              {children}
            </article>
            <AuthorBio />
            {/* Blog navigation - always show for blog posts */}
            {frontMatter.slug && (
              <div className="max-w-[48rem] mx-6 lg:mx-0">
                <BlogNavigationServer currentSlug={frontMatter.slug} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  },
  // Add custom components for specific markdown elements with auto-generated IDs
  h1: ({ children, id }) => <h1 id={id} className="text-3xl text-foreground md:text-4xl font-bold pt-6 mb-6 md:mb-8">{children}</h1>,
  h2: ({ children, id }) => <h2 id={id} className="text-2xl text-foreground md:text-3xl font-semibold mb-4 md:mb-6">{children}</h2>,
  h3: ({ children, id }) => <h3 id={id} className="text-xl text-foreground md:text-2xl font-semibold mb-4 md:mb-6">{children}</h3>,
  h4: ({ children, id }) => <h4 id={id} className="text-lg text-foreground md:text-xl font-medium mb-1 md:mb-2">{children}</h4>,
  h5: ({ children, id }) => <h5 id={id} className="font-semibold text-foreground mb-2">{children}</h5>,
  h6: ({ children, id }) => <h6 id={id} className="text-md text-foreground font-medium mb-1">{children}</h6>,
  p: ({ children }) => <p className="lg:text-lg">{children}</p>,
  a: ({ children, href }) => (
    <a href={href} className="text-sky-600 underline">
      {children}
    </a>
  ),
  img: ({ src, alt, title, ...props }) => (
    <LightboxImage 
      src={src} 
      alt={alt} 
      title={title}
      width={1200}
      height={675}
      {...props}
    />
  ),
  ul: ({ children }) => <ul className="list-disc mb-4 lg:text-lg">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal mb-4 lg:text-lg">{children}</ol>,
  li: ({ children }) => <li className="mb-1 lg:text-lg">{children}</li>,
  input: ({ type, checked, ...props }) => {
    if (type === 'checkbox') {
      return (
        <span className="inline-flex items-center mr-2">
          <input 
            type="checkbox" 
            checked={checked}
            className="peer sr-only" 
            {...props} 
          />
          <span className="h-4 w-4 rounded border-2 border-gray-400 bg-white dark:bg-gray-800 dark:border-gray-600 peer-checked:bg-green-600 peer-checked:border-green-600 flex items-center justify-center [&>svg]:hidden peer-checked:[&>svg]:block">
            <svg className="w-3 h-3 text-white" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </span>
      )
    }
    return <input type={type} {...props} />
  },
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-sky-600 italic my-4">{children}</blockquote>
  ),
  hr: () => <hr className="my-9 border-t" />,
  // Custom pre component with copy button
  pre: (props) => <CodeBlock {...props} />,
})

export const useMDXComponents = components => ({
  ...defaultComponents,
  ...components
})