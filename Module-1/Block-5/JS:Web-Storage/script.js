function CE(element, text = '', parent = $.getElementById('body')) {
    let eL = $.createElement(element);
    eL.innerText = text;
    parent.appendChild(eL);
    return eL;
}

const $ = document;
const pageS = $.getElementById('page').style;
//data
function numberGenerate(range) {
    let nums = [];
    for (let i = 5; i <= range; i += 5) {
        nums.push(`${i}px`);
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
//Data Storage
let userDefault = {
    name: 'default',
    bodyColor: 'rgb(204, 193, 193);',
    textColor: 'black',
    textSize: '16px',
    lineHeight: '18px',
    fontFamily: 'Arial'
};
function loadingStorage() {
    if (localStorage.users === undefined) {
        let users = [userDefault];
        localStorage.setItem('users', JSON.stringify(users));
        return users;
    } else {
        return JSON.parse(localStorage.getItem('users'));
    }
}
let userData = loadingStorage();
//buttons
let usersBtn = $.getElementById('usersBtn');
let articlesBtn = $.getElementById('articlesBtn');
let bgColorBtn = $.getElementById('bgColorBtn');
let textColorBtn = $.getElementById('textColorBtn');
let textSizebtn = $.getElementById('textSizebtn');
let lineSpaceBtn = $.getElementById('lineSpaceBtn');
let fontTypeBtn = $.getElementById('fontTypeBtn');
let articleTitle = $.getElementById('artTitle');
let article = $.getElementById('page');

//Bars Functions
function closesAllScrolls(id) {
    let target = $.getElementsByClassName('btnnav');
    for (let i = 0; i < target.length; i += 1) {
        if (target[i].id !== id) {
            target[i].parentElement.parentElement.lastElementChild.innerHTML = '';
            target[i].classList.remove('selected');
        }
    }
}
function createsScrollBox(parent) {
    let div  = CE('div','',parent);
    div.classList.add('scrollDiv');
    let uL = CE('ul', '', div);
    return uL;
}
function createsColorDiv(uL, color) {
    let li = CE('li', '', uL);
    let colorDiv = CE('div','',li);
    colorDiv.classList.add('colorDiv');
    colorDiv.style.backgroundColor = color;
    return colorDiv;
}
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
        let colorDiv = createsColorDiv(uL, colors[i]);
        addColorBGDetection(colorDiv, colors[i], parent, event.target);
    }
}
function textColorOptions(uL, parent, event) {
    for (let i = 0; i < colors.length; i += 1) {
        let colorDiv = createsColorDiv(uL, colors[i]);
        addColorTextDetection(colorDiv, colors[i], parent, event.target);
    }
}
function colorOptions(event) {
    closesAllScrolls(event.target.id);
    let parent = event.target.parentElement.parentElement.lastElementChild;
    if (event.target.classList.contains('selected') !== true) {
        event.target.classList.add('selected');
        let uL = createsScrollBox(parent);
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
function textLiOptions(uL, parent, button, property, arr) {
    for (let i = 0; i < arr.length; i += 1) {
        let li = CE('li', arr[i], uL);
        li.classList.add('listItem');
        li.addEventListener('click', function(event) {
            pageS[`${property}`] = event.target.innerText;
            parent.innerHTML = '';
            button.classList.remove('selected');
        });
    }
}
function textOptions(event) {
    closesAllScrolls(event.target.id);
    let parent = event.target.parentElement.parentElement.lastElementChild;
    if (event.target.classList.contains('selected') !== true) {
        event.target.classList.add('selected');
        let uL = createsScrollBox(parent);
        switch (event.target.id) {
            case 'textSizebtn':
                textLiOptions(uL, parent, event.target, 'fontSize', numRange);
                break;
            case 'lineSpaceBtn':
                textLiOptions(uL, parent, event.target, 'lineHeight', numRange);
                break;
            case 'fontTypeBtn':
                textLiOptions(uL, parent, event.target, 'fontFamily', fonts);
                break;
        }
    } else {
        event.target.classList.remove('selected');
        parent.innerHTML = '';
    }
}
function createsInput(parent, chosenClass) {
    let input = CE('input','',parent);
    input.classList.add(chosenClass);
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Insert here');
    return input;
}
function sizeByTyping(trigger, property) {
    closesAllScrolls(trigger.target.id);
    let parent = trigger.target.parentElement.parentElement.lastElementChild;
    parent.innerHTML = '';
    let input = createsInput(parent, 'buttonInput');
    input.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            pageS[`${property}`] = `${event.target.value}px`;
            parent.innerHTML = '';
        }
    });
    input.addEventListener('mouseout', function() {
        parent.innerHTML = '';
    });
}
function changeTitle(event, chosenClass) {
    let trigger = event.target;
    let holder = trigger.innerHTML;
    trigger.innerHTML = '';
    input = createsInput(trigger, chosenClass);
    input.value = '';
    console.log('test');
    input.addEventListener('keyup', function(event) {
        if(event.key === 'Enter') {
            trigger.innerHTML = input.value;
        }
        if(event.key === 'Escape') {
            trigger.innerHTML = holder;
        }
        if(event.key === 'Enter' && event.target.value === '') {
            trigger.innerHTML = holder;
        }
    });
}
function createsTextArea(target) {
    let textBox = CE('textarea', '', target);
    textBox.value = '';
    textBox.setAttribute('rows', '35');
    textBox.setAttribute('cols', '160');
    return textBox;
}
function createsTextAreaButton(target) {
    let textBtn = CE('button','Insert', target);
    textBtn.classList.add('textInputBox');
    textBtn.style.width = '80px';
    textBtn.style.height = '20px';
    return textBtn;
}
function changesText(event) {
    let trigger = event.target;
    let holder = trigger.innerHTML;
    trigger.innerHTML = '';
    let textBox = createsTextArea(event.target);
    let textBtn = createsTextAreaButton(event.target);
    textBtn.addEventListener('click', function() {
        if (textBox.value !== '') {
            trigger.innerHTML = textBox.value;
        } else {
            trigger.innerHTML = holder;
        }
    });
    textBox.addEventListener('keyup', function(event) {
        if (event.key === 'Escape') {
            trigger.innerHTML = holder;
        }
    });
}
//Local Storage Data Management
function userBar(event) {
    let parent = event.target.parentElement.parentElement.lastElementChild;
    if (event.target.classList.contains('selected') !== true) {
        event.target.classList.add('selected');
    }
}
//Code Execution.
bgColorBtn.addEventListener('click', function(event) {
    colorOptions(event);
});
textColorBtn.addEventListener('click', function(event) {
    colorOptions(event);
});
textSizebtn.addEventListener('click', function(event) {
    textOptions(event);
});
lineSpaceBtn.addEventListener('click', function(event) {
    textOptions(event);
});
fontTypeBtn.addEventListener('click', function(event) {
    textOptions(event);
});
textSizebtn.addEventListener('dblclick', function(event) {
    sizeByTyping(event, 'fontSize');
});
lineSpaceBtn.addEventListener('dblclick', function(event) {
    sizeByTyping(event, 'lineHeight');
});
articleTitle.addEventListener('dblclick', function(event) {
    changeTitle(event, 'titleInputClass');
});
article.addEventListener('dblclick', function(event) {
    changesText(event);
});
usersBtn.addEventListener('dblclick', function(event) {

});