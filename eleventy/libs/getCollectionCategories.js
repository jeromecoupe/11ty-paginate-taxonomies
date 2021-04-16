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
  return uniqueCategories;
};
