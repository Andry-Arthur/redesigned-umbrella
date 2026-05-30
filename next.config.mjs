/** @type {import('next').NextConfig} */
const repoPath = "/redesigned-umbrella";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? repoPath : undefined,
  assetPrefix: isProduction ? repoPath : undefined,
};

export default nextConfig;
