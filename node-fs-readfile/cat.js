/* eslint-disable no-console */

const fs = require('fs');

function print(el) {
  console.log(el);
}

function concatFiles(obj, cb) {
  for (let i = 2; i < obj.length; i++) {
    fs.readFile('./node-fs-readfile/' + obj[i], 'utf-8', (err, data) => {
      if (err) throw err;
      cb(data);
    });
  }
}

concatFiles(process.argv, print);
