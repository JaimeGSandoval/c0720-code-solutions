const express = require('express');
const app = express();
const grades = [];
let nextId = 1;
const expressJson = express.json();

app.use(expressJson);

app.post('/api/grades', function (req, res, next) {
  req.body.id = nextId;
  grades.push(req.body);
  nextId++;
  res.status(201).json(req.body);
  next();
});

app.get('/api/grades', function (req, res) {
  res.json(grades);
});

app.listen(3000, err => {
  if (err) {
    console.error(err);
  }
  /* eslint-disable no-console */
  console.log('Listening on port 3000, yo');
});
