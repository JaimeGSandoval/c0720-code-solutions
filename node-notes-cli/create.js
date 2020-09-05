const data = require('./data.json');

module.exports = function createNote(strNote) {
  data.nextId++;
  data.notes[data.nextId] = strNote;
  return data;
};
