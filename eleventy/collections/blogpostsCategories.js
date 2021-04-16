const getCollectionCategories = require("../libs/getCollectionCategories.js");

module.exports = (collection) => {
  const blogposts = collection.getFilteredByGlob(
    "./src/content/blogposts/*.md"
  );
  return getCollectionCategories(blogposts);
};
