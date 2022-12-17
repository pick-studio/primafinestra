/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: "experimental-edge",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "http",
        hostname: "videos.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "videos.ctfassets.net",
      },
    ],
  },
};

module.exports = nextConfig;