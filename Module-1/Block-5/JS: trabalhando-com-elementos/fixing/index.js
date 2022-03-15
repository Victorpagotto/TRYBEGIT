let test = document.getElementById('elementoOndeVoceEsta').nextSibling.nextSibling.id;
let test2 = document.getElementById('pai').lastElementChild.previousElementSibling.id;
document.getElementsByTagName('body')[0].style.color = 'white';
let a = document.getElementById('elementoOndeVoceEsta');
a.parentElement.style.backgroundColor = 'black';
a.firstElementChild.innerText = 'Era uma vez um texto.';
let estudo = document.getElementById('estudo');
estudo.style.color = 'black';

//Criando elementos
a.parentElement.appendChild(document.createElement('ul'));
document.getElementsByTagName('ul')[0].setAttribute('id', 'estudo');
estudo.innerText = a.parentElement.lastElementChild.id;
a.firstElementChild.appendChild(document.createElement('p'));
document.getElementsByTagName('p')[0].setAttribute('id', 'paragrafo');
estudo.innerText = document.getElementById('paragrafo').parentElement.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling.id;
estudo.innerText = document.getElementById('paragrafo').parentElement.parentElement.nextElementSibling.id;
let pdp = document.getElementById('pai').children;
document.getElementsByTagName('body')[0].appendChild(document.createElement('ol'));
document.getElementsByTagName('ol')[0].setAttribute('id', 'elementsList');
let list = document.getElementById('elementsList');
for (let i = 0; i < pdp.length; i += 1) {
    list.appendChild(document.createElement('li'));
    list.children[i].setAttribute('id', `${i}. ${pdp[i].id} -- ${pdp[i]}`);
    list.children[i].innerText = list.children[i].id;
    console.log(list.children[i].innerText);
}
list.style.color = 'black';
document.getElementsByTagName('body')[0].appendChild(list);
