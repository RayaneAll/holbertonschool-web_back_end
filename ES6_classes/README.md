# ES6 Classes

This repository contains exercises focused on mastering **classes in modern JavaScript (ES6)**. You’ll learn how to define, extend, and manipulate classes, implement static methods, use symbols, and apply advanced OOP concepts like inheritance and metaprogramming.

---

## 📚 Curriculum

**Track**: Foundations v2 - Part 2  
**Project**: ES6 Classes  
**Level**: Amateur  
**Author**: Johann Kerbrat – Engineering Manager at Uber Works  
**School**: Holberton School  
**Average**: 96.66%  
**Score**: Updated as you progress  

---

## 🎯 Learning Objectives

By the end of this project, you should be able to explain:

- How to define a class in JavaScript
- How to add instance and static methods
- How inheritance works with the `extends` keyword
- The use of getters and setters for encapsulation
- How to use symbols and metaprogramming in ES6

---

## ⚙️ Requirements

- OS: Ubuntu 20.04 LTS or macOS
- Node.js: 20.x.x
- NPM: 9.x.x or later
- Allowed editors: `vi`, `vim`, `emacs`, `VSCode`
- All files must use `.js` extension
- All files must end with a new line
- All functions and classes must be exported
- Linter: ESLint (Airbnb + Jest plugin)
- Testing: Jest
- Validation: Run `npm run full-test`

---

## 🛠️ Setup Instructions

### 1. Install Node.js 20

**On macOS with Homebrew**:

```bash
brew install node@20
brew link --overwrite node@20
```

**On Ubuntu**:

```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Check versions:

```bash
node -v   # v20.x.x
npm -v    # 9.x.x or higher
```

---

### 2. Install Project Dependencies

```bash
npm install --save-dev \
  jest \
  babel-jest \
  @babel/core \
  @babel/preset-env \
  eslint \
  eslint-config-airbnb-base \
  eslint-plugin-import \
  eslint-plugin-jest
```

Then run:

```bash
npm install
```

---

## 📁 Configuration Files

### `package.json`

Make sure it includes:

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  }
}
```

### `babel.config.js`

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { targets: { node: 'current' } }
    ]
  ]
};
```

### `.eslintrc.js`

```js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

---

## ✅ How to Run

### Run a single file:

```bash
npm run dev 0-main.js
```

### Run Jest tests:

```bash
npm test
```

### Run full check (lint + tests):

```bash
npm run full-test
```

---

## 🧠 Project Tasks

| # | Task | File |
|---|------|------|
| 0 | Create a `ClassRoom` class | `0-classroom.js` |
| 1 | Create multiple classrooms | `1-make_classrooms.js` |
| 2 | Add getters/setters in `HolbertonCourse` | `2-hbtn_course.js` |
| 3 | `Currency` class + display method | `3-currency.js` |
| 4 | `Pricing` class with static method | `4-pricing.js` |
| 5 | Abstract `Building` class | `5-building.js` |
| 6 | Inheritance via `SkyHighBuilding` | `6-sky_high.js` |
| 7 | Custom `toString()` with `Airport` | `7-airport.js` |
| 8 | Class conversion: `Number` and `String` | `8-hbtn_class.js` |
| 9 | Fix hoisting issues | `9-hoisting.js` |
| 10 | `Car` cloning with symbols | `10-car.js` |

---

## 👨‍💻 Author

**Rayane Allaoui**  
Student @ Holberton School  
Project: ES6 Classes