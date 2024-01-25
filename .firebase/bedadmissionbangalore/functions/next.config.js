// next.config.js
const path = require("path");

module.exports = {
  reactStrictMode: true,
  distDir: "build", // Customize the output directory for the production build

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add your custom webpack configurations here
    config.module.rules.push({
      test: /\.svg$/, // Example: Add a loader for SVG files
      use: ["@svgr/webpack"],
    });

    return config;
  },

  // Additional custom configuration options can be added here
  // For more options, check the Next.js documentation: https://nextjs.org/docs/api-reference/next.config.js/introduction

  // You can also use plugins like the next-compose-plugins to organize your configuration in a modular way
  // Example: npm install next-compose-plugins
  // Example:
  // const withPlugins = require('next-compose-plugins');
  // module.exports = withPlugins([/* your plugins here */]);

  // Note: By default, Next.js handles the build process for you, and you might not need to write a separate build script.
};
