const buttonNums = document.querySelectorAll('[data-number]');
const output = document.querySelector('.output');
const p = document.querySelector('p');
const clear = document.querySelector('[data-clear]');
const addButton = document.querySelector('.add')
const equals = document.querySelector('[data-equals');
const operators = document.querySelectorAll('[data-operation]');
const dot = document.querySelector('dot');
let operand = '';
let arg1 = '';
let arg2 = '';

// Math operations

function add(...nums) {
let resultAdd = nums.reduce((num1, num2) => num1 + num2)
// First, clear the output, then append result to output
    output.innerText = '';
    output.innerText += Number(resultAdd);
}

// console.log(add(4, 4));

function subtract(...nums) {
let resultSubtract = nums.reduce((num1, num2) => num1 - num2)
output.innerText = '';
output.innerText += Number(resultSubtract);
}

// console.log(subtract(4, 4));

function multiply(...nums) {
let resultMultiply = nums.reduce((num1, num2) => num1 * num2)
output.innerText = '';
output.innerText += Number(resultMultiply);
}

// console.log(multiply(4, 4));

function divide(...nums) {
let resultDivide = nums.reduce((num1, num2) => num1 / num2)
output.innerText = '';
output.innerText += Number(resultDivide);
}

// console.log(divide(4, 4));


// append numbers to input on click

buttonNums.forEach((buttonNum) => {
    buttonNum.addEventListener('click', (e) => {
        output.innerText += e.target.innerText;
        });
    });

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        output.innerText += e.target.innerText;
        const value = e.target.innerText;

    // if e.target.innerText = '=', then 
    // split innerText into an array: ['number', 'number +']
    // then call operate(), and set the operand to 
    // operate(+, number, number +)     

        if (value === '=') {
          if (output.innerText.includes('+')) {
            const splitInput = output.innerText.split('+');
            console.log(output.innerText.split('+'));
            console.log(splitInput[1]);
            operate('+', splitInput[0], splitInput[1]);
          }  
          if (output.innerText.includes('-')) {
            const splitInput = output.innerText.split('-')
            operate('-', splitInput[0], splitInput[1]);
          }  
          if (output.innerText.includes('*')) {
            const splitInput = output.innerText.split('*')
            operate('*', splitInput[0], splitInput[1]);
          }  
          if (output.innerText.includes('/')) {
            const splitInput = output.innerText.split('/')
            operate('/', splitInput[0], splitInput[1]);
          }  
          
        }
        });
    });

// operate(+, 4, 4=) Then, ParseInt the '4,' and '4=' 
// if operand = '+', add() parseInt(4) and parseInt(4=)

    function operate(operand, arg1, arg2) {
        // console.log(arg1, operand, arg2);
    const value1 = parseFloat(arg1);
    const value2 = parseFloat(arg2);
        if (operand === '+') {
          add(value1, value2);
                   
        }
        if (operand === '-') {
            subtract(value1, value2);
        }
        if (operand === '*') {
            multiply(value1, value2);
        }
        if (operand === '/') {
            divide(value1, value2);
        }
       
    }

// clear all output 

clear.addEventListener('click', () => {
    output.innerText = '';
    })

function decimal() {
    if (output.textContent.includes('.')) {
        output.textContent += '.'
    }
}    


     

