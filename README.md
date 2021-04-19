# Paginate categories with Eleventy

This uses Eleventy to:

1. create a collection using a custom `categories` taxonomy
2. create a collection of all unique categories used throughout that collection
3. create a new collection of each categories and the posts belonging to it using [Zach's method](https://github.com/11ty/eleventy/issues/332#issuecomment-445236776)

That new collection can then be paginated using `pagination` with a size of `1` to create paginated lists of items in each category.

The sample code uses a `blogposts` collection as an example.

## Installation

- run `npm install`
- run `npm build` to build pages
- run `npm watch` for local development

## Documentation

### Get collection categories

- `./eleventy/libs/getCollectionCategories.js` is responsible for returning an array of all unique `categories` values used in the front-matter of the targetted collection.

#### Parameters

- `collection`: the actual collection of items you want to extract an array of unique categories from. This collection can be defined as usual, using `tags` or other methods like `getFilteredByGlob()`.

#### Returns

Returns an array of objects. Each of the returned objects contains a `title`, a `slug` and an `itemsNumber` keys.

- `title`: title of the category as specified in the front-matter
- `slug`: slug of the category
- `itemsNumber` number of items in the category

### Paginate collection category

- `./eleventy/libs/getCollectionCategories.js` is responsible for creating a new collection of items using categories as keys that can be paginated.

#### Parameters

- `collection`: : the collection of items you want to create a new collection from using categories as keys. That new collection can be paginated using an Eleventy `pagination` with a size of `1.
- `collectionCategories`: the array of unique values for the `categories`values in the front matter of the targetted collection.
- `itemsPerPage`: the number of items you want on each paginated pages.

#### Returns

Returns an array of objects. Each object is a page of results

- `title`: category,
- `slug`: slug,
- `currentPage`: the current page in the pagination,
- `totalItems`: the total number of paginated items,
- `totalPages`: the total number of pages,
- `items`: the items on the current page,
- `hrefs`
  - `all`: all pagination hrefs in order,
  - `first`: first href,
  - `last`: last href,
  - `next`: next href,
  - `previous`: previous href,
