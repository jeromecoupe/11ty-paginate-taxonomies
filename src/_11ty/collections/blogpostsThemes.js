const getCollectionKeyValues = require("../libs/getCollectionKeyValues.js");

module.exports = (collection) => {
  // target collection
  let blogposts = collection.getFilteredByGlob("./src/content/blogposts/*.md");

  // get unique categories from target collection
  return getCollectionKeyValues(blogposts, "themes");
};
