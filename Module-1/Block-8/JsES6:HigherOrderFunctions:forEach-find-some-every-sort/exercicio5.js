const books = require('./books.js');

console.log(books.every((book) => book.author.birthYear <= 1999 && book.author.birthYear >= 1900));