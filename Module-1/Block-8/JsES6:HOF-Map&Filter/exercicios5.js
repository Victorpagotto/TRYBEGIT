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
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors(books) {
  return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((book) => book.author.name).sort();
}

console.log(fantasyOrScienceFictionAuthors(books));