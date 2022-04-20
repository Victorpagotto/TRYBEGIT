// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   console.log("Returned planet: ", mars);
// };

// setTimeout(getPlanet, 4000);

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo

// function sendMarsTemperature(delay, func, action, errorAction) {
//   const temp = func();
//   if (temp > 30) {
//     setTimeout(() => {
//       console.log(`Mars temperature is: ${temp} degree Celsius`);
//     }, delay());
//     setTimeout(() => {
//       action(temp);
//     }, delay() * 2);
//   } else {
//     errorAction();
//   }
// } // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

// sendMarsTemperature(messageDelay, getMarsTemperature, (temp) => {
//   greet(temp);
//   setTimeout(() => {
//     console.log(`Also, it is currently ${toFahrenheit(temp)}ºF at Mars`)
//   }, 2000);
// }, () => {
//   handleError("Too cold out here. i'll go home now.");
// });

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

module.exports = uppercase;