/* eslint-disable no-console */
const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');
const notes = [];
let stringifiedNoteData = null;

function newNoteCreation(content) {
  data.nextId++;
  data.notes[data.nextId - 1] = {};
  data.notes[data.nextId - 1].content = content;
  data.notes[data.nextId - 1].id = data.nextId - 1;
  return data;
}

app.use(express.json());

app.get('/api/notes', function (req, res, next) {
  const notesKeyLength = Object.keys(data.notes).length;
  if (notesKeyLength === 0) {
    res.send(notes);
  } else {
    for (const i in data.notes) {
      notes.push(data.notes[i]);
    }
    res.send(notes).json();
  }
  next();
});

app.get('/api/notes/:id', function (req, res, next) {
  for (const objId in data.notes) {
    if (req.params.id < 1) {
      return res.status(400).json({ error: 'ID must be a positive integer' });
    } else if (req.params.id === objId) {
      return res.send(data.notes[objId]);
    }
  }
  next();
  return res.status(404).json({ error: 'Cannot find note with id ' + req.params.id });
});

app.post('/api/notes', function (req, res, next) {

  if (!req.body.content) {
    return res.status(400).send({ error: 'content is a required field' });

  } else if (req.body.content) {
    req.body.id = data.nextId;
    stringifiedNoteData = JSON.stringify(newNoteCreation(req.body.content), null, 2);

    fs.writeFile('data.json', stringifiedNoteData, err => {
      if (err) {

        console.error({ error: 'An unexpected error occurred.' });
        process.exit(1);
      }
    });

    return res.status(201).send(req.body).json();
  }

  next();
});

app.listen(3000, err => {
  if (err) throw err;
  console.log('Listening on port 3000');
});
