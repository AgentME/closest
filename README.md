# Closest-ng

Finds the closest ancesor of an element (or the current element itself) that
matches a selector. Uses the native
[`closest` method](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
if available in the browser.

## Installation

    $ npm install --save closest-ng

## API

### `closest(element, selector)`

* element - will check this element's parents
* selector - CSS selector to match parents

Example:

```js
var closest = require('closest');

closest(document.body, 'html') === document.documentElement
closest(document.body, 'body') === document.body
```
