# Alpine JS Character Count

Alpine JS plugin `x-count` returns the character count of a given HTML input 🧛‍♂️

## Example 👀

```html
<div x-data="{ message: 'Hello' }">
  <textarea x-model="message" maxlength="50"></textarea>

  <p>You have written <span x-count="message"></span> characters.</p>

  <p>You have <span x-count.50="message"></span> characters remaining.</p>
</div>
```

This will return the following:

```html
<p>You have written 5 characters.</p>
<p>You have 45 characters remaining</p>
```

The modifier in the example `50` is the max character count which you can pair up with the `max` or `maxlength` attribute on the HTML input.

## Install 🌟

It's very easy to install Alpine JS plugins! 🙌

### CDN

```html
<script src="https://unpkg.com/alpinejs-character-count@1.0.0/dist/count.min.js"></script>
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### NPM/Yarn

```shell
npm i -D alpinejs-character-count

yarn add -D alpinejs-character-count
```

Then you can register the plugin.

```js
import Alpine from "alpinejs";
import count from "alpinejs-character-count";

Alpine.plugin(count);

window.Alpine = Alpine;

Alpine.start();
```

### Stats 📊

Here's some stats about the Alpine JS Character Count package! As you can see, it's tiny 🤏

![](https://img.shields.io/bundlephobia/min/alpinejs-character-count)
![](https://img.shields.io/npm/v/alpinejs-character-count)
![](https://img.shields.io/npm/dt/alpinejs-character-count)
![](https://img.shields.io/github/license/markmead/alpinejs-character-count)
