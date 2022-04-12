// Model:
// id: 1,
// name: 'As Crônicas de Gelo e Fogo',
// genre: 'Fantasia',
// author: {
//   name: 'George R. R. Martin',
//   birthYear: 1948,
// },
// releaseYear: 1991,

const books = require('./books.js');
const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName(books) {
  return books.filter((book) => book.author.name.split(' ').slice(0, 3).filter((char) => char.endsWith('.')).length === 3).map((book) => book.name);
}

function anotherWay(books) {
  return books.filter((book) => book.author.name.match(/(\D\.\s){3}|(\D\.\s){2}\D\./g))
}

console.log(anotherWay(books));