/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/lost-keepers",
  assetPrefix: "/lost-keepers",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: "export",
};

module.exports = nextConfig;
