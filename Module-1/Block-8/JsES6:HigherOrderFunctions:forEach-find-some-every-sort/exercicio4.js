const books = require('./books.js');

console.log(books.sort((a, b) => a.releaseYear - b.releaseYear));