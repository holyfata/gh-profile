import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "local-origin.dev",
    "*.local-origin.dev",
    "22.100.247.171.dev",
  ],
  transpilePackages: ["@douyinfe/semi-icons"],
};

export default nextConfig;
