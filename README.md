# Closest-ng


Similar to jQuery's `$.fn.closest` and `$.fn.parents`.
Finds the closest parent that matches a selector.

## Installation

    $ npm install --save closest-ng

## API

### `closest(element, selector)`

* element - will check this element's parents
* selector - CSS selector to match parents

Example:

```javascript
var closest = require('closest');

closest(document.body, 'html') === document.documentElement
closest(document.body, 'body') === document.body
```
