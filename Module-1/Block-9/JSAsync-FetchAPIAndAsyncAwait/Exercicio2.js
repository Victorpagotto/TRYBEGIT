

const apiUrl = 'https://api.coincap.io/v2/assets';

async function getFetch() {
  const options = {
    method: 'GET'
  }
  const coin = await fetch(apiUrl, options).then((response) => response.json());
  return coin.data;
}
const list = document.getElementById('moedas');


getFetch().then((coins) => {
  return coins.map((coin, index) => {
    if (index < 10) return coin;
  })
  .filter((coin) => coin !== undefined)
  .sort((a, b) =>  b.priceUsd - a.priceUsd)
  .map((coin, i) => `${i + 1}-${coin.name}`);
}).then((response) => response.forEach((moeda) => {
  const li = document.createElement('li');
  li.innerHTML = moeda;
  list.appendChild(li);
}));