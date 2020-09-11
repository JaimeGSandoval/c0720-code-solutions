/* eslint-disable no-console */
const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');
let stringifiedNoteData = null;

function newNoteCreation(content) {
  data.notes[data.nextId] = {};
  data.notes[data.nextId].id = data.nextId;
  data.notes[data.nextId].content = content;
  data.nextId++;
  return data;
}

app.use(express.json());

app.get('/api/notes', function (req, res) {
  const notes = [];
  const notesKeyLength = Object.keys(data.notes).length;
  if (notesKeyLength === 0) {
    res.send(notes);
  } else {
    for (const i in data.notes) {
      notes.push(data.notes[i]);
    }
    res.send(notes).json();
  }
});

app.get('/api/notes/:id', function (req, res) {
  for (const objId in data.notes) {
    if (req.params.id < 1) {
      res.status(400).json({ error: 'ID must be a positive integer' });
      return;
    } else if (req.params.id === objId) {
      res.send(data.notes[objId]);
      return;
    }
  }
  res.status(404).send({ error: 'Cannot find note with id ' + req.params.id });
});

app.post('/api/notes', function (req, res, next) {

  if (!req.body.content) {
    res.status(400).send({ error: 'content is a required field' });

  } else if (req.body.content) {
    req.body.id = data.nextId;
    stringifiedNoteData = JSON.stringify(newNoteCreation(req.body.content), null, 2);

    fs.writeFile('data.json', stringifiedNoteData, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
        return;
      }
      res.status(201).send(req.body).json();
    });
  }
});

app.listen(3000, err => {
  if (err) throw err;
  console.log('Listening on port 3000');
});
