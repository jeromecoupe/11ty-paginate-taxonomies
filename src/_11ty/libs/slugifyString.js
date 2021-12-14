const slugify = require("slugify");

/**
 * Transforms a string into a slug
 * @param {Sring} str string to slugify
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
