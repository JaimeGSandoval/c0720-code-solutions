/* eslint-disable no-console */
const fs = require('fs');
const data = require('./data.json');
const note = process.argv[3];
let stringifiedNoteData = null;

function newNoteCreation(strNote) {
  data.nextId++;
  data.notes[data.nextId - 1] = strNote;
  return data;
}

module.exports = function createNote(str) {
  stringifiedNoteData = JSON.stringify(newNoteCreation(note), null, 2);
  fs.writeFile('data.json', stringifiedNoteData, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
};
