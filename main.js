let total = 0;
let numberToBeProcessed = 0;
let operation = "";
const display = document.querySelector("#display");

function processNumber(numberString){
    numberToBeProcessed = numberToBeProcessed * 10;
    numberToBeProcessed = numberToBeProcessed + parseInt(numberString);
    display.textContent = numberToBeProcessed;
}

function clear(){
    total = 0;
    numberToBeProcessed = 0;
    display.textContent = "";
}

function del(){
    numberToBeProcessed = Math.floor(numberToBeProcessed / 10);
    display.textContent = numberToBeProcessed;
    if (display.textContent == 0)
        display.textContent = "";
}

function factorialize(){
    let n = display.textContent;

    if (n == 0 || n == 1)
        return 1;

    for (let i = n - 1; i > 0; i--)
        n = n * i;

    total = n;
    display.textContent = total;
}

// mathematical operation functions
function operationSetUp(operationName){
    operation = operationName;
    total = numberToBeProcessed;
    numberToBeProcessed = 0;

    display.textContent = "";
}

function equals(){
    switch(operation){
        case "pow":
            total = Math.pow(total, numberToBeProcessed);
            break;
        case "mul":
            total = total * numberToBeProcessed;
            break;
        case "sub":
            total = total - numberToBeProcessed;
            break;
        case "add":
            total = total + numberToBeProcessed;
            break;
        case "div":
            total = total / numberToBeProcessed;
            break;
    }
    numberToBeProcessed = total;
    display.textContent = total;
}

// function buttons selection
const acBtn = document.querySelector("#ac-btn");
const deleteBtn = document.querySelector("#delete-btn");
const powerBtn = document.querySelector("#exp-btn");
const factorialBtn = document.querySelector("#factorial-btn");
const divdBtn = document.querySelector("#divd-btn");
const multBtn = document.querySelector("#mult-btn");
const subBtn = document.querySelector("#sub-btn");
const addBtn = document.querySelector("#add-btn");
const negBtn = document.querySelector("#neg-btn");
const deciBtn = document.querySelector("#deci-btn");
const eqBtn = document.querySelector("#eq-btn");

// button event listeners
acBtn.addEventListener("click", clear);
deleteBtn.addEventListener("click", del);
powerBtn.addEventListener("click", () => operationSetUp("pow"));
factorialBtn.addEventListener("click", factorialize);
divdBtn.addEventListener("click", () => operationSetUp("div"));
multBtn.addEventListener("click", () => operationSetUp("mul"));
subBtn.addEventListener("click", () => operationSetUp("sub"));
addBtn.addEventListener("click", () => operationSetUp("add"));
negBtn.addEventListener("click", () => operationSetUp("neg"));
deciBtn.addEventListener("click", () => operationSetUp("dec"));
eqBtn.addEventListener("click", equals);

// number button selection
const numbers = document.querySelectorAll(".number-key");

// numbers event listeners
for (let number of numbers)
    number.addEventListener("click", () => {processNumber(number.textContent)});


