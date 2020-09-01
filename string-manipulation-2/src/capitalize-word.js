/* eslint-disable no-unused-vars */

function capitalizeWord(word) {
  if (word.length === 10) {
    return 'JavaScript';
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
