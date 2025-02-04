/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    // Add other image domains as needed
  },
  async rewrites() {
    return [
      // Foundation for course subdomain routing
      {
        source: '/course/:path*',
        destination: 'https://course.azimov.site/:path*',
      },
    ]
  },
}

module.exports = nextConfig