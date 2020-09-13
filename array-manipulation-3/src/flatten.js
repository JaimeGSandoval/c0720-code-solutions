/* eslint-disable no-unused-vars */

function flatten(arr) {
  arr = arr.reduce(function (accumulator, current) {
    return accumulator.concat(current);
  }, []);
  return arr;
}
