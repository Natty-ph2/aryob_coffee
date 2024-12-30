import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Remote patterns for external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
    // Add the 'domains' property for remote images (alternative method)
    domains: ["images.unsplash.com", "upload.wikimedia.org"],
  },
};

export default nextConfig;
