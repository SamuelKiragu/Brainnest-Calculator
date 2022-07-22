//adds two integers
function add(a,b){
    return a + b;
} 

//subtracts two integers
function subtract(a,b){
    return a - b;
}

//multiply two integers
function multiply(a,b){
    return a * b;
}

//divide two integers
function divide(a,b){
    return a / b;
}

//takes operator and two integers and calls any of the functions above
function operate(op,a,b){
    const OPERATORS = ["+", "-", "*", "/"];
    const OPERATIONS = [add,subtract,multiply,divide];
    return OPERATIONS[OPERATORS.indexOf(op)](a,b);
}

//interprate which button has been clicked
function handler(btn){
    //TODO: ADD LOGIC HERE
}

const BUTTONS = document.querySelectorAll('button');
BUTTONS.forEach((btn, key) => {
    btn.addEventListener('click', ()=>handler(btn));
});
