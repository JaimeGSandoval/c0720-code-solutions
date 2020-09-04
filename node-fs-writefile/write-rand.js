const fs = require('fs');

const random = Math.random();
fs.writeFile('./node-fs-writefile/random.txt', random, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
