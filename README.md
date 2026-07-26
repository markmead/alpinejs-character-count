# Alpine JS Character Count

![](https://img.shields.io/npm/v/alpinejs-character-count)
![](https://img.shields.io/npm/dt/alpinejs-character-count)
![](https://img.shields.io/github/license/markmead/alpinejs-character-count)

A lightweight Alpine.js plugin for tracking and displaying character counts with
support for maximum length validation and remaining character calculations.

## ✨ Features

- 🪶 **Lightweight** - Minimal overhead, maximum performance
- ⚡ **Real-time** - Live character count updates as users type
- 📏 **Flexible limits** - Static numbers, Alpine.js refs, or maxlength
  attributes
- 🎯 **Multiple displays** - Show character count or remaining characters
- 🚫 **Zero dependencies** - Only requires Alpine.js

## 📦 Installation

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-character-count@latest/dist/count.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@latest/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D alpinejs-character-count

npm install -D alpinejs-character-count
```

```js
import Alpine from 'alpinejs'
import count from 'alpinejs-character-count'

Alpine.plugin(count)

Alpine.start()
```

## 🚀 Quick Start

1. Add the `x-count` directive to display character counts
2. Use modifiers to specify maximum length or reference elements
3. Customize display with static values or Alpine.js refs

## 📋 Usage Options

| Usage                           | Description                                         |
| ------------------------------- | --------------------------------------------------- |
| `x-count="expression"`          | Shows current character count                       |
| `x-count.50="expression"`       | Shows remaining characters (max 50)                 |
| `x-count.textarea="expression"` | Uses maxlength from element with `x-ref="textarea"` |

### Basic Character Count

```html
<div x-data="{ message: 'Hello' }">
  <textarea x-model="message" aria-describedby="message-count"></textarea>

  <p id="message-count">Characters: <span x-count="message"></span></p>
</div>
```

### Remaining Characters with Static Limit

```html
<div x-data="{ message: 'Hello' }">
  <textarea
    x-model="message"
    aria-describedby="limit-count limit-remaining"
  ></textarea>

  <p id="limit-count">Characters: <span x-count="message"></span>/50</p>
  <p id="limit-remaining">Remaining: <span x-count.50="message"></span></p>
</div>
```

### Using Alpine.js Refs

```html
<div x-data="{ message: 'Hello' }">
  <textarea
    x-model="message"
    maxlength="100"
    x-ref="textarea"
    aria-describedby="refs-count refs-remaining"
  ></textarea>

  <p id="refs-count">Characters: <span x-count="message"></span></p>
  <p id="refs-remaining">Remaining: <span x-count.textarea="message"></span></p>
</div>
```

## 💡 Complete Example

_This example uses Tailwind CSS for styling but that is not required._

```html
<div
  x-data="{
    message: '',
    maxLength: 280,
    get isOver() { return this.message.length > this.maxLength },
  }"
  class="max-w-3xl mx-auto space-y-4"
>
  <div>
    <label for="post" class="block font-medium text-gray-700">
      What's on your mind?
    </label>

    <textarea
      id="post"
      x-model="message"
      placeholder="Share your thoughts..."
      aria-describedby="post-count"
      class="w-full border-gray-300 shadow-sm rounded mt-1"
    ></textarea>

    <p id="post-count" class="text-gray-700 text-sm mt-1.5">
      <span
        x-count="message"
        class="font-medium"
        :class="{
          'text-red-600': isOver,
          'text-yellow-600': !isOver && message.length > maxLength * 0.9,
        }"
      ></span
      >/<span x-text="maxLength"></span> characters
      <span x-show="isOver" class="font-medium text-red-600">— over limit</span>
    </p>
  </div>

  <div class="flex justify-end">
    <button
      :disabled="message.length === 0 || isOver"
      class="px-3 py-1.5 bg-blue-600 text-sm font-medium text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Publish
    </button>
  </div>
</div>
```

## 🎯 How It Works

### Character Count Display

The `x-count` directive automatically updates the text content of an element to
show the current character count of the specified expression.

### Remaining Characters

When you provide a modifier (like `.50` or `.textarea`), the directive
calculates and displays the remaining characters based on the maximum limit.

### Reference Elements

Instead of hardcoding maximum values, you can reference other elements using
Alpine.js refs. The plugin will automatically read the `maxlength` attribute
from the referenced element.

## 🎨 Styling Tips

### Visual Feedback with Tailwind CSS

```html
<div x-data="{ content: '' }">
  <textarea
    x-model="content"
    maxlength="100"
    aria-describedby="content-count"
    class="w-full border-gray-300 shadow-sm rounded"
  ></textarea>

  <div id="content-count" class="text-sm mt-1 text-gray-700">
    <span x-count="content"></span>/100 characters (<span
      x-count.100="content"
    ></span>
    remaining)
  </div>
</div>
```

### Progress Bar Visualization

```html
<div x-data="{ message: '' }">
  <textarea
    x-model="message"
    maxlength="200"
    aria-describedby="progress-count"
    class="w-full border-gray-300 shadow-sm rounded"
  ></textarea>

  <div class="mt-1.5">
    <div id="progress-count" class="flex justify-between text-xs text-gray-700">
      <span><span x-count="message"></span> characters</span>
      <span><span x-count.200="message"></span> remaining</span>
    </div>

    <div class="bg-gray-200 rounded-full h-2 mt-3">
      <div
        class="h-2 rounded-full transition-[width] duration-300 bg-blue-600"
        :style="`width: ${Math.min((message.length / 200) * 100, 100)}%`"
      ></div>
    </div>
  </div>
</div>
```

## ♿ Accessibility

- **Associate the count with its input.** Give the element holding the count an
  `id` and point the input's `aria-describedby` at it (as every example above
  does), so screen reader users hear the count when they focus the field.
- **Leave it as passive text — don't force `aria-live`.** The count changes on
  every keystroke, so assistive tech would announce the number on every keypress.
  If you do need the *remaining* count announced, debounce it and only announce
  as the limit approaches.
- **Never signal the limit with colour alone.** The complete example turns the
  count red past `maxLength`, but also shows an "over limit" text cue — colour on
  its own is invisible to colour-blind users and screen readers.

## 🌐 Browser Support

This plugin works in all modern browsers that support Alpine.js. No additional
polyfills or dependencies are required.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major
changes, please open an issue first to discuss what you would like to change.

### Local development

This project uses [pnpm](https://pnpm.io) — please don't install with npm or
yarn, as that produces a competing lockfile and skips the install policy in
`pnpm-workspace.yaml` (a 48h hold on freshly published versions, and the
allowlist for esbuild's build script).

```bash
pnpm install
pnpm build # lints, then bundles to dist/
pnpm lint
```

None of this reaches consumers — the published tarball ships only `dist/`,
`src/` and `builds/` (plus `package.json`, `README.md` and `LICENSE`), and the
plugin has zero runtime dependencies.
