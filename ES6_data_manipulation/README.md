# ES6 Data Manipulation

This project focuses on practicing modern JavaScript features, especially ES6+ data structures and methods. It is part of the Holberton School curriculum, Foundations v2 - Part 2.

## 🚀 Description

You will work with **arrays**, **typed arrays**, **sets**, and **maps**. You'll apply methods like `map()`, `filter()`, and `reduce()` to manipulate and extract data from collections in a clean, functional style. The project aims to reinforce your understanding of JavaScript's built-in tools for working with structured data efficiently.

## 📚 Learning Objectives

By the end of this project, you should be able to explain and use:
- `map`, `filter`, and `reduce` on arrays
- Typed Arrays (`Int8Array`, etc.)
- `Set`, `Map`, and `WeakMap` data structures

## 🛠️ Requirements

- OS: Ubuntu 20.04 LTS
- NodeJS version: 20.x.x  
- NPM version: 9.x.x
- Code must pass ESLint and Jest tests
- Editor: `vi`, `vim`, `emacs`, or Visual Studio Code
- File extension: `.js`
- All files must end with a newline
- All functions must be exported

## 🧪 Setup Instructions

### 1. Install NodeJS
```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### 2. Check versions
```bash
node -v
npm -v
```

### 3. Install dependencies
```bash
npm install --save-dev jest babel-jest @babel/core @babel/preset-env eslint
npm install
```

### 4. Run Tests
```bash
npm run test        # To run Jest
npm run full-test   # To run Jest + ESLint
```

## 📂 Project Structure

Each file solves one specific task using modern JavaScript features:

| File | Description |
|------|-------------|
| `0-get_list_students.js` | Create a basic list of student objects |
| `1-get_list_student_ids.js` | Extract an array of student IDs |
| `2-get_students_by_loc.js` | Filter students by city |
| `3-get_ids_sum.js` | Reduce student IDs into a single sum |
| `4-update_grade_by_city.js` | Combine filtering and mapping to update grades |
| `5-typed_arrays.js` | Work with `Int8Array` |
| `6-set.js` | Create a Set from an array |
| `7-has_array_values.js` | Check if Set contains all values of an array |
| `8-clean_set.js` | Filter Set values by prefix and join them into a string |
| `9-groceries_list.js` | Return a Map of groceries and quantities |
| `10-update_uniq_items.js` | Update Map values conditionally |

## 📌 Notes

- Use functional programming style wherever possible.
- Follow best practices for clean, maintainable code.
- Always validate the input when required (e.g., check if it's an array or a map).