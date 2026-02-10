## ✅ Express.js Setup

### 1️⃣ Inside your Node project

```bash
npm install express
```

---

### 2️⃣ Create server file

`index.js`

```js
const express = require("express")

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  res.send("Express ready")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

---

### 3️⃣ Run server

```bash
node index.js
```

Open:

```
http://localhost:3000
```

---

## ✅ Dev setup (recommended)

### 4️⃣ Install nodemon

```bash
npm install -D nodemon
```

### 5️⃣ Update `package.json`

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

## ✅ Middleware basics

```js
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
```

---

## ✅ Minimal structure

```
server/
├── index.js
├── package.json
└── node_modules/
```

---

Done.
