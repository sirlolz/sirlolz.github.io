var correct = 0;
var wrong = 0;
// generates a number 1-9
function generateNumber(){
    const n = Math.random() * 10;
    return Math.floor(n, 2);
}

//creates new form element
//with an input box and a submit button
function generateForm(){
    const form = document.createElement("form");
    const input = document.createElement("input");
    const button = document.createElement("input");

    input.setAttribute("type", "number");
    input.setAttribute("id", "userAnswer")
    button.setAttribute("type", "submit");

    button.value = "clicky-clicky";

    form.appendChild(input);
    form.appendChild(button);
    form.addEventListener("submit", onSubmit);
    document.getElementById("answer").appendChild(form);
    return form;
}

function onSubmit(event){
    event.preventDefault();
    const num1 = getNumber(1);
    const num2 = getNumber(2);
    const answer = parseInt(event.target.userAnswer.value);
    if(num1*num2 === answer){
        changeCorrect();
        reset();
    }else{
        changeWrong();
    }
}

function changeCorrect(){
    correct += 1;
    document.getElementById('correct').innerText = correct + " correct";

}

function changeWrong(){
    wrong += 1;
    document.getElementById('wrong').innerText = wrong + " wrong";
}

function reset(){
    document.getElementById("answer").innerText = "";
    document.getElementById("num1").innerText = "";
    document.getElementById("num2").innerText = "";
    generateForm();
    generateQestion();
}

//gets number from document
//returns the number as a number type
function getNumber(num){
    const number = document.getElementById("num"+num);
    const parsed = parseInt(number.innerText);
    return parsed
}

function generateQestion(){
    const num1 = generateNumber();
    const num2 = generateNumber();

    const docNum1 = document.getElementById("num1");
    const docNum2 = document.getElementById("num2");

    docNum1.innerText = num1
    docNum2.innerText = num2
    return true;
}

function changeOperator(){

}

document.addEventListener("DOMContentLoaded", ()=>{
    generateQestion();
    generateForm();
})