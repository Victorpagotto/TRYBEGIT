const books = require('./books.js');

console.log(books.some((book) => book.releaseYear >= 1980 & book.releaseYear <= 1989));