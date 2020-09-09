const express = require('express');
const app = express();
const students = [
  {
    id: 1,
    name: 'Uzumaki Naruto',
    course: 'Chakra Control',
    grade: 90
  },
  {
    id: 2,
    name: 'Uchiha Sasuke',
    course: 'Chakra Control',
    grade: 100
  }
];

app.get('/api/grades', function (req, res) {
  res.json(students);
});

app.listen(3000, err => {
  if (err) {
    console.error(err);
  }
});
