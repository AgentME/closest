# Closest-ng

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Macil/closest-ng/blob/master/LICENSE.txt) [![npm version](https://img.shields.io/npm/v/closest-ng.svg?style=flat)](https://www.npmjs.com/package/closest-ng) [![CircleCI Status](https://circleci.com/gh/Macil/closest-ng.svg?style=shield)](https://circleci.com/gh/Macil/closest-ng) [![Greenkeeper badge](https://badges.greenkeeper.io/Macil/closest-ng.svg)](https://greenkeeper.io/)

Finds the closest ancestor of an element (or the current element itself) that
matches a selector. Uses the native
[`closest` method](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
if available in the browser.

## Installation

    $ yarn add closest-ng

## API

### `closest(element, selector)`

* element - will check this element's parents
* selector - CSS selector to match parents

Example:

```js
var closest = require('closest-ng');

closest(document.body, 'html') === document.documentElement
closest(document.body, 'body') === document.body
```

## Types

Both [TypeScript](https://www.typescriptlang.org/) and
[Flow](https://flowtype.org/) type definitions for this module are included!
The type definitions won't require any configuration to use.
