import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  devIndicators: {},
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
