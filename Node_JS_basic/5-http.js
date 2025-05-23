const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const { url } = req;
  const path = process.argv[2];
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const msg = 'This is the list of our students\n';
    countStudents(path)
      .then((students) => {
        let output = '';
        if (Array.isArray(students)) {
          output = students.join('\n');
        } else if (typeof students === 'string') {
          output = students;
        } else {
          output = '';
        }
        res.end(`${msg}${output}`);
      })
      .catch((err) => {
        res.end(`${msg}${err.message}`);
      });
  } else {
    res.end('Not Found');
  }
});
app.listen(1245);
module.exports = app;
