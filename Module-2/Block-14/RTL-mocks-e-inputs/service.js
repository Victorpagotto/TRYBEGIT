fetch = require('node-fetch');

function randomNumGen() {
  return Math.floor(Math.random() * 101);
}

function callDoggery() {
  return fetch('https://dog.ceo/api/breeds/image/random').then(resolve => resolve.json());
}

callDoggery();

module.exports = { randomNumGen, callDoggery }