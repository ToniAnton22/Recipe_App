/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static2.abc.es",
        port: "",
        pathname: "/image/upload/**",
      },
    ],
  },
}

module.exports = nextConfig
