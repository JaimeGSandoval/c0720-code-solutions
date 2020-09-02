/* eslint-disable no-unused-vars */

function chunk(array, size) {
  const parentArr = [];
  for (let i = 0; i < array.length; i += size) {
    const subArr = [];
    for (let j = 0; j < size; j++) {
      subArr.push(array[j]);
    }
    parentArr.push(subArr);
  }
  return parentArr;
}
