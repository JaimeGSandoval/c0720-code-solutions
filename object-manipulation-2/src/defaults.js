/* eslint-disable no-unused-vars */

function defaults(target, source) {
  for (const [key, value] of Object.entries(source)) {
    if (!(key in target)) {
      target[key] = value;
    }
  }
}
