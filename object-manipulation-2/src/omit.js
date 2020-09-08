/* eslint-disable no-unused-vars */

function omit(source, keys) {
  const keyObj = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      keyObj[key] = source[key];
    }
  }
  return keyObj;
}
