/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'onbegrensd-backend.fly.dev',
        port: '',
        pathname: '/api/files/**',
      },
    ],
  },
}

module.exports = nextConfig
