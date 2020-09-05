/* eslint-disable no-console */
const appendNote = require('./create.js');
const readNote = require('./read.js');
const updateNote = require('./update.js');
const deleteNote = require('./delete.js');
const task = process.argv[2];
const note = process.argv[3];

function executeTask(strNote, id) {
  switch (task) {

    case 'create':
      appendNote(strNote);
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
