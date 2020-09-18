/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');
const promiseObj = takeAChance('Jaime');

promiseObj.then(success => {
  console.log(success);
}).catch(error => {
  console.error(error);
});
