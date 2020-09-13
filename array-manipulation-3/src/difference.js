/* eslint-disable no-unused-vars */

function difference(first, second) {
  const output = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      output.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      output.push(second[i]);
    }
  }
  return output;
}
