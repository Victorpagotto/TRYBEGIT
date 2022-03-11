let wordSet=['arara','desenvolvimento'];
let numSet1=[2, 3, 6, 7, 10, 1];
let numSet2=[2, 4, 6, 7, 10, 0, -3];
let nameSet=['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let numSet3=[2, 3, 2, 5, 8, 2, 3];

function reverse(arr){
    let reversed=[];
    for (let i=arr.length-1; i>=0;i--){
        reversed.push(arr[i]);
    };
    return reversed;
};
function arrayComparator(arr1,arr2){
    if(arr1.length===arr2.length){
        let count=0;
        for (j in arr2){
            if (arr1[j]==arr2[j]){
                count++;
            };
        };
        if (count===arr1.length){
            return true;
        }else{
            return false;
        };
    }else{
        console.log('Arrays of different sizes.');
    };
};
function palindromo (word){
    let reversed=reverse(word);
    if(arrayComparator(word, reversed)===true){
        return true;
    }else{
        return false;
    };
};
function printPal(arr){
    for (i in arr){
        if (palindromo(arr[i])===true){
            console.log(arr[i]+' é um palíndromo.');
        }else{
            console.log(arr[i]+' não é um palíndromo.');
        };
    };
};
function biggestNumber (arr){
    let aux=[arr[0]];
    aux[1]=0;
    for (let x=0;x<arr.length;x++){
        if (arr[x]>aux[0]){
            aux[0]=arr[x];
            aux[1]=x;
        };
    };
    return aux;
};
function smallestNumber (arr){
    let aux=[arr[0]];
    aux[1]=0;
    for (let x=0;x<arr.length;x++){
        if (arr[x]<aux[0]){
            aux[0]=arr[x];
            aux[1]=x;
        };
    };
    return aux;
};
function biggestword (arr){
    let aux=[];
    for (let x=0;x<arr.length;x++){
        aux[x]=arr[x].length;
    }
    return arr[biggestNumber(aux)[1]];
};

console.log('----------1----------');
printPal(wordSet);
console.log('----------2----------');
console.log(biggestNumber(numSet1)[1]);
console.log('----------3----------');
console.log(smallestNumber(numSet2)[1]);
console.log('----------4----------');
console.log(biggestword(nameSet));
