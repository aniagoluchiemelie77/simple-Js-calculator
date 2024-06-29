'use strict';

//selecting elements
let display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const specialChars = ['%', '*', "/", '-', '+', '='];
let output = '';

const buttonClickFunc = function() {
    //click funtionality
    const calculate = function (btnValue) {
        if(btnValue === '=' && output !== ''){
           output = eval(output);
        }else if(btnValue == 'AC') {
            //clear input
            output = '';
        }else if (btnValue == 'Del') {
            //delete last digit
            output = output.toString().slice(0, -1);
        }else {
            if (output === '' && specialChars.includes(btnValue)) {
                return;
            }
            output += btnValue;
        }
        display.value = output;
    };

    //adding event listener to buttons
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            calculate(e.target.dataset.value);
        })
    });
}
buttonClickFunc();