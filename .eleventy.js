module.exports = function (eleventyConfig) {
  // blogposts collection
  eleventyConfig.addCollection(
    "blogposts",
    require("./src/_11ty/collections/blogposts.js")
  );

  // blogposts unique categories
  eleventyConfig.addCollection(
    "blogpostsCategories",
    require("./src/_11ty/collections/blogpostsCategories.js")
  );

  // blogposts unique themes
  eleventyConfig.addCollection(
    "blogpostsThemes",
    require("./src/_11ty/collections/blogpostsThemes.js")
  );

  // blogposts by categories
  eleventyConfig.addCollection(
    "blogpostsByCategories",
    require("./src/_11ty/collections/blogpostsByCategories.js")
  );

  // blogposts by categories
  eleventyConfig.addCollection(
    "blogpostsByThemes",
    require("./src/_11ty/collections/blogpostsByThemes.js")
  );

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
