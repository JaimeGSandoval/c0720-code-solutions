/* eslint-disable no-console */
const fs = require('fs');
const data = require('./data.json');

module.exports = function readNote() {
  fs.readFile('./data.json', 'utf-8', err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    for (const key in data.notes) {
      console.log(`${key}: ${data.notes[key]} `);
    }
  });
};
