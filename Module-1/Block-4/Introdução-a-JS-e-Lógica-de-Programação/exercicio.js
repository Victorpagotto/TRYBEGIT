let a=3;
let b=2;
let c=3;
const angles= [40, 80, 60];

let arr=[1,4,5,7,12,25,63,44,22,-42,75,4,-1000];

function sumUp (angles){
    let sumUp=null;
    for(let i=0;i<angles.length;i++){
        sumUp+=angles[i];
    }
    return sumUp;
}

function allOperators(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
}

function biggestNumber(arr){
    let num=arr[0];
    for (let i=0; i<arr.length; i++){
        if (arr[i]>num){
            num=arr[i];
        }
    }
    return num;
}
function positiveOrNegative(c){
    switch (true){
        case (c>0):
            console.log('Positivo.');
            break;
        case (c<0):
            console.log('Negativo.');
            break;
        case (c===0):
            console.log('O valor é zero.');
            break;
        default:
            console.log('Tem alguma coisa errada.');
            break;
    }
}

function angleTriangle (angles){
    if (angles.length<=3 && sumUp(angles)>0){
        if (sumUp(angles)===180){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

allOperators(a,b);
console.log(biggestNumber(arr));
console.log(angleTriangle(angles));
positiveOrNegative(c);