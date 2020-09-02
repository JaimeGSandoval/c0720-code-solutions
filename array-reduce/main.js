/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log('Sum', sum);

const product = numbers.reduce((accumulator, current) => accumulator * current);
console.log('Product', product);

const balance = account.reduce((accumulator, current) => {
  if (current.type === 'deposit') {
    accumulator += current.amount;
  } else {
    accumulator -= current.amount;
  }
  return accumulator;
}, 0);
console.log('Balance', balance);

const composite = {};
const reducer = traits.reduce((accumulator, current) => Object.assign(composite, current), 0);
console.log('Composite', composite);
