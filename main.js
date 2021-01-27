// todo: decimal functionality

let total = 0;
let numberToBeProcessed = 0;
let decimalToBeProcessed = 0;
let decimalPlacement = 1;
let decimalIndex = 0;
let decimal = false;
let operation = "";
const display = document.querySelector("#display");

function processNumber(numberString){
    if(decimal){
        decimalPlacement = decimalPlacement / 10;
        decimalIndex = decimalIndex + 1;
        decimalToBeProcessed = parseFloat((decimalPlacement * parseInt(numberString)).toFixed(decimalIndex)) + decimalToBeProcessed;
        console.log(decimalToBeProcessed);
        numberToBeProcessed = numberToBeProcessed + decimalToBeProcessed.to;
        console.log(numberToBeProcessed);
    }
    else{
        numberToBeProcessed = numberToBeProcessed * 10;
        numberToBeProcessed = numberToBeProcessed + parseInt(numberString);
    }

    if (numberToBeProcessed > 9999999999)
        numberToBeProcessed = Math.floor(numberToBeProcessed / 10);
    

    display.textContent = Math.round(numberToBeProcessed * 100000) / 100000;
}

function clear(){
    total = 0;
    numberToBeProcessed = 0;
    decimalPlacement = 1;
    decimalToBeProcessed = 0;
    decimalIndex = 0;
    display.textContent = "";
    decimal = false;
}

function del(){
    numberToBeProcessed = Math.floor(numberToBeProcessed / 10);
    display.textContent = numberToBeProcessed;
    if (display.textContent == 0)
        display.textContent = "";
}

function factorialize(){
    let n = display.textContent;
    if (n > 13){
        display.textContent = "Max factorial value is 13."
        return;
    }

    if (n == 0 || n == 1 || decimal)
        return 1;

    for (let i = n - 1; i > 0; i--)
        n = n * i;

    total = n;
    total = Math.round(total * 100000) / 100000;
    display.textContent = total;
}

function negate(){
    numberToBeProcessed = numberToBeProcessed * -1;
    display.textContent = numberToBeProcessed;

}

function placeDecimal(){
    decimal = true;
}

// mathematical operation functions
function operationSetUp(operationName){
    operation = operationName;
    total = numberToBeProcessed;
    numberToBeProcessed = 0;
    decimal = false;
    decimalIndex = 0;

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

    if (total > 9999999999){
        total = 0;
        display.textContent = "Overflow!"
        return;
    }
    total = Math.round(total * 100000) / 100000;
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
negBtn.addEventListener("click", negate);
// deciBtn.addEventListener("click", placeDecimal);
eqBtn.addEventListener("click", equals);

// number button selection
const numbers = document.querySelectorAll(".number-key");

// numbers event listeners
for (let number of numbers)
    number.addEventListener("click", () => {processNumber(number.textContent)});


