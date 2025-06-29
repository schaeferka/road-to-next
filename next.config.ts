import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@fonts": path.resolve(__dirname, "src/fonts"),
    };
    return config;
  },
};

export default nextConfig;
