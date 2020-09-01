/* eslint-disable no-unused-vars */

function getKeys(object) {
  const keys = [];
  if (object === {}) return keys;
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
