---
layout: example.11ty.cjs
title: <save-element> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
---

<style>
  save-element p {
    border: solid 1px blue;
    padding: 8px;
  }
</style>
<save-element>
  <p>This is child content</p>
</save-element>

<h3>CSS</h3>

```css
p {
  border: solid 1px blue;
  padding: 8px;
}
```

<h3>HTML</h3>

```html
<save-element>
  <p>This is child content</p>
</save-element>
```
