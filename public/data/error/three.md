# Error: **hydration failed**

This happens in **Next.js** when the HTML rendered on the server doesn’t match what React renders on the client.

---

### Common fixes

1. **Avoid browser-only code on the server**
   Don’t use `window`, `document`, or `localStorage` directly.
   Use them inside `useEffect`.

2. **Check conditional rendering**
   Rendering different content on server vs client causes mismatch.

3. **Mark components as client when needed**
   Add:

   ```js
   "use client"
   ```

   if you’re using hooks or browser APIs.

4. **Disable SSR for problematic components**
   Use dynamic import with `ssr: false` when necessary.

---

### Mindset

> Hydration errors mean **server output ≠ client output**.
> Make them match, and the error disappears.
