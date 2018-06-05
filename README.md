# Closest-ng

[![Circle CI](https://circleci.com/gh/AgentME/closest-ng.svg?style=shield)](https://circleci.com/gh/AgentME/closest-ng)
[![npm version](https://badge.fury.io/js/closest-ng.svg)](https://badge.fury.io/js/closest-ng)

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

[Flow](https://flowtype.org/) type declarations for this module are included!
If you are using Flow, they won't require any configuration to use.
