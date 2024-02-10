
const calculatorContainer = document.getElementById('calculator');

const display = document.createElement('input');
display.type = 'text';
display.name = 'display';
display.classList.add('display');
calculatorContainer.appendChild(display);

const buttons = [
  'AC', 'DE', '.', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '00', '0', '='
];

buttons.forEach(buttonValue => {
  const button = document.createElement('input');
  button.type = 'button';
  button.value = buttonValue;
  button.classList.add('operator');
  button.addEventListener('click', () => handleButtonClick(buttonValue));
  calculatorContainer.appendChild(button);
});

function handleButtonClick(value) {
  if (value === 'AC') {
    display.value = '';
  } else if (value === 'DE') {
    display.value = display.value.slice(0, -1);
  } else if (value === '=') {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  } else {
    display.value += value;
  }
}
