let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let listOfDays = document.getElementById('days');
let holidaysList = [24, 25, 31];
let fridayList = [4, 11, 18, 25];
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };

  function holidayVerifier(day, holidays) {
      for (let i = 0; i < holidays.length; i += 1) {
          if (day === holidays[i]) {
              day.classList.add('holiday');
              return;
          }
      }
  }

  function fridayVerifier (day, fridays) {
      for (let i = 0; i < fridays.length; i += 1) {
          if (day === fridays[i]) {
              day.classList.add('friday');
              return;
          }
      }
  }

  function dayCreator(dayNums, holidays = [], fridays = []) {
      for (let i = 0; i < dayNums.length; i += 1) {
          let day = document.createElement('li');
          day.innerText = `${dayNums[i]}`;
          day.classList.add('day');
          holidayVerifier(day, holidays);
          fridayVerifier(day, fridays);
          document.getElementById('days').appendChild(day);
      }
  }
  
  createDaysOfTheWeek();
  dayCreator(dezDaysList, holidaysList, fridayList);