> # 🦎🔥🔌

# [Glow](https://nuejs.org/blog/introducing-glow/) plugin for [Lume](https://lume.land)!

> [!TIP]
>
> ## Follow these link mainly:-
>
> - 🌐 **Follow Website:- [arnavk-09.github.io/lume_glow/](https://arnavk-09.github.io/lume_glow/)**
> - 🔌 **Deno Plugin:- [deno.land/x/lume_glow](https://deno.land/x/lume_glow)**
> - 🌟 **Github Repo:- [github.com/ArnavK-09/lume_glow](https://github.com/ArnavK-09/lume_glow)**

### 🔥 Lume:-

- **Lume** (pronounced /lume/) is the Galician word for fire but also a static
  site generator for Deno.

- **Inspired** by other static site generators, such as Jekyll, Hugo or
  Eleventy, but easier to use and configure and much more flexible.

### 🌟 Glow Syntax Highlighter:-

- **Glow is different:** Instead of attempting to understand language internals,
  Glow focuses solely on aesthetics — and how your code looks.

- **Glow is simple:** Glow makes all languages work with your brand colors by
  adjusting just a handful of CSS variables.

- **Glow is microscale:** Glow is orders of magnitude smaller than the
  mainstream alternatives. We're talking 5K instead of 5M. It's by far the
  smallest implementation available

<p align="center">
  <img src="https://nuejs.org/img/glow-og-big.png" alt="Hero" />
</p>

---

# 🙆 Add glow to your lume site!

### 1. Import plugin

```ts
import lume_glow from "https://deno.land/x/lume_glow/plugin.ts";
```

### 2. Configure Plugin to your lume site

```ts
const site = lume(); // creating lume site

site.use(lume_glow()); // adding glow plugin
```

### 3. Customize your code!

> **[...Read More Here...](https://nuejs.org/docs/concepts/syntax-highlighting.html#system)**

---

# ⚙ Plugin Options...

```typescript
/**
 * Plugin Options
 */
export interface Options {
  /**
   * tells glow the language of the code. This is optional. When not provided, glow attempts to guess the language.
   */
  language?: string;
  /**
   * is a boolean flag indicating whether line numbers should be rendered
   */
  numbered?: boolean;
  /**
   * configure package size for glow styles
   */
  size?: "nano" | "default";
}
```

---

<p align="center"><strong>🌟 Give A Star! 🌟</strong></p>
