let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error! Division by zero is undefined';
    } else {
        return a / b;
    }
}

function operate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return '';
    }
}

function updateDisplay(value) {
    const displayScreen = document.querySelector('.display-screen');
    displayScreen.value = value;
}

function btnNumberClick() {
    const numberBtns = document.querySelectorAll('.btn-number');
    
    numberBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            if (operator === "") {
                firstNumber += this.textContent; 
                updateDisplay(firstNumber);
            } else {
                secondNumber += this.textContent;
                updateDisplay(secondNumber);
            }
        });
    });
}

function btnOperatorClick() {
    const opButtons = document.querySelectorAll('.btn-operator');
    
    opButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            if (firstNumber !== "") {
                operator = this.textContent;
            }
        });
    });
}

function btnEqualClick() {
    const eqButton = document.querySelector('.btn-equal');
    
    eqButton.addEventListener("click", function() {
        if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
            result = operate(firstNumber, secondNumber, operator);
            updateDisplay(result);
            
            firstNumber = result; 
            secondNumber = ""; 
            operator = ""; 
        }
    });
}

function btnClearClick() {
    const clearButton = document.querySelector('.btn-clear');
    
    clearButton.addEventListener("click", function() {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        result = "";
        updateDisplay("");
    });
}

// Initialize event listeners
btnNumberClick();
btnOperatorClick();
btnEqualClick();
btnClearClick();
