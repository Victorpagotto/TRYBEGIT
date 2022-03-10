let wordSet=['arara','desenvolvimento'];
function reverse(arr){
    let reversed=[];
    for (let i=arr.length-1; i>=0;i--){
        reversed.push(arr[i]);
    }
    return reversed;
}
function arrayComparator(arr1,arr2){
    if(arr1.length===arr2.length){
        let count=0;
        for (j in arr2){
            if (arr1[j]==arr2[j]){
                count++;
            }
        };
        if (count===arr1.length){
            return true;
        }else{
            return false;
        }
    }else{
        console.log('Arrays of different sizes.');
    }
}
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
        }
    }
};

console.log('----------1----------');
printPal(wordSet);
console.log('----------2----------');
