const data = require('./data.json');
module.exports = function createNote(strNote) {
  data.nextId++;
  data.notes[data.nextId - 1] = strNote;
  return data;
};
