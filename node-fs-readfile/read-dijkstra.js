/* eslint-disable no-console */

const fs = require('fs');

fs.readFile('./node-fs-readfile/dijkstra.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});