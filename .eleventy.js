// Setup Packages
const pluginRss = require("@11ty/eleventy-plugin-rss");
const CleanCSS = require("clean-css");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {

  //Passthrough Copy Files
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy('./src/img/');
  eleventyConfig.addPassthroughCopy('./src/.htaccess');
  eleventyConfig.addPassthroughCopy('./src/humans.txt');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPassthroughCopy('./src/keybase.txt');

  // Add CleanCSS and Minify
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Define Markdown-it lib; allow code indentation by not parsing indention as code elements
  let markdownLibrary = markdownIt({ // docs: https://www.npmjs.com/package/markdown-it
    html: true,
    typographer: true,
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

