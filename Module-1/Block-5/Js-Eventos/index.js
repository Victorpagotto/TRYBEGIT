const $ = document
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let listOfDays = $.getElementById('days');
let holidaysList = [24, 25, 31];
let fridayList = [4, 11, 18, 25];
let btnContainer = $.getElementsByClassName('buttons-container')[0];
let taskList = ['programar', 'programar', 'programar', 'programar', 'programar'];
function ECreator (element, text = '', parent = $.getElementsByTagName('body')[0]) {
    let creation = $.createElement(element);
    creation.innerText = text;
    parent.appendChild(creation);
    return creation;
}
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = $.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = $.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };

function holidayVerifier(day, holidays) {
    for (let i = 0; i < holidays.length; i += 1) {
        if (day.innerText === `${holidays[i]}`) {
              day.classList.add('holiday');
            return;
        }
    }
}

function fridayVerifier (day, fridays) {
    for (let i = 0; i < fridays.length; i += 1) {
        if (day.innerText === `${fridays[i]}`) {
            day.classList.add('friday');
            return;
        }
    }
}

function dayCreator(dayNums, holidays = [], fridays = []) {
    for (let i = 0; i < dayNums.length; i += 1) {
        let day = $.createElement('li');
        day.innerText = `${dayNums[i]}`;
        day.classList.add('day');
        holidayVerifier(day, holidays);
        fridayVerifier(day, fridays);
        $.getElementById('days').appendChild(day);
    }
}
function toggler(holidays, bgcolor, color) {
    for (let i = 0; i < holidays.length; i += 1) {
        holidays[i].style.backgroundColor = bgcolor;
        holidays[i].style.color = color;
    }
}
function textToggler(fridays, text) {
    for (let i = 0; i < fridays.length; i += 1) {
        fridays[i].innerText = text;
    }
}
function textUntoggler(fridays) {
    for (let i = 0; i < fridays.length; i += 1) {
        fridays[i].innerText = `${fridayList[i]}`;
    }
}
function dayEvents() {
    let days = $.getElementsByClassName('day');
    for (let i = 0; i < days.length; i += 1) {
        days[i].addEventListener('mouseover', function(event){
            event.target.style.fontSize = '3em';
        });
        days[i].addEventListener('mouseout', function(event){
            event.target.style.fontSize = '1em';
        });
        days[i].addEventListener('click', function(event) {
            if (event.target.classList.contains('selected')) {
                event.target.classList.remove('selected');
                event.target.style.color = '#777';
            } else {
                event.target.classList.add('selected');
                event.target.style.color = 'white';
            }
        });
    }
}
function divCreate(parent) {
    let div = ECreator('div', '', parent);
    div.classList.add('divColor');
    div.addEventListener('click', function(event) {
        if (event.target.classList.contains('selected')) {
            event.target.classList.remove('selected');
        } else {
            event.target.classList.add('selected');
        }
    });
}
function taskAdder(tasks, parent) {
    for (let i = 0; i < tasks.length; i += 1) {
        let lis = ECreator('li','',parent);
        lis.classList.add('taskList');
        ECreator('span', tasks[i], lis);
        divCreate(lis);
    }
}
function creatApp() {
    if (appInput.value !== '') {
        let appointment = ECreator ('li', appInput.value, appointUl);
        appointment.classList.add('taskList');
    } else {
        alert('Campo vazio. Por favor, insira algo.');
    }
    
}
  
createDaysOfTheWeek();
dayCreator(dezDaysList, holidaysList, fridayList);
let btn1 = ECreator('button', 'Feriados', btnContainer);
btn1.classList.add('btn-holiday');
btn1.addEventListener('click', function(){
    let days = $.getElementsByClassName('holiday');
    console.log(days);
    if (days[0].style.color === 'white') {
        toggler(days, 'rgb(238,238,238)', '#777');
    }else{
        toggler(days, 'grey', 'white');
    }
});
let btn2 = ECreator('button', 'Sexta-feira', btnContainer);
btn2.classList.add('btn-friday');
btn2.addEventListener('click', function(){
    let days = $.getElementsByClassName('friday');
    console.log(days);
    if (days[0].innerText !== 'SEXTOU!') {
        textToggler(days, 'SEXTOU!');
    }else{
        textUntoggler(days);
    }
});
dayEvents();
let taskUl = ECreator('ul', '', $.getElementsByClassName('my-tasks')[0]);
taskAdder(taskList, taskUl);
let appointUl = ECreator('ul', '', $.getElementsByClassName('input-container')[0]);
let appInput = $.getElementById('task-input');
$.getElementById('btn-add').addEventListener('click', function() {
    creatApp();
});
$.getElementById('task-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        creatApp();
    }
});