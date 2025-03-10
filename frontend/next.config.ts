import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_BACKEND_URL || "https://smartchainerp1-7v1x.onrender.com",
  },
  output: 'export',
  redirects: async () => {
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