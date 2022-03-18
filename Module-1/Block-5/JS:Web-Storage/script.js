function CE(element, text = '', parent = $.getElementById('body')) {
    let eL = $.createElement(element);
    eL.innerText = text;
    parent.appendChild(eL);
    return eL;
}

const $ = document;
//data
function numberGenerate(range) {
    let nums = [];
    for (let i = 5; i <= range; i += 5) {
        nums.push(i);
    }
    return nums;
}
let colors = ['black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple'
, 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua'
,'chocolate', 'coral', 'cornflowerblue', 'darkblue', 'darkmagenta', 'darkorange'
,'deeppink', 'gainsboro', 'gold', 'indigo', 'lightcoral', 'lightblue', 'lemonchiffon'
,'lightcyan','lightgoldenrodyellow','lightgray','lightgreen','lightgrey','lightpink'
,'lightsalmon', 'lightseagreen', 'lightskyblue','tomato', 'turquoise','yellowgreen'];
let fonts = ['Arial', 'Verdana', 'Helvetica', 'Tahoma', 'Trebuchet MS'
,'Times New Roman', 'Georgia', 'Garamond', 'Courier New', 'Brush Script MT'];
let numRange = numberGenerate(100);

//buttons
let usersBtn = $.getElementById('usersBtn');
let articlesBtn = $.getElementById('articlesBtn');
let bgColorBtn = $.getElementById('bgColorBtn');
let textColorBtn = $.getElementById('textColorBtn');
let textSizebtn = $.getElementById('textSizebtn');
let lineSpaceBtn = $.getElementById('lineSpaceBtn');
let fontSizeBtn = $.getElementById('fontSizeBtn');

//Bars Functions
function addColorBGDetection(divIndex, color, parent, button) {
    divIndex.addEventListener('click', function(){
        body.style.backgroundColor = color;
        parent.innerHTML = '';
        button.classList.remove('selected');
    });
}
function addColorTextDetection(divIndex, color, parent, button) {
    divIndex.addEventListener('click', function(){
        $.getElementById('pageShape').style.color = color;
        $.getElementById('pagesHeader').style.color = color;
        parent.innerHTML = '';
        button.classList.remove('selected');
    });
}
function bGColorOptions(uL, parent, event) {
    for (let i = 0; i < colors.length; i += 1) {
        let li = CE('li', '', uL);
        let colorDiv = CE('li','',li);
        colorDiv.classList.add('colorDiv');
        colorDiv.style.backgroundColor = colors[i];
        addColorBGDetection(colorDiv, colors[i], parent, event.target);
    }
}
function textColorOptions(uL, parent, event) {
    for (let i = 0; i < colors.length; i += 1) {
        let li = CE('li', '', uL);
        let colorDiv = CE('li','',li);
        colorDiv.classList.add('colorDiv');
        colorDiv.style.backgroundColor = colors[i];
        addColorTextDetection(colorDiv, colors[i], parent, event.target);
    }
}
function colorOptions(event) {
    let parent = event.target.parentElement.parentElement.lastElementChild;
    if (event.target.classList.contains('selected') !== true) {
        event.target.classList.add('selected');
        let div  = CE('div','',parent);
        div.classList.add('scrollDiv');
        let uL = CE('ul', '', div); 
        if (event.target.id === 'bgColorBtn') {
            bGColorOptions(uL, parent, event);
        } else {
            textColorOptions(uL, parent, event);
        }
    } else {
        event.target.classList.remove('selected');
        parent.innerHTML = '';
    }
}
//Code Execution.
bgColorBtn.addEventListener('click', function(event) {
    colorOptions(event);
});
textColorBtn.addEventListener('click', function(event) {
    colorOptions(event);
});