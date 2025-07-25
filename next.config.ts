import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://cdn.cosmicjs.com/**')],
  },
};

export default nextConfig;
