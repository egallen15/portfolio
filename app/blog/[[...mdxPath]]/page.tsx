import { getPageMap } from 'nextra/page-map'
import { normalizePages } from 'nextra/normalize-pages'
import { importPage } from 'nextra/pages'
import Link from 'next/link'
import { useMDXComponents as getMDXComponents } from '../../../mdx-components'
import BlogContentServer from '../../components/BlogContentServer'
import Breadcrumb from '../../components/Breadcrumb'

export async function generateStaticParams() {
  const normalized = normalizePages({
    list: await getPageMap('/blog'),
    route: '/blog'
  })

  const entries = [
    ...((normalized as { pages?: typeof normalized.directories }).pages ?? []),
    ...normalized.directories
  ]

  return entries
    .filter(post => post.name !== 'index')
    .map(post => ({ mdxPath: [post.name] }))
}

export async function generateMetadata(props: {
  params: Promise<{ mdxPath?: string[] }>
}) {
  const params = await props.params
  if (!params.mdxPath || params.mdxPath.length === 0) {
    return {
      title: 'blog',
      description: 'The latest blog posts from Eric Allen.'
    }
  }
  const { metadata } = await importPage(['blog', ...params.mdxPath])
  return metadata
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props: {
  params: Promise<{ mdxPath?: string[] }>
}) {
  const params = await props.params
  if (!params.mdxPath || params.mdxPath.length === 0) {
    return (
      <main className="w-full mx-6 mb-6 max-w-3xl xl:mx-0">
        <Breadcrumb pages={[{ name: 'blog', href: '/blog', current: true }]} />
        <BlogContentServer
          rssButton={
            <Link
              href="/feed.xml"
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe to RSS feed"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
              </svg>
              RSS
            </Link>
          }
          layout="row"
          gridGapClassName="gap-2"
        />
      </main>
    )
  }
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage([
    'blog',
    ...params.mdxPath
  ])

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}