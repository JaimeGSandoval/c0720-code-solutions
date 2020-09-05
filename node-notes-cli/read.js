/* eslint-disable no-console */
const fs = require('fs');
module.exports = function readNote(data) {

  fs.readFile('./data.json', 'utf-8', (err, data) => {
    if (err) throw err;
    const dataNotes = JSON.parse(data);
    for (const i in dataNotes.notes) {
      console.log(i, dataNotes.notes[i]);
    }
  });
};
