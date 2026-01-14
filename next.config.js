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
  // IMPORTANT: isolate dev output from prod build output so running `next build`
  // doesn't clobber the `.next` artifacts used by `next dev` (notably server/vendor-chunks).
  distDir: '.next',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Enable static export and disable image optimization so assets emit as plain files.
  output: 'export',
  images: {
    // TEMP: allow local SVG placeholders to render via next/image (used for fast proof).
    // See: https://nextjs.org/docs/messages/next-image-unconfigured-host
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
}

module.exports = (phase) => {
  // Keep dev on the default `.next` (most stable on Windows),
  // and isolate production builds to a separate folder so `next build`
  // can't clobber a running `next dev` instance.
  const distDir = phase === PHASE_DEVELOPMENT_SERVER ? '.next' : 'out'
  return withMDX({ ...baseConfig, distDir })
}

