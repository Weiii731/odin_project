const numberPad = ["AC", "+/-", "%", "÷", 
                   "7", "8", "9", "x",
                   "4", "5", "6", "-", 
                   "1", "2", "3", "+",
                   "0", ".", "=" ];

const elementIds = ["clear", "sign", "percent",
                    "divide", "seven", "eight", "nine",
                    "multiply", "four", "five", "six", 
                    "minus", "one", "two", "three",
                    "plus", "zero", "period", "equal"];

let add = function(a, b) {
    return a + b;
}

let subtract = function(a, b) {
    return a - b;
}

let multiply = function(a, b) {
    return a * b;
}

let divide = function(a, b) {
    return a / b;
}

function operate(operation, a, b) {
    switch(operation) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
    }
}

function init() {
    const container = document.querySelector(".container");
    let screen = document.createElement("div");
    screen.setAttribute("id", "screen");
    screen.setAttribute("style", "grid-area: screen;");
    container.appendChild(screen);
    for (let i = 0; i < elementIds.length; i++) {
        let button = document.createElement("button");
        button.setAttribute("id", `${elementIds[i]}`);
        button.setAttribute("style", `grid-area: ${elementIds[i]};`);
        button.innerHTML = `${numberPad[i]}`;
        container.appendChild(button);
    };
}

init();
