function plotAll(numbersList) {
    const game = document.getElementById("game");
    const ctx = game.getContext("2d");
    ctx.clearRect(0, 0, game.width, game.height);
    drawGame();
    
    for (let i = 0; i < 100; i++){
        for (let j = 0; j < 1000; j+= 10){
            const game = document.getElementById("game");
            const ctx = game.getContext("2d");
            ctx.beginPath();
            ctx.fillStyle = "red"
            ctx.arc((numbersList[i] * 10) - 0.5, (game.height - (numbersList[i] * 10)) + 0.5, 3, 0, 2 * Math.PI); // circles
            ctx.lineWidth = 1;
            ctx.fill();
            
            
            ctx.beginPath();
            ctx.fillStyle = "white"
            ctx.arc((numbersList[i] * 10) - 0.5, (game.height - j) + 0.5, 3, 0, 2 * Math.PI); // circles
            ctx.lineWidth = 1;
            ctx.fill();
            
            ctx.fillStyle = "green"
            ctx.beginPath();
            ctx.arc( j - .5, (game.height - (numbersList[i] * 10)) + 0.5, 3, 0, 2 * Math.PI); // circles
            ctx.lineWidth = 1;
            ctx.fill();
        }
    }
}