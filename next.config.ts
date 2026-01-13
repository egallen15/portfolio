import nextra from 'nextra'

const withNextra = nextra({
  readingTime: true,
  defaultShowCopyCode: true,
  codeHighlight: true,
  staticImage: true,
  search: {
    codeblocks: true
  },
  mdxOptions: {
    format: 'detect',
    rehypePrettyCodeOptions: {
      theme: {
        dark: 'ayu-dark',
        light: 'github-light-high-contrast'
      },
      keepBackground: true,
      defaultLang: 'tsx'
    }
  }
})

export default withNextra({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tailwindcss.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
})
