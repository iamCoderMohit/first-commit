## ✅ Initialize **Next.js** (Modern: App Router)

### 1️⃣ Create the app

```bash
npx create-next-app@latest my-next-app
```

Answer like this (recommended):

```
TypeScript?        → Yes
ESLint?            → Yes
Tailwind CSS?      → Yes
`src/` directory?  → Yes
App Router?        → Yes
Import alias?      → Yes (@/*)
```

---

### 2️⃣ Go into project

```bash
cd my-next-app
```

---

### 3️⃣ Start dev server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📁 Core structure (App Router)

```
src/
└── app/
    ├── layout.tsx
    ├── page.tsx
    └── globals.css
```

---

## 4️⃣ Minimal test

### `src/app/page.tsx`

```tsx
export default function Home() {
  return <h1>Next.js Ready</h1>
}
```

---

Done.