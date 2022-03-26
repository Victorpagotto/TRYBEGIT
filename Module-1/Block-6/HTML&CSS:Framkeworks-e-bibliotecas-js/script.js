const dateOptions = {
  format: 'dd/mm/yyyy',
  minDate: new Date(2022, 03, 26),
  maxDate: new Date(2023, 03, 26)
}

const validate = new window.JustValidate('#trybeTrip');
const validation = new JustValidate('#trybeTrip');
const $ = document;
const submit = $.getElementById('submit');
const clearBtn = $.getElementById('clearBtn');
$.getElementById('date').DatePickerX.init(dateOptions);
const dateInput = $.getElementById('date')
let date;

submit.addEventListener('click', (event) => {
  const inputs = $.getElementsByTagName('input');
  const information = [];
  for (let i = 0; i < inputs.length; i += 1) {
      information.push(`${inputs[i].name}:${inputs[i].value}`);
  }
  console.log(information);
});
clearBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const inputs = $.getElementsByTagName('input');
  const checkboxes = $.getElementsByClassName('checker');
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].value = null;
  }
  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].checked = false;
  }
  $.getElementsByTagName('textarea')[0].value = '';
});
validation.addField('#rights',[
  {
  rule: 'required',
  errorMessage: 'Please, accept terms of use of your image to continue',
  }
]);