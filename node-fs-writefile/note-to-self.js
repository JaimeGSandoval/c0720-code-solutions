const fs = require('fs');

const newFile = process.argv[2];
fs.writeFile('./node-fs-writefile/note.txt', newFile, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
