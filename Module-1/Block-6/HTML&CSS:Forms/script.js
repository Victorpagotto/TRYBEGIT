const $ = document;
const submit = $.getElementById('submit');
const clearBtn = $.getElementById('clearBtn');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  if ($.getElementById('rights').checked) {
    const inputs = $.getElementsByTagName('input');
    const information = [];
    for (let i = 0; i < inputs.length; i += 1) {
      information.push(`${inputs[i].name}:${inputs[i].value}`);
    }
    console.log(information);
  } else {
    alert('Aceite o termo de direitos de imagens para continuar');
  }
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