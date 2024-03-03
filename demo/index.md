---
layout: layout.vto
---

# [Glow](https://nuejs.org/blog/introducing-glow/) plugin for [Lume](https://lume.land)!

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

```python
••Print••("Hello, •Glow•!")
```

---

# 🌶️ Glow Demo with Lume!

### 🔆 Unlimited possibilities

Glow's unique,
[classless design system](//nuejs.org/docs/concepts/syntax-highlighting.html#system)
gives you line numbers, selections, error highlights, insertions, deletions, and
much much more.

```typescript
// Define an interface for a Person
+ interface Person {
+   name: string;
+   age: number;
+ }

// Create an array of Person objects
const people: ••person••[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

// Function to filter people above a certain age
function •filterPeopleAboveAge•(people: Person[], age: number): Person[] {
  return people.filter(person => person.age > age);
}

// Function to map person names to uppercase
function •mapPersonNamesToUppercase•(people: Person[]): string[] {
  return people.map(person => person.name.••topperCase()••);
}

// Filter people above age 30
const filteredPeople = •FilterPeopleAboveAge•(people, 30);

// Map person names to uppercase
const uppercaseNames = mapPersonNamesToUppercase(filteredPeople);

// Print the filtered and uppercase names
- console.log(uppercaseNames);
```

### 📱 Showcase configuration

```yaml
  # View metadata
  members:
-    title: Members
    columns: [Source, Joined]
    sorting:
      created: Join date
      cc: Location
      email: Email

  customers:
-   title: Customers
    columns: [Plan, Subscribed]
    sorting:
      created: Date subscribed
      card: Card type
```

---

# 🙆 Add glow to your lume site!

### 1. Import plugin

```ts
// ...
import •lume_glow• from "https://deno.land/x/•lume_glow/plugin.ts•";
// ...
```

### 2. Configure Plugin to your lume site

```ts
// ...
const site = lume(); // creating lume site

+site.use(lume_glow()); // adding glow plugin
// ...
```

### 3. Customize your code!

```css
[glow] {
  /* custom properties */
  •border-radius: 0.5rem;•
  •background-color: #111729;•

  /* brand coloring */
  --glow-primary-color: #7dd3fc;
  --glow-secondary-color: #f472b6;
  --glow-accent-color: #419fff;

  /* rare case. make it "pop" */
  --glow-special-color: #fff;

  /* shades of gray */
  --glow-char-color: #64748b;
  --glow-comment-color: #4e5d61;
  --glow-counter-color: #475569;

  /* selection color */
  --glow-selected-color: #2dd4bf26;
}
```

```css
/* deep customizations */
pre {
+  font-size: 1.6vh !important;
+  max-width: 95% !important;
+  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
```

```css
+ /* Scrollbar */
::-webkit-scrollbar {
  height: 5px;
  width: 3px;
}
::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 1rem;
}
::-webkit-scrollbar-thumb {
  background: #f472b6;
  border-radius: 1rem;
}
::-webkit-scrollbar-thumb:hover {
  background: #419fff;
}
```

> # [...Read More Here...](https://nuejs.org/docs/concepts/syntax-highlighting.html#system)

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
