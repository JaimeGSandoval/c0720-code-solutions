/* eslint-disable no-console */

const fs = require('fs');

function concatFiles(obj) {
  for (let i = 2; i < obj.length; i++) {
    fs.readFile('./node-fs-readfile/' + obj[i], 'utf-8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }

}

concatFiles(process.argv);
