document.addEventListener('DOMContentLoaded',()=>{
    drawGame();
    xYSameValuePlot();
    buttonCreator(49)
    const game = document.getElementById("game");
    game.addEventListener("click", (e)=> addDot(e));
    
    const primeButton = document.getElementById("prime");
    primeButton.addEventListener("click", ()=> plotAll(primes(100)));

    const odd = document.getElementById("odd");
    odd.addEventListener("click", ()=>plotAll(oddList(100)));
});

function addDot(e){
    const game = document.getElementById("game");
    const ctx = game.getContext('2d');
    ctx.beginPath();
    ctx.arc((e.layerX), (e.layerY), 3, 0, 2 * Math.PI);
    ctx.lineWidth = 2;
    ctx.stroke();
}

function drawGame() {
    const game = document.getElementById("game");
    const ctx = game.getContext('2d');
    // ctx.fillStyle = 'rgb(200,0,0)';
    // ctx.fillRect(10,10,50,50);
    for (let i = 10; i < game.width; i+=10){
        ctx.beginPath(); 
        ctx.moveTo((i + .5),1); // straddle a pixle
        ctx.lineTo( (i + 0.5), 1000);
        ctx.stroke();

        ctx.beginPath(); 
        ctx.moveTo((i - 0.5),1); // straddle a pixle
        ctx.lineTo( (i - 0.5), 1000);
        ctx.stroke();
    }
    for (let i = 10; i < game.height; i+=10){
        ctx.beginPath(); 
        ctx.moveTo(1,(i + 0.5));
        ctx.lineTo( 1000, (i + 0.5));
        ctx.stroke();

        ctx.beginPath(); 
        ctx.moveTo(1,(i - 0.5));
        ctx.lineTo( 1000, (i - 0.5));
        ctx.stroke();
    }
}

function xYSameValuePlot () {
    const game = document.getElementById("game");
    const ctx = game.getContext('2d');
    for(let i = 10; i<game.width; i += 10){
        ctx.beginPath();
        ctx.arc(i, (game.height - i), 3, 0, 2 * Math.PI); // circles
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}

