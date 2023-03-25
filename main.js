const buttonNums = document.querySelectorAll('[data-number]');
const output = document.querySelector('.output');
const p = document.querySelector('p');
const clear = document.querySelector('[data-clear]');
const addButton = document.querySelector('.add')
const equals = document.querySelector('[data-equals');
const operators = document.querySelector('[data-operation]');
let operand = '';
let arg1 = '';
let arg2 = '';

// Math operations

function add(...nums) {
let resultAdd = nums.reduce((num1, num2) => num1 + num2)
    return parseFloat(resultAdd);
}

console.log(add(4, 4));

function subtract(...nums) {
let resultSubtract = nums.reduce((num1, num2) => num1 - num2)
    return parseFloat(resultSubtract);
}

console.log(subtract(4, 4));

function multiply(...nums) {
let resultMultiply = nums.reduce((num1, num2) => num1 * num2)
    return parseFloat(resultMultiply);
}

console.log(multiply(4, 4));

function divide(...nums) {
let resultDivide = nums.reduce((num1, num2) => num1 / num2)
    return parseFloat(resultDivide);
}

console.log(divide(4, 4));

// Operate function

function operate(operator, num1, num2){
    operator = operators.textContent
    switch(operate){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}

// append numbers to input on click

buttonNums.forEach((buttonNum) => {
    buttonNum.addEventListener('click', (e) => {
        output.innerText += e.target.innerText;
        });
    });

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        output.innerText += e.target.innerText;
        });
    });

// clear all output 

clear.addEventListener('click', () => {
    output.innerText = '';
    })

equals.addEventListener('click', () => {
    operate();
})
     

