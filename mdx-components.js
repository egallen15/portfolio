import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components'
import { TOC } from './app/components/toc'
 
const defaultComponents = getNextraComponents({
  wrapper({ children, toc }) {
    return (
      <>
        <div className="flex-grow p-5">{children}</div>
        <TOC toc={toc} />
      </>
    )
  }
})
 
export const useMDXComponents = components => ({
  ...defaultComponents,
  ...components
})