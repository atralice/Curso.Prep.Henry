const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("_src/styles");
  eleventyConfig.addPassthroughCopy("_src/assets");

      return {
        dir: {
          includes: "/_src/layouts",
          data: "/_src/data",
          output: "_dist",
        },
      };
    };