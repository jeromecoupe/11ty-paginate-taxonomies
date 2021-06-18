module.exports = (collection) => {
  return collection.getFilteredByGlob("./src/content/blogposts/*.md");
};
