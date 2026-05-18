import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async headers() {
    return [
      {
        source: '/:path*',
        missing: [
          {
            type: 'header',
            key: 'host',
            value: 'quiq-main.vercel.app',
          },
        ],
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      ['remark-frontmatter'],
      ['remark-mdx-frontmatter'],
    ],
  },
})

export default withMDX(nextConfig)
