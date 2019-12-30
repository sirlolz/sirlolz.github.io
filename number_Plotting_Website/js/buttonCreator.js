//input should be an integer
//programmatically creates buttons
//the buttons are used to change the display on canvas based on the devisor of the buttons number

function buttonCreator (num) {
    const nav = document.getElementById("nav");
    for ( let i = 1; i <= num; i++ ){
        let button  = document.createElement("li")
        button.innerHTML = `<button id=num${i}>plot ${i}'s</button>`;
        button.addEventListener("click", ()=>plotAll(numberType(i)));
        nav.appendChild(button);
    }
}