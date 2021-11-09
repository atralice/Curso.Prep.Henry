const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const readingTime = require("eleventy-plugin-reading-time");
const pluginTOC = require("eleventy-plugin-toc");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItHighlightJS = require("markdown-it-highlightjs");
const readerBar = require("eleventy-plugin-reader-bar");

const toBootstrapNav = require('eleventy-navigation-bootstrap')

const mdOptions = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
};

const mdAnchorOpts = {
  permalink: true,
  permalinkClass: "anchor-link",
  permalinkSymbol: "",
  level: [1, 2, 3, 4],
};

module.exports = function (eleventyConfig) {

  eleventyConfig.setLibrary(
    "md",
    markdownIt(mdOptions)
      .use(markdownItAnchor, mdAnchorOpts)
      .use(markdownItHighlightJS)
  );

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(readerBar);

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginTOC);

  eleventyConfig.addPassthroughCopy("_src/styles");
  eleventyConfig.addPassthroughCopy("_src/assets");

  eleventyConfig.addNunjucksFilter('bootstrapNav', toBootstrapNav)


  return {
    dir: {
      includes: "/_src/layouts",
      data: "/_src/data",
      output: "_dist",
    },
  };
};
