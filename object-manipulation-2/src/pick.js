/* eslint-disable no-unused-vars */

function pick(source, keys) {
  const keyObj = {};
  for (const key of keys) {
    if (source[key] !== undefined) {
      keyObj[key] = source[key];
    }
  }
  return keyObj;
}
