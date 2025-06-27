/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // optional extras
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
