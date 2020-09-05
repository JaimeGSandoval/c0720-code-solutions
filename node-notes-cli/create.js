const data = require('./data.json');
// const fs = require('fs');
module.exports = function createNote(strNote) {
  data.nextId++;
  data.notes[data.nextId - 1] = strNote;
  return data;
};

// module.exports = function createNote(strNote) {

//   data.nextId++;
//   data.notes[data.nextId - 1] = strNote;
//   fs.writeFile('data.json', data, err => {
//     if (err) {
//       console.log(err);
//       process.exit(1);
//     }
//   });
//   return data;

// };
