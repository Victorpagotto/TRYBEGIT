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
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered(books) {
  return books.filter((book) => 2022 - book.releaseYear >= 60).sort((a, b) =>  a.releaseYear - b.releaseYear);
}

console.log(oldBooksOrdered(books));