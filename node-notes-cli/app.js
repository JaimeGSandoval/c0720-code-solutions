const fs = require('fs');
const createNote = require('./create.js');
const readNote = require('./read.js');
const updateNote = require('./update.js');
const deleteNote = require('./delete.js');
const task = process.argv[2];
const note = process.argv[3];
let stringify = null;

function executeTask(strNote) {
  switch (task) {
    case 'create':
      stringify = JSON.stringify(createNote(strNote), null, 2);
      fs.writeFile('data.json', stringify, err => {
        if (err) throw err;
        return 'Note added';
      });
      break;
    case 'read':
      readNote(strNote);
      break;
    case 'update':
      updateNote(strNote);
      break;
    case 'delete':
      deleteNote(strNote);
      break;
    default: return 'Invalid Entry';
  }
}

executeTask(note);
