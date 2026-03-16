let display =document.getElementById('display');
let num1 = '';
let num2 = '';
let operator = '';

function updateDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    document.getElementById('btnClear').addEventListener('click', function() {
        display.value = '0';
    });
}

function calculate() {
    if (operator === '+') {
        display.value = parseFloat(num1) + parseFloat(num2);
    } else if (operator === '-') {
        display.value = parseFloat(num1) - parseFloat(num2);
    } else if (operator === '*') {
        display.value = parseFloat(num1) * parseFloat(num2);
    } else if (operator === '/') {
        display.value = parseFloat(num1) / parseFloat(num2);
    }
}