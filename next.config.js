/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.rcstatic.com",
      },
    ],
  },
};

module.exports = nextConfig;
