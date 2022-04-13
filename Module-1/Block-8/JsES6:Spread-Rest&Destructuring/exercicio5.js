const myList = [1, 2, 3];

// escreva swap abaixo

const swap = ([first, second, third]) => [third, second, first];
function seriousSwap(...list) {
  let newArray = [];
  for (let i = list.length - 1; i >= 0; i -= 1) {
    newArray.push(list[i]);
  }
  return newArray;
}

console.log(swap(myList));
console.log(seriousSwap(1, 2, 3, 4, 5, 6));