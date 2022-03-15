function tagWText(tag, text = '', parent = document.getElementsByTagName('body')[0]) {
    let tagging = document.createElement(tag);
    parent.appendChild(tagging);
    tagging.innerText = text;
    return tagging;
}
function classer(element = '', attribute, type = 'class') {
    element.setAttribute(type, attribute);
}
let firstH1 = tagWText('h1', 'Exercício 5.2 - JavaScript DOM');
let main = tagWText('main');
classer(main, 'main-content');
let section1 = tagWText('section', '', main);
//Section 1 center
classer(section1, 'center-content');
//Section 2 left
let section2 = tagWText('section', '', main);
let img1 = tagWText('img','', section2);
classer(img1, 'https://picsum.photos/200', 'src');
classer(img1, 'small-image');
classer(section2, 'left-content');
//section 3 right
let section3 = tagWText('section', '', main);
classer(section3, 'right-content');
tagWText('p','Algum texto para preencher espaço.', section1);
