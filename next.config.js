/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["@swc-jotai/react-refresh", {}]],
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
