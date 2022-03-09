// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.
// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.
// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.
// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.
// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.
//Declarações de variáveis.
// Random Generator
function randomNumber(low, high){
    let num = Math.floor(Math.random()*(high-low+1)+low)
    return num;
}

// ##EX1##
function sumUp (init, end){
    let sumUp=null;
    for (let i=init; i<=end;i++){
        sumUp+=i;
    }
    return sumUp;
}
//##EX2##
function divisibleFor3(init, end){
    let sumUp=null;
    for (let i=init;i<=end;i++){
        if (i%3===0){
            sumUp++;
        }
    }
    return sumUp;
}
//##EX3##
function JOKENPO(player1, player2){
    console.log('1=pedra, 2=tesoura, 3=papel');
    console.log('Jogador 1 foi:'+player1);
    console.log('Jogador 2 foi:'+player2);
    console.log('Resultado:')
    if (player1===player2){
        console.log('Empate')
    }else if(player2===player1+1){
        console.log('Jogador 1 vence.')
    }else if(player1===player2+1){
        console.log('Jogador 2 vence')
    }else if(player1===1 && player2===3){
        console.log('Jogador 2 vence.')
    }else if(player2===1 && player1===3){
        console.log('Jogador 1 vence.')
    }
}
//##EX4##
function age (idade){
    if (idade >= 18) {
        return "A pessoa é maior de idade";
    }
    else {
        return "A pessoa é menor de idade";
    }
}

//##EX5##
function AgeComparator(age1,age2,age3){
    console.log('Marcella: '+age1);
    console.log('Carlos: '+age2);
    console.log('Camila: '+age3);
    let Marcella = age1;
    let Carlos = age2;
    let Camila = age3;
    let maisNovo = ""
    if (Marcella < Camila && Marcella < Carlos){
        maisNovo = "Marcella, com " + age1 + ' anos.';
    } else if (Carlos < Camila){
        maisNovo = "Carlos, com " + age2 + ' anos.';
    } else {
        maisNovo = "Camila, com " +age3 + ' anos.';
    }
    return maisNovo;
}
console.log('-------Ex1-------');
console.log(sumUp(50, 100));
console.log('-------Ex2-------');
console.log(divisibleFor3(1,125));
console.log('-------Ex3-------');
JOKENPO(randomNumber(1,3), randomNumber(1,3));
console.log('-------Ex4-------');
console.log(age(randomNumber(1,32)));
console.log('-------Ex5-------');
console.log(" eh o mais novo(a): " + AgeComparator(randomNumber(2,45),randomNumber(2,45),randomNumber(2,45)));