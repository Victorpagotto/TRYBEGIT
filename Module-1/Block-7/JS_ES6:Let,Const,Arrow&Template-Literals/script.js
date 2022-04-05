const oddsAndEvens = [13, 3, 4, 100, 7, 2];

const escopo = (escopo = false) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
};

function passThroughOrder(i, nums) {
  for (let x = 0; x < nums.length - i; x += 1) {
    if (nums[x + 1] < nums[x]) {
      let holder = nums[x + 1];
      nums[x + 1] = nums[x];
      nums[x] = holder;
    }
  }
  return nums;
}

function numOrder(nums) {
  for(let i = 0; i < nums.length - 1; i += 1) {
    nums = passThroughOrder(i, nums);
  }
  return nums;
}

escopo()
console.log(numOrder(oddsAndEvens));

let factorial = (num, fac = 1, hold = 1) => (hold < num) ? factorial(num, fac *= hold, hold + 1) : fac;

console.log(factorial(9)); //Resultado esperado: 1*2*3*4*5*6*7*8*9 = 40320;