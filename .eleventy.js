module.exports = function (eleventyConfig) {
  // blogposts collection
  eleventyConfig.addCollection(
    "blogposts",
    require("./src/_11ty/collections/blogposts.js")
  );

  // blogposts unique categories
  eleventyConfig.addCollection(
    "blogCategories",
    require("./src/_11ty/collections/blogpostsCategories.js")
  );

  // blogposts by categories
  eleventyConfig.addCollection(
    "blogpostsByCategories",
    require("./src/_11ty/collections/blogpostsByCategories.js")
  );

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
