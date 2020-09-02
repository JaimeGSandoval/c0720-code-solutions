/* eslint-disable no-unused-vars */

function capitalizeWord(word) {
  const output = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  let finalOutput = '';
  for (let i = 0; i < output.length; i++) {
    if (output[i] === 's') {
      output[i].toUpperCase();
    }
    finalOutput += output[i];
  }
  return finalOutput;
}
