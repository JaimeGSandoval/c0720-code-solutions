/* eslint-disable no-unused-vars */

function getWords(string) {
  if (string === '') {
    return [];
  } else if (string.indexOf(' ') === -1) {
    return [string];
  } else {
    return string.split(' ');
  }
}
