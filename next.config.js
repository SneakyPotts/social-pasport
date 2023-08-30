/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },

  images: {
    domains: ['vumbnail.com', 'api.cosmotoria.com', 'api.cosmotoria.staj.bid'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vumbnail.com/**',
      },
      {
        protocol: 'https',
        hostname: 'api.cosmotoria.com',
        pathname: 'uploads',
      },
      {
        protocol: 'https',
        hostname: 'api.cosmotoria.staj.bid',
        pathname: 'uploads',
      },
    ],
  },
  reactStrictMode: true,
}
