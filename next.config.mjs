/** @type {import('next').NextConfig} */
const { version } = require("./package.json")
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    version,
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig
