const books = require('./books.js');

console.log(books.find((book) => book.author.birthYear >= 1947));