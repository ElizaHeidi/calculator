const buttonNums = document.querySelectorAll('[data-number]');
const output = document.querySelector('.output');
const p = document.querySelector('p');
const clear = document.querySelector('[data-clear]');
const addButton = document.querySelector('.add')
const equals = document.querySelector('[data-equals');
let operators = document.querySelectorAll('[data-operation]');
const dot = document.querySelector('dot');
let previousOutput = document.querySelector('.previousNumber');
let currentOutput = document.querySelector('.currentNumber');
let operator = '';
let currentValue = '';
let previousValue = '';

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

/* For each num button, output the button's innertext when clicked, 
and add the textContent of button to currentValue
*/  

buttonNums.forEach((buttonNum) => {
    buttonNum.addEventListener('click', (e) => {
        currentOutput.innerText += e.target.innerText;
        getNumber(e.target.textContent)
        });
    });

function getNumber(num) {
    currentValue += num;
}

   /* For each operator button, input its value to the operator variable, 
set the currentValue to the previousValue (so make it smaller at the top of the screen
plus a ' ' plus the operator (currentValue to `${prevValue}` + ' ' + `${operator}`)  
and then set the current output to the new currentValue     
*/

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        previousOutput.innerText = previousValue + ' ' + operator;
        currentOutput.innerText = currentValue;

        // if (currentOutput.innerText === '=') {
        //  operate();
        //  previousOutput.innerText = '';
        //  currentOutput.innerText = previousValue;  
        // }
        });
    });

// operate(+, 4, 4=) Then, ParseInt the '4,' and '4=' 
// if operand = '+', add() parseInt(4) and parseInt(4=)

    function operate(operand, arg1, arg2) {
        // console.log(arg1, operand, arg2);
        previousValue = Number(previousValue);
        currentValue = Number(currentValue)

        if (operand === '+') {
          add(previousValue, currentValue);
                   
        }
        if (operand === '-') {
            subtract(previousValue, currentValue);
        }
        if (operand === '*') {
            multiply(previousValue, currentValue);
        }
        if (operand === '/') {
            divide(previousValue, currentValue);
        }
       
    }

// clear all output 

clear.addEventListener('click', () => {
    previousValue = '';
    currentValue = '';
    operator = '';    
    previousOutput.innerText = currentValue;
    currentOutput.innerText = currentValue;
    })




     

