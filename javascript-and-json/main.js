/* eslint-disable no-console */

const books = [{ title: 'The Almchemist', author: 'Pablo Cuehlo', isbn: '‎978-3-16-148410-0' }, { title: 'The Lord of the Rings: The Fellowship of the Ring', author: 'J.R.R. Tolkien', isbn: '‎978-3-16-135410-0' }, { title: 'The Adventurs of Huckleberry Finn', author: 'Mark Twain', isbn: '‎174-3-16-148410-0' }];

console.log(typeof JSON.stringify(books[0]));
console.log(typeof JSON.stringify(books[1]));
console.log(typeof JSON.stringify(books[2]));

const student = '{"name": "Naruto", "count": 42}';

console.log(typeof JSON.parse(student));
