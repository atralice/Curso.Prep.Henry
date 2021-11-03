const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require ("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

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