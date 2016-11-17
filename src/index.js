/* @flow */

import matches from 'matches-selector-ng';

export default function closest(element: HTMLElement, selector: string): ?HTMLElement {
  let parent = element;
  do {
    if (matches(parent, selector)) return parent;
    parent = parent.parentNode;
  } while (parent && parent !== document);
  return null;
}
