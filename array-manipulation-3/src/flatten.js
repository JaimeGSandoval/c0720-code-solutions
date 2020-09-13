/* eslint-disable no-unused-vars */

function flatten(array) {
  return array.reduce(function (accumulator, current) {
    return accumulator.concat(current);
  }, []);
}
