import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  transpilePackages: ['@douyinfe/semi-ui', '@douyinfe/semi-icons']
};

export default nextConfig;
