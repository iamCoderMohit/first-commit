# Error: **cannot read property of undefined**

This happens when you try to access a value on something that is `undefined`.

---

### Common fixes

1. **Check data before using it**
   The value may not be loaded yet.

   ```js
   data && data.name
   ```

2. **Use optional chaining**

   ```js
   data?.name
   ```

3. **Verify props and state**
   Make sure you’re actually passing the data you expect.

4. **Check API responses**
   Console-log the data and confirm the structure.

---

### Mindset

> This error means you assumed something existed — but it didn’t.
> Guard your data before using it.
