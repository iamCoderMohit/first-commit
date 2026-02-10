# Error: **module not found**

This happens when the app can’t find a file or package you’re trying to import.

---

### Common fixes

1. **Check the import path**
   Make sure the file name and path are correct (case-sensitive).

2. **Verify the package is installed**

   ```bash
   npm install
   ```

3. **Restart the dev server**
   Changes in files or installs need a restart.

4. **Check file extensions**
   `.js` vs `.jsx` vs `.ts` vs `.tsx` mismatches can cause this.

5. **Clear and reinstall dependencies**

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

---

### Mindset

> This error almost always means **a wrong path or a missing dependency**, not a broken app.
