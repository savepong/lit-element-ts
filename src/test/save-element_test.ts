import {SaveElement} from '../save-element';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('save-element', () => {
  test('is defined', () => {
    const el = document.createElement('save-element');
    assert.instanceOf(el, SaveElement);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<save-element></save-element>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Savepong!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<save-element name="Test"></save-element>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<save-element></save-element>`)) as SaveElement;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Savepong!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
