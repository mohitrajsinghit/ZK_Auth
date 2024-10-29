// config-overrides.js
const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "fs": false,
    "util": require.resolve("util/"),
    "path": require.resolve("path-browserify")
  };
  return config;
};
