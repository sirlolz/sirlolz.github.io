function plotXY(){
    const form = document.querySelector(".plotXY")
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        plotPoint(event.target.inputX.value,event.target.inputY.value);
    });
}