/* eslint-disable no-unused-vars */

function getValues(object) {
  const values = [];
  for (const value in object) {
    values.push(object[value]);
  }
  return values;
}
