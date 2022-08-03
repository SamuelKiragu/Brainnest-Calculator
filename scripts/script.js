//Global Values for Calculator
var val1 = null;
var val2 = null;
var operator = null;
const OP = ["+", "-", "*", "/"]; //possible operations

//displayScreen
const DISPLAY = document.querySelector("#DisplayItem");

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
    return b == 0 ? "MATH ERROR": a / b;
}

//takes operator and two integers and calls any of the functions above
function operate(op,a,b){
    const F = [add,subtract,multiply,divide];
    return F[OP.indexOf(op)](a,b);
}

//interprate which button has been clicked
function display(btn){
    //TODO: ADD LOGIC HERE
    const V = btn.value; //button value

    if(OP.includes(V)){
        //TODO: +,-,*,/ operations
        val1 = parseInt(DISPLAY.textContent);
        operator = V;
    }else if(V == "CLEAR"){
        //TODO: CLEAR operation
        DISPLAY.textContent = 0;
    }else if(V == "="){
        //TODO: = operation
        val2 = parseInt(DISPLAY.textContent);
        DISPLAY.textContent = operate(operator,val1,val2);
        operator = "=";
        val2 = null;
    }else{
        if(val1 == parseInt(DISPLAY.textContent) && operator != null){
            DISPLAY.textContent = 0;
        } 
        //TODO: numberical operations
        dText = DISPLAY.textContent.toString(); //text in Display
        bText = V.toString();
        if(dText == "0")
            DISPLAY.textContent = bText;
        else
            DISPLAY.textContent = dText + bText;
    }
}

const BUTTONS = document.querySelectorAll('button');
BUTTONS.forEach((btn, key) => {
    btn.addEventListener('click', ()=>display(btn));
});
