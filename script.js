let display = document.getElementById('display');
let expression = '';

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function appendCharacter(char) {
    expression += char;
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        display.innerHTML = 'Error';
    }
}

function updateDisplay() {
    display.innerHTML = expression;
}
