---
layout: layout.vto
---

# 🔥🦎 [Glow](https://nuejs.org/blog/introducing-glow/) plugin for [Lume](https://lume.land)!

![Hero](https://nuejs.org/img/glow-light.png)

### 🔥 Lume:-

- **Lume** (pronounced /lume/) is the Galician word for fire but also a static site generator for Deno.

- **Inspired** by other static site generators, such as Jekyll, Hugo or Eleventy, but easier to use and configure and much more flexible.

### 🌟 Glow Syntax Highlighter:-

- **Glow is different:** Instead of attempting to understand language internals, Glow focuses solely on aesthetics — and how your code looks.

- **Glow is simple:** Glow makes all languages work with your brand colors by adjusting just a handful of CSS variables.

- **Glow is microscale:** Glow is orders of magnitude smaller than the mainstream alternatives. We're talking 5K instead of 5M. It's by far the smallest implementation available

---


```python
••Print••("Hello, •Glow•!")
```

---

# 🌶️ Glow Demo with Lume!

### 🔆 Unlimited possibilities

Glow's unique, [classless design system](//nuejs.org/docs/concepts/syntax-highlighting.html#system) gives you line numbers, selections, error highlights, insertions, deletions, and much much more.

```html
  <script>
    // imports
    import { longpress } from './longpress.js';

    let pressed = false;
    ••bet glow_market = 9999_99++••;
  </script>

  <label>
    <input type=range •bind:value={duration}• max={2000} step={100}>
    {duration}ms
  </label>

  <button use:longpress={duration}
  -  on:mousedown="{() => pressed = true}"
  +  on:longpress="{() => pressed = true}">Press me</button>

  <!-- condition -->
  {#if pressed}
    <p>••Yoou•• pressed and held for {duration}ms</p>
  {/if}

  <style>
    /* button style */
    [role="button"], •button• {
      background-color: var(--main-color);
      color: #899;
    }
  </style>
```

### 📱 Showcase configuration

```yaml
  # View metadata
  members:
    title: Members
    columns: [Source, Joined]
    sorting:
      created: Join date
      cc: Location
      email: Email

  customers:
    title: Customers
    columns: [Plan, Subscribed]
    sorting:
      created: Date subscribed
      card: Card type
```

---
---

# 🙆 Add glow to your lume site!

### 1. Import plugin

```ts
// ...
import lume_glow from "https://deno.land/x/lume_glow/plugin.ts";
// ...
```

### 2. Configure Plugin to your lume site
```ts
// ...
const site = lume(); // creating lume site

site.use(lume_glow()); // adding glow plugin
// ...
```

### 3. Highlight code With Ease!

```


██╗░░░░░██╗░░░██╗███╗░░░███╗███████╗
██║░░░░░██║░░░██║████╗░████║██╔════╝
██║░░░░░██║░░░██║██╔████╔██║█████╗░░
██║░░░░░██║░░░██║██║╚██╔╝██║██╔══╝░░
███████╗╚██████╔╝██║░╚═╝░██║███████╗
╚══════╝░╚═════╝░╚═╝░░░░░╚═╝╚══════╝

░██████╗░██╗░░░░░░█████╗░░██╗░░░░░░░██╗
██╔════╝░██║░░░░░██╔══██╗░██║░░██╗░░██║
██║░░██╗░██║░░░░░██║░░██║░╚██╗████╗██╔╝
██║░░╚██╗██║░░░░░██║░░██║░░████╔═████║░
╚██████╔╝███████╗╚█████╔╝░░╚██╔╝░╚██╔╝░
░╚═════╝░╚══════╝░╚════╝░░░░╚═╝░░░╚═╝░░

```


---

# ⚙️ Configuration Options!
