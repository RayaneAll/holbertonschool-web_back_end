# ES6 Promises

This project explores asynchronous programming in JavaScript using Promises, `async/await`, and error handling. You’ll learn how to manage async flows, handle multiple Promises, and build robust async logic.

## 📚 Learning Objectives

By the end of this project, you should be able to explain and use:

- What Promises are, how and why to use them
- `then`, `catch`, and `resolve`
- `Promise.all`, `Promise.race`, and `Promise.allSettled`
- `async` / `await` syntax
- Error handling with `throw` and `try/catch`

## 🛠️ Requirements

- Ubuntu 20.04 LTS
- Node.js 20.x.x
- npm 9.x.x or later
- Code must pass ESLint and Jest tests
- All functions must be exported
- Files must end with a new line and use the `.js` extension
- Editors: `vi`, `vim`, `emacs`, or Visual Studio Code

## ⚙️ Setup

### 1. Install Node.js
```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### 2. Install dependencies
```bash
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
npm install --save-dev eslint
npm install
```

## 🔍 Files

- `package.json` – Project metadata and scripts
- `babel.config.js` – Babel configuration
- `.eslintrc.js` – ESLint rules
- `utils.js` – Contains reusable async utilities: `uploadPhoto()` and `createUser()`

## 📂 Task Overview

| File | Description |
|------|-------------|
| `0-promise.js` | Return a basic Promise |
| `1-promise.js` | Conditionally resolve or reject a Promise |
| `2-then.js` | Handle resolved and rejected Promises with `then` and `catch` |
| `3-all.js` | Use `Promise.all()` to handle multiple async calls |
| `4-user-promise.js` | Return a resolved Promise with a user object |
| `5-photo-reject.js` | Return a rejected Promise with a custom error |
| `6-final-user.js` | Handle multiple settled Promises with `Promise.allSettled()` |
| `7-load_balancer.js` | Use `Promise.race()` to return the fastest resolving Promise |
| `8-try.js` | Throw an error when dividing by zero |
| `9-try.js` | Implement try/catch and always return a completion message |

## 🧪 Run the Project

To run a file:
```bash
npm run dev filename.js
```

To run tests:
```bash
npm run test
```

To run lint + tests:
```bash
npm run full-test
```

## 🧠 Notes

- Use `Promise.all` when you want all Promises to succeed.
- Use `Promise.race` when you want the fastest response.
- Always handle rejected Promises to prevent unhandled rejections.
- Use `async/await` for more readable async code.