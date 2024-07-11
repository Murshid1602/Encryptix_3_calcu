function appendToDisplay(value) {
    let display = document.querySelector('.display');
    display.value += value;
}

function clearDisplay() {
    let display = document.querySelector('.display');
    display.value = '';
}

function deleteChar() {
    let display = document.querySelector('.display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.querySelector('.display');
    try {
        // Using Function constructor instead of eval for security
        display.value = new Function('return ' + display.value)();
    } catch (e) {
        display.value = 'Error';
    }
}
