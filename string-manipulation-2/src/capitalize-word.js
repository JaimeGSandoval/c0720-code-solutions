/* eslint-disable no-unused-vars */

function capitalizeWord(word) {
  const output = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  let customForJavascript = '';
  if (output.toLowerCase() === 'javascript') {
    customForJavascript = 'JavaScript';
    return customForJavascript;
  }
  return output;
}
