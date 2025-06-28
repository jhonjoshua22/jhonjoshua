// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 🚫 Skip TS errors in build
  },
  eslint: {
    ignoreDuringBuilds: true, // 🚫 Skip lint errors in build
  },
};

module.exports = nextConfig;
