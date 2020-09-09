/* eslint-disable no-unused-vars */

function swapChars(firstIndex, secondIndex, string) {
  const splitStr = string.split('');
  const tempVal = splitStr[firstIndex];
  splitStr[firstIndex] = splitStr[secondIndex];
  splitStr[secondIndex] = tempVal;
  return splitStr.join('');
}
