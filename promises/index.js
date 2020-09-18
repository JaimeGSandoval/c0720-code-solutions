/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');
const promiseObj = takeAChance('Jaime');

promiseObj.then(function (value) {
  console.log(value);
}).catch(function (value) {
  console.error(value);
});
