/* eslint-disable no-console */
const fs = require('fs');
const dataNotes = require('./data.json');

module.exports = function readNote(data) {

  fs.readFile('./data.json', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    for (const key in dataNotes.notes) {
      console.log(`${key}: ${dataNotes.notes[key]} `);
    }
  });
};
