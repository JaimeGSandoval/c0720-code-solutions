/* eslint-disable no-unused-vars */

function toObject(keyValuePair) {
  const output = {};
  const property = keyValuePair[0];
  output[property] = keyValuePair[1];
  return output;
}
