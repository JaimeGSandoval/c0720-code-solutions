/* eslint-disable no-unused-vars */

function capitalizeWord(word) {
  const output = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  const split = output.split('');
  let finalOutput = '';
  for (let i = 0; i < split.length; i++) {
    if (split[i] === 's') {
      split[i] = split[i].toUpperCase();
    }
    finalOutput += split[i];
  }
  return finalOutput;
}
