const buttonNums = document.querySelectorAll('[data-number]');
const output = document.querySelector('.output');
const p = document.querySelector('p');
const clear = document.querySelector('[data-clear]');

// Math operations

function add(...nums) {
let resultAdd = nums.reduce((num1, num2) => num1 + num2)
    return resultAdd;
}

console.log(add(4, 4));

function subtract(...nums) {
let resultSubtract = nums.reduce((num1, num2) => num1 - num2)
    return resultSubtract;
}

console.log(subtract(4, 4));

function multiply(...nums) {
let resultMultiply = nums.reduce((num1, num2) => num1 * num2)
    return resultMultiply;
}

console.log(multiply(4, 4));

function divide(...nums) {
let resultDivide = nums.reduce((num1, num2) => num1 / num2)
    return resultDivide;
}

console.log(divide(4, 4));

// append numbers to input on click

buttonNums.forEach((buttonNum) => {
    buttonNum.addEventListener('click', (e) => {
        const p = document.createElement('p');
            p.textContent += e.target.textContent;
            output.appendChild(p);
        });
    });


const clearButton = function() {
    const output = document.querySelector('.output');    
    clear.addEventListener('click', (output) => {
        p.textContent += e.target.textContent;
            output.appendChild(p);
    })
}