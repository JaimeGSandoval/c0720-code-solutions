/* eslint-disable no-console */
const fs = require('fs');
const data = require('./data.json');
let stringifiedNoteData = null;

function findNoteToUpdate(note, id) {
  for (const key in data.notes) {
    if (key === id) {
      data.notes[key] = note;
      return data;
    }
  }
}

module.exports = function updateNote(str) {
  stringifiedNoteData = JSON.stringify(findNoteToUpdate(process.argv[4], process.argv[3]), null, 2);
  fs.writeFile('data.json', stringifiedNoteData, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
};
