const buttonNums = document.querySelectorAll('[data-number]');
const output = document.querySelector('.output');
const p = document.querySelector('p');
const clear = document.querySelector('[data-clear]');
const addButton = document.querySelector('.add')
const equals = document.querySelector('[data-equals');
const operators = document.querySelectorAll('[data-operation]');
let operand = '';
let arg1 = '';
let arg2 = '';

// Math operations

// function add(...nums) {
// let resultAdd = nums.reduce((num1, num2) => num1 + num2)
//     return parseFloat(resultAdd);
// }

// console.log(add(4, 4));

// function subtract(...nums) {
// let resultSubtract = nums.reduce((num1, num2) => num1 - num2)
//     return parseFloat(resultSubtract);
// }

// console.log(subtract(4, 4));

// function multiply(...nums) {
// let resultMultiply = nums.reduce((num1, num2) => num1 * num2)
//     return parseFloat(resultMultiply);
// }

// console.log(multiply(4, 4));

// function divide(...nums) {
// let resultDivide = nums.reduce((num1, num2) => num1 / num2)
//     return parseFloat(resultDivide);
// }

// console.log(divide(4, 4));

// function operate(operand, num1, num2){
//     operand = operators.textContent;
//     equals.addEventListener('click', () => {
//         switch(operate){
//             case '+':
//                 return add(num1, num2);
//                 break;
//             case '-':
//                 return subtract(num1, num2);
//                 break;
//             case '*':
//                 return multiply(num1, num2);
//                 break;
//             case '/':
//                 return divide(num1, num2);
//                 break;
//         }
// })
// }
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

// operate(+, 4, 4+) Then, if operand = '+', add value1 and value2

    function operate(operand, arg1, arg2) {
        // console.log(arg1, operand, arg2);
    const value1 = parseInt(arg1);
    const value2 = parseInt(arg2);
        if (operand === '+') {
          output.innerText = value1 + value2;
        }
        if (operand === '-') {
            output.innerText = value1 - value2;
        }
        if (operand === '*') {
            output.innerText = value1 * value2;
        }
        if (operand === '/') {
            output.innerText = value1 / value2;
        }
       
    }

// clear all output 

clear.addEventListener('click', () => {
    output.innerText = '';
    })



     

