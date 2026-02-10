# Error: **port already in use**

This happens when another process is already running on the same port your app is trying to use.

---

### Common fixes

1. **Stop the running process**
   Press `Ctrl + C` in all open terminals.

2. **Kill the port manually**

   ```bash
   lsof -i :3000
   kill -9 <PID>
   ```

3. **Change the port**

   ```bash
   PORT=3001 npm run dev
   ```

   or update it in your config.

4. **Restart your system**
   If a ghost process is holding the port.

---

### Mindset

> Only one app can listen to a port at a time.
> Free the port or change it.
