/* eslint-disable no-console */
const fs = require('fs');
const data = require('./data.json');
let stringifiedNoteData = null;

function findNoteToDelete(note, id) {
  for (const key in data.notes) {
    if (key === id) {
      delete data.notes[key];
      return data;
    }
  }
}

module.exports = function deleteNote(str) {
  stringifiedNoteData = JSON.stringify(findNoteToDelete(process.argv[4], process.argv[3]), null, 2);
  fs.writeFile('data.json', stringifiedNoteData, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
};
