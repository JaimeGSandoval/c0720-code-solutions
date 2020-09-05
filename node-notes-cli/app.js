const fs = require('fs');
const createNote = require('./create.js');
const readNote = require('./read.js');
const updateNote = require('./update.js');
const deleteNote = require('./delete.js');
const task = process.argv[2];
const note = process.argv[3];
let stringify = null;

/* eslint-disable no-console */
function executeTask(strNote, id) {
  switch (task) {

    case 'create':
      stringify = JSON.stringify(createNote(strNote), null, 2);
      fs.writeFile('data.json', stringify, err => {
        if (err) {
          console.log(err);
          process.exit(1);
        }
      });

      break;

    case 'read':
      readNote();
      break;

    case 'update':
      updateNote(strNote, id);
      break;

    case 'delete':
      deleteNote(strNote);
      break;

    default: return 'Invalid Entry';
  }
}

executeTask(note);
