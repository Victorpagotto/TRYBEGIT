let a=3;
let b=2;
let c=3;
const angles= [40, 80, 60];
let grade = 75;
let arr=[1,4,5,7,12,25,63,44,22,-42,75,4,-1000];
numberSet = [1213, 123, 533];
let cost = 5;
let sellPrice = 9;
let produNumber = 1000;

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
function chessPiece (chess){
    switch (chess.toLowerCase()){
        case 'king':
            console.log('One square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling.');
            break;
        case 'queen':
            console.log('Diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.');
            break;
        case 'rook':
            console.log('Horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.');
            break;
        case 'knight':
            console.log('In an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.');
            break;
        case 'bishop':
            console.log('Diagonally any number of squares. They are unable to jump over pieces.');
            break;
        case 'pawn':
            console.log('Vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. The pawns capture one square diagonally in a forward direction. Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.');
            break;
        default:
            console.log('This isnt a chess piece, or you misstyped. Make sure you typed correctly.')
    }
}
function gradeCalculator(grade){
    grade = Math.floor(grade/10);
    switch (grade){
        case 9:
            return 'A';
        case 8:
            return 'B';
        case 7:
            return 'C';
        case 6:
            return 'D';
        case 5:
            return 'E';
        default:
            if (grade<5 && grade>=0){
            return 'F';
            }else{
                return 'Error. Grade is not a real grade value.'
            }
    }
}

function pairOrNotPair (numberSet){
    for (let i=0; i<numberSet.length; i++){
        if (numberSet[i]%2===0){
            return true;
        }
    }
    return false;
}
function NotPair (numberSet){
    for (let i=0; i<numberSet.length; i++){
        if (numberSet[i]%2!==0){
            return true;
        }
    }
    return false;
}
function profiting(cost, sellPrice, produNumber){
    cost = (cost/5) + cost;
    return (sellPrice - cost)*produNumber;
}

console.log('------------Exercicio------------');
allOperators(a,b);
console.log('------------Exercicio------------');
console.log(biggestNumber(arr));
console.log('------------Exercicio------------');
console.log(angleTriangle(angles));
console.log('------------Exercicio------------');
positiveOrNegative(c);
console.log('------------Exercicio------------');
chessPiece('Queen');
console.log('------------Exercicio------------');
console.log(gradeCalculator(grade));
console.log('------------Exercicio------------');
console.log(pairOrNotPair(numberSet));
console.log('------------Exercicio------------');
console.log(NotPair(numberSet));
console.log('------------Exercicio------------');
console.log(profiting(cost, sellPrice, produNumber));
console.log('------------Exercicio------------');
console.log(taxing(salary));
console.log('------------Exercicio------------');