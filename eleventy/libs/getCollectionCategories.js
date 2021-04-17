/**
 * Returns array of categories for passed collection
 * @param {Array} collection
 * @returns {Array} categories
 */

module.exports = (collection) => {
  const collectionCategories = collection
    .flatMap((item) => item.data.categories)
    .sort((a, b) => {
      a.localeCompare(b);
    });
  const uniqueCategories = [...new Set(collectionCategories)];
  const categories = uniqueCategories.map((category) => {
    const postsInCategory = collection.filter((item) =>
      item.data.categories.includes(category)
    );
    return {
      title: category,
      totalItems: postsInCategory.length,
    };
  });
  return categories;
};
