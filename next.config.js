/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com','puem.tech'],
    unoptimized: true,
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },

}

module.exports = nextConfig
