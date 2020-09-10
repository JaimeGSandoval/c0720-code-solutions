/* eslint-disable no-console */
const express = require('express');
const app = express();
const data = require('./data.json');
const notes = [];

app.get('/api/notes', function (req, res, next) {
  const notesKeyLength = Object.keys(data.notes).length;
  if (notesKeyLength === 0) {
    res.send(notes);
  } else {
    res.send([data.notes]).json();
  }
  next();
});

app.get('/api/notes/:id', function (req, res, next) {
  for (const key in data.notes) {
    if (req.params.id < 1) {
      return res.status(400).json({ error: 'Invalid ID. The ID value must be greater than 1' });
    } else if (req.params.id === key) {
      return res.send(data.notes[key]);
    }
  }
  next();
  return res.status(400).json({ error: 'ID not found. Please enter a different ID' });
});

app.listen(3000, err => {
  if (err) throw err;
  console.log('Listening on port 3000');
});
