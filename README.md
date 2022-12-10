# Alpine JS Character Count

Track the character count of an input with the option to compare against the max
length 🔟

## Example

```html
<div x-data="{ message: 'Hello' }">
  <textarea x-model="message" maxlength="50"></textarea>

  <p>You have written <span x-count="message"></span> characters.</p>

  <p>You have <span x-count.50="message"></span> characters remaining.</p>
</div>
```

This will return the following:

```html
<p>You have written 5 characters.</p> <p>You have 45 characters remaining</p>
```

The modifier in the example `50` is the max character count which you can pair
up with the `maxlength` attribute on the HTML input. If you want a more dynamic
approach to this, you can do the following.

### Using Alpine JS Refs

```html
<div x-data="{ message: 'Hello' }">
  <textarea x-model="message" maxlength="100" x-ref="textarea"></textarea>

  <p>You have written <span x-count="message"></span> characters.</p>

  <p>You have <span x-count.textarea="message"></span> characters remaining.</p>
</div>
```

Instead of passing the max character count as the modifier, you pass the name of
an Alpine JS `x-ref`.

## Install

### CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-character-count@latest/dist/count.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### NPM/Yarn

```shell
npm i -D alpinejs-character-count

yarn add -D alpinejs-character-count
```

Then you can register the plugin.

```js
import Alpine from 'alpinejs'
import count from 'alpinejs-character-count'

Alpine.plugin(count)

window.Alpine = Alpine

Alpine.start()
```

### Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-character-count)
![](https://img.shields.io/npm/v/alpinejs-character-count)
![](https://img.shields.io/npm/dt/alpinejs-character-count)
![](https://img.shields.io/github/license/markmead/alpinejs-character-count)
