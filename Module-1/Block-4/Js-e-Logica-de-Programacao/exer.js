let array = ['java', 'javascript', 'python', 'html', 'css'];

function factorial (range){
    let factorial=1;
    for (let i=1;i<=range;i++){
        factorial=factorial*i;
    }
    return factorial;
}
function invert (word){
    let inverted=[]
    for (let i=word.length-1; i>=0;i--){
        inverted.push(word[i]);
    }
    return inverted.join('');
}
function biggestOne(wordSet){
    let word=wordSet[0];
    for (let i=0;i<wordSet.length;i++){
        if(wordSet[i].length>word.length){
            word=wordSet[i];
        }
    }
    return word;
}

function smallestOne(wordSet){
    let word=wordSet[0];
    for (let i=1;i<wordSet.length;i++){
        if(wordSet[i]<word){
            word=wordSet[i];
        }
    }
    return word;
}

function biggestNumber (numSet){
    let num=numSet[0];
    for (let i=1; i<numSet.length;i++){
        if(numSet[i]>num){
            num=numSet[i];
        }
    }
    return num;
}

function primeNumber(range){
    let primes= [];
    for (let i=2; i<=range;i++){
        let sumUp = 0;
        for (let c=1;c<=i;c++){
            if (i%c===0){
                sumUp++;
            }
        }
        if (sumUp<=2){
            primes.push(i);
        }
    }
    return biggestNumber(primes);
}

console.log('------Exercicio1------');
console.log(factorial(10));
console.log('------Exercicio2------');
console.log(invert('tryber'));
console.log('------Exercicio3------');
console.log('Biggest word: '+biggestOne(array));
console.log('Smallest word: '+smallestOne(array));
console.log('------Exercicio4------');
console.log(primeNumber(100));
