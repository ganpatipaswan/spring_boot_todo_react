# spring_boot_todo_react
Spring boot and react js full stack todo app.

Perfect 👍
Below is a **complete project documentation** for your Full Stack Todo Application:

---

# 📘 Full Stack Todo Application Documentation

(Spring Boot + React + Tailwind CSS)

---

# 📁 Project Structure

```
root-folder/
│
├── todo_api/        → Spring Boot Backend
└── todo-frontend/   → React Frontend (Tailwind UI)
```

---

# 🔹 PART 1 — Backend Setup (Spring Boot)

## ✅ 1. Create Spring Boot Project

Go to: [https://start.spring.io](https://start.spring.io)

### Configuration:

* Project: Maven
* Language: Java
* Spring Boot: 3.2.x
* Java: 17+
* Packaging: Jar

### Dependencies:

* Spring Web
* Spring Data JPA
* MySQL Driver
* Lombok

Download → Extract → Rename to `todo_api`

---

## ✅ 2. Database Setup (MySQL)

Login to MySQL:

```bash
mysql -u root -p
```

Create database:

```sql
CREATE DATABASE tododb;
```

(Optional: Create dedicated user)

```sql
CREATE USER 'todo'@'localhost' IDENTIFIED BY 'todo123';
GRANT ALL PRIVILEGES ON tododb.* TO 'todo'@'localhost';
FLUSH PRIVILEGES;
```

---

## ✅ 3. Configure `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/tododb
spring.datasource.username=todo
spring.datasource.password=todo123

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
server.port=8080
```

---

## ✅ 4. Run Backend

Inside `todo_api`:

```bash
mvn clean install
mvn spring-boot:run
```

API Test:

```
GET http://localhost:8080/api/todos
```

---

# 🔹 PART 2 — Frontend Setup (React)

## ✅ 1. Create React App

```bash
npx create-react-app todo-frontend
cd todo-frontend
npm install axios
```

---

## ✅ 2. Run Frontend

```bash
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

# 🔹 PART 3 — Tailwind CSS Setup (Stable v3)

## ⚠ Important: Use Tailwind v3 (Not v4)

---

## ✅ 1. Install Tailwind

Inside `todo-frontend`:

```bash
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@3.4.4 postcss autoprefixer
npx tailwindcss init -p
```

---

## ✅ 2. Update `tailwind.config.js`

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## ✅ 3. Update `postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## ✅ 4. Update `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## ✅ 5. Restart React

```bash
npm start
```

---

# 🔹 PART 4 — Running Full Project

### Step 1:

Start Backend

```bash
cd todo_api
mvn spring-boot:run
```

### Step 2:

Start Frontend

```bash
cd todo-frontend
npm start
```

---

# 🔹 PART 5 — Common Errors & Solutions

---

## ❌ Error: Access denied for user 'root'

### Cause:

Wrong DB password.

### Fix:

Reset password or create new DB user.

---

## ❌ Error: Port 8080 already in use

### Fix:

Change port:

```properties
server.port=8081
```

---

## ❌ Error: tailwind command not found

### Fix:

Install stable version:

```bash
npm install -D tailwindcss@3.4.4 postcss autoprefixer
```

---

## ❌ Tailwind PostCSS plugin error

### Cause:

Tailwind v4 installed.

### Fix:

Downgrade to v3.

---

## ❌ CORS Error

### Fix in Controller:

```java
@CrossOrigin(origins = "http://localhost:3000")
```

---

# 🔹 PART 6 — .gitignore Setup

Create `.gitignore` in root:

```
target/
node_modules/
build/
.env
.idea/
.vscode/
.DS_Store
```

---

# 🔹 PART 7 — Production Best Practices

### ✅ Use environment variables

Do not store DB password in repo.

### ✅ Use profile-based config

```
application-dev.properties
application-prod.properties
```

### ✅ Use Axios base URL from env

Create `.env` in frontend:

```
REACT_APP_API_URL=http://localhost:8080
```

---

# 🔹 PART 8 — Features Implemented

* Add Todo
* Edit Todo
* Delete Todo
* Fetch Todos
* Tailwind Animated UI
* Full Stack Integration

---

# 🔹 PART 9 — Future Enhancements

* Authentication (JWT)
* Pagination
* Completed checkbox
* Dark / Light Mode
* Docker deployment
* AWS Deployment
* CI/CD with GitHub Actions
* Drag & Drop sorting
* Loading animations
* Toast notifications

---

# 🔹 PART 10 — Architecture Overview

```
React (Port 3000)
        ↓
Axios API Calls
        ↓
Spring Boot REST API (Port 8080)
        ↓
MySQL Database
```

---

# 🎯 Final Result

You now have:

✅ Full Stack Application
✅ Professional UI
✅ Proper Git setup
✅ Error Handling Knowledge
✅ Production Ready Structure

---

If you want, I can now create:

* 📄 README.md for GitHub
* 🐳 Docker setup for both projects
* ☁ AWS deployment guide
* 🔐 JWT Authentication version
* 🏢 Enterprise-level folder structure
* 📦 Downloadable DOC/PDF file

Tell me which one you want next 👌
