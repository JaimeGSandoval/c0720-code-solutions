/* eslint-disable no-unused-vars */

function union(first, second) {
  const output = Array.from(first);
  for (let i = 0; i < output.length; i++) {
    if (!output[i] || !second[i]) {
      return output;
    }
    if (!output.includes(second[i])) {
      output.push(second[i]);
    }
  }
  return output;
}
