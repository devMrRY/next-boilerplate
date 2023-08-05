/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    amp: {
      skipValidation: true,
    }
  },
  // use this to disable filesystem based routes when using custom server
  // useFileSystemPublicRoutes: false,
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
    loader: "custom",
    loaderFile: "./components/my-image-loader.tsx",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placekitten.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'codeskulptor-assets.commondatastorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
