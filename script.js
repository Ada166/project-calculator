let display =document.getElementById('display');
let num1 = '';
let num2 = '';
let operator = '';
let currentInput = '';


let buttons = document.querySelectorAll('.btnContainer button');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        updateDisplay(this.textContent);
    });
});


// Update the display when a number button is clicked
// Logic: When a number button is clicked, the value of that button is added

function updateDisplay(value) {
    currentInput += value;
    display.textContent = currentInput;
}

console.log(display);
// Clear the display when the clear button is clicked

let clear = document.getElementById('btnClear').addEventListener('click', function() {
        currentInput = '';
        num1 = '';
        num2 = '';
        operator = '';
        display.textContent = '0';
    });


function chooseOperator(op) {
    if (num1 && operator && currentInput) {
        num2 = currentInput;
        calculate();
    }

    num1 = display.textContent;
    operator = op;
    currentInput = '' + op;
}

function calculate() {
    if (operator === '+') {
        display.textContent = parseFloat(num1) + parseFloat(num2);
    } else if (operator === '-') {
        display.textContent = parseFloat(num1) - parseFloat(num2);
    } else if (operator === '*') {
        display.textContent = parseFloat(num1) * parseFloat(num2);
    } else if (operator === '/') {
        display.textContent = parseFloat(num1) / parseFloat(num2);
    } else {
        display.textContent = 'Error';
    }
}

// Button handlers for operators and equals
document.getElementById('btnAdd').addEventListener('click', function() {
    chooseOperator('+');
});

document.getElementById('btnSubtract').addEventListener('click', function() {
    chooseOperator('-');
});

document.getElementById('btnMultiply').addEventListener('click', function() {
    chooseOperator('*');
});

document.getElementById('btnDivide').addEventListener('click', function() {
    chooseOperator('/');
});

document.getElementById('btnEquals').addEventListener('click', function() {
    num2 = currentInput;
    calculate();
});