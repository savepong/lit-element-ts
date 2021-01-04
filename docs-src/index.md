---
layout: page.11ty.cjs
title: <save-element> ⌲ Home
---

# &lt;save-element>

`<save-element>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<save-element>` is just an HTML element. You can it anywhere you can use HTML!

```html
<save-element></save-element>
```

  </div>
  <div>

<save-element></save-element>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<save-element>` can be configured with attributed in plain HTML.

```html
<save-element name="HTML"></save-element>
```

  </div>
  <div>

<save-element name="HTML"></save-element>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<save-element>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;save-element&gt;</h2>
    <save-element .name=${name}></save-element>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;save-element&gt;</h2>
<save-element name="lit-html"></save-element>

  </div>
</section>
