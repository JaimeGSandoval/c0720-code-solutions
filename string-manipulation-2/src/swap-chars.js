/* eslint-disable no-unused-vars */

function swapChars(firstIndex, secondIndex, string) {
  let output = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      string[i] = string[i].charAt(secondIndex);
    } else if (i === secondIndex) {
      string[i] = string[i].charAt(firstIndex);
    }
    output += string[i];
  }
  return output;
}
