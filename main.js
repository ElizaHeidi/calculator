const buttonNums = document.querySelectorAll('[data-number]');
const output = document.querySelector('.output');
const p = document.querySelector('p');
const clear = document.querySelector('[data-clear]');
const addButton = document.querySelector('.add')
let equals = document.querySelector('[data-equals]');
const operators = document.querySelectorAll('[data-operation]');
const dot = document.querySelector('.dot');
const neg = document.querySelector('.neg');
let previousOutput = document.querySelector('.previousNumber');
let currentOutput = document.querySelector('.currentNumber');
let operator = '';
let currentValue = '';
let previousValue = '';
let previousOperator = '';

buttonNums.forEach((buttonNum) => {
buttonNum.addEventListener('click', (e) => {
currentOutput.innerText += e.target.innerText;
handleNumber(e.target.textContent);
});
});

function handleNumber(num) {
currentValue += num;
}


dot.addEventListener('click', function() {
addDecimal();
})

function addDecimal() {
if (!currentValue.includes('.')) {
currentValue += '.';
}
}

neg.addEventListener('click', function() {
    if (currentValue === '') {
        return;
    } else handleNeg(); 
    
})

function handleNeg() {
    currentValue = Number(currentValue) * -1;
    currentValue = currentValue.toString();
    currentOutput.innerText = currentValue;
}

operators.forEach((op) => {
op.addEventListener('click', (e) => {
handleOperator(e.target.textContent);
previousOutput.innerText = previousValue + ' ' + operator;
currentOutput.innerText = currentValue

});
});

function handleOperator(op) {
operator = op;

if (!previousValue) {
previousValue = currentValue;
previousOperator = operator
} else {
previousValue = calculate();
}

    currentValue = '';
}



equals.addEventListener('click', (e) => {
calculate();
previousOutput.textContent = '';
currentOutput.textContent = previousValue;
})

function calculate() {
let result;

previousValue = Number(previousValue);
currentValue = Number(currentValue);

if (previousOperator === '+') {
result = previousValue + currentValue;
} else if (previousOperator === '-') {
result = previousValue - currentValue;
} else if (previousOperator === '*') {
result = previousValue * currentValue;
} else if (previousOperator === '/') {
    if (operator === '/' && currentValue === 0) {
        alert(`You can't divide by zero!`);
} result = previousValue / currentValue;
}

previousValue = result.toString();
currentValue = '';
previousOperator = operator;
return result;
}


clear.addEventListener('click', () => {
previousValue = '';
currentValue = '';
operator = '';
previousOperator = '';
previousOutput.textContent = currentValue;
currentOutput.textContent = currentValue;
})