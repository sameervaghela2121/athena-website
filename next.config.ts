import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: false,
  trailingSlash: true,
  env: {
    NEXT_HOST_URL: process.env.NEXT_HOST_URL,
    NEXT_PUBLIC_APP_URL: "https://athena-uat.demotrt.com",
  },
  images: { unoptimized: true },
};

export default nextConfig;
