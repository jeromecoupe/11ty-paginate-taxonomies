const chunkCollectionByKey = require("../libs/chunkCollectionByKey.js");

// number of items you want per page
// if that value is not passed, it will default to 10
const ITEMS_PER_PAGE = 2;

module.exports = function (collection) {
  // target collection
  let blogposts = collection.getFilteredByGlob("./src/content/blogposts/*.md");

  // paginated collection by categories
  return chunkCollectionByKey(blogposts, "themes", ITEMS_PER_PAGE);
};
