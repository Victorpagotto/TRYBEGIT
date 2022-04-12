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
const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks(books) {
  return books.filter((book) => 2022 - book.releaseYear >= 60).map((book) => book.name);
}

console.log(oldBooks(books));