/* eslint-disable no-console */

const add = require('./add.js');
const subtract = require('./subtract.js');
const multiply = require('./multiply.js');
const divide = require('./divide.js');
const num1 = process.argv[2];
const operation = process.argv[3];
const num2 = process.argv[4];

function calculate(a, b) {
  a = Number(a);
  b = Number(b);

  switch (operation) {
    case 'plus':
      console.log('Result:', add(a, b));
      break;
    case 'minus':
      console.log('Result:', subtract(a, b));
      break;
    case 'times':
      console.log('Result:', multiply(a, b));
      break;
    case 'over':
      console.log('Result:', divide(a, b));
      break;
    default: console.log('Invalid entry');
  }
}

calculate(num1, num2);
