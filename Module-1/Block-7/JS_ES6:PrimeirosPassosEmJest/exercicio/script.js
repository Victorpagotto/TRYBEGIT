const techList = [{
  tech: 'CSS',
  name: 'Lucas'
},
{
  tech: 'HTML',
  name: 'João'
},
{
  tech: 'JavaScript',
  name: 'Lucas'
},
{
  tech: 'React',
  name: 'Pedro'
},
{
  tech: 'React',
  name: 'Lucas'
},
{
  tech: 'Jest',
  name: 'Carlos'
}];
let codes = [{
  letter: 'a',
  number: '1',
}, {
  letter: 'e',
  number: '2',
}, {
  letter: 'i',
  number: '3',
}, {
  letter: 'o',
  number: '4',
}, {
  letter: 'u',
  number: '5',
}];
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];
const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
//Code Enconde
function code(char) {
  for (let i = 0; i < codes.length; i += 1) {
    if (char === codes[i].letter) {
      return codes[i].number;
    }
  }
  return char;
}
function uncode(char) {
  for (let i = 0; i < codes.length; i += 1) {
    if (char === codes[i].number) {
      return codes[i].letter;
    }
  }
  return char;
}

function encode(arr) {
  let encoded = [];
  for (let i = 0; i < arr.length; i += 1) {
    encoded[i] = code(arr[i]);
  }
  return encoded.join('');
}
function decode(arr) {
  let decoded = [];
  for (let i = 0; i < arr.length; i += 1) {
    decoded[i] = uncode(arr[i]);
  }
  return decoded.join('');
}
//TechList
function positioner(arr) {
  for (let i in arr) {
    arr[i].position = i;
  }
  return arr;
}

function createsNameList(arr) {
const nameList = [];
for (let i in arr) {
  nameList.push(arr[i].name);
}
return nameList;
}
function createsSort(arr) {
  const techSort = [];
  const techSortArr = [];
  for (let i in arr) {
    techSort[i] = arr[i].tech;
  }
  techSort.sort();
  for (let i in techSort) {
    techSortArr[i] = [techSort[i]];
  }
  return techSortArr;
}
function attributesPosition(techSort, techPosition) {
  for (let i = 0; i < techSort.length; i += 1) {
    for (let x = 0; x < techPosition.length; x += 1) {
      if (techSort[i][0] === techPosition[x].tech) {
        techSort[i][1] = techPosition[x].position;
        techPosition[x].tech = '';
        break;
      }
    }
  }
  return techSort;
}
function arrObjectSorter(arr) {
  const nameList = createsNameList(arr);
  const techSort = attributesPosition(createsSort(arr), positioner(arr));
  const techList = [];
  for (let i in techSort) {
    const object = {
      tech: techSort[i][0],
      name: nameList[techSort[i][1]]
    }
    techList.push(object);
  }
  return techList;
}
function createTechList(arr, name) {
  if (arr.length > 0) {
    const techList = [];
    for (let i in arr) {
      const object = {
        tech: arr[i],
        name: name
      }
      techList.push(object);
    }
    return arrObjectSorter(techList);
  }
  return 'Vazio!';
}
//Hydrate
function numIdentifier(char) {
  let numSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numSet.length; i += 1) {
    if (parseInt(char, 10) === numSet[i]) return true;
  }
  return false;
}
function extractor(arr) {
  let nums = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (numIdentifier(arr[i])) nums.push(parseInt(arr[i], 10));
  }
  return nums;
}
function hydrate(arr) {
  let numSet = extractor(arr);
  let sumUp = 0;
  for (let i in numSet) sumUp += numSet[i];
  if (sumUp > 1) return `${sumUp} copos de água`;
  return `${sumUp} copo de água`;
}
//Search Id
function findsEmployee(id) {
  for (let i in professionalBoard) {
    if (id === professionalBoard[i].id) return professionalBoard[i];
  }
  return false;
}
function createsInformation(detail, entries) {
  const information = {};
  for (let i in detail) {
    information[detail[i]] = 'Informação não disponível';
    for (let x in entries) {
      if (entries[x][0] === detail[i]) {
        information[detail[i]] = entries[x][1];
      }
    }
  }
  return information;
}
function searchEmployee(id, detail) {
  const employee = findsEmployee(id);
  if (employee === false) return 'ID não identificada';
  const entries = Object.entries(employee);
  return createsInformation(detail, entries);
}
console.log(sum(4, 5));
console.log(createTechList(['JavaScript', 'React', 'Jest', 'HTML', 'CSS'], 'Lucas'));
console.log('---------------------');
console.log(searchEmployee('4456-4', ['specialities']));
module.exports = {
  sum: sum,
  myRemove: myRemove,
  myFizzBuzz: myFizzBuzz,
  code: encode,
  decode: decode,
  createTechList: createTechList,
  hydrate: hydrate,
}