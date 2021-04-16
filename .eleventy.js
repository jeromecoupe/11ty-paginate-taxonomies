module.exports = function (eleventyConfig) {
  // blogposts collection
  eleventyConfig.addCollection(
    "blogposts",
    require("./eleventy/collections/blogposts.js")
  );

  // blogposts unique categories
  eleventyConfig.addCollection(
    "blogCategories",
    require("./eleventy/collections/blogpostsCategories.js")
  );

  // blogposts by categories
  eleventyConfig.addCollection(
    "blogpostsByCategories",
    require("./eleventy/collections/blogpostsByCategories.js")
  );

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
