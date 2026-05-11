/** @type {import('next').NextConfig} */
// Configuration for Static Site Generation (SSG) export
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
