import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/Vrindavan-Resorts",
  assetPrefix: "/Vrindavan-Resorts/",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
