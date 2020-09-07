/* eslint-disable no-console */
const createNote = require('./create.js');
const readNote = require('./read.js');
const updateNote = require('./update.js');
const deleteNote = require('./delete.js');
const task = process.argv[2];
const noteId = process.argv[3];
const note = process.argv[4];

function executeTask(strNote, id) {
  switch (task) {

    case 'create':
      createNote(strNote);
      break;

    case 'read':
      readNote();
      break;

    case 'update':
      updateNote(strNote, id);
      break;

    case 'delete':
      deleteNote(strNote, id);
      break;

    default: return 'Invalid Entry';
  }
}

executeTask(note, noteId);
