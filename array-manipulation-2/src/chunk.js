/* eslint-disable no-unused-vars */

function chunk(array, size) {
  const parentArr = [];
  for (let i = 0; i < array.length; i += size) {
    parentArr.push(array.slice(i, i + size));
  }
  return parentArr;
}
