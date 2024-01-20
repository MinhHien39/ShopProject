/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
      // Modify the `config` object here
      config.watchOptions = {
          poll: 1000,
          aggregateTimeout: 300,
      };

      // Important: return the modified config
      return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://localhost:7026/api/:path*", // Replace with your .NET 8 API domain
      },
    ];
  },
};