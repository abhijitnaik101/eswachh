/** @type {import('next').NextConfig} */
const webpack = require('webpack');


const nextConfig = {
  rewrites: async () => [
    {
      source: "/public/myfile.html",
      destination: "/pages/api/myfile.js",
    },
  ],
  reactStrictMode: true,

  webpack: config => {
    // Optional: Enables reading mapbox token from environment variable
    config.plugins.push(new webpack.EnvironmentPlugin({ MapboxAccessToken: '' }));
    return config;
  }
}

module.exports = nextConfig
