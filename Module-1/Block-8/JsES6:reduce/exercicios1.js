const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function anotherMethod(arrays) {
  return arrays.reduce((acc, array) => {
    array.forEach((position) => {
      acc.push(position);
    });
    return acc;
  }, [])
}

console.log(anotherMethod(arrays));
console.log(arrays.reduce((arr1, arr2) => arr1.concat(arr2)));
