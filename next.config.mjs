/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/prices",
        destination: "/api/prices",
      },
    ];
  },
};

export default nextConfig;
