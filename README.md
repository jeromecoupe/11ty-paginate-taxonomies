# Paginate taxonomies with Eleventy

This demo uses Eleventy to:

1. create a collection using custom `categories` and `themes` taxonomies
2. create a collection of all unique `categories` and `themes` values used throughout a `blogposts` collection
3. create a new 2D array of items based on [Zach's method](https://github.com/11ty/eleventy/issues/332#issuecomment-445236776)

That 2D array of chunked collection items can then be paginated using `pagination` with a size of `1` to create paginated lists of items in each category and theme.

The demo code uses a `blogposts` collection as an example.

## Installation

- run `npm install`
- run `npm build` to build pages
- run `npm dev` for local development

## Documentation

### Get collection unique key values

- `./eleventy/libs/getCollectionKeyValues.js` is responsible for returning an array of all unique key values used in the front-matter of the target collection. In this demo, "categories" and "themes" are used as keys for which to find unique values.

#### Parameters

- `collection`: the actual collection of items you want to extract an array of unique values from. This collection can be defined as usual, using `tags` or other methods like `getFilteredByGlob()`.
- `key` - the key for which we need unique values. In this case we pass "categories" and "themes" as keys.

#### Returns

Returns an array of objects. Each of the returned objects contains a `title`, a `slug` and an `itemsNumber` keys.

- `title`: value
- `slug`: slugified value (used for URLs)
- `itemsNumber`: number of items in the collection that include the value for the passed key

### Paginate collection category

- `./eleventy/libs/getCollectionByKey.js` is responsible for transforming the passed collection into a 2D array of chunked collection items. That 2D array of chunked collection items can then be used to create paginated "categories" and "themes" pages.

#### Parameters

- `collection`: the target collection from which the new 2D array of chunked items will be created. That new array can be paginated using an Eleventy `pagination` with a size of `1`.
- `key`: the key used to create the new 2D array of chunked items based upon the passed collection.
- `itemsPerPage`: the number of items per paginated pages. Defaults to 10.

#### Returns

Returns an array of objects

- `title`: unique value for the passed key
- `slug`: slug
- `currentPage`: current page in the pagination
- `totalItems`: total number of paginated items
- `totalPages`: total number of pages
- `items`: items on the current page
- `hrefs`: all pagination hrefs in order,
- `href`
  - `first`: first href,
  - `last`: last href,
  - `next`: next href,
  - `previous`: previous href,
