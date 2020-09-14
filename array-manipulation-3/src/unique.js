/* eslint-disable no-unused-vars */

function unique(array) {
  return array.filter(function (item, index) {
    return array.indexOf(item) === index;
  });
}
