const books = require('./books.js');

console.log(books.sort((a, b) => a.name.length - b.name.length)[0].name);