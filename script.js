const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(input) {
    display.value = " ";
}

function computeDisplay(input) {
    display.value = eval(display.value);
}
function minusDisplay(input) {
    display.value = display.value.toString().slice(0, -1);
}