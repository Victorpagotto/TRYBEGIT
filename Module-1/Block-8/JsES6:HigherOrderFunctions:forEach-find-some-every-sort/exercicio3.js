const books = require('./books.js');

console.log(books.find((book) => book.name.length >= 26));