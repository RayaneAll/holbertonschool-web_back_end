process.stdin.setEncoding('utf-8');
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (input) => {
  const name = input.trim();
  console.log('Your Name is: ', name);
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
