//javascript insertion point
document.addEventListener("DOMContentLoaded",()=>{
        generateFlashCard();
        checkAnswer();
    }
)

// Generates a random number
function randomNumber(){
    return Math.floor(Math.random() * 10);
}

// Generates 2 randoms numbers assigns each number to
// A unique <li>
function generateFlashCard(){
    var num1 = randomNumber();
    var num2 = randomNumber();
    document.getElementById("number1").innerText = num1;
    document.getElementById("number2").innerText = num2;
}


function checkAnswer(){
    console.log(num1);
    let answer = document.getElementById("answerCheck");
    let checkAnswer = document.getElementById("checkAnswer")
}