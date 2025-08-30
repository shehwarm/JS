let start = 100;
let end = 300;

function generateRandom(start,end){
    let diff = end - start;
    return Math.floor(Math.random() * diff ) + start;
}

