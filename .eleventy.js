// Setup Packages
const pluginRss = require("@11ty/eleventy-plugin-rss");
const CleanCSS = require("clean-css");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {

  //Passthrough Copy Files
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy('./src/img/');

  // Add CleanCSS and Minify
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Define Markdown-it lib; allow code indentation by not parsing indention as code elements
  let markdownLibrary = markdownIt({ // docs: https://www.npmjs.com/package/markdown-it
    html: true,
  }).disable('code')

  eleventyConfig.setLibrary("md", markdownLibrary);

  // Template Config
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    
    // Set Input and Output
    dir: {
      input: 'src',
      output: '_site'
    }
  };
};

