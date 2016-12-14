/* @flow */

import closest from './';

document.body.innerHTML = `
  <section id="a">
    <div class="first">
      <em>foo</em>
      <span>spanner</span>
    </div>
    <div class="second">blah</div>
  </section>
  <section id="b">
    <div class="first">
      <strong>text</strong>
    </div>
  </section>
`;

function qs(el, selector): HTMLElement {
  const r = el.querySelector(selector);
  if (!r) throw new Error(`Failed to find element with selector: ${selector}`);
  return r;
}

test('works', () => {
  expect(closest(qs(document, '#a .first'), 'section')).toBe(
    qs(document, '#a')
  );
});

test("doesn't find things it shouldn't", () => {
  expect(closest(qs(document, '#a .first'), '.second')).toBe(
    null
  );
});

test('can match self', () => {
  expect(closest(qs(document, '#b .first'), '.first')).toBe(
    qs(document, '#b .first')
  );
});

test('can match body', () => {
  expect(closest(qs(document, '#a .first'), 'body')).toBe(
    document.body
  );
});

test('can match document', () => {
  expect(closest(qs(document, '#a .first'), 'html')).toBe(
    document.documentElement
  );
});
