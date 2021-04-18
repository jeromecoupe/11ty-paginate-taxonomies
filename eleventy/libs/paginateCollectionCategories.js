const lodash = require("lodash");

/**
 * Formats the chunked items per category
 * @param {*} items
 * @param {*} index
 * @param {*} postsInCategory
 * @param {*} itemsPerPage number of items per category page
 * @returns {Array}
 *
 * Returned data looks like this
 * - itemsPerPage is 2
 * - there are 2 items in the travel category
 * - there are 3 items in the code category
 *
 * [{
 *		name: "travel",
 *		currentPage: 1,
 *    totalItems: 2,
 *    totalPages: 1,
 *		items: [{ Object }, { Object }]
 *	},
 *  {
 *		name: "code",
 *		currentPage: 1,
 *    totalItems: 3,
 *    totalPages: 2,
 *		pageData: [{ Object }, { Object }]
 *	},
 *  {
 *		name: "code",
 *		currentPage: 2,
 *    totalItems: 3,
 *    totalPages: 2,
 *		pageData: [{ Object }]
 *	}]
 */
const formatCategory = (category, items, index, postsInCat, pageSize) => {
  return {
    name: category,
    currentPage: index + 1,
    totalItems: postsInCat.length,
    totalPages: Math.ceil(postsInCat.length / pageSize),
    items: items,
  };
};

/**
 * Returns a chunked array of objects representing
 * categories with posts in each object
 * @param {*} collection the collection to use
 * @param {*} collectionCategories the unique categories in that collection
 * @param {*} itemsPerPage the number of items you want per page
 * @returns
 */
module.exports = (collection, collectionCategories, itemsPerPage) => {
  // create empty array
  const paginatedCollectionByCategories = [];

  // walk unique categories
  collectionCategories.forEach((category) => {
    // get posts in category
    const postsInCategory = collection.filter((item) =>
      item.data.categories.includes(category)
    );

    // chunk posts in category
    const chunckedCollection = lodash.chunk(postsInCategory, itemsPerPage);

    // add formatted objects to empty array
    chunckedCollection.forEach((items, index) => {
      paginatedCollectionByCategories.push(
        formatCategory(category, items, index, postsInCategory, itemsPerPage)
      );
    });
  });

  // return array of objects
  return paginatedCollectionByCategories;
};
