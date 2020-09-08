/* eslint-disable no-unused-vars */

function invert(source) {
  const outputObj = {};
  const objKeys = Object.keys(source);
  const objValues = Object.values(source);
  for (let i = 0; i < objValues.length; i++) {
    outputObj[objValues[i]] = objKeys[i];
  }
  return outputObj;
}
