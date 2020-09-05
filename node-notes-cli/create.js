/* eslint-disable no-console */
const data = require('./data.json');
const fs = require('fs');
const note = process.argv[3];
let stringifiedNoteData = null;

function createNote(strNote) {
  data.nextId++;
  data.notes[data.nextId - 1] = strNote;
  return data;
}

module.exports = function appendNote(str) {
  stringifiedNoteData = JSON.stringify(createNote(note), null, 2);
  fs.writeFile('data.json', stringifiedNoteData, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
};
