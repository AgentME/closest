/* @flow */

import matches from 'matches-selector-ng';

const proto = global.Element && global.Element.prototype;
const vendor = proto && proto.closest;

export default function closest(element: HTMLElement, selector: string): ?HTMLElement {
  if (vendor) return vendor.call(element, selector);
  let parent = element;
  do {
    if (matches(parent, selector)) return parent;
    parent = parent.parentNode;
  } while (parent && parent !== global.document);
  return null;
}
