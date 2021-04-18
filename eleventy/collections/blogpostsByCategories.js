const getCollectionCategories = require("../libs/getCollectionCategories.js");
const paginateCollectionCategories = require("../libs/paginateCollectionByCategories");

module.exports = function (collection) {
  // number of items per page
  const itemsPerPage = 2;
  // target collection
  const blogposts = collection.getFilteredByGlob(
    "./src/content/blogposts/*.md"
  );
  // categories in tragetted collection
  const blogpostsCategories = getCollectionCategories(blogposts);
  // paginated collection
  return paginateCollectionCategories(
    blogposts,
    blogpostsCategories,
    itemsPerPage
  );
};
