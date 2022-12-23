// Setup Packages
const pluginRss = require("@11ty/eleventy-plugin-rss");
const CleanCSS = require("clean-css");
const markdownIt = require("markdown-it");
const markdownItContainer = require("markdown-it-container");
const markdownItFootnote = require("markdown-it-footnote");

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

  // Markdown-it footnote plugin
  .use(markdownItFootnote)
  
  // Markdown-it container plugin
  .use( require('markdown-it-container'), '', { // Can add wrapping containers with IDs and Classes, and nest them - docs: https://github.com/markdown-it/markdown-it-container - and some help via: https://ryan.thaut.me/blog/2020/04/25/flirting-with-eleventy-11ty/
    validate: () => true,
    render: (tokens, idx) => {
        if (tokens[idx].nesting === 1) {
            const classList = tokens[idx].info.trim()
            return `<div ${classList && `class="${classList}"`}>`;
        } else {
            return `</div>`;
        }
    }
  });

  eleventyConfig.addPlugin(pluginRss);
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

