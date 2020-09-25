// eslint-disable-next-line no-console

const express = require('express');
const app = express();
const pg = require('pg');

app.use(express.json());

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;

  db.query(sql)
    .then(result => {

      const grades = result.rows;
      if (!grades) {
        res.status(404).json({
          error: 'No Grades Recorded'
        });
      } else {
        res.json(grades);
      }
    })
    .catch(err => {
      // the query failed for some reason
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {

  const text = 'INSERT INTO grades(name, course, grade) VALUES($1, $2, $3) RETURNING *';
  const values = [req.body.name, req.body.course, req.body.grade];

  db.query(text, values)
    .then(result => {
      const grade = result.rows;
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
  next();
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
