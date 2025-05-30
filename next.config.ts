import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tazawod.valureach.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
