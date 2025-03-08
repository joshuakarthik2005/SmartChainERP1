import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000/admin/.com",
  },
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/authentication',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;