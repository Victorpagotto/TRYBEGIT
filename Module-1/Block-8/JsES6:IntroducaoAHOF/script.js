//Exercicio 1
function searchForSpaces(char) {
  if (char === ' ') {
    return '.';
  }
  return char;
}
function formatsMailname(name) {
  const mailName = [];
  for (let i = 0; i < name.length; i += 1) {
    mailName.push(searchForSpaces(name[i]));
  }
  return mailName.join('').toLowerCase();
}
function generatesEmployee(name) {
  return {
    fullName: name,
    email: `${formatsMailname(name)}@trybe.com`,
  }
}
const newEmployees = () => { 
  return {
    id1: generatesEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generatesEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generatesEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
};
console.log(newEmployees());
//Exercicio 2
const generatesRandomNumber = (min, max) => Math.floor((Math.random() * max) + min);
const sevenLuck = (bet) => bet === generatesRandomNumber(1, 5) ? 'You win the prize.' : 'Try again.';
console.log(sevenLuck(4));
//Exercicio 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
function checkHOF(answers, student, func) {
  return func(answers, student);
}
function readsAnswer(right, answer) {
  if (right === answer) return 1;
  if (answer === 'N.A') return 0;
  return -0.5;
}
console.log(checkHOF(RIGHT_ANSWERS, STUDENT_ANSWERS, (rights,students) => {
  let count = 0;
  for (let i in rights) {
    count += readsAnswer(rights[i], students[i]);
  }
  return count;
}));