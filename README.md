# Paginate taxonomies with Eleventy

This demo uses Eleventy to:

1. create a collection using a custom `categories` taxonomy
2. create a collection of all unique `categories` values used throughout that collection
3. create a new collection using [Zach's method](https://github.com/11ty/eleventy/issues/332#issuecomment-445236776)

That new collection can then be paginated using `pagination` with a size of `1` to create paginated lists of items in each category.

The demo code uses a `blogposts` collection as an example.

## Installation

- run `npm install`
- run `npm build` to build pages
- run `npm dev` for local development

## Documentation

### Get collection unique key values

- `./eleventy/libs/getCollectionKeyValues.js` is responsible for returning an array of all unique key values used in the front-matter of the target collection. In this demo, "categories" is used as the key for which to find unique values.

#### Parameters

- `collection`: the actual collection of items you want to extract an array of unique values from. This collection can be defined as usual, using `tags` or other methods like `getFilteredByGlob()`.
- `key` - the key for which we need unique values. In this case we pass "categories" as the key.

#### Returns

Returns an array of objects. Each of the returned objects contains a `title`, a `slug` and an `itemsNumber` keys.

- `title`: value
- `slug`: slugified value (used for URLs)
- `itemsNumber`: number of items in the collection that include the value for the passed key

### Paginate collection category

- `./eleventy/libs/getCollectionByKey.js` is responsible for creating a new chunked collection of items. That collection can then be used to create paginated lists for each value of the passed key.

#### Parameters

- `collection`: the target collection from which the new paginated collection will be created. That new collection can be paginated using an Eleventy `pagination` with a size of `1`.
- `key`: the key used to create the new collection. In this case we pass "categories" as the key.
- `itemsPerPage`: the number of items per paginated pages.

#### Returns

Returns an array of objects. Each object is a page of results for the target collection.

- `title`: unique value for the passed key
- `slug`: slug
- `currentPage`: current page in the pagination
- `totalItems`: total number of paginated items
- `totalPages`: total number of pages
- `items`: items on the current page
- `hrefs`
  - `all`: all pagination hrefs in order,
  - `first`: first href,
  - `last`: last href,
  - `next`: next href,
  - `previous`: previous href,
