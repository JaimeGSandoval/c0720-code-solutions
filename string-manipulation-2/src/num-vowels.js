/* eslint-disable no-unused-vars */

function numVowels(string) {
  const vowels = 'aeiouAEIOU';
  let output = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      output++;
    }
  }
  return output;
}
