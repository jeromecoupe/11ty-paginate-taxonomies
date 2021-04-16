const getCollectionCategories = require("../libs/getCollectionCategories.js");
const paginateCollectionCategories = require("../libs/paginateCollectionCategories");

module.exports = function (collection) {
  // number of items per page
  const itemsPerPage = 2;
  const blogposts = collection.getFilteredByGlob(
    "./src/content/blogposts/*.md"
  );
  const blogpostsCategories = getCollectionCategories(blogposts);
  return paginateCollectionCategories(
    blogposts,
    blogpostsCategories,
    itemsPerPage
  );
};
