function plotPrimes(){
    let primeList = primes(1000)
    const game = document.getElementById("game");
    const ctx = game.getContext("2d");
    ctx.clearRect(0, 0, game.width, game.height);
    drawGame()
let j = 10
    for (let i = 0; i < primeList.length; i++){
        for (let j = 0; j < 1000; j+= 10){
            plotAll(primes(1000), i, j)
            j+=10
        }
    }
}

//creates list of prime numbers upto 'input' 
//input should be integer
function primes(num){
    (arr = []).length = num; 
    arr.fill(true);
    for (i = 2; i< Math.sqrt(num); i++){
        if (arr[i]===true){
            let m = 1
            for(let j = i*i; j< num; j += i){
                arr[j] = false;
                m++;
            }
        }
    }
    let primes = [];
    for (let k= 0; k < arr.length; k++){
        if (arr[k] === true && k !== 0 && k !== 1){
            primes.push(k)
        }
    }
    return primes
}

// creates an array of all multiples of the input value
//input should be integer
function numberType(num){
    const group = []
    for (let i = 0; i < 100; i++){
        if(i%num === 0){
            group.push(i)
        }
    }
    return group
}

//creates array of all od numbers upto num
//input should be integer
function oddList(num) {
    const odd = []
    for (let i = 1; i < num; i+=2){
        odd.push(i)
    }
    return odd
}
    
