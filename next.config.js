/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "**",
        port: "3000",
        protocol: "http",
      },
      {
        hostname: "digitalsafari-production.up.railway.app",
        pathname: "**",
        port: "*",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
