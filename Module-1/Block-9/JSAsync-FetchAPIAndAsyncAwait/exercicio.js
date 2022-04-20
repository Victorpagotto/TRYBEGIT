// apiScript.js
const apiUrl = 'https://icanhazdadjoke.com/';

async function test(result) {
  const joke = await result;
  console.log(joke);
}

const fetchJoke = async () => {
  const options = {
    headers: { 'Accept': 'application/json' }
  };
  let joke= '';
  await fetch(apiUrl, options).then((result) => result.json()).then((response) => joke = response.joke);
  document.getElementById('jokeContainer').innerText = joke;
};

fetchJoke();