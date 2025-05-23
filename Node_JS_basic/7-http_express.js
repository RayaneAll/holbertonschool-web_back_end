const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  const path = process.argv[2];
  const msg = 'This is the list of our students\n';
  try {
    const students = await countStudents(path);
    let output = '';
    if (Array.isArray(students)) {
      output = students.join('\n');
    } else if (typeof students === 'string') {
      output = students;
    } else {
      output = '';
    }
    res.send(`${msg}${output}`);
  } catch (err) {
    res.send(`${msg}${err.message}`);
  }
});
app.listen(1245);
module.exports = app;
