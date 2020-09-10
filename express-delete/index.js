const express = require('express');
const app = express();
const grades = [
  {
    id: 1,
    name: 'Kurosaki Ichigo',
    course: 'Soul Reaper 101',
    grade: 100
  },
  {
    id: 2,
    name: 'Clark Kent',
    course: 'Journalism',
    grade: 100
  }
];

app.get('/api/grades', function (req, res, next) {
  res.json(grades);
  next();
});

app.delete('/api/grades/:id', function (req, res, next) {
  const id = parseInt(req.params.id);
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].id === id) {
      grades.splice(i, 1);
      return res.sendStatus(204);
    }
  }
  res.sendStatus(404);
  next();
});

app.listen(3000, err => {
  if (err) throw err;
  /* eslint-disable no-console */
  console.log('Listening on port 3000');
});
