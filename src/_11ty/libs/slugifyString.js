const slugify = require("slugify");

/**
 * Transforms a string into a slug
 * @param {String} str string to slugify
 * @returns slugified string
 */
const slugifyString = (str) => {
  const options = {
    replacement: "-",
    remove: /[&,+()$~%.'":*?<>{}]/g,
  };

  return slugify(str, options);
};

module.exports = slugifyString;
