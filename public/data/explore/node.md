## ✅ Node.js Setup

### 1️⃣ Download Node.js

* Go to **nodejs.org**
* Download **LTS version**
* Install (next → next → install)

---

### 2️⃣ Verify installation

```bash
node -v
npm -v
```

You should see version numbers.

---

## ✅ Initialize a Node.js project

### 3️⃣ Create project folder

```bash
mkdir my-node-app
cd my-node-app
```

---

### 4️⃣ Initialize npm

```bash
npm init -y
```

Creates:

```
package.json
```

---

### 5️⃣ Create entry file

```bash
touch index.js
```

---

### 6️⃣ Basic test

`index.js`

```js
console.log("Node.js ready")
```

Run:

```bash
node index.js
```

---

## ✅ Common extras (optional but standard)

### Install nodemon (auto-restart)

```bash
npm install -D nodemon
```

Update `package.json`:

```json
"scripts": {
  "dev": "nodemon index.js"
}
```

Run:

```bash
npm run dev
```

---

## ✅ Folder structure (minimal)

```
my-node-app/
├── index.js
├── package.json
└── node_modules/
```

---

Done.