/* eslint-disable no-console */
const fs = require('fs');

// fs.readFile('./node-fs-readfile/' + process.argv[2], 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Tim D's solution

const fileName = process.argv[2];
fs.readFile(fileName, 'utf-8', (err, text) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(text);
});
