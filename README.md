# Paginate categories with Eleventy

This uses Eleventy to:

1. create a collection using a custom `categories` taxonomy
2. create a collection of all unique categories used throughout that collection
3. create a new collection of each categories and the posts belonging to it using [Zach's method](https://github.com/11ty/eleventy/issues/332#issuecomment-445236776)
4. That new collection can then be paginated using `pagination` with a size of `1` to create paginated lists of items in each category.

The sample code uses a `blogposts` collection as an example.

## Documentation

### Get collection categories

`./eleventy/libs/getCollectionCategories.js`: is responsible for returning an array of all unique `categories` values used in the front-matter of the targetted collection.

#### Parameters

- `collection`: the actual collection of items you want to extract an array of unique categories from. This collection can be defined as usual, using `tags` or other methods like `getFilteredByGlob()`.

#### Returned array of objects

- returns an array of objects. Each of the returned objects contains a `title` and an `itemsNumber` keys. `title` is the title of the category as specified in the front-matter, while `itemsNumber` returns the umber of items in each category.

### Paginate collection category

- `./eleventy/libs/getCollectionCategories.js`: is responsible for creating a new collection of items using categories as keys that can be paginated.

#### Parameters

`collection`: : the collection of items you want to create a new collection from using categories as keys. That new collection can be paginated using an Eleventy `pagination` with a size of `1. `collectionCategories`: the array of unique values for the `categories`values in the front matter of the targetted collection.`itemsPerPage`: the number of items you want on each paginated pages.

#### Returned array of objects

- `title`: category,
- `currentPage`: the current page in the pagination,
- `totalItems`: the total number of paginated items,
- `totalPages`: the total number of pages,
- `items`: the items on the current page,
