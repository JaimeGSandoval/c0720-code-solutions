/* eslint-disable no-unused-vars */

function capitalizeWords(string) {
  const splitStr = string.split(' ');
  const output = [];
  for (let i = 0; i < splitStr.length; i++) {
    output.push(splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1).toLowerCase());
  }
  return output.join(' ');
}
