// generates a number 1-9
function generateNumber(){
    const n = Math.random() * 10;
    return Math.floor(n);
}

//creates new form element
//with an input box and a submit button
function generateForm(){
    const form = document.createElement("form");
    const input = document.createElement("input");
    const button = document.createElement("input");

    input.setAttribute("type", "text");
    input.setAttribute("id", "userAnswer")
    button.setAttribute("type", "submit");

    button.innerText = "clicky-clicky";

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
        console.log("correct");
        reset();
    }else{
        console.log("false");
    }
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

document.addEventListener("DOMContentLoaded", ()=>{
    generateQestion();
    generateForm();
})