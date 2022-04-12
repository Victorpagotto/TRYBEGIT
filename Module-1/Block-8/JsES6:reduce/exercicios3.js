// model:
// id: 1,
// name: 'As Crônicas de Gelo e Fogo',
// genre: 'Fantasia',
// author: {
//   name: 'George R. R. Martin',
//   birthYear: 1948,
// },
// releaseYear: 1991,

const books = require('./books.js');
const expectedResult = 43;

function averageAge(books) {
 return books.reduce((sum, book) => sum += book.releaseYear - book.author.birthYear, 0) / books.length;
}

console.log(averageAge(books));