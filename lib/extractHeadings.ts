import type { Heading } from 'nextra'

export function extractHeadingsFromDOM(): Heading[] {
  const headings: Heading[] = []
  
  // Query all heading elements in the article
  const headingElements = document.querySelectorAll('article h1, article h2, article h3, article h4, article h5, article h6')
  
  headingElements.forEach((element) => {
    const id = element.id
    const depth = parseInt(element.tagName.charAt(1)) as 2 | 3 | 4 | 5 | 6
    const value = element.textContent || ''
    
    if (id && value) {
      headings.push({
        id,
        depth,
        value
      })
    }
  })
  
  return headings
}