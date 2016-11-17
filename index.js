var matches = require('matches-selector-ng');

module.exports = function (element, selector) {
  var parent = element;
  do {
    if (matches(parent, selector)) return parent;
    parent = parent.parentNode;
  } while (parent && parent !== document);
}
