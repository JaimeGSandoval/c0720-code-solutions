/* eslint-disable no-unused-vars */

function zip(first, second) {
  const output = [];
  for (let i = 0; i < first.length; i++) {
    const subArr = [];
    if (!first[i] || !second[i]) {
      return output;
    }
    subArr.push(first[i]);
    subArr.push(second[i]);
    output.push(subArr);
  }
  return output;
}
