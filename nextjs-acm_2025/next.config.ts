import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  basePath: '/ACM_Website_2025',
  output: 'export'
};

export default nextConfig;
