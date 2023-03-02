// const numberPad = ["AC", "+/-", "%", "÷", 
//                    "7", "8", "9", "x",
//                    "4", "5", "6", "-", 
//                    "1", "2", "3", "+",
//                    "0", ".", "=" ];

// const elementIds = ["clear", "sign", "percent",
//                     "divide", "seven", "eight", "nine",
//                     "multiply", "four", "five", "six", 
//                     "minus", "one", "two", "three",
//                     "plus", "zero", "period", "equal"];

const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

const operators = {
    clear: "AC",
    sign: "+/-",
    percent: "%",
    divide: "÷",
    minus: "-",
    plus: "+",
    period: ".",
    equal: "=",
    multiply: "x",
}


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

function createScreen() {
    const container = document.querySelector(".container");
    let screen = document.createElement("div");
    screen.setAttribute("id", "screen");
    screen.setAttribute("style", "grid-area: screen;");
    screen.innerHTML = 0;
    container.appendChild(screen);
}

function createButtons() {
    const container = document.querySelector(".container");
    for (let key in numbers) {
        let button = document.createElement("button");
        button.setAttribute("id", key);
        button.setAttribute("style", `grid-area: ${key}`);
        button.classList.add("numbers");
        button.innerHTML = `${numbers[key]}`;
        container.appendChild(button);
    }
    for (let key in operators) {
        let button = document.createElement("button");
        button.setAttribute("id", key);
        button.setAttribute("style", `grid-area: ${key}`);
        button.classList.add("operator");
        button.innerHTML = `${operators[key]}`;
        container.appendChild(button);
    }
}

function init() {
    createScreen();
    // for (let i = 0; i < elementIds.length; i++) {
    //     let button = document.createElement("button");
    //     button.setAttribute("id", `${elementIds[i]}`);
    //     button.setAttribute("style", `grid-area: ${elementIds[i]};`);
    //     button.innerHTML = `${numberPad[i]}`;
    //     container.appendChild(button);
    // };
    createButtons();
}

function clearScreen() {
    screen.innerHTML = "";
}

function reset() {
    result = "";
    operation = "";
    firstOperand = "";
    secondOperand = "";
}

init();
let result = 0;
let operation = "";
let firstOperand = "";
let secondOperand = "";
let screen = document.querySelector("#screen");
let buttons = document.querySelectorAll(".numbers");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (operation === "") {
            firstOperand += button.textContent;
            screen.innerHTML = firstOperand;
        } else {
            secondOperand += button.textContent;
            screen.innerHTML = secondOperand;
        }
        
        
    });
});

let clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', () => {
    reset();
    clearScreen();
});

let signButton = document.querySelector("#sign");
signButton.addEventListener('click', () => {
    let current = screen.textContent;
    current = 0 - current;
    screen.innerHTML = current;
});

let percentButton = document.querySelector("#percent");
percentButton.addEventListener('click', () => {
    screen.textContent /= 100;
    
});

let divideButton = document.querySelector("#divide");
divideButton.addEventListener('click', () => {
    operation = "divide";
    
})

let equalButton = document.querySelector("#equal");
equalButton.addEventListener('click', () => {
    if (firstOperand != "" && operation != "") {
        result = operate(operation, firstOperand, secondOperand);
        screen.innerHTML = result;
    } else if (operation === ""){
        screen.innerHTML = firstOperand;
    }
});