
let arr = [10, 15, 20, 25, 30, 35, 40, 45, 50];

let min = arr.reduce((acc, curr) => {
    if(curr < acc){
        return curr;    
    } else {
        return acc;
    }
});

console.log(min);