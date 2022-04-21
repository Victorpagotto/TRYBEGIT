

const apiUrl = 'https://api.coincap.io/v2/assets';

async function getFetch() {
  const options = {
    method: 'GET'
  }
  const coin = await fetch(apiUrl, options).then((response) => response.json());
  return coin.data;
}
const list = document.getElementById('moedas');

async function getCurrency(curr1, curr2, money) {
  const coin = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest//currencies/${curr1}/${curr2}.json`)
    .then((resolve) => resolve.json())
    .then((resolve) => parseFloat(money) * resolve.brl);
    return coin;
}

async function getCriptValues() {
 const data = await getFetch()
  .then((resolve) => resolve.map((coin, index) => {
  if (index < 10) return coin;
  })
  .filter((coin) => coin !== undefined)
  .sort((a, b) =>  b.priceUsd - a.priceUsd)
  .map(async (coin, i) => {
    const value = await getCurrency('usd', 'brl', coin.priceUsd);
    return(`${i + 1}-${coin.name}:  R$${Number.parseFloat(value).toFixed(3)}`);
  }));
  return Promise.all(data);
}

getCriptValues().then((response) => response.forEach((currency) => {
  const li = document.createElement('li');
  li.innerHTML = currency;
  list.appendChild(li);
})
);