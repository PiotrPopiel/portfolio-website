/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "via.placeholder.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;

// http://via.placeholder.com/400
