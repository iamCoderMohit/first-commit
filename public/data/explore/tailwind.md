## ✅ Tailwind CSS v4 — Core Setup

### 1️⃣ Install packages

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

---

### 2️⃣ Initialize Tailwind

```bash
npx tailwindcss init
```

Creates:

```
tailwind.config.js
```

---

### 3️⃣ Create PostCSS config

`postcss.config.js`

```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

---

### 4️⃣ Configure Tailwind content paths

`tailwind.config.js`

```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

(Adjust paths for your project — this is the only thing that changes per framework.)

---

### 5️⃣ Add Tailwind directives to CSS

`src/index.css` (or `globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 6️⃣ Make sure CSS is imported

* React / Vite → import in `main.jsx` or `main.tsx`

```js
import './index.css'
```

* HTML → link compiled CSS

```html
<link rel="stylesheet" href="/src/index.css">
```

---

### 7️⃣ Run dev/build tool

```bash
npm run dev
```

(or whatever your framework uses)

---

### 8️⃣ Test

```html
<h1 class="text-3xl font-bold text-red-500">
  Tailwind v4 Works
</h1>
```

---

## 🧠 Universal Rule (important)

Tailwind setup is always:

```
Tailwind install
→ PostCSS plugin
→ content paths
→ CSS directives
→ import CSS
```