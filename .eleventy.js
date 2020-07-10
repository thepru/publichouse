// Setup Packages
const pluginRss = require("@11ty/eleventy-plugin-rss");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {

  //Passthrough Copy Files
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy('./src/img/');

  // Add CleanCSS and Minify
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  
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

