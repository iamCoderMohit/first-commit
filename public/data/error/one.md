# Error: **app not starting**

This usually means the app fails to run after `npm run dev` or `npm start`.

---

### Step 1: Check the error message first

Open the terminal and carefully read **the first red error**, not the last one.
Most of the time, the real reason is written above.

---

### Step 2: Restart everything

Stop the server (`Ctrl + C`) and run:

```bash
npm install
npm run dev
```

Many times dependencies are missing or not installed properly.

---

### Step 3: Check Node.js version

Some projects require a minimum Node version.

```bash
node -v
```

If it’s too old, update to the **LTS version**.

---

### Step 4: Check for port issues

If you see something like *port already in use*:

```bash
lsof -i :3000
```

Or simply change the port and run again.

---

### Step 5: Delete and reinstall dependencies

This fixes most mysterious issues.

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

### Step 6: Check environment variables

If the app depends on `.env`:

* make sure the file exists
* variable names are correct
* restart the server after changes

---

### Step 7: Look for import or config errors

Common causes:

* wrong file paths
* missing default exports
* incorrect config files (`next.config.js`, `vite.config.js`)

Fix the first file mentioned in the error stack.

---

### Final mindset (important)

> “App not starting” is not the real error — it’s a **symptom**.
> The real cause is always in the logs.

---
