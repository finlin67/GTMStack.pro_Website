const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const baseConfig = {
  distDir: '.next',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: true,
  },
  allowedDevOrigins: [
    '*.replit.dev',
    '*.repl.co',
    '*.kirk.replit.dev',
    'localhost:5000',
    '127.0.0.1:5000',
  ],
}

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const distDir = isDev ? '.next' : 'out'
  const config = {
    ...baseConfig,
    distDir,
  }
  if (!isDev) {
    config.output = 'export'
  }
  return withMDX(config)
}

