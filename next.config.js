/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    "baseUrl": ".",
    "paths": {
      "@/styles/*": ["styles/*"],
      "@/components/*": ["components/*"]
    }
  },
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
