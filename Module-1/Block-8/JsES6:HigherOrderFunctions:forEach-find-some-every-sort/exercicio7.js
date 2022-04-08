const books = require('./books.js');

// function asserting(sorted) {
//   for (let i in sorted) {
//     if (sorted[i] === sorted[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

let sorted = books.sort((a, b) => a.author.birthYear - b.author.birthYear);

function asserting(sorted) {
  for (let i = 1; i < sorted.length; i += 1) {
    if (sorted[i -1].author.birthYear === sorted[i].author.birthYear) return true;
  }
  return false;
}

console.log(asserting(sorted));