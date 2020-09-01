/* eslint-disable no-unused-vars */

function ransomCase(string) {
  const splitStr = string.split('');
  let output = '';
  let count = 1;
  for (let i = 0; i < splitStr.length; i++) {
    if (count % 2 !== 0) {
      splitStr[i] = splitStr[i].toLowerCase();
    } else {
      splitStr[i] = splitStr[i].toUpperCase();
    }
    output += splitStr[i];
    count++;
  }
  return output;
}
