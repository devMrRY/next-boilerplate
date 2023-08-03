/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'codeskulptor-assets.commondatastorage.googleapis.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
}

module.exports = nextConfig
