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

test('works', () => {
  expect(closest(document.querySelector('#a .first'), 'section')).toBe(
    document.querySelector('#a')
  );
});

test("doesn't find things it shouldn't", () => {
  expect(closest(document.querySelector('#a .first'), '.second')).toBe(
    null
  );
});

test('can match self', () => {
  expect(closest(document.querySelector('#b .first'), '.first')).toBe(
    document.querySelector('#b .first')
  );
});
