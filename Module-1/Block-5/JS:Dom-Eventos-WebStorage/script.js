let pElements = document.getElementsByTagName('p');
/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

// Exercicio 1
function changeText() {
    for (let i = 0; i < pElements.length; i += 1) {
        pElements[i].innerText = 'Eu me vejo programando em back-end, e finalmente sendo um programador pleno experiente, eficiente e muito capaz.';
    }
}
function changeSideColor() {
    document.getElementsByClassName('main-content')[0].style.backgroundColor = '#036b52';
}
function changeMainColor() {
    document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
}
function correctText() {
    document.getElementsByClassName('title')[0].innerText = 'JavaScript';
}
function modifyText() {
    for (let i = 0; i < pElements.length; i += 1) {
        pElements[i].style.marginLeft = '70px';
        pElements[i].innerHTML = pElements[i].innerHTML.toUpperCase() +' '+(i+1);
    }
}
function tagContent() {
    for (let i = 0; i < pElements.length; i += 1) {
        console.log(pElements[i].innerHTML);
    }
}

changeText();
changeSideColor();
changeMainColor();
correctText();
modifyText();
tagContent();