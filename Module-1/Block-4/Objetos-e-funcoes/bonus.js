let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

  let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

function romanumCalculus(string){
    let letters=['I','V','X','L','C','D','M'];
    let values=[1,5,10,50,100,500,1000];
    let aux=string.toUpperCase();
    let sumUp=0;
    for (let i=0;i<aux.length;i++){
        sumUp+=values[letters.indexOf(aux[i])];
        if(values[letters.indexOf(aux[i])]>values[letters.indexOf(aux[i-1])] && i!==0){
            sumUp-=2*values[letters.indexOf(aux[i-1])];
        };
    };
    return sumUp;
}
function pairNumbers (vector){
    let pairs=[];
    for (let i=0; i<vector.length;i++){
        for (x in vector[i]){
            if (vector[i][x]%2===0){
                pairs.push(vector[i][x]);
            }
        }
    }
    return pairs;
}

function fruitBasket (fruits){
    let choices=[];
    for (j in fruits){
        choices[j]={
            fruit: fruits[j],
            quantity: 0,
        }
    }
    for (key in basket){
        for (let i=0;i<choices.length;i++){
            if (basket[key]==choices[i].fruit){
                choices[i].quantity++;
            }
        }
    }
    return choices;
}
function fruitphrase (fruits){
    let phrase='Your basket has:';
    let choices=fruitBasket(fruits);
    for (y in choices){
        phrase+=' '+choices[y].quantity+' '+choices[y].fruit+'s';
    }
    return phrase;
}
function names(object){
    console.log('---blocoUm---');
    for (let x=0; x<object.blocoUm.length; x++){
        console.log(object.blocoUm[x].nome, object.blocoUm[x].sobrenome);
    }
    console.log('---blocoDois---');
    for (let x=0; x<object.blocoDois.length; x++){
        console.log(object.blocoDois[x].nome, object.blocoDois[x].sobrenome);
    }
}
console.log('----------1----------');
console.log(romanumCalculus('MMCXXXIV'));
console.log('----------2----------');
console.log(pairNumbers(vector));
console.log('----------3----------');
console.log(fruitphrase(['Melancia', 'Abacate', 'Jaca']));
console.log('----------4----------');
console.log('O morador do bloco 2 de nome', moradores.blocoDois[1].nome, moradores.blocoDois[1].sobrenome, 'mora no andar', moradores.blocoDois[1].andar, 'apartamento', moradores.blocoDois[1].apartamento);
console.log('----------5----------');
names(moradores);
