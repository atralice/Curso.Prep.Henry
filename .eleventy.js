module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("_src/styles");
  eleventyConfig.addPassthroughCopy("_src/assets");
  // eleventyConfig.addPassthroughCopy("logo.png");
  // eleventyConfig.addPassthroughCopy("00-PrimerosPasos/img/");

      return {
        dir: {
          includes: "/_src/layouts",
          data: "/_src/data",
          output: "_dist",
        },
      };
    };